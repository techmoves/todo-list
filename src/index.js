import './style.css';

import script from '../modules/script.js';

import { completed, unCompleted } from "../modules/app.js";
// add amd remove

const localData = script.retrieve();
if (!localData) localStorage.setItem('mylist', '[]');

const display = () => {
  const storeData = script.retrieve();

  const list = document.getElementById('list');
  list.innerHTML = '';
  storeData.forEach((value) => {
    //  list of to-do
    const li = document.createElement('li');
    li.innerHTML = `
    <input type="checkbox">
    <input class="text" type="text" value="${value.description}"/> 
    <i class="fa-solid fa-ellipsis-vertical"></i>
    `;
    const removeButton = document.createElement('div');
    removeButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    removeButton.addEventListener('click', () => {
      script.remove(value.id);
      display();
    });
    li.appendChild(removeButton);
    list.appendChild(li);
  });

  const span = document.querySelectorAll('.text');
  span.forEach((btn, index) => {
    btn.addEventListener('keyup', () => {
      const tick = script.retrieve();
      tick[index].description = btn.value;
      script.save(tick);
    });
  });


  
//check box

const checkbox = document.querySelectorAll(".checkbox");
checkbox.forEach((btn, index) => {
  btn.addEventListener("change", () => {
    const tick = script.retrieve();
    if (btn.checked === true) {
      tick[index].completed = completed(tick);
    } else {
      tick[index].completed = unCompleted(tick);
    }
    script.save(tick);
  });
});

};

const renderList = () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const storeData = script.retrieve();
    const input = form.text.value;
    const completed = false;
    const id = storeData.length;
    script.add(input, completed, id);
    display();
    form.text.value = '';
  });
};
renderList();

display();
const clear = () => {
  let store = script.retrieve();
  store = store.filter((mylist) => !mylist.completed);
  const remains = script.updateList(store);
  script.save(remains);
};
clear();

