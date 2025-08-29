"""
access_check_mysql.py

Access control checker using normalized tables in MySQL.
Wildcard rule: 0 in any scope field (program, service, entity, department, role) means "all".
"""

import pymysql

ALLOWED_OPS = {"create", "modify", "view", "print", "download", "approve", "delete", "update"}

class MySQLAccessChecker:
    """
    Access control checker for MySQL normalized schema.
    """

    _SQL = """
        SELECT 1
        FROM doc_permissions AS dp
        JOIN affiliations AS perm
          ON perm.affiliation_id = dp.affiliation_id
        JOIN affiliations AS usr
          ON usr.affiliation_id = %s
        WHERE dp.doc_type  = %s
          AND dp.operation = %s
          AND (
                (perm.program_id    = usr.program_id    OR perm.program_id    = 0 OR usr.program_id    = 0)
            AND (perm.service_id    = usr.service_id    OR perm.service_id    = 0 OR usr.service_id    = 0)
            AND (perm.entity_id     = usr.entity_id     OR perm.entity_id     = 0 OR usr.entity_id     = 0)
            AND (perm.department_id = usr.department_id OR perm.department_id = 0 OR usr.department_id = 0)
            AND (perm.role_id       = usr.role_id       OR perm.role_id       = 0 OR usr.role_id       = 0)
          )
        LIMIT 1;
    """

    def __init__(self, host, user, password, database):
        """
        Initialize the checker with MySQL connection params.
        Connection is established lazily per query.
        """
        self.conn = pymysql.connect(
            host=host, user=user, password=password, database=database,
            cursorclass=pymysql.cursors.Cursor, autocommit=True
        )

    def can_access(self, user_affiliation_id: int, doc_type: str, operation: str) -> bool:
        """
        Return True if the user affiliation is allowed to perform the operation on doc_type.
        """
        if operation not in ALLOWED_OPS:
            return False

        with self.conn.cursor() as cur:
            cur.execute(self._SQL, (user_affiliation_id, doc_type, operation))
            return cur.fetchone() is not None

    def close(self):
        """Close the DB connection."""
        self.conn.close()

checker = MySQLAccessChecker(
    host="localhost", user="root", password="root", database="event_scheduler2025"
)

allowed = checker.can_access(
    user_affiliation_id=4,
    doc_type="gradesheet",
    operation="modify"
)

print("Access granted?" , allowed)

checker.close()


'''
-- Table: Users (basic identity)
CREATE TABLE event_scheduler2025.new_users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE
);

-- Table: Affiliations
CREATE TABLE event_scheduler2025.new_affiliations (
    affiliation_id INT AUTO_INCREMENT PRIMARY KEY,
    program_id INT DEFAULT 0,
    service_id INT DEFAULT 0,
    entity_id INT DEFAULT 0,
    department_id INT DEFAULT 0,
    role VARCHAR(100) NOT NULL
);

-- User ↔ Affiliations (many-to-many mapping)
CREATE TABLE event_scheduler2025.new_user_affiliations (
    user_id INT NOT NULL,
    affiliation_id INT NOT NULL,
    PRIMARY KEY (user_id, affiliation_id),
    FOREIGN KEY (user_id) REFERENCES new_users(user_id),
    FOREIGN KEY (affiliation_id) REFERENCES new_affiliations(affiliation_id)
);

-- Table: Document Types
CREATE TABLE event_scheduler2025.new_doc_types (
    doc_type_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- Table: Task Types (actions)
CREATE TABLE event_scheduler2025.new_task_type (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task_type VARCHAR(100) NOT NULL UNIQUE
);

-- Table: Document Permissions
CREATE TABLE event_scheduler2025.new_doc_permissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    doc_type_id INT NOT NULL,
    task_type_id INT NOT NULL,
    affiliation_id INT NOT NULL,
    FOREIGN KEY (doc_type_id) REFERENCES new_doc_types(doc_type_id),
    FOREIGN KEY (task_type_id) REFERENCES new_task_type(id),
    FOREIGN KEY (affiliation_id) REFERENCES new_affiliations(affiliation_id)
);


-- Task Types (common actions)
INSERT INTO event_scheduler2025.new_task_type (task_type)
VALUES ('create'), ('modify'), ('view'), ('print'), ('download'),
       ('approve'), ('delete'), ('update');

-- Document Types
INSERT INTO event_scheduler2025.new_doc_types (name)
VALUES ('invoice'), ('contract'), ('report'), ('medical_record');

-- Affiliations (roles, departments, entities, services, programs)
INSERT INTO event_scheduler2025.new_affiliations (program_id, service_id, entity_id, department_id, role)
VALUES 
  (1, 10, 100, 1000, 'Admin'),
  (1, 10, 100, 1001, 'Manager'),
  (2, 20, 200, 2000, 'Staff'),
  (3, 30, 300, 3000, 'Reviewer');


-- Users
INSERT INTO event_scheduler2025.new_users (username, email)
VALUES ('alice', 'alice@example.com'),
       ('bob', 'bob@example.com'),
       ('charlie', 'charlie@example.com');

-- Map affiliations
INSERT INTO event_scheduler2025.new_user_affiliations (user_id, affiliation_id)
VALUES 
  (1, 1),  -- Alice is Admin
  (2, 2),  -- Bob is Manager
  (2, 3),  -- Bob is also Staff
  (3, 4);  -- Charlie is Reviewer

-- Example: Admin (affiliation_id = 1) can do everything on invoices
INSERT INTO event_scheduler2025.new_doc_permissions (doc_type_id, task_type_id, affiliation_id)
SELECT d.doc_type_id, t.id, 1
FROM event_scheduler2025.new_doc_types d
JOIN event_scheduler2025.new_task_type t
WHERE d.name = 'invoice';

-- Example: Manager (affiliation_id = 2) can only view + modify contracts
INSERT INTO event_scheduler2025.new_doc_permissions (doc_type_id, task_type_id, affiliation_id)
SELECT d.doc_type_id, t.id, 2
FROM event_scheduler2025.new_doc_types d
JOIN event_scheduler2025.new_task_type t
WHERE d.name = 'contract' AND t.task_type IN ('view','modify');

'''