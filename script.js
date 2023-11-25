function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');
  
    if (taskInput.value !== '') {
      let li = document.createElement('li');
      li.innerHTML = `<span onclick="editTask(this)"></span><span onclick="deleteTask(this)">❌</span>${taskInput.value}`;
      taskList.appendChild(li);
      taskInput.value = '';
    } else {
      alert('Please enter a task!');
    }
  }
  
  function editTask(span) {
    let newTask = prompt('Edit your task:', span.nextSibling.nodeValue.trim());
    if (newTask !== null && newTask !== '') {
      span.nextSibling.nodeValue = newTask;
    }
  }
  
  function deleteTask(span) {
    span.parentNode.remove();
  }
  