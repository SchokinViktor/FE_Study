// 1.Створити сторінку, що показує нумерований список пісень: (продовення в ЛМС)
// 2.Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.
// 3.Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.


//TASK 1
const playList = [ 
    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },
    
    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },
    
    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },
    
    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },
    
    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },
    
    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },
    
    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    },
    
    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    }
    ];

let orderedList = document.createElement('ol');

playList.forEach(item => {
    orderedList.innerHTML += `<li class = "list-item">${item.author} - ${item.song}</li`;
});

document.body.prepend(orderedList);


//TASK 2

let modalWindow = document.querySelector('.modal');

let titleModal = document.createElement('h2');
titleModal.style.textAlign = 'center';
titleModal.style.marginBottom = '50px';
titleModal.textContent = 'This is modal window';

let modalButton = document.createElement('button');
modalButton.classList.add('btn-close');
modalButton.textContent = 'Close modal';

modalWindow.append(titleModal);
modalWindow.append(modalButton);

let btnModalOpen = document.querySelector('.btn');
btnModalOpen.addEventListener ('click', () => {
    modalWindow.classList.add('show');
});

modalButton.addEventListener ('click', () => {
    modalWindow.classList.remove('show');
});

//task 3
const trafficButton = document.querySelector('.light-button'),
      trafficLights = document.querySelectorAll('.light');

trafficButton.addEventListener('click', () => {
    if (trafficLights[0].classList.contains('active') ) {
        trafficLights[0].classList.remove('active');
        trafficLights[1].classList.add('active');
    } else if (trafficLights[1].classList.contains('active')) {
        trafficLights[1].classList.remove('active');
        trafficLights[2].classList.add('active');
    } else {
        trafficLights[2].classList.remove('active');
        trafficLights[0].classList.add('active');
    }
});

