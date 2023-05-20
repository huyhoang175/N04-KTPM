let popupAdd = document.getElementById('addcustomer');
function openPopup() {
popupAdd.classList.add('open-popup');
popuplist.classList.remove('open-popup');  
popupMC.classList.remove('open-popup');    
}
function closePopup() {
popupAdd.classList.remove('open-popup');         
}


// ---------------//
let popuplist = document.getElementById('listcustomer');

function openListcustomer() {
    popuplist.classList.add('open-popup');   
    popupAdd.classList.remove('open-popup'); 
    popupMC.classList.remove('open-popup');  
  }
  function closeListcustomer() {
    popuplist.classList.remove('open-popup');         
  }

// ---------------//

let popupMC = document.getElementById('manageCustomer');

function openMC() {
    popupMC.classList.add('open-popup');   
    popupAdd.classList.remove('open-popup');  
    popuplist.classList.remove('open-popup');
   
  }
  function closeMC() {
    popupMC.classList.remove('open-popup');         
  }


// ---------------/
let popupEditForm = document.getElementById('edit-form');

function openEdit(){
  popupEditForm.classList.add('open-popup');
}
function closeEdit(){
  popupEditForm.classList.remove('open-popup'); 
}


