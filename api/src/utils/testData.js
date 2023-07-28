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
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_779424-MLU70255708050_072023-F.webp"
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
        "image": "https://contentv2.tap-commerce.com/cover/large/9788418006814_1.jpg?id_com=1113"
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
        "name": "Español"
    },
    {
        "name": "Inglés"
    },
    {
        "name": "Francés"
    },
    {
        "name": "Alemán"
    },
    {
        "name": "Italiano"
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

module.exports = {
    BooksTest,
    genreTest,
    publisherTest,
    languageTest,
    formatTest,
}

