document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form input values
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;

        // Validate form inputs (add your own validation logic here)

        // Example: Check if name and message are not empty
        if (name.trim() === '' || message.trim() === '') {
            alert('Please fill out all fields');
            return;
        }

        // Send form data to server (replace with your own backend code)
        // Here you can use fetch or XMLHttpRequest to send data to your backend
        
        // Example using fetch
        fetch('your-backend-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => {
            if (response.ok) {
                alert('Message sent successfully!');
                form.reset(); // Clear form inputs after successful submission
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred, please try again later');
        });
    });
});