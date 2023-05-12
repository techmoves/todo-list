function completed(task) {
  task.completed = true;
  const tick = task.completed;
  return tick;
}

function unCompleted(task) {
  task.completed = false;
  const tick = task.completed;
  return tick;
}

export { completed, unCompleted };