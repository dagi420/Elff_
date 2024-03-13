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

    const galleryItems = document.querySelectorAll(".gallery-item");

    // Check if gallery items are in viewport on scroll
    window.addEventListener("scroll", function() {
        console.log("Scroll");
        galleryItems.forEach(item => {
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

const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

   // Function to close the mobile menu
   function closeMobileMenu() {
    header.classList.remove("show-mobile-menu");
}

// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());
   // Close mobile menu when a menu item is clicked
   const menuLinks = document.querySelectorAll(".menu-links a");
   menuLinks.forEach(link => {
       link.addEventListener("click", closeMobileMenu);
   });

   window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});