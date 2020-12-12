console.log('hello marketplace!');


let itemGalleryEl = document.getElementById('galleryEl');
let testImgUrl = 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dw9fc54f37/images/530000/533591.jpg'



// create one item:

// create column, card, card-image, image elements
let newCol = document.createElement('div');
let newCard = document.createElement('div');
let newCardimage = document.createElement('div');
let newImage = document.createElement('img');

// create card-content, card-title, description, prize, card-action elements
let newCardcont = document.createElement('div');
let newCardtitle = document.createElement('span');
let newDescription = document.createElement('p');
let newPrize = document.createElement('p');
let newCardaction = document.createElement('div');
let newDetail = document.createElement('a');

// attach their main/class attributes
newCol.classList.add('col s6 16');
newCard.classList.add('card');
newCardimage.classList.add('card-image');
newImage.setAttribute('src', testImgUrl);
newCardcont.classList.add('card-content');
newCardtitle.classList.add('card-title');
newDescription.classList.add('description');
newPrize.classList.add('prize');
newCardaction.classList.add('card-action');

// attach elements to each other to build item structure


