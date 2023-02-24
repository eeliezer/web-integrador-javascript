const cartMenu = document.querySelector('.cartContainer');
const products = document.querySelector('.productCardsContainer');
const categories = document.querySelector('.filterProducts');
const categoriesList = document.querySelectorAll('.category');
const btnLoad = document.getElementById('btnLoad');
const cartContainer = document.querySelector('.cartContainer');
const cartCloseBtn = document.querySelector('.cartClose');
const overlay = document.querySelector('.overlay');
const productsCart = document.querySelector('.cartMedium');
const total = document.querySelector('.totalPrice');
const subtotal = document.querySelector('.subtotalPrice');
const cartBubble = document.querySelector('.cartBubble');
const buyBtn = document.querySelector('.cartCheckout');
const successModal = document.querySelector('.addModal');
const envio = document.querySelector('.envio');
const addCart = document.querySelector('.productCardsContainer');
const deleteAllCart = document.querySelector('.deleteCart');
const insurancePriceText = document.querySelector('.insurancePrice');
const insuranceAddBtn = document.querySelector('.insuranceAdd');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const saveLocalStorage = cartList => {
  localStorage.setItem('cart', JSON.stringify(cartList));
}

const renderProduct = (product) => {
    const { id, nombre, precio, imagen, cantidad } = product;
    return `
    <div class="productCard dropShadow animatedDiv">
        <img class="imageProductCard" src="${imagen}" alt="Imagen Producto ${nombre}">
        <p class="productTitle">${nombre}</p>
        <div class="productDetail">
            <div class="productInforLeft">
                <p class="productPriceText">PRECIO</p>
                <p class="productPriceSet">ARS $${precio}</p>
            </div>
            <div class="productInfoRight">
                <p class="productQuantityText">DISPONIBLES</p>
                <p class="productQuantityLeft">${cantidad} UDS</p>
            </div>
        </div>
        <button class="addCart slideAnimatedAdd" data-id='${id}' data-nombre='${nombre}' data-precio='${precio}' data-imagen='${imagen}'>AGREGAR AL CARRITO</button>
    </div>
    `
}

const renderDividedProducts = (index = 0) => {
    products.innerHTML += productsController.dividedProducts[index]
    .map(renderProduct)
    .join('');
};

const renderFilteredProducts = category => {
    const productsList = listadoDeProductos.filter(
        product => product.category === category
    );
    products.innerHTML = productsList.map(renderProduct).join('');
}

const renderProducts = (index = 0, category = undefined) => {
    if(!category){
        renderDividedProducts(index);
        return;
    }
    renderFilteredProducts(category);
};

const changeShowMoreBtnState = category => {
    if(!category){
        btnLoad.classList.remove('hidden');
        return;
    }
    btnLoad.classList.add('hidden');
};

const changeBtnActiveState = selectedCategory => {
    const categories = [...categoriesList];
    categories.forEach(categoryBtn => {
        if(categoryBtn.dataset.category !== selectedCategory){
            categoryBtn.classList.remove('active');
            return;
        }
        categoryBtn.classList.add('active')
    });
};

const changeFilterState = e => {
    const selectedCategory = e.target.dataset.category;
    changeBtnActiveState(selectedCategory);
    changeShowMoreBtnState(selectedCategory);
};

const applyFilter = e => {
    if(!e.target.classList.contains('category')) return;
    changeFilterState(e);
    if(!e.target.dataset.category){
        products.innerHTML = '';
        renderProducts();
    } else{
        renderProducts(0, e.target.dataset.category);
        productsController.nextProductsIndex = 1;
    }
};

const isLastIndexOf = () => productsController.nextProductsIndex === productsController.productsLimit;

const showMoreProducts = () => {
    renderProducts(productsController.nextProductsIndex);
    productsController.nextProductsIndex++;
    if(isLastIndexOf()){
        btnLoad.classList.add('hidden');
    }
};

const toggleCart = () => {
  cartContainer.classList.toggle('openCart');

  if(cartContainer.classList.contains('openCart')){
      barsMenu.classList.remove('openMenu');
      overlay.classList.add('showOverlay')
      return
  }
  overlay.classList.toggle('showOverlay');
};

const closeCart = () => {
  cartContainer.classList.remove('openCart');
  if(overlay.classList.contains('showOverlay')){
      overlay.classList.remove('showOverlay');
  }
};

const clickOnOverlay = () => {
  barsMenu.classList.remove('openMenu');
  overlay.classList.remove('showOverlay');
  cartContainer.classList.remove('openCart');
};

const closeOnScroll = () => {
  if(
  !barsMenu.classList.contains('openMenu') &&
  !overlay.classList.contains('showOverlay')
  )
  return;
  clickOnOverlay();
};

const renderCartProduct = cartProduct => {
    const { id, nombre, precio, imagen, cantidad } = cartProduct;
    return `
        <div class="cartProduct">
            <img src="${imagen}" alt="Imagen Producto ${nombre}" class="cartImageProduct">
            <div class="cartDetail">
                <div class="mediumCartInfo">
                    <p class="cartProductName">${nombre}</p>
                </div>
                <div class="lowerCartInfo">
                    <div class="quantityInfo">
                        <p class="quantityTitle">CANTIDAD</p>
                        <div class="quantityInput">
                            <i class="fa-solid fa-minus quantityMinus" data-id=${id}></i>
                            <p class="quantityCounter">${cantidad} UDS</p>
                            <i class="fa-solid fa-plus quantityPlus" data-id=${id}></i>
                        </div>
                    </div>
                    <div class="priceInfo">
                        <p class="priceTitle">PRECIO</p>
                        <p class="priceCounter">ARS $${precio}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const renderCart = () => {
    if (!cart.length) {
      productsCart.innerHTML = `<p class="emptyCartText">CARRITO VACIO</p>`;
        return;
    }
    productsCart.innerHTML = cart.map(renderCartProduct).join('');
};

const getTotalCart = () => cart.reduce((acc, cur) => acc + Number(cur.precio) * cur.cantidad + Number(envio.textContent), 0);

const getSubTotalCart = () => cart.reduce((acc, cur) => acc + Number(cur.precio) * cur.cantidad, 0);

const showTotal = () => {
  total.innerHTML = `${getTotalCart().toFixed(2)}`
}

const showSubTotal = () => {
  subtotal.innerHTML = `${getSubTotalCart().toFixed(2)}`
}

const disableBtn = btn => {
  if (!cart.length) {
    btn.classList.add('disabled');
  } else {
    btn.classList.remove('disabled');
  }
};

const checkCartState = () => {
  saveLocalStorage(cart);
  renderCart(cart);
  showTotal(cart);
  showSubTotal(cart)
  disableBtn(buyBtn);
  renderCartBubble(cart);
  disableBtn(insuranceAddBtn);
  disableBtn(deleteAllCart);
};

const renderCartBubble = () => {
  cartBubble.textContent = cart.reduce((acc, cur) => acc + cur.cantidad, 0);
};

const addProduct = e => {
  if (!e.target.classList.contains('addCart')) return;
  const { id, nombre, precio, imagen} = e.target.dataset;

  const product = productData(id, nombre, precio, imagen);

  if (isExistingCartProduct(product)) {
    addUnitToProduct(product);
    showSuccesModal('Se agregó una unidad del producto al carrito');
  } else {
    createCartProduct(product);
    showSuccesModal('El producto se ha agregado al carrito');
  }
  
  checkCartState();
};

const showSuccesModal = msg => {
  successModal.classList.add('activeModal');
  successModal.textContent = msg;
  setTimeout(() => {
    successModal.classList.remove('activeModal');
  }, 1500);
};

const createCartProduct = product => {
  cart = [...cart, { ...product, cantidad: 1 }];
};

const addUnitToProduct = product => {
  cart = cart.map(cartProduct =>
    cartProduct.id === product.id
      ? { ...cartProduct, cantidad: cartProduct.cantidad + 1 }
      : cartProduct
  );
};

const isExistingCartProduct = product => {
  return cart.find(item => item.id === product.id);
};

const productData = (id, nombre, precio, imagen) => {
  return { id, nombre, precio, imagen };
};

const handleMinusBtnEvent = id => {
  const existingCartProduct = cart.find(item => item.id === id);

  if (existingCartProduct.cantidad === 1) {
    if (window.confirm('¿Desea Eliminar el producto del carrito?')) {
      removeProductFromCart(existingCartProduct);
    }

    return;
  }
  substractProductUnit(existingCartProduct);
};

const substractProductUnit = existingCartProduct => {
  cart = cart.map(product => {
    return product.id === existingCartProduct.id
      ? { ...product, cantidad: Number(product.cantidad) - 1 }
      : product;
  });
};

const removeProductFromCart = existingCartProduct => {
  cart = cart.filter(product => product.id !== existingCartProduct.id);
  checkCartState();
};

const handlePlusBtnEvent = id => {
  const existingCartProduct = cart.find(item => item.id === id);
  addUnitToProduct(existingCartProduct);
};

const handleQuantity = e => {
  if (e.target.classList.contains('quantityMinus')) {
    handleMinusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains('quantityPlus')) {
    handlePlusBtnEvent(e.target.dataset.id);
  }
  checkCartState();
};

const resetCartItems = () => {
  cart = [];
  checkCartState();
};

const completeCartAction = (confirmMsg, successMsg) => {
  if (!cart.length) return;
  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};

const completeBuy = () => {
  completeCartAction('¿Desea completar su compra?', '¡Gracias por tu compra!');
};

const deleteCart = () => {
  completeCartAction('¿Desea borrar todo?', 'No hay productos en el carrito');
};

const addInsuranceAction = () => {
  if (!cart.length || insuranceAddBtn.classList.contains('disabled')) return;
  total.innerHTML = `ARS $${Number(total.textContent) + Number(insurancePriceText.textContent)}`;
  insuranceAddBtn.classList.add('disabled');
}

const init = () =>{
    renderProducts();
    categories.addEventListener('click', applyFilter);
    btnLoad.addEventListener('click', showMoreProducts);
    cartBtn.addEventListener('click', toggleCart);
    overlay.addEventListener('click', clickOnOverlay);
    window.addEventListener('scroll', closeOnScroll);
    cartCloseBtn.addEventListener('click', closeCart);
    document.addEventListener('DOMContentLoaded', renderCart);
    document.addEventListener('DOMContentLoaded', showTotal)
    document.addEventListener('DOMContentLoaded', showSubTotal);
    addCart.addEventListener('click', addProduct)
    productsCart.addEventListener('click', handleQuantity);
    buyBtn.addEventListener('click', completeBuy);
    deleteAllCart.addEventListener('click', deleteCart);
    insuranceAddBtn.addEventListener('click', addInsuranceAction);
    disableBtn(buyBtn);
    disableBtn(deleteAllCart);
    disableBtn(insuranceAddBtn);
    renderCartBubble(cart);
};

window.addEventListener('scroll', function(e) {
    navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolling', window.scrollY > 100); 
});

init();

document.addEventListener('DOMContentLoaded', function() {
  let parent = document.querySelector('.splitview'),
      topPanel = parent.querySelector('.top'),
      handle = parent.querySelector('.handle'),
      skewHack = 0,
      delta = 0;
  if (parent.className.indexOf('skewed') != -1) {
      skewHack = 1000;
  }

  parent.addEventListener('mousemove', function(event) {
      delta = (event.clientX - window.innerWidth / 2) * 0.6;
      handle.style.left = event.clientX + delta + 'px';
      topPanel.style.width = event.clientX + skewHack + delta + 'px';
  });
});