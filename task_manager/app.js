const taskInput = document.querySelector("#task_name");
const tasks = document.querySelector(".task-list");
const submitBtn = document.querySelector(".submit-btn");
const taskId = document.querySelector("#task-id");

let selectedTaskId = "";

if (tasks !== null) {
  tasks.replaceChildren();
  setAllStoredTasks();
}

// console.log(localStorage.getItem(localStorage.key(0)));

if (submitBtn != null) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const name = taskInput.value;
    if (name !== null && name !== "") {
      let id = crypto.randomUUID();
      storeTaskLocally(id, name, 0);
      const newTaskElement = getTaskElement(id, name, 0);
      tasks.appendChild(newTaskElement);
      taskInput.value = "";
    }
  });
}

function getTaskInnerHtml(id, name, status) {
  return ` <!-- single task -->
          <!-- task title -->
          <h5><i class="far ${getStatusIcon(status)}"></i>${name}</h5>
          <!-- task links -->
          <div class="task-links">
            <!-- edit button -->
             <button type="button" class="edit-btn" data-id="${id}">
              <i class="fas fa-edit"></i>
             </button>
            <!-- delete btn -->
            <button type="button" class="delete-btn" data-id="${id}">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        <!-- end of single task -->`;
}

function getTaskElement(id, name, status) {
  let newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.innerHTML = getTaskInnerHtml(id, name, status);
  /**
   * Add edit and delete listeners
   */
  //   delete listener
  let newDeleteBtn = newTask.querySelector(".delete-btn");
  newDeleteBtn.addEventListener("click", deleteTaskListener);
  let newEditBtn = newTask.querySelector(".edit-btn");
  newEditBtn.addEventListener("click", editTaskListener);
  return newTask;
}

function deleteTaskListener(e) {
  e.preventDefault();
  let task = e.currentTarget.parentElement.parentElement;
  let id = e.currentTarget.attributes[2].nodeValue;
  tasks.removeChild(task);
  removeTaskLocally(id);
}

function editTaskListener(e) {
  e.preventDefault();
  selectedTaskId = e.currentTarget.attributes[2].nodeValue;
  localStorage.setItem("selectedId", selectedTaskId);
  window.location.href = "task.html";
}

function storeTaskLocally(id, name, status) {
  localStorage.setItem(id, JSON.stringify(getTaskJson(name, status)));
}

function getTaskJson(name, status) {
  return {
    name: name,
    status: status,
  };
}

function getStatusIcon(status) {
  if (status === 0) {
    return "fa-circle";
  } else if (status === 1) {
    return "fa-check-circle";
  } else {
    throw new Error("Invalid status.");
  }
}

function setAllStoredTasks() {
  let totalTasks = localStorage.length;
  for (let i = 0; i < totalTasks; i++) {
    let id = localStorage.key(i);
    if (id === "selectedId") {
      continue;
    }
    let storedTask = getStoredTaskElement(id);
    tasks.appendChild(storedTask);
  }
}

function getStoredTaskElement(id) {
  let task = getStoredTask(id);
  let name = task.name;
  let status = task.status;
  return getTaskElement(id, name, status);
}

function getStoredTask(id) {
  return JSON.parse(localStorage.getItem(id));
}

function removeTaskLocally(id) {
  localStorage.removeItem(id);
}

if (taskInput !== null) {
  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      submitBtn.click();
    }
  });
}

/**
 *  task.html page
 */

if (taskId != null) {
  if (
    localStorage.getItem("selectedId") !== null &&
    localStorage.getItem("selectedId") !== ""
  ) {
    sessionStorage.setItem("selectedId", localStorage.getItem("selectedId"));
    localStorage.setItem("selectedId", "");
  }

  selectedTaskId = sessionStorage.getItem("selectedId");
  taskId.textContent = selectedTaskId;
  let task = getStoredTask(selectedTaskId);
  let name = task.name;
  let status = task.status;
  let taskName = document.querySelector("#task_name");
  taskName.value = name;
  let taskStatus = document.querySelector("#completed");
  if (status === 1) {
    taskStatus.checked = true;
  } else if (status === 0) {
    taskStatus.checked = false;
  }
  const updateBtn = document.querySelector(".update-btn");
  updateBtn.addEventListener("click", function (e) {
    e.preventDefault();
    storeTaskLocally(selectedTaskId, taskName.value, getStatus(taskStatus));
    sessionStorage.removeItem("selectedId");
    window.location.href = "index.html";
  });

  function getStatus(taskStatus) {
    if (taskStatus.checked === true) {
      return 1;
    } else if (taskStatus.checked === false) {
      return 0;
    } else {
      throw new Error("Invalid checkbox status.");
    }
  }
}
