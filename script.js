// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Get references to HTML elements
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  const totalTasks = document.getElementById("total-tasks");
  const todo = document.querySelector("#addTodo");

  // Event listener for adding a new task
  todo.addEventListener("click", () => {
      // Trim the input value and check if it's not empty
      const todoText = todoInput.value.trim();

      if (todoText !== "") {
          // Create a new list item for the task
          const todoItem = document.createElement("li");
          todoItem.className = "todo-item";
          todoItem.innerHTML = `
              <input type="checkbox" onchange="toggleTodo(this)">
              <span>${todoText}</span>
              <button class="btn" onclick="deleteTodo(this)">Delete</button>
          `;

          // Append the new task to the todoList
          todoList.appendChild(todoItem);
          // Clear the input field
          todoInput.value = "";
          // Update the total number of tasks
          updateTotalTasks();
      }
  });

  // Function to delete a task
  window.deleteTodo = function (button) {
      const todoItem = button.parentElement;
      todoList.removeChild(todoItem);

      // Update the total number of tasks
      updateTotalTasks();
  };

  // Function to toggle the completion status of a task
  window.toggleTodo = function (checkbox) {
      const todoItem = checkbox.parentElement;
      todoItem.classList.toggle("completed");

      // Update the total number of tasks
      updateTotalTasks();
  };

  // Function to update the total number of tasks
  function updateTotalTasks() {
      const total = document.querySelectorAll(".todo-item").length;
      totalTasks.textContent = total;
  }
});
