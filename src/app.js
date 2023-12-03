// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  const cheese = document.getElementById('cheese');
 
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}


function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.getElementById('tomato');
 
  if (state.Tomatoes) {
    tomato.style.display = "inherit";
  } else {
    tomato.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions = document.getElementById('onion');
 
  if (state.Onions) {
    onions.style.display = "inherit";
  } else {
    onions.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.getElementById('lettuce');
 
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !(state.Patty);
  render1Patty()
  renderAll();
};



// Trial 2 - Setup event listener for the cheese button

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !(state.Cheese);
  render1cheese()
  renderAll();
}

// Trial 2 - Setup event listener for the tomatoes button

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !(state.Tomatoes);
  render1tomato()
  renderAll();
}


// Trial 2 - Setup event listener for the onion button

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !(state.Onions);
  rende1ronion()
  renderAll();
}

// Trial 2 - Setup event listener for the lettuce button


document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !(state.Lettuce);
  render1lettuce()
  renderAll();
}


//Challenge 1 - Add/Remove the class active to the buttons based on state

function renderButtons(){
  if(!(state.Patty)){
    document.querySelector(".btn-patty").classList.remove("active")
  }
  else{
    document.querySelector(".btn-patty").classList.add("active")
  }
  if(!(state.Tomatoes)){
    document.querySelector(".btn-tomatoes").classList.remove("active")
  }
  else{
    document.querySelector(".btn-tomatoes").classList.add("active")
  }
  if(!(state.Lettuce)){
    document.querySelector(".btn-lettuce").classList.remove("active")
  }
  else{
    document.querySelector(".btn-lettuce").classList.add("active")
  }
  if(!(state.Onions)){
    document.querySelector(".btn-onions").classList.remove("active")
  }
  else{
    document.querySelector(".btn-onions").classList.add("active")
  }
  if(!(state.Cheese)){
    document.querySelector(".btn-cheese").classList.remove("active")
  }
  else{
    document.querySelector(".btn-cheese").classList.add("active")
  }
}



//Challenge 2 - Render only the items selected in the ingredients board based on the state

function renderIngredientsBoard(){
  if(!(state.Patty)){
    document.getElementById('patty').style.display='none'
  }
  else{
    document.getElementById('patty').style.display='block'


  }
  if(!(state.Tomatoes)){
    document.getElementById('tomato').style.display='none'
  }
  else{
    document.getElementById('tomato').style.display='block'


  }
  if(!(state.Lettuce)){
    document.getElementById('lettuce').style.display='none'
  }
  else{
    document.getElementById('lettuce').style.display='block'


  }
  if(!(state.Onions)){
    document.getElementById('onion').style.display='none'
  }
  else{
    document.getElementById('onion').style.display='block'


  }
  if(!(state.Cheese)){
    document.getElementById('cheese').style.display='none'
  }
  else{
    document.getElementById('cheese').style.display='block'
  }
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients


var totalPrice = 160;

const price = document.getElementById("price-details")
console.log(price)

function renderPrice(){
  price.innerText=totalPrice
  
}

function render1Patty(){
  if(state.Patty){
    totalPrice+=ingredients.Patty
  }
  else{
    totalPrice-=ingredients.Patty
  }
}
function render1cheese(){
  if(state.Cheese){
    totalPrice+=ingredients.Cheese
  }
  else{
    totalPrice-=ingredients.Cheese
  }
}
function rende1ronion(){
  if(state.Onions){
    totalPrice+=ingredients.Onions
  }
  else{
    totalPrice-=ingredients.Onions
  }
}
function render1lettuce(){
  if(state.Lettuce){
    totalPrice+=ingredients.Lettuce
  }
  else{
    totalPrice-=ingredients.Lettuce
  }
}
function render1tomato(){
  if(state.Tomatoes){
    totalPrice+=ingredients.Tomatoes
  }
  else{
    totalPrice-=ingredients.Tomatoes
  }
}