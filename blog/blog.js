const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
		}
		
]

// Get the first book
const book = articles[0];

// Update HTML content
document.getElementById('title').textContent = book.title;
document.getElementById('date').textContent = book.date;
document.getElementById('ages').textContent = `Ages: ${book.ages}`;
document.getElementById('genre').textContent = `Genre: ${book.genre}`;
document.getElementById('stars').textContent = `Rating: ${book.stars}`;
document.getElementById('description').textContent = book.description;

// Update the image
const imgElement = document.querySelector('#book1 img');
imgElement.src = book.imgSrc;
imgElement.alt = book.imgAlt;

// Update book 2 using class selectors
const book2 = articles[1];
const book2Section = document.getElementById('book2');

book2Section.querySelector('.title').textContent = book2.title;
book2Section.querySelector('.date').textContent = book2.date;
book2Section.querySelector('.ages').textContent = `Ages: ${book2.ages}`;
book2Section.querySelector('.genre').textContent = `Genre: ${book2.genre}`;
book2Section.querySelector('.stars').textContent = `Rating: ${book2.stars}`;
book2Section.querySelector('.description').textContent = book2.description;

const img2 = book2Section.querySelector('img');
img2.src = book2.imgSrc;
img2.alt = book2.imgAlt;

const book3 = articles[2];
const book3Section = document.getElementById('book3');

book3Section.querySelector('.title').textContent = book3.title;
book3Section.querySelector('.date').textContent = book3.date;
book3Section.querySelector('.ages').textContent = `Ages: ${book3.ages}`;
book3Section.querySelector('.genre').textContent = `Genre: ${book3.genre}`;
book3Section.querySelector('.stars').textContent = `Rating: ${book3.stars}`;
book3Section.querySelector('.description').textContent = book3.description;

const img3 = book3Section.querySelector('img');
img3.src = book3.imgSrc;
img3.alt = book3.imgAlt;

