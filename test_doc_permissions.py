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
        WHERE dt.name = %s
          AND tt.task_type = %s
          AND dp.affiliation_id IN ({",".join(["%s"] * len(user_affiliations))})
        LIMIT 1
    """

    with conn.cursor() as cur:
        cur.execute(query, (doc_type, task_type, *user_affiliations))
        return cur.fetchone() is not None

def get_allowed_tasks(conn, doc_type, user_affiliations):
    """
    Get all allowed task types for a given doc_type and user's affiliations.

    Args:
        conn: pymysql connection
        doc_type: str (e.g. "contract")
        user_affiliations: list of ints (affiliation IDs, e.g. [1, 2])

    Returns:
        List of allowed task types (e.g. ["modify", "delete"])
    """
    if not user_affiliations:
        return []  # no affiliations -> no tasks

    query = f"""
        SELECT DISTINCT tt.task_type
        FROM event_scheduler2025.new_doc_permissions dp
        JOIN event_scheduler2025.new_doc_types dt
          ON dt.doc_type_id = dp.doc_type_id
        JOIN event_scheduler2025.new_task_type tt
          ON tt.id = dp.task_type_id
        WHERE dt.name = %s
          AND dp.affiliation_id IN ({",".join(["%s"] * len(user_affiliations))})
    """

    with conn.cursor() as cur:
        cur.execute(query, (doc_type, *user_affiliations))
        return [row[0] for row in cur.fetchall()]

def get_permission_map(conn, user_affiliations):
    """
    Get all doc_types and their allowed task types for a user based on affiliation(s).

    Args:
        conn: MySQL connection object
        user_affiliations (list[int]): List of affiliation IDs for the user

    Returns:
        dict: { "gradesheet": ["delete", "modify"],
                "transcript": ["create", "update"], ... }
    """
    if not user_affiliations:
        return {}

    query = f"""
        SELECT dt.name, tt.task_type
        FROM new_doc_permissions dp
        JOIN new_doc_types dt ON dp.doc_type_id = dt.doc_type_id
        JOIN new_task_type tt ON dp.task_type_id = tt.id
        WHERE dp.affiliation_id IN ({",".join(["%s"] * len(user_affiliations))})
    """

    permissions = {}
    with conn.cursor() as cur:
        cur.execute(query, tuple(user_affiliations))
        for doc_type, task_type in cur.fetchall():
            permissions.setdefault(doc_type, []).append(task_type)

    return permissions

# Connect to DB
conn = pymysql.connect(
    host="localhost",
    user="root",
    password="root",
    database="event_scheduler2025",  # or your db name
    port=3306
)

# === Permission Checking Examples ===

# Example 1: User has affiliation 4 and wants to modify 'research'
user_affiliations = [4]
print("Example 1:", has_permission_new(conn, "research", "modification", user_affiliations))
# ✅ Expected: True (because research + modification + aff 4 exists)

# Example 2: User with affiliation 3 wants to delete 'transcript'
user_affiliations = [3]
print("Example 2:", has_permission_new(conn, "transcript", "deletion", user_affiliations))
# ❌ Expected: False (no such permission)

# Example 3: User has affiliations 1 and 2, check allowed tasks for 'gradesheet'
user_affiliations = [1, 2]
tasks = get_allowed_tasks(conn, "gradesheet", user_affiliations)
print("Example 3: Allowed tasks for 'gradesheet':", tasks)
# Example output: ["deletion", "modification"]

# Example 4: User has affiliations 1 and 2, get full permission map
user_affiliations = [1, 2]
perm_map = get_permission_map(conn, user_affiliations)
print("Example 4: Full permission map:", perm_map)
# Example:
# {
#   "gradesheet": ["deletion", "modification"],
#   "transcript": ["creation", "viewing"]
# }
