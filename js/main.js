console.log('main');

const input = document.querySelector('#adicionar');

const button = document.querySelector('#add');

const select = document.querySelector('#curso');

button.addEventListener('click', function(e) {
    e.preventDefault();

    const op = `<option>${input.value}</option>`;

    select.innerHTML += op;
});

const curso = document.querySelector('#add2');

const tbody = document.querySelector('tbody');


const lis = [];

let c = 0;

curso.addEventListener('click', function(e) {
    e.preventDefault();
    const flag = document.querySelectorAll('li');
    const nomagic = 3;

    for (let i = 0; i < flag.length; i++) {
        lis[i] = flag[i].innerText;
    }

    if (e.target.tagName === 'BUTTON' && flag.length < nomagic) {
        if (!(lis.includes(select.value))) {
            const op = `<li>${select.value}</li><span class= "span ${c}"><label>Nova posição:</label><input id="new"></span>`;
            tbody.innerHTML += op;
        }
        // console.log('oi :-)');
    }
    c++;
});

// tbody.addEventListener('click', function(e) {
//     e.preventDefault();
//     const flag1 = document.querySelectorAll('li');
//     if (e.target.tagName === 'LI') {
//         const span = document.querySelector(`.span ${flag1}`);
//         span.style.display = 'inline';

//     }
//     const subs = document.querySelector('#new').value;


// });

tbody.addEventListener('dblclick', function(e) {
    e.preventDefault();
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

