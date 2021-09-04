const closeBtn = document.querySelector('.close__btn');
const showBtn = document.querySelector('.show__btn');
const navMobile = document.querySelector('.nav__mobile');

closeBtn.addEventListener('click', function(e){
    e.target.classList.add("hide");
    navMobile.classList.add("hide");
});

showBtn.addEventListener('click', function(e){
    closeBtn.classList.remove("hide");
    navMobile.classList.remove("hide");
});