//* Acá van los datos de prueba

const BooksTest = [
    {
        "title": "The Name of the Wind",
        "author": "Patrick Rothfuss",
        "price": 25,
        "description": "This is the story of Kvothe, the main character, told in his own voice. He is the protagonist of the Kingkiller Chronicle trilogy.",
        "pages": 662,
        "publicationDate": "2007-03-27",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_897898-MLA41780377374_052020-F.webp"
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "price": 18,
        "description": "1984 is a dystopian political novel that depicts a totalitarian future where Big Brother controls everything.",
        "pages": 328,
        "publicationDate": "1949-06-08",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_876109-MLC48852705946_012022-F.webp"
    },
    {
        "title": "100 años de soledad",
        "author": "Gabriel García Márquez",
        "price": 22,
        "description": "This novel tells the story of the Buendía family over several generations in the fictional town of Macondo.",
        "pages": 432,
        "publicationDate": "1967-05-30",
        "image": "https://contentv2.tap-commerce.com/cover/large/9789871138142_1.jpg?id_com=1113"
    },
    {
        "title": "Crónicas de una muerte anunciada",
        "author": "Gabriel García Márquez",
        "price": 24,
        "description": "Chronicle of a Death Foretold tells the peculiar story of love between Bayardo San Román and Ángela Vicario and the unfortunate Santiago Nasar, who becomes the scapegoat for the Vicario twins' quest for revenge.",
        "pages": 144,
        "publicationDate": "1981-06-31",
        "image": "https://contentv2.tap-commerce.com/cover/large/9789871138012_1.jpg?id_com=1113"
     },
    {
        "title": "El amor en los tiempos de cólera",
        "author": "Gabriel García Márquez",
        "price": 28,
        "description": "The novel portrays the love story between Fermina Daza and Florentino Ariza, set in a Caribbean port town over more than sixty years.",
        "pages": 496,
        "publicationDate": "1985-08-11",
        "image": "https://contentv2.tap-commerce.com/cover/large/9789871138135_1.jpg?id_com=1113"
    },
    {
        "title": "La sombra del viento",
        "author": "Carlos Ruiz Zafón",
        "price": 20,
        "description": "In 1945, a young boy is taken by his father to a mysterious place hidden in the heart of the old city: The Cemetery of Forgotten Books. There, Daniel Sempere finds a cursed book that changes the course of his life and leads him into a labyrinth of intrigue and buried secrets in the dark soul of the city. The Shadow of the Wind is a literary mystery set in the Barcelona of the first half of the 20th century.",
        "pages": 545,
        "publicationDate": "2001-04-01",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_894082-MLA54752885330_032023-F.webp"
    },
    {
        "title": "Los juegos del ángel",
        "author": "Carlos Ruiz Zafón",
        "price": 27,
        "description": "In the turbulent Barcelona of the 1920s, a young writer obsessed with an impossible love receives an offer from a mysterious publisher to write a book unlike any other, for a fortune and perhaps much more. With dazzling style and a flawless narrative precision, the author of The Shadow of the Wind returns to the Cemetery of Forgotten Books to take readers back to the heart of the old city, where an intriguing new story of intrigue, romance, and tragedy unfolds.",
        "pages": 688,
        "publicationDate": "2008-04-17",
        "image": "https://contentv2.tap-commerce.com/cover/large/9789878220161_1.jpg?id_com=1113"
    },
    {
        "title": "The Pillars of the Earth",
        "author": "Ken Follett",
        "price": 30,
        "description": "The story is set in the Middle Ages and follows the construction of a Gothic cathedral in the fictional town of Kingsbridge.",
        "pages": 1076,
        "publicationDate": "1989-10-02",
        "image": "https://contentv2.tap-commerce.com/cover/large/9789506445430_1.jpg?id_com=1113"
    },
    {
        "title": "Fall of Giants",
        "author": "Ken Follett",
        "price": 43,
        "description": "The story begins in 1911, the day of the coronation of King George V at Westminster Abbey. The destiny of the Williams, a mining family from Wales, is intertwined with that of the aristocratic Fitzherberts, owners of the mines. Lady Maud Fitzherbert falls in love with Walter von Ulrich, a young spy at the German embassy in London. Their lives will intertwine with that of a progressive advisor to the President of the United States, Woodrow Wilson, and two Russian brothers whose dreams of fortune in America have been shattered by war and revolution.",
        "pages": 1024,
        "publicationDate": "2010-09-28",
        "image": "https://contentv2.tap-commerce.com/cover/large/9789875669338_1.jpg?id_com=1113"
    },
    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "price": 26,
        "description": "The first book of the Harry Potter saga, where he discovers he is a wizard and begins his adventure at Hogwarts School of Witchcraft and Wizardry.",
        "pages": 332,
        "publicationDate": "1997-06-26",
        "image": "https://contentv2.tap-commerce.com/cover/large/9789878000107_1.jpg?id_com=1113"
    },
    {
        "title": "Harry Potter and the Chamber of Secrets",
        "author": "J.K. Rowling",
        "price": 26,
        "description": "While Harry impatiently waits at his unbearable aunt and uncle's house for the start of his second year at Hogwarts School of Witchcraft and Wizardry, an elf appears in his room and warns him of a deadly threat hanging over the school. Harry doesn't think twice and, accompanied by Ron, heads to Hogwarts in a flying car. But can an apprentice wizard defend the school from the evildoers who want to destroy it? Unaware that someone has opened the Chamber of Secrets, unleashing a series of dangerous monsters, Harry and his friends Ron and Hermione will have to face giant spiders, enchanted serpents, enraged ghosts, and, above all, the reincarnation of their most fearsome adversary.",
        "pages": 320,
        "publicationDate": "1998-07-02",
        "image": "https://contentv2.tap-commerce.com/cover/large/9789878000114_1.jpg?id_com=1113"
    },
    {
        "title": "Harry Potter and the Prisoner of Azkaban",
        "author": "J.K. Rowling",
        "price": 26,
        "description": "Harry eagerly awaits the start of his third year at Hogwarts School of Witchcraft and Wizardry. After turning thirteen, alone and far from his friends at Hogwarts, Harry quarrels with his bushy-haired Aunt Marge, whom he turns into a balloon, and must flee on a magical bus. Meanwhile, a terrible villain, Sirius Black, an magical serial killer and former associate of Lord Voldemort, has escaped from Azkaban prison and seems determined to eliminate Harry from the map. And if that weren't enough, Harry must also confront some terrible monsters, the Dementors, abominable beings capable of stealing the happiness of wizards and erasing all beautiful memories from those who dare to look at them. What none of these evil characters know is that Harry, with the help of his loyal friends Ron and Hermione, is capable of anything and much more.",
        "pages": 384,
        "publicationDate": "1999-07-08",
        "image": "https://contentv2.tap-commerce.com/cover/large/9789878000121_1.jpg?id_com=1113"
    },
    {
        "title": "Harry Potter and the Goblet of Fire",
        "author": "J.K. Rowling",
        "price": 47,
        "description": "After another abominable summer with the Dursleys, Harry is preparing to start the fourth year at Hogwarts, the famous school of magic and wizardry. At fourteen, Harry would like to be like any other young wizard, dedicating himself to learning new spells, meeting his friends Ron and Hermione, and attending the Quidditch World Cup with them. However, when he arrives at school, a big surprise awaits him, which will force him to face the most formidable challenges of his life. If he manages to overcome them, he will have shown that he is no longer a child and that he is ready to experience the new and exciting experiences that the future holds for him.",
        "pages": 672,
        "publicationDate": "2000-07-08",
        "image": "https://contentv2.tap-commerce.com/cover/large/9789878000138_1.jpg?id_com=1113"
    },
    {
        "title": "Harry Potter and the Order of the Phoenix",
        "author": "J.K. Rowling",
        "price": 59,
        "description": "The tedious summer vacation at his uncle's house is not over yet, and Harry feels more restless than ever. He has hardly heard from Ron and Hermione and senses that something strange is happening at Hogwarts. Indeed, when another school year finally begins at the famous school of magic and wizardry, his fears come true. The Ministry of Magic denies that Voldemort has returned and has launched a smear campaign against Harry and Dumbledore, assigning the horrible Professor Dolores Umbridge the task of monitoring all their movements. So, in addition to feeling lonely and misunderstood, Harry suspects that Voldemort can read his thoughts and fears that the fearsome wizard is trying to seize a secret object that would allow him to regain his destructive power.",
        "pages": 928,
        "publicationDate": "2003-06-21",
        "image": "https://contentv2.tap-commerce.com/cover/large/9789878000145_1.jpg?id_com=1113"
    },
    {
        "title": "Harry Potter and the Half-Blood Prince",
        "author": "J.K. Rowling",
        "price": 34,
        "description": "At sixteen, Harry begins his sixth year at Hogwarts in the midst of terrible events plaguing England. Appointed captain of the Quidditch team, Harry's time is filled with tryouts, exams, and girls, but the tranquility doesn't last long. Despite the strict security controls protecting the school, two students are brutally attacked. Dumbledore knows that the moment prophesied by the Prophecy, in which Harry and Voldemort will face each other to the death, is approaching: 'The one with the power to vanquish the Dark Lord approaches ... One of the two must die at the hand of the other, for neither can live while the other survives.' The old headmaster will seek Harry's help, and together, they will embark on dangerous journeys to weaken the enemy, aided by a mysterious person named the Half-Blood Prince.",
        "pages": 576,
        "publicationDate": "2005-07-16",
        "image": "https://contentv2.tap-commerce.com/cover/large/9789878000152_1.jpg?id_com=1113"
    },
    {
        "title": "Harry Potter and the Deathly Hallows",
        "author": "J.K. Rowling",
        "price": 46,
        "description": "The crucial date approaches. When he turns seventeen, Harry will lose the protective charm that keeps him safe. The announced battle to the death with Voldemort is imminent, and the almost impossible mission of finding and destroying the remaining Horcruxes is more urgent than ever. The time has come to make the most difficult decisions. Harry must leave the warmth and safety of The Burrow to embark fearlessly and decisively on the inexorable path set before him. Aware of what is at stake, only within himself will he find the strength to drive him toward a unknown destiny.",
        "pages": 704,
        "publicationDate": "2007-07-21",
        "image": "https://contentv2.tap-commerce.com/cover/large/9789878000169_1.jpg?id_com=1113"
    },
    {
        "title": "The Lord of The Rings: The Fellowship Of The Ring",
        "author": "J.R.R. Tolkien",
        "price": 28,
        "description": "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them. In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.",
        "pages": 576,
        "publicationDate": "1954-07-29",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_866648-MLA49451927533_032022-F.webp"
    },
    {
        "title": "The Lord of The Rings: The Two Towers",
        "author": "J.R.R. Tolkien",
        "price": 28,
        "description": "While the evil might of the Dark Lord Sauron swarms out to conquer all Middle-earth, Frodo and Sam struggle deep into Mordor, seat of Sauron’s power. To defeat the Dark Lord, the One Ring, ruler of the accursed Rings of Power, must be destroyed in the fires of Mount Doom. But the way is impossibly hard, and Frodo is weakening. Weighed down by the compulsion of the Ring, he begins finally to despair.",
        "pages": 464,
        "publicationDate": "1954-11-11",
        "image": "https://contentv2.tap-commerce.com/cover/large/9789505470655_1.jpg?id_com=1113"
    },
    {
        "title": "The Lord of The Rings: The Return of the King",
        "author": "J.R.R. Tolkien",
        "price": 29,
        "description": "The Dark Lord has risen, and as he unleashes hordes of Orcs to conquer all Middle-earth, Frodo and Sam struggle deep into his realm in Mordor. To defeat Sauron, the One Ring must be destroyed in the fires of Mount Doom. But the way is impossibly hard, and Frodo is weakening. The Ring corrupts all who bear it, and Frodo's time is running out. Will Sam and Frodo succeed, or will the Dark Lord rule Middle-earth once more?",
        "pages": 416,
        "publicationDate": "1955-10-20",
        "image": "https://contentv2.tap-commerce.com/cover/large/9789505470662_1.jpg?id_com=1113"
    },
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "price": 29,
        "description": "It is the first work that explores the mythological universe created by Tolkien and later defined in The Lord of the Rings and The Silmarillion. Within this fiction, the plot of The Hobbit is set in the year 2941 of the Third Age of the Sun and tells the story of the hobbit Bilbo Baggins, who, along with the wizard Gandalf and a group of dwarves, embarks on an adventure to find the treasure guarded by the dragon Smaug in the Lonely Mountain.",
        "pages": 320,
        "publicationDate": "1937-09-21",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_779424-MLU70255708050_072023-F.webp"
    },
    {
        "title": "The Silmarillion",
        "author": "J.R.R. Tolkien",
        "price": 28,
        "description": "The Silmarillion tells the story of the First Age, the ancient drama spoken of by the characters in The Lord of the Rings, in which some of them took part, such as Elrond and Galadriel. An authentic work of imagination, an inspired, legendary, or mythical vision of the endless conflict between the desire for power and the ability to create. Revised edition of J.R.R. Tolkien's classic The Silmarillion.",
        "pages": 552,
        "publicationDate": "1977-09-15",
        "image": "https://m.media-amazon.com/images/P/0345325818.01._SCLZZZZZZZ_SX500_.jpg"
    },
    {
        "title": "The Children of Húrin",
        "author": "J.R.R. Tolkien",
        "price": 24,
        "description": "Painstakingly restored from Tolkien’s manuscripts and presented for the first time as a fully continuous and standalone story, this illustrated paperback of the epic tale of The Children of Húrin will reunite fans of The Hobbit and The Lord of the Rings with Elves, dragons, Dwarves and Orcs, and the rich landscape and characters unique to Tolkien. It is a legendary time long before The Lord of the Rings, and Morgoth, the first Dark Lord, dwells in the vast fortress of Angband in the North; and within the shadow of the fear of Angband, and the war waged by Morgoth against the Elves, the fates of Túrin and his sister Niënor will be tragically entwined. Their brief and passionate lives are dominated by the elemental hatred that Morgoth bears them as the children of Húrin, the man who dared to defy him to his face. Against them Morgoth sends his most formidable servant, Glaurung, a powerful spirit in the form of a huge wingless dragon of fire, in an attempt to fulfil the curse of Morgoth, and destroy the children of Húrin.",
        "pages": 322,
        "publicationDate": "2007-04-16",
        "image": "https://m.media-amazon.com/images/I/41Al4kLCadL.jpg"
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "price": 21,
        "description": "The novel tells the story of Atticus Finch, a lawyer, and his children Scout and Jem as they deal with issues of race and injustice in the Great Depression-era South.",
        "pages": 324,
        "publicationDate": "1960-07-11",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_863616-MLA48557316097_122021-F.webp"
    },
    {
        "title": "Don Quijote",
        "author": "Miguel de Cervantes Saavedra",
        "price": 24,
        "description": "The novel narrates the adventures of a hidalgo who, driven mad by reading too many books on chivalry, decides to set out and revive chivalry, undo wrongs, and bring justice to the world, under the name Don Quixote.",
        "pages": 928,
        "publicationDate": "1605-01-16",
        "image": "https://contentv2.tap-commerce.com/cover/large/9789873952111_1.jpg?id_com=1113"
    },
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "price": 19,
        "description": "The novel follows the lives of the Bennet sisters and their quest for marriage in the English countryside of the early 19th century.",
        "pages": 432,
        "publicationDate": "1813-01-28",
        "image": "https://contentv2.tap-commerce.com/cover/large/9789875669932_1.jpg?id_com=1113"
    },
    {
        "title": "Emma",
        "author": "Jane Austen",
        "price": 29,
        "description": "Emma tells the story of an intelligent and industrious young woman determined to be the matchmaker for all her friends. When her governess, friend, and confidante gets married, Emma Woodhouse finds herself alone and faces the emptiness of her life and the difficult task of trying to make others lead a perfect life. All her emotional manipulations create a web of entanglements, misunderstandings, and confusion around her, ultimately putting her self-confidence to the test.",
        "pages": 504,
        "publicationDate": "1815-12-23",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_602318-MLA29016057850_122018-F.webp"
    },        
    {
        "title": "Martian Chronicles",
        "author": "Ray Bradbury",
        "price": 17,
        "description": "A collection of interconnected tales that narrate the colonization and exploration of Mars by humans.",
        "pages": 288,
        "publicationDate": "1950-05-05",
        "image": "https://contentv2.tap-commerce.com/cover/large/9788445008256_1.jpg?id_com=1113"
    },            
    {
        "title": "Dracula",
        "author": "Bram Stoker",
        "price": 23,
        "description": "The novel follows the story of Count Dracula as he attempts to move from Transylvania to England to spread the undead curse.",
        "pages": 418,
        "publicationDate": "1897-05-26",
        "image": "https://http2.mlstatic.com/D_NQ_NP_858532-MLA41987466919_052020-V.webp"
    },            
    {
        "title": "Sapiens: A Brief History of Humankind",
        "author": "Yuval Noah Harari",
        "price": 27,
        "description": "A book that explores the history of humanity, from early humans to the modern era.",
        "pages": 464,
        "publicationDate": "2011-04-04",
        "image": "https://contentv2.tap-commerce.com/cover/large/9789873752131_1.jpg?id_com=1113"
    },            
    {
        "title": "Homo Deus: A Brief History of Tomorrow",
        "author": "Yuval Noah Harari",
        "price": 23,
        "description": "War is becoming obsolete. It is more likely to commit suicide than to die in a war. Famine is disappearing. Obesity is more common than starvation. Death is just a technical problem. Goodbye equality. Hello immortality. What does the future hold for us? Yuval Noah Harari, bestselling author of Sapiens, foresees a not-so-distant world in which we will face a new series of challenges. Homo Deus explores the projects, dreams, and nightmares that will shape the 21st century - from overcoming death to the creation of artificial intelligence.",
        "pages": 496,
        "publicationDate": "2015-04-04",
        "image": "https://contentv2.tap-commerce.com/cover/large/9789873752629_1.jpg?id_com=1113"
    },            
    {
        "title": "Sapiens: A Graphic History",
        "author": "Yuval Noah Harari",
        "price": 15,
        "description": "A bold and original adaptation of Yuval Noah Harari's bestseller into a series of graphic novels, full of wit, humor, nods to pop culture, and colorful illustrations. Harari (as co-writer) has worked with prestigious comic authors David Vandermeulen (co-writer) and Daniel Casanave (illustrator) to retell the history of humanity in a way that captivates all readers, both adults and young, even those who don't typically read history or science books.",
        "pages": 256,
        "publicationDate": "2020-07-10",
        "image": "https://m.media-amazon.com/images/I/81nQ+oGgI3L.jpg"
    },            
    {
        "title": "Behind the Net",
        "author": "Stephanie Archer",
        "price": 5,
        "description": "Behind the Net is a grumpy-sunshine pro hockey romance with lots of spice and an HEA. It’s the first book in the Vancouver Storm series, and can be read as a standalone.",
        "pages": 424,
        "publicationDate": "2023-06-30",
        "image": "https://m.media-amazon.com/images/I/51SqcpP2tML.jpg"
    },
    {
        "title": "Joey",
        "author": "Sadie Kincaid",
        "price": 7,
        "description": "Notorious Mafia enforcer and right hand of the Cosa Nostra, Maximo DiMarco has always looked out for me. He’s my protector. My brothers’ best friend. My crush—with the body of a god and the mind of a devil. And I am just a spoiled Mafia princess. At least that’s who most people think I am. They don’t look at me long enough to see the real me. But he sees… He is dark and dangerous and lethal, but he’s the only man who makes me feel like I’m alive. It’s a pity he’s too loyal to my brothers to ever act on the sparks that constantly fly between us…",
        "pages": 408,
        "publicationDate": "2023-06-30",
        "image": "https://m.media-amazon.com/images/I/41uGfACAeaL.jpg"
    },
    {
        "title": "After Death",
        "author": "Dean Koontz",
        "price": 18,
        "description": "A modern-day Lazarus is humanity’s last hope in a breathtaking novel about the absolute powers of good and evil by Dean Koontz, the #1 New York Times bestselling master of suspense.",
        "pages": 382,
        "publicationDate": "2023-07-18",
        "image": "https://m.media-amazon.com/images/I/51BiVJXWFuL.jpg"
    },
    {
        "title": "Meet Your Match",
        "author": "Kandi Steiner",
        "price": 6,
        "description": "Meet Your Match is book one in the Kings of the Ice series: a series of interconnected standalones following a team of professional hockey players and the women who bring them to their knees. They do not need to be read in order, but you will gain glimpses of future characters/couples in each book.",
        "pages": 347,
        "publicationDate": "2023-07-07",
        "image": "https://m.media-amazon.com/images/I/51Dmd-BFFML.jpg"
    },
    {
        "title": "Plays Well With Others",
        "author": "Lauren blakely",
        "price": 5,
        "description": "So I'm throwing myself a breakup party, a glittery fete where I envision I'll lift a glass and celebrate being free and single again. What I actually do: Drink too much champagne and blurt out to my best guy friend that I'd really like to get back on the horse.",
        "pages": 424,
        "publicationDate": "2023-07-12",
        "image": "https://m.media-amazon.com/images/I/519Q+F+a5ML.jpg"
    },
    {
        "title": "Never Give Your Heart To A Hookup",
        "author": "Lauren Landish",
        "price": 4,
        "description": "Never Give Your Heart To A Hookup is a full-length romance with a Happily Ever After. It can be read as a standalone.",
        "pages": 347,
        "publicationDate": "2023-07-11",
        "image": "https://m.media-amazon.com/images/I/51d09ogVY2L.jpg"
    },
    {
        "title": "Shutout: Rules of the Game Book 2",
        "author": "Avery Keelan",
        "price": 12,
        "description": "After my life goes sideways in the middle of sophomore year, I'm forced to move in with my older brother and two of his hockey teammates. I'm less than thrilled at the idea of living with three athletes and their stinky gear, their rotating door of hookups, and their tendency to inhale every snack in the house. But when I walk in the front door with an armload of boxes, I'm faced with another problem entirely. One of my new roommates is the tall, tattooed stranger from my one-night stand on Halloween.",
        "pages": 344,
        "publicationDate": "2023-06-30",
        "image": "https://m.media-amazon.com/images/P/199088606X.01._SCLZZZZZZZ_SX500_.jpg"
    },
    {
        "title": "The Broken Protector",
        "author": "Nicole Snow",
        "price": 4,
        "description": "This big slice of feel-good small-town romance brings enemies to lovers fire, hilarious sweetness, heart-thumping suspense, and all the butterflies. Smile yourself silly as one big bossy lunk tries to keep his heart and his secrets from the headstrong new girl destined to make him whole.",
        "pages": 471,
        "publicationDate": "2023-06-20",
        "image": "https://m.media-amazon.com/images/I/51GUarg3UBL.jpg"
    },
    {
        "title": "The Anti-hero",
        "author": "Sara Cate",
        "price": 14,
        "description": "As the eldest son of Austin’s most prominent preacher, I’ve lived my life on the virtuous side. No scandals. Flawless image. Clean reputation. That’s the way it must be if I’m going to take his place someday. But everything changes when I find out my father is a VIP member of a local kink club. A liar. A cheater. A hypocrite. Now, I’m done being righteous.",
        "pages": 366,
        "publicationDate": "2023-07-14",
        "image": "https://m.media-amazon.com/images/I/41sLZOpQcRL.jpg"
    },
    {
        "title": "Deception Point",
        "author": "Dan Brown",
        "price": 18,
        "description": "In his most thrilling novel to date, bestselling author Dan Brown transports readers from the ultrasecret National Reconnaissance Office to the towering ice shelves of the Arctic Circle, and back again to the hallways of power inside the West Wing. Heralded for masterfully intermingling science, history, and politics in his critically acclaimed thriller Angels & Demons, Brown has crafted another novel in which nothing is as it seems—and behind every corner is a stunning surprise. Deception Point is pulse-pounding fiction at its best.",
        "pages": 560,
        "publicationDate": "2004-07-28",
        "image": "https://m.media-amazon.com/images/P/1416524800.01._SCLZZZZZZZ_SX500_.jpg"
    },
    {
        "title": "Angels and Demons",
        "author": "Dan Brown",
        "price": 19,
        "description": "In his most thrilling novel to date, bestselling author Dan Brown transports readers from the ultrasecret National Reconnaissance Office to the towering ice shelves of the Arctic Circle, and back again to the hallways of power inside the West Wing. Heralded for masterfully intermingling science, history, and politics in his critically acclaimed thriller Angels & Demons, Brown has crafted another novel in which nothing is as it seems—and behind every corner is a stunning surprise. Deception Point is pulse-pounding fiction at its best.",
        "pages": 736,
        "publicationDate": "2006-04-01",
        "image": "https://m.media-amazon.com/images/I/51pms8KvVuL._SX272_BO1,204,203,200_.jpg"
    },
    {
        "title": "The Da Vinci Code",
        "author": "Dan Brown",
        "price": 16,
        "description": "While in Paris on business, Harvard symbologist Robert Langdon receives an urgent late-night phone call: the elderly curator of the Louvre has been murdered inside the museum. Near the body, police have found a baffling cipher. While working to solve the enigmatic riddle, Langdon is stunned to discover it leads to a trail of clues hidden in the works of Da Vinci -- clues visible for all to see -- yet ingeniously disguised by the painter. Langdon joins forces with a gifted French cryptologist, Sophie Neveu, and learns the late curator was involved in the Priory of Sion -- an actual secret society whose members included Sir Isaac Newton, Botticelli, Victor Hugo, and Da Vinci, among others. In a breathless race through Paris, London, and beyond, Langdon and Neveu match wits with a faceless powerbroker who seems to anticipate their every move. Unless Langdon and Neveu can deipher the labyrinthine puzzle in time, the Priory's ancient secret -- and an explosive historical truth -- will be lost forever.",
        "pages": 597,
        "publicationDate": "2009-03-31",
        "image": "https://m.media-amazon.com/images/P/0307474275.01._SCLZZZZZZZ_SX500_.jpg"
    },
    {
        "title": "The Lost Symbol",
        "author": "Dan Brown",
        "price": 10,
        "description": "Famed Harvard symbologist Robert Langdon answers an unexpected summons to appear at the U.S. Capitol Building. His plans are interrupted when a disturbing object—artfully encoded with five symbols—is discovered in the building. Langdon recognizes in the find an ancient invitation into a lost world of esoteric, potentially dangerous wisdom. When his mentor Peter Solomon—a long-standing Mason and beloved philanthropist—is kidnapped, Langdon realizes that the only way to save Solomon is to accept the mystical invitation and plunge headlong into a clandestine world of Masonic secrets, hidden history, and one inconceivable truth ... all under the watchful eye of Dan Brown's most terrifying villain to date.",
        "pages": 510,
        "publicationDate": "2009-09-15",
        "image": "https://prodimage.images-bn.com/pimages/9781400079148_p0_v2_s600x595.jpg"
    },
    {
        "title": "Inferno",
        "author": "Dan Brown",
        "price": 16,
        "description": "With a relentless female assassin trailing them through Florence, he and his resourceful doctor, Sienna Brooks, are forced to flee. Embarking on a harrowing journey, they must unravel a series of codes, which are the work of a brilliant scientist whose obsession with the end of the world is matched only by his passion for one of the most influential masterpieces ever written, Dante Alighieri's The Inferno. Dan Brown has raised the bar yet again, combining classical Italian art, history, and literature with cutting-edge science in this captivating thriller.",
        "pages": 624,
        "publicationDate": "2014-05-06",
        "image": "https://m.media-amazon.com/images/I/41BF5MBg-rL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
        "title": "Democracy Awakening: Notes on the State of America",
        "author": "Heather Cox Richardson",
        "price": 27,
        "description": "“A vibrant, and essential history of America's unending, enraging and utterly compelling struggle since its founding to live up to its own best ideals… It's both a cause for hope, and a call to arms.”—Jane Mayer, author Dark Money .- From historian and author of the popular daily newsletter LETTERS FROM AN AMERICAN, a vital narrative that explains how America, once a beacon of democracy, now teeters on the brink of autocracy — and how we can turn back.",
        "pages": 304,
        "publicationDate": "2022-09-26",
        "image": "https://m.media-amazon.com/images/I/41mekC7h4CL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
        "title": "Iron Flame",
        "author": "Rebecca Yarros",
        "price": 26,
        "description": "Everyone expected Violet Sorrengail to die during her first year at Basgiath War College—Violet included. But Threshing was only the first impossible test meant to weed out the weak-willed, the unworthy, and the unlucky. Now the real training begins, and Violet’s already wondering how she’ll get through. It’s not just that it’s grueling and maliciously brutal, or even that it’s designed to stretch the riders’ capacity for pain beyond endurance. It’s the new vice commandant, who’s made it his personal mission to teach Violet exactly how powerless she is–unless she betrays the man she loves. Although Violet’s body might be weaker and frailer than everyone else’s, she still has her wits—and a will of iron. And leadership is forgetting the most important lesson Basgiath has taught her: Dragon riders make their own rules. But a determination to survive won’t be enough this year. Because Violet knows the real secret hidden for centuries at Basgiath War College—and nothing, not even dragon fire, may be enough to save them in the end.",
        "pages": 640,
        "publicationDate": "2023-07-11",
        "image": "https://m.media-amazon.com/images/I/61CrGbiVSnL._SY346_.jpg"
    },
    {
        "title": "Fourth Wing",
        "author": "Rebecca Yarros",
        "price": 27,
        "description": "Twenty-year-old Violet Sorrengail was supposed to enter the Scribe Quadrant, living a quiet life among books and history. Now, the commanding general—also known as her tough-as-talons mother—has ordered Violet to join the hundreds of candidates striving to become the elite of Navarre: dragon riders. But when you’re smaller than everyone else and your body is brittle, death is only a heartbeat away...because dragons don’t bond to “fragile” humans. They incinerate them. With fewer dragons willing to bond than cadets, most would kill Violet to better their own chances of success. The rest would kill her just for being her mother’s daughter—like Xaden Riorson, the most powerful and ruthless wingleader in the Riders Quadrant. She’ll need every edge her wits can give her just to see the next sunrise. Yet, with every day that passes, the war outside grows more deadly, the kingdom's protective wards are failing, and the death toll continues to rise. Even worse, Violet begins to suspect leadership is hiding a terrible secret. Friends, enemies, lovers. Everyone at Basgiath War College has an agenda—because once you enter, there are only two ways out: graduate or die.",
        "pages": 528,
        "publicationDate": "2023-05-02",
        "image": "https://m.media-amazon.com/images/I/51j8bRH5sDL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
        "title": "Tom Lake",
        "author": "Ann Patchett",
        "price": 24,
        "description": "In the spring of 2020, Lara’s three daughters return to the family's orchard in Northern Michigan. While picking cherries, they beg their mother to tell them the story of Peter Duke, a famous actor with whom she shared both a stage and a romance years before at a theater company called Tom Lake. As Lara recalls the past, her daughters examine their own lives and relationship with their mother, and are forced to reconsider the world and everything they thought they knew. Tom Lake is a meditation on youthful love, married love, and the lives parents have led before their children were born. Both hopeful and elegiac, it explores what it means to be happy even when the world is falling apart. As in all of her novels, Ann Patchett combines compelling narrative artistry with piercing insights into family dynamics. The result is a rich and luminous story, told with profound intelligence and emotional subtlety, that demonstrates once again why she is one of the most revered and acclaimed literary talents working today.",
        "pages": 320,
        "publicationDate": "2023-08-01",
        "image": "https://m.media-amazon.com/images/I/51Xz8sY0xlL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
        "title": "A Little Life",
        "author": "Hanya Yanagihara",
        "price": 15,
        "description": "A Little Life follows four college classmates—broke, adrift, and buoyed only by their friendship and ambition—as they move to New York in search of fame and fortune. While their relationships, which are tinged by addiction, success, and pride, deepen over the decades, the men are held together by their devotion to the brilliant, enigmatic Jude, a man scarred by an unspeakable childhood trauma. A hymn to brotherly bonds and a masterful depiction of love in the twenty-first century, Hanya Yanagihara’s stunning novel is about the families we are born into, and those that we make for ourselves.",
        "pages": 320,
        "publicationDate": "2016-01-26",
        "image": "https://images.cdn3.buscalibre.com/fit-in/360x360/a7/c6/a7c6226d90e3c30e967fb3f7276470d2.jpg"
    },
    {
        "title": "American Prometheus",
        "author": "Kai Bird, Martin J. Sherwin",
        "price": 22,
        "description": "In this magisterial, acclaimed biography twenty-five years in the making, Kai Bird and Martin Sherwin capture Oppenheimer’s life and times, from his early career to his central role in the Cold War. This is biography and history at its finest, riveting and deeply informative.",
        "pages": 784,
        "publicationDate": "2006-11-04",
        "image": "https://m.media-amazon.com/images/I/81yfsIOijJL.jpg"
    },
    {
        "title": "Holly",
        "author": "Stephen King",
        "price": 21,
        "description": "Stephen King’s Holly marks the triumphant return of beloved King character Holly Gibney. Readers have witnessed Holly’s gradual transformation from a shy (but also brave and ethical) recluse in Mr. Mercedes to Bill Hodges’s partner in Finders Keepers to a full-fledged, smart, and occasionally tough private detective in The Outsider. In King’s new novel, Holly is on her own, and up against a pair of unimaginably depraved and brilliantly disguised adversaries.",
        "pages": 464,
        "publicationDate": "2023-05-09",
        "image": "https://m.media-amazon.com/images/I/417kSOgt4aL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
        "title": "Mr. Mercedes",
        "author": "Stephen King",
        "price": 10,
        "description": "The stolen Mercedes emerges from the pre-dawn fog and plows through a crowd of men and women on line for a job fair in a distressed American city. Then the lone driver backs up, charges again, and speeds off, leaving eight dead and more wounded. The case goes unsolved and ex-cop Bill Hodges is out of hope when he gets a letter from a man who loved the feel of death under the Mercedes’s wheels…",
        "pages": 464,
        "publicationDate": "2014-03-06",
        "image": "https://images.cdn2.buscalibre.com/fit-in/360x360/56/b9/56b9895afbca35fc7e2c8a8c725e410b.jpg"
    },
    {
        "title": "Fairy Tale",
        "author": "Stephen King",
        "price": 23,
        "description": "Charlie Reade looks like a regular high school kid, great at baseball and football, a decent student. But he carries a heavy load. His mom was killed in a hit-and-run accident when he was seven, and grief drove his dad to drink. Charlie learned how to take care of himself—and his dad. When Charlie is seventeen, he meets a dog named Radar and her aging master, Howard Bowditch, a recluse in a big house at the top of a big hill, with a locked shed in the backyard. Sometimes strange sounds emerge from it. Charlie starts doing jobs for Mr. Bowditch and loses his heart to Radar. Then, when Bowditch dies, he leaves Charlie a cassette tape telling a story no one would believe. What Bowditch knows, and has kept secret all his long life, is that inside the shed is a portal to another world.",
        "pages": 608,
        "publicationDate": "2022-06-09",
        "image": "https://m.media-amazon.com/images/I/51ECRZXoGyL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
        "title": "The Outsider",
        "author": "Stephen King",
        "price": 14,
        "description": "An eleven-year-old boy’s violated corpse is discovered in a town park. Eyewitnesses and fingerprints point unmistakably to one of Flint City’s most popular citizens—Terry Maitland, Little League coach, English teacher, husband, and father of two girls. Detective Ralph Anderson, whose son Maitland once coached, orders a quick and very public arrest. Maitland has an alibi, but Anderson and the district attorney soon have DNA evidence to go with the fingerprints and witnesses. Their case seems ironclad. As the investigation expands and horrifying details begin to emerge, King’s story kicks into high gear, generating strong tension and almost unbearable suspense. Terry Maitland seems like a nice guy, but is he wearing another face? When the answer comes, it will shock you as only Stephen King can.",
        "pages": 608,
        "publicationDate": "2018-05-22",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_930783-MLA31020810409_062019-F.webp"
    },
    {
        "title": "The Wind through the Keyhole",
        "author": "Stephen King",
        "price": 18,
        "description": "The Wind Through the Keyhole is a sparkling contribution to the series that can be placed between Dark Tower IV and Dark Tower V. This Russian doll of a novel, a story within a story within a story, visits Roland and his ka-tet as a ferocious, frigid storm halts their progress along the Path of the Beam. Roland tells a tale from his early days as a gunslinger, in the guilt-ridden year following his mother’s death. Sent by his father to investigate evidence of a murderous shape-shifter, Roland takes charge of Bill Streeter, a brave but terrified boy who is the sole surviving witness to the beast’s most recent slaughter. Roland, himself only a teenager, calms the boy by reciting a story from the Book of Eld that his mother used to read to him at bedtime, “The Wind through the Keyhole.” “A person’s never too old for stories,” he says to Bill. “Man and boy, girl and woman, we live for them.”",
        "pages": 320,
        "publicationDate": "2016-06-12",
        "image": "https://m.media-amazon.com/images/I/515qDQUttfL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
        "title": "The Gunslinger",
        "author": "Stephen King",
        "price": 18,
        "description": "A #1 national bestseller, The Gunslinger introduces readers to one of Stephen King’s most powerful creations, Roland of Gilead: The Last Gunslinger. He is a haunting figure, a loner on a spellbinding journey into good and evil. In his desolate world, which mirrors our own in frightening ways, Roland tracks The Man in Black, encounters an enticing woman named Alice, and begins a friendship with the boy from New York named Jake. Inspired in part by the Robert Browning narrative poem, “Childe Roland to the Dark Tower Came,” The Gunslinger is “a compelling whirlpool of a story that draws one irretrievable to its center” (Milwaukee Sentinel). It is “brilliant and fresh…and will leave you panting for more” (Booklist).",
        "pages": 320,
        "publicationDate": "2016-03-05",
        "image": "https://m.media-amazon.com/images/I/81C-id1AKuL.jpg"
    },
    {
        "title": "Judgment Prey",
        "author": "John Sandford",
        "price": 30,
        "description": "Alex Sand was spending the evening at home playing basketball with his two young sons when all three were shot in cold blood. A wealthy federal judge, there’s no short list of people who could have a vendetta against Sands, but the gruesome murders, especially that of his children, turn their St. Paul community on its head. Sand was on the verge of a major donation to a local housing charity, Heart/Twin Cities, and with the money in limbo, eyes suddenly turn to his grieving widow, Margaret Cooper, to see what she might do with the money. Margaret, distraught over the death of her family, struggles to move forward, and can’t imagine how or why anyone would target her husband. With public pressure mounting and both the local police force and FBI hitting dead end after dead end, Lucas Davenport and Virgil Flowers are called in to do what others could not: find answers. With each potential lead flawed, Davenport and Flowers are determined to chase every theory until they figure out who killed the Sands. But when they find themselves being stonewalled by the most unlikely of forces, the two wonder if perhaps each misdirection could lead them closer to the truth.",
        "pages": 320,
        "publicationDate": "2023-03-10",
        "image": "https://m.media-amazon.com/images/I/51t0fiD65YL._SY346_.jpg"
    },
];

const genreTest = [
    {
        "name": "Fiction"
    },
    {
        "name": "Novel"
    },
    {
        "name": "Science Fiction"
    },
    {
        "name": "Fantasy"
    },
    {
        "name": "Mystery"
    },
    {
        "name": "Romance"
    },
    {
        "name": "Adventure"
    },
    {
        "name": "History"
    },
    {
        "name": "Poetry"
    },
];

const publisherTest = [
    {
        "name": "Alfaguara Publishing"
    },
    {
        "name": "Anagrama Publishing"
    },
    {
        "name": "Planeta Publishing"
    },
    {
        "name": "Penguin Random House Publishing"
    },
    {
        "name": "Gallimard Publishing"
    },
    {
        "name": "Macmillan Publishing"
    },
    {
        "name": "Pantheon Books Publishing"
    }
];

const languageTest = [
    {
        "name": "Spanish"
    },
    {
        "name": "English"
    },
    {
        "name": "French"
    },
    {
        "name": "German"
    },
    {
        "name": "Italian"
    },
];

const formatTest = [
    {
        "name": "EPUB"
    },
    {
        "name": "PDF"
    },
    {
        "name": "MOBI"
    },
    {
        "name": "AZW3"
    },
    {
        "name": "CBZ"
    }
];

const countryTest = [
    {
      "name": "Afghanistan",
      "es_name": "Afganistán"
    },
    {
      "name": "Albania",
      "es_name": "Albania"
    },
    {
      "name": "Algeria",
      "es_name": "Algeria"
    },
    {
      "name": "American Samoa",
      "es_name": "Samoa Americana"
    },
    {
      "name": "Andorra",
      "es_name": "Andorra"
    },
    {
      "name": "Angola",
      "es_name": "Angola"
    },
    {
      "name": "Anguilla",
      "es_name": "Anguilla"
    },
    {
      "name": "Antarctica",
      "es_name": "Antártida"
    },
    {
      "name": "Antigua and Barbuda",
      "es_name": "Antigua y Barbuda"
    },
    {
      "name": "Argentina",
      "es_name": "Argentina"
    },
    {
      "name": "Armenia",
      "es_name": "Armenia"
    },
    {
      "name": "Aruba",
      "es_name": "Aruba"
    },
    {
      "name": "Australia",
      "es_name": "Australia"
    },
    {
      "name": "Austria",
      "es_name": "Austria"
    },
    {
      "name": "Azerbaijan",
      "es_name": "Azerbaiyán"
    },
    {
      "name": "Bahamas",
      "es_name": "Bahamas"
    },
    {
      "name": "Bahrain",
      "es_name": "Bahrein"
    },
    {
      "name": "Bangladesh",
      "es_name": "Bangladesh"
    },
    {
      "name": "Barbados",
      "es_name": "Barbados"
    },
    {
      "name": "Belarus",
      "es_name": "Bielorrusia"
    },
    {
      "name": "Belgium",
      "es_name": "Bélgica"
    },
    {
      "name": "Belize",
      "es_name": "Belice"
    },
    {
      "name": "Benin",
      "es_name": "Benín"
    },
    {
      "name": "Bermuda",
      "es_name": "Bermuda"
    },
    {
      "name": "Bhutan",
      "es_name": "Bután"
    },
    {
      "name": "Bolivia",
      "es_name": "Bolivia"
    },
    {
      "name": "Bosnia and Herzegovina",
      "es_name": "Bosnia-Herzegovina"
    },
    {
      "name": "Botswana",
      "es_name": "Botswana"
    },
    {
      "name": "Brazil",
      "es_name": "Brasil"
    },
    {
      "name": "Brunei Darussalam",
      "es_name": "Brunei"
    },
    {
      "name": "Bulgaria",
      "es_name": "Bulgaria"
    },
    {
      "name": "Burkina Faso",
      "es_name": "Burkina Faso"
    },
    {
      "name": "Burundi",
      "es_name": "Burundi"
    },
    {
      "name": "Cambodia",
      "es_name": "Camboya"
    },
    {
      "name": "Cameroon",
      "es_name": "Camerún"
    },
    {
      "name": "Canada",
      "es_name": "Canadá"
    },
    {
      "name": "Cape Verde",
      "es_name": "Cabo Verde"
    },
    {
      "name": "Cayman Islands",
      "es_name": "Islas Caimán"
    },
    {
      "name": "Central African Republic",
      "es_name": "República Centroafricana"
    },
    {
      "name": "Chad",
      "es_name": "Chad"
    },
    {
      "name": "Chile",
      "es_name": "Chile"
    },
    {
      "name": "China",
      "es_name": "China"
    },
    {
      "name": "Christmas Island",
      "es_name": "Isla de Navidad"
    },
    {
      "name": "Cocos (Keeling) Islands",
      "es_name": "Islas Cocos"
    },
    {
      "name": "Colombia",
      "es_name": "Colombia"
    },
    {
      "name": "Comoros",
      "es_name": "Comores"
    },
    {
      "name": "Congo",
      "es_name": "República del Congo"
    },
    {
      "name": "Congo, The Democratic Republic of the",
      "es_name": "República Democrática del Congo"
    },
    {
      "name": "Cook Islands",
      "es_name": "Islas Cook"
    },
    {
      "name": "Costa Rica",
      "es_name": "Costa Rica"
    },
    {
      "name": "Cote D'Ivoire",
      "es_name": "Costa de Marfíl"
    },
    {
      "name": "Croatia",
      "es_name": "Croacia"
    },
    {
      "name": "Cuba",
      "es_name": "Cuba"
    },
    {
      "name": "Cyprus",
      "es_name": "Chipre"
    },
    {
      "name": "Czech Republic",
      "es_name": "República Checa"
    },
    {
      "name": "Denmark",
      "es_name": "Dinamarca"
    },
    {
      "name": "Djibouti",
      "es_name": "Djibouti"
    },
    {
      "name": "Dominica",
      "es_name": "Dominica"
    },
    {
      "name": "Dominican Republic",
      "es_name": "República Dominicana"
    },
    {
      "name": "Ecuador",
      "es_name": "Ecuador"
    },
    {
      "name": "Egypt",
      "es_name": "Egipto"
    },
    {
      "name": "El Salvador",
      "es_name": "El Salvador"
    },
    {
      "name": "Equatorial Guinea",
      "es_name": "Guinea Ecuatorial"
    },
    {
      "name": "Eritrea",
      "es_name": "Eritrea"
    },
    {
      "name": "Estonia",
      "es_name": "Estonia"
    },
    {
      "name": "Ethiopia",
      "es_name": "Etiopía"
    },
    {
      "name": "Falkland Islands (Malvinas)",
      "es_name": "Islas Malvinas"
    },
    {
      "name": "Faroe Islands",
      "es_name": "Islas Feroe"
    },
    {
      "name": "Fiji",
      "es_name": "Fiji"
    },
    {
      "name": "Finland",
      "es_name": "Finlandia"
    },
    {
      "name": "France",
      "es_name": "Francia"
    },
    {
      "name": "French Guiana",
      "es_name": "Guyana Francesa"
    },
    {
      "name": "French Polynesia",
      "es_name": "Polinesia Francesa"
    },
    {
      "name": "French Southern Territories",
      "es_name": "Tierras Australes y Antárticas Francesas"
    },
    {
      "name": "Gabon",
      "es_name": "Gabón"
    },
    {
      "name": "Gambia",
      "es_name": "Gambia"
    },
    {
      "name": "Georgia",
      "es_name": "Georgia"
    },
    {
      "name": "Germany",
      "es_name": "Alemania"
    },
    {
      "name": "Ghana",
      "es_name": "Ghana"
    },
    {
      "name": "Gibraltar",
      "es_name": "Gibraltar"
    },
    {
      "name": "Greece",
      "es_name": "Grecia"
    },
    {
      "name": "Greenland",
      "es_name": "Groenlandia"
    },
    {
      "name": "Grenada",
      "es_name": "Granada"
    },
    {
      "name": "Guadeloupe",
      "es_name": "Guadalupe"
    },
    {
      "name": "Guam",
      "es_name": "Guam"
    },
    {
      "name": "Guatemala",
      "es_name": "Guatemala"
    },
    {
      "name": "Guinea",
      "es_name": "Guinea"
    },
    {
      "name": "Guinea-Bissau",
      "es_name": "Guinea-Bissau"
    },
    {
      "name": "Guyana",
      "es_name": "Guyana"
    },
    {
      "name": "Haiti",
      "es_name": "Haití"
    },
    {
      "name": "Holy See (Vatican City State)",
      "es_name": "Vaticano"
    },
    {
      "name": "Honduras",
      "es_name": "Honduras"
    },
    {
      "name": "Hong Kong",
      "es_name": "Hong Kong"
    },
    {
      "name": "Hungary",
      "es_name": "Hungría"
    },
    {
      "name": "Iceland",
      "es_name": "Islandia"
    },
    {
      "name": "India",
      "es_name": "India"
    },
    {
      "name": "Indonesia",
      "es_name": "Indonesia"
    },
    {
      "name": "Iran, Islamic Republic Of",
      "es_name": "Irán"
    },
    {
      "name": "Iraq",
      "es_name": "Iraq"
    },
    {
      "name": "Ireland",
      "es_name": "Irlanda"
    },
    {
      "name": "Israel",
      "es_name": "Israel"
    },
    {
      "name": "Italy",
      "es_name": "Italia"
    },
    {
      "name": "Jamaica",
      "es_name": "Jamaica"
    },
    {
      "name": "Japan",
      "es_name": "Japón"
    },
    {
      "name": "Jordan",
      "es_name": "Jordania"
    },
    {
      "name": "Kazakhstan",
      "es_name": "Kazajstán"
    },
    {
      "name": "Kenya",
      "es_name": "Kenia"
    },
    {
      "name": "Kiribati",
      "es_name": "Kiribati"
    },
    {
      "name": "Korea, Democratic People'S Republic of",
      "es_name": "Corea del Norte"
    },
    {
      "name": "Korea, Republic of",
      "es_name": "Corea del Sur"
    },
    {
      "name": "Kuwait",
      "es_name": "Kuwait"
    },
    {
      "name": "Kyrgyzstan",
      "es_name": "Kirguistán"
    },
    {
      "name": "Lao People's Democratic Republic",
      "es_name": "Laos"
    },
    {
      "name": "Latvia",
      "es_name": "Letonia"
    },
    {
      "name": "Lebanon",
      "es_name": "Líbano"
    },
    {
      "name": "Lesotho",
      "es_name": "Lesotho"
    },
    {
      "name": "Liberia",
      "es_name": "Liberia"
    },
    {
      "name": "Libyan Arab Jamahiriya",
      "es_name": "Libia"
    },
    {
      "name": "Liechtenstein",
      "es_name": "Liechtenstein"
    },
    {
      "name": "Lithuania",
      "es_name": "Lituania"
    },
    {
      "name": "Luxembourg",
      "es_name": "Luxemburgo"
    },
    {
      "name": "Macao",
      "es_name": "Macao"
    },
    {
      "name": "Macedonia, The Former Yugoslav Republic of",
      "es_name": "Macedonia"
    },
    {
      "name": "Madagascar",
      "es_name": "Madagascar"
    },
    {
      "name": "Malawi",
      "es_name": "Malawi"
    },
    {
      "name": "Malaysia",
      "es_name": "Malasia"
    },
    {
      "name": "Maldives",
      "es_name": "Maldivas"
    },
    {
      "name": "Mali",
      "es_name": "Mali"
    },
    {
      "name": "Malta",
      "es_name": "Malta"
    },
    {
      "name": "Marshall Islands",
      "es_name": "Islas Marshall"
    },
    {
      "name": "Martinique",
      "es_name": "Martinica"
    },
    {
      "name": "Mauritania",
      "es_name": "Mauritania"
    },
    {
      "name": "Mauritius",
      "es_name": "Mauricio"
    },
    {
      "name": "Mayotte",
      "es_name": "Mayotte"
    },
    {
      "name": "Mexico",
      "es_name": "México"
    },
    {
      "name": "Micronesia, Federated States of",
      "es_name": "Estados Federados de Micronesia"
    },
    {
      "name": "Moldova, Republic of",
      "es_name": "Moldavia"
    },
    {
      "name": "Monaco",
      "es_name": "Mónaco"
    },
    {
      "name": "Mongolia",
      "es_name": "Mongolia"
    },
    {
      "name": "Montserrat",
      "es_name": "Montserrat"
    },
    {
      "name": "Morocco",
      "es_name": "Marruecos"
    },
    {
      "name": "Mozambique",
      "es_name": "Mozambique"
    },
    {
      "name": "Myanmar",
      "es_name": "Myanmar"
    },
    {
      "name": "Namibia",
      "es_name": "Namibia"
    },
    {
      "name": "Nauru",
      "es_name": "Nauru"
    },
    {
      "name": "Nepal",
      "es_name": "Nepal"
    },
    {
      "name": "Netherlands",
      "es_name": "Holanda"
    },
    {
      "name": "Netherlands Antilles",
      "es_name": "Antillas Holandesas"
    },
    {
      "name": "New Caledonia",
      "es_name": "Nueva Caledonia"
    },
    {
      "name": "New Zealand",
      "es_name": "Nueva Zelanda"
    },
    {
      "name": "Nicaragua",
      "es_name": "Nicaragua"
    },
    {
      "name": "Niger",
      "es_name": "Niger"
    },
    {
      "name": "Nigeria",
      "es_name": "Nigeria"
    },
    {
      "name": "Niue",
      "es_name": "Niue"
    },
    {
      "name": "Norfolk Island",
      "es_name": "Islas Norfolk"
    },
    {
      "name": "Northern Mariana Islands",
      "es_name": "Islas Marianas del Norte"
    },
    {
      "name": "Norway",
      "es_name": "Noruega"
    },
    {
      "name": "Oman",
      "es_name": "Omán"
    },
    {
      "name": "Pakistan",
      "es_name": "Pakistán"
    },
    {
      "name": "Palau",
      "es_name": "Palau"
    },
    {
      "name": "Palestinian Territory, Occupied",
      "es_name": "Palestina"
    },
    {
      "name": "Panama",
      "es_name": "Panamá"
    },
    {
      "name": "Papua New Guinea",
      "es_name": "Papua Nueva Guinea"
    },
    {
      "name": "Paraguay",
      "es_name": "Paraguay"
    },
    {
      "name": "Peru",
      "es_name": "Perú"
    },
    {
      "name": "Philippines",
      "es_name": "Filipinas"
    },
    {
      "name": "Pitcairn",
      "es_name": "Pitcairn"
    },
    {
      "name": "Poland",
      "es_name": "Polonia"
    },
    {
      "name": "Portugal",
      "es_name": "Portugal"
    },
    {
      "name": "Puerto Rico",
      "es_name": "Puerto Rico"
    },
    {
      "name": "Qatar",
      "es_name": "Qatar"
    },
    {
      "name": "Reunion",
      "es_name": "Reunión"
    },
    {
      "name": "Romania",
      "es_name": "Rumanía"
    },
    {
      "name": "Russian Federation",
      "es_name": "Rusia"
    },
    {
      "name": "Rwanda",
      "es_name": "Ruanda"
    },
    {
      "name": "Saint Helena",
      "es_name": "Santa Helena"
    },
    {
      "name": "Saint Kitts and Nevis",
      "es_name": "San Kitts y Nevis"
    },
    {
      "name": "Saint Lucia",
      "es_name": "Santa Lucía"
    },
    {
      "name": "Saint Vincent and the Grenadines",
      "es_name": "San Vicente y Granadinas"
    },
    {
      "name": "Samoa",
      "es_name": "Samoa"
    },
    {
      "name": "San Marino",
      "es_name": "San Marino"
    },
    {
      "name": "Sao Tome and Principe",
      "es_name": "Santo Tomé y Príncipe"
    },
    {
      "name": "Saudi Arabia",
      "es_name": "Arabia Saudita"
    },
    {
      "name": "Senegal",
      "es_name": "Senegal"
    },
    {
      "name": "Serbia and Montenegro",
      "es_name": "Serbia"
    },
    {
      "name": "Seychelles",
      "es_name": "Seychelles"
    },
    {
      "name": "Sierra Leone",
      "es_name": "Sierra Leona"
    },
    {
      "name": "Singapore",
      "es_name": "Singapur"
    },
    {
      "name": "Slovakia",
      "es_name": "Eslovaquía"
    },
    {
      "name": "Slovenia",
      "es_name": "Eslovenia"
    },
    {
      "name": "Solomon Islands",
      "es_name": "Islas Salomón"
    },
    {
      "name": "Somalia",
      "es_name": "Somalia"
    },
    {
      "name": "South Africa",
      "es_name": "Sudáfrica"
    },
    {
      "name": "Spain",
      "es_name": "España"
    },
    {
      "name": "Sri Lanka",
      "es_name": "Sri Lanka"
    },
    {
      "name": "Sudan",
      "es_name": "Sudán"
    },
    {
      "name": "Suriname",
      "es_name": "Surinam"
    },
    {
      "name": "Swaziland",
      "es_name": "Swazilandia"
    },
    {
      "name": "Sweden",
      "es_name": "Suecia"
    },
    {
      "name": "Switzerland",
      "es_name": "Suiza"
    },
    {
      "name": "Syrian Arab Republic",
      "es_name": "Siria"
    },
    {
      "name": "Taiwan, Province of China",
      "es_name": "Taiwán"
    },
    {
      "name": "Tajikistan",
      "es_name": "Tadjikistan"
    },
    {
      "name": "Tanzania, United Republic of",
      "es_name": "Tanzania"
    },
    {
      "name": "Thailand",
      "es_name": "Tailandia"
    },
    {
      "name": "Timor-Leste",
      "es_name": "Timor Oriental"
    },
    {
      "name": "Togo",
      "es_name": "Togo"
    },
    {
      "name": "Tokelau",
      "es_name": "Tokelau"
    },
    {
      "name": "Tonga",
      "es_name": "Tonga"
    },
    {
      "name": "Trinidad and Tobago",
      "es_name": "Trinidad y Tobago"
    },
    {
      "name": "Tunisia",
      "es_name": "Túnez"
    },
    {
      "name": "Turkey",
      "es_name": "Turquía"
    },
    {
      "name": "Turkmenistan",
      "es_name": "Turkmenistan"
    },
    {
      "name": "Turks and Caicos Islands",
      "es_name": "Islas Turcas y Caicos"
    },
    {
      "name": "Tuvalu",
      "es_name": "Tuvalu"
    },
    {
      "name": "Uganda",
      "es_name": "Uganda"
    },
    {
      "name": "Ukraine",
      "es_name": "Ucrania"
    },
    {
      "name": "United Arab Emirates",
      "es_name": "Emiratos Árabes Unidos"
    },
    {
      "name": "United Kingdom",
      "es_name": "Reino Unido"
    },
    {
      "name": "United States",
      "es_name": "Estados Unidos"
    },
    {
      "name": "Uruguay",
      "es_name": "Uruguay"
    },
    {
      "name": "Uzbekistan",
      "es_name": "Uzbekistán"
    },
    {
      "name": "Vanuatu",
      "es_name": "Vanuatu"
    },
    {
      "name": "Venezuela",
      "es_name": "Venezuela"
    },
    {
      "name": "Viet Nam",
      "es_name": "Vietnam"
    },
    {
      "name": "Virgin Islands, British",
      "es_name": "Islas Vírgenes Británicas"
    },
    {
      "name": "Virgin Islands, U.S.",
      "es_name": "Islas Vírgenes Americanas"
    },
    {
      "name": "Wallis and Futuna",
      "es_name": "Wallis y Futuna"
    },
    {
      "name": "Western Sahara",
      "es_name": "Sáhara Occidental"
    },
    {
      "name": "Yemen",
      "es_name": "Yemen"
    },
    {
      "name": "Zambia",
      "es_name": "Zambia"
    },
    {
      "name": "Zimbabwe",
      "es_name": "Zimbabwe"
    }
];

const countries = countryTest.map(country => {
    const ct = {
        name: country.name,
    };

    return ct;
})

module.exports = {
    BooksTest,
    genreTest,
    publisherTest,
    languageTest,
    formatTest,
    countries,
}
