const carArray = [
  'assets/img/cars1.jpg',
  'assets/img/cars2.jpg',
  'assets/img/cars3.jpg',
  'assets/img/cars4.jpg',
  'assets/img/cars5.jpg',
  'assets/img/cars6.jpg',
  'assets/img/cars7.jpg',
  'assets/img/cars8.jpg',
  'assets/img/cars9.jpg',
];
//skab hovedsektionen
const section = document.createElement('section');
section.id = 'carGallery';
section.classList.add('container');
document.body.appendChild(section);

const gallery = document.getElementById('carGallery');

//skab to sektioner og sæt dem ind i hovedsektionen
const sectionChildOne = document.createElement('section');
sectionChildOne.id = 'thumbs';
section.appendChild(sectionChildOne);
const thumbsSection = document.getElementById('thumbs');

const sectionChildTwo = document.createElement('section');
sectionChildTwo.id = 'large';
section.appendChild(sectionChildTwo);
const bigSection = document.getElementById('large');

//skab billederne
carArray.forEach((i) => {
  const img = document.createElement('img');
  img.src = i;
  img.classList.add('smallcar');
  thumbsSection.appendChild(img);
});
const bigImage = document.createElement('img');
bigImage.src = './assets/img/cars10.jpg';
bigImage.id = 'big';
bigSection.appendChild(bigImage);

//funktionalitet
const smallCars = document.querySelectorAll('.smallcar');

smallCars.forEach((i) => {
  i.addEventListener('click', () => {
    const bigImage = document.getElementById('big');
    let temp = bigImage.src;
    bigImage.src = i.src;
    i.src = temp;
  });
});
