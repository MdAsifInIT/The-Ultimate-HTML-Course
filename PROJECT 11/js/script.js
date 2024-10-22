document.addEventListener("DOMContentLoaded", function () {
    // Input focus and blur effects
    const searchInput = document.querySelector(".search-section input");

    searchInput.addEventListener("focus", function () {
        searchInput.placeholder = "Start typing...";
    });

    searchInput.addEventListener("blur", function () {
        searchInput.placeholder = "Search for restaurant, cuisine or a dish";
    });

    // Button click event for the search functionality
    const searchButton = document.querySelector(".search-section button");
    searchButton.addEventListener("click", function () {
        const query = searchInput.value;
        if (query) {
            alert(`Searching for: ${query}`);
        } else {
            alert("Please enter something to search.");
        }
    });

    // Restaurant hover effect for animation
    const restaurants = document.querySelectorAll(".restaurant");

    restaurants.forEach(restaurant => {
        restaurant.addEventListener("mouseenter", () => {
            restaurant.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
        });

        restaurant.addEventListener("mouseleave", () => {
            restaurant.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
        });
    });

    // Social Media hover effect
    const socialLinks = document.querySelectorAll(".social-media li a img");

    socialLinks.forEach(icon => {
        icon.addEventListener("mouseenter", function () {
            icon.style.transform = "scale(1.1)";
        });

        icon.addEventListener("mouseleave", function () {
            icon.style.transform = "scale(1)";
        });
    });
});
