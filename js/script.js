document.addEventListener('DOMContentLoaded', function() {
    const btnPrimary = document.querySelector('.btn-primary');

    btnPrimary.addEventListener('click', function() {
        btnPrimary.classList.toggle('clicked');
    });
});

