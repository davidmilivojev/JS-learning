var table = document.getElementById('table-list');
var add = document.getElementById('addItem');
var remove = document.getElementById('removeItem');
var newItem = document.getElementById('item');

add.addEventListener('click', insertItem);
remove.addEventListener('click', deleteItem);

var itemz = [];

function insertItem(){
  var tableCell = document.createElement('p');
  tableCell.innerHTML = newItem.value;
  itemz.push(newItem.value);
  localStorage.setItem("newTableItem", JSON.stringify(itemz));
  newItem.value = "";
  table.appendChild(tableCell);
}

var retrievedData = localStorage.getItem("newTableItem");
var itemzParsed = JSON.parse(retrievedData);

addEventListener('load', loadingCells);
function loadingCells(){

  for(var i=0; itemzParsed != null &&  i < itemzParsed.length ; i++){
      var newTable = document.createElement('p');
      newTable.innerHTML = itemzParsed[i];
      table.appendChild(newTable);
  }

function deleteItem() {
    var tableCell = newItem.value;
    var tableItem = document.querySelectorAll('p');
    newItem.value = "";

    for(var i = 0; i < tableItem.length; i++) {
        if(tableItem[i].innerHTML.toLowerCase() == tableCell.toLowerCase()) {
        table.removeChild(tableItem[i]);
        //var rem = JSON.parse(localStorage["newTableItem"]);

        }
      }
}


var user = document.getElementById('username');
//  localStorage.getItem('userName');

function myFunc(){
   if(localStorage.getItem('userName') != 'david'){
   window.location.assign('index.html');
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
