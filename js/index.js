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
  const removeThis = target.parentNode.parentNode
  removeThis.remove(removeThis);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let newProductName = document.querySelectorAll('.create-product input');
  
  let newTableRowContent = document.createElement('div')
  newTableRowContent.innerHTML = newProductName
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
});
