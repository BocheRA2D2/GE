import re

file_path = "szablon_zadan.txt"

with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

# Define keywords for ZGODY (Activities)
zgody_map = {
    "Namiętne całowanie": [r'całuj', r'pocałun', r'usta', r'językiem', r'całować', r'wargi', r'całus'],
    "Masaż erotyczny": [r'masuj', r'masaż', r'ugniataj', r'rozmasuj', r'masowanie'],
    "Erotyczny taniec / lapdance": [r'tańcz', r'taniec', r'biodrami'],
    "Dirty talk / sprośności szeptem": [r'szepcz', r'szept', r'dirty talk', r'sprośn', r'mów do ucha', r'opowiadaj'],
    "Wiązanie / krępowanie rąk": [r'zwiąż', r'krępuj', r'przywiąż', r'kajdanki'],
    "Klapsy / bicie po pośladkach": [r'klaps', r'uderz', r'bij', r'w pupę'],
    "Gryzienie / podgryzanie": [r'gryź', r'ugryz', r'przygryź', r'zębami'],
    "Lekki ucisk na gardle": [r'gardł', r'duś', r'uciska', r'szyję'],
    "Ciągnięcie za włosy": [r'włosy', r'ciągnij'],
    "Dominacja / wydawanie poleceń": [r'rozkaz', r'poleceni', r'każ mu', r'zmuś', r'zabroń', r'nie pozwól'],
    "Kontakt wzrokowy podczas aktu": [r'patrz w oczy', r'kontakt wzrokowy', r'wzrok w oczy', r'prosto w oczy', r'w jego oczy', r'nie odrywaj wzroku'],
    "Podnoszenie / pozycje stojące": [r'stojąc', r'podnieś'],
    "Rysowanie / pisanie po ciele": [r'rysuj', r'pisz'],
    "Karmienie / jedzenie z ciała": [r'karm', r'jedzeni', r'truskawk', r'czekolad', r'zliż'],
    "Mówienie co czujesz / komplementy": [r'komplement', r'chwal', r'powiedz co czujesz']
}

# Define keywords for AKCESORIA
akcesoria_map = {
    "Żel / olejek": [r'żel', r'olejek', r'oliwk'],
    "Opaska na oczy": [r'opask', r'zasłoń', r'zawiąż oczy', r'ślepo', r'nie widzi'],
    "Kajdanki / wiązanie": [r'kajdanki', r'krawat', r'sznur', r'zwiąż'],
    "Piórko": [r'piórk', r'pióro'],
    "Kostki lodu": [r'lód', r'kostk', r'zimn'],
    "Świece": [r'świec', r'wosk'],
    "Czekolada / bita śmietana": [r'czekolad', r'śmietan', r'miód', r'słodk'],
    "Muzyka / głośnik": [r'muzyk', r'piosenk', r'melodi'],
    "Koc / poduszki": [r'koc', r'poduszk'],
    "Szalik / jedwab": [r'szalik', r'jedwab'],
    "Wibrator / gadżet": [r'wibrator', r'gadżet', r'zabawk'],
    "Szpicruta / pejcz": [r'szpicrut', r'pejcz'],
    "Szpilki": [r'szpilk', r'obcas'],
    "Knebel": [r'knebel', r'kneb']
}

# Define keywords for GARDEROBA (Male - what he is wearing)
garderoba_male_map = {
    "Koszula": [r'koszul', r'guzik', r'kołnierz'],
    "Spodnie": [r'spodni', r'pasek', r'kieszeń'],
    "Skarpetki": [r'skarpet']
}

# Define keywords for GARDEROBA (Female - what she is wearing)
garderoba_female_map = {
    "Sukienka/Spódniczka": [r'sukienk', r'spódnic'],
    "Pończochy/Rajstopy": [r'pończoch', r'rajstop', r'kabaretk', r'podkolanówk'],
    "Szpilki": [r'szpilk', r'obcas'],
    "Biustonosz": [r'stanik', r'biustonosz', r'zapięci'],
    "Majtki": [r'majtki', r'koronk']
}

def analyze_task(task_text):
    matched_zgody = []
    for zgoda, patterns in zgody_map.items():
        if any(re.search(p, task_text, re.IGNORECASE) for p in patterns):
            matched_zgody.append(zgoda)
            
    matched_akcesoria = []
    for akc, patterns in akcesoria_map.items():
        if any(re.search(p, task_text, re.IGNORECASE) for p in patterns):
            matched_akcesoria.append(akc)
            
    matched_garderoba_m = []
    for gard, patterns in garderoba_male_map.items():
        if any(re.search(p, task_text, re.IGNORECASE) for p in patterns):
            matched_garderoba_m.append(gard)
            
    matched_garderoba_f = []
    for gard, patterns in garderoba_female_map.items():
        if any(re.search(p, task_text, re.IGNORECASE) for p in patterns):
            matched_garderoba_f.append(gard)
            
    tags = []
    if matched_zgody:
        tags.append(f"Zgody: {', '.join(matched_zgody)}")
    if matched_akcesoria:
        tags.append(f"Akcesoria: {', '.join(matched_akcesoria)}")
        
    gard_all = []
    if matched_garderoba_m:
        gard_all.append(f"On: {', '.join(matched_garderoba_m)}")
    if matched_garderoba_f:
        gard_all.append(f"Ona: {', '.join(matched_garderoba_f)}")
        
    if gard_all:
        tags.append(f"Garderoba: {' | '.join(gard_all)}")
        
    return " | ".join(tags)

# We only want to process Etap 1 -> Dla niej
# Find the block Etap 1 -> Dla niej, up to Dla niego

etap1_start = text.find("### ETAP 1")
etap1_dlaniej = text.find("Dla niej:", etap1_start)
etap1_dlaniego = text.find("Dla niego:", etap1_dlaniej)

content_to_process = text[etap1_dlaniej:etap1_dlaniego]
lines = content_to_process.split("\n")

new_lines = []
for line in lines:
    if line.strip() and re.match(r'^\d+\.', line.strip()):
        # It's a task.
        tags = analyze_task(line)
        if tags:
            # Append tags in brackets
            new_line = f"{line.rstrip()} [{tags}]"
            new_lines.append(new_line)
        else:
            new_lines.append(line)
    else:
        new_lines.append(line)

new_content = "\n".join(new_lines)
final_text = text[:etap1_dlaniej] + new_content + text[etap1_dlaniego:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(final_text)

print("Processed ETAP 1 - Dla Niej")
