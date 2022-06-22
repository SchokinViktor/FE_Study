let dataItem = [];
let filterArr = [];
const container = document.querySelector('.container');
const filterList = document.querySelector('.filter-list');
filterList.addEventListener('click', (e) => {
    const item = e.target.closest('li');
    if(item) {
        filter(item);
    }
});
container.addEventListener('click', (event) => {
    const block = event.target.closest('.product-block');
    if(block) {
        console.log(block.dataset.id);
    }
})
load();

function load() {
    fetch(`https://dummyjson.com/products`).then(response => {
        return response.json();
    }).then(data => {
        dataItem = data.products;

        dataItem.map((item) => {
            filterArr.push(item.category);

            const product = `
                <div class="product-block" data-id="${item.id}">
                    <div class="img-holder">
                        <img src="${item.images[0]}" alt="">
                    </div>
                    <div class="info">
                        <span class="category">${item.category}</span>
                        <h3>${item.brand}</h3>
                        <strong>${item.price}</strong>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', product);
        });
        let list = [];

        const tempArray = filterArr.sort();

        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i + 1] !== tempArray[i]) {
                list.push(tempArray[i]);
            }
        }

        list.map((list) => {
            const listItem = `<li>${list}</li>`;
            filterList.insertAdjacentHTML('beforeend', listItem);
        });
    }).catch((error) => console.log(error));
}

function filter(item) {
    const cat = item.textContent;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

    if (cat != 'all') {
        dataItem.map((item) => {
            console.log(item);
            if (item.category == cat) {
                const product = `
                <div class="product-block">
                    <div class="img-holder">
                        <img src="${item.images[0]}" alt="">
                    </div>
                    <div class="info">
                        <span class="category">${item.category}</span>
                        <h3>${item.brand}</h3>
                        <strong>${item.price}</strong>
                    </div>
                </div>
            `;
                container.insertAdjacentHTML('beforeend', product);
            }
        });
    } else {
        dataItem.map((item) => {
            filterArr.push(item.category);

            const product = `
                <div class="product-block">
                    <div class="img-holder">
                        <img src="${item.images[0]}" alt="">
                    </div>
                    <div class="info">
                        <span class="category">${item.category}</span>
                        <h3>${item.brand}</h3>
                        <strong>${item.price}</strong>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', product);
        });
    }
}



// Homework (modal-card)
const modalHolder = document.querySelector('.modal-holder');

class ModalCard {
    constructor(id, thumbnail, category, brand, title, price, discount, rating, descriotion, stock, altImg ='product') {
        this.id = id;
        this.thumbnail = thumbnail;
        this.altImg = altImg;
        this.category = category;
        this.brand = brand;
        this.title = title;
        this.price = price;
        this.discount = discount;
        this.rating = rating;
        this.descriotion = descriotion;
        this.stock = stock;
    }

    render() {
        const modalCard = document.createElement('div');
        modalCard.classList.add('modal-card');
        
        modalCard.innerHTML = `
        <div class="product-img-holder">
            <img src="${this.thumbnail}" alt="${this.altImg}">
        </div>
        <div class="category">
            <div class="category"><span class="list-item-category">Category:</span>${this.category}</div>
            <div class="brand"><span class="list-item-category">Brand:</span>${this.brand}</div>
        </div>
        <h2 class="product-card-title">${this.title}</h2>
        <ul class="product-card-list">
            <li> <span class="list-item-category">Price:</span>${this.price} with ${this.discount} dicsount</li>
            <li> <span class="list-item-category">Rating:</span>${this.rating}</li>
            <li> <span class="list-item-category">Description:</span>${this.descriotion}</li>
            <li> <span class="list-item-category">Stock:</span>${this.stock}</li>
            <li> <span class="list-item-category">Id:</span>${this.id}</li>
        </ul>
        `;

        modalHolder.append(modalCard);
        modalHolder.classList.add('show');
    }

}

async function getProduct(url) {
    const resp = await fetch(url).then(response => {
        return response.json();
    })
    .then(data => {
        const products = data.products;
        return products;
    });

    return await resp;
}
    
    
console.log(getProduct(`https://dummyjson.com/products`));

const productListParent = document.querySelector('.container');
productListParent.addEventListener('click', e => {
    let target = e.target.closest('.product-block')
    if(target) {
        const targetId = target.dataset.id;
        
        let product = {};
            //index = 0;
        getProduct(`https://dummyjson.com/products`)
        .then(productsObj => {
            for (const key in productsObj[targetId - 1]) {
                
                product[key] = productsObj[targetId- 1][key];
            }
            return product;
        })

        .then(product => {
            console.log(product);
            new ModalCard(product.id, 
                product.thumbnail, 
                product.category, 
                product.brand, 
                product.title, 
                product.price, 
                product.discount, 
                product.rating, 
                product.descriotion, 
                product.stock, 
                product.altImg ='product')
                .render();
        });
       
    
    }
});

modalHolder.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal-holder')) {
        modalHolder.classList.remove('show');
    }
});
