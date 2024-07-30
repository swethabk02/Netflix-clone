document.addEventListener('DOMContentLoaded', () => {
    const mainSlide = document.querySelector('.carousel-slide');
    const mainItems = document.querySelectorAll('.carousel-item');
    const mainNextBtn = document.getElementById('mainNextBtn');
    const mainPrevBtn = document.getElementById('mainPrevBtn');
    let mainCounter = 0;

    const updateMainSlide = () => {
        mainSlide.style.transition = "transform 0.5s ease-in-out";
        mainSlide.style.transform = `translateX(-${mainCounter * 100}%)`;
    };

    mainNextBtn.addEventListener('click', () => {
        if (mainCounter < mainItems.length - 1) {
            mainCounter++;
            updateMainSlide();
        }
    });

    mainPrevBtn.addEventListener('click', () => {
        if (mainCounter > 0) {
            mainCounter--;
            updateMainSlide();
        }
    });

    const genreSlides = document.querySelectorAll('.genre-slide');
    const genreButtons = document.querySelectorAll('.genre-buttons');

    genreButtons.forEach((buttons, index) => {
        const genrePrevBtn = buttons.querySelector('.genrePrevBtn');
        const genreNextBtn = buttons.querySelector('.genreNextBtn');
        let genreCounter = 0;

        const updateGenreSlide = (slide, itemWidth) => {
            slide.style.transition = "transform 0.5s ease-in-out";
            slide.style.transform = `translateX(-${genreCounter * itemWidth}px)`;
        };

        genreNextBtn.addEventListener('click', () => {
            const slide = genreSlides[index];
            const itemWidth = slide.querySelector('.genre-item').offsetWidth + 10; // Adjust for margin-right
            if (genreCounter < slide.children.length - Math.floor(slide.offsetWidth / itemWidth)) {
                genreCounter++;
                updateGenreSlide(slide, itemWidth);
            }
        });

        genrePrevBtn.addEventListener('click', () => {
            const slide = genreSlides[index];
            const itemWidth = slide.querySelector('.genre-item').offsetWidth + 10; // Adjust for margin-right
            if (genreCounter > 0) {
                genreCounter--;
                updateGenreSlide(slide, itemWidth);
            }
        });
    });
});


