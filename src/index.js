import './style.css';
//import for add and remove

import script  from '../modules/script';


const mylist = [
  {
    description: 'Watch coding Tutorial on YouTube',
    completed: false,
    index: 1,
  },
  {
    description: 'Pickup the kids at school',
    completed: false,
    index: 2,
  },
  {
    description: 'Buy  groceries',
    completed: false,
    index: 3,
  },

];

const list = document.getElementById('list');

mylist.sort((a, b) => a.index - b.index);
mylist.forEach((value) => {
  const li = document.createElement('li');
  li.innerHTML = `
        ${value.description}<i class="fa-solid fa-ellipsis-vertical"></i>

    `;
  list.appendChild(li);
});


// add amd remove
