# CleanUpAndGetPaid

## Beskrivning
Detta är en React-applikation där användare kan lista sina oanvända saker till försäljning. Den är byggd med Vite och har en backend med ASP.NET Core och MySQL.

## Funktioner
- Skapa konto och logga in
- Lägg till, visa och redigera föremål
- Responsiv design med React Native för webben

## Installation
1. Klona repo: `git clone https://github.com/ditt-repo/CleanUpAndGetPaid.git`
-Beroenden:
2. Installera  `npm install`
3. Instellera `dotnet add package MySql.Data` för databasen
4. dotnet add package `Microsoft.AspNetCore.Authentication.JwtBearer` 
5. Starta utvecklingsservern: `npm run dev`


## Backend
- Körs med ASP.NET Core
- MySQL databasdetaljer:
  - Host: `******`
  - User: `****`
  - Password: `******`
  - Database: `CleanUpAndGetPaid`

## Använda teknologier
- React, TypeScript, CSS Grid
- MySQL
- ASP.NET Core



## data bassen som vi användar 

-- Kategori 1: Fordon
INSERT INTO items (name, description, category, price) VALUES
('Cykel', 'En mountainbike i gott skick', 'Fordon', 1500.00),
('Scooter', 'En eldriven scooter', 'Fordon', 2200.00),
('Bil', 'En begagnad bil, men i bra skick', 'Fordon', 50000.00),
('Moped', 'En moped från 2018', 'Fordon', 8000.00),
('Elbil', 'Liten elbil för barn', 'Fordon', 3000.00),
('Traktor', 'En leksakstraktor', 'Fordon', 200.00),
('Skateboard', 'En skateboard för nybörjare', 'Fordon', 500.00),
('Longboard', 'En bra longboard', 'Fordon', 900.00),
('Cykelhjälm', 'En hjälm för cykling', 'Fordon', 250.00),
('Sparkcykel', 'En klassisk sparkcykel', 'Fordon', 300.00);

-- Kategori 2: Elektronik
INSERT INTO items (name, description, category, price) VALUES
('TV', '42-tums platt-TV', 'Elektronik', 2500.00),
('Smartphone', 'Nyare smartphone med bra kamera', 'Elektronik', 5000.00),
('Laptop', 'En bärbar dator med 8GB RAM', 'Elektronik', 7000.00),
('Högtalare', 'Bluetooth-högtalare', 'Elektronik', 800.00),
('Kamera', 'Systemkamera med 18-55mm objektiv', 'Elektronik', 3500.00),
('Surfplatta', 'En Android surfplatta', 'Elektronik', 2000.00),
('Spelkonsol', 'Begagnad spelkonsol med spel', 'Elektronik', 3000.00),
('Projektor', 'Bärbar projektor för filmkvällar', 'Elektronik', 1500.00),
('Headset', 'Trådlöst gaming-headset', 'Elektronik', 1200.00),
('Skrivare', 'Färglaser-skrivare', 'Elektronik', 1000.00);

-- Kategori 3: Möbler
INSERT INTO items (name, description, category, price) VALUES
('Soffa', 'Stor hörnsoffa', 'Möbler', 4000.00),
('Bord', 'Matbord med fyra stolar', 'Möbler', 1200.00),
('Bokhylla', 'Vit bokhylla', 'Möbler', 800.00),
('Skrivbord', 'Skrivbord i trä', 'Möbler', 1000.00),
('Säng', 'En 180x200 säng', 'Möbler', 3000.00),
('Klädskåp', 'Stort garderob med spegel', 'Möbler', 2000.00),
('Sängbord', 'Nattduksbord', 'Möbler', 500.00),
('TV-bänk', 'Modern TV-bänk', 'Möbler', 900.00),
('Fåtölj', 'Liten läderfåtölj', 'Möbler', 1500.00),
('Hyllsystem', 'Väggmonterat hyllsystem', 'Möbler', 1100.00);

-- Kategori 4: Kök
INSERT INTO items (name, description, category, price) VALUES
('Kaffebryggare', 'Automatisk kaffebryggare', 'Kök', 800.00),
('Mikrovågsugn', 'Digital mikrovågsugn', 'Kök', 1000.00),
('Brödrost', 'Brödrost med två fack', 'Kök', 300.00),
('Kylskåp', 'Rymligt kylskåp', 'Kök', 4000.00),
('Diskmaskin', 'Helintegrerad diskmaskin', 'Kök', 3500.00),
('Mixer', 'En kraftfull blender', 'Kök', 500.00),
('Vattenkokare', 'Snabbkokande vattenkokare', 'Kök', 200.00),
('Bestickset', 'Ett 24-delars bestickset', 'Kök', 400.00),
('Köksknivar', 'Professionellt knivset', 'Kök', 1200.00),
('Kastruller', '3-delat kastrullset', 'Kök', 800.00);

-- Kategori 5: Sport
INSERT INTO items (name, description, category, price) VALUES
('Fotboll', 'Officiell matchboll', 'Sport', 300.00),
('Tennisracket', 'Lättviktig racket för tennis', 'Sport', 700.00),
('Cykelhjälm', 'Hjälm för landsvägscykling', 'Sport', 500.00),
('Löpband', 'Elektriskt löpband med LCD-skärm', 'Sport', 3500.00),
('Hantlar', 'Set med två hantlar', 'Sport', 600.00),
('Yogamatta', 'Extra tjock yogamatta', 'Sport', 300.00),
('Golfklubbor', 'Set med golfklubbor', 'Sport', 4000.00),
('Boxningshandskar', 'Boxningshandskar i läder', 'Sport', 700.00),
('Badmintonset', 'Set för två spelare', 'Sport', 200.00),
('Träningsbänk', 'Bänk för hemmaträning', 'Sport', 1500.00);

-- Kategori 6: Böcker
INSERT INTO items (name, description, category, price) VALUES
('Roman', 'En spännande thriller', 'Böcker', 100.00),
('Barnbok', 'Illustrerad bok för barn', 'Böcker', 80.00),
('Fackbok', 'Bok om historia', 'Böcker', 150.00),
('Kokbok', 'Recept för alla måltider', 'Böcker', 200.00),
('Lärobok', 'Lärobok i matematik', 'Böcker', 250.00),
('Pocketbok', 'Roman i pocketformat', 'Böcker', 50.00),
('Fantasybok', 'Fantasyroman om drakar', 'Böcker', 180.00),
('Biografi', 'Biografi om kända personer', 'Böcker', 130.00),
('Reseguide', 'Guide till Europa', 'Böcker', 170.00),
('Poesi', 'Samling med dikter', 'Böcker', 90.00);

-- Kategori 7: Kläder
INSERT INTO items (name, description, category, price) VALUES
('Jeans', 'Blå jeans i storlek 32', 'Kläder', 300.00),
('T-shirt', 'Vit T-shirt med tryck', 'Kläder', 150.00),
('Jacka', 'Vinterjacka i dun', 'Kläder', 1200.00),
('Kjol', 'Kort kjol i bomull', 'Kläder', 200.00),
('Skjorta', 'Formell vit skjorta', 'Kläder', 400.00),
('Tröja', 'Stickad ulltröja', 'Kläder', 500.00),
('Shorts', 'Sommarskjorts i linne', 'Kläder', 200.00),
('Kostym', 'Tvådelad kostym', 'Kläder', 1500.00),
('Mössa', 'Stickad vintermössa', 'Kläder', 100.00),
('Väst', 'Lättväst för vår och höst', 'Kläder', 400.00);

-- Fortsättning med de andra kategorierna (Smycken, Leksaker, Hemelektronik, Skor, Väskor, Trädgård, Verktyg, Musikinstrument)

-- Kategori 8: Smycken
INSERT INTO items (name, description, category, price) VALUES
('Ring', 'Silverring med diamanter', 'Smycken', 2000.00),
('Halsband', 'Guldhalsband med rubiner', 'Smycken', 5000.00),
('Armband', 'Läderarmband', 'Smycken', 300.00),
('Örhängen', 'Guldörhängen', 'Smycken', 1500.00),
('Pärlhalsband', 'Klassiskt pärlhalsband', 'Smycken', 2500.00),
('Klocka', 'Guldklocka med läderrem', 'Smycken', 4500.00),
('Ring', 'Ring med safirer', 'Smycken', 3500.00),
('Broch', 'Vintage-brosch', 'Smycken', 1200.00),
('Ring', 'Vigselring i platina', 'Smycken', 8000.00),
('Halsband', 'Silverhalsband med hjärta', 'Smycken', 1200.00);

-- Kategori 9: Leksaker
INSERT INTO items (name, description, category, price) VALUES
('Docka', 'Liten leksaksdocka', 'Leksaker', 100.00),
('Bilbana', 'Elektrisk bilbana', 'Leksaker', 500.00),
('Actionfigur', 'Actionfigur från en film', 'Leksaker', 200.00),
('Pussel', '1000-bitars pussel', 'Leksaker', 150.00),
('Byggklossar', 'Byggklossar i trä', 'Leksaker', 300.00),
('Brädspel', 'Populärt familjespel', 'Leksaker', 400.00),
('Radiostyrd bil', 'Radiostyrd bil med batteri', 'Leksaker', 700.00),
('LEGO', 'Byggset med LEGO', 'Leksaker', 1200.00),
('Boll', 'Liten boll för inomhusspel', 'Leksaker', 100.00),
('Gosedjur', 'Mjuk nallebjörn', 'Leksaker', 150.00);

-- Kategori 10: Hemelektronik
INSERT INTO items (name, description, category, price) VALUES
('Dammsugare', 'Kraftfull dammsugare', 'Hemelektronik', 1200.00),
('Luftrenare', 'Bärbar luftrenare', 'Hemelektronik', 1500.00),
('Kaffemaskin', 'Automatisk kaffemaskin', 'Hemelektronik', 2000.00),
('Hårfön', 'Professionell hårfön', 'Hemelektronik', 400.00),
('Strykjärn', 'Ångstrykjärn', 'Hemelektronik', 800.00),
('Elvisp', 'Elektrisk visp', 'Hemelektronik', 300.00),
('Fläkt', 'Golvlampa med fläkt', 'Hemelektronik', 700.00),
('Köksassistent', 'Köksmaskin med flera funktioner', 'Hemelektronik', 2500.00),
('Robotdammsugare', 'Automatisk dammsugare', 'Hemelektronik', 5000.00),
('Våffeljärn', 'Dubbel våffeljärn', 'Hemelektronik', 600.00);

-- Kategori 11: Skor
INSERT INTO items (name, description, category, price) VALUES
('Löparskor', 'Bekväma löparskor', 'Skor', 800.00),
('Stövlar', 'Vattentäta stövlar', 'Skor', 1200.00),
('Sandal', 'Sommarsandaler i läder', 'Skor', 500.00),
('Sneakers', 'Populära sneakers', 'Skor', 1000.00),
('Kängor', 'Vinterkängor med päls', 'Skor', 1500.00),
('Ballerinaskor', 'Lätta ballerinaskor', 'Skor', 400.00),
('Höga klackar', 'Skor med höga klackar', 'Skor', 700.00),
('Vandringskängor', 'Kängor för fjällvandring', 'Skor', 1800.00),
('Sandaler', 'Bekväma sandaler', 'Skor', 300.00),
('Flip-flops', 'Sommarskor för stranden', 'Skor', 200.00);

-- Kategori 12: Väskor
INSERT INTO items (name, description, category, price) VALUES
('Ryggsäck', 'Stor ryggsäck för resor', 'Väskor', 900.00),
('Handväska', 'Elegant handväska i läder', 'Väskor', 1500.00),
('Axelremsväska', 'Axelremsväska med plats för dator', 'Väskor', 1200.00),
('Weekendväska', 'Weekendväska i canvas', 'Väskor', 1300.00),
('Resväska', 'Liten resväska för flygresor', 'Väskor', 1800.00),
('Sportväska', 'Stor sportväska med fack', 'Väskor', 700.00),
('Portfölj', 'Läderportfölj för arbete', 'Väskor', 2000.00),
('Kameraväska', 'Väska för systemkamera', 'Väskor', 600.00),
('Laptopväska', 'Skyddande laptopväska', 'Väskor', 800.00),
('Clutch', 'Liten festväska', 'Väskor', 500.00);

-- Kategori 13: Trädgård
INSERT INTO items (name, description, category, price) VALUES
('Gräsklippare', 'Elektrisk gräsklippare', 'Trädgård', 2500.00),
('Vattenslang', '20 meter lång vattenslang', 'Trädgård', 400.00),
('Trädgårdsstolar', '2-pack stolar för trädgård', 'Trädgård', 600.00),
('Parasoll', 'Stort parasoll', 'Trädgård', 800.00),
('Häcksax', 'Elektrisk häcksax', 'Trädgård', 1000.00),
('Grill', 'Kolgrill med lock', 'Trädgård', 1200.00),
('Planteringskrukor', '5-pack lerkrukor', 'Trädgård', 300.00),
('Trädgårdsbelysning', 'Solcellsbelysning för trädgården', 'Trädgård', 700.00),
('Utebord', 'Bord i plast för utomhusbruk', 'Trädgård', 1000.00),
('Kompost', 'Stor kompostbehållare', 'Trädgård', 1200.00);

-- Kategori 14: Verktyg
INSERT INTO items (name, description, category, price) VALUES
('Hammare', 'Kraftig hammare', 'Verktyg', 150.00),
('Skruvmejsel', 'Skruvmejselset med 10 delar', 'Verktyg', 300.00),
('Borrmaskin', 'Sladdlös borrmaskin', 'Verktyg', 900.00),
('Såg', 'Handsåg för trä', 'Verktyg', 400.00),
('Måttband', '5 meter långt måttband', 'Verktyg', 100.00),
('Skiftnyckel', 'Justerbar skiftnyckel', 'Verktyg', 200.00),
('Multiverktyg', 'Multiverktyg med flera funktioner', 'Verktyg', 500.00),
('Slipmaskin', 'Elektrisk slipmaskin', 'Verktyg', 700.00),
('Stege', '2 meter lång stege', 'Verktyg', 600.00),
('Tång', 'Universaltång', 'Verktyg', 150.00);

-- Kategori 15: Musikinstrument
INSERT INTO items (name, description, category, price) VALUES
('Gitarr', 'Akustisk gitarr', 'Musikinstrument', 1500.00),
('Trummor', 'Komplett trumset', 'Musikinstrument', 5000.00),
('Piano', 'Elektriskt piano', 'Musikinstrument', 7000.00),
('Fiol', 'Begagnad fiol i bra skick', 'Musikinstrument', 2500.00),
('Flöjt', 'Silverflöjt', 'Musikinstrument', 1200.00),
('Trumpet', 'Mässingstrumpet', 'Musikinstrument', 3500.00),
('Keyboard', 'Elektronisk keyboard med flera ljud', 'Musikinstrument', 3000.00),
('Basgitarr', 'Elektrisk basgitarr', 'Musikinstrument', 4000.00),
('Munspel', 'Bluesmunspel i C', 'Musikinstrument', 500.00),
('Saxofon', 'Altsaxofon i mässing', 'Musikinstrument', 4500.00);
