const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Content Loaded");

    const menuItems = document.querySelectorAll(".menu-item");

    // Add event listeners to each menu item for hover effect
    menuItems.forEach(item => {
        item.addEventListener("mouseenter", function() {
            console.log("Mouse enter");
            this.classList.add("hover");
        });
        item.addEventListener("mouseleave", function() {
            console.log("Mouse leave");
            this.classList.remove("hover");
        });
    });

    // Check if menu items are in viewport on scroll
    window.addEventListener("scroll", function() {
        console.log("Scroll");
        menuItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add("animate");
            }
        });
    });

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});