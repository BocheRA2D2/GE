const fs = require('fs');

const newTasks = [
    // ==========================================
    // ETAP 1: Gra wstępna (Zmysły, Napięcie, Pocałunki - BEZ stref intymnych)
    // ==========================================

    // -- FEMALE --
    { id: 's1_f1', text: 'Usiądź okrakiem na kolanach partnera (w ubraniu). Przez minutę całuj go namiętnie w szyję i kark, wyraźnie zabraniając mu dotykania w tym czasie twoich miejsc intymnych.', category: 'romantic', stage: 1, timed: true, timeLimit: 60, target: 'both', gender: 'female' },
    { id: 's1_f2', text: 'Poproś partnera, aby położył się na brzuchu. Wykonaj powolny masaż jego pleców i barków używając dłoni, szeptając do mu do ucha zasady dzisiejszego wieczoru.', category: 'touch', stage: 1, timed: false, target: 'performer', requiresActivities: ['masaz'], gender: 'female' },
    { id: 's1_f3', text: 'Stań przed partnerem. Patrząc mu głęboko w oczy, powoli, guziczek po guziczku, rozepnij jego koszulę, delikatnie muskając palcami odsłoniętą klatkę piersiową.', category: 'romantic', stage: 1, timed: false, target: 'performer', gender: 'female' },
    { id: 's1_f4', text: 'Zasłoń oczy partnera opaską lub dłońmi. Pocałuj po kolei trzy różne miejsca na jego twarzy, szyi lub uszach, każąc mu odgadywać, co to za miejsca.', category: 'fun', stage: 1, timed: false, target: 'both', requiresAccessories: ['opaska'], gender: 'female' },
    { id: 's1_f5', text: 'Przejedź delikatnie opuszkami palców wzdłuż jego ramion i klatki piersiowej, wywołując dreszcze. Rób to tak wolno, jak tylko potrafisz, utrzymując kontakt wzrokowy.', category: 'touch', stage: 1, timed: true, timeLimit: 45, target: 'performer', gender: 'female' },

    // -- MALE --
    { id: 's1_m1', text: 'Ułóż partnerkę na plecach. Pocałuj powoli i delikatnie jej szyję, powoli schodząc wózkiem pocałunków na obojczyki i dekolt, kategorycznie omijając strefy intymne.', category: 'romantic', stage: 1, timed: true, timeLimit: 60, target: 'performer', gender: 'male' },
    { id: 's1_m2', text: 'Zasłoń oczy partnerce. Używając czegoś gładkiego lub chłodnego (np. kostki lodu z drinka), przejedź powoli wzdłuż jej kręgosłupa, od karku aż do lędźwi.', category: 'touch', stage: 1, timed: false, target: 'performer', requiresAccessories: ['opaska'], gender: 'male' },
    { id: 's1_m3', text: 'Niech partnerka usiądzie na brzegu łóżka. Stań przed nią, weź jej dłonie i wykonaj intensywny, punktowy masaż dłoni, cały czas patrząc jej głęboko w oczy.', category: 'romantic', stage: 1, timed: true, timeLimit: 60, target: 'performer', requiresActivities: ['masaz'], gender: 'male' },
    { id: 's1_m4', text: 'Zbliż usta dosłownie na milimetr do warg partnerki, ale jej nie całuj. Przez 30 sekund ocieraj się jedynie delikatnie swoim nosem o jej policzek, nęcąc i drocząc się.', category: 'hot', stage: 1, timed: true, timeLimit: 30, target: 'both', gender: 'male' },
    { id: 's1_m5', text: 'Rozepnij bluzkę lub zdejmij ramiączka partnerce jednym, płynnym ruchem, nie odrywając od niej wzroku. Następnie złóż aksamitny pocałunek na jej nagim ramieniu.', category: 'hot', stage: 1, timed: false, target: 'performer', removesClothing: ['bluzka'], gender: 'male' },

    // ==========================================
    // ETAP 2: Pikantność (Bez stref intymnych)
    // ==========================================

    // -- FEMALE --
    { id: 's2_f1', text: 'Skrępuj nadgarstki partnera z przodu (lub poproś by trzymał je splecione). Zacznij schodzić mokrymi pocałunkami w dół jego brzucha, zatrzymując się prowokacyjnie tuż nad paskiem. Zostań tam przez 30 sekund.', category: 'hot', stage: 2, timed: true, timeLimit: 30, target: 'performer', gender: 'female' },
    { id: 's2_f2', text: 'Ściągnij górną część ubrania (zostając w bieliźnie lub topless). Uklęknij nad leżącym partnerem i delikatnie ocieraj się swoim dekoltem o jego klatkę piersiową lub twarz.', category: 'hot', stage: 2, timed: true, timeLimit: 40, target: 'both', removesClothing: ['bluzka', 'stanik'], gender: 'female' },
    { id: 's2_f3', text: 'Każ mu zamknąć oczy. Mocno chwyć go za włosy i przyciągnij jego twarz do siebie, obdarzając go głębokim, dominującym pocałunkiem z wplecionym namiętnym językiem.', category: 'hot', stage: 2, timed: false, target: 'both', requiresActivities: ['calowanie'], gender: 'female' },
    { id: 's2_f4', text: 'Zdejmując część jego ubrań na siłę, posadź partnera na łóżku i powiedz szeptem, w jaki dominujący, "brudny" sposób pragniesz żeby zaciągnął cię za chwilę do wyra.', category: 'fun', stage: 2, timed: false, target: 'performer', requiresActivities: ['fantazje'], gender: 'female' },
    { id: 's2_f5', text: 'Usiądź złączonymi udami na jego kolanach, patrząc mu w oczy. Przez całą minutę ruszaj biodrami symulując powolną jazdę – jemu nie wolno dotykać twoich piersi.', category: 'hot', stage: 2, timed: true, timeLimit: 60, target: 'both', gender: 'female' },

    // -- MALE --
    { id: 's2_m1', text: 'Przyprzyj partnerkę delikatnie ramionami do ściany lub łóżka. Zablokuj ją swoim ciałem, powoli i dominująco całuj ją w usta z językiem, trzymając jedną dłoń na jej gardle (lekko!).', category: 'hot', stage: 2, timed: true, timeLimit: 30, target: 'both', requiresActivities: ['calowanie'], gender: 'male' },
    { id: 's2_m2', text: 'Odwróć partnerkę na brzuch, wiążąc jej dłonie z tyłu krawatem lub pasem. Usiądź lekko okrakiem na wysokości łdek i całuj, liż oraz podgryzaj jej kark i plecy.', category: 'hot', stage: 2, timed: true, timeLimit: 60, target: 'both', requiresAccessories: ['krawat'], gender: 'male' },
    { id: 's2_m3', text: 'Posmaruj jej piersi odrobiną olejku lub śliny. Przez dwie pelne minuty pieść je z dużą intensywnością – używając ust, rąk i ssania. Bez dotykania miejsc intymnych na dole.', category: 'hot', stage: 2, timed: true, timeLimit: 120, target: 'performer', requiresActivities: ['dotyk'], gender: 'male' },
    { id: 's2_m4', text: 'Klep ją zadziornie i wyraźnie w pośladek (przez ubranie lub bieliźnie), a potem mocno wtul twarz w zagłębienie jej szyi wdychając jej zapach przez resztę rundy.', category: 'hot', stage: 2, timed: false, target: 'performer', gender: 'male' },
    { id: 's2_m5', text: 'Każ jej położyć ręce płasko na łóżku. Oblizuj opuszkami zębów linię jej szczęki i powoli przesuwaj ręce po wewnętrznej stronie jej ud (nie wyżej!).', category: 'hot', stage: 2, timed: true, timeLimit: 45, target: 'performer', gender: 'male' },

    // ==========================================
    // ETAP 3: Strefy intymne (Oral / Manual)
    // ==========================================

    // -- BOTH (Można wrzucić z płcią) --
    { id: 's3_b1', text: 'Ułóżcie się natychmiast w pozycji klasycznej 69. Skupcie się w 100% na wzajemnych i jednoczesnych pieszczotach oralnych. Partner dyktuje głębsze tempo.', category: 'hot', stage: 3, timed: true, timeLimit: 120, target: 'both', gender: 'both' },

    // -- FEMALE --
    { id: 's3_f1', text: 'Zdejmij jego bieliznę. Weź jego członek gładko i głęboko do ust. Podpierając dłonią u nasady, utrzymuj bardzo miarowe, regularne ruchy góra-dół bez użycia rąk przez conajmniej pół minuty, głośno wydając dźwięki przyjemności.', category: 'hot', stage: 3, timed: true, timeLimit: 45, target: 'performer', gender: 'female' },
    { id: 's3_f2', text: 'Połóż go na plecach. Obficie rozprowadź olejek/lubrykant dłońmi po swoim ciele i po jego sprzęcie. Ślizgającymi się ruchami oburącz (oraz fragmentami piersi) pieść go intensywnie aż nie dacie rady.', category: 'touch', stage: 3, timed: true, timeLimit: 90, target: 'performer', requiresActivities: ['masaz'], gender: 'female' },
    { id: 's3_f3', text: 'Wejdź pomiędzy jego nogi, popatrz drapieżnie. Bierz jego przyrodzenie do ust na dosłownie centymetr-dwa i skup się tylko na drażnieniu językiem samej końcówki, prowokując go.', category: 'hot', stage: 3, timed: true, timeLimit: 60, target: 'performer', gender: 'female' },
    { id: 's3_f4', text: 'Złap mocno za trzon, i wykonuj tzw. "indian burn" - szybkie ruchy skręcające przedramiona. Przy każdym ucisku patrz mu odważnie prosto w oczy, pytając czy chce mocniej.', category: 'hot', stage: 3, timed: true, timeLimit: 30, target: 'performer', gender: 'female' },
    { id: 's3_f5', text: 'Polej odrobiną swojego ulubionego napoju (lub użyj lodu) trzon jego męskości i natychmiast ciepio zbliż swoje wargi oblizując cały spływający zimny płyn.', category: 'fun', stage: 3, timed: false, target: 'performer', gender: 'female' },

    // -- MALE --
    { id: 's3_m1', text: 'Połóż partnerkę na plecach, a jej nogi rozszerz na boki. Posmaruj dłoń olejkiem i rozpocznij powolny stymulujący masaż klitorisu płaską dłonią (handjob), z minuty na minutę coraz szybciej i mocniej.', category: 'touch', stage: 3, timed: true, timeLimit: 120, target: 'performer', gender: 'male' },
    { id: 's3_m2', text: 'Rozerwij (symbolicznie) lub błyskawicznie zsuń jej majtki. Wjedź głową w jej uda i zapikuj namiętną minetą - naprzemiennie używaj szerokiego języka do lizania z dołu do góry i ostrego ssania.', category: 'hot', stage: 3, timed: true, timeLimit: 90, target: 'performer', gender: 'male' },
    { id: 's3_m3', text: 'Wprowadź delikatnie jeden i środkowy palec do środka, podczas gdy kciuk stymuluje zewnętrznie punkt z szaleńczą uwagą na jej reakcje oddechowe. Reguluj głębokość w rytm waszych uderzeń serca.', category: 'hot', stage: 3, timed: true, timeLimit: 60, target: 'performer', gender: 'male' },
    { id: 's3_m4', text: 'Posadź partnerkę na krawędzi stołu/łóżka na wysokości Twojej twarzy, złap mocno pod kolanami i napieraj silnie językiem tylko na sam srodek. Wymuszaj by to ona przyciągała Cię do siebie drżącymi biodrami.', category: 'hot', stage: 3, timed: true, timeLimit: 60, target: 'performer', gender: 'male' },
    { id: 's3_m5', text: 'Połóż ją na brzuchu z nogami rozsuniętymi, delikatnie wtul nos na lędźwie, rozsuń dłońmi jej fałdy od tyłu i funduj delikatny dotyk oralny tylnym krawędziom łechtaczki od "nietypowej" strony.', category: 'hot', stage: 3, timed: true, timeLimit: 60, target: 'performer', gender: 'male' },

    // ==========================================
    // ETAP 4: Stosunek (Seks)
    // ==========================================

    // -- FEMALE --
    { id: 's4_f1', text: 'Usiądź na leżącym partnerze w pozycji cowgirl (jeździec) odwrócona przodem do niego. Całkowicie przejmij kontrolę – wykonuj głębokie powolne ruchy tylko w górę i w dół, oprzyj się dłońmi o jego tors i kontroluj każde wejście.', category: 'hot', stage: 4, timed: true, timeLimit: 120, target: 'both', gender: 'female' },
    { id: 's4_f2', text: 'Odwróć się tyłem i usiądź na niom (odwrócony klasyczny jeździec). Wypnij zjawiskowo pośladki ku górze, wyciągając kręgosłup, wciągnij po same jądra i zacznij zmysłowo "mielić" w kółko biodrami przez pełną minutę.', category: 'hot', stage: 4, timed: true, timeLimit: 60, target: 'both', gender: 'female' },
    { id: 's4_f3', text: 'Złap jego dłonie i skrzyżuj je nad głową. Wejdź na niego w pozycji lilii wodnej z ugiętymi kolanami na boki blisko jego torsu, zacznij z zębami na karku miażdżyć tempo wgniatając poduszkę.', category: 'hot', stage: 4, timed: false, target: 'both', gender: 'female' },
    { id: 's4_f4', text: 'Opierając się tyłem o krawędź łóżka/fotela zejdź ostrożnie w dół naciągając szeroko łydki i unieś się, pozwalając partnerowi na płytkie ale stymulujące całą ściankę ruchy penetrujące od przodu.', category: 'hot', stage: 4, timed: false, target: 'both', gender: 'female' },
    { id: 's4_f5', text: 'Leżąc klasycznie w misjonarzu zarzuć mocno obie nogi na szyję partnera. Poproś go, by podczas szybkich głębokich pchnięć opuścił korpus całkowicie na ciebie, żebyście oddychali jednym powietrzem.', category: 'hot', stage: 4, timed: false, target: 'both', gender: 'female' },

    // -- MALE --
    { id: 's4_m1', text: 'Podejdź od tyłu, poleć oprzeć się łokciami o brzeg łóżka. Złap mocno w pasie obiema dłońmi, zacznij w ostrym, pierwotnym tempie zagłębiać się po pośladek dociskając ją do materaca z całą mocą po wejściu powstrzymując jęk.', category: 'hot', stage: 4, timed: true, timeLimit: 60, target: 'both', gender: 'male' },
    { id: 's4_m2', text: 'Złącz ciasno jej proste nogi ze sobą i ułóż się do góry klasycznie (misjonarz ciasny). Dzięki ściśnięciu twoje tarcie będzie dwa razy mocniejsze – uderzaj stabilnymi długimi pchnięciami całując całą odsłoniętą szyję.', category: 'hot', stage: 4, timed: false, target: 'both', gender: 'male' },
    { id: 's4_m3', text: 'Odwróć ją na bok powalając na materac "w pozycji łyżeczkowej", gdzie wejdziesz w nią od tyłu, trzymając mocno piersi w obu dłoniach. W tej wysoce komfortowej pozie poddajcie się wolnego gładkiemu poruszaniu bez pośpiechu.', category: 'romantic', stage: 4, timed: true, timeLimit: 90, target: 'both', gender: 'male' },
    { id: 's4_m4', text: 'Chwyć partnerkę w udo i przerzuć zgiętą nogę przez swoje prawe ramię, uwalniając idealną drogę asymetryczną. Rządź w 100% tempem obniżając i wchodząc precyzyjniej z każdym powtórzeniem.', category: 'hot', stage: 4, timed: false, target: 'both', gender: 'male' },
    { id: 's4_m5', text: 'Ściągnij ją na brzeg łóżka z opadającymi w próżnię pośladkami. Stań stabilnie na dywanie przed nią – oprzyj przedramię blokująco blisko obojczyków. Zaprezentuj ekstremalne głębokie pełne wkłucie wybijające ciało w górę.', category: 'hot', stage: 4, timed: false, target: 'both', gender: 'male' },

    // ==========================================
    // ETAP 5: FINAŁ / AFTERCARE (Wspólny)
    // ==========================================
    { id: 's5_1', text: 'Przytulcie się mocno. Niech serca się uspokoją. Szepnij partnerowi do ucha co przed chwila najbardziej ci się podobało.', category: 'romantic', stage: 5, timed: false, target: 'both', gender: 'both' },
    { id: 's5_2', text: 'Pocałunek uwieńczenia finału - delikatny, mokry i spokojny dopóki oddechy w 100% nie opadną.', category: 'romantic', stage: 5, timed: false, target: 'both', gender: 'both' },
    { id: 's5_3', text: 'Odpocznijcie chwilę we własnych objęciach w ciszy powoli analizując napięcie które właśnie zeżło. Możecie iść wspólnie pod prysznic!', category: 'touch', stage: 5, timed: false, target: 'both', gender: 'both' }
];

let data = fs.readFileSync('src/js/data.js', 'utf8');

// Match everything between export const tasks = [ and ];
const match = data.match(/export const tasks = \[\s*([\s\S]*?)\s*\];/);
if (!match) {
    console.error("Could not find tasks array.");
    process.exit(1);
}

// Convert tasks array to standard JS formatting.
const util = require('util');
const tasksStr = util.inspect(newTasks, { depth: null, maxArrayLength: null });

let newContent = data.replace(match[0], 'export const tasks = ' + tasksStr + ';');

// Zmieniam również nazwy etapów, żeby odzwierciedlały powagę opowieści, if needed.
const matchNames = newContent.match(/export const stageNames = (\[[\s\S]*?\]);/);
if (matchNames) {
    const newNamesStr = 'export const stageNames = ["1. Napięcie i Zmysły", "2. Pikantność i Dominacja", "3. Zejście na dół", "4. Stosunek", "5. Finał i nagroda"];';
    newContent = newContent.replace(matchNames[0], newNamesStr);
}

fs.writeFileSync('src/js/data.js', newContent);
console.log('REPLACED_TASKS_DATABASE');
