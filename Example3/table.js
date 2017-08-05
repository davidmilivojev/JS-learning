var table = document.getElementById('table-list');
var add = document.getElementById('addItem');
var remove = document.getElementById('removeItem');
var newItem = document.getElementById('item');



add.addEventListener('click', insertItem);
remove.addEventListener('click', deleteItem);

function insertItem(){
  var tableCell = document.createElement('p');
  tableCell.innerHTML = newItem.value;
  newItem.value = "";
  table.appendChild(tableCell);


}

function deleteItem() {
    var tableCell = newItem.value;
    var table = document.querySelectorAll('p');
    newItem.value = "";

    for(var i = 0; i < table.length; i++) {
        if(table[i].innerHTML.toLowerCase() == tableCell.toLowerCase()) {
        document.getElementById("table-list").removeChild(table[i]);

        }
      }
}

var hamb = document.getElementById('hamburger');
var mobContent = document.getElementById('mob');

hamb.addEventListener('click', openMenu);

function openMenu(){
  if(  mobContent.style.display == 'none'){
       mobContent.style.display = 'block';
  }else{
       mobContent.style.display = 'none';
  }
}
