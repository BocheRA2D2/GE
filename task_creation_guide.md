# Kompletny Poradnik Tworzenia Zadań (Task Creation Guide)

Poniższy dokument to pełna specyfikacja formatu zadań dla przeglądarkowej gry erotycznej dla par. Agent AI, który ma wygenerować nowe zadania, musi bezwzględnie przestrzegać poniższych reguł, struktury JSON oraz słowników wartości.

## 1. Kontekst Gry
Gra jest turowa. Gracze (Kobieta i Mężczyzna) losują na przemian zadania. Gra dzieli się na 5 etapów napięcia:
* **Etap 1:** Delikatny dotyk, romantyzm, budowanie napięcia (gra wstępna).
* **Etap 2:** Mocniejszy dotyk, pocałunki w różne miejsca, lekkie pieszczoty.
* **Etap 3:** Zdecydowane pieszczoty intymne, odważniejsze akcje (zazwyczaj wymagają zgody na konkretne aktywności i często nagości).
* **Etap 4:** Bardzo intensywne, bezpośrednie akcje i gorące zadania (hardcore).
* **Etap 5:** Finał (wspólne wielkie wyzwanie/zbliżenie z wyborem miejsca).

## 2. Struktura Obiektu Zadania (JSON)
Każde normalne zadanie to obiekt w tablicy z następującymi kluczami. Nie wszystkie klucze są wymagane, ale ich odpowiednie użycie jest kluczowe dla mechaniki gry.

```javascript
{
  "id": "s3_f12",               // Wymagane. Unikalne ID (schemat: s[etap]_[płeć][numer], np. s2_both5)
  "text": "Treść zadania...",   // Wymagane. Zawsze pisane w trybie rozkazującym do losującego
  "category": "touch",          // Wymagane. Jedna z dozwolonych kategorii
  "stage": 3,                   // Wymagane. Liczba całkowita od 1 do 5
  "timed": true,                // Wymagane. Czy zadanie ma stoper? (true/false)
  "timeLimit": 60,              // Wymagane jeśli timed: true. Czas w sekundach
  "target": "partner",          // Wymagane. Kogo dotyczy akcja ('performer', 'partner', 'both')
  "gender": "female",           // Wymagane. Kto może wylosować to zadanie ('female', 'male', 'both')
  
  "isHardcore": true,             // Opcjonalne. Zaznacz na true, jeśli zadanie jest bardzo ostre/kontrowersyjne
  
  // ZALEŻNOŚCI (Opcjonalne, ale bardzo ważne dla mechaniki)
  "requiresActivities": ["oral_give", "touching"], // Tablica zgód, które MUSI mieć losujący
  "requiresAccessories": ["ice"],                  // Tablica potrzebnych gadżetów
  
  // MECHANIKA UBRAŃ (Krytyczna)
  "requiresClothing": ["koszulka_f"],              // Losujący MUSI to mieć na sobie by wykonać zadanie
  "requiresNoClothing": ["stanik", "koszulka_f"],  // Losujący NIE MOŻE mieć tego na sobie (wymaga nagiego ciała u losującego)
  "targetArea": "chest",                           // Podpowiada grze, by wygenerowała dymek "Zanim zaczniesz, odsłoń u partnera..." (bottom, chest, feet)
  "removesClothing": ["stanik"],                   // Automatycznie usuwa z losującego ten element po wykonaniu zadania
  "tempRemoveClothing": "Na czas zadania zdejmij bluzkę" // Tylko dopisek tekstowy na karcie (nie psuje trwałego stanu gry)
}
```

## 3. Słowniki (Dozwolone Wartości)

Agent tworzący bazę może używać **tylko** wartości z poniższych słowników:

**Kategorie (`category`):**
* `romantic` - Romantyczne, patrzenie w oczy, wyznania
* `touch` - Dotyk, masaż, pieszczoty
* `fun` - Elementy zabawy, śmiechu, zgadywanki
* `challenge` - Wyzwanie, np. zakaz dotykania czegoś
* `hot` - Bardzo gorące zadania, striptiz, seks

**Płeć i Cel (`gender`, `target`):**
* `gender`: `female` (tylko Ona), `male` (tylko On), `both` (dla każdego).
* `target`: `performer` (wykonujący robi coś ze sobą), `partner` (wykonujący robi coś partnerowi), `both` (wspólna akcja).

**Części ciała Partnera (przeszkody - `targetArea`):**
*(Jeśli zadanie polega na robieniu czegoś na ciele partnera, określ to, by gra wiedziała, co zasugerować do zsunięcia)*
* `chest` - klatka piersiowa / piersi
* `bottom` - pośladki, krocze, miejsca intymne
* `feet` - stopy / nogi

**Zgody / Aktywności (`requiresActivities`):**
`kissing`, `touching`, `massage`, `dirty_talk`, `oral_give`, `oral_receive`, `toys`, `bdsm_light`, `roleplay`, `anal`

**Elementy Ubioru Damskiego:**
`stanik`, `majtki_f`, `koszulka_f`, `bluza_f`, `top`, `skarpetki_f`, `spodnie_f`, `rajstopy`, `sukienka`, `stroj_specjalny`

**Elementy Ubioru Męskiego:**
`bokserki`, `koszulka_m`, `bluza_m`, `spodnie`, `skarpetki_m`

**Akcesoria (`requiresAccessories`):**
`ice` (kostki lodu), `blindfold` (opaska na oczy), `oil` (olejek do masażu), `feather` (piórko), `whip` (pejcz/packa), `gag` (knebel), `handcuffs` (kajdanki/sznur), `vibrator` (wibrator)

---

## 4. Zadania Specjalne (Zadania Rozbierankowe - "undressingTasks")
Rozbieranie na stałe nie dzieje się głównie w normalnych zadaniach (zazwyczaj), ale w osobnej puli zadań generowanych przez silnik raz na etap dla każdego gracza. Tych zadań NIE mieszamy z normalną pulą `tasks`, dodaje się je do puli `undressingTasks`. Mają specjalne klucze:
* `isUndressing: true` (Zawsze)
* `stripsTarget`: 'female' lub 'male' (Kto fizycznie straci z siebie ubranie)
* `removesClothingFrom`: 'self' (Zdejmuję ze mnie) lub 'partner' (Zdejmuję z Ciebie)

*Przykład dla bota:*
```javascript
// Gdy On ma stracić ubranie, a ściąga je Ona (Ona losuje kartę)
{ 
  id: 'u_m_new', 
  text: 'Wydaj mu polecenie: każ mu zdjąć jedną rzecz, którą ma na sobie. Obserwuj każdy ruch.', 
  category: 'hot', gender: 'both', isUndressing: true, stripsTarget: 'male', removesClothingFrom: 'partner' 
}
```

---

## 5. Złote Reguły Treści dla Agenta (Prompt Instructions)

1. **Perspektywa:** Zadania wyświetlają się osobie, która je wylosowała. Treść "Zdejmij jego koszulkę" wylosowana przez kobietę (`gender: female`) oznacza, że ona ściąga koszulkę mężczyźnie. Jeśli zadanie to `gender: both`, pisz uniwersalnie: "Zdejmij koszulkę z partnera".
2. **Precyzja mechaniki ubrań:** 
   - Jeśli każesz graczowi użyć swoich nagich piersi, DODAJ `requiresNoClothing: ["koszulka_f", "stanik", "top", "bluza_f"]`.
   - Jeśli każesz graczowi pomasować penisa partnera, DODAJ `requiresActivities: ["touching"]` oraz `targetArea: "bottom"` (gra sama zasugeruje rozpięcie jego spodni).
   - Jeśli gracz musi polizać szyję partnerki używając lodu, DODAJ `requiresAccessories: ["ice"]`.
3. **Logika etapów:** 
   - Nie dodawaj seksu oralnego do Etapu 1. 
   - Etap 5 to punkt kulminacyjny (Shared Task) – treść musi brzmieć jak ostateczne, wielkie wyzwanie dla obojga.
4. **Brak sprzeczności:** Nie każ zdejmować na stałe ubrania (`removesClothing: ["stanik"]`), jeśli nie jest to zadanie wysoce specyficzne. Lepiej użyć `tempRemoveClothing`, np. *"Podwiń koszulkę, aby...*". Stałe usuwanie elementów zostaw silnikowi (`isUndressing`).
5. **Krótkie i pikantne:** Opisy mają działać na wyobraźnię, ale nie mogą to być eseje. Maksymalnie 3-4 krótkie zdania.
6. **Stoper (timeLimit):** Jeśli używasz `timed: true`, dobieraj czas logicznie (w sekundach). Masaż to 120-180 sekund, a drażnienie kostką lodu to np. 40-60 sekund. Unikaj zbyt krótkich (10s) lub zbyt długich (300s) akcji dla głównych pieszczot.

---

## 6. Szablony / Przykłady (Examples)

**Przykład 1: Średni etap, wymaga nagości losującej kobiety:**
```javascript
{
  "id": "s3_f_boobs",
  "text": "Oprzyj się o partnera. Używając swoich nagich piersi, wykonuj powolne, okrężne ruchy po jego klatce i brzuchu.",
  "category": "hot",
  "stage": 3,
  "timed": true,
  "timeLimit": 60,
  "target": "partner",
  "gender": "female",
  "requiresActivities": ["touching"],
  "requiresNoClothing": ["stanik", "koszulka_f", "top", "bluza_f"],
  "targetArea": "chest"
}
```

**Przykład 2: Męskie zadanie z wykorzystaniem gadżetu, bez rozbierania:**
```javascript
{
  "id": "s2_m_ice",
  "text": "Weź kostkę lodu w usta. Wolno przesuwaj nią od pępka partnerki w dół, aż do krawędzi jej bielizny. Nie używaj dłoni.",
  "category": "touch",
  "stage": 2,
  "timed": false,
  "target": "partner",
  "gender": "male",
  "requiresActivities": ["kissing", "touching"],
  "requiresAccessories": ["ice"],
  "targetArea": "bottom"
}
```

**Przykład 3: Zadanie z `tempRemoveClothing` i uniwersalną płcią:**
```javascript
{
  "id": "s1_both_massage",
  "text": "Czas na głęboki relaks. Wymyj dokładnie dłonie, weź olejek i wykonaj zmysłowy masaż pleców partnera.",
  "category": "touch",
  "stage": 1,
  "timed": true,
  "timeLimit": 120,
  "target": "partner",
  "gender": "both",
  "requiresActivities": ["massage"],
  "requiresAccessories": ["oil"],
  "tempRemoveClothing": "Na czas zadania poproś partnera o zdjęcie góry (koszulki/bluzy)."
}
```
