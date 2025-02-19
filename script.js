document.addEventListener("DOMContentLoaded", function () {
    const carouselInner1 = document.querySelector(".carousel-inner");
    const indicators1 = document.querySelectorAll(".carousel-indicators .indicator");
    let currentIndex1 = 0;

    const carouselInner2 = document.querySelector("#carousel-inner-2");
    const indicators2 = document.querySelectorAll("#carousel-indicators-2 .indicator");
    let currentIndex2 = 0;

    function updateCarousel1() {
        carouselInner1.style.transform = `translateX(-${currentIndex1 * 100}%)`;
        indicators1.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === currentIndex1);
        });
        // 保存当前索引用于后续判断
        const prevIndex1 = currentIndex1;
        currentIndex1 = (currentIndex1 + 1) % indicators1.length;

        // 若回到初始索引，立即触发第二个轮播图的切换
        if (prevIndex1 === indicators1.length - 1 && currentIndex1 === 0) {
            updateCarousel2();
        }
    }

    function updateCarousel2() {
        carouselInner2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
        indicators2.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === currentIndex2);
        });
        currentIndex2 = (currentIndex2 + 1) % indicators2.length;
    }

    indicators1.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            currentIndex1 = index;
            updateCarousel1();
        });
    });

    indicators2.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            currentIndex2 = index;
            updateCarousel2();
        });
    });

    // 启动第一个轮播图的定时器
    setInterval(updateCarousel1, 3000);
    // 保留第二个轮播图的定时器，确保它也能自动切换
    setInterval(updateCarousel2, 3000);
});