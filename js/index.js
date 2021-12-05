// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const displaySubTotal = product.querySelector('.subtotal span');
  
  displaySubTotal.innerHTML = parseInt(quantity.value) * price.innerHTML;

}

function calculateAll() {
  // ITERATION 2
  const multipleProducts = document.querySelectorAll('.product');

  multipleProducts.forEach((singleProduct) => {
    updateSubtotal(singleProduct)
  });

  // ITERATION 3
  const getSubTotal = document.querySelectorAll('.subtotal span');
  const total = document.querySelector('#total-value span')

  const subTotalValues = Array.from(getSubTotal).map(subTotals => {
    return parseInt(subTotals.innerHTML)
  })
  const totalValue = subTotalValues.reduce((acc, value) => {
    return acc + value
    })
    total.innerHTML = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  //... your code goes here
  const removeThis = target.parentNode.parentNode;
  removeThis.remove(removeThis);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  
// create new table row elements
const newRow = document.createElement('tr');

const newNameCol = document.createElement('td');
const newPriceCol = document.createElement('td');
const newQuantityCol = document.createElement('td');
const newSubtotalCol = document.createElement('td');
const newRemoveCol = document.createElement('td');

// get input values of new product name and price
let newProduct = document.querySelectorAll('.create-product input');

newPriceCol.innerHTML = '$';
newSubtotalCol.innerHTML = '$';

const newNameSpan = document.createElement('span');
newNameSpan.innerHTML = newProduct[0].value;
newNameCol.appendChild(newNameSpan);

const newPriceSpan = document.createElement('span');
newPriceSpan.innerHTML = parseInt(newProduct[1].value);
newPriceCol.appendChild(newPriceSpan);

const newQuantityInput = document.createElement('input');
newQuantityInput.setAttribute('type', 'number');
newQuantityInput.setAttribute('value', '0');
newQuantityInput.setAttribute('min', '0');
newQuantityCol.appendChild(newQuantityInput)

const newSubtotalSpan = document.createElement('span');
newSubtotalCol.appendChild(newSubtotalSpan);

const newRemoveBtn = document.createElement('button');
newRemoveBtn.className = 'btn btn-remove';
newRemoveBtn.innerHTML = 'Remove';

// add remove function
newRemoveCol.appendChild(newRemoveBtn);
newRemoveBtn.addEventListener('click', removeProduct);

// add class names
newRow.className = 'product';
newPriceCol.className = 'price';
newQuantityCol.className = 'quantity';
newSubtotalCol.className = 'subtotal';
newRemoveCol.className = 'action';

// append all elements to new row
newRow.appendChild(newNameCol);
newRow.appendChild(newPriceCol);
newRow.appendChild(newQuantityCol);
newRow.appendChild(newSubtotalCol);
newRow.appendChild(newRemoveCol);

// append new row to table
const parentTable = document.querySelector('.product-table')
parentTable.appendChild(newRow);
}


// add function to clear the input fields
function clearInput() {
  const toClear = document.querySelectorAll('.create-product input');
  toClear[0].value = '';
  toClear[1].value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const getRemoveBtns = document.querySelectorAll('.btn.btn-remove');
  getRemoveBtns.forEach((addRemoveBtn) => {
    addRemoveBtn.addEventListener('click', removeProduct)
  })

  const addNewProductBtn = document.querySelector('#create')
  addNewProductBtn.addEventListener('click', createProduct)
  addNewProductBtn.addEventListener('click', clearInput)
});
