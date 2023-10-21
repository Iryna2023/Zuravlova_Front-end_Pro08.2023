let store = {
    categories: ['+ Квіти', '+ Підставки для вазонів', '+ Вазони для квітів'],
    products: new Map([
        [1, {id: 1, name: 'Орхідея', category: '+ Квіти', description: 'Орхідея (Phalaenopsis) "Lemon", 1 саджанець в упаковці (кімнатний), Нідерланди.', price: 540.00}],
        [2, {id: 2, name: 'Плющ', category: '+ Квіти', description: 'Плющ колхидський 2-х річний "Dentata Variegata", C2, висота 40-90см, 1 саджанець в упаковці.', price: 480.00}],
        [3, {id: 3, name: 'Підставка кована велика', category: '+ Підставки для вазонів', description: 'Підставка кована для квітів "Вежа" на 9 вазонів.', price: 2500.00}],
        [4, {id: 4, name: 'Підставка настінна', category: '+ Підставки для вазонів', description: 'Підставка для квітів на 15 кілець "Пеларгонія".', price: 1500.00}],
        [5, {id: 5, name: 'Вазон срібний великий', category: '+ Вазони для квітів', description: 'ВАЗОН ДЛЯ КВІТІВ ВИСОКИЙ ПІДЛОГОВИЙ, 7Л, КРУГЛИЙ ГЛЯНСОВИЙ (Срібний).', price: 600.00}],
        [6, {id: 6, name: 'Вазон чорний великий', category: '+ Вазони для квітів', description: 'ВАЗОН ДЛЯ КВІТІВ ВИСОКИЙ ПІДЛОГОВИЙ, 5Л, КРУГЛИЙ ГЛЯНСОВИЙ (Чорний).', price: 800}],
    ]),

    basket: [],
    addProductToBasket(productId) {
        const product = this.products.get(productId);
        if (product) {
            this.basket.push(product);
            this.updateBasketCount();
            localStorage.setItem('basket', JSON.stringify(this.basket));
        }
    },

    removeProductFromBasket(productId) {
        const productIndex = this.basket.findIndex(product => product.id === productId);
        if (productIndex !== -1) {
            this.basket.splice(productIndex, 1);
            this.updateBasketCount();
            localStorage.setItem('basket', JSON.stringify(this.basket));
        }
    },

    updateBasketCount() {
        const basketLink = document.getElementById('basket-link');
        basketLink.textContent = `Basket (${this.basket.length})`;
    }
};

function displayCategories() {
    const categoriesContainer = document.getElementById('categories-container');
    categoriesContainer.className = 'category';
    categoriesContainer.innerHTML = '';
    store.categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.textContent = category;
        categoryElement.addEventListener('click', () => {
            displayProducts(category);
            window.location.hash = '/' + category;
        });
        categoriesContainer.appendChild(categoryElement);
    });
}

function displayProducts(category) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = ''; 
    const products = Array.from(store.products.values()).filter(product => product.category===category);
    const productList = document.createElement('ul');
    products.forEach(product=> {
        const productElement = document.createElement('li');
        productElement.className = 'product';
        productElement.textContent = `${product.name} -> ${product.price}грн.`;
        productElement.addEventListener('click', () => {
            displayProductDetails(product.id);
            window.location.hash = '/' + category + '/' + product.id;
        });
        productList.appendChild(productElement);
    });
    productsContainer.appendChild(productList);

    const productDetailsContainer = document.getElementById('product-details-container');
    productDetailsContainer.innerHTML = '';
}

function displayProductDetails(productId) {
    const productDetailsContainer = document.getElementById('product-details-container');
    productDetailsContainer.innerHTML = '';
    const product = store.products.get(productId);
    if (product) {
        const productDetailsElement = document.createElement('div');
        productDetailsElement.textContent = `${product.name}: ${product.price}грн.`;
        const productDescription = document.createElement('p');
    productDescription.textContent = product.description;
    productDetailsElement.appendChild(productDescription);

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Купити';
        buyButton.addEventListener('click', () => {
            store.addProductToBasket(product.id);
            const messageElement = document.getElementById('message');
            messageElement.textContent = 'Товар куплений!';
            setTimeout(() => {
                messageElement.textContent = '';
            }, 1000);
            document.getElementById('products-container').innerHTML = '';
            document.getElementById('product-details-container').innerHTML = '';
            displayCategories();
        });

        productDetailsElement.appendChild(buyButton);
        productDetailsContainer.appendChild(productDetailsElement);
    }
}

displayCategories();

function displayBasket() {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';
    store.basket.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.textContent = `${product.name} - ${product.price}грн.`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Видалити';
        removeButton.addEventListener('click', () => {
            store.removeProductFromBasket(product.id);
            displayBasket();
        });
        productElement.appendChild(removeButton);
        productsContainer.appendChild(productElement);
    });
}

document.getElementById('basket-link').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('product-details-container').innerHTML = '';
    displayBasket();
    window.location.hash = '/basket';
});

document.getElementById('store-name').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('products-container').innerHTML = '';
    document.getElementById('product-details-container').innerHTML = '';
    displayCategories();
    window.location.hash = '/';
});

window.addEventListener("popstate", function(event) {
    const hash = window.location.hash;
    if (hash === '/basket') {
        displayBasket();
    } else if (hash.startsWith('/+')) {
        displayProducts(hash.slice(1));
    } else {
        displayCategories();
    }
});

window.addEventListener("hashchange", function() {
    const hash = window.location.hash;
    if (hash === '/basket') {
        displayBasket();
    } else if (hash.startsWith('/+')) {
        displayProducts(hash.slice(1));
    } else {
        displayCategories();
    }
});

store.basket = JSON.parse(localStorage.getItem('basket')) || [];
store.updateBasketCount();