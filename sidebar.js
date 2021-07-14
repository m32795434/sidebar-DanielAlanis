const btnToggle = document.querySelector('.toggle-btn');
let menuOpen = false;


btnToggle.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');

    if(!menuOpen) {
        btnToggle.classList.add('open');
        menuOpen = true;
    }else {
        btnToggle.classList.remove('open');
        menuOpen = false;
    }

});