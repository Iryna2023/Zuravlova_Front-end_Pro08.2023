let index = 0;

const images = document.querySelectorAll('.slider-img');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

if (!images.length || !nextButton || !prevButton) {
    console.error('Вибачте, не вдалося знайти зображення або кнопки.');
} else {

    function showImage(i) {
        images.forEach(img => {
            img.style.display = 'none';
            img.classList.remove('fade');
    });

        images[i].style.display = 'block';
        images[i].classList.add('fade');

        prevButton.style.display = (i === 0) ? 'none' : 'block';
        nextButton.style.display = (i === images.length - 1) ? 'none' : 'block';
    }

    function nextImage() {
        if (index < images.length - 1) {
            index++;
            showImage(index);
        }
    }

    function prevImage() {
        if (index > 0) {
            index--;
            showImage(index);
        }
    }

    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    showImage(index);
}