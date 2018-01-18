let btnAdd = document.querySelector('#buttonAdd');
let btnDel = document.querySelector('#buttonDelete');
let tableShow = document.querySelector('#table-show');
let arrData = []

function addTodo() {
  var todo = document.getElementById('btn-todolist').value;

  curtodo = todo;

  arrData.push({
    todo: curtodo,

  })
  var row = tableShow.insertRow(2);
  var cel1 = row.insertCell(0);
  var cel2 = row.insertCell(1);



  cel1.innerHTML = curtodo;
  cel2.innerHTML = `<button class="btn btn-danger btn-sm">Done</button>`;
}

function delTodo() {

  tableShow.deleteRow(1);

}
btnAdd.addEventListener('click', addTodo);
btnDel.addEventListener('click', delTodo);