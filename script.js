let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let backBtn = document.getElementById("back");
let carousel = document.querySelector(".carousel");
let listHTML = document.querySelector(".carousel .list");
let seeMoreButtons = document.querySelectorAll(".seeMore")

nextBtn.onclick = function(){
    showSlider("next");
};
prevBtn.onclick = function(){
    showSlider("prev");
};

let unAcceptClick;
function showSlider(type) {
    nextBtn.style.pointerEvents = 'none';
    prevBtn.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll(".carousel .list .item");
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }

    clearTimeout(unAcceptClick);
    unAcceptClick = setInterval(() => {
    nextBtn.style.pointerEvents = 'auto';
    prevBtn.style.pointerEvents = 'auto';
    }, 1500);
}

seeMoreButtons.forEach(button => {
    button.onclick = _ => {
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail')
        backBtn.style.opacity = 1;
        backBtn.style.pointerEvents = "auto"
    }
});
backBtn.onclick = _=> {
    carousel.classList.remove('showDetail');
    backBtn.style.opacity = 0;
    backBtn.style.pointerEvents = "none"
}