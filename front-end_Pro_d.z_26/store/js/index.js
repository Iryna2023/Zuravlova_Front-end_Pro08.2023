const Category = {
    Flowers: '+ Квіти',
    FlowerpotStands: '+ Підставки для вазонів',
    Flowerpots: '+ Вазони для квітів',
};

let store = {
    categories: Object.values(Category),
    products: new Map([
        [Category.Flowers, [
            {id: 1, name: 'Орхідея', category: Category.Flowers, description: 'Орхідея (Phalaenopsis) "Lemon", 1 саджанець в упаковці (кімнатний), Нідерланди.', price: 540.00},
            {id: 2, name: 'Плющ', category: Category.Flowers, description: 'Плющ колхидський 2-х річний "Dentata Variegata", C2, висота 40-90см, 1 саджанець в упаковці.', price: 480.00}
        ]],
        [Category.FlowerpotStands, [
            {id: 3, name: 'Підставка кована велика', category: Category.FlowerpotStands, description: 'Підставка кована для квітів "Вежа" на 9 вазонів.', price: 2500.00},
            {id: 4, name: 'Підставка настінна', category: Category.FlowerpotStands, description: 'Підставка для квітів на 15 кілець "Пеларгонія".', price: 1500.00}
        ]],
        [Category.Flowerpots, [
            {id: 5, name: 'Вазон срібний великий', category: Category.Flowerpots, description: 'ВАЗОН ДЛЯ КВІТІВ ВИСОКИЙ ПІДЛОГОВИЙ, 7Л, КРУГЛИЙ ГЛЯНСОВИЙ (Срібний).', price: 600.00},
            {id: 6, name: 'Вазон чорний великий', category: Category.Flowerpots, description: 'ВАЗОН ДЛЯ КВІТІВ ВИСОКИЙ ПІДЛОГОВИЙ, 5Л, КРУГЛИЙ ГЛЯНСОВИЙ (Чорний).', price: 800}
        ]],
    ]),

    basket: [],
    getProductById(productId) {
        for (let products of this.products.values()) {
            for (let product of products) {
                if (product.id === productId) {
                    return product;
                }
            }
        }
        return null;
    },
    addProductToBasket(productId) {
        const product = this.getProductById(productId);
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
        ui.basketLink.textContent = `Basket (${this.basket.length})`;
    }
};

const ui = {
    basketLink: document.getElementById('basket-link'),
    categoriesContainer: document.getElementById('categories-container'),
    productsContainer: document.getElementById('products-container'),
    productDetailsContainer: document.getElementById('product-details-container'),
    messageElement: document.getElementById('message'),
};

function displayCategories() {
    ui.categoriesContainer.className = 'category';
    ui.categoriesContainer.innerHTML = '';
    store.categories.forEach(category => {
        const categoryElement = document.createElement('div');
        const textElement = document.createElement('div');
        textElement.textContent = category;
        categoryElement.appendChild(textElement);
        categoryElement.addEventListener('click', () => {
            eventedPushState({page: category}, '', '/' + category);
        });
        ui.categoriesContainer.appendChild(categoryElement);
    });
}

function displayProducts(category) {
    ui.productsContainer.innerHTML = ''; 
    const products = store.products.get(category);
    if (products) {
        const productList = document.createElement('ul');
        products.forEach(product=> {
            const productElement = document.createElement('li');
            productElement.textContent = `${product.name} -> ${product.price}грн.`;
            productElement.addEventListener('click', () => {
                eventedPushState({page: category + '/' + product.id}, '', '/' + category + '/' + product.id);
            });
            ui.productsContainer.appendChild(productElement);
        });
        ui.productsContainer.appendChild(productList);
        }

    ui.productDetailsContainer.innerHTML = '';
}

function displayProductDetails(productId) {
    ui.productDetailsContainer.innerHTML = '';
    let product;
    for (let products of store.products.values()) {
        for (let prod of products) {
            if (prod.id === Number(productId)) {
                product = prod;
                break;
            }
        }
        if (product) break;
    }
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
            ui.messageElement.textContent = 'Товар куплений!';
            setTimeout(() => {
                ui.messageElement.textContent = '';
            }, 1000);
            document.getElementById('products-container').innerHTML = '';
            document.getElementById('product-details-container').innerHTML = '';
            eventedPushState({page: 'Home'}, '', '/');
        });

        productDetailsElement.appendChild(buyButton);
        ui.productDetailsContainer.appendChild(productDetailsElement);
    }
}

displayCategories();

function displayBasket() {
    ui.productsContainer.innerHTML = '';
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
        ui.productsContainer.appendChild(productElement);
    });
}

document.getElementById('basket-link').addEventListener('click', (event) => {
    event.preventDefault();
    ui.productDetailsContainer.innerHTML = '';
    eventedPushState({page: 'Basket'}, '', '/basket');
});

document.getElementById('store-name').addEventListener('click', (event) => {
    event.preventDefault();
    ui.productsContainer.innerHTML = '';
    ui.productDetailsContainer.innerHTML = '';
    eventedPushState({page: 'Home'}, '', '/');
});

window.addEventListener("popstate", function(event) {
    if (event.state.page === '/basket') {
        displayBasket();
    } else if (event.state.page.startsWith('/+')) {
        displayProducts(event.state.page.slice(1));
    } else {
        displayCategories();
    }
});

store.basket = JSON.parse(localStorage.getItem('basket')) || [];
store.updateBasketCount();

function eventedPushState(state, title, url) {
    let pushChangeEvent = new CustomEvent('onpushstate', {
      detail: {
        state,
        title,
        url,
      },
    });
    document.dispatchEvent(pushChangeEvent);
    return history.pushState(state, title, url);
}

document.addEventListener(
    'onpushstate',
    function (event) {
        const url = event.detail.url;
        if (url === '/basket') {
            displayBasket();
        } else if (url.startsWith('/+')) {
            const parts = url.slice(1).split('/');
        if (parts.length > 1) {
            displayProductDetails(parts[1]);
        } else {
            displayProducts(parts[0]);
        }
        } else {
        displayCategories();
      }
    },
    false
);

window.store = store;

fetch('/api/data')
    .then(response => response.json())
    .then(data => {
        // Ваш код для обробки даних
    })
    .catch(error => console.error('Помилка:', error));

console.log('Categories:', store.categories);
console.log('Products:', store.products);
console.log('Basket:', store.basket);