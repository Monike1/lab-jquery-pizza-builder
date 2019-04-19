// Write your Pizza Builder JavaScript in this file.
var pizza = $("#pizza");
var section = $("section");
var pepperoni = $("#pizza section.pep");
var mushrooms = $("#pizza section.mushroom");
var peppers = $("#pizza section.green-pepper");
var crust = $("#pizza section.crust");
var sauce = $("#pizza section section.sauce");
var btnPepperoni = $("button.btn.btn-pepperoni");
var btnMushrooms = $("button.btn.btn-mushrooms");
var btnPeppers = $("button.btn.btn-green-peppers");
var btnSauce = $("button.btn.btn-sauce");
var btnCrust = $("button.btn.btn-crust");
// var ingredients = $("aside ul");
var li = $("aside ul li");
var totalPriceStr = $("aside strong");
var totalPrice = 13;
var dolar = "$";

//default - remove white sauce and gluten free crust
function defaultPizza() {
  sauce.removeClass("sauce-white");
  btnSauce.removeClass("active");
  $( "li:contains('$3 white sauce')" ).hide();
  crust.removeClass("crust-gluten-free");
  btnCrust.removeClass("active");
  $( "li:contains('$5 gluten-free crust')" ).hide();
  totalPriceStr = totalPriceStr.html(`${dolar}${totalPrice}`);
}

defaultPizza();

// to change count the total price
function changeTotal(ingredientBtn, price) {
  if (!(ingredientBtn.hasClass("active"))) {
    totalPrice -= price;
  } else {
    totalPrice += price;
  }
  totalPriceStr = totalPriceStr.html(`${dolar}${totalPrice}`);
}



// add event listeners to buttons 
btnPepperoni.bind('click', function() {
  pepperoni.toggle();
  btnPepperoni.toggleClass("active");
  $( "li:contains('$1 pepperonni')" ).toggle();

  changeTotal(btnPepperoni, 1);
  
}); 

btnMushrooms.bind('click', function() {
  mushrooms.toggle();
  btnMushrooms.toggleClass("active");
  $( "li:contains('$1 mushrooms')" ).toggle();

  changeTotal(btnMushrooms, 1);
}); 

btnPeppers.bind('click', function() {
  peppers.toggle();
  btnPeppers.toggleClass("active");
  $( "li:contains('$1 green peppers')" ).toggle();

  changeTotal(btnPeppers, 1);
}); 

btnSauce.bind('click', function() {
  sauce.toggleClass("sauce-white")
  btnSauce.toggleClass("active");
  $( "li:contains('$3 white sauce')" ).toggle();

  changeTotal(btnSauce, 3);
});

btnCrust.bind('click', function() {
  crust.toggleClass("crust-gluten-free");
  btnCrust.toggleClass("active");
  $( "li:contains('$5 gluten-free crust')" ).toggle();

  changeTotal(btnCrust, 5);
});
