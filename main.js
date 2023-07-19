const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuShoppingCart = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.getElementById('shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const asideProductDetail = document.querySelector('#productDetail')
const closeAsideDetails = document.querySelector('.product-detail-close')


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuShoppingCart.addEventListener('click', toggleShoppingMenu)
closeAsideDetails.addEventListener('click', closeProductDetail)


function toggleDesktopMenu(){
    shoppingCartContainer.classList.add('inactive')
    asideProductDetail.classList.add('inactive')
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    shoppingCartContainer.classList.add('inactive')
    asideProductDetail.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingMenu(){
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    asideProductDetail.classList.add('inactive')
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetail(){
    asideProductDetail.classList.remove('inactive')
    shoppingCartContainer.classList.add('inactive')
}

function closeProductDetail(){
    asideProductDetail.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: './icons/bike.jpg',
    des: 'its functional and practical design'
})
productList.push({
    name: 'PC',
    price: 2200,
    img: './icons/PC.png',
    des: 'its functional and practical design'
})
productList.push({
    name: 'TV',
    price: 700,
    img: './icons/TV.png',
    des: 'its functional and practical design'
})


/* <div class="product-card">
        <img src="./icons/bike.jpg" alt="" class="product-img">
        <div class="product-info">
            <div>
                <p>$121,00</p>
                <p>Bike</p>
            </div>

            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    </div> */
    
for (product of productList){ // if we use for(x in y), x will be the index in the array not the object or variable  
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.img)
    productImg.addEventListener('click',openProductDetail)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div')

    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + product.price
    const productName = document.createElement('p')
    productName.innerText = product.name

    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)

    const productInfoFigure = document.createElement('figure');
    const productCart = document.createElement('img');
    productCart.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productCart)

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard)
}
{/* <img src="./icons/bike.jpg" alt="bike">
    <div class="product-info">
        <p>$35,00</p>
        <p>Bike</p>
        <p>With its functional and practical design, 
            this bike also fulfills a decorative function, 
            adding personality and a retro-vintage aesthetic 
            to your house.
        </p>
        <button class="primary-button add-to-cart">
            <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
                Add to cart
        </button> 
    </div>  */}
for(detail of productList){
    const detailImg = document.createElement('img')
    detailImg.setAttribute('src', detail.img)

    const detailInfo = document.createElement('div')
    detailInfo.classList.add('product-info')
    detailInfo.classList.add(detail.name)

    const productDetailPrice = document.createElement('p')
    productDetailPrice.innerText = '$' + detail.price

    const productDetailName = document.createElement('p')
    productDetailName.innerText = detail.name

    const productDetail = document.createElement('p')
    productDetail.innerText = detail.des

    detailInfo.appendChild(productDetailPrice)
    detailInfo.appendChild(productDetailName)
    detailInfo.appendChild(productDetail)

    const addCartBtn = document.createElement('button')
    addCartBtn.classList.add('primary-button')
    addCartBtn.classList.add('add-to-cart')

    const cartImg = document.createElement('img')
    cartImg.setAttribute('src', './icons/bt_add_to_cart.svg')
    const cartText = document.createElement('p')
    cartText.innerText = 'Add to cart'

    addCartBtn.appendChild(cartImg)
    addCartBtn.appendChild(cartText)

    detailInfo.appendChild(addCartBtn)

    asideProductDetail.appendChild(detailImg)
    asideProductDetail.appendChild(detailInfo)
}
