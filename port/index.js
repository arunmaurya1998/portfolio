document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

function showContactNumber() {
    var contactNumberDiv = document.getElementById('contact-number');

    // Toggle the display of the contact number
    if (contactNumberDiv.style.display === 'none') {
        contactNumberDiv.style.display = 'block';
    } else {
        contactNumberDiv.style.display = 'none';
    }
}

function showEmail() {
    var contactNumberDiv = document.getElementById('contact-email');

    // Toggle the display of the contact email
    if (contactNumberDiv.style.display === 'none') {
        contactNumberDiv.style.display = 'block';
    } else {
        contactNumberDiv.style.display = 'none';
    }
}


