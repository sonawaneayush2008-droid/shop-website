```javascript
// Mobile Navigation

function toggleMenu() {

    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");

}


// Appointment Booking

document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let phone = document.getElementById("phone").value;

    let service = document.getElementById("service").value;

    let date = document.getElementById("date").value;

    let message = document.getElementById("message").value;


    // Replace with the actual parlour WhatsApp number
    let whatsappNumber = "919876543210";

    let text = `Hello! I want to book an appointment.

Name: ${name}
Phone: ${phone}
Service: ${service}
Date: ${date}
Message: ${message}`;


    let whatsappURL = "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent(text);


    window.open(whatsappURL, "_blank");

});
```
