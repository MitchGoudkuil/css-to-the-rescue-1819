let fries = document.querySelector('.header-navigation-item__fries');
let drink = document.querySelector('.header-navigation-item__drink');
let steak = document.querySelector('.header-navigation-item__steak');

let fryBackground = document.querySelector('.background-containers__fry');
let drinkBackground = document.querySelector('.background-containers__drink');
let steakBackground = document.querySelector('.background-containers__steak');

fries.addEventListener("click", function(){
  fryBackground.classList.toggle("nowidth")
  fryBackground.style.zIndex = 2

  drinkBackground.classList.add("nowidth")
  steakBackground.classList.add("nowidth")
})

drink.addEventListener("click", function(){
  drinkBackground.classList.toggle("nowidth")
  drinkBackground.style.zIndex = 2

  fryBackground.classList.add("nowidth")
})

steak.addEventListener("click", function(){
  steakBackground.classList.toggle("nowidth")
  steakBackground.style.zIndex = 2

  drinkBackground.classList.add("nowidth")
  fryBackground.classList.add("nowidth")
})
