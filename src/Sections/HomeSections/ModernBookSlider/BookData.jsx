// bookData.js (or directly in BookCarousel for now)

import image_path1 from '../images/SliderSection-Imagess/slider-1.jpg'; // Corresponds to slider-6.jpg (The Long Walk)
import image_path2 from '../images/SliderSection-Imagess/slider-2.jpg'; // Corresponds to slider-3.jpg (Rumsfeld)
import image_path3 from '../images/SliderSection-Imagess/slider-3.jpg'; // Corresponds to slider-2.jpg (Crashback)
import image_path4 from '../images/SliderSection-Imagess/slider-4.jpg'; // Corresponds to slider-5.jpg (You Like It Darker)
import image_path5 from '../images/SliderSection-Imagess/slider-5.jpg'; // Corresponds to slider-4.jpg (The Gwendy Trilogy)
import image_path6 from '../images/SliderSection-Imagess/slider-6.jpg'; // Corresponds to slider-1.jpg (Science Fiction)

export const bookData = [
    {
        id: 1,
        genre: "",
        title: "SCIENCE FICTION: The Evolutionary Mythology of the Future",
        author: "Thomas Lombardo",
        description: "VOLUME ONE: PROMETHEUS TO THE MARTIANS. Explores the role of science fiction as a developing mythology for the future of humanity, spanning historical narratives and classic sci-fi tropes.",
        image: image_path1, 
        alt: "Science fiction book cover with 'SCIENCE FICTION' in large metallic letters above a futuristic, icy landscape and stars.",
        
    },
    {
        id: 2,
        genre: "Biography / Political History",
        title: "RUMSFELD",
        author: "Andrew Cockburn",
        description: "HIS RISE, FALL, AND CATASTROPHIC LEGACY. A powerful, in-depth account of Donald Rumsfeld's political life, detailing his influence on global policy and the history of the Iraq War.",
        image: image_path3,
        alt: "Book cover featuring a close-up portrait of Donald Rumsfeld with the title 'RUMSFELD'.",
    },
    {
        id: 3,
        genre: "Geopolitics / Non-Fiction",
        title: "CRASHBACK",
        author: "Michael Fabey",
        description: "THE POWER CLASH BETWEEN THE U.S. AND CHINA IN THE PACIFIC. A telling picture of the operational challenges the U.S. Navy faces in the Western Pacific as tensions escalate between global powers.",
        image: image_path2,
        alt: "Book cover featuring an aircraft carrier and warships at sea, with the title 'CRASHBACK' and long shadows.",
    },
    {
        id: 4,
        genre: "Horror / Short Stories",
        title: "YOU LIKE IT DARKER",
        author: "Stephen King",
        description: "Outstanding... a master class in tension. King is still king. Includes a bonus story 'The Music Room.' A New York Times Bestseller collection of chilling new tales.",
        image: image_path5,
        alt: "Book cover for Stephen King's You Like It Darker, showing a silhouette of a crocodile-shaped island against an orange sunset.",
    },
    {
        id: 5,
        genre: "Supernatural Thriller Trilogy",
        title: "THE GWENDY TRILOGY",
        author: "Stephen King and Richard Chizmar",
        description: "Includes GWENDY'S BUTTON BOX, GWENDY'S MAGIC FEATHER, and GWENDY'S FINAL TASK. Three thrilling novels detailing Gwendy Peterson's life and her relationship with a mysterious, powerful box.",
        image: image_path4,
        alt: "Book cover featuring a starry sky, a dark horizon, and a floating black bowler hat in the center.",
    },
    {
        id: 6,
        genre: "Dystopian Thriller",
        title: "THE LONG WALK",
        author: "Stephen King (Writing as Richard Bachman)",
        description: "In a terrifying dystopian America, one hundred teenaged boys set off on The Long Walk—a fatal contest where they must keep moving at four miles per hour or face a military bullet. The last walker alive wins the prize.",
        image: image_path6,
        alt: "Book cover for The Long Walk by Stephen King, featuring a dark road stretching into the distance with silhouetted figures.",
    },
];