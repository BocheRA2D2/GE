import re

file_path = "szablon_zadan.txt"

with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

task_overrides_dlaniego_etap4 = {
    1: "{ requiresActivities: ['penetracja', 'patrzenie_oczy', 'szeptanie'] }",
    2: "{ requiresActivities: ['penetracja', 'wiazanie', 'dominacja'] }",
    3: "{ requiresActivities: ['penetracja', 'patrzenie_oczy'] }",
    4: "{ requiresActivities: ['penetracja', 'dominacja'] }",
    5: "{ requiresActivities: ['penetracja', 'szeptanie'] }",
    6: "{ requiresActivities: ['penetracja', 'patrzenie_oczy', 'szeptanie'] }",
    7: "{ requiresActivities: ['penetracja', 'wiazanie', 'dominacja'] }",
    8: "{ requiresActivities: ['penetracja', 'patrzenie_oczy'] }",
    9: "{ requiresActivities: ['penetracja', 'dominacja'] }",
    10: "{ requiresActivities: ['penetracja', 'szeptanie', 'duszenie_lekkie'] }",
    11: "{ requiresActivities: ['penetracja'] }",
    12: "{ requiresActivities: ['penetracja', 'masaz'] }",
    13: "{ requiresActivities: ['penetracja', 'szeptanie', 'wiazanie', 'dominacja'] }",
    14: "{ requiresActivities: ['penetracja'] }",
    15: "{ requiresActivities: ['penetracja'] }",
    16: "{ requiresActivities: ['penetracja', 'powolne_tempo'] }",
    17: "{ requiresActivities: ['penetracja', 'klapsy', 'dominacja'] }",
    18: "{ requiresActivities: ['penetracja'] }",
    19: "{ requiresActivities: ['penetracja'] }",
    20: "{ requiresActivities: ['penetracja', 'szeptanie'] }",
    21: "{ requiresActivities: ['penetracja', 'ciagnięcie_wlosow', 'szeptanie', 'dominacja'] }",
    22: "{ requiresActivities: ['penetracja', 'wiazanie'] }",
    23: "{ requiresActivities: ['penetracja', 'wiazanie', 'dominacja'] }",
    24: "{ requiresActivities: ['penetracja', 'duszenie_lekkie', 'dominacja'] }",
    25: "{ requiresActivities: ['penetracja', 'ciagnięcie_wlosow', 'dominacja'] }",
    26: "{ requiresActivities: ['penetracja', 'ciagnięcie_wlosow', 'dominacja'] }",
    27: "{ requiresActivities: ['penetracja', 'duszenie_lekkie', 'patrzenie_oczy', 'dominacja'] }",
    28: "{ requiresActivities: ['penetracja', 'wiazanie', 'dominacja'] }",
    29: "{ requiresActivities: ['penetracja', 'dominacja'] }",
    30: "{ requiresActivities: ['penetracja', 'dominacja'] }",
    31: "{ requiresActivities: ['penetracja', 'ciagnięcie_wlosow', 'dominacja'] }",
    32: "{ requiresActivities: ['penetracja', 'duszenie_lekkie', 'patrzenie_oczy', 'dominacja'] }",
    33: "{ requiresActivities: ['penetracja', 'wiazanie', 'dominacja'] }",
    34: "{ requiresActivities: ['penetracja', 'dominacja'] }",
    35: "{ requiresActivities: ['penetracja', 'klapsy', 'dominacja'] }",
    36: "{ requiresActivities: ['penetracja', 'calowanie'] }",
    37: "{ requiresActivities: ['penetracja', 'masaz', 'przytulanie'] }",
    38: "{ requiresActivities: ['penetracja', 'przytulanie'] }",
    39: "{ requiresActivities: ['penetracja', 'masaz'] }",
    40: "{ requiresActivities: ['penetracja', 'patrzenie_oczy'] }",
    41: "{ requiresActivities: ['penetracja'] }",
    42: "{ requiresActivities: ['penetracja'], requiresAccessories: ['muzyka'] }",
    43: "{ requiresActivities: ['penetracja'], requiresAccessories: ['telefon'] }",
    44: "{ requiresActivities: ['penetracja'] }",
    45: "{ requiresActivities: ['penetracja', 'szeptanie'], requiresAccessories: ['telefon'] }",
    46: "{ requiresActivities: ['penetracja', 'dominacja'] }",
    47: "{ requiresActivities: ['penetracja', 'klapsy', 'dominacja'] }",
    48: "{ requiresActivities: ['penetracja', 'masaz'] }",
    49: "{ requiresActivities: ['penetracja', 'dominacja'] }",
    50: "{ requiresActivities: ['penetracja', 'masaz'], requiresAccessories: ['zel'] }",
    51: "{ requiresActivities: ['penetracja', 'calowanie'] }",
    52: "{ requiresActivities: ['penetracja'] }",
    53: "{ requiresActivities: ['penetracja', 'calowanie'] }",
    54: "{ requiresActivities: ['penetracja', 'masaz'] }",
    55: "{ requiresActivities: ['penetracja'] }",
    56: "{ requiresActivities: ['penetracja'], requiresClothing: ['rajstopy'] }",
    57: "{ requiresActivities: ['penetracja', 'wiazanie'], requiresClothing: ['rajstopy'] }",
    58: "{ requiresActivities: ['penetracja'], requiresClothing: ['rajstopy'] }",
    59: "{ requiresActivities: ['penetracja'], requiresClothing: ['rajstopy'], removesClothing: ['rajstopy'] }",
    60: "{ requiresActivities: ['penetracja', 'masaz'], requiresClothing: ['rajstopy'] }",
    61: "{ requiresActivities: ['penetracja'], requiresClothing: ['spodniczka'] }",
    62: "{ requiresActivities: ['penetracja', 'wiazanie'], requiresClothing: ['sukienka'] }",
    63: "{ requiresActivities: ['penetracja', 'dominacja'], requiresClothing: ['spodniczka'] }",
    64: "{ requiresActivities: ['penetracja', 'wiazanie'], requiresClothing: ['spodniczka'] }",
    65: "{ requiresActivities: ['penetracja'], requiresClothing: ['spodniczka'], removesClothing: ['spodniczka'] }",
    66: "{ requiresActivities: ['penetracja'], requiresClothing: ['stanik'] }",
    67: "{ requiresActivities: ['penetracja'], requiresClothing: ['majtki'] }",
    68: "{ requiresActivities: ['penetracja'], requiresClothing: ['stanik'], removesClothing: ['stanik'] }",
    69: "{ requiresActivities: ['penetracja', 'dominacja'], requiresClothing: ['majtki'] }",
    70: "{ requiresActivities: ['penetracja'], requiresClothing: ['majtki'], removesClothing: ['majtki'] }",
    71: "{ requiresActivities: ['penetracja'], requiresClothing: ['szpilki'] }",
    72: "{ requiresActivities: ['penetracja', 'dominacja'], requiresClothing: ['szpilki'] }",
    73: "{ requiresActivities: ['penetracja', 'dominacja'], requiresClothing: ['szpilki'] }",
    74: "{ requiresActivities: ['penetracja', 'masaz'], requiresClothing: ['szpilki'] }",
    75: "{ requiresActivities: ['penetracja'], requiresClothing: ['szpilki'] }",
    76: "{ requiresActivities: ['penetracja', 'szeptanie'] }",
    77: "{ requiresActivities: ['penetracja'], requiresAccessories: ['piorko'] }",
    78: "{ requiresActivities: ['penetracja', 'szeptanie'] }",
    79: "{ requiresActivities: ['penetracja', 'dominacja'] }",
    80: "{ requiresActivities: ['penetracja'] }",
    81: "{ requiresActivities: ['penetracja', 'ciagnięcie_wlosow', 'dominacja'] }",
    82: "{ requiresActivities: ['penetracja', 'duszenie_lekkie', 'patrzenie_oczy', 'dominacja'] }",
    83: "{ requiresActivities: ['penetracja', 'dominacja'] }",
    84: "{ requiresActivities: ['penetracja', 'klapsy', 'dominacja'] }",
    85: "{ requiresActivities: ['penetracja', 'wiazanie', 'dominacja'] }",
    86: "{ requiresActivities: ['penetracja', 'calowanie'] }",
    87: "{ requiresActivities: ['penetracja', 'masaz', 'przytulanie'] }",
    88: "{ requiresActivities: ['penetracja', 'przytulanie'] }",
    89: "{ requiresActivities: ['penetracja', 'patrzenie_oczy'] }",
    90: "{ requiresActivities: ['penetracja', 'masaz'] }",
    91: "{ requiresActivities: ['penetracja'], requiresAccessories: ['muzyka'] }",
    92: "{ requiresActivities: ['penetracja', 'dominacja'], requiresAccessories: ['telefon'] }",
    93: "{ requiresActivities: ['penetracja'], requiresClothing: ['rajstopy'] }",
    94: "{ requiresActivities: ['penetracja', 'dominacja'], requiresClothing: ['rajstopy'] }",
    95: "{ requiresActivities: ['penetracja', 'dominacja'], requiresClothing: ['rajstopy'] }",
    96: "{ requiresActivities: ['penetracja', 'masaz'], requiresClothing: ['rajstopy'] }",
    97: "{ requiresActivities: ['penetracja'], requiresClothing: ['rajstopy'] }"
}

etap4_start = text.find("### ETAP 4")
etap4_dlaniej = text.find("Dla niej:", etap4_start)
etap4_dlaniego = text.find("Dla niego:", etap4_dlaniej)
etap5_start = text.find("### ETAP 5", etap4_dlaniego)

content_to_process = text[etap4_dlaniego:etap5_start]
lines = content_to_process.split("\n")

new_lines2 = []
for line in lines:
    clean_line = line.strip()
    match = re.match(r'^(\d+)\.', clean_line)
    if match:
        task_id = int(match.group(1))
        
        # Remove old tags safely if present
        base_line = re.sub(r'\s*\{.*?\}\s*$', '', line.rstrip())
        
        if task_id in task_overrides_dlaniego_etap4:
            obj_str = task_overrides_dlaniego_etap4[task_id]
            if "[]" not in obj_str:  # Only append if it's not empty
                base_line += f" {obj_str}"
                
        new_lines2.append(base_line)
    else:
        new_lines2.append(line)

new_content = "\n".join(new_lines2)
final_text = text[:etap4_dlaniego] + new_content + text[etap5_start:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(final_text)

print("Applied strict manual mapping to Stage 4 Male tasks!")
