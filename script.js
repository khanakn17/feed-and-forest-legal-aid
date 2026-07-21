// =========================
// FEED & FOREST LEGAL AID
// script.js
// =========================
// Donation Selection

// Fixed Amount Links

const paymentLinks = {
    "101": "https://rzp.io/rzp/C3SxOWC8",
    "501": "https://rzp.io/rzp/8HvPPCK",
    "1100": "https://rzp.io/rzp/ZcbFMDD"
};

donateBtn.addEventListener("click", function(e){

    e.preventDefault();

    if(selectedAmount == "" || selectedAmount <= 0){

        alert("Please select or enter donation amount.");
        return;
    }

    // Fixed Amounts
    if(paymentLinks[selectedAmount]){
        window.open(paymentLinks[selectedAmount], "_blank");
        return;
    }

    // Custom Amount (abhi temporary)
    alert("Custom Amount integration next step me Razorpay Checkout ke saath hogi.");

});


// Sticky Header Shadow
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 12px 30px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});

// =========================
// Counter Animation
// =========================

const counters = document.querySelectorAll(".impact-box h2");

const speed = 100;

counters.forEach(counter => {

    const animate = () => {

        const target = parseInt(counter.innerText.replace(/\D/g, ""));

        const count = parseInt(counter.getAttribute("data-count")) || 0;

        const increment = Math.ceil(target / speed);

        if (count < target) {

            counter.setAttribute("data-count", count + increment);

            counter.innerText = (count + increment) + "+";

            setTimeout(animate, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    animate();

});

// =========================
// Scroll Animation
// =========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".mission-card,.program-card,.gallery-item,.impact-box").forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});

// =========================
// Active Navigation
// =========================

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    if (link.href === window.location.href) {

        link.classList.add("active");

    }

});

// =========================
// Volunteer Form
// =========================

const form = document.querySelector(".volunteer-form");

const form = document.querySelector(".volunteer-form");

if (form) {
  form.addEventListener("submit", function() {
    alert("Thank you for volunteering with Feed & Forest Legal Aid!");
  });
}