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
