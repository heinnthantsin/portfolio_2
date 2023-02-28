
//  preloader 
window.addEventListener("load", () => {
    const loader = document.querySelector('.center');
    setTimeout(() => {
        loader.classList.add('loader-hidden');
    },2500);
})


// show & hide scrollToTop btn 
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    let btn = document.getElementById('upBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        if (!btn.classList.contains('btnEnter')) {
            btn.classList.remove('btnExit');
            btn.classList.add('btnEnter');
            btn.style.display = "block";
        }
    } else {
        if (!btn.classList.contains('btnExit')) {
            btn.classList.remove('btnEnter');
            btn.classList.add('btnExit');
            setTimeout(() => {
                 btn.style.display = "none";
            }, 250);
        }
    }
}

// go to top function 
let goToTop = () => { 

    window.scrollTo(0, 0);
}
  
