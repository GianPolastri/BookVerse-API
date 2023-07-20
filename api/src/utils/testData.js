//* Acá van los datos de prueba

const eBooksTest = [
    {
        "title": "El nombre del viento",
        "author": "Patrick Rothfuss",
        "price": 25,
        "description": "Esta es la historia de Kvothe, el personaje principal, contada en su propia voz. Él es el protagonista de la trilogía Crónica del Asesino de Reyes.",
        "pages": 662,
        "publicationDate": "2007-03-27",
        "image": "el_nombre_del_viento.jpg"
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "price": 18,
        "description": "1984 es una novela política de ficción distópica que narra un futuro totalitario donde el Gran Hermano lo controla todo.",
        "pages": 328,
        "publicationDate": "1949-06-08",
        "image": "1984.jpg"
    },
    {
        "title": "Cien años de soledad",
        "author": "Gabriel García Márquez",
        "price": 22,
        "description": "Esta novela cuenta la historia de la familia Buendía a lo largo de varias generaciones en el pueblo ficticio de Macondo.",
        "pages": 432,
        "publicationDate": "1967-05-30",
        "image": "cien_anos_de_soledad.jpg"
    },
    {
        "title": "La sombra del viento",
        "author": "Carlos Ruiz Zafón",
        "price": 20,
        "description": "Daniel Sempere, un joven de Barcelona, encuentra un libro en el Cementerio de los Libros Olvidados y se sumerge en una trama llena de misterio.",
        "pages": 545,
        "publicationDate": "2001-04-01",
        "image": "la_sombra_del_viento.jpg"
    },
    {
        "title": "Los pilares de la Tierra",
        "author": "Ken Follett",
        "price": 30,
        "description": "La historia se desarrolla en la Edad Media, siguiendo la construcción de una catedral gótica en la ciudad ficticia de Kingsbridge.",
        "pages": 1076,
        "publicationDate": "1989-10-02",
        "image": "los_pilares_de_la_tierra.jpg"
    },
    {
        "title": "Harry Potter y la piedra filosofal",
        "author": "J.K. Rowling",
        "price": 26,
        "description": "El primer libro de la saga de Harry Potter, donde descubre que es un mago y empieza su aventura en el Colegio Hogwarts de Magia y Hechicería.",
        "pages": 332,
        "publicationDate": "1997-06-26",
        "image": "harry_potter_y_la_piedra_filosofal.jpg"
    },
    {
        "title": "El señor de los anillos: La comunidad del anillo",
        "author": "J.R.R. Tolkien",
        "price": 28,
        "description": "La primera parte de la trilogía épica que sigue las aventuras de Frodo Bolsón mientras lleva el Anillo Único para destruirlo.",
        "pages": 576,
        "publicationDate": "1954-07-29",
        "image": "la_comunidad_del_anillo.jpg"
    },
    {
        "title": "Matar un ruiseñor",
        "author": "Harper Lee",
        "price": 21,
        "description": "La novela cuenta la historia de Atticus Finch, un abogado, y sus hijos Scout y Jem mientras lidian con cuestiones de raza e injusticia en la época de la Gran Depresión.",
        "pages": 324,
        "publicationDate": "1960-07-11",
        "image": "matar_un_ruisenor.jpg"
    },
    {
        "title": "Don Quijote de la Mancha",
        "author": "Miguel de Cervantes Saavedra",
        "price": 24,
        "description": "La obra narra las aventuras de un hidalgo que, enloquecido por la lectura excesiva de libros de caballerías, decide salir a luchar contra el mal como caballero andante.",
        "pages": 928,
        "publicationDate": "1605-01-16",
        "image": "don_quijote_de_la_mancha.jpg"
    },
    {
        "title": "Orgullo y prejuicio",
        "author": "Jane Austen",
        "price": 19,
        "description": "La novela sigue la vida de las hermanas Bennet y su búsqueda de matrimonio en la Inglaterra del siglo XIX.",
        "pages": 432,
        "publicationDate": "1813-01-28",
        "image": "orgullo_y_prejuicio.jpg"
    },
    {
        "title": "Crónicas marcianas",
        "author": "Ray Bradbury",
        "price": 17,
        "description": "Una colección de cuentos interconectados que relatan la colonización y exploración de Marte por parte de los humanos.",
        "pages": 288,
        "publicationDate": "1950-05-05",
        "image": "cronicas_marcianas.jpg"
    },
    {
        "title": "Drácula",
        "author": "Bram Stoker",
        "price": 23,
        "description": "La novela sigue la historia del Conde Drácula mientras intenta mudarse de Transilvania a Inglaterra para extender la no-muerte.",
        "pages": 418,
        "publicationDate": "1897-05-26",
        "image": "dracula.jpg"
    },
    {
        "title": "Sapiens: De animales a dioses",
        "author": "Yuval Noah Harari",
        "price": 27,
        "description": "Un libro que explora la historia de la humanidad, desde los primeros humanos hasta la era moderna.",
        "pages": 464,
        "publicationDate": "2011-04-04",
        "image": "sapiens.jpg"
    }
];

const genreTest = [
    {
        "name": "Ficción"
    },
    {
        "name": "Novela"
    },
    {
        "name": "Ciencia ficción"
    },
    {
        "name": "Fantasía"
    },
    {
        "name": "Misterio"
    },
    {
        "name": "Romance"
    },
    {
        "name": "Aventura"
    },
    {
        "name": "Historia"
    },
    {
        "name": "Biografía"
    },
    {
        "name": "Poesía"
    },
    {
        "name": "Ensayo"
    },
    {
        "name": "Autoayuda"
    }
];

const publisherTest = [
    {
        "name": "Editorial Alfaguara"
    },
    {
        "name": "Editorial Anagrama"
    },
    {
        "name": "Editorial Planeta"
    },
    {
        "name": "Editorial Penguin Random House"
    },
    {
        "name": "Editorial Tusquets"
    },
    {
        "name": "Editorial Gallimard"
    },
    {
        "name": "Editorial HarperCollins"
    },
    {
        "name": "Editorial Simon & Schuster"
    },
    {
        "name": "Editorial Hachette"
    },
    {
        "name": "Editorial Knopf"
    },
    {
        "name": "Editorial Macmillan"
    },
    {
        "name": "Editorial Pantheon Books"
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
    {
        "name": "Portugués"
    },
    {
        "name": "Ruso"
    },
    {
        "name": "Chino"
    },
    {
        "name": "Japonés"
    },
    {
        "name": "Árabe"
    },
    {
        "name": "Hindi"
    },
    {
        "name": "Bengalí"
    }
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
        "name": "DOCX"
    },
    {
        "name": "TXT"
    },
    {
        "name": "HTML"
    },
    {
        "name": "RTF"
    },
    {
        "name": "FB2"
    },
    {
        "name": "PDB"
    },
    {
        "name": "LIT"
    },
    {
        "name": "CBZ"
    }
];

moduel.exports = {
    eBooksTest,
    genreTest,
    publisherTest,
    languageTest,
    formatTest,
}