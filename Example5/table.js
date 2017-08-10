var table = document.getElementById('table-list');
var add = document.getElementById('addItem');
var remove = document.getElementById('removeItem');
var newItem = document.getElementById('item');

add.addEventListener('click', insertItem);
remove.addEventListener('click', deleteItem);

//var i = 0;
//var gen = document.getElementsByTagName('p');
function insertItem(){
  var tableCell = document.createElement('p');
  tableCell.innerHTML = newItem.value;
  localStorage.setItem('newNew', newItem.value);
  //localStorage.setItem('newNew' + i, newItem.value);
  //i++;
  newItem.value = "";
  table.appendChild(tableCell);

}


addEventListener('load', loadingCells);
function loadingCells(){

 var storageKey = localStorage.getItem('newNew');

  console.log(storageKey);

  if(storageKey != null){
    var newTable = document.createElement('p');
    newTable.innerHTML = storageKey;
    table.appendChild(newTable);
  }else{
    console.log('no data');
  }


}

function deleteItem() {
    var tableCell = newItem.value;
    var table = document.querySelectorAll('p');
    newItem.value = "";

    for(var i = 0; i < table.length; i++) {
        if(table[i].innerHTML.toLowerCase() == tableCell.toLowerCase()) {
        document.getElementById("table-list").removeChild(table[i]);
        //localStorage.removeItem('newNew');
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
