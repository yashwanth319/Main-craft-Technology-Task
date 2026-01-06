// Dynamic Navbar
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("scrolled", window.scrollY > 50);

    document.querySelectorAll("section").forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            document.querySelectorAll("nav a").forEach(link => {
                link.classList.remove("active");
                document.querySelector(`nav a[href="#${id}"]`).classList.add("active");
            });
        }
    });
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const inputs = this.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        const error = input.nextElementSibling;
        if (!input.value.trim()) {
            error.textContent = "This field is required";
            valid = false;
        } else {
            error.textContent = "";
        }
    });

    const email = document.getElementById("email");
    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        email.nextElementSibling.textContent = "Invalid email format";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
        this.reset();
    }
});

// Dark Mode Toggle
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
});

// Load Theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}
