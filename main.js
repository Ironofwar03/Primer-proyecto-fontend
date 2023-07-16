const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuShoppingCart = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuShoppingCart.addEventListener('click', toggleShoppingMenu)

function toggleDesktopMenu(){
    const isAsideClose = aside.classList.contains('inactive')

    if(!isAsideClose){
        aside.classList.add('inactive')
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClose = aside.classList.contains('inactive')

    if(!isAsideClose){
        aside.classList.add('inactive')
    }
    
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingMenu(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive')

    if(!isMobileMenuClose){
        mobileMenu.classList.add('inactive')
    }

    if(!isDesktopMenuClose){
        desktopMenu.classList.add('inactive')
    }
    
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    img: './icons/bike.jpg'
})
productList.push({
    name: 'bike',
    price: 120,
    img: './icons/bike.jpg'
})
productList.push({
    name: 'bike',
    price: 120,
    img: './icons/bike.jpg'
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

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div')

    const productPrice = document.createElement('p')
    productPrice.innerText = '$' +  product.price
    const productName = document.createElement('p')
    productPrice.innerText = product.name

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