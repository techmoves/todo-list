const save = (data) => {
  localStorage.setItem('mylist', JSON.stringify(data));
};

const retrieve = () => JSON.parse(localStorage.getItem('mylist'));

function updateList(mylists) {
  return mylists.map((value, index) => {
    value.id = index;
    return value;
  });
}

function add(description, completed, id) {
  const storeData = retrieve();
  storeData.push({ description, completed, id });
  const sortedData = updateList(storeData);
  save(sortedData);
}
function remove(id) {
  const storeData = retrieve();
  const remaining = storeData.filter((mylist) => mylist.id !== id);
  const sortedData = updateList(remaining);
  save(sortedData);
}

export default {
  add,
  remove,
  save,
  retrieve,
};

// --for clear all---
