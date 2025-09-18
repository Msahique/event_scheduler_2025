import mysql.connector
from mysql.connector import Error
import json
from datetime import datetime
#(db_name, db_type, connection_string, document, operation, payload) 
#("event_scheduler2025", "mysql", {"host":'localhost',"database":'event_scheduler2025',"user":'root',"password":'root'}, "entity", "update")

def create_connection(db):
    """Create and return a database connection."""
    try:
        connection = mysql.connector.connect(
            host='localhost',
            database='event_scheduler2025',
            user='root',
            password='Blr@2025'
        )
        return connection
    except Error as e:
        print(f"Error while connecting to database: {e}")
        return None
    
def update_entry(db, table_name, update_data, where_data):
    """
    Update a record in the database table.

    :param db: Database name
    :param table_name: Table name
    :param update_data: Dictionary of columns to update
    :param where_data: Dictionary of conditions for WHERE clause
    :return: Number of rows updated or False on failure
    """
    print("Starting update_entry function...")

    # Ensure JSON fields are properly serialized
    if "schedule" in update_data and isinstance(update_data["schedule"], dict):
        update_data["schedule"] = json.dumps(update_data["schedule"])  # Convert dict to JSON string

    print("Processed update_data:", update_data)
    
    try:
        
        connection = create_connection(db)
        with connection.cursor() as cursor:
            
            # Construct SQL query dynamically
            set_clause = ', '.join([f"{key} = %s" for key in update_data.keys()])
            where_clause = ' AND '.join([f"{key} = %s" for key in where_data.keys()])
            update_values = list(update_data.values()) + list(where_data.values())
            print("Update Values (before execution):", update_values)
            query = f"""
            UPDATE {table_name}
            SET {set_clause}
            WHERE {where_clause};
            """

            print("Executing Query:", query)
            print("Values:", update_values)

            cursor.execute(query, update_values)
            connection.commit()
            
            print(f"Rows affected: {cursor.rowcount}")
            return cursor.rowcount  # Return number of rows updated

    except Error as e:
        print(f"Database Error: {e}")
        return False

    finally:
        if connection.is_connected():
            connection.close()
            print("Database connection closed.")

def delete_entry(db, table_name, where_data):
    connection = None
    cursor = None
    try:
        connection = create_connection(db)
        if connection and connection.is_connected():
            cursor = connection.cursor()
            print(where_data)
            for key in where_data.keys():
                print("key: ",key)
            where_clause = ' AND '.join([f"{key} = %s" for key in where_data.keys()])
            where_values = list(where_data.values())
            query = f"DELETE FROM {table_name} WHERE {where_clause};"
            print(query, where_values)
            cursor.execute(query, where_values)
            connection.commit()
            return cursor.rowcount > 0
    except Error as e:
        print(f"Error: {e}")
        return False
    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()

def get_json_column(db, table_name):
    """Fetch JSON column names dynamically for a given table"""
    try:
        connection = create_connection(db)
        cursor = connection.cursor()
        
        query = f"SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = %s AND DATA_TYPE = 'json'"
        cursor.execute(query, (table_name,))
        json_columns = {col[0]: col[0] for col in cursor.fetchall()}  # Auto-map JSON columns

        print(f"[INFO] JSON Columns for table '{table_name}': {json_columns}")  # Debugging log
        return json_columns
    except Error as e:
        print(f"[ERROR] Error fetching JSON columns: {e}")
        return {}
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()

'''
def get_data_working(db, table_name, select_fields, where_data=None, exact_match=False):
    """
    Retrieves data from MySQL, supporting JSON field access and optional exact match filters (e.g., for login).

    Args:
    - db (str): Database name.
    - table_name (str): Table name.
    - select_fields (list): Fields to retrieve (supports JSON fields).
    - where_data (dict, optional): Filters to apply (supports JSON fields).
    - exact_match (bool): Use '=' for exact comparison (e.g., login) or 'LIKE' for pattern search.

    Returns:
    - list: Retrieved rows or empty list.
    """
    connection = None
    cursor = None
    try:
        connection = create_connection(db)
        if connection and connection.is_connected():
            cursor = connection.cursor(dictionary=True)

            # Build SELECT clause
            formatted_select_fields = []
            for field in select_fields:
                if "." in field:
                    column, *json_parts = field.split(".")
                    json_path = ".".join(json_parts)
                    formatted_select_fields.append(
                        f"JSON_UNQUOTE(JSON_EXTRACT({column}, '$.{json_path}')) AS `{field}`"
                    )
                else:
                    formatted_select_fields.append(field)
            select_clause = ', '.join(formatted_select_fields)
            query = f"SELECT {select_clause} FROM {table_name}"

            # Build WHERE clause
            where_clauses = []
            values = []
            if where_data:
                for key, value in where_data.items():
                    column, *json_parts = key.split(".")
                    if json_parts:
                        json_path = ".".join(json_parts)
                        clause = f"JSON_UNQUOTE(JSON_EXTRACT({column}, '$.{json_path}'))"
                    else:
                        clause = column

                    if exact_match:
                        where_clauses.append(f"{clause} = %s")
                        values.append(value)
                    else:
                        where_clauses.append(f"{clause} LIKE %s")
                        values.append(f"%{value}%")

                query += f" WHERE {' AND '.join(where_clauses)}"

            print(f"[INFO] Final Query: {query}")
            print(f"[INFO] Values: {values}")
            cursor.execute(query, values)
            return cursor.fetchall()
    except Error as e:
        print(f"[ERROR] {e}")
        return []
    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()
'''

def get_token_details(token,db):
    """Retrieve data from token_details table for a given token."""
    query = """
    SELECT membership_id, program, entity, role, token
    FROM token_details
    WHERE token = %s
    """

    connection = create_connection(db)
    if connection is None:
        return None
    
    try:
        cursor = connection.cursor(dictionary=True)
        cursor.execute(query, (token,))
        result = cursor.fetchone()
        return result
    except Error as e:
        print(f"Error while fetching data: {e}")
        return None
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()

def check_duplicate_entry(connection, table_name, insert_data):
    """ Check which columns caused the duplicate entry. """
    cursor = connection.cursor(dictionary=True)
    conditions = ' AND '.join([f"{col} = %s" for col in insert_data.keys()])
    check_query = f"SELECT * FROM {table_name} WHERE {conditions} LIMIT 1;"
    
    try:
        cursor.execute(check_query, list(insert_data.values()))
        result = cursor.fetchone()
        if result:
            duplicate_columns = [col for col in insert_data if result[col] == insert_data[col]]
            return True, duplicate_columns
        return False, []
    except Error as e:
        print(f"Error checking duplicate entry: {e}")
        return False, []
    finally:
        cursor.close()

# This function handles inserting data into a table with version control if duplicates are found.
'''
def insert_ignore(db, table_name, insert_data):
    connection = create_connection(db)
    cursor = None
    try:
        if connection and connection.is_connected():
            cursor = connection.cursor()

            # Add created_at timestamp
            if 'created_at' not in insert_data:
                insert_data['created_at'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

            insert_columns = ', '.join(insert_data.keys())
            insert_placeholders = ', '.join(['%s'] * len(insert_data))
            insert_values = list(insert_data.values())

            query = f"""
            INSERT IGNORE INTO {table_name} ({insert_columns})
            VALUES ({insert_placeholders});
            """
            print(f"Executing Query: {query}")
            cursor.execute(query, insert_values)
            connection.commit()

            if cursor.rowcount > 0:
                print(f"Row inserted into {table_name} successfully.")
                return True, "Row inserted into entity successfully."
            else:
                is_duplicate, duplicate_columns = check_duplicate_entry(connection, table_name, insert_data)
                if is_duplicate:
                    print(f"Insert ignored due to duplicate entry in {table_name}. Conflicting columns: {duplicate_columns}")
                    user_input = input("Duplicate entry found. Do you want to insert with version control? (y/n): ").strip().lower()

                    if user_input == 'y':
                        if 'version' not in insert_data:
                            insert_data['version'] = 'v1'
                        else:
                            # Find max version for same identifying fields (excluding version)
                            condition_clauses = " AND ".join([f"{col} = %s" for col in duplicate_columns if col != 'version'])
                            condition_values = [insert_data[col] for col in duplicate_columns if col != 'version']
                            version_query = f"SELECT version FROM {table_name} WHERE {condition_clauses} ORDER BY version DESC LIMIT 1"
                            cursor.execute(version_query, condition_values)
                            result = cursor.fetchone()

                            if result:
                                latest_version = result[0]
                                try:
                                    next_version_number = int(latest_version.lstrip('v')) + 1
                                    insert_data['version'] = f"v{next_version_number}"
                                except:
                                    insert_data['version'] = 'v2'
                            else:
                                insert_data['version'] = 'v1'

                        # Retry insert
                        insert_data['created_at'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')  # Update timestamp
                        insert_columns = ', '.join(insert_data.keys())
                        insert_placeholders = ', '.join(['%s'] * len(insert_data))
                        insert_values = list(insert_data.values())
                        retry_query = f"""
                        INSERT IGNORE INTO {table_name} ({insert_columns})
                        VALUES ({insert_placeholders});
                        """
                        print(f"Retrying Insert with version: {insert_data['version']}")
                        cursor.execute(retry_query, insert_values)
                        connection.commit()

                        if cursor.rowcount > 0:
                            return True, f"Row inserted with version {insert_data['version']}."
                        else:
                            return False, "Retry insert failed even with versioning."
                    else:
                        return False, f"Insert ignored due to duplicate entry. Conflicting columns: {duplicate_columns}"
                else:
                    return False, "Insert ignored, but no exact duplicate found."
    except Error as e:
        print(f"Error: {e}")
        return False, str(e)
    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()
'''

def is_affiliation_allowed(table_name, user_affiliations, db):
    """
    Determine the list of affiliation_ids from the target table that the user is allowed to access.
    Supports wildcard logic in affiliation table (e.g., '*' for universal access).
    
    Args:
        table_name (str): Target data table (e.g. 'doc_templates')
        user_affiliations (list): List of user's affiliation dicts
        db (str): Database name
    
    Returns:
        set: Set of allowed affiliation_ids from the target table
    """
    try:
        print(f"[DEBUG] Checking affiliations for table: {table_name}")
        connection = create_connection(db)
        if not connection or not connection.is_connected():
            print("[ERROR] Could not connect to DB.")
            return set()

        cursor = connection.cursor(dictionary=True)

        # Fetch all rows from affiliation table
        cursor.execute("SELECT * FROM affiliation")
        all_affiliations = cursor.fetchall()

        print(f"[DEBUG] Loaded {len(all_affiliations)} rows from affiliation table")

        # Build allowed set
        allowed_aff_ids = set()
        for row in all_affiliations:
            for user_aff in user_affiliations:
                match = True
                for field in ['program', 'entity', 'department', 'service', 'role']:
                    row_val = row.get(field, '').strip().lower()
                    user_val = str(user_aff.get(field, '')).strip().lower()
                    if row_val != '*' and row_val != user_val:
                        match = False
                        break
                if match:
                    allowed_aff_ids.add(row['affiliation_id'])
                    break  # No need to check more user affiliations for this row

        print(f"[DEBUG] Final allowed affiliation_ids: {allowed_aff_ids}")
        return allowed_aff_ids

    except Exception as e:
        print(f"[ERROR] Exception in is_affiliation_allowed(): {e}")
        return set()
    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()
            print("[INFO] Closed DB connection in affiliation check.")
'''
def get_data(db, table_name, select_fields, where_data=None, exact_match=False, user_affiliations=None):
    print("[init] where_data:", where_data)
    print("[init] exact_match:", exact_match)
    print("[init] user_affiliations:", user_affiliations)
    connection = None
    cursor = None

    try:
        print(f"[START] Querying table: `{table_name}` in DB: `{db}`")

        connection = create_connection(db)
        if not connection or not connection.is_connected():
            print("[ERROR] Failed to connect to database.")
            return []

        cursor = connection.cursor(dictionary=True)

        formatted_select_fields = []
        for field in select_fields:
            if "." in field:
                column, *json_parts = field.split(".")
                json_path = ".".join(json_parts)
                formatted_select_fields.append(
                    f"JSON_UNQUOTE(JSON_EXTRACT({column}, '$.{json_path}')) AS `{field}`"
                )
            else:
                formatted_select_fields.append(field)

        select_clause = ", ".join(formatted_select_fields)
        query = f"SELECT {select_clause} FROM {table_name}"

        where_clauses = []
        values = []

        if where_data:
            where_data = {k: v for k, v in where_data.items() if v != "*"}
            print("[DEBUG] Filtered where_data:", where_data)

            for key, value in where_data.items():
                column, *json_parts = key.split(".")
                clause = (
                    f"JSON_UNQUOTE(JSON_EXTRACT({column}, '$.{'.'.join(json_parts)}'))"
                    if json_parts else column
                )
                if exact_match:
                    where_clauses.append(f"{clause} = %s")
                    values.append(value)
                else:
                    where_clauses.append(f"{clause} LIKE %s")
                    values.append(f"%{value}%")
                print(f"[DEBUG] WHERE condition added: {where_clauses[-1]} with value {values[-1]}")

        if user_affiliations:
            allowed_ids = is_affiliation_allowed(table_name, user_affiliations, db)
            if not allowed_ids:
                print("[INFO] No affiliation matches. Returning empty result.")
                return []

            placeholders = ','.join(['%s'] * len(allowed_ids))
            where_clauses.append(f"affiliation_id IN ({placeholders})")
            values.extend(list(allowed_ids))


        if where_clauses:
            query += f" WHERE {' AND '.join(where_clauses)}"

        print("[INFO] Final SQL Query:", query)
        print("[INFO] Parameters:", values)

        cursor.execute(query, values)
        results = cursor.fetchall()
        print(f"[INFO] Query returned {len(results)} result(s).")
        return results

    except Exception as e:
        print(f"[ERROR] Exception in get_data(): {e}")
        return []

    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()
            print("[INFO] Database connection closed.")
'''


#filter_json={"block_size":10, "block_number":1,"filter":[
# {"parameter":"","datatype":"","condition":"","from":"", "to":""},
# {"parameter":"name","datatype":"string","condition":"=","from":"Sahique", "to":""},
# {"parameter":"name","datatype":"string","condition":"LIKE","from":"Sah", "to":""},
# {"parameter":"DOB","datatype":"date","condition":"=","from":"01/01/1990", "to":"01/12/2000"},
# {"parameter":"age","datatype":"number","condition":"LIKE","from":"10", "to":"25"}
#]}

'''
def get_data(db,table_name,select_fields,where_data=None,exact_match=False,user_affiliations=None,block_size=None,block_number=None):
    
    print("[init] where_data:", where_data)
    print("[init] exact_match:", exact_match)
    print("[init] user_affiliations:", user_affiliations)
    print("[init] block_size:", block_size)
    print("[init] block_number:", block_number)

    connection = None
    cursor = None

    try:
        print(f"[START] Querying table: `{table_name}` in DB: `{db}`")

        connection = create_connection(db)
        if not connection:
            print("[ERROR] Failed to connect to database.")
            return []

        cursor = connection.cursor(dictionary=True)

        # ✅ Build select fields with JSON support
        formatted_select_fields = []
        if select_fields == ['*']:
            formatted_select_fields = ["*"]
        else:
            for field in select_fields:
                if "." in field:
                    column, *json_parts = field.split(".")
                    json_path = ".".join(json_parts)
                    formatted_select_fields.append(
                        f"JSON_UNQUOTE(JSON_EXTRACT({column}, '$.{json_path}')) AS `{field}`"
                    )
                else:
                    formatted_select_fields.append(field)

        select_clause = ", ".join(formatted_select_fields)
        query = f"SELECT {select_clause} FROM {table_name}"

        where_clauses = []
        values = []

        # ✅ Add WHERE conditions
        if where_data:
            where_data = {k: v for k, v in where_data.items() if v != "*"}
            print("[DEBUG] Filtered where_data:", where_data)

            for key, value in where_data.items():
                column, *json_parts = key.split(".")
                clause = (
                    f"JSON_UNQUOTE(JSON_EXTRACT({column}, '$.{'.'.join(json_parts)}'))"
                    if json_parts else column
                )
                if exact_match:
                    where_clauses.append(f"{clause} = %s")
                    values.append(value)
                else:
                    where_clauses.append(f"{clause} LIKE %s")
                    values.append(f"%{value}%")
                print(f"[DEBUG] WHERE condition added: {where_clauses[-1]} with value {values[-1]}")

        # ✅ Restrict by user affiliations
        if user_affiliations:
            allowed_ids = is_affiliation_allowed(table_name, user_affiliations, db)
            if not allowed_ids:
                print("[INFO] No affiliation matches. Returning empty result.")
                return []

            placeholders = ','.join(['%s'] * len(allowed_ids))
            where_clauses.append(f"affiliation_id IN ({placeholders})")
            values.extend(list(allowed_ids))

        if where_clauses:
            query += f" WHERE {' AND '.join(where_clauses)}"

        # ✅ Add pagination with LIMIT and OFFSET
        if block_size and block_number:
            offset = (block_number - 1) * block_size
            query += f" LIMIT %s OFFSET %s"
            values.extend([block_size, offset])

        print("[INFO] Final SQL Query:", query)
        print("[INFO] Parameters:", values)

        cursor.execute(query, values)
        results = cursor.fetchall()
        print(f"[INFO] Query returned {len(results)} result(s).")
        return results

    except Exception as e:
        print(f"[ERROR] Exception in get_data(): {e}")
        return []

    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()
            print("[INFO] Database connection closed.")
'''

def get_data(db, table_name, select_fields, where_data=None, exact_match=False,
             user_affiliations=None, block_size=None, block_number=None):
    
    print("[init] where_data:", where_data)
    print("[init] exact_match:", exact_match)
    print("[init] user_affiliations:", user_affiliations)
    print("[init] block_size:", block_size)
    print("[init] block_number:", block_number)

    connection = None
    cursor = None

    try:
        print(f"[START] Querying table: `{table_name}` in DB: `{db}`")

        connection = create_connection(db)
        if not connection:
            print("[ERROR] Failed to connect to database.")
            return []

        cursor = connection.cursor(dictionary=True)

        # ✅ Build select fields with JSON support
        formatted_select_fields = []
        if select_fields == ['*']:
            formatted_select_fields = ["*"]
        else:
            for field in select_fields:
                if "." in field:
                    column, *json_parts = field.split(".")
                    json_path = ".".join(json_parts)
                    formatted_select_fields.append(
                        f"JSON_UNQUOTE(JSON_EXTRACT({column}, '$.{json_path}')) AS `{field}`"
                    )
                else:
                    formatted_select_fields.append(field)

        select_clause = ", ".join(formatted_select_fields)
        query = f"SELECT {select_clause} FROM {table_name}"

        where_clauses = []
        values = []

        # ✅ Add WHERE conditions
        if where_data:
            where_data = {k: v for k, v in where_data.items() if v != "*"}
            print("[DEBUG] Filtered where_data:", where_data)

            for key, value in where_data.items():
                column, *json_parts = key.split(".")
                clause = (
                    f"JSON_UNQUOTE(JSON_EXTRACT({column}, '$.{'.'.join(json_parts)}'))"
                    if json_parts else column
                )

                # ✅ Handle dict-based conditions
                if isinstance(value, dict):
                    if "between" in value:
                        where_clauses.append(f"{clause} BETWEEN %s AND %s")
                        values.extend(value["between"])
                    if "gte" in value:
                        where_clauses.append(f"{clause} >= %s")
                        values.append(value["gte"])
                    if "lte" in value:
                        where_clauses.append(f"{clause} <= %s")
                        values.append(value["lte"])
                else:
                    # ✅ Keep old behavior (exact or LIKE)
                    if exact_match:
                        where_clauses.append(f"{clause} = %s")
                        values.append(value)
                    else:
                        where_clauses.append(f"{clause} LIKE %s")
                        values.append(f"%{value}%")

                print(f"[DEBUG] WHERE condition(s) so far: {where_clauses}")
                print(f"[DEBUG] Values so far: {values}")

        # ✅ Restrict by user affiliations
        if user_affiliations:
            allowed_ids = is_affiliation_allowed(table_name, user_affiliations, db)
            if not allowed_ids:
                print("[INFO] No affiliation matches. Returning empty result.")
                return []

            placeholders = ','.join(['%s'] * len(allowed_ids))
            where_clauses.append(f"affiliation_id IN ({placeholders})")
            values.extend(list(allowed_ids))

        if where_clauses:
            query += f" WHERE {' AND '.join(where_clauses)}"

        # ✅ Add pagination with LIMIT and OFFSET
        if block_size and block_number:
            offset = (block_number - 1) * block_size
            query += f" LIMIT %s OFFSET %s"
            values.extend([block_size, offset])

        print("[INFO] Final SQL Query:", query)
        print("[INFO] Parameters:", values)

        cursor.execute(query, values)
        results = cursor.fetchall()
        print(f"[INFO] Query returned {len(results)} result(s).")
        return results

    except Exception as e:
        print(f"[ERROR] Exception in get_data(): {e}")
        return []

    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()
            print("[INFO] Database connection closed.")


def get_data_list_working_old(db, table_name, select_fields, where_data=None,
             user_affiliations=None, block_size=None, block_number=None):
    
    print("[init] where_data:", where_data)
    connection = None
    cursor = None

    try:
        print(f"[START] Querying table: `{table_name}` in DB: `{db}`")

        connection = create_connection(db)
        if not connection:
            print("[ERROR] Failed to connect to database.")
            return []

        cursor = connection.cursor(dictionary=True)

        # ✅ Build SELECT clause (support JSON fields)
        formatted_select_fields = []
        if select_fields == ['*']:
            formatted_select_fields = ["*"]
        else:
            for field in select_fields:
                if "." in field:
                    column, *json_parts = field.split(".")
                    json_path = ".".join(json_parts)
                    formatted_select_fields.append(
                        f"JSON_UNQUOTE(JSON_EXTRACT({column}, '$.{json_path}')) AS `{field}`"
                    )
                else:
                    formatted_select_fields.append(field)

        select_clause = ", ".join(formatted_select_fields)
        query = f"SELECT {select_clause} FROM {table_name}"

        where_clauses = []
        values = []

        # ✅ Handle new where_data schema
        if where_data:
            for key, condition in where_data.items():
                column, *json_parts = key.split(".")
                clause = (
                    f"JSON_UNQUOTE(JSON_EXTRACT({column}, '$.{'.'.join(json_parts)}'))"
                    if json_parts else column
                )

                if isinstance(condition, dict):
                    col_type = condition.get("type", "string")
                    exact = condition.get("exact_match", False)
                    vals = condition.get("values")

                    if vals is None:
                        continue

                    # Ensure values is iterable
                    if not isinstance(vals, (list, tuple)):
                        vals = [vals]

                    if exact:
                        # ✅ Exact match or IN
                        if len(vals) == 1:
                            where_clauses.append(f"{clause} = %s")
                            values.append(vals[0])
                        else:
                            placeholders = ",".join(["%s"] * len(vals))
                            where_clauses.append(f"{clause} IN ({placeholders})")
                            values.extend(vals)
                    else:
                        # ✅ LIKE / partial match
                        if col_type == "number":
                            # treat as >=, <= range if 2 values given
                            if len(vals) == 2:
                                where_clauses.append(f"{clause} BETWEEN %s AND %s")
                                values.extend(vals)
                            else:
                                placeholders = ",".join(["%s"] * len(vals))
                                where_clauses.append(f"{clause} IN ({placeholders})")
                                values.extend(vals)
                        else:  # string → LIKE
                            if len(vals) == 1:
                                where_clauses.append(f"{clause} LIKE %s")
                                values.append(f"%{vals[0]}%")
                            else:
                                like_parts = []
                                for v in vals:
                                    like_parts.append(f"{clause} LIKE %s")
                                    values.append(f"%{v}%")
                                where_clauses.append("(" + " OR ".join(like_parts) + ")")

                else:
                    # ✅ Fallback to simple exact or LIKE
                    where_clauses.append(f"{clause} = %s")
                    values.append(condition)

        # ✅ Restrict by user affiliations
        if user_affiliations:
            allowed_ids = is_affiliation_allowed(table_name, user_affiliations, db)
            if not allowed_ids:
                print("[INFO] No affiliation matches. Returning empty result.")
                return []
            placeholders = ",".join(["%s"] * len(allowed_ids))
            where_clauses.append(f"affiliation_id IN ({placeholders})")
            values.extend(list(allowed_ids))

        if where_clauses:
            query += " WHERE " + " AND ".join(where_clauses)

        # ✅ Pagination
        if block_size and block_number:
            offset = (block_number - 1) * block_size
            query += " LIMIT %s OFFSET %s"
            values.extend([block_size, offset])

        print("[INFO] Final SQL Query:", query)
        print("[INFO] Parameters:", values)

        cursor.execute(query, values)
        results = cursor.fetchall()
        print(f"[INFO] Query returned {len(results)} result(s).")
        return results

    except Exception as e:
        print(f"[ERROR] Exception in get_data(): {e}")
        return []

    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()
            print("[INFO] Database connection closed.")

def get_data_list(db, table_name, select_fields, where_data=None,
             user_affiliations=None, block_size=None, block_number=None):
    
    print("[init] where_data:", where_data)
    connection = None
    cursor = None

    try:
        print(f"[START] Querying table: `{table_name}` in DB: `{db}`")

        connection = create_connection(db)
        if not connection:
            print("[ERROR] Failed to connect to database.")
            return []

        cursor = connection.cursor(dictionary=True)

        # ✅ Build SELECT clause (support JSON fields)
        formatted_select_fields = []
        if select_fields == ['*']:
            formatted_select_fields = ["*"]
        else:
            for field in select_fields:
                if "." in field:
                    column, *json_parts = field.split(".")
                    json_path = ".".join(json_parts)
                    formatted_select_fields.append(
                        f"JSON_UNQUOTE(JSON_EXTRACT({column}, '$.{json_path}')) AS `{field}`"
                    )
                else:
                    formatted_select_fields.append(field)

        select_clause = ", ".join(formatted_select_fields)
        query = f"SELECT {select_clause} FROM {table_name}"

        where_clauses = []
        values = []

        # ✅ Handle new where_data schema
        if where_data:
            for key, condition in where_data.items():
                column, *json_parts = key.split(".")
                clause = (
                    f"JSON_UNQUOTE(JSON_EXTRACT({column}, '$.{'.'.join(json_parts)}'))"
                    if json_parts else column
                )

                if isinstance(condition, dict):
                    col_type = condition.get("type", "string")
                    exact = condition.get("exact_match", False)
                    vals = condition.get("values")

                    if vals is None:
                        continue

                    # Ensure values is iterable
                    if not isinstance(vals, (list, tuple)):
                        vals = [vals]

                    if exact:
                        # ✅ Exact match or IN
                        if len(vals) == 1:
                            where_clauses.append(f"{clause} = %s")
                            values.append(vals[0])
                        else:
                            placeholders = ",".join(["%s"] * len(vals))
                            where_clauses.append(f"{clause} IN ({placeholders})")
                            values.extend(vals)
                    else:
                        if col_type == "number":
                            # ✅ Odd count of values → invalid
                            if len(vals) % 2 != 0:
                                raise ValueError(
                                    f"Invalid range specification for {key}: {vals}. "
                                    "Number of values must be even to form ranges."
                                )

                            # ✅ Build ranges from pairs
                            range_clauses = []
                            for i in range(0, len(vals), 2):
                                start, end = vals[i], vals[i+1]
                                range_clauses.append(f"{clause} BETWEEN %s AND %s")
                                values.extend([start, end])

                            # Combine multiple ranges with OR
                            where_clauses.append("(" + " OR ".join(range_clauses) + ")")
                        else:
                            # ✅ String partial match
                            if len(vals) == 1:
                                where_clauses.append(f"{clause} LIKE %s")
                                values.append(f"%{vals[0]}%")
                            else:
                                like_parts = []
                                for v in vals:
                                    like_parts.append(f"{clause} LIKE %s")
                                    values.append(f"%{v}%")
                                where_clauses.append("(" + " OR ".join(like_parts) + ")")

                else:
                    # ✅ Fallback to simple exact
                    where_clauses.append(f"{clause} = %s")
                    values.append(condition)

        # ✅ Restrict by user affiliations
        if user_affiliations:
            allowed_ids = is_affiliation_allowed(table_name, user_affiliations, db)
            if not allowed_ids:
                print("[INFO] No affiliation matches. Returning empty result.")
                return []
            placeholders = ",".join(["%s"] * len(allowed_ids))
            where_clauses.append(f"affiliation_id IN ({placeholders})")
            values.extend(list(allowed_ids))

        if where_clauses:
            query += " WHERE " + " AND ".join(where_clauses)

        # ✅ Pagination
        if block_size and block_number:
            offset = (block_number - 1) * block_size
            query += " LIMIT %s OFFSET %s"
            values.extend([block_size, offset])

        print("[INFO] Final SQL Query:", query)
        print("[INFO] Parameters:", values)

        cursor.execute(query, values)
        results = cursor.fetchall()
        print(f"[INFO] Query returned {len(results)} result(s).")
        return results

    except Exception as e:
        print(f"[ERROR] Exception in get_data(): {e}")
        return []

    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()
            print("[INFO] Database connection closed.")


def insert_ignore(db, table_name, insert_data, unique_columns=None):
    connection = create_connection(db)
    cursor = None
    try:
        if connection and connection.is_connected():
            cursor = connection.cursor()
            # Check for duplicates based on unique columns
            if unique_columns:
                condition = ' AND '.join([f"{col} = %s" for col in unique_columns])
                values = [insert_data[col] for col in unique_columns]
                check_query = f"SELECT COUNT(*) FROM {table_name} WHERE {condition}"
                cursor.execute(check_query, values)
                count = cursor.fetchone()[0]
                if count > 0:
                    print(f"Duplicate found based on unique columns: {unique_columns}")
                    return False, f"Insert ignored. Row with same {unique_columns} already exists."
            ############################################################################################
            

            # Add created_at timestamp
            if 'created_at' not in insert_data:
                insert_data['created_at'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

            insert_columns = ', '.join(insert_data.keys())
            insert_placeholders = ', '.join(['%s'] * len(insert_data))
            insert_values = list(insert_data.values())

            query = f"""
            INSERT IGNORE INTO {table_name} ({insert_columns})
            VALUES ({insert_placeholders});
            """
            print(f"Executing Query: {query}")
            cursor.execute(query, insert_values)
            connection.commit()

            if cursor.rowcount > 0:
                print(f"Row inserted into {table_name} successfully.")
                return True, "Row inserted into entity successfully."
            else:
                is_duplicate, duplicate_columns = check_duplicate_entry(connection, table_name, insert_data)
                if is_duplicate:
                    print(f"Insert ignored due to duplicate entry in {table_name}. Conflicting columns: {duplicate_columns}")
                    user_input = input("Duplicate entry found. Do you want to insert with version control? (y/n): ").strip().lower()

                    if user_input == 'y':
                        if 'version' not in insert_data:
                            insert_data['version'] = 'v1'
                        else:
                            # Find max version for same identifying fields (excluding version)
                            condition_clauses = " AND ".join([f"{col} = %s" for col in duplicate_columns if col != 'version'])
                            condition_values = [insert_data[col] for col in duplicate_columns if col != 'version']
                            version_query = f"SELECT version FROM {table_name} WHERE {condition_clauses} ORDER BY version DESC LIMIT 1"
                            cursor.execute(version_query, condition_values)
                            result = cursor.fetchone()

                            if result:
                                latest_version = result[0]
                                try:
                                    next_version_number = int(latest_version.lstrip('v')) + 1
                                    insert_data['version'] = f"v{next_version_number}"
                                except:
                                    insert_data['version'] = 'v2'
                            else:
                                insert_data['version'] = 'v1'

                        # Retry insert
                        insert_data['created_at'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')  # Update timestamp
                        insert_columns = ', '.join(insert_data.keys())
                        insert_placeholders = ', '.join(['%s'] * len(insert_data))
                        insert_values = list(insert_data.values())
                        retry_query = f"""
                        INSERT IGNORE INTO {table_name} ({insert_columns})
                        VALUES ({insert_placeholders});
                        """
                        print(f"Retrying Insert with version: {insert_data['version']}")
                        cursor.execute(retry_query, insert_values)
                        connection.commit()

                        if cursor.rowcount > 0:
                            return True, f"Row inserted with version {insert_data['version']}."
                        else:
                            return False, "Retry insert failed even with versioning."
                    else:
                        return False, f"Insert ignored due to duplicate entry. Conflicting columns: {duplicate_columns}"
                else:
                    return False, "Insert ignored, but no exact duplicate found."
    except Error as e:
        print(f"Error: {e}")
        return False, str(e)
    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()

'''
# workin code with affiliation_id enforcement
# This function retrieves data from a MySQL table with optional WHERE clause filtering and affiliation_id enforcement
def get_data(db, table_name, select_fields, where_data=None, exact_match=False, user_affiliations=None):
    """
    Retrieves data from MySQL with WHERE clause filtering and affiliation_id enforcement.

    Args:
        db (str): Database name.
        table_name (str): Table name.
        select_fields (list): Fields to select (supporting JSON dot notation).
        where_data (dict): Optional filtering criteria.
        exact_match (bool): Use '=' or 'LIKE'.
        user_affiliations (list): List of dicts with 'affiliation_id'.

    Returns:
        list: Filtered rows matching the query and affiliation check.
    """
    print("[init] ", where_data)
    print("[init] ", exact_match)
    print("[init] ",user_affiliations)
    connection = None
    cursor = None

    try:
        print(f"[START] Querying table: `{table_name}` in DB: `{db}`")

        connection = create_connection(db)
        if not connection or not connection.is_connected():
            print("[ERROR] Failed to connect to database.")
            return []

        cursor = connection.cursor(dictionary=True)

        # Prepare SELECT fields
        formatted_select_fields = []
        for field in select_fields:
            if "." in field:
                column, *json_parts = field.split(".")
                json_path = ".".join(json_parts)
                formatted_select_fields.append(
                    f"JSON_UNQUOTE(JSON_EXTRACT({column}, '$.{json_path}')) AS `{field}`"
                )
            else:
                formatted_select_fields.append(field)
        select_clause = ', '.join(formatted_select_fields)
        query = f"SELECT {select_clause} FROM {table_name}"

        # WHERE clause construction
        where_clauses = []
        values = []

        if where_data:
            # Remove wildcard '*' filters
            where_data = {k: v for k, v in where_data.items() if v != "*"}
            print(f"[DEBUG] Filtered where_data: {where_data}")

            for key, value in where_data.items():
                column, *json_parts = key.split(".")
                clause = (
                    f"JSON_UNQUOTE(JSON_EXTRACT({column}, '$.{'.'.join(json_parts)}'))"
                    if json_parts else column
                )
                if exact_match:
                    where_clauses.append(f"{clause} = %s")
                    values.append(value)
                else:
                    where_clauses.append(f"{clause} LIKE %s")
                    values.append(f"%{value}%")
                print(f"[DEBUG] WHERE condition added: {where_clauses[-1]} with value {values[-1]}")

        # Add affiliation_id check
        print("[user_affiliations] ",user_affiliations);
        if user_affiliations:
            aff_ids = [int(aff["affiliation_id"]) for aff in user_affiliations if "affiliation_id" in aff]
            if not aff_ids:
                print("[INFO] No valid affiliation_id found in user_affiliations.")
                return []

            placeholders = ','.join(['%s'] * len(aff_ids))
            where_clauses.append(f"affiliation_id IN ({placeholders})")
            values.extend(aff_ids)
            print(f"[DEBUG] affiliation_id filter: affiliation_id IN ({placeholders})")
            print(f"[DEBUG] Affiliation values: {aff_ids}")

        # Combine query
        if where_clauses:
            query += f" WHERE {' AND '.join(where_clauses)}"

        print(f"[INFO] Final SQL Query: {query}")
        print(f"[INFO] Query Parameters: {values}")

        cursor.execute(query, values)
        rows = cursor.fetchall()
        print(f"[INFO] Query returned {len(rows)} row(s).")
        return rows

    except Exception as e:
        print(f"[ERROR] Exception in get_data(): {e}")
        return []

    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()
            print("[INFO] Database connection closed.")
'''

'''
#This function handles inserting data into a table with created_at timestamp and checks for duplicate entries.
def insert_ignore(db, table_name, insert_data):
    connection = create_connection(db)
    cursor = None
    try:
        if connection and connection.is_connected():
            cursor = connection.cursor()

            # Add created_at timestamp if not already present
            if 'created_at' not in insert_data:
                insert_data['created_at'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

            insert_columns = ', '.join(insert_data.keys())
            insert_placeholders = ', '.join(['%s'] * len(insert_data))
            insert_values = list(insert_data.values())

            query = f"""
            INSERT IGNORE INTO {table_name} ({insert_columns})
            VALUES ({insert_placeholders});
            """
            print(f"Executing Query: {query}")
            cursor.execute(query, insert_values)
            connection.commit()

            if cursor.rowcount > 0:
                print(f"Row inserted into {table_name} successfully.")
                return True, "Row inserted into entity successfully."
            else:
                # Identify which columns caused the duplicate entry
                is_duplicate, duplicate_columns = check_duplicate_entry(connection, table_name, insert_data)
                if is_duplicate:
                    print(f"Insert ignored due to duplicate entry in {table_name}. Conflicting columns: {duplicate_columns}")
                    return False, f"Insert ignored due to duplicate entry. Conflicting columns: {duplicate_columns}"
                else:
                    return False, "Insert ignored, but no exact duplicate found."
    except Error as e:
        print(f"Error: {e}")
        return False, str(e)
    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()
'''


'''
def insert_ignore(db, table_name, insert_data):
    connection = create_connection(db)
    cursor = None
    try:
        if connection and connection.is_connected():
            cursor = connection.cursor()
            insert_columns = ', '.join(insert_data.keys())
            insert_placeholders = ', '.join(['%s'] * len(insert_data))
            insert_values = list(insert_data.values())
            query = f"""
            INSERT IGNORE INTO {table_name} ({insert_columns})
            VALUES ({insert_placeholders});
            """
            print(f"Executing Query: {query}")
            cursor.execute(query, insert_values)
            connection.commit()

            if cursor.rowcount > 0:
                print(f"Row inserted into {table_name} successfully.")
                return True, "Row inserted into entity successfully."
            else:
                # Identify which columns caused the duplicate entry
                is_duplicate, duplicate_columns = check_duplicate_entry(connection, table_name, insert_data)
                if is_duplicate:
                    print(f"Insert ignored due to duplicate entry in {table_name}. Conflicting columns: {duplicate_columns}")
                    return False, f"Insert ignored due to duplicate entry. Conflicting columns: {duplicate_columns}"
                else:
                    return False, "Insert ignored, but no exact duplicate found."
    except Error as e:
        print(f"Error: {e}")
        return False, str(e)
    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()
'''

#data = get_data("event_scheduler2025","entity", ['*'],{},False,None,10,1)
#print("1] ",data)

''''''
data = get_data_list(
    "event_scheduler2025",  "entity",   ["*"],
    {
     "id": {"type":"number","exact_match":False,"values":[1,10,15,20]}
     },
   block_size=10,  block_number=1
)
'''
(
    "event_scheduler2025",  "entity",   ["*"],
    {"affiliation_id": {"between": (1,7),"exact_match":False}, "entry_status":"draft" },
    exact_match=True,   block_size=10,  block_number=1
)
    "event_scheduler2025",  "entity",   ["*"],
    
    {
    "affiliation_id": {"type":"number","exact_match":False, "values":(1,7)}}, 
    "affiliation_id": {"type":"number","exact_match":False, "values":(1,3,7)}}, 
    "affiliation_id": {"type":"number","exact_match":true, "values":(1,3,7)}}, 
    "entry_status":{"type":"string","exact_match":False, "values":"active"}, },
    "entry_status":{"type":"string","exact_match":true, "values":"active"}, },
    
    exact_match=True,   block_size=10,  block_number=1
)
(
    "event_scheduler2025",  "entity",   ["*"],
    {"affiliation_id": {"between": (1,7)}, "entry_status":{"value":"draft","exact_match":True} },
    block_size=10,  block_number=1
)
'''
print("2] ",data)
#data = update_entry("event_scheduler2025", "entity",{"entity_name": "Updated Entity Name"},{"entity_id": "1"})

#is_deleted = delete_entry("event_scheduler2025","entity", {"entity_id": "1"})


