document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Ma\'lumotlar yuborildi! Tez orada siz bilan bog\'lanamiz.');
    this.reset();
});