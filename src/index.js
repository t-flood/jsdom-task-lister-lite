document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //const submitButton = document.getElementById("submit_button");
  const tasks = document.getElementById("tasks");
  const form = document.getElementById("create-task-form");
  //submitButton.addEventListener("click", handleClickEvent);

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    let value = event.target[0].value;
    tasks.innerHTML += `<li>${value}</li>`;
  }
});
