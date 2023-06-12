
//--show n hide 'back_to_top' element on page scroll
window.onscroll = function () {
    var btt = document.getElementById('backToTop');
    if (pageYOffset >= 1000) {
        btt.style.visibility = 'visible';
    } else {
        btt.style.visibility = 'hidden';
    }
};

