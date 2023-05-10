const  checkboxCheck =(todoItems) => {
  const checkbox = document.querySelectorAll(".checkbox");
  for (let i = 0; i < checkbox.length; i += 1) {
    if (checkbox[i].checked) {
      todoItems[i].completed = true;
    }
  }
}

export default checkboxCheck;
