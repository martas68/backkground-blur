const containerEl = document.querySelector(".container");

const btnEl = document.querySelector(".btn");

const popupContainerEl = document.querySelector(".popup-container");

const closeIconEl = document.querySelector(".close-icon");
// when btnEL is pressed add active class to the cointainerEl
btnEl.addEventListener("click", ()=>{
    containerEl.classList.add("active");
    //and remove active class from popUpContainerEl
    popupContainerEl.classList.remove("active");
});
    // and reverse it when closing
closeIconEl.addEventListener("click", ()=>{
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
})