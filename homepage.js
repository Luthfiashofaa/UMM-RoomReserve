document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("a[href='#homeButton']").addEventListener("click", function(e) {
        e.preventDefault();
        document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("a[href='#contactButton']").addEventListener("click", function(e) {
        e.preventDefault();
        document.getElementById("contactUS").scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("a[href='#newsButton']").addEventListener("click", function(e) {
        e.preventDefault();
        document.getElementById("berita").scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelector("a[href='#loginButton']").addEventListener("click", function(e) {
    e.preventDefault();
    window.location.href = 'login.html'; // Mengarahkan ke login.html
});