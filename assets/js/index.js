// ^ Write your JavaScript code here
const sections = document.querySelectorAll(
    "#hero-section, #about, #portfolio, #experience, #testimonials, #contact"
);

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

const themeToggleButton = document.getElementById("theme-toggle-button");

themeToggleButton.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");

    const isDarkMode = document.documentElement.classList.contains("dark");

    themeToggleButton.setAttribute("aria-pressed", isDarkMode);
});


const tabButtons = document.querySelectorAll(".tab-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        tabButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });
        button.classList.add("active");
        const selectedCategory = button.dataset.category;
        portfolioItems.forEach(function (item) {
            if (
                selectedCategory === "all" ||
                item.dataset.category === selectedCategory )
             {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }
        });
    });
});
const settingsToggle = document.getElementById("settings-toggle");
const settingsSidebar = document.getElementById("settings-sidebar");
const closeSettings = document.getElementById("close-settings");

function openSettings() {
    settingsSidebar.classList.remove("translate-x-full");
    settingsToggle.setAttribute("aria-expanded", "true");
    settingsSidebar.setAttribute("aria-hidden", "false");
}

function closeSettingsPanel() {
    settingsSidebar.classList.add("translate-x-full");
    settingsToggle.setAttribute("aria-expanded", "false");
    settingsSidebar.setAttribute("aria-hidden", "true");
}

if (settingsToggle && settingsSidebar && closeSettings) {
    settingsToggle.addEventListener("click", openSettings);
    closeSettings.addEventListener("click", closeSettingsPanel);
}
const colorsGrid = document.getElementById("theme-colors-grid");

const themeColors = [
    "#6366f1",
    "#ef7a0b",
    "#06b6d4",
    "#0dae79",
    "#f4624b",
    "#f0424b",
];

if (colorsGrid) {
    themeColors.forEach(function (color) {
        const colorButton = document.createElement("button");

        colorButton.type = "button";
        colorButton.style.backgroundColor = color;
        colorButton.style.width = "40px";
        colorButton.style.height = "40px";
        colorButton.style.borderRadius = "50%";
        colorButton.style.border = "2px solid white";
        colorButton.style.cursor = "pointer";
        colorButton.setAttribute("aria-label", `اختيار اللون ${color}`);

        colorButton.addEventListener("click", function () {
            document.documentElement.style.setProperty(
                "--color-primary",
                color
            );

            document.documentElement.style.setProperty(
                "--color-secondary",
                color
            );

            localStorage.setItem("portfolioThemeColor", color);
        });

        colorsGrid.appendChild(colorButton);
    });

    const savedColor = localStorage.getItem("portfolioThemeColor");

    if (savedColor) {
        document.documentElement.style.setProperty(
            "--color-primary",
            savedColor
        );

        document.documentElement.style.setProperty(
            "--color-secondary",
            savedColor
        );
    }
}
const scrollTopButton = document.getElementById("scroll-to-top");

if (scrollTopButton) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopButton.classList.remove("opacity-0", "invisible");
            scrollTopButton.classList.add("opacity-100", "visible");
        } else {
            scrollTopButton.classList.remove("opacity-100", "visible");
            scrollTopButton.classList.add("opacity-0", "invisible");
        }
    });

    scrollTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
