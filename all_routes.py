from flask import Blueprint, request, jsonify

all_routes = Blueprint("all_routes", __name__)


# Routes for farmer_registry (from Resource Config)
@all_routes.route("/farmer_registry/new", methods=["POST"])
def farmer_registry_new():
    print("📥 Arrived at /farmer_registry/new")
    return jsonify({"message": "Insert endpoint hit for farmer_registry"}), 201

@all_routes.route("/farmer_registry/list_details", methods=["POST", "GET"])
def farmer_registry_list():
    print("📄 Arrived at /farmer_registry/list_details")
    return jsonify({"message": "List endpoint hit for farmer_registry"}), 200

@all_routes.route("/farmer_registry/modifications", methods=["PUT"])
def farmer_registry_update():
    print("✏️ Arrived at /farmer_registry/modifications")
    return jsonify({"message": "Update endpoint hit for farmer_registry"}), 200

@all_routes.route("/farmer_registry", methods=["DELETE"])
def farmer_registry_delete():
    print("🗑️ Arrived at /farmer_registry (DELETE)")
    return jsonify({"message": "Delete endpoint hit for farmer_registry"}), 200
