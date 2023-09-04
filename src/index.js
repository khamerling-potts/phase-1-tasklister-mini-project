document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', createToDo);
});

function createToDo(e){
  //create div for new to do
  e.preventDefault();
  const newToDo = document.createElement('div');
  document.querySelector('#tasks').appendChild(newToDo);

  //create dropdown for priority options
  const dropDown = document.createElement('select');
  const options = document.createElement('option');
  options.textContent = 'Select Priority'
  options.id = 'options';
  const option1 = document.createElement('option');
  option1.textContent = 'High priority'
  option1.id = 'high';
  const option2 = document.createElement('option');
  option2.textContent = 'Medium priority'
  option2.id - 'medium';
  const option3 = document.createElement('option');
  option3.textContent = 'Low priority'
  option3.id = 'low';
  dropDown.append(options, option1, option2, option3);
  newToDo.appendChild(dropDown);
  dropDown.addEventListener('change', changePriority);

  //create actual text of to do item
  const p = document.createElement('p');
  p.textContent = e.target.querySelector('#new-task-description').value;
  p.style.display = 'inline-block';
  newToDo.appendChild(p);

  //create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.style.display = 'inline-block';
  newToDo.appendChild(deleteBtn);
  deleteBtn.addEventListener('click', handleDelete);
}

function handleDelete(e){
  e.target.parentNode.remove();
}

function changePriority(e){
  const toDo = e.target.nextElementSibling;
  switch (e.target.value){
    case 'High priority':
      toDo.style.color = 'red';
      break;
    case 'Medium priority':
      toDo.style.color = 'goldenrod';
      break;
    case 'Low priority':
      toDo.style.color = 'green';
      break;
    default:
      toDo.style.color = 'black';
  }
 //implement sorting later: sortToDos(document.querySelector('#tasks'));
}
