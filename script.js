

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menuLink = document.getElementById("menuLink");
    const menuOpenBtn = document.getElementById("menuOpenBtn");
    const menuCloseBtn = document.getElementById("menuCloseBtn");

    // Toggle the mobile menu on hamburger/close icon click
    menuToggle.addEventListener("click", function () {
        menuLink.classList.toggle("active");

        // Toggle visibility of icons
        menuOpenBtn.classList.toggle("hidden");
        menuCloseBtn.classList.toggle("hidden");
    });

    // If clicking outside the menu or toggle, close the menu
    document.addEventListener("click", function (event) {
        if (!menuLink.contains(event.target) && !menuToggle.contains(event.target)) {
            menuLink.classList.remove("active");
            menuOpenBtn.classList.remove("hidden");
            menuCloseBtn.classList.add("hidden");
        }
    });
    
});
