import json

print("Script started")
file_path = "c:\\Users\\DELL\\Desktop\\venv-python\\tf-solve\\src\\assets\\qa_set.json"

try:
    with open(file_path, 'r') as f:
        data = json.load(f)
    print("JSON is valid.")
except json.JSONDecodeError as e:
    print(f"JSON is invalid: {e}")
except FileNotFoundError:
    print(f"File not found: {file_path}")
finally:
    print("Script finished")

