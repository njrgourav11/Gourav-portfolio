document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                if (targetId === "home") {
                    window.scrollTo({
                        top: 0, // Scroll to the top of the page
                        behavior: "smooth",
                    });
                } else {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50, // Adjust the offset as needed
                        behavior: "smooth",
                    });
                }
            }
        });
    });
});
