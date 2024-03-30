document.getElementById('contactForm').addEventListener('submit', function(event) {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const postcode = document.getElementById('postcode').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const mobilePhone = document.getElementById('mobilePhone').value.trim();

    if (firstName === '' || lastName === '' || email === '' || address === '' || postcode === '' || city === '' || state === '' || mobilePhone === '') {
        event.preventDefault(); 
        alert('Please fill out all required fields.');
    }
});
