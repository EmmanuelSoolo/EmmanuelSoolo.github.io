// using this for the shwoing and hiding sections
const sections = document.querySelectorAll('.section');

// navigation links
const  navLinks = document.querySelectorAll('.nav a');

// function to show a section and hide others
function showSection(id) {
    sections.forEach(function (section) {
        if (section.id === id) {
            section.classList.add('section-active');
        } else {
            section.classList.remove('section-active');
        }
    });
}

// show the home section by default
showSection('home');

// add click event listeners to navigation links
navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        // get the target section id from the link's href attribute
        const targetId = this.getAttribute('href').substring(1);
        
        // using for target section to show
        showSection(targetId);
    });

});

//button for giving alert
const giveButton = document.getElementById('tabForGiving');


if(giveButton) {
    giveButton.addEventListener('click', function() {
        alert('We appreciate your kindness. God bless you');
    });
}