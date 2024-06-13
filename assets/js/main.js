
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").classList.add("show");
    } else {
        document.getElementById("navbar").classList.remove("show");
    }
}

window.addEventListener('load', function () {
    setTimeout(function () {
        document.querySelector('.preloader').style.display = 'none';
    }, 500);
});

new WOW().init();
