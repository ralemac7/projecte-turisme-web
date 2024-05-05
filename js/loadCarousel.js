function startCarousel(carousel) {
    let currentIndex = 0;
    const images = carousel.querySelectorAll('.carousel-image');
    const totalImages = images.length;
    let intervalId;

    function updateCarousel() {
        const xOffset = -currentIndex * (100 / totalImages);
        carousel.querySelector('.carousel-images').style.transform = `translateX(${xOffset}%)`;
    }

    intervalId = setInterval(() => {
        currentIndex++;
        if (currentIndex === totalImages) currentIndex = 0;
        updateCarousel();
    }, 2000); // Change image every 2 seconds

    carousel.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });

    carousel.addEventListener('mouseleave', () => {
        intervalId = setInterval(() => {
            currentIndex++;
            if (currentIndex === totalImages) currentIndex = 0;
            updateCarousel();
        }, 4000);
    });
}

document.querySelectorAll('.carousel').forEach(startCarousel);