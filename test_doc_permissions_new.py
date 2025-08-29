import pymysql

def has_permission_new(conn, doc_type, task_type, user_affiliations):
    """
    Check if a user (with one or more affiliations) has permission
    for a given doc_type + task_type.

    Args:
        conn: pymysql connection
        doc_type: str (e.g. "contract")
        task_type: str (e.g. "modify")
        user_affiliations: list of ints (affiliation IDs, e.g. [1, 2])

    Returns:
        True if permission exists, False otherwise.
    """
    if not user_affiliations:
        return False  # no affiliations -> no permission

    query = f"""
        SELECT 1
        FROM event_scheduler2025.new_doc_permissions dp
        JOIN event_scheduler2025.new_doc_types dt
          ON dt.doc_type_id = dp.doc_type_id
        JOIN event_scheduler2025.new_task_type tt
          ON tt.id = dp.task_type_id
        JOIN event_scheduler2025.new_user_affiliations ua
          ON ua.id = dp.user_affiliation_id
        WHERE dt.name = %s
          AND tt.task_type = %s
          AND ua.affiliation_id IN ({",".join(["%s"] * len(user_affiliations))})
        LIMIT 1
    """

    with conn.cursor() as cur:
        cur.execute(query, (doc_type, task_type, *user_affiliations))
        return cur.fetchone() is not None


def get_allowed_tasks(conn, doc_type, user_affiliations):
    """
    Get all allowed task types for a given doc_type and user's affiliations.
    """
    if not user_affiliations:
        return []

    query = f"""
        SELECT DISTINCT tt.task_type
        FROM event_scheduler2025.new_doc_permissions dp
        JOIN event_scheduler2025.new_doc_types dt
          ON dt.doc_type_id = dp.doc_type_id
        JOIN event_scheduler2025.new_task_type tt
          ON tt.id = dp.task_type_id
        JOIN event_scheduler2025.new_user_affiliations ua
          ON ua.id = dp.user_affiliation_id
        WHERE dt.name = %s
          AND ua.affiliation_id IN ({",".join(["%s"] * len(user_affiliations))})
    """

    with conn.cursor() as cur:
        cur.execute(query, (doc_type, *user_affiliations))
        return [row[0] for row in cur.fetchall()]


def get_permission_map(conn, user_affiliations):
    """
    Get all doc_types and their allowed task types for a user based on affiliation(s).
    """
    if not user_affiliations:
        return {}

    query = f"""
        SELECT dt.name, tt.task_type
        FROM event_scheduler2025.new_doc_permissions dp
        JOIN event_scheduler2025.new_doc_types dt ON dp.doc_type_id = dt.doc_type_id
        JOIN event_scheduler2025.new_task_type tt ON dp.task_type_id = tt.id
        JOIN event_scheduler2025.new_user_affiliations ua ON ua.id = dp.user_affiliation_id
        WHERE ua.affiliation_id IN ({",".join(["%s"] * len(user_affiliations))})
    """

    permissions = {}
    with conn.cursor() as cur:
        cur.execute(query, tuple(user_affiliations))
        for doc_type, task_type in cur.fetchall():
            permissions.setdefault(doc_type, []).append(task_type)

    return permissions


# === Test Examples ===
conn = pymysql.connect(
    host="localhost",
    user="root",
    password="root",
    database="event_scheduler2025",
    port=3306
)

# Example 1: User has affiliation 1 and wants to create 'Invoice'
user_affiliations = [1]
print("Example 1:", has_permission_new(conn, "Invoice", "Create", user_affiliations))

# Example 2: User with affiliation 2 wants to modify 'Invoice'
user_affiliations = [2]
print("Example 2:", has_permission_new(conn, "Invoice", "Update", user_affiliations))

# Example 3: User has affiliations 1 and 2, check allowed tasks for 'Invoice'
user_affiliations = [1, 2]
tasks = get_allowed_tasks(conn, "Invoice", user_affiliations)
print("Example 3: Allowed tasks for 'Invoice':", tasks)

# Example 4: User has affiliations 1 and 2, get full permission map
user_affiliations = [1, 2]
perm_map = get_permission_map(conn, user_affiliations)
print("Example 4: Full permission map:", perm_map)
