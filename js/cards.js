const listDOM = document.querySelector('.list');

const data = [
    {
        imgSrc: 'IMG 1.jpg',
        imgAlt: 'IMG 1',
        title: 'IMG 1 title',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident quaerat necessitatibus quasi veritatis dicta consectetur debitis aliquam nobis consequuntur.',
        link: '#',
    },
    {
        imgSrc: 'IMG 2.jpg',
        imgAlt: 'IMG 2',
        title: 'IMG 2 title',
        desc: 'Lorem ipsum dolor sit amet provident quaerat necessitatibus quasi veritatis dicta consectetur debitis aliquam nobis consequuntur.',
        link: '#',
    },
    {
        imgSrc: 'IMG 3.jpg',
        imgAlt: 'IMG 3',
        title: 'IMG 3 title',
        desc: 'Lorem ipsum dolor sit amet provident quaerat necessitatibus quasi veritatis dicta consectetur debitis aliquam nobis consequuntur.',
        link: '#',
    },
    {
        imgSrc: 'IMG 4.jpg',
        imgAlt: 'IMG 4',
        title: 'IMG 4 title',
        desc: 'Lorem ipsum dolor sit amet provident quaerat necessitatibus quasi veritatis dicta consectetur debitis aliquam nobis consequuntur.',
        link: '#',
    },
];

let HTML = '';

for (const item of data) {
    HTML += `
        <div class="card">
            <img class="card-img" src="../img/${item.imgSrc}" alt="${item.imgAlt}">
            <h2 class="card-title">${item.title}</h2>
            <p class="card-desc">${item.desc}</p>
            <a class="card-link" href="${item.link}">Read more...</a>
        </div>`;
}

listDOM.innerHTML = HTML;