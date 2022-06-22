const mustangs = [{
        year: 1969,
        generation: 1,
        cilinders: 'v8',
        model: 'boss 302',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhoIdxof_GzcsftuJnvTToj_7iJ0OjWxcoLw&usqp=CAU',
    },
    {
        year: 1969,
        generation: 1,
        cilinders: 'v8',
        model: 'boss 429',
        image: 'data:image/jpeg;base64,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',

    },
    {
        year: 2015,
        generation: 5,
        cilinders: 'v8',
        model: 'boss 302',
        image: 'https://www.fresher.ru/manager_content/images/ford-mustang-boss-302/big/1.jpg',
    },
    {
        year: 2005,
        generation: 1,
        cilinders: 'v8',
        model: 'GT',
        image: 'data:image/jpeg;base64,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',

    },
    {
        year: 2015,
        generation: 6,
        cilinders: 'v8',
        model: 'GT',
        image: 'https://cdn3.riastatic.com/photos/ir/new/auto/photo/ford_mustang__451469838-620x415x70.jpg',
    },
];

const filterList = document.querySelector('.filter-list');
const contentHolder = document.querySelector('.content-holder');
let filterActive;

filterList.addEventListener('click', (event) => {
    const list = event.target.closest('li');
    if (list) {
        filter(list);
    }
})

load();

function loadCars() {
    mustangs.forEach((item) => {
        const block = `
            <div class="item">
                <div class="img-holder">
                    <img src="${item.image}" alt="mustang">
                </div>
                <ul class="info-list">
                    <li>${item.year}</li>
                    <li>${item.generation}</li>
                    <li>${item.cilinders}</li>
                    <li>${item.model}</li>
                </ul>
            </div>
        `;
        contentHolder.insertAdjacentHTML('beforeend', block);
    });
}

function load() {
    const filterList = document.querySelector('.filter-list');
    const filterArr = [];

    mustangs.forEach((item) => {
        filterArr.push(item.year);
        const block = `
            <div class="item">
                <div class="img-holder">
                    <a href ="${item.image}" data-fancybox="gallery" data-caption="${item.model}">
                        <img src="${item.image}" alt="mustang">
                    </a>
                </div>
                <ul class="info-list">
                    <li>${item.year}</li>
                    <li>${item.generation}</li>
                    <li>${item.cilinders}</li>
                    <li>${item.model}</li>
                </ul>
            </div>
        `;
        contentHolder.insertAdjacentHTML('beforeend', block);
    });
    let list = [];

    const tempArray = filterArr.sort();


    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i + 1] !== tempArray[i]) {
            list.push(tempArray[i]);
        }
    }

    list.forEach((list) => {
        const listItem = `<li class = 'year-item'>${list}</li>`;
        filterList.insertAdjacentHTML('beforeend', listItem);
    });
}

function filter(item) {
    const year = item.textContent;

    if (filterActive) {
        filterActive.classList.remove('active');
    }

    filterActive = item;
    filterActive.classList.add('active');

    while (contentHolder.firstChild) {
        contentHolder.removeChild(contentHolder.firstChild);
    };

    const inputValue = document.querySelector('.search-input').value;
    if( inputValue != '') {
        mustangs.forEach((i) => {
            if (i.year == year && i.model.toLowerCase() == inputValue) {
                console.log(year);
                const block = `
            <div class="item">
                <div class="img-holder">
                    <img src="${i.image}" alt="mustang">
                </div>
                <ul class="info-list">
                    <li>${i.year}</li>
                    <li>${i.generation}</li>
                    <li>${i.cilinders}</li>
                    <li>${i.model}</li>
                </ul>
            </div>
        `;
                contentHolder.insertAdjacentHTML('beforeend', block);
            }
        });
    } else {
        if (year != 'all') {
            mustangs.forEach((i) => {
                if (i.year == year) {
                    console.log(year);
                    const block = `
                <div class="item">
                    <div class="img-holder">
                        <img src="${i.image}" alt="mustang">
                    </div>
                    <ul class="info-list">
                        <li>${i.year}</li>
                        <li>${i.generation}</li>
                        <li>${i.cilinders}</li>
                        <li>${i.model}</li>
                    </ul>
                </div>
            `;
                    contentHolder.insertAdjacentHTML('beforeend', block);
                }
            });
        } else {
            loadCars();
        } 
    }
   
}


// INPUT
const input = document.querySelector('.search-input');
input.addEventListener('input', search);


function search(e) {
    let inputValue = (e.target.value).toLowerCase();
    
    const filterList = document.querySelectorAll('.year-item');
    let filterParameter = 'all',
        filterListItem;
    filterList.forEach(item => {
        if(item.classList.contains('active')) {
            filterParameter = item.textContent;
            filterListItem = item;
        }
    });

    if(inputValue == '') {
        loadCars();
        console.log('string is null');
       
    } else {
        while (contentHolder.firstChild) {
            contentHolder.removeChild(contentHolder.firstChild);
        }
        mustangs.forEach((item) => {
            if ((item.model).toLocaleLowerCase() == inputValue && (item.year == filterParameter || filterParameter == 'all')) {
                console.log(inputValue);
                const block = `
                <div class="item">
                    <div class="img-holder">
                        <img src="${item.image}" alt="mustang">
                    </div>
                    <ul class="info-list">
                        <li>${item.year}</li>
                        <li>${item.generation}</li>
                        <li>${item.cilinders}</li>
                        <li>${item.model}</li>
                    </ul>
                </div>
                `;
                contentHolder.insertAdjacentHTML('beforeend', block);
            }
        });
    }
    
}