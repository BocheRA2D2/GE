import re

file_path = "szablon_zadan.txt"

with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

sections = [
    ("ETAP 1 Dla Niej", text.find("### ETAP 1"), text.find("Dla niego:", text.find("### ETAP 1"))),
    ("ETAP 1 Dla Niego", text.find("Dla niego:", text.find("### ETAP 1")), text.find("### ETAP 2")),
    ("ETAP 2 Dla Niej", text.find("### ETAP 2"), text.find("Dla niego:", text.find("### ETAP 2"))),
    ("ETAP 2 Dla Niego", text.find("Dla niego:", text.find("### ETAP 2")), text.find("### ETAP 3")),
    ("ETAP 3 Dla Niej", text.find("### ETAP 3"), text.find("Dla niego:", text.find("### ETAP 3"))),
    ("ETAP 3 Dla Niego", text.find("Dla niego:", text.find("### ETAP 3")), text.find("### ETAP 4")),
    ("ETAP 4 Dla Niej", text.find("### ETAP 4"), text.find("Dla niego:", text.find("### ETAP 4"))),
    ("ETAP 4 Dla Niego", text.find("Dla niego:", text.find("### ETAP 4")), text.find("### ETAP 5"))
]

for name, start, end in sections:
    if start == -1 or end == -1:
        print(f"{name}: NOT FOUND")
        continue
    content = text[start:end]
    lines = content.strip().split('\n')
    tasks_with_obj = sum(1 for line in lines if '{ requiresActivities:' in line)
    tasks_total = sum(1 for line in lines if re.match(r'^\d+\.', line.strip()))
    print(f"{name}: {tasks_with_obj} / {tasks_total} tasks have tags")
