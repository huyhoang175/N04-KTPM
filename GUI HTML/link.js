let popupAdd = document.getElementById('addcustomer');
function openPopup() {
popupAdd.classList.add('open-popup');
popuplist.classList.remove('open-popup');     
}
function closePopup() {
popupAdd.classList.remove('open-popup');         
}


// ---------------//
let popuplist = document.getElementById('listcustomer');

function openListcustomer() {
    popuplist.classList.add('open-popup');   
    popupAdd.classList.remove('open-popup');  
  }
  function closeListcustomer() {
    popuplist.classList.remove('open-popup');         
  }
