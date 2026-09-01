// ==================================================
// DANE GRY – PEŁNA BAZA
// ==================================================

// ---- Ubrania – Mężczyzna ----
import { Icons } from './icons.js';

export const maleClothingItems = [
  { id: 'buty', emoji: Icons.buty, label: 'Buty' },
  { id: 'skarpetki', emoji: Icons.skarpetki, label: 'Skarpetki' },
  { id: 'spodnie', emoji: Icons.spodnie, label: 'Spodnie' },
  { id: 'spodenki', emoji: Icons.spodenki, label: 'Spodenki' },
  { id: 'koszulka', emoji: Icons.koszulka, label: 'Koszulka' },
  { id: 'koszula', emoji: Icons.koszula, label: 'Koszula' },
  { id: 'bluza', emoji: Icons.bluza, label: 'Bluza' },
  { id: 'majtki', emoji: Icons.majtki, label: 'Majtki' },
  { id: 'bokserki', emoji: Icons.bokserki, label: 'Bokserki' },
  { id: 'okulary', emoji: Icons.okulary, label: 'Okulary' }
];

// ---- Ubrania – Kobieta ----
export const femaleClothingItems = [
  { id: 'szpilki', emoji: Icons.szpilki, label: 'Szpilki' },
  { id: 'buty', emoji: Icons.buty, label: 'Buty' },
  { id: 'skarpetki', emoji: Icons.skarpetki, label: 'Skarpetki' },
  { id: 'rajstopy', emoji: Icons.rajstopy, label: 'Rajstopy' },
  { id: 'ponczchy', emoji: Icons.ponczchy, label: 'Pończochy' },
  { id: 'kabaretki', emoji: Icons.kabaretki, label: 'Kabaretki' },
  { id: 'podkolanowki', emoji: Icons.podkolanowki, label: 'Podkolanówki' },
  { id: 'zakolanowki', emoji: Icons.zakolanowki, label: 'Zakolanówki' },
  { id: 'sukienka', emoji: Icons.sukienka, label: 'Sukienka' },
  { id: 'spodniczka', emoji: Icons.spodniczka, label: 'Spódniczka' },
  { id: 'spodnie', emoji: Icons.spodnie, label: 'Spodnie' },
  { id: 'spodenki', emoji: Icons.spodenki, label: 'Spodenki' },
  { id: 'leginsy', emoji: Icons.leginsy, label: 'Leginsy' },
  { id: 'top', emoji: Icons.top, label: 'Top' },
  { id: 'koszulka', emoji: Icons.koszulka, label: 'Koszulka' },
  { id: 'koszula', emoji: Icons.koszula, label: 'Koszula' },
  { id: 'bluza', emoji: Icons.bluza, label: 'Bluza' },
  { id: 'body', emoji: Icons.body, label: 'Body' },
  { id: 'majtki', emoji: Icons.majtki, label: 'Majtki' },
  { id: 'stanik', emoji: Icons.stanik, label: 'Stanik' },
  { id: 'szlafrok', emoji: Icons.szlafrok, label: 'Szlafrok' },
  { id: 'halka', emoji: Icons.halka, label: 'Halka' },
  { id: 'stroj_specjalny', emoji: Icons.stroj_specjalny, label: 'Strój specjalny' }
];

// ---- Strefy Ciała i ubrania, które ich dotyczą (do dynamicznych dopisków) ----
export const bodyAreas = {
  'bottom': ['spodniczka', 'sukienka', 'spodnie', 'spodenki', 'majtki', 'rajstopy', 'leginsy', 'bokserki'],
  'chest': ['koszulka', 'koszula', 'top', 'stanik', 'sukienka', 'bluza', 'body', 'szlafrok', 'halka'],
  'feet': ['buty', 'skarpetki', 'szpilki', 'rajstopy', 'ponczchy', 'kabaretki', 'podkolanowki', 'zakolanowki']
};

// ---- Zgody i granice (co dopuszczamy w grze) ----
export const activityItems = [
  { id: 'calowanie', emoji: Icons.calowanie, label: 'Namiętne całowanie' },
  { id: 'masaz', emoji: Icons.masaz, label: 'Masaż erotyczny' },
  { id: 'taniec', emoji: Icons.taniec, label: 'Erotyczny taniec / lapdance' },
  { id: 'szeptanie', emoji: Icons.szeptanie, label: 'Dirty talk / sprośności szeptem' },
  { id: 'oral_dawanie', emoji: Icons.oral_dawanie, label: 'Robienie orala partnerowi' },
  { id: 'oral_otrzymywanie', emoji: Icons.oral_otrzymywanie, label: 'Otrzymywanie orala' },
  { id: 'palcowka', emoji: Icons.palcowka, label: 'Pieszczenie palcami (penetracja)' },
  { id: 'stosunek', emoji: Icons.stosunek, label: 'Stosunek (penetracja)' },
  { id: 'wiazanie', emoji: Icons.wiazanie, label: 'Wiązanie / krępowanie rąk' },
  { id: 'klapsy', emoji: Icons.klapsy, label: 'Klapsy / bicie po pośladkach' },
  { id: 'gryzienie', emoji: Icons.gryzienie, label: 'Gryzienie / podgryzanie' },
  { id: 'duszenie_lekkie', emoji: Icons.duszenie_lekkie, label: 'Lekki ucisk na gardle (symbolicznie)' },
  { id: 'ciagnięcie_wlosow', emoji: Icons.gra, label: 'Ciągnięcie za włosy' },
  { id: 'dominacja', emoji: Icons.dominacja, label: 'Dominacja / wydawanie poleceń' },
  { id: 'patrzenie_oczy', emoji: Icons.patrzenie_oczy, label: 'Kontakt wzrokowy podczas aktu' },
  { id: 'noszenie', emoji: Icons.noszenie, label: 'Podnoszenie / pozycje stojące' },
  { id: 'rysowanie', emoji: Icons.rysowanie, label: 'Rysowanie / pisanie po ciele' },
  { id: 'karmienie', emoji: Icons.karmienie, label: 'Karmienie / jedzenie z ciała' },
  { id: 'komplementy', emoji: Icons.komplementy, label: 'Mówienie co czujesz / komplementy' }
];

// ---- Życzenia (wish suggestions) ----
export const wishSuggestions = [
  'Kolacja przy świecach 🕯️',
  'Masaż całego ciała przez 30 minut 💆',
  'Śniadanie do łóżka ☕',
  'Dzień bez telefonu – tylko we dwoje 📵',
  'Wybranie filmu na wieczór 🎬',
  'Partner robi wszystkie obowiązki domowe przez dzień 🧹',
  'Wspólna kąpiel 🛁',
  'Randka niespodzianka – partner planuje wszystko 🎁',
  'List miłosny napisany ręcznie 💌',
  'Wspólne pieczenie ciasta 🎂',
  'Partner spełnia jedno życzenie (w granicach rozsądku) ⭐',
  'Wspólna sesja zdjęciowa 📸',
  'Wieczór gier planszowych 🎲',
  'Partner robi prezent ręcznie (DIY) 🎨',
  'Spacer po parku z kawą ☕',
  'Wspólne oglądanie zachodu słońca 🌅',
  'Wspólne ćwiczenia / joga 🧘',
  'Kolacja w ulubionej restauracji 🍷',
  'Cały dzień w łóżku z filmami 🛏️',
  'Partner pisze 10 powodów „dlaczego Cię kocham" ❤️'
];

// ---- Długość gry ----
export const gameLengthOptions = [
  { value: 'short', label: 'Krótka gra', desc: '~15–20 minut', emoji: Icons.czas, totalTasks: 14 },
  { value: 'medium', label: 'Normalna gra', desc: '~30–45 minut', emoji: Icons.gra, totalTasks: 20 },
  { value: 'long', label: 'Długa gra', desc: '~60–90 minut', emoji: Icons.ogień, totalTasks: 27 }
];

// Ile zadań na etap (etapy 1-4; etap 5 obsługiwany oddzielnie przez renderFinalSharedTask w app.js)
export const stageConfig = {
  short: [4, 4, 3, 2],
  medium: [6, 6, 4, 3],
  long: [8, 8, 6, 4]
};

export const stageNames = ["1. Napięcie i Zmysły", "2. Pikantność i Dominacja", "3. Zejście na dół", "4. Stosunek", "5. Spust"];

// ---- Dodatki / akcesoria ----
export const accessoryItems = [
  { id: 'zel', emoji: Icons.zel, label: 'Żel / olejek' },
  { id: 'opaska', emoji: Icons.opaska, label: 'Opaska na oczy' },
  { id: 'kajdanki', emoji: Icons.kajdanki, label: 'Kajdanki / wiązanie' },
  { id: 'pioro', emoji: Icons.pioro, label: 'Piórko' },
  { id: 'kostka_lodu', emoji: Icons.kostka_lodu, label: 'Kostki lodu' },
  { id: 'swiece', emoji: Icons.swiece, label: 'Świece' },
  { id: 'czekolada', emoji: Icons.czekolada, label: 'Czekolada / bita śmietana' },
  { id: 'muzyka', emoji: Icons.muzyka, label: 'Muzyka / głośnik' },
  { id: 'koc', emoji: Icons.koc, label: 'Koc / poduszki' },
  { id: 'szalik_jedwab', emoji: Icons.szalik_jedwab, label: 'Szalik / jedwab' },
  { id: 'wibrator', emoji: Icons.wibrator, label: 'Wibrator / gadżet' },
  { id: 'szpicruta', emoji: Icons.szpicruta, label: 'Szpicruta / pejcz' },
  { id: 'szpilki', emoji: Icons.szpilki, label: 'Szpilki' },
  { id: 'knebel', emoji: Icons.knebel, label: 'Knebel' }
];

// ---- Utrudnienia (modyfikatory) ----
export const challengeModifiers = [
  { id: 'zamkniete_oczy', label: 'Całe zadanie z zamkniętymi oczami', emoji: Icons.zamkniete_oczy, bonusPoints: 5 },
  { id: 'bez_slow', label: 'Bez słów – tylko jęki i odgłosy', emoji: Icons.bez_slow, bonusPoints: 4 },
  { id: 'jedna_reka', label: 'Tylko jedną ręką (drugą za plecami)', emoji: Icons.jedna_reka, bonusPoints: 4 },
  { id: 'super_wolno', label: 'Ekstremalnie powoli – żadnych szybkich ruchów', emoji: Icons.super_wolno, bonusPoints: 5 },
  { id: 'lewa_reka', label: 'Tylko lewą ręką (lub słabszą)', emoji: Icons.lewa_reka, bonusPoints: 3 },
  { id: 'glosne_jeki', label: 'Głośne jęczenie przez całe zadanie', emoji: Icons.glosne_jeki, bonusPoints: 3 },
  { id: 'dirty_talk', label: 'Ciągłe mówienie sproośności szeptem', emoji: Icons.dirty_talk, bonusPoints: 4 },
  { id: 'sam_jezyk', label: 'Tylko język – bez użycia rąk', emoji: Icons.sam_jezyk, bonusPoints: 6 },
  { id: 'podwojny_czas', label: 'Podwójny czas trwania zadania', emoji: Icons.podwojny_czas, bonusPoints: 7 },
  { id: 'wydawanie_polecen', label: 'Partner wydaje ci polecenia co robić', emoji: Icons.wydawanie_polecen, bonusPoints: 4 }
];

// ---- Punktacja ----
export const scoring = {
  // Bez utrudnienia
  completed: 10,
  partial: 3,
  failed: -5,
  // Z utrudnieniem (bonus dodawany do completed/partial)
  // Za niewykonane z utrudnieniem – dodatkowa kara
  failedWithModifier: -8,
};

// ==================================================
// ZADANIA ROZBIERANE (Dodatkowa pula)
// ==================================================
// stripsTarget      – kto TRACI ubranie ('female' lub 'male')
// removesClothingFrom – 'self' (aktywny traci) lub 'partner' (pasywny traci)
// Silnik dobiera zadanie tak, by w każdym etapie każdy z graczy stracił dokładnie 1 element.
export const undressingTasks = [

  // ---- stripsTarget: 'female' – ONA traci ubranie ----
  // ON zdejmuje z ONA
  { id: 'u_f1', text: 'Zróbcie przerwę na striptiz. Zdejmij z niej jedną wybraną część garderoby – powoli i zmysłowo, patrząc jej prosto w oczy przez cały czas.', category: 'hot', gender: 'both', isUndressing: true, stripsTarget: 'female', removesClothingFrom: 'partner' },
  // ONA zdejmuje z siebie
  { id: 'u_f2', text: 'Zasłoń oczy partnerowi na 10 sekund i w tym czasie zdejmij z siebie jeden element ubrania. Niech po otwarciu oczu zgadnie, co zniknęło.', category: 'fun', gender: 'both', isUndressing: true, stripsTarget: 'female', removesClothingFrom: 'self' },
  // ONA zdejmuje z siebie – bez rąk
  { id: 'u_f3', text: 'Pozbądź się jednej warstwy ze swojego ciała bez użycia dłoni – pomóż sobie zębami, ocieraniem o mebel lub poproś partnera, by zdjął to samymi ustami.', category: 'hot', gender: 'both', isUndressing: true, stripsTarget: 'female', removesClothingFrom: 'self' },
  // ON wydaje polecenie – ONA zdejmuje z siebie
  { id: 'u_f4', text: 'Wydaj jej polecenie: każ jej zdjąć jedną rzecz, którą ma na sobie, w sposób jak najbardziej uwodzicielski. Obserwuj każdy ruch.', category: 'hot', gender: 'both', isUndressing: true, stripsTarget: 'female', removesClothingFrom: 'partner' },
  // ON zdejmuje z ONA jedną ręką
  { id: 'u_f5', text: 'Rozbierz ją z jednej rzeczy używając wyłącznie jednej ręki. Nie spiesz się – smakuj ten moment i nie odrywaj od niej wzroku.', category: 'touch', gender: 'both', isUndressing: true, stripsTarget: 'female', removesClothingFrom: 'partner' },

  // ---- stripsTarget: 'male' – ON traci ubranie ----
  // ONA zdejmuje z ON
  { id: 'u_m1', text: 'Zróbcie przerwę na striptiz. Zdejmij z niego jedną wybraną część garderoby – powoli i zmysłowo, patrząc mu prosto w oczy przez cały czas.', category: 'hot', gender: 'both', isUndressing: true, stripsTarget: 'male', removesClothingFrom: 'partner' },
  // ON zdejmuje z siebie
  { id: 'u_m2', text: 'Zasłoń oczy partnerce na 10 sekund i w tym czasie zdejmij z siebie jeden element ubrania. Niech po otwarciu oczu zgadnie, co zniknęło.', category: 'fun', gender: 'both', isUndressing: true, stripsTarget: 'male', removesClothingFrom: 'self' },
  // ON zdejmuje z siebie – bez rąk
  { id: 'u_m3', text: 'Pozbądź się jednej warstwy ze swojego ciała bez użycia dłoni – pomóż sobie zębami, ocieraniem o mebel lub poproś partnerkę, by zdjęła to samymi ustami.', category: 'hot', gender: 'both', isUndressing: true, stripsTarget: 'male', removesClothingFrom: 'self' },
  // ONA wydaje polecenie – ON zdejmuje z siebie
  { id: 'u_m4', text: 'Wydaj mu polecenie: każ mu zdjąć jedną rzecz, którą ma na sobie, w sposób jak najbardziej uwodzicielski. Obserwuj każdy ruch.', category: 'hot', gender: 'both', isUndressing: true, stripsTarget: 'male', removesClothingFrom: 'partner' },
  // ONA zdejmuje z ON jedną ręką
  { id: 'u_m5', text: 'Rozbierz go z jednej rzeczy używając wyłącznie jednej ręki. Nie spiesz się – smakuj ten moment i nie odrywaj od niego wzroku.', category: 'touch', gender: 'both', isUndressing: true, stripsTarget: 'male', removesClothingFrom: 'partner' },
];

// ==================================================
// BAZA ZADAŃ
// ==================================================
//
// Każde zadanie ma:
//   id           – unikalny identyfikator
//   text         – treść zadania
//   category     – kategoria (romantic, touch, fun, challenge, hot)
//   stage        – etap gry (1-5)
//   timed        – czy ma timer
//   timeLimit    – czas w sekundach (jeśli timed)
//   target       – 'performer' (ten kto losuje), 'partner' (drugi gracz), 'both' (oboje)
//
// MECHANIKA FILTROWANIA (najważniejsza!):
//   requiresActivities  – tablica czynności które MUSZĄ być zaznaczone u wykonującego
//   requiresClothing    – tablica ubrań które MUSZĄ być na wykonującym (np. do ściągania)
//   requiresNoClothing  – tablica ubrań których wykonujący NIE MOŻE mieć (odsłonięte ciało)
//   removesClothing     – jeśli zadanie WYKONANE – permanentnie ściąga ubranie z gracza
//   tempRemoveClothing  – w treści zadania jest info że na czas zadania trzeba coś ściągnąć (NIE zmienia stanu)
//   requiresAccessories – wymaga konkretnych dodatków
//
// Logika filtrowania:
// 1. requiresActivities  → gracz musi mieć WSZYSTKIE zaznaczone
// 2. requiresClothing    → gracz musi MIEĆ te elementy (np. żeby je ściągnąć)
// 3. requiresNoClothing  → gracz NIE MOŻE mieć tych elementów (bo zadanie dotyczy nagiego ciała)
// 4. requiresAccessories → gra musi mieć te akcesoria
// 5. removesClothing     → po WYKONANIU zadania: permanentnie usuwa element z aktualnego stanu gracza
//                          System śledzi to → kolejne zadania na odsłonięte ciało stają się dostępne
//

export const tasks = [
  {
    "id": "s1_f1",
    "text": "Usiądź okrakiem na kolanach partnera – poczuj jego ciepło przez materiał. Pochyl się do jego szyi i zacznij składać gorące, mokre pocałunki od ucha aż po kark, wdychając jego zapach. Kiedy spróbuje sięgnąć dłońmi niżej – złap go za nadgarstki i odłóż na bok z uśmiechem. Jeszcze nie teraz. Przez pełną minutę niech czuje tylko twoje usta i oddech na skórze.",
    "category": "romantic",
    "stage": 1,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "gender": "female"
  },
  {
    "id": "s1_f2",
    "text": "Niech partner położy się na brzuchu i odda ci się w pełni. Usiądź na jego pośladkach, połóż ciepłe dłonie na jego barkach i zacznij powoli rozgniatać mięśnie, schodząc wzdłuż kręgosłupa. Pochyl się nisko do jego ucha i szeptem opowiadaj mu zasady dzisiejszego wieczoru – co go czeka, czego nie wolno, i co zrobisz jeśli będzie grzeczny.",
    "category": "touch",
    "stage": 1,
    "timed": false,
    "target": "performer",
    "requiresActivities": [
      "masaz"
    ],
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s1_f3",
    "text": "Stań tuż przed partnerem – tak blisko, żeby czuł ciepło twojego ciała. Patrząc mu głęboko w oczy, sięgnij do pierwszego guzika jego koszuli i rozepnij go powoli, jakby ten moment miał trwać wiecznie. Guzik po guziku, odsłaniając jego skórę, muskaj opuszkami palców każdy centymetr obnażonej klatki piersiowej. Nie spiesz się – niech drży z oczekiwania.",
    "category": "romantic",
    "stage": 1,
    "timed": false,
    "target": "performer",
    "gender": "female",
    "targetArea": "chest",
    "requiresClothing": [
      "koszulka"
    ],
    "removesClothing": [
      "koszulka"
    ]
  },
  {
    "id": "s1_f4",
    "text": "Zasłoń partnerowi oczy opaską i szepnij: nie ruszaj się. Pochyl się nad nim i złóż pierwszy mokry pocałunek w nieoczekiwanym miejscu – niech zgadnie gdzie. Potem drugi, w zupełnie innym punkcie, wolniej i gorętszy. Trzeci – najdłuższy, z lekkim przygryzeniem. Z każdym pocałunkiem czuj jak jego ciało reaguje na twój dotyk w ciemności.",
    "category": "fun",
    "stage": 1,
    "timed": false,
    "target": "both",
    "requiresAccessories": [
      "opaska"
    ],
    "gender": "female"
  },
  {
    "id": "s1_f5",
    "text": "Połóż opuszki palców na jego ramieniu i zacznij przejeżdżać w dół – tak powoli, jakbyś malowała niewidzialny obraz na jego skórze. Wzdłuż ramienia, przez obojczyk, w dół klatki piersiowej. Czuj jak pod twoimi palcami pojawiają się dreszcze, jak włoski stają dęba. Patrz mu w oczy przez cały czas, nie mrugając, nie przyspieszając – niech tonie w oczekiwaniu.",
    "category": "touch",
    "stage": 1,
    "timed": true,
    "timeLimit": 45,
    "target": "performer",
    "gender": "female",
    "targetArea": "chest"
  },
  {
    "id": "s1_m1",
    "text": "Połóż partnerkę delikatnie na plecach i pochyl się nad nią. Zacznij od jednego, elektryzującego pocałunku tuż pod uchem. Potem kolejny, niżej – na szyi, czując jak puls przyspiesza pod twoimi wargami. Schodź powoli linią mokrych pocałunków przez obojczyk na dekolt, rozkoszując się zapachem jej skóry. Omijaj wszystko, co kusi – niech wyobraźnia pracuje za ciebie.",
    "category": "romantic",
    "stage": 1,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "gender": "male",
    "targetArea": "bottom"
  },
  {
    "id": "s1_m2",
    "text": "Zasłoń oczy partnerce. Używając czegoś gładkiego lub chłodnego (np. kostki lodu z drinka), przejedź powoli wzdłuż jej kręgosłupa, od karku aż do lędźwi.",
    "category": "touch",
    "stage": 1,
    "timed": false,
    "target": "performer",
    "requiresAccessories": [
      "opaska"
    ],
    "gender": "male",
    "targetArea": "feet"
  },
  {
    "id": "s1_m3",
    "text": "Niech partnerka usiądzie na brzegu łóżka. Klęknij przed nią, weź jej dłonie w swoje i zacznij masować każdy palec z osobna – powoli, głęboko, czując puls na jej nadgarstku. Uciskaj kciukami wnętrzne dłoni, kreśl kółka, splątuj jej palce ze swoimi. Patrz jej głęboko w oczy przez cały czas – niech poczuje, że ten intymny gest jest zapowiedzią tego, co zrobisz z resztą jej ciała.",
    "category": "romantic",
    "stage": 1,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "requiresActivities": [
      "masaz"
    ],
    "gender": "male",
    "targetArea": "bottom"
  },
  {
    "id": "s1_m4",
    "text": "Zbliż usta na milimetr do warg partnerki – tak blisko, żeby czuła twój oddech na swoich ustach, ale nie dotykaj. Ocieraj się nosem o jej policzek, muskaj wargami powietrze tuż przy jej skórze. Kiedy spróbuje cię pocałować – cofnij się o milimetr z uśmiechem. Drażnij się z nią przez pełne 30 sekund, budując napięcie aż oboje nie wytrzymacie.",
    "category": "hot",
    "stage": 1,
    "timed": true,
    "timeLimit": 30,
    "target": "both",
    "gender": "male"
  },
  {
    "id": "s1_m5",
    "text": "Patrząc partnerce głęboko w oczy, sięgnij do jej bluzki i jednym płynnym, pewnym ruchem zsuń ramiączka z jej ramion – albo rozepnij guziki, nie odrywając od niej wzroku nawet na sekundę. Kiedy materiał opadnie odsłaniając nagie ramię, pochyl się powoli i złóż na nim jeden, aksamitny pocałunek – tak wolny i gorący, że przejdzie ją dreszcz od stóp do głów.",
    "category": "hot",
    "stage": 1,
    "timed": false,
    "target": "performer",
    "removesClothing": [
      "koszula"
    ],
    "gender": "male",
    "targetArea": "chest"
  },
  {
    "id": "s2_f1",
    "text": "Chwyć jego dłonie i spleć razem przed nim – albo skrępuj nadgarstki symbolicznie szalikiem. Pochyl się nad nim z góry, patrząc mu w oczy, i zacznij składać mokre pocałunki w dół jego brzucha – powoli, centymetr po centymetrze. Zatrzymaj się prowokacyjnie tuż nad paskiem, oddychając gorąco na jego skórę. Zostań tam przez 30 sekund, drażniąc go bliskością twoich ust.",
    "category": "hot",
    "stage": 2,
    "timed": true,
    "timeLimit": 30,
    "target": "performer",
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s2_f2",
    "text": "Powoli ściągnij górną część ubrania – niech partner patrzy na każdy centymetr odsłanianej skóry. Zostań w bieliźnie lub obnaż się całkowicie. Klęknij nad leżącym partnerem i pochyl się tak, żeby twój dekolt muskał jego klatkę piersiową i twarz – czuj jak jego oddech przyspiesza przy każdym przesunięciu.",
    "category": "hot",
    "stage": 2,
    "timed": true,
    "timeLimit": 40,
    "target": "both",
    "removesClothing": [
      "koszulka",
      "stanik"
    ],
    "gender": "female",
    "targetArea": "chest"
  },
  {
    "id": "s2_f3",
    "text": "Każ mu zamknąć oczy. Wpleć palce w jego włosy i chwyć mocno, ale zmysłowo – odchyl jego głowę lekko do tyłu, odsłaniając szyję. Przyciągnij jego twarz do siebie i obdarz go głębokim, dominującym pocałunkiem – wepchnięciem języka daj mu poczucie, że to ty tu rządzisz. Niech poczuje twoją siłę i namiętność jednocześnie.",
    "category": "hot",
    "stage": 2,
    "timed": false,
    "target": "both",
    "requiresActivities": [
      "calowanie"
    ],
    "gender": "female"
  },
  {
    "id": "s2_f4",
    "text": "Zdejmując część jego ubrań na siłę, posadź partnera na łóżku i powiedz szeptem, w jaki dominujący, \"brudny\" sposób pragniesz żeby zaciągnął cię za chwilę do wyra.",
    "category": "fun",
    "stage": 2,
    "timed": false,
    "target": "performer",
    "requiresActivities": [
      "szeptanie"
    ],
    "gender": "female"
  },
  {
    "id": "s2_f5",
    "text": "Usiądź złączonymi udami na jego kolanach, patrząc mu w oczy. Przez całą minutę ruszaj biodrami symulując powolną jazdę – jemu nie wolno dotykać twoich piersi.",
    "category": "hot",
    "stage": 2,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s2_m1",
    "text": "Chwyć partnerkę i przycisnij ją delikatnie, ale pewnie plecami do ściany. Zablokuj ją swoim ciałem – niech czuje twoją bliskość całą sobą. Pochyl się powoli i całuj ją w usta głęboko, z językiem, dominująco. Połóż jedną dłoń delikatnie na jej gardle – lekko, symbolicznie – i poczuj jak jej puls przyspiesza pod twoimi palcami.",
    "category": "hot",
    "stage": 2,
    "timed": true,
    "timeLimit": 30,
    "target": "both",
    "requiresActivities": [
      "calowanie"
    ],
    "gender": "male"
  },
  {
    "id": "s2_m2",
    "text": "Od wróć partnerkę na brzuch i zwiąż jej dłonie z tyłu szalikiem lub paskiem – luźno, ale na tyle pewnie, żeby czuła się bezbronna. Usiądź lekko na jej nogach i zacznij całować jej kark – powoli, mokro, z podgryzaniem. Schodź wzdłuż kręgosłupa, liżąc i dmucha jąc na wilgotną skórę, czując jak wije się pod tobą.",
    "category": "hot",
    "stage": 2,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "requiresAccessories": [
      "kajdanki"
    ],
    "gender": "male",
    "targetArea": "bottom"
  },
  {
    "id": "s2_m3",
    "text": "Niech partnerka położy się wygodnie na plecach i zamknie oczy. Klęknij nad nią, rozprowadź odrobinę olejku po jej piersiach – poczuj jak śliska staje się jej skóra pod twoimi dłońmi. Przez dwie gorące minuty oddaj się wyłącznie jej biustowi: całuj, ssij, pieść ustami i językiem na zmianę jedną i drugą pierś, wsłuchując się w jej oddech. Nie schodź niżej niż pępek – niech pragnie więcej.",
    "category": "hot",
    "stage": 2,
    "timed": true,
    "timeLimit": 120,
    "target": "performer",
    "requiresAccessories": [
      "zel"
    ],
    "gender": "male",
    "targetArea": "chest"
  },
  {
    "id": "s2_m4",
    "text": "Podejdź do partnerki od tyłu kiedy się tego nie spodziewa i daj jej soczystego klapsa w pośladek – niech zabrzmi głośno. Zanim zdąży zareagować, obejmij ją ciasno w talii, odgarń włosy i zanurz twarz w zagłębieniu jej szyi. Wdychaj jej zapach, całuj tę miękką skórę za uchem, ocieraj się nosem o kark i nie odrywaj się ani na chwilę, czując jak jej ciało zaczyna drżeć.",
    "category": "hot",
    "stage": 2,
    "timed": false,
    "target": "performer",
    "gender": "male",
    "targetArea": "bottom"
  },
  {
    "id": "s2_m5",
    "text": "Każ jej położyć ręce płasko na łóżku. Oblizuj opuszkami zębów linię jej szczęki i powoli przesuwaj ręce po wewnętrznej stronie jej ud (nie wyżej!).",
    "category": "hot",
    "stage": 2,
    "timed": true,
    "timeLimit": 45,
    "target": "performer",
    "gender": "male"
  },
  {
    "id": "s3_b1",
    "text": "Ułóżcie się razem w pozycji 69 – głowa jednego między udami drugiego. Zamknijcie oczy i oddajcie się całkowicie wzajemnym pieszczotom oralnym jednocześnie. Czujcie oddech i język partnera na sobie, wsłuchujcie się w swoje jęki. Niech partner od góry dyktuje głębsze, namiętniejsze tempo.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 120,
    "target": "both",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "both",
    "targetArea": "bottom"
  },
  {
    "id": "s3_f1",
    "text": "Powoli zsuń jego bieliźnę, patrząc mu w oczy z dołu z głodem. Obejmij go delikatnie dłonią u nasady – poczuj jak twardnieje pod twoim dotykiem. Weź go gładko do ust i zacznij miarowe, hipnotyzujące ruchy, głowa w górę i w dół, nie używając rąk. Wydawaj głośne dźwięki przyjemności – niech wie, że uwielbiasz to robić.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 45,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s3_f2",
    "text": "Połóż go na plecach i nasyp mu na brzuch odrobinę olejku – niech obserwuje jak spływa. Rozprowadź go śliskimi dłońmi po jego całej długości i po swoich piersiach. Pochyl się nad nim, ściskając go między piersiami, i zacznij ślizgać się całym ciałem – piersi, dłonie, usta – wszystko naraz, w mokrym, gorącym tańcu.",
    "category": "touch",
    "stage": 3,
    "timed": true,
    "timeLimit": 90,
    "target": "performer",
    "requiresAccessories": [
      "zel"
    ],
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female",
    "targetArea": "bottom",
    "requiresNoClothing": [
      "koszulka_f",
      "stanik",
      "bluza_f",
      "top",
      "koszulka_m",
      "bluza_m"
    ]
  },
  {
    "id": "s3_f3",
    "text": "Wejdź między jego nogi i popatrz na niego spod przymrużonych powiek z głodem w oczach. Weź sam czubek do ust – tylko centymetr, nie więcej. Drażnij go językiem, kreśląc kółka na główce, ssąc lekko i wypuszczając. Nie schodź głębiej, póki nie zacznie błagać. To ty decydujesz kiedy dostanie więcej.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female"
  },
  {
    "id": "s3_f4",
    "text": "Chwyć go mocno i pewnie obu rękami. Zacznij szybkie, skręcające ruchy dłońmi w przeciwnych kierunkach – poczuj jak drga i pulsuje pod twoimi palcami. Patrz mu odważnie w oczy i pytaj szeptem: chcesz mocniej? Czuj jak jego oddech się rwie, jak biodra zaczynają poruszać się w rytm twoich rąk.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 30,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female"
  },
  {
    "id": "s3_f5",
    "text": "Weź kostkę lodu z drinka albo polej odrobinę zimnego napoju prosto na jego członka – niech zasyczy z zaskoczenia. Zanim zim no zdąży dotrzeć do niego – natychmiast pochyl się i oblizuj go całego ciepłymi, mokrymi wargami, slizgając się językiem po spływających kroplach. Kontrast zimna i gorąca wywoła dreszcze na całym ciele.",
    "category": "fun",
    "stage": 3,
    "timed": false,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s3_m1",
    "text": "Niech partnerka położy się wygodnie na plecach i rozchyli nogi. Klęknij między nimi, posmaruj dłoń olejkiem i połóż ją płasko na niej – poczuj gorąco pod opuszkami. Zacznij powolne, kręcące ruchy dłonią, wsłuchując się w każdy jej oddech, każdy cichy jęk. Z minuty na minutę dodawaj tempa i nacisku – obserwuj jak jej ciało się wygina, jak biodra zaczynają poruszać się w twoim rytmie.",
    "category": "touch",
    "stage": 3,
    "timed": true,
    "timeLimit": 120,
    "target": "performer",
    "requiresAccessories": [
      "zel"
    ],
    "requiresActivities": [
      "palcowka"
    ],
    "gender": "male",
    "targetArea": "bottom"
  },
  {
    "id": "s3_m2",
    "text": "Zsun jej majtki jednym zdecydowanym, głodnym ruchem – niech poczuje twoje pożądanie. Zanurz się między jej uda, czując gorąco jej skóry na policzkach. Przyłóż płaski język u samego dołu i prowadź go powoli do góry szerokim, mokrym ruchem. Na górze zassij delikatnie i zacznij od nowa – naprzemiennie szerokie lizanie i precyzyjne ssanie, wsłuchując się w muzykę jej jęków.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 90,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "male",
    "targetArea": "bottom"
  },
  {
    "id": "s3_m3",
    "text": "Wsuwaj powoli jeden palec do środka, czując jak jej ciało otwiera się na twój dotyk. Dodaj drugi, zagiętymi opuszkami szukając tego jednego czułego miejsca. Kciukiem na zewnątrz kreśl delikatne kółka, wsłuchując się w jej oddech. Reguluj głębokość i tempo jak dyrygent – reagując na każde drżenie jej bioder, każdy cichy szept.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "requiresActivities": [
      "palcowka"
    ],
    "gender": "male"
  },
  {
    "id": "s3_m4",
    "text": "Posadź partnerkę na krawędzi łóżka na wysokości twojej twarzy. Złap ją pod kolanami i rozsun nogi szeroko. Zanurz się w niej – napieraj językiem na sam środek, mocno i zdecydowanie. Niech ona chwyci cię za włosy i przyciąga do siebie drżącymi biodrami, dyktując gdzie ma być twój język.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "male"
  },
  {
    "id": "s3_m5",
    "text": "Połóż partnerkę na brzuchu z lekko rozsuniętymi nogami. Klęknij za nią i delikatnie wtul twarz w zagłębienie u dołu jej pleców. Rozsuń dłońmi jej pośladki i odnajdź językiem najbardziej wrażliwe miejsce od nietypowej strony – od tyłu. Delikatne muśnięcia i ciepły oddech w tym zakazanym kącie doprowadzą ją do szaleństwa.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "male",
    "targetArea": "bottom"
  },
  {
    "id": "s4_f1",
    "text": "Połóż partnera na plecach i wejdź na niego powoli, czując jak wypełnia cię centymetr po centymetrze. Oprzyj dłonie na jego klatce piersiowej i zacznij głębokie, leniwe ruchy biodrami – w górę i w dół, kontrolując każdą sekundę. Patrz mu w oczy z góry i niech widzi na twojej twarzy czystą rozkosz. To ty tu rządzisz.",
    "category": "hot",
    "stage": 4,
    "timed": true,
    "timeLimit": 120,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "female",
    "targetArea": "bottom",
    "requiresNoClothing": [
      "majtki_f",
      "bokserki",
      "spodnie"
    ]
  },
  {
    "id": "s4_f2",
    "text": "Odwróć się tyłem do leżącego partnera i usiądź na nim powoli, opierając dłonie o jego kolana. Wygnij zmysłowo plecy, eksponując swoje pośladki tuż przed jego oczami. Zacznij kręcić biodrami w kółko – powoli, hipnotycznie – czując go głęboko w sobie. Niech leży i podziwia widok, nie będąc w stanie nic zrobić.",
    "category": "hot",
    "stage": 4,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "female",
    "targetArea": "bottom",
    "requiresNoClothing": [
      "majtki_f",
      "bokserki",
      "spodnie"
    ]
  },
  {
    "id": "s4_f3",
    "text": "Chwyć jego dłonie i przyciśnij je nad głową do poduszki – niech czuje twoje palce splatające się z jego. Wejdź na niego z kolanami po bokach jego torsu, przylepiając swoje ciało do jego. Pochyl się do karku i zacznij szybkie, gwałtowne ruchy biodrami, gryząc go lekko w szyję przy każdym pchnięciu. Oddychajcie jednym gorącym powietrzem.",
    "category": "hot",
    "stage": 4,
    "timed": false,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "female",
    "targetArea": "bottom",
    "requiresNoClothing": [
      "majtki_f",
      "bokserki",
      "spodnie"
    ]
  },
  {
    "id": "s4_f4",
    "text": "Oprzyj się plecami o krawędź łóżka i otwórz się przed partnerem, rozchylając nogi szeroko. Niech on wejdzie od przodu – powoli, płytko, drażniąc cię samym czubkiem. Czuj każdy milimetr, każde delikatne pchnięcie, które ślizga się po najbardziej wrażliwych miejscach. Łap go za biodra i kontroluj głębokość.",
    "category": "hot",
    "stage": 4,
    "timed": false,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "female"
  },
  {
    "id": "s4_f5",
    "text": "Leżąc na plecach w misjonarzu, unieś obie nogi wysoko i zarzuć je na szyję partnera – otwierając się przed nim maksymalnie. Pociągnij go za ramiona w dół, przyciągając całe jego ciało do siebie, tak ciasno żebyście oddychali jednym gorącym powietrzem. Szepnij mu: głębiej.",
    "category": "hot",
    "stage": 4,
    "timed": false,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "female"
  },
  {
    "id": "s4_m1",
    "text": "Niech partnerka oprze się łokciami o materac, wypinając się do tyłu. Podejdź od tyłu, chwyć ją mocno za biodra obiema dłońmi i poczuj ciepło jej ciała. Wejdź w nią zdecydowanie i zacznij ostre, pierwotne pchnięcia – dociskając ją do materaca przy każdym. Powstrzymuj jęki tak długo jak dasz radę.",
    "category": "hot",
    "stage": 4,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "male"
  },
  {
    "id": "s4_m2",
    "text": "Połóż partnerkę na plecach i delikatnie złącz jej nogi razem – ciasno, udo przy udzie. Ułóż się na niej w klasycznym misjonarzu i poczuj jak ścisk jej ud podwaja każde doznanie. Poruszaj się długimi, stabilnymi pchnięciami, całując każdy centymetr jej odsłoniętej szyi. Niech czuje twój ciężar i ciepło.",
    "category": "hot",
    "stage": 4,
    "timed": false,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "male",
    "targetArea": "bottom"
  },
  {
    "id": "s4_m3",
    "text": "Odwróć partnerkę na bok i ułóż się za nią łyżeczkowo – wtulając nos w jej włosy, wdychając zapach. Wejdź w nią od tyłu powoli, obejmując ją ciasno i chwytając jej piersi obiema dłońmi. Poruszajcie się razem – wolno, gładko, bez pośpiechu – jakby czas się zatrzymał i istniała tylko wasza bliskość.",
    "category": "romantic",
    "stage": 4,
    "timed": true,
    "timeLimit": 90,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "male",
    "targetArea": "chest"
  },
  {
    "id": "s4_m4",
    "text": "Leżąc nad partnerką, chwyć jedno jej udo i przerzuć jej zgiętą nogę przez swoje ramię. Ten nowy kąt otwiera zupełnie inne doznania – wchodź głębiej i precyzyjniej z każdym pchnięciem. Poczuj jak jej ciało odpowiada drżeniem, jak wygina się pod tobą szukając jeszcze więcej.",
    "category": "hot",
    "stage": 4,
    "timed": false,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "male",
    "targetArea": "bottom"
  },
  {
    "id": "s4_m5",
    "text": "Pociągnij partnerkę na sam brzeg łóżka – niech jej pośladki zwisają w powietrzu. Stań stabilnie przed nią, chwyć ją za biodra i wejdź jednym głębokim, pełnym ruchem. Poczuj jak unosi się przy każdym pchnięciu, jak zaciska dłonie na prześcieradle. Oprzyj dłoń delikatnie na jej klatce i dyktuj tempo od wolnego do ekstremalnego.",
    "category": "hot",
    "stage": 4,
    "timed": false,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "male",
    "targetArea": "bottom"
  },
  {
    "id": "s5_twarz_1",
    "text": "Niech partnerka uklęknie przed tobą na miękkim i odchyli głowę do tyłu, otwierając usta z lekkim uśmiechem. Wpleć wolną dłoń w jej włosy i zacznij pieścić się drugą, nie odrywając od niej oczu. Niech ona kładzie ciepłe dłonie na twoich udach i szeptem podpowiada tempo – szybciej... wolniej... teraz. Kiedy poczujesz że nadchodzi – pozwól żeby wszystko spłynęło na jej twarz, policzki i uchylone wargi.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "both",
    "gender": "male",
    "finaleTarget": "twarz",
    "targetArea": "bottom"
  },
  {
    "id": "s5_twarz_2",
    "text": "Partnerka klęka przed tobą, prostuje dumnie plecy, wystawia język i patrzy ci w oczy wyzywająco, jakby mówiła: no dalej. Chwyć ją delikatnie za podbródek jedną ręką – niech czuje twój dotyk na szczęce. Drugą ręką rozpędzaj się coraz szybciej, czując jej gorący oddech na skórze. Na sam koniec to ona decyduje – zamyka oczy i czeka, albo patrzy prosto na ciebie w momencie kiedy kończysz na jej twarz.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "both",
    "gender": "male",
    "finaleTarget": "twarz"
  },
  {
    "id": "s5_twarz_3",
    "text": "Weź go głęboko w usta, poczuj pulsowanie na języku i pieść namiętnie, nie spiesząc się. Wsłuchuj się w jego oddech – kiedy zacznie przyspieszać i poczujesz że jest na granicy, powoli go wyjmij, przytrzymaj dłonią i skieruj na swoją twarz. Odchyl głowę, otwórz usta i pozwól mu skończyć, patrząc mu głęboko w oczy.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female",
    "finaleTarget": "twarz",
    "targetArea": "bottom"
  },
  {
    "id": "s5_usta_1",
    "text": "Weź go głęboko do ust i nie wypuszczaj. Przyspiesz tempo ssania i ruchów dłonią u nasady – doprowadź go do końca wyłącznie ustami, połykając wszystko.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female",
    "finaleTarget": "usta",
    "targetArea": "bottom"
  },
  {
    "id": "s5_usta_2",
    "text": "Klęknij przed partnerem. Jedną ręką masuj jądra, drugą trzon – a ustami ssij sam czubek. Nie przerywaj aż skończy ci prosto w usta.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female",
    "finaleTarget": "usta"
  },
  {
    "id": "s5_usta_3",
    "text": "Połóż się wygodnie na plecach z głową na poduszce. Niech partner klęczy nad twoją twarzą – bierz go do ust w tym tempie, które on dyktuje, aż skończy.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "both",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female",
    "finaleTarget": "usta"
  },
  {
    "id": "s5_piersi_1",
    "text": "Rozprowadź ciepły olejek po swoich piersiach aż lśnią w świetle. Pochyl się nad leżącym partnerem i zamknij go między nimi – poczuj pulsujące ciepło na swojej skórze. Poruszaj się w górę i w dół powoli i zmysłowo, co chwilę zerkając mu w oczy z dołu. Niech czuje śliskość, ciasność i twój gorący oddech – aż nie wytrzyma i skończy na twoim mokrym dekolcie.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "performer",
    "requiresAccessories": [
      "zel"
    ],
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female",
    "finaleTarget": "piersi",
    "targetArea": "chest",
    "requiresNoClothing": [
      "koszulka_f",
      "stanik",
      "bluza_f",
      "top",
      "koszulka_m",
      "bluza_m"
    ]
  },
  {
    "id": "s5_piersi_2",
    "text": "Niech partnerka usiądzie na brzegu łóżka, powoli zdejmie stanik i obejmie swoje piersi dłońmi, ugniatając je i prezentując ci jak dar. Klęknij blisko niej – tak blisko żebyś czuł ciepło jej skóry. Pieść się patrząc na nią z głodem w oczach, a ona niech bawi się swoimi piersiami tuż przed tobą, prowokując cię i nęcąc. Kiedy poczujesz że zbliża się finał – wstań i pozwól żeby wszystko spłynęło na jej obnażone piersi.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "both",
    "gender": "male",
    "finaleTarget": "piersi",
    "targetArea": "chest",
    "requiresNoClothing": [
      "koszulka_f",
      "stanik",
      "bluza_f",
      "top",
      "koszulka_m",
      "bluza_m"
    ]
  },
  {
    "id": "s5_piersi_3",
    "text": "Połóż się na plecach i poczuj jak partnerka siada na twoim brzuchu, pochylając się nad tobą tak, że jej piersi kołyszą się tuż nad twoją klatką. Ona pieści cię dłońmi w dole, szepczuc do ucha jak bardzo ją to podnieca. Patrz na jej ciało nad sobą – kiedy fala przyjemności nadejdzie, skończ na jej piersi wiszące nad tobą jak najsłodszy owoc.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "both",
    "gender": "male",
    "finaleTarget": "piersi",
    "targetArea": "chest",
    "requiresNoClothing": [
      "koszulka_f",
      "stanik",
      "bluza_f",
      "top",
      "koszulka_m",
      "bluza_m"
    ]
  },
  {
    "id": "s5_pupa_1",
    "text": "Niech partnerka położy się na brzuchu, wsunie poduszkę pod biodra i leniwie się przeciągnie, eksponując swoje krągłości. Klęknij za nią i podziwiaj ten widok – gładź jej plecy wolną ręką, czując ciepło jej skóry pod palcami, drugą oddaj się przyjemności. Niech ona kręci lekko biodrami, prowokując cię. Kiedy fala nadejdzie – pochyl się nisko i skończ na jej gorące, wypięte pośladki, rozsmarowując wszystko leniwymi ruchami dłoni.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "both",
    "gender": "male",
    "finaleTarget": "pupa",
    "targetArea": "bottom",
    "requiresNoClothing": [
      "majtki_f",
      "bokserki",
      "spodnie"
    ]
  },
  {
    "id": "s5_pupa_2",
    "text": "Partnerka klęka na czworakach i wygina pięknie plecy, zapraszając cię gestem bioder. Wejdź w nią od tyłu i zacznij od leniwych, głębokich ruchów, rozkoszując się każdą sekundą. Stopniowo nabieraj tempa, czując jak napięcie rośnie – a w ostatniej, elektryzującej chwili wyjdź i skończ na jej gorącą pupę. Niech poczuje twoje ciepło spływające po skórze.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "male",
    "finaleTarget": "pupa",
    "targetArea": "bottom"
  },
  {
    "id": "s5_pupa_3",
    "text": "Odwróć się tyłem do partnera na czworakach i wygnij zmysłowo plecy, wypinając się ku niemu. Sięgnij ręką za siebie, między swoimi udami, i chwyć go – poczuj jak twardnieje w twojej dłoni. Pieść go powoli zza pleców, kręcąc przy tym biodrami hipnotycznie. Obejrzyj się przez ramię i szepnij mu że chcesz poczuć wszystko na swojej pupie. Kiedy wyczujesz że jest na krawędzi – nakieruj go dokładnie tam.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "performer",
    "gender": "female",
    "finaleTarget": "pupa",
    "targetArea": "bottom"
  },
  {
    "id": "s5_stopy_1",
    "text": "Usiądź wygodnie na brzegu łóżka i wyciągnij nogi przed siebie z gracją, opierając stopy o jego biodra. Poruszaj palcami powoli i prowokacyjnie – daj mu chwilę żeby napatrzył się na każdy szczegół. On klęczy przed tobą zafascynowany, pieści się jedną ręką a drugą głaszcze twoje podeszwy i kostki. Kiedy jego oddech przyspieszy – przysuń stopy bliżej i otocz go nimi, pozwalając mu skończyć prosto na twoje nagie stopy.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "both",
    "gender": "female",
    "finaleTarget": "stopy",
    "targetArea": "chest"
  },
  {
    "id": "s5_stopy_2",
    "text": "Rozłóż się na plecach jak królowa i oprzyj stopy płasko na jego klatce piersiowej – niech czuje twoje ciepło. Poruszaj palcami po jego skórze, drapiąc go lekko paznokciami stóp. On klęczy między twoimi nogami, wpatrzony w twoje stopy jak zahipnotyzowany, i pieści się. Baw się nim – naciskaj mocniej, potem lżej. Kiedy oddech mu się urwie – opuść stopy niżej i pozwól mu zlać się prosto na twoje podeszwy.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "both",
    "gender": "female",
    "finaleTarget": "stopy",
    "targetArea": "chest"
  },
  {
    "id": "s5_stopy_3",
    "text": "Partnerka leży na plecach i kładzie swoje miękkie, ciepłe stopy na twoim członku. Delikatnie masuje go podeszwami, ściskając między stopami i poruszając w górę i w dół. Odchylasz głowę do tyłu czując zupełnie nowe doznanie – gładkość jej stóp, nacisk palców, powolny rytm. Kiedy przyjemność osiąga szczyt – skończ na jej stopy, obserwując jak po nich spływa.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "both",
    "gender": "male",
    "finaleTarget": "stopy",
    "targetArea": "bottom"
  },
  {
    "id": "s5_nogi_1",
    "text": "Partnerka kładzie się na plecach, rozchyla leniwie nogi i patrzy na ciebie z dołu z wyczekiwaniem w oczach. Klęknij nad nią – niech czuje twoje ciepło. Jedną dłonią błądź po jej brzuchu i biodrach, druga zajmuje się tobą. Ona głaszcze twoje uda od dołu, muskając palcami skórę coraz wyżej. Kiedy świat zacznie wirować – pochyl się i pozwól żeby wszystko spłynęło na jej rozchylone, gorące uda.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "both",
    "gender": "male",
    "finaleTarget": "nogi",
    "targetArea": "bottom"
  },
  {
    "id": "s5_nogi_2",
    "text": "Wejdź w partnerkę w misjonarzu. Kiedy będziesz blisko – wyjdź i skończ na jej rozchylone wewnętrzne uda, ocierając się o jej skórę.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "male",
    "finaleTarget": "nogi",
    "targetArea": "bottom"
  },
  {
    "id": "s5_nogi_3",
    "text": "Ułóż się blisko partnera na boku, twarzą do niego, tak blisko że czujesz jego oddech na wargach. Jedną ręką chwyć go i zacznij pieścić leniwymi, zmysłowymi ruchami, drugą błądź po jego klatce piersiowej, drapiąc paznokciami. Wysuń udo do przodu, odsłaniając gładką, ciepłą skórę. Szepcz mu wprost do ust: skończ na moje udo... chcę to poczuć. Kontroluj tempo – drażnij się, zwalniaj kiedy jest blisko, potem przyspieszaj znowu.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "performer",
    "gender": "female",
    "finaleTarget": "nogi",
    "targetArea": "bottom"
  },
  {
    "id": "s5_chusteczka_1",
    "text": "Usiądź na nim w pozycji jeźdźca i nie zwalniaj tempa. Kiedy poczujesz że jest blisko – zeskocz i złap chusteczkę, kończąc ręką prosto w nią.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "female",
    "finaleTarget": "chusteczka"
  },
  {
    "id": "s5_chusteczka_2",
    "text": "Połóż się obok partnera. Jedną ręką pieść go intensywnie, drugą trzymaj przygotowaną chusteczkę. Szepcz mu do ucha i skończ czyściutko w chusteczkę.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "performer",
    "gender": "female",
    "finaleTarget": "chusteczka"
  },
  {
    "id": "s5_chusteczka_3",
    "text": "Partnerka układa się wygodnie na boku, podpierając głowę ręką i patrząc na ciebie z czułym głodem w oczach, trzymając chusteczkę w drugiej dłoni. Klęknij blisko niej – niech czuje twoje ciepło. Pieść się patrząc jej w oczy, a ona niech szepcze ci co lubi w tobie najbardziej. Kiedy przyjemność narasta i tracisz oddech – ona delikatnie obejmuje cię chusteczką i łapie wszystko, nie odrywając od ciebie wzroku.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "both",
    "gender": "male",
    "finaleTarget": "chusteczka",
    "targetArea": "bottom"
  },
  {
    "id": "s1_f6",
    "text": "Włącz ulubioną wolną piosenkę. Stań przed partnerem i wykonaj powolny, zmysłowy taniec, delikatnie muskając jego twarz i ramiona końcami swoich włosów.",
    "category": "romantic",
    "stage": 1,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female"
  },
  {
    "id": "s1_f7",
    "text": "Usiądź za partnerem. Przyciśnij swoje usta do jego karku i wydychaj ciepłe powietrze, jednocześnie rysując paznokciami delikatne wzory na jego plecach od góry do dołu.",
    "category": "touch",
    "stage": 1,
    "timed": true,
    "timeLimit": 45,
    "target": "performer",
    "requiresActivities": [
      "rysowanie"
    ],
    "gender": "female"
  },
  {
    "id": "s1_f8",
    "text": "Weź kostkę lodu do ust. Przesuwaj ją wargami po szyi partnera, od obojczyka aż po płatek ucha, pozwalając zimnym kroplom spływać po jego skórze.",
    "category": "touch",
    "stage": 1,
    "timed": true,
    "timeLimit": 40,
    "target": "performer",
    "requiresAccessories": [
      "kostka_lodu"
    ],
    "gender": "female",
    "targetArea": "feet"
  },
  {
    "id": "s1_f9",
    "text": "Zadzwoń do partnera (nawet siedząc obok niego). Szeptem opowiedz mu przez telefon, co chciałabyś mu dzisiaj zrobić. Nie odrywaj słuchawki przez pełną minutę.",
    "category": "fun",
    "stage": 1,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "gender": "female"
  },
  {
    "id": "s1_f10",
    "text": "Połóż dłoń partnera na swoim sercu. Patrząc mu w oczy, powiedz pięć rzeczy, które w nim uwielbiasz, po każdej składając pocałunek na innym miejscu jego twarzy.",
    "category": "romantic",
    "stage": 1,
    "timed": false,
    "target": "both",
    "requiresActivities": [
      "komplementy"
    ],
    "gender": "female"
  },
  {
    "id": "s1_m6",
    "text": "Stań za partnerką i odgarnij jej włosy na bok. Złóż serię mokrych, gorących pocałunków wzdłuż linii jej szyi, od ucha po ramię, szepcząc między każdym pocałunkiem jedno słowo uznania.",
    "category": "romantic",
    "stage": 1,
    "timed": true,
    "timeLimit": 45,
    "target": "performer",
    "requiresActivities": [
      "calowanie"
    ],
    "gender": "male",
    "targetArea": "chest"
  },
  {
    "id": "s1_m7",
    "text": "Połóż partnerkę na brzuchu. Używając tylko opuszków palców, rysuj na jej plecach niewidzialne wzory, litery i kształty – niech zgaduje co rysujesz. Dotyk musi być ledwie wyczuwalny.",
    "category": "fun",
    "stage": 1,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "requiresActivities": [
      "rysowanie"
    ],
    "gender": "male",
    "targetArea": "chest"
  },
  {
    "id": "s1_m8",
    "text": "Zawiąż partnerce oczy szalikiem. Podaj jej do ust trzy różne przekąski lub owoce – niech odgadnie co to. Między każdym podaniem złóż lekki pocałunek na jej wargach.",
    "category": "fun",
    "stage": 1,
    "timed": false,
    "target": "both",
    "requiresActivities": [
      "karmienie"
    ],
    "gender": "male"
  },
  {
    "id": "s1_m9",
    "text": "Chwyć partnerkę za ręce i przyciągnij ją blisko. Przytulaj ją mocno od tyłu, szepcząc do ucha swoją ulubioną wspólną historię, całując ją między zdaniami w szyję.",
    "category": "romantic",
    "stage": 1,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "requiresActivities": [
      "szeptanie"
    ],
    "gender": "male"
  },
  {
    "id": "s1_m10",
    "text": "Usiądź na krześle i posadź partnerkę sobie na kolanach twarzą do siebie. Trzymając ją za biodra, kołysz ją delikatnie w rytm wyimaginowanej muzyki, utrzymując kontakt wzrokowy.",
    "category": "romantic",
    "stage": 1,
    "timed": true,
    "timeLimit": 45,
    "target": "both",
    "requiresActivities": [
      "patrzenie_oczy"
    ],
    "gender": "male"
  },
  {
    "id": "s2_f6",
    "text": "Popchnij partnera na łóżko i usiądź na nim okrakiem. Złap jego nadgarstki i przyciśnij je do materaca nad jego głową. Pochyl się i całuj go agresywnie, kontrolując każdy ruch.",
    "category": "hot",
    "stage": 2,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "requiresActivities": [
      "calowanie"
    ],
    "gender": "female"
  },
  {
    "id": "s2_f7",
    "text": "Zdejmij swoją koszulkę i rzuć ją w partnera z uśmiechem. Podejdź do niego, chwyć za kołnierz i przyciągnij do namiętnego pocałunku, pozwalając mu poczuć ciepło twojej skóry.",
    "category": "hot",
    "stage": 2,
    "timed": false,
    "target": "both",
    "removesClothing": [
      "koszulka"
    ],
    "gender": "female",
    "targetArea": "chest",
    "requiresClothing": [
      "koszulka"
    ]
  },
  {
    "id": "s2_f8",
    "text": "Zasłoń oczy partnerowi. Przejeżdżaj piórkiem lub końcówkami palców po CAŁYM jego torsie, od szyi przez pierś aż po biodra – im bliżej paska, tym wolniej i delikatniej.",
    "category": "touch",
    "stage": 2,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "requiresAccessories": [
      "pioro"
    ],
    "gender": "female",
    "targetArea": "chest"
  },
  {
    "id": "s2_f9",
    "text": "Klęknij między nogami partnera. Rozpinaj mu powoli pasek i spodnie, ale NIE ściągaj ich do końca. Zamiast tego, całuj przez materiał wzdłuż linii bioder, prowokując go do szaleństwa.",
    "category": "hot",
    "stage": 2,
    "timed": true,
    "timeLimit": 45,
    "target": "performer",
    "gender": "female"
  },
  {
    "id": "s2_f10",
    "text": "Na moment stań się nauczycielką. Każ partnerowi powiedzieć ci dokładnie gdzie i jak chce być dotykany – ale rób ODWROTNOŚĆ tego, co mówi. Kto się nie śmieje, wygrywa bonus.",
    "category": "fun",
    "stage": 2,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "gender": "female"
  },
  {
    "id": "s2_m6",
    "text": "Złap partnerkę za włosy (delikatnie ale pewnie). Odchyl jej głowę do tyłu odsłaniając szyję i obsyp ją intensywnymi pocałunkami połączonymi z lekkimi podgryzaniami, od podbródka po obojczyk.",
    "category": "hot",
    "stage": 2,
    "timed": true,
    "timeLimit": 45,
    "target": "performer",
    "requiresActivities": [
      "calowanie"
    ],
    "gender": "male"
  },
  {
    "id": "s2_m7",
    "text": "Zdejmij jej spódnicę lub spodnie jednym zdecydowanym ruchem. Chwyć ją za uda i podnieś na blat lub komodę, stając między jej nogami. Całuj jej kolana i wewnętrzne partie ud.",
    "category": "hot",
    "stage": 2,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "removesClothing": [
      "spodnie"
    ],
    "gender": "male",
    "targetArea": "bottom",
    "requiresClothing": [
      "spodnie",
      "spodniczka"
    ]
  },
  {
    "id": "s2_m8",
    "text": "Użyj olejku lub żelu. Rozprowadź go po całych plecach partnerki, od karku po lędźwie, wykonując głęboki, mocny masaż. Z każdą minutą schodź dłońmi coraz niżej.",
    "category": "touch",
    "stage": 2,
    "timed": true,
    "timeLimit": 90,
    "target": "performer",
    "requiresActivities": [
      "masaz"
    ],
    "requiresAccessories": [
      "zel"
    ],
    "gender": "male"
  },
  {
    "id": "s2_m9",
    "text": "Zapal świece. Przyciągnij partnerkę do siebie stojąc w półmroku. Tańczcie wolno, przyciskając się do siebie całym ciałem, aż żadne z was nie wytrzyma i pierwszy pocałunek eksploduje.",
    "category": "romantic",
    "stage": 2,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "requiresAccessories": [
      "swiece"
    ],
    "gender": "male"
  },
  {
    "id": "s2_m10",
    "text": "Odwróć partnerkę tyłem do siebie. Obejmij ją w pasie, jedną ręką gładź jej brzuch coraz niżej (nie wchodząc pod bieliznę), a drugą trzymaj mocno za biodro. Szeptaj jej do ucha co zamierzasz.",
    "category": "hot",
    "stage": 2,
    "timed": true,
    "timeLimit": 45,
    "target": "performer",
    "requiresActivities": [
      "szeptanie"
    ],
    "gender": "male",
    "targetArea": "chest"
  },
  {
    "id": "s3_f6",
    "text": "Weź jego męskość do dłoni i całuj ją powoli po całej długości – od nasady do samego czubka – jakbyś składała pocałunki na najcenniejszym przedmiocie. Rób to z pełnym oddaniem przez minutę.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s3_f7",
    "text": "Każ mu stać prosto. Klęknij przed nim, chwyć za pośladki i przyciągnij biodra do siebie. Kontroluj głębokość i tempo – to TY dyktuj warunki, patrząc mu w oczy od dołu.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s3_f8",
    "text": "Użyj obu dłoni jednocześnie – jedną pieść trzon, drugą jądra. Synchronizuj ruchy, stopniowo przyspieszając. Co 15 sekund zanurzaj czubek w ustach na moment, po czym wracaj do rąk.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s3_f9",
    "text": "Posmaruj swoje piersi olejkiem. Ułóż go na plecach i ściskając piersi wokół jego członka, poruszaj się w górę i w dół, dając mu pełny efekt wizualny i fizyczny tzw. \"spanish\".",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "requiresAccessories": [
      "zel"
    ],
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s3_f10",
    "text": "Naprzemiennie ssij i liż główkę małymi, szybkimi ruchami języka, jednocześnie masując trzon prawą ręką w skręcającym ruchu. Utrzymuj rytm bez przerwy przez pełną minutę.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female"
  },
  {
    "id": "s3_m6",
    "text": "Połóż partnerkę na plecach i podłóż poduszkę pod jej biodra. Zacznij od pocałunków na wewnętrznej stronie ud, spiralnie zbliżając się do centrum – drażnij się, zanim dotrzesz do celu.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 90,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "male"
  },
  {
    "id": "s3_m7",
    "text": "Przyłóż płaski język do całej długości jej szparki i wykonuj bardzo powolne, szerokie ruchy od dołu do góry. Na samej górze zatrzymaj się i delikatnie zassij łechtaczkę. Powtarzaj w kółko.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 90,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "male"
  },
  {
    "id": "s3_m8",
    "text": "Użyj jednocześnie ust na łechtaczce i dwóch palców wewnątrz. Wykonuj palcami ruch \"chodź tu\" (stymulacja punktu G), jednocześnie utrzymując stałe ssanie językiem.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 120,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie",
      "palcowka"
    ],
    "gender": "male"
  },
  {
    "id": "s3_m9",
    "text": "Usiądź na brzegu łóżka. Niech partnerka stanie nad tobą z nogą na twoim ramieniu. Złap ją za pośladki i wykonuj mineta dokładnie w tym ustawieniu – stojąca pozycja daje jej pełną kontrolę nad dociskiem.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "male",
    "targetArea": "bottom"
  },
  {
    "id": "s3_m10",
    "text": "Masuj kciukami jej łechtaczkę małymi kółkami, stopniowo zwiększając nacisk i tempo. Drugą ręką głaszcz wewnętrzną stronę jej ud. Obserwuj jej oddech i dostosowuj się do reakcji.",
    "category": "touch",
    "stage": 3,
    "timed": true,
    "timeLimit": 90,
    "target": "performer",
    "requiresActivities": [
      "palcowka"
    ],
    "gender": "male",
    "targetArea": "chest"
  },
  {
    "id": "s4_f6",
    "text": "Połóż się na plecach na brzegu łóżka z głową zwisającą przez krawędź. Każ partnerowi stanąć nad tobą – w tej odwróconej pozycji obejmij go nogami w talii i pozwól mu dyktować rytm.",
    "category": "hot",
    "stage": 4,
    "timed": true,
    "timeLimit": 90,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "female"
  },
  {
    "id": "s4_f7",
    "text": "Usiądź na nim tyłem (reverse cowgirl), opierając się dłońmi o jego kolana. Wykonuj powolne, kołyszące ruchy biodrami w kształcie ósemki, kontrolując głębokość i kąt wejścia.",
    "category": "hot",
    "stage": 4,
    "timed": true,
    "timeLimit": 90,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "female"
  },
  {
    "id": "s4_f8",
    "text": "Oprzyj się dłońmi o ścianę, wypchnij biodra do tyłu. Każ partnerowi wejść od tyłu, ale to TY kontrolujesz tempo cofając i napierając biodrami. Dyktuj mu ciszej/głośniej/szybciej.",
    "category": "hot",
    "stage": 4,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "female"
  },
  {
    "id": "s4_f9",
    "text": "Usiądź na nim okrakiem przodem, ale zamiast podskakiwać – wykonuj intensywne ruchy mielące biodrami w przód i w tył, dociskając się miednicą jak najmocniej. Złap go za szyję i przyciągnij do pocałunku.",
    "category": "hot",
    "stage": 4,
    "timed": true,
    "timeLimit": 90,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "female"
  },
  {
    "id": "s4_f10",
    "text": "Leżąc na boku, unieś jedną nogę wysoko w górę (partner trzyma ją za łydkę). W tej otwartej pozycji pozwól mu na głębokie, wolne pchnięcia – dopóki oboje nie straci kontroli nad oddechem.",
    "category": "hot",
    "stage": 4,
    "timed": false,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "female"
  },
  {
    "id": "s4_m6",
    "text": "Posadź partnerkę na blacie kuchennym lub komodzie. Stań między jej nogami, chwyć mocno za uda i zacznij wchodzić powoli, ale do pełnej głębokości – utrzymuj wolne, kontrolowane tempo.",
    "category": "hot",
    "stage": 4,
    "timed": true,
    "timeLimit": 90,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "male",
    "targetArea": "bottom"
  },
  {
    "id": "s4_m7",
    "text": "Połóż partnerkę na brzuchu z zamkniętymi nogami. Wejdź od tyłu i poruszaj się w umiarkowanym tempie – ta pozycja daje ekstremalne ściskanie. Opieraj się dłońmi o jej plecy.",
    "category": "hot",
    "stage": 4,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "male",
    "targetArea": "chest"
  },
  {
    "id": "s4_m8",
    "text": "Podnieś partnerkę – niech oplecie cię nogami w pasie. Oprzyj jej plecy o ścianę i wejdź w nią w stojącej pozycji. Utrzymaj ją mocno za pośladki, dyktując głębokie pchnięcia.",
    "category": "hot",
    "stage": 4,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "requiresActivities": [
      "stosunek",
      "noszenie"
    ],
    "gender": "male",
    "targetArea": "bottom"
  },
  {
    "id": "s4_m9",
    "text": "Ułóż się w klasycznego misjonarza, ale podłóż poduszkę pod jej biodra unosząc je do góry. To zmienia kąt o kilka stopni – uderz w nowy punkt precyzyjnymi, rytmicznymi ruchami.",
    "category": "hot",
    "stage": 4,
    "timed": true,
    "timeLimit": 90,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "male",
    "targetArea": "chest"
  },
  {
    "id": "s4_m10",
    "text": "Usiadźcie naprzeciwko siebie – partnerka na twoich biodrach z nogami owiniętymi wokół twojej talii (pozycja lotosu). Kołyszcie się razem, patrząc sobie w oczy, łącząc fizyczność z bliskością.",
    "category": "romantic",
    "stage": 4,
    "timed": true,
    "timeLimit": 120,
    "target": "both",
    "requiresActivities": [
      "stosunek",
      "patrzenie_oczy"
    ],
    "gender": "male"
  },
  {
    "id": "s1_f11",
    "text": "Stań tyłem do partnera. Powoli, centymetr po centymetrze, zsuwaj ramiączko z jednego ramienia, potem z drugiego. Obejrzyj się przez ramię z prowokacyjnym uśmiechem, ale nie pozwól mu dotknąć – niech tylko patrzy przez pełne 30 sekund.",
    "category": "hot",
    "stage": 1,
    "timed": true,
    "timeLimit": 30,
    "target": "performer",
    "gender": "female"
  },
  {
    "id": "s1_f12",
    "text": "Usiądź na kolanach partnera twarzą do niego. Chwyć jego dłonie i połóż je sobie na biodrach. Kołysz się powoli na boki, muskając wargami jego ucho, szyję i kącik ust – ale kategorycznie nie całuj go w usta. Utrzymuj napięcie przez pełną minutę.",
    "category": "romantic",
    "stage": 1,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "requiresActivities": [
      "patrzenie_oczy"
    ],
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s1_f13",
    "text": "Weź dłoń partnera i przyłóż do swoich ust. Powoli całuj każdy jego palec z osobna – od kciuka do małego palca – delikatnie oblizując opuszki językiem. Przy każdym palcu patrz mu głęboko w oczy bez mrugnięcia.",
    "category": "touch",
    "stage": 1,
    "timed": true,
    "timeLimit": 45,
    "target": "performer",
    "gender": "female"
  },
  {
    "id": "s1_m11",
    "text": "Podejdź do partnerki od tyłu i delikatnie zbierz jej włosy na bok. Zbliż usta na milimetr do jej karku i oddychaj ciepło – nie dotykając skóry. Po 15 sekundach złóż pierwszy mokry pocałunek dokładnie za uchem, potem schodź linią pocałunków aż do barku.",
    "category": "romantic",
    "stage": 1,
    "timed": true,
    "timeLimit": 40,
    "target": "performer",
    "gender": "male"
  },
  {
    "id": "s1_m12",
    "text": "Posadź partnerkę na krześle. Klęknij przed nią i zdejmij jej buta z jednej nogi – powoli, jakby to był najcenniejszy akt wieczoru. Masuj jej stopę i łydkę, obejmując ją obiema dłońmi, cały czas utrzymując kontakt wzrokowy. Powtórz z drugą nogą.",
    "category": "touch",
    "stage": 1,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "requiresActivities": [
      "masaz"
    ],
    "gender": "male",
    "targetArea": "chest"
  },
  {
    "id": "s1_m13",
    "text": "Obejmij partnerkę od tyłu w talii. Przyciśnij usta do jej ucha i szeptem opowiedz jej swoją ulubioną fantazję – co chciałbyś z nią dziś zrobić, krok po kroku. Mów powoli, robiąc pauzy, żeby każde słowo trafiło. Nie przerywaj przez pełną minutę.",
    "category": "hot",
    "stage": 1,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "requiresActivities": [
      "szeptanie"
    ],
    "gender": "male"
  },
  {
    "id": "s2_f11",
    "text": "Popchnij partnera na łóżko na plecy. Usiądź okrakiem na jego biodrach (w ubraniu lub bieliźnie). Chwyć dół jego koszulki i zdejmij ją powoli ciągnąc do góry – kiedy materiał zakryje mu twarz, zatrzymaj się i całuj go przez materiał w usta, dłonie przypinając nad głową.",
    "category": "hot",
    "stage": 2,
    "timed": false,
    "target": "both",
    "gender": "female",
    "targetArea": "bottom",
    "requiresClothing": [
      "koszulka"
    ],
    "removesClothing": [
      "koszulka"
    ]
  },
  {
    "id": "s2_f12",
    "text": "Każ partnerowi usiąść z zamkniętymi oczami i rękami za plecami. Przejedź wzdłuż jego klatki piersiowej i brzucha samymi końcówkami paznokci – od szyi po linię bokserek, rysując niewidzialne trasy. Naprzemiennie dodawaj gorące dmuchnięcia z ust i zimne muśnięcia lodu.",
    "category": "touch",
    "stage": 2,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "requiresAccessories": [
      "kostka_lodu"
    ],
    "gender": "female",
    "targetArea": "chest"
  },
  {
    "id": "s2_f13",
    "text": "Weź pasek lub szalik i zawiąż dłonie partnera za plecami – luźno ale symbolicznie. Stanąc przed nim, powoli rozbieraj się do bielizny, element po elemencie, robiąc z każdego aktu minishow. On może tylko patrzeć, nie wolno mu się ruszać ani mówić.",
    "category": "hot",
    "stage": 2,
    "timed": false,
    "target": "both",
    "requiresAccessories": [
      "kajdanki"
    ],
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s2_m6_b",
    "text": "Chwyć partnerkę za oba nadgarstki jedną ręką i przytrzymaj je nad jej głową leżąc nad nią. Drugą ręką przejeżdżaj wolno po jej ciele – od szyi, przez piersi, brzuch, aż do wewnętrznej strony ud. Nie schodź niżej niż krawędź bielizny. Utrzymuj mocny chwyt i kontakt wzrokowy.",
    "category": "hot",
    "stage": 2,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "gender": "male",
    "targetArea": "chest"
  },
  {
    "id": "s2_m11",
    "text": "Posadź partnerkę na brzegu łóżka. Klęknij przed nią i zdejmij jej spodnie lub spódnicę powoli, całując każdy centymetr odsłanianej skóry – od bioder przez uda aż po kolana i łydki. Między pocałunkami szepcz jej co zamierzasz zrobić później.",
    "category": "hot",
    "stage": 2,
    "timed": false,
    "target": "performer",
    "gender": "male",
    "targetArea": "bottom",
    "requiresClothing": [
      "spodnie",
      "spodniczka"
    ],
    "removesClothing": [
      "spodnie",
      "spodniczka"
    ]
  },
  {
    "id": "s2_m12",
    "text": "Niech partnerka położy się na brzuchu, zamknie oczy i odda ci się całkowicie. Usiądź na jej udach – poczuj ciepło jej ciała pod sobą. Wylej cieniutki strumień rozgrzanego olejku wzdłuż jej kręgosłupa i obserwuj jak spływa. Zanurz dłonie w śliskości i zacznij rozgniatać zmysłowo jej ramiona, schodząc wzdłuż pleców, uciskając boki, czując jak napięcie opuszcza jej mięśnie. Z każdą chwilą schodź dłońmi coraz niżej – przez talię, lędźwie, aż twoje palce zaczną błądzić po krągłościach pośladków.",
    "category": "touch",
    "stage": 2,
    "timed": true,
    "timeLimit": 120,
    "target": "performer",
    "requiresActivities": [
      "masaz"
    ],
    "requiresAccessories": [
      "zel"
    ],
    "gender": "male",
    "targetArea": "bottom",
    "requiresNoClothing": [
      "majtki_f",
      "bokserki",
      "spodnie"
    ]
  },
  {
    "id": "s3_f11",
    "text": "Połóż partnera na plecach i usiądź między jego nogami. Zacznij od powolnych pocałunków na wewnętrznej stronie ud, spiralnie zbliżając się do centrum. Kiedy dotrzesz – weź sam czubek do ust i wykonuj tylko delikatne kółka językiem na główce, nie schodząc niżej. Utrzymuj ten drażniący ruch przez pełną minutę.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female"
  },
  {
    "id": "s3_f12",
    "text": "Każ mu stanąć. Klęknij przed nim i chwyć za pośladki obiema dłońmi. Zacznij od nasady – bardzo wolnymi ruchami wciągaj go do ust, milimetr po milimetrze, aż na pełną głębokość. Potem równie powoli wypuszczaj. Powtarzaj ten ultrapowalny cykl tyle razy ile wytrzymacie.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 90,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s3_f13",
    "text": "Rozprowadź olejek po obu dłoniach aż lśnią – niech partner patrzy jak rozcierasz go powoli między palcami. Obejmij go jedną śliską dłonią i zacznij skręcające ruchy, drugą delikatnie masuj jądra kółkami kciuka. Poczuj jego ciało napinające się pod twoim dotykiem. Co jakiś czas pochyl się i przejedz gorącym językiem po samym czubku – a potem wróć do rąk, jakby nigdy nic, patrząc mu w oczy z figlarnym uśmiechem.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 90,
    "target": "performer",
    "requiresAccessories": [
      "zel"
    ],
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s3_m11",
    "text": "Połóż partnerkę na plecach, podłóż poduszkę pod jej biodra. Rozsuwaj jej nogi kolanami, całując wewnętrzną stronę ud – najpierw prawe od kolana do góry, potem lewe. Za każdym razem zatrzymuj się tuż przed centrum. Za trzecim podejściem – przylóż płaski język i zacznij powolny ruch od dołu do góry.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 90,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "male"
  },
  {
    "id": "s3_m12",
    "text": "Ułóż jej nogi na swoich ramionach leżąc między nimi. Jedną dłonią rozchyl delikatnie fałdy, drugą gładź jej brzuch. Językiem wykonuj ruch alfabetu – literuj jej imię na łechtaczce, litera po literze. Za każdym razem kiedy wyrazi głośniej przyjemność, zacznij od nowa.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 120,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "male",
    "targetArea": "bottom"
  },
  {
    "id": "s3_m13",
    "text": "Wsuwaj dwa palce powoli do środka, zagiętymi opuszkami szukając tego jednego miejsca, od którego cała drży. Drugą ręką zajmij się na zewnątrz – delikatne, kręcące kółka, ledwo dotykając. Zacznij powoli jak w transie, wsłuchując się w każdy jej oddech, każdy szept, każdy drzący jęk. Kiedy zacznie oddychać szybciej – nie zmieniaj absolutnie niczego, utrzymuj ten sam cudowny rytm, nawet jeśli błaga cię o więcej.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 120,
    "target": "performer",
    "requiresActivities": [
      "palcowka"
    ],
    "gender": "male",
    "targetArea": "bottom"
  },
  {
    "id": "s4_f11",
    "text": "Połóż partnera na plecach i usiądź na nim w pozycji jeźdźca, opierając dłonie na jego klatce piersiowej. Zacznij od minimalnych ruchów biodrami – ledwie wyczuwalne kołysanie. Stopniowo, co 15 sekund, zwiększaj amplit udę ruchów, aż po pełne głębokie zjazdy. Kontroluj każdy centymetr.",
    "category": "hot",
    "stage": 4,
    "timed": true,
    "timeLimit": 90,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s4_f12",
    "text": "Stań twarzą do ściany i oprzyj o nią dłonie wysoko. Wypchnij biodra do tyłu. Każ partnerowi wejść od tyłu – ale to TY dyktuj tempo cofając i napierając biodrami. Przy każdym pchnięciu odwracaj głowę i łap jego wzrok. Nie pozwól mu przejąć kontroli.",
    "category": "hot",
    "stage": 4,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s4_f13",
    "text": "Leżąc w klasycznej pozycji, unieś obie nogi w górę i skrzyżuj kostki za szyją partnera. Wsuwaj dłonie między wasze ciała i palcami stymuluj siebie samą na dole – niech partner poczuje twoje ruchy i dostosuje tempo pchnięć do twoich.",
    "category": "hot",
    "stage": 4,
    "timed": false,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "female",
    "targetArea": "bottom",
    "requiresNoClothing": [
      "majtki_f",
      "bokserki",
      "spodnie"
    ]
  },
  {
    "id": "s4_m11",
    "text": "Połóż partnerkę na brzeg łóżka tak, żebyś ty stał na podłodze. Chwyć ją za obie nogi pod kolanami i unieś je szeroko w górę otwierając idealny dostęp. Zacznij od bardzo powolnych, głębokich wejść – przy każdym wyciągaj prawie całkowicie i wchodź znowu do końca. Utrzymuj kontakt wzrokowy.",
    "category": "hot",
    "stage": 4,
    "timed": true,
    "timeLimit": 90,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "male"
  },
  {
    "id": "s4_m12",
    "text": "Odwróć partnerkę na brzuch i połóż poduszkę pod jej biodra. Wejdź od tyłu i pochyl się całym ciałem nad nią, opierając się na przedramionach przy jej głowie. Szepcz jej do ucha co czujesz przy każdym pchnięciu. Poruszaj się wolno i głęboko – chodzi o maksymalne poczucie bliskości.",
    "category": "romantic",
    "stage": 4,
    "timed": true,
    "timeLimit": 120,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "male",
    "targetArea": "chest"
  },
  {
    "id": "s4_m13",
    "text": "Usiądź na brzegu łóżka ze stopami na podłodze. Partnerka siada tyłem na twoich biodrach, opierając dłonie o twoje kolana. W tej pozycji nadziewania od tyłu – chwyć ją mocno za biodra i pomagaj jej ruchom, co kilka sekund zmieniając kąt: raz prosto, raz lekko w lewo, raz w prawo.",
    "category": "hot",
    "stage": 4,
    "timed": true,
    "timeLimit": 90,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "male",
    "targetArea": "bottom",
    "requiresNoClothing": [
      "majtki_f",
      "bokserki",
      "spodnie"
    ]
  },
  {
    "id": "s1_f14",
    "text": "Usiądź na podłodze między nogami partnera siedzącego na łóżku. Oprzyj głowę o jego udo i zacznij gładzić wnętrze jego dłoni swoimi palcami – powoli, czule, kreśląc spirale. Zamknij oczy i pozwól żeby cisza między wami była wypełniona tylko odgłosem waszych oddechów i ciepłem bleskiego ciała.",
    "category": "romantic",
    "stage": 1,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s1_f15",
    "text": "Stań przed partnerem i powoli, bardzo powoli, rozpuść włosy – niech spadną na ramiona jak jedwab. Pochyl się ku niemu i przeciągnij końcówkami włosów po jego twarzy, szyi i klatce piersiowej. Niech czuje ich delikatność i twój zapach – to dotkanie bez dotykania, od którego skóra płonie.",
    "category": "touch",
    "stage": 1,
    "timed": true,
    "timeLimit": 45,
    "target": "performer",
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s1_m14",
    "text": "Podejdź do partnerki, chwyć ją za biodra i obróć plecami do siebie. Przysun się tak blisko, żeby czuła każdy centymetr twojego ciała za sobą. Zacznij składać mokre pocałunki od jednego ramienia przez kark do drugiego – jak naszyjnik z ciepła i wilgoci na jej skórze. Nie pozwól jej się odwrócić.",
    "category": "romantic",
    "stage": 1,
    "timed": true,
    "timeLimit": 45,
    "target": "performer",
    "gender": "male"
  },
  {
    "id": "s1_m15",
    "text": "Weź dłoń partnerki i przyłóż ją do swoich ust. Całuj każdy jej palec z osobna – powoli, zmysłowo, oblizując opuszki językiem. Przy każdym palcu patrz jej głęboko w oczy i szepcz jedno słowo opisujące co chcesz z nią dziś zrobić. Pięć palców – pięć obietnic.",
    "category": "hot",
    "stage": 1,
    "timed": true,
    "timeLimit": 45,
    "target": "performer",
    "gender": "male"
  },
  {
    "id": "s2_f14",
    "text": "Zdejmij stanik powoli, robiąc z tego spektakl – ramiączko po ramiączku, patrząc partnerowi w oczy. Kiedy opadnie, chwyć jego dłonie i połóż je na swoich piersiach, szepcząc: teraz są twoje. Ale pozwól mu dotykać tylko przez 10 sekund – potem zabierz jego ręce i nie daj więcej.",
    "category": "hot",
    "stage": 2,
    "timed": false,
    "target": "both",
    "removesClothing": [
      "stanik"
    ],
    "gender": "female",
    "targetArea": "bottom",
    "requiresClothing": [
      "stanik"
    ],
    "requiresNoClothing": [
      "majtki_f",
      "bokserki",
      "spodnie"
    ]
  },
  {
    "id": "s2_f15",
    "text": "Posadź partnera na krześle i każ mu trzymać ręce za plecami. Włącz muzykę i zacznij powolny, zmysłowy taniec na jego kolanach – ocieraj się o niego, muskaj wargami jego ucho, szyję, usta. Kręć biodrami tak blisko, żeby czuł twoje ciepło przez materiał. Nie wolno mu dotknąć ciebie ani na sekundę.",
    "category": "hot",
    "stage": 2,
    "timed": true,
    "timeLimit": 90,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "female"
  },
  {
    "id": "s2_m13",
    "text": "Chwyć partnerkę w talii i jednym ruchem posadź ją na blacie lub komodzie. Stań między jej nogami, rozchylając je swoimi biodrami. Pochyl się i zacznij całować wnętrze jej ud – od kolana w górę, coraz wyżej, coraz wolniej. Zatrzymaj się centymetr przed bielizną i dmuchnij gorącym powietrzem. Potem zacznij od drugiego kolana.",
    "category": "hot",
    "stage": 2,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "gender": "male"
  },
  {
    "id": "s2_m14",
    "text": "Niech partnerka leży na plecach z zamkniętymi oczami. Weź kostkę lodu do ust i zacznij przesuwać ją wargami po jej brzuchu – od pępka w dół, kreśląc mokre ślady na rozgrzanej skórze. Naprzemiennie z lodem składaj gorące pocałunki w tych samych miejscach. Kontrast zimna i gorąca wywoła dreszcze na całym ciele.",
    "category": "touch",
    "stage": 2,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "requiresAccessories": [
      "kostka_lodu"
    ],
    "gender": "male",
    "targetArea": "chest"
  },
  {
    "id": "s3_f14",
    "text": "Połóż partnera na plecach i usiądź wygodnie między jego nogami. Obejmij go dłonią u nasady i zacznij powolne, skręcające ruchy – jakbyś odkręcała pokrywkę najcenniejszego słoika na świecie. Drugą ręką głaszcz jego brzuch i biodra, czując jak mięśnie napinają się i drżą pod twoim dotykiem. Pochylaj się co chwilę i składaj mokry pocałunek na czubku.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 90,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s3_f15",
    "text": "Każ partnerowi usiąść na brzegu łóżka. Klęknij między jego nogami, odgarń włosy na bok i popatrz na niego z dołu z wygłodniałym uśmiechem. Weź go do ust i zacznij od bardzo powolnych, głębokich ruchów – z każdym webraniem wciągaj odrobinę głębiej, wydając ciche dźwięki przyjemności. Niech czuje wibrację twojego jęku na swojej skórze.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 60,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female"
  },
  {
    "id": "s3_m14",
    "text": "Niech partnerka usiądzie na twoich kolanach twarzą do ciebie. Jedną ręką obejmij ją w talii, drugą wsuń między jej uda i zacznij pieścić ją palcami – powoli, delikatnie, kreśląc leniwe kółka. Patrzcie sobie w oczy z bliska, oddychajcie wspólnym gorącym powietrzem. Czuj jak jej biodra zaczynają poruszać się w rytm twoich palców.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 90,
    "target": "both",
    "requiresActivities": [
      "palcowka"
    ],
    "gender": "male",
    "targetArea": "bottom"
  },
  {
    "id": "s3_m15",
    "text": "Połóż partnerkę na brzegu łóżka z nogami zwisającymi w dół. Klęknij na podłodze między jej udami i chwyć ją za pośladki, przyciągając do swojej twarzy. Zacznij od delikatnych pocałunków tuż obok – na wewnętrznych udach, na fałdach bioder. Drażnij się z nią, nie dając jej tego czego chce, aż zacznie się wiercić i błagać. Dopiero wtedy zanurz się w niej językiem.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 90,
    "target": "performer",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "male",
    "targetArea": "bottom",
    "requiresNoClothing": [
      "majtki_f",
      "bokserki",
      "spodnie"
    ]
  },
  {
    "id": "s4_f14",
    "text": "Połóż partnera na plecach i usiądź na nim odwrotnie – tyłem do niego – tak żeby widział twoje plecy i pośladki. Oprzyj się dłońmi o jego kolana i zacznij poruszać biodrami w przód i w tył, bardzo powoli, czując każdy milimetr. Obejrzyj się przez ramię co chwilę z przymrużonymi oczami – niech widzi prawdziwą rozkosz na twojej twarzy.",
    "category": "hot",
    "stage": 4,
    "timed": true,
    "timeLimit": 90,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "female",
    "targetArea": "bottom",
    "requiresNoClothing": [
      "majtki_f",
      "bokserki",
      "spodnie"
    ]
  },
  {
    "id": "s4_f15",
    "text": "Stań plecami do ściany, obejmij partnera nogami w pasie i pozwól mu wejść w ciebie w stojącej pozycji. Trzymaj się mocno jego ramion, opierając plecy o ścianę. Czuj jak siła grawitacji pogłębia każde pchnięcie, jak twoje włosy miotają się z boku na bok. Szepcz mu do ucha jak dobrze ci robi.",
    "category": "hot",
    "stage": 4,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "female"
  },
  {
    "id": "s4_m14",
    "text": "Usiądźcie naprzeciwko siebie na łóżku – partnerka na twoich biodrach z nogami owiniętymi wokół twojej talii. Wejdź w nią powoli i zatrzymaj się. Nie poruszajcie się – przez pełną minutę po prostu oddychajcie razem, czując pulsowanie i ciepło we wnętrzu. Potem zacznijcie kołysać się razem, powoli, jak fale na oceanie.",
    "category": "romantic",
    "stage": 4,
    "timed": true,
    "timeLimit": 120,
    "target": "both",
    "requiresActivities": [
      "stosunek",
      "patrzenie_oczy"
    ],
    "gender": "male"
  },
  {
    "id": "s2_f16",
    "text": "Zastąp dotyk narządziem. Weź szpicrutę lub pasek, każ partnerowi położyć się na brzuchu. Powoli przeciągaj twardym końcem po jego plecach, niżej aż uda... by nagle zaserwować krótki, mocny klaps i zostawić piekący uśmiech na jego skórze. To ty dyktujesz kary.",
    "category": "hot",
    "stage": 2,
    "timed": false,
    "target": "performer",
    "requiresAccessories": [
      "szpicruta"
    ],
    "requiresActivities": [
      "klapsy",
      "dominacja"
    ],
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s2_f17",
    "text": "Zwiąż dłonie partnera i – jeśli się zgodził – użyj knebla lub zasznuruj usta materiałem. Usiądź okrakiem na jego biodrach i przez pełną minutę wij się zmysłowo, ocierając. Może próbować protestować, ale wydobędzie z siebie tylko głuche jęki bezbronnej rozkoszy.",
    "category": "hot",
    "stage": 2,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "requiresAccessories": [
      "kajdanki",
      "knebel"
    ],
    "requiresActivities": [
      "wiazanie",
      "dominacja"
    ],
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s3_f16",
    "text": "Połóż go na plecach. Odpal swoją zabawkę (wibrator) by przyłożyć ją do własnej rozkoszy, podczas gdy on patrzy z dołu prosto na ciebie. Rozkręć wibrator na najwyższy poziom i pochyl się do przodu, w całości oddając się oralowi na nim, jęcząc mu na uda.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "requiresAccessories": [
      "wibrator"
    ],
    "requiresActivities": [
      "oral_dawanie"
    ],
    "gender": "female",
    "targetArea": "bottom"
  },
  {
    "id": "s4_f16",
    "text": "Załóż swoje ulubione szpilki i zrzuć z siebie absolutnie całą resztę. Podejdź do leżącego na plecach partnera, zarzuć nogę nad nim by móc powoli na niego opaść. Długie, nagie nogi zwieńczone smukłą szpilką, to jedyne na czym może skupić wzrok łapiąc każdy twój dominujący ruch.",
    "category": "hot",
    "stage": 4,
    "timed": false,
    "target": "both",
    "requiresAccessories": [
      "szpilki"
    ],
    "requiresActivities": [
      "stosunek",
      "dominacja"
    ],
    "gender": "female"
  },
  {
    "id": "s2_m16",
    "text": "Niech partnerka oprze się o szafkę lub komodę z wypiętymi biodrami. Trzymając szpicrutę zacznij powoli drażnić jej udo... po czym bezwzględnie rzuć w pociągający klaps wyzwlając rumieniec skóry. Złap ją mocno za włosy i szepnij, że każdy kolejny klaps potęguje jej pożądanie.",
    "category": "hot",
    "stage": 2,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "requiresAccessories": [
      "szpicruta"
    ],
    "requiresActivities": [
      "klapsy",
      "dominacja",
      "ciagnięcie_wlosow"
    ],
    "gender": "male",
    "targetArea": "bottom"
  },
  {
    "id": "s2_m17",
    "text": "Przywiąż jej dłonie mocno za plecami lub do wezgłowia łóżka, następnie załóż knebel. Odbierz jej głos i jakikolwiek opór. Przez 90 sekund pisań, dotykając delikatnie opuszkami jej drżącego dekoltu i szyi – ciesz się władzą, słuchając uciszonych, głębokich westchnień.",
    "category": "hot",
    "stage": 2,
    "timed": true,
    "timeLimit": 90,
    "target": "both",
    "requiresAccessories": [
      "kajdanki",
      "knebel"
    ],
    "requiresActivities": [
      "wiazanie",
      "dominacja"
    ],
    "gender": "male",
    "targetArea": "bottom"
  },
  {
    "id": "s3_m16",
    "text": "Ułóż partnerkę tak by była całkowicie otwarta między nogami. Przyłóż uruchomiony wibrator precyzyjnie w centrum jej nerwów, mocno trzymając by nie mogła uciec. Zmuszaj ją do wdzierających się drżeń obserwując, jak tonie w maszynowej rozkoszy pod władzą twoich dłoni.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 90,
    "target": "performer",
    "requiresAccessories": [
      "wibrator"
    ],
    "requiresActivities": [
      "dominacja"
    ],
    "gender": "male",
    "targetArea": "bottom"
  },
  {
    "id": "s4_m16",
    "text": "Zadbaj, aby nie miała na sobie niczego poza swoimi najwyższymi szpilkami. Ułóż ją na brzuchu zgiętą, chwytając mocnym ściskiem za jej łydki, tak by same szpilki wznosiły się nad nią w uniesieniu. Zanurz się dynamicznym, dominującym uderzeniem, podnosząc jej zgrabne nogi jeszcze wyżej.",
    "category": "hot",
    "stage": 4,
    "timed": false,
    "target": "both",
    "requiresAccessories": [
      "szpilki"
    ],
    "requiresActivities": [
      "stosunek"
    ],
    "gender": "male",
    "targetArea": "chest"
  },
  {
    "id": "hc_s1_f1",
    "text": "Przygwoźdź go do materaca całym ciężarem swojego ciała, nie tak by bolało, lecz by czuł twoją absolutną władzę. Zbliż usta tak blisko, by poczuł na uchu żar twojego oddechu, i wyszepcz zmysłowo każdą, najbardziej niegrzeczną fantazję, którą mu dzisiaj zrealizujesz. Zakończ to gorącym wargami i lekkim ugryzieniem.",
    "stage": 1,
    "gender": "female",
    "target": "both",
    "timed": true,
    "timeLimit": 60,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "szeptanie",
      "gryzienie",
      "dominacja"
    ]
  },
  {
    "id": "hc_s1_f2",
    "text": "Spleć jego palce ze swoimi i przyciśnij do pościeli, zabraniając mu ruchu. Błądź ustami po jego szyi i obojczykach, składając na nich żarliwe, mokre pocałunki – tak intensywnie, by z każdym twoim drgnięciem głośniej łapał powietrze. Niech zobaczy w twoim tonącym wzroku czysty, niepohamowany głód.",
    "stage": 1,
    "gender": "female",
    "target": "performer",
    "timed": true,
    "timeLimit": 60,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "calowanie",
      "dominacja"
    ]
  },
  {
    "id": "hc_s1_f3",
    "text": "Stań przed nim, emanując pewnością siebie. Daj mu dokładnie dziesięć sekund, by swoimi dłońmi i gorącymi ustami błagał cię przez ubranie, pokazując jak bardzo cię pożąda. Gdy czas minie, odepchnij go delikatnie, gasząc jego zapędy. Niech płonie z tęsknoty za twoim ciałem.",
    "stage": 1,
    "gender": "female",
    "target": "both",
    "timed": true,
    "timeLimit": 30,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s1_f4",
    "text": "Wślizgnij się powoli między jego ugięte uda. Patrząc prosto w jego ciemniejące z pożądania oczy, zacznij zmysłowo ocierać się o niego swoimi wargami i nosem. Prowokuj go, oddychając ciężko wprost do jego ust, ale nie pozwól mu na pełen pocałunek. Niech oszaleje z frustracji.",
    "stage": 1,
    "gender": "female",
    "target": "both",
    "timed": true,
    "timeLimit": 60,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "patrzenie_oczy"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s1_f5",
    "text": "Przesuń dłonią po jego karku, zaplatając palce w jego włosy. Przyciągnij jego twarz na milimetr od swojej i wyszepcz uwodzicielsko, z nutą drapieżności: 'Dzisiejszej nocy należysz tylko do mnie, wiesz o tym?'. Zmuś go, by to przyznał, wpatrując się głęboko w jego uległe oczy.",
    "stage": 1,
    "gender": "female",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "dominacja",
      "szeptanie"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s1_m1",
    "text": "Przygwoźdź jej dłonie nad głową jednym, mocnym i pewnym ruchem. Pochyl się, by wdychać słodki zapach jej szyi, po czym zacznij ją całować tak zachłannie i głęboko, jakbyś chciał wypić z niej całe powietrze. Niech poczuje, jak bardzo otacza ją twoja silna, męska obecność.",
    "stage": 1,
    "gender": "male",
    "target": "both",
    "timed": true,
    "timeLimit": 60,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "dominacja",
      "calowanie"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s1_m2",
    "text": "Spleć palce w jej włosach na karku, delikatnie, acz stanowczo odchylając jej głowę do tyłu, by odsłonić jej gardło. Przesuń nosem po jej skórze i wyszepcz jej do ucha najbardziej nieprzyzwoity, gorący komplement o jej pociągającym ciele. Niech gęsia skórka spłynie po jej plecach.",
    "stage": 1,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "ciagnięcie_wlosow",
      "szeptanie"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s1_m3",
    "text": "Nakaż jej usiąść prosto, zakazując wydobycia z siebie choćby jednego dźwięku. Zacznij wodzić palcami wzdłuż koronki jej bielizny, drażniąc materiał do granic wytrzymałości, jednak nie dotykając jeszcze samej skóry. Gdy zobaczysz, że drży i wstrzymuje oddech, nagle zabierz dłoń.",
    "stage": 1,
    "gender": "male",
    "target": "performer",
    "timed": true,
    "timeLimit": 60,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "dominacja"
    ]
  },
  {
    "id": "hc_s1_m4",
    "text": "Obejmij jej twarz obiema dłońmi, zmuszając, by patrzyła tylko na ciebie. Zbliż swoje wargi do jej ust i zacznij je namiętnie, drapieżnie podgryzać. Zatop się w głębokim, mokrym pocałunku, pożerając każdy jej westchnienie i udowadniając swój wilczy apetyt.",
    "stage": 1,
    "gender": "male",
    "target": "both",
    "timed": true,
    "timeLimit": 45,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "gryzienie",
      "calowanie",
      "patrzenie_oczy"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s1_m5",
    "text": "Połóż dłoń na dole jej brzucha, a drugą delikatnie obejmij jej gardło, bardziej dając poczucie swojej władzy niż ucisku. Poczekaj, aż spojrzy ci w oczy i szepnij zmysłowo, że każdy jej dzisiejszy dreszcz zależy tylko od ciebie. Niech poczuje tę odurzającą uległość.",
    "stage": 1,
    "gender": "male",
    "target": "both",
    "timed": true,
    "timeLimit": 30,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "duszenie_lekkie",
      "dominacja"
    ],
    "targetArea": "chest"
  },
  {
    "id": "hc_s2_f1",
    "text": "Ze zniewalającym wdziękiem ułóż go na dechach, zmuszając do spoglądania w górę. Zrzuć z siebie zmysłowo pierwszą część stroju, powolnym ruchem obrysowując własne kształty, i szepnij obiecująco: 'Zaraz będziesz tego smakował, ale dopóki nie pozwolę, ani drgnij'.",
    "stage": 2,
    "gender": "female",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "dominacja"
    ]
  },
  {
    "id": "hc_s2_f2",
    "text": "Usiądź mu na biodrach, oplatając go nogami, a jego dłonie stanowczo połóż na swojej talii. Zacznij powoli, rytmicznie i bezlitośnie ocierać się o niego swoimi najgorętszymi miejscami. Zalej jego myśli czystą rozkoszą, odcinając go od wszystkiego, co dzieje się wokół.",
    "stage": 2,
    "gender": "female",
    "target": "both",
    "timed": true,
    "timeLimit": 90,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "dominacja"
    ],
    "targetArea": "bottom",
    "requiresNoClothing": [
      "majtki_f",
      "bokserki",
      "spodnie"
    ]
  },
  {
    "id": "hc_s2_f3",
    "text": "Chwyć jego rękę i sama połóż ją na własnym karku. Patrz na niego spod na wpół przymkniętych powiek i szepnij: 'Złap mnie mocno. Pokaż mi swoją brutalniejszą stronę'. Oczekuj dominującego, męskiego uścisku, z aprobatą wzdychając, gdy wymusi na tobie dreszcz.",
    "stage": 2,
    "gender": "female",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "ciagnięcie_wlosow",
      "szeptanie"
    ]
  },
  {
    "id": "hc_s2_f4",
    "text": "Zsuń przed nim na kolana, leniwie i obiecująco. Gdy uwolnisz jego nabrzmiałą męskość, zamiast wziąć ją do ust, obejmij ją dłonią obficie zwilżoną własną śliną. Prowadź rytmiczne pieszczoty tylko przez chwilę, po czym nagle przestań, zostawiając go na krawędzi słodkiej agonii.",
    "stage": 2,
    "gender": "female",
    "target": "performer",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "oral_dawanie",
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s2_f5",
    "text": "Stań nad nim i rozkaż zgadnąć, jaka jest twoja najbardziej ukryta fantazja na dziś. Gdy nie odgadnie, złap za udo i wymierz mu jeden precyzyjny, piekący klaps w nagą skórę. Skieruj usta do jego ucha i poucz go cicho, co powinien był odpowiedzieć, dręcząc go swoją bliskością.",
    "stage": 2,
    "gender": "female",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "klapsy",
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s2_m1",
    "text": "Rozchyl jej drżące uda z nieodwołalną stanowczością, wślizgując się między nie tak blisko, żeby czuła całe twoje ciepło. Zbliż wargi do jej ucha i jadowicie słodkim szeptem obiecaj: 'Zrobię to tak głęboko, że przez resztę tygodnia będziesz odtwarzać to w myślach każdej nocy'.",
    "stage": 2,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "dominacja",
      "szeptanie"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s2_m2",
    "text": "Złap ją za brodę w pewnym chwycie, by nie odrywała od ciebie spojrzenia pełnego uległej żądzy. Ścisz głód o ton niżej i powoli instruuj, jak bardzo ma wyginać dla ciebie plecy i jak głęboko ma wciągać powietrze z podniecenia. Bądź mistrzem jej każdego zmysłu.",
    "stage": 2,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "dominacja"
    ]
  },
  {
    "id": "hc_s2_m3",
    "text": "Odwróć ją stanowczo na brzuch. Gorącym olejkiem nasmaruj swoją klatkę piersiową i wciśnij się w nią głęboko od tyłu, ocierając jedno nagie, śliskie ciało o drugie i zmuszając do wygięcia tułowia w spragniony łuk. Oznacz jej odsłoniętą skórę jednym donośnym klapsem z miłości.",
    "stage": 2,
    "gender": "male",
    "target": "both",
    "timed": true,
    "timeLimit": 60,
    "category": "hardcore",
    "isHardcore": true,
    "requiresAccessories": [
      "zel"
    ],
    "requiresActivities": [
      "klapsy",
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s2_m4",
    "text": "Z suwerennym spokojem odchyl nogawki by zrobić przestrzeń, stuknij dłonią w brzeg materaca i przekaż jej cichy rozkaz: 'Uklęknij dokładnie tu i otwórz się dla mnie'. Zatrzymaj czas w zniewalającej pauzie, zmuszając ją gestem do absolutnego oczekiwania na twoje dłonie.",
    "stage": 2,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "dominacja"
    ],
    "targetArea": "bottom",
    "requiresNoClothing": [
      "majtki_f",
      "bokserki",
      "spodnie"
    ]
  },
  {
    "id": "hc_s2_m5",
    "text": "Wykreśl namiętną trasę nosem i ustami po wewnętrznej stronie jej ugiętego uda, ale w najbardziej napiętym punkcie złap delikatną, napiętą skórę w zęby. Ugryź pieszczotliwie, lecz odczuwalnie, odbierając jej wymuszony jęk. Zatrzymuj uścisk, dopóki sama się nie wypnie w błaganiu.",
    "stage": 2,
    "gender": "male",
    "target": "performer",
    "timed": true,
    "timeLimit": 30,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "gryzienie"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s3_f1",
    "text": "Wymuś posłuszeństwo swoim spojrzeniem. Obliż zmysłowo wargi, weź go głęboko do ust i zatrzymaj w martwym punkcie. Z zadartą w górę twarzą i ustami pełnymi jego istnienia, patrz idealnie w jego oczy bez odrywania wzroku. Zmuś go, by zakręciło mu się w głowie od ekstremalnej zmysłowości.",
    "stage": 3,
    "gender": "female",
    "target": "performer",
    "timed": true,
    "timeLimit": 30,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "oral_dawanie",
      "dominacja",
      "patrzenie_oczy"
    ]
  },
  {
    "id": "hc_s3_f2",
    "text": "Zniewól jego zmysły grą w kotka i myszkę. Prowadź go na skraj eksplozji gęstym, mokrym oralem by nagle odjąć ciepło. W ten odurzający sposób wódź go po krawędzi, przeciągając pieszczoty aż do momentu, gdzie stęka z opadającymi z sił przedramionami w absolutnej fali pożądania.",
    "stage": 3,
    "gender": "female",
    "target": "performer",
    "timed": true,
    "timeLimit": 90,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "oral_dawanie",
      "dominacja"
    ]
  },
  {
    "id": "hc_s3_f3",
    "text": "Odwróć role – zdominuj go, wsiadając okrakiem tuż nad jego biodrami, tyłem twarzy do twarzy (na 69). Złap jego sprzęt palcami błyszczącymi od śliny i obrabiaj bezbłędnym rytmem ręki. W mroku sypialni szepcz mu odurzające sprośności, które wydobędą jego pierwotną stronę.",
    "stage": 3,
    "gender": "female",
    "target": "performer",
    "timed": true,
    "timeLimit": 60,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "oral_dawanie",
      "szeptanie"
    ]
  },
  {
    "id": "hc_s3_f4",
    "text": "Otulając go gorącymi ustami, ułóż zęby wokół nasady i bardzo delikatnie, przeciągle przejedź nimi po nabrzmiałej skórze w górę. Zanurz to w obfitej pieszczocie języka. Ten miks subtelnego bólu i niezrównanej miękkości rozbije na kawałki i pogrąży wszystkie jego mury.",
    "stage": 3,
    "gender": "female",
    "target": "performer",
    "timed": true,
    "timeLimit": 45,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "oral_dawanie",
      "gryzienie"
    ]
  },
  {
    "id": "hc_s3_f5",
    "text": "Zmuś go żeby zamknął oburącz dłonie we własnych włosach oddając ci pełną swobodę. Sama dyktuj oszałamiające, szybkie i bezlitosne tempo, wydając mrukliwe, drapieżne dźwięki przyjemności tuż nad jego biodrami. Udowodnij mu, że nikt tak potwornie mocno go nie pożąda.",
    "stage": 3,
    "gender": "female",
    "target": "both",
    "timed": true,
    "timeLimit": 60,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "oral_dawanie",
      "ciagnięcie_wlosow"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s3_m1",
    "text": "Szerokim chwytem uchyl jej mokre uda, zapierając oddechem z wrażenia. Zanurkuj najgłębiej w sam środek wilgotnego raju, wygłodniałymi wargami i językiem rzeźbiąc jej najczulszy punkt. Bez względu na to jak głośno skowyczy z rozkoszy i się wygina, nie pozwalaj jej zamknąć nóg.",
    "stage": 3,
    "gender": "male",
    "target": "performer",
    "timed": true,
    "timeLimit": 90,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "oral_dawanie",
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s3_m2",
    "text": "Wprowadź wprawnie dwa ułożone razem palce, muskając gładkie i wrażliwe ścianki od środka. Nachyl się obok ucha i pytaj ciężko, w pulsie podniecenia: 'Podoba ci się jak biorę cię głęboko?'. I w odpowiedzi dodaj siły swoim pchnięciom, wystrzeliwując ją do nieba.",
    "stage": 3,
    "gender": "male",
    "target": "performer",
    "timed": true,
    "timeLimit": 60,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "palcowka",
      "szeptanie"
    ]
  },
  {
    "id": "hc_s3_m3",
    "text": "Skup usta bezlitośnie na jej perle, a jednocześnie, precyzyjnym ruchem wejdź twardo trzema palcami w jej wejście, naśladując tarcie pragnącego wejść członka. Wytwórz tempo odurzającego orgazmu i nie cofaj ręki, bez względu na to jak gwałtownie tonie w spazmach.",
    "stage": 3,
    "gender": "male",
    "target": "performer",
    "timed": true,
    "timeLimit": 60,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "oral_dawanie",
      "palcowka"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s3_m4",
    "text": "Obłap delikatnie spód jej gardła pewną, kontrolującą całe ciało dłonią – by dać do zrozumienia, że nigdzie stąd nie ucieknie. Następnie pochyl głowę, by w chciwym, namiętnym zapale pożerać ją wprost z jej wnętrza i karcić ją milczeniem gdy o mało nie wybucha tchem.",
    "stage": 3,
    "gender": "male",
    "target": "both",
    "timed": true,
    "timeLimit": 60,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "oral_dawanie",
      "duszenie_lekkie",
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s3_m5",
    "text": "Ułóż ją tak by opierała dłonie i twarz na łóżku, kusząco unosząc nagie pośladki do góry. Przykucnij od tyłu, ofiarując jej głęboką minetę z szybką dłonią penetrującą równolegle wnętrze. Doznanie całkowitego, upokarzająco-pięknego oddania sprawi że oboje obudzicie w sobie drapieżne zwierzęta.",
    "stage": 3,
    "gender": "male",
    "target": "performer",
    "timed": true,
    "timeLimit": 90,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "oral_dawanie",
      "palcowka",
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s4_f1",
    "text": "Wślizgnij się na niego ze ślepą pasją, łapiąc go za barki. Jeździj na nim mocno, przejmując całą kontrolę, nie ukrywając potu ani mroku waszych pragnień. Opuszczając się z każdym ruchem o milimetry niżej, by całkowicie wypełnić się bólem rozkoszy, każąc by głośno błagał o więcej.",
    "stage": 4,
    "gender": "female",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "stosunek",
      "dominacja"
    ]
  },
  {
    "id": "hc_s4_f2",
    "text": "Usiądź nad jego ustami odwrotnie – stłum jego dech namiętnymi łonem. W tym samym momencie złap w dłonie twardą na skałę męskość zmuszając go, by głaskał językiem i wargami dokładnie tu gdzie potrzebujesz. Podryguj w transie na jego ustach, wydając najbardziej grzeszne polecenia.",
    "stage": 4,
    "gender": "female",
    "target": "performer",
    "timed": true,
    "timeLimit": 90,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "stosunek",
      "oral_otrzymywanie",
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s4_f3",
    "text": "W misjonarzu owlec obie swoje nogi wysoko i sztywno za jego karkiem, splatając najciaśniej jak potrafisz. Złap pewnie jego ręce. To zniewolenie pozwoli mu uderzyć głębiej niż kiedykolwiek w historii waszych nocy; zmuś go pchnięciami miednicy do zguby, nie uciekając nawet na krok.",
    "stage": 4,
    "gender": "female",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "stosunek"
    ]
  },
  {
    "id": "hc_s4_f4",
    "text": "Przełam zasady - poleć mu by wbił lekko zęby głęboko w twoją szyję, kark lub ramię, napierając brutalnie ciężkim i wilgotnym rytmem, wtulając tors w twoje plecy. Oddaj z siebie pisk i wij się jak kot uciekajacy przed pasją z krzywym kręgosłupem – zostając pochłonięta od wewnątrz.",
    "stage": 4,
    "gender": "female",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "stosunek",
      "gryzienie"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s4_f5",
    "text": "Dociśnij usta w duszną, pachnącą waszym seksem poduszkę, zaciskając dłonie w pościeli. Odwracaj głowę wykrzykując bez litości jak dobrze i głęboko to robi by wbijał do utraty sensu; uwolnij w sobie pierwotny mrok, szepcząc dziko w poduszkę najsprostsze błagania o brak pardonu.",
    "stage": 4,
    "gender": "female",
    "target": "performer",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "stosunek",
      "szeptanie"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s4_m1",
    "text": "Ściągnij blisko oba jej nadgarstki i unieś je nad głowę w totalnym i pewnym uchwycie pętając niemocą. Przekręć całe ugięte na bok ciało pod ostry jak nóż kąt, dający ciasnotę paraliżującą zmysły. Wejdź głęboko, dyktując ekstremalne tempo by jej zmysły wybuchły drapieżnością.",
    "stage": 4,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "stosunek",
      "dominacja"
    ]
  },
  {
    "id": "hc_s4_m2",
    "text": "Oplącz jej bujne włosy pewnie na dłoni, nie zrażając, lecz by przejąć odtyłu władzę nad ruchem miednicy. Odciągnij grzbiet by musiała patrzeć ci w ramię wzniesiona za głowę. Rozciągnij na gładkim do granicy twardym i posuwistym ryku pchnięć ten głęboki, piękny, wyeksponowany obraz zaufania.",
    "stage": 4,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "stosunek",
      "ciagnięcie_wlosow",
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s4_m3",
    "text": "Pociągnij jej biodra z powrotem by lekko wychylała pośladki za materac do ciebie. Opuść się i wznów mordercze, zwierzęce tempo. Odmierz co dziesiąte pchnięcie jednym piekącym, zaborczym klapsem podkreślającym w pośladkach twój triumf, zatracając ją w otchłani.",
    "stage": 4,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "stosunek",
      "klapsy",
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s4_m4",
    "text": "Znajdź gładką krzywiznę i podążaj pozycją pieska. Przesuń stabilnie ramię obejmując dłonią boki jej uwrażliwionej twarzy lub kciukiem obok żuchwy... i doprowadź do szczytu mocno dławiąc jej głos szeptami bliskimi uszom, instruując że podoba ci się jej ułożenie dławiące serce.",
    "stage": 4,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "stosunek",
      "duszenie_lekkie",
      "szeptanie"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s4_m5",
    "text": "Przenieś wasze mokre i dyszące ciała bez ostrzeżenia na zupełnie płaską twardą podłogę spuszczając gardę do cna. Rozłóż się wyżej chwytając mocno jej pośladki byś uderzał i łączył się z głębią słysząc odgłosy czystej wulgarnej fali namiętności podkręcane echem nieugiętej ziemi.",
    "stage": 4,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requiresActivities": [
      "stosunek"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s5_twarz_1",
    "text": "Będąc ponad nią, otul czule ale silnie w dłoniach z tyłu jej twarz. Przysuń blisko i poproś niskim i wibrującym szeptem, by otworzyła lśniące z pożądania usta na to zwycięstwo. Uwolnij obezwładniający spust dając dowód miłości prosto na wyeksponowane rysy oddania i namiętności.",
    "stage": 5,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "twarz",
    "requiresActivities": [
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s5_twarz_2",
    "text": "Spędź mu dłonie wzdłuż nad skroniami, wznosząc wilgotne biodra lśniące od potu zaledwie pół cala od krawędzi nosa. Opanuj wszystko powoli na zewnątrz. Kiedy krzyknie o dopełnienie, dopnij go do szczytu nakrywając obróconą w dół rozkosz ciepłem na całą rozpaloną miłością buzię.",
    "stage": 5,
    "gender": "female",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "twarz",
    "requiresActivities": [
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s5_twarz_3",
    "text": "Zamglona w pośpiechu rzuć go pod wyginający się tułów tak byś obrabiał go z twarzą opartą tuż pod brodą. Dojdź precyzyjnym strumieniem, który z czułym palcem powoli smarujesz jak namaszczoną pieszczotę na gładkiej toni warg spijając zaraz resztki z własną śliną.",
    "stage": 5,
    "gender": "male",
    "target": "performer",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "twarz",
    "requiresActivities": [
      "oral_dawanie",
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s5_usta_1",
    "text": "Złap posłusznie oddające się rzęsy, trzymaj w wilgotnym uniesieniu gardła i zejdź ostatni ułamek promiennej głębi bez hamulców. Spuść najgłębszą, lepką słabostkę nie pozwalając na wysmyk i nagródź pieszczotliwie ten obłęd pragnąc by przyjęła każdą wyczekiwaną perłę.",
    "stage": 5,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "usta",
    "requiresActivities": [
      "oral_dawanie",
      "dominacja"
    ]
  },
  {
    "id": "hc_s5_usta_2",
    "text": "Złap mocno obie jego skrępowane niemal pożądaniem ręce. Instruuj mu rozchielać mokre zęby pokazując język, oczekując w otwartym ustroju do upadłego momentu by strzelił w czeluść ust dając sobie oddanie na bezmiar i zakazując domykać w otępieniu.",
    "stage": 5,
    "gender": "female",
    "target": "performer",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "usta",
    "requiresActivities": [
      "dominacja"
    ]
  },
  {
    "id": "hc_s5_usta_3",
    "text": "Przesiąknięta smakiem wilczego ustępstwa ssij i ułóż rytm w gęstym tempie wyciskając do cna aż zedrze gardło. Nakaż strumieniowi wypłynąć przyjmując go odurzająco i spijając prosto z wejścia - bez zawahnięcia chwaląc spojrzeniem.",
    "stage": 5,
    "gender": "female",
    "target": "performer",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "usta",
    "requiresActivities": [
      "oral_dawanie"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s5_piersi_1",
    "text": "Bądź suwerenem dekoltu - złap namiętnością pierś i wepchnij dłoni zarys śladu pieszczoty w drżące ciało. Rzuć w ten pożar namiętności obrzucający finisz rzeźbiąc twardą białą warstwą i po pochłonięciu poliż uwodzicielsko wtapiając pragnienie w sutki.",
    "stage": 5,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "piersi",
    "requiresActivities": [
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s5_piersi_2",
    "text": "Siądź szeroko dławiąc ruchy klatki tuż gładkimi spoconymi udami i weź sprawę dekoltem, tarmosząc mężczyne przez rów namiętności. Odsłoń obficie pulsujące serce odrzucając na dół własne łzy ekstazy tuż po jego mocarnym finiszu we krwi i perłach.",
    "stage": 5,
    "gender": "female",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "piersi",
    "requiresActivities": [
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s5_piersi_3",
    "text": "Przemodeluj ułożenie ściągając ją na biodra wypięte od tyłu gładkością dając wyjście z pochwycia i celuj odgórnie strumyczkiem rozbryzgując go wyeksponowanie, pociągając smukłościami drżącą pierś po której ścieka twoje nasienie miłości.",
    "stage": 5,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "piersi",
    "requiresActivities": [
      "dominacja"
    ],
    "targetArea": "chest"
  },
  {
    "id": "hc_s5_pupa_1",
    "text": "Przejmij brzeg miękkich posladków uziemiając uściskiem o parnej woni po długim wbijaniu z głośnym soczystym klapsem zostawionym na finał. Obryzgaj potężnie cały gładki brzeg, zostawiając wyczerpaną falę ugaszoną i uśpioną w mokrym pocałunku wprost na gorącym różu.",
    "stage": 5,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "pupa",
    "requiresActivities": [
      "klapsy",
      "dominacja"
    ]
  },
  {
    "id": "hc_s5_pupa_2",
    "text": "Skul się oddzielnie łagodnie zejściowo do dołu gładząc ręką całą obmierzłą jego lędźwią. Ustal wytyczone granicy spuszczając go wezbraniem męskim w ten ułożony krajobraz lepkiej wścieklizny pieszcząc podbity ułamek obwisłości kciukiem.",
    "stage": 5,
    "gender": "female",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "pupa",
    "requiresActivities": [
      "dominacja"
    ]
  },
  {
    "id": "hc_s5_pupa_3",
    "text": "Upadnięta z rozkoszy każ spocząć płasko rozłożonym na materacu uśpieniem z wyeksponowanym tyłem w błaganiu. Skrop najpotężniej nagrzaną płachtę pośladków w absolutnym panowaniu opadając z sił prosto na nią chłonąc jej mrużący krzyk posłuszeństwa.",
    "stage": 5,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "pupa",
    "requiresActivities": [
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s5_stopy_1",
    "text": "Rozgrom w sobie dumnie i połóż mu pod kolanem łydki by nacisk stóp otoczył twój brzuch. Każąc mu strzelić uwieńczonym twardym finiszem obojętnie pomiędzy rozwarte delikatne gładkości palców i podbicia wybijając serce rozkosznej grzesznych stymulacji dłuższego snu.",
    "stage": 5,
    "gender": "female",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "stopy",
    "requiresActivities": [
      "dominacja",
      "patrzenie_oczy"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s5_stopy_2",
    "text": "Wyłap za gibkie złączone stopy zrzucając podwieszonym twardym pąkiem pod grawitacją na brzeg palców uderzeniowo całą energię - wpajaj na sam wierzch stopy lśniąca masę i wcieraj do odrętwiałej z żądzy ulgi w masarskim rozkazu palców stóp.",
    "stage": 5,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "stopy",
    "requiresActivities": [
      "wiazanie",
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s5_stopy_3",
    "text": "Dominuj posługując się bezpardonowo jedwabistym wygiętemu w łuk stóp / szpilką do stymujulacji ręką nacisku zwrotnego roznoszącego w bezsile porywczą serię przerwanych ulew prosto w pięknym asymetrycznym pożądaniu.",
    "stage": 5,
    "gender": "female",
    "target": "performer",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "stopy",
    "requiresActivities": [
      "dominacja"
    ]
  },
  {
    "id": "hc_s5_nogi_1",
    "text": "Przygładź jej smukły ud w ramię materacu rozwarte gwałtem czułości nakryć oparcia pognębioną z wbijającym napięciem sił nogą - uśpij i wybuchnij ułagodzonym, porywającym oddechem plamiąc soczyście bok i zarys śliskiego uda mnąc go dłonią.",
    "stage": 5,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "nogi",
    "requiresActivities": [
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s5_nogi_2",
    "text": "Opętaj styk łona w bliskim i zroszonym potami dreszczem po bokach opuszczając posłusznie biodra gwałtownie do pościeli od tyłu. Strzel strumieniem twardym obok lejący ślad lepkiej zguby przyklejając na zmęczone muskularne udo całe pożądanie po brzegi.",
    "stage": 5,
    "gender": "female",
    "target": "performer",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "nogi",
    "requiresActivities": [
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s5_nogi_3",
    "text": "Padnijcie wspólnie! Stojąc w omdleniu w ugiętych nogach opartych o pościel puść z tętniącego rynsztoka udo strugi na lśniący i śliski gładki trzon nóg gładzony podmuchem ciężkiego bezbłędnego męskiego zjednoczenia na pochyłości oddechu.",
    "stage": 5,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "nogi",
    "requiresActivities": [
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s5_chust_1",
    "text": "Obdaruj wizją zniewolenia w potężnym męskim gęstym uduszeniu dłoni nakazując podziwiaj blisko. Zamaskuj z bezwładnością wybuch pod papier w spływie rwąc obłęd by nie wypuścił podłogi brudnej ściskając ostateczny kęs w upale męża.",
    "stage": 5,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "chusteczka",
    "requiresActivities": [
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s5_chust_2",
    "text": "Dopilnuj brudnej wykwintności karząc tu i teraz wymuszając nie wejść a uregulować opad przez spienienie poza granice ubrań uciskiem gładzącym do chusteczki pociągając po głębokiej rozkoszy nie pozwalając na więcej chłonnego tła - pieszcząc podziękę.",
    "stage": 5,
    "gender": "female",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "chusteczka",
    "requiresActivities": [
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "hc_s5_chust_3",
    "text": "Odbierz odczucie gwałtu dłoni gładko osadzając papier wymaganym pchnięciem oporowo z rzutu tuż na skraju by strzelał i chłoną w poszarpaną biała masę powierzając pod lęk ekstazy w wykończającym i omdlewającym dojściu spuszczając mu bezdech.",
    "stage": 5,
    "gender": "male",
    "target": "both",
    "timed": false,
    "category": "hardcore",
    "isHardcore": true,
    "requireTarget": true,
    "finaleTarget": "chusteczka",
    "requiresActivities": [
      "dominacja"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "s1_new_f",
    "text": "Zasłoń partnerowi oczy opaską. Podwiń mu koszulkę i używając tylko opuszków palców, zbadaj każdy centymetr jego klatki piersiowej.",
    "category": "touch",
    "stage": 1,
    "timed": true,
    "timeLimit": 60,
    "target": "partner",
    "gender": "female",
    "requiresAccessories": [
      "blindfold"
    ],
    "tempRemoveClothing": "Jeśli ma koszulkę, na czas zadania lekko ją podwiń.",
    "targetArea": "chest"
  },
  {
    "id": "s1_new_m",
    "text": "Czas zadbać o jej stopy. Zdejmij z niej skarpetki i wykonaj głęboki, powolny masaż stóp, patrząc jej głęboko w oczy.",
    "category": "romantic",
    "stage": 1,
    "timed": true,
    "timeLimit": 90,
    "target": "partner",
    "gender": "male",
    "requiresActivities": [
      "massage"
    ],
    "requiresClothing": [
      "skarpetki_f"
    ],
    "removesClothing": [
      "skarpetki_f"
    ],
    "targetArea": "feet"
  },
  {
    "id": "s2_new_f",
    "text": "Weź kostkę lodu. Przesuwaj ją powoli od szyi partnera, przez klatkę, aż do krawędzi jego bielizny na dole. Zbieraj wodę delikatnymi pocałunkami.",
    "category": "fun",
    "stage": 2,
    "timed": false,
    "target": "partner",
    "gender": "female",
    "requiresActivities": [
      "kissing"
    ],
    "requiresAccessories": [
      "ice"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "s2_new_m",
    "text": "Usiądź blisko niej i przytul się do niej swoją nagą klatką. Odsłoń jej dekolt na chwilę i połączcie się w długim, głębokim pocałunku, czując ciepło swoich ciał.",
    "category": "touch",
    "stage": 2,
    "timed": true,
    "timeLimit": 60,
    "target": "both",
    "gender": "male",
    "requiresActivities": [
      "kissing"
    ],
    "requiresNoClothing": [
      "koszulka_m",
      "bluza_m"
    ],
    "tempRemoveClothing": "Odsłoń na ten czas jej stanik lub górę."
  },
  {
    "id": "s3_new_f",
    "text": "Oprzyj się nad nim tak, aby Twoje nagie piersi delikatnie muskały jego ciało. Pieszcząc dłonią jego krocze, szepcz mu do ucha sprośne rzeczy.",
    "category": "hot",
    "stage": 3,
    "timed": false,
    "target": "partner",
    "gender": "female",
    "requiresActivities": [
      "dirty_talk",
      "touching"
    ],
    "requiresNoClothing": [
      "stanik",
      "koszulka_f",
      "top",
      "bluza_f"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "s3_new_m",
    "text": "Włącz wibrator na średnią moc. Używając zabawki, drażnij wewnętrzną stronę jej ud i okolice łona, powstrzymując się od głównego punktu.",
    "category": "hot",
    "stage": 3,
    "timed": true,
    "timeLimit": 60,
    "target": "partner",
    "gender": "male",
    "requiresActivities": [
      "toys"
    ],
    "requiresAccessories": [
      "vibrator"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "s4_new_f",
    "text": "Użyj dużo olejku. Wykonaj powolny, zmysłowy masaż jego okolic intymnych, włączając w to delikatną eksplorację tyłu. Bądź stanowcza, ale powolna.",
    "category": "hot",
    "stage": 4,
    "timed": true,
    "timeLimit": 120,
    "target": "partner",
    "gender": "female",
    "requiresActivities": [
      "anal",
      "massage"
    ],
    "requiresAccessories": [
      "oil"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "s4_new_m",
    "text": "Zdejmij jej majtki i rzuć je na bok. Rozkaż jej wypiąć się w Twoją stronę i przy pomocy packi lub dłoni wymierz kilka podniecających klapsów.",
    "category": "hot",
    "stage": 4,
    "timed": false,
    "target": "partner",
    "gender": "male",
    "requiresActivities": [
      "bdsm_light"
    ],
    "requiresAccessories": [
      "whip"
    ],
    "requiresClothing": [
      "majtki_f"
    ],
    "removesClothing": [
      "majtki_f"
    ],
    "targetArea": "bottom"
  },
  {
    "id": "s5_new_1",
    "text": "To już ten moment. Połączcie się w namiętnym akcie. Nie używajcie rąk przez pierwsze 2 minuty – niech pracują tylko Wasze biodra, oddechy i usta.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "both",
    "gender": "both",
    "requiresActivities": [
      "kissing"
    ]
  },
  {
    "id": "s5_new_2",
    "text": "Czas na wielki finał z udziałem zabawek. Wykorzystajcie wibrator podczas głównego stosunku. Skupcie się na tym, by najpierw doprowadzić Ją na skraj.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "both",
    "gender": "both",
    "requiresActivities": [
      "toys"
    ],
    "requiresAccessories": [
      "vibrator"
    ]
  },
  {
    "id": "s5_new_3",
    "text": "Finał w stylu BDSM. Jedno z Was zostaje skrępowane kajdankami (lub sznurem) i całkowicie oddaje kontrolę. Drugie dyktuje tempo i intensywność aż do samego końca.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "both",
    "gender": "both",
    "requiresActivities": [
      "bdsm_light"
    ],
    "requiresAccessories": [
      "handcuffs"
    ]
  },
  {
    "id": "s5_new_4",
    "text": "Poprowadźcie finał powoli, romantycznie i bardzo zmysłowo, używając do zbliżenia podgrzanego olejku. Zmuście się, by patrzeć sobie głęboko w oczy bez odwracania wzroku.",
    "category": "romantic",
    "stage": 5,
    "timed": false,
    "target": "both",
    "gender": "both",
    "requiresAccessories": [
      "oil"
    ]
  },
  {
    "id": "s5_new_5",
    "text": "Ostry, szybki i zwierzęcy finał. Chwyćcie się mocno, używajcie odważnego słownictwa (dirty talk) wykrzykując, co robicie i nie powstrzymujcie dźwięków rozkoszy.",
    "category": "hot",
    "stage": 5,
    "timed": false,
    "target": "both",
    "gender": "both",
    "requiresActivities": [
      "dirty_talk"
    ]
  }
];

// ---- Miejsca spustu (finale) ----
export const finaleOptions = [
  { id: 'twarz', emoji: Icons.twarz, label: 'Na twarzy' },
  { id: 'usta', emoji: Icons.usta, label: 'W ustach' },
  { id: 'piersi', emoji: Icons.piersi, label: 'Na piersiach' },
  { id: 'pupa', emoji: Icons.pupa, label: 'Na pupie' },
  { id: 'stopy', emoji: Icons.stopy, label: 'Na stopach' },
  { id: 'nogi', emoji: Icons.nogi, label: 'Na nogach' },
  { id: 'chusteczka', emoji: Icons.chusteczka, label: 'W chusteczkę' },
];
