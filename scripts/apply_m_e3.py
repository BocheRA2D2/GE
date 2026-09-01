import re

file_path = "szablon_zadan.txt"

with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

task_overrides_dlaniego_etap3 = {
    1: "{ requiresActivities: ['calowanie'] }",
    2: "{ requiresActivities: ['oral_robienie_m', 'dominacja'], requiresAccessories: ['opaska'] }",
    3: "{ requiresActivities: ['oral_robienie_m', 'calowanie'], requiresAccessories: ['kostka_lodu'] }",
    4: "{ requiresActivities: ['palcowka'] }",
    5: "{ requiresActivities: ['masaz'], requiresAccessories: ['zel'] }",
    6: "{ requiresActivities: ['calowanie'] }",
    7: "{ requiresActivities: ['oral_robienie_m', 'dominacja'], requiresAccessories: ['opaska'] }",
    8: "{ requiresActivities: ['oral_robienie_m', 'calowanie'], requiresAccessories: ['kostka_lodu'] }",
    9: "{ requiresActivities: ['palcowka'] }",
    10: "{ requiresActivities: ['masaz'], requiresAccessories: ['zel'] }",
    11: "{ requiresActivities: ['oral_robienie_m'] }",
    12: "{ requiresActivities: ['masaz', 'oral_robienie_m'], requiresAccessories: ['zel'] }",
    13: "{ requiresActivities: ['palcowka', 'dominacja'], requiresAccessories: ['opaska'] }",
    14: "{ requiresActivities: ['palcowka', 'masaz'] }",
    15: "{ requiresActivities: ['oral_robienie_m', 'calowanie'] }",
    16: "{ requiresActivities: ['oral_robienie_m', 'rysowanie'] }",
    17: "{ requiresActivities: ['calowanie', 'dominacja'] }",
    18: "{ requiresActivities: ['palcowka'] }",
    19: "{ requiresActivities: ['oral_robienie_m', 'calowanie'], requiresAccessories: ['kostka_lodu'] }",
    20: "{ requiresActivities: ['oral_robienie_m', 'dominacja'] }",
    21: "{ requiresActivities: ['oral_robienie_m', 'ciagnięcie_wlosow', 'dominacja'] }",
    22: "{ requiresActivities: ['wiazanie', 'oral_robienie_m', 'palcowka', 'dominacja'], requiresAccessories: ['opaska', 'kostka_lodu'] }",
    23: "{ requiresActivities: ['oral_robienie_m', 'dominacja', 'noszenie'] }",
    24: "{ requiresActivities: ['palcowka', 'dominacja'] }",
    25: "{ requiresActivities: ['wiazanie', 'oral_robienie_m', 'dominacja'] }",
    26: "{ requiresActivities: ['oral_robienie_m', 'ciagnięcie_wlosow', 'klapsy', 'dominacja'] }",
    27: "{ requiresActivities: ['oral_robienie_m', 'wiazanie', 'dominacja'] }",
    28: "{ requiresActivities: ['palcowka', 'dominacja'] }",
    29: "{ requiresActivities: ['oral_robienie_m', 'ciagnięcie_wlosow', 'klapsy', 'dominacja'] }",
    30: "{ requiresActivities: ['wiazanie', 'oral_robienie_m', 'dominacja'] }",
    31: "{ requiresActivities: ['oral_robienie_m', 'ciagnięcie_wlosow', 'klapsy', 'dominacja'] }",
    32: "{ requiresActivities: ['oral_robienie_m', 'wiazanie', 'dominacja'] }",
    33: "{ requiresActivities: ['palcowka', 'klapsy', 'dominacja'] }",
    34: "{ requiresActivities: ['oral_robienie_m', 'ciagnięcie_wlosow', 'klapsy', 'dominacja'] }",
    35: "{ requiresActivities: ['oral_robienie_m', 'dominacja', 'noszenie'] }",
    36: "{ requiresActivities: ['calowanie'] }",
    37: "{ requiresActivities: ['palcowka', 'dominacja'], requiresAccessories: ['opaska'] }",
    38: "{ requiresActivities: ['oral_robienie_m'] }",
    39: "{ requiresActivities: ['oral_robienie_m', 'calowanie'], requiresAccessories: ['kostka_lodu'] }",
    40: "{ requiresActivities: ['oral_robienie_m', 'dominacja'] }",
    41: "{ requiresActivities: ['oral_robienie_m', 'dominacja'], requiresAccessories: ['telefon'] }",
    42: "{ requiresActivities: ['oral_robienie_m', 'dominacja'], requiresAccessories: ['telefon'] }",
    43: "{ requiresActivities: ['rysowanie'] }",
    44: "{ requiresActivities: ['oral_robienie_m'], requiresAccessories: ['muzyka'] }",
    45: "{ requiresActivities: ['oral_robienie_m', 'dominacja'], requiresAccessories: ['telefon'] }",
    46: "{ requiresActivities: ['calowanie', 'gryzienie'] }",
    47: "{ requiresActivities: ['oral_robienie_m', 'noszenie', 'dominacja'] }",
    48: "{ requiresActivities: ['masaz', 'oral_robienie_m'], requiresAccessories: ['zel'] }",
    49: "{ requiresActivities: ['oral_robienie_m', 'klapsy', 'dominacja'] }",
    50: "{ requiresActivities: ['calowanie', 'gryzienie'] }",
    51: "{ requiresActivities: ['oral_robienie_m', 'masaz'] }",
    52: "{ requiresActivities: ['calowanie'] }",
    53: "{ requiresActivities: ['oral_robienie_m', 'calowanie'] }",
    54: "{ requiresActivities: ['calowanie', 'patrzenie_oczy'] }",
    55: "{ requiresActivities: ['masaz', 'calowanie'], requiresAccessories: ['zel'] }",
    56: "{ requiresActivities: ['oral_robienie_m'], requiresClothing: ['rajstopy'] }",
    57: "{ requiresActivities: ['oral_robienie_m', 'dominacja'], requiresClothing: ['rajstopy'], removesClothing: ['rajstopy'] }",
    58: "{ requiresActivities: ['oral_robienie_m', 'masaz'], requiresClothing: ['rajstopy'] }",
    59: "{ requiresActivities: ['oral_robienie_m', 'noszenie'], requiresClothing: ['rajstopy'] }",
    60: "{ requiresActivities: ['oral_robienie_m', 'masaz'], requiresClothing: ['rajstopy'], removesClothing: ['rajstopy'] }",
    61: "{ requiresActivities: ['oral_robienie_m'], requiresClothing: ['spodniczka'] }",
    62: "{ requiresActivities: ['wiazanie', 'oral_robienie_m', 'dominacja'], requiresClothing: ['spodniczka'] }",
    63: "{ requiresActivities: ['oral_robienie_m'], requiresClothing: ['spodniczka'] }",
    64: "{ requiresActivities: ['palcowka', 'calowanie'], requiresClothing: ['spodniczka'] }",
    65: "{ requiresActivities: ['oral_robienie_m', 'wiazanie', 'dominacja'], requiresClothing: ['spodniczka'] }",
    66: "{ requiresActivities: ['oral_robienie_m'], requiresClothing: ['majtki'] }",
    67: "{ requiresActivities: ['oral_robienie_m'], requiresClothing: ['majtki'] }",
    68: "{ requiresActivities: ['oral_robienie_m'], requiresClothing: ['majtki'], removesClothing: ['majtki'] }",
    69: "{ requiresActivities: ['calowanie', 'gryzienie'], requiresClothing: ['stanik'] }",
    70: "{ requiresActivities: ['oral_robienie_m', 'dominacja'], requiresClothing: ['majtki'] }",
    71: "{ requiresActivities: ['oral_robienie_m', 'noszenie'], requiresClothing: ['szpilki'] }",
    72: "{ requiresActivities: ['palcowka'], requiresClothing: ['szpilki'] }",
    73: "{ requiresActivities: ['oral_robienie_m', 'noszenie'], requiresClothing: ['szpilki'] }",
    74: "{ requiresActivities: ['oral_robienie_m', 'calowanie'], requiresClothing: ['szpilki'], removesClothing: ['szpilki'] }",
    75: "{ requiresActivities: ['calowanie'], requiresClothing: ['szpilki'] }",
    76: "{ requiresActivities: ['rysowanie', 'jedzenie'], requiresAccessories: ['jedzenie'] }",
    77: "{ requiresActivities: ['oral_robienie_m', 'szeptanie'] }",
    78: "{ requiresActivities: ['oral_robienie_m'], requiresAccessories: ['muzyka'] }",
    79: "{ requiresActivities: ['oral_robienie_m', 'masaz'], requiresAccessories: ['piorko'] }",
    80: "{ requiresActivities: ['oral_robienie_m', 'dominacja'] }",
    81: "{ requiresActivities: ['palcowka', 'dominacja'] }",
    82: "{ requiresActivities: ['oral_robienie_m', 'noszenie', 'dominacja'] }",
    83: "{ requiresActivities: ['oral_robienie_m', 'ciagnięcie_wlosow', 'palcowka', 'dominacja'] }",
    84: "{ requiresActivities: ['oral_robienie_m', 'palcowka'] }",
    85: "{ requiresActivities: ['palcowka', 'calowanie', 'gryzienie'] }",
    86: "{ requiresActivities: ['calowanie'] }",
    87: "{ requiresActivities: ['oral_robienie_m'] }",
    88: "{ requiresActivities: ['oral_robienie_m', 'calowanie'], requiresAccessories: ['kostka_lodu'] }",
    89: "{ requiresActivities: ['oral_robienie_m', 'dominacja'] }",
    90: "{ requiresActivities: ['calowanie', 'masaz'] }",
    91: "{ requiresActivities: ['oral_robienie_m', 'dominacja'], requiresAccessories: ['telefon', 'muzyka'] }",
    92: "{ requiresActivities: ['oral_robienie_m', 'dominacja'], requiresAccessories: ['telefon'] }",
    93: "{ requiresActivities: ['oral_robienie_m', 'noszenie'], requiresClothing: ['rajstopy'] }",
    94: "{ requiresActivities: ['palcowka'], requiresClothing: ['rajstopy'] }",
    95: "{ requiresActivities: ['oral_robienie_m', 'noszenie'], requiresClothing: ['rajstopy'] }",
    96: "{ requiresActivities: ['oral_robienie_m', 'calowanie'], requiresClothing: ['rajstopy'], removesClothing: ['rajstopy'] }",
    97: "{ requiresActivities: ['calowanie'], requiresClothing: ['rajstopy'] }"
}

etap3_start = text.find("### ETAP 3")
etap3_dlaniej = text.find("Dla niej:", etap3_start)
etap3_dlaniego = text.find("Dla niego:", etap3_dlaniej)
etap4_start = text.find("### ETAP 4", etap3_dlaniego)

content_to_process = text[etap3_dlaniego:etap4_start]
lines = content_to_process.split("\n")

new_lines2 = []
for line in lines:
    clean_line = line.strip()
    match = re.match(r'^(\d+)\.', clean_line)
    if match:
        task_id = int(match.group(1))
        
        # Remove old bracket tags safely if present
        base_line = re.sub(r'\s*\{.*?\}\s*$', '', line.rstrip())
        
        if task_id in task_overrides_dlaniego_etap3:
            obj_str = task_overrides_dlaniego_etap3[task_id]
            if "[]" not in obj_str:  # Only append if it's not empty
                base_line += f" {obj_str}"
                
        new_lines2.append(base_line)
    else:
        new_lines2.append(line)

new_content = "\n".join(new_lines2)
final_text = text[:etap3_dlaniego] + new_content + text[etap4_start:]

# Remove erroneous tags from ETAP 2 Dla Niego (lines between ETAP 2 Dla Niego and ETAP 3)
etap2_start = final_text.find("### ETAP 2")
etap2_dlaniej = final_text.find("Dla niej:", etap2_start)
etap2_dlaniego = final_text.find("Dla niego:", etap2_dlaniej)
etap3_start = final_text.find("### ETAP 3", etap2_dlaniego)

etap2_dlaniego_content = final_text[etap2_dlaniego:etap3_start]
e2_lines = etap2_dlaniego_content.split("\n")
new_e2_lines = []
for line in e2_lines:
    if re.match(r'^\d+\.', line.strip()):
        base_line = re.sub(r'\s*\{.*?\}\s*$', '', line.rstrip())
        new_e2_lines.append(base_line)
    else:
        new_e2_lines.append(line)

final_text = final_text[:etap2_dlaniego] + "\n".join(new_e2_lines) + final_text[etap3_start:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(final_text)

print("Applied strict manual mapping to Stage 3 Male tasks and cleaned up Stage 2 Male tags!")
