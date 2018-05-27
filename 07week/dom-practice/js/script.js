'use strict';

window.onload = function() {
  // You code here
  createListCountHeaders();
  addItemBox();
  addItemToCart();
  // Alert for the number of items in cart
  // alert(document.getElementsByTagName('li').length);
  updateCartNumber();
  addRemoveButtons();
}

//inserts a h2 header for the number of items in the cart.
function createListCountHeaders(){
  let h2 = document.createElement('h2');
  h2.setAttribute('id', 'itemCount');
  h2.innerHTML = 'You have ' + document.getElementsByTagName('ul')[0].children.length
   + ' items in your shopping cart';
  document.getElementsByTagName("h1")[0].append(h2);
}
// create the box and button to add an item to the Cart
function addItemBox(){
  let textField = document.createElement("input");
  textField.setAttribute("type", "text");
  textField.setAttribute('id', 'itemInput');
  textField.setAttribute("placeholder", "enter item name");
  document.getElementsByTagName('ul')[0].after(textField);
}
//insert a text field for item entry and a button to add the item to the list
function addItemToCart(){
  let addButton = document.createElement("button");
  addButton.innerHTML = "Add Item";
  document.getElementById('itemInput').after(addButton);
  addButton.onclick=addItem;
}
//adds the text box input to the end of the cart list
function addItem(event){
  event.preventDefault();

  let newItemText = document.getElementById("itemInput").value;
  let newItem = document.createElement("li");
  newItem.innerHTML=newItemText;
  document.getElementsByTagName('ul')[0].appendChild(newItem);
  addRemoveButton(newItem);
  updateCartNumber();
}
//updates the cart list item count when ever an item is added or removed from
//the list.
function updateCartNumber(){
  document.getElementById('itemCount').innerHTML = 'You have ' +
  document.getElementsByTagName('ul')[0].children.length +
   ' items in your shopping cart';
}
function addRemoveButton(item){
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove Item";
  item.append(removeButton);
  removeItem.onclick = removeItem;
}
function addRemoveButtons(){
  for (let i = 0; i < document.getElementsByTagName("ul")[0].children.length; i++){
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove Item";
    document.getElementsByTagName("li")[i].appendChild(removeButton);
    removeButton.onclick = removeItem;
  }
}
function removeItem(){
  this.closest('li').remove();
  updateCartNumber();
}
