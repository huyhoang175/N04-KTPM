
// Đường dẫn đến tệp .xlsx
var fileURL = "dataCustomer.xlsx";

// Đọc dữ liệu từ tệp .xlsx
var oReq = new XMLHttpRequest();
oReq.open("GET", fileURL, true);
oReq.responseType = "arraybuffer";

oReq.onload = function(e) {
  var arraybuffer = oReq.response;

  /* Xử lý dữ liệu từ tệp .xlsx */
  var data = new Uint8Array(arraybuffer);
  var workbook = XLSX.read(data, { type: "array" });
  var worksheet = workbook.Sheets[workbook.SheetNames[0]];
  var jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  // Lấy thẻ tbody từ bảng
  var tbody = document.querySelector("#customerTable tbody");

  // Thêm dữ liệu vào bảng
  for (var i = 1; i < jsonData.length; i++) {
    var row = document.createElement("tr");

    var nameCell = document.createElement("td");
    nameCell.textContent = jsonData[i][0];
    row.appendChild(nameCell);
    
    var dobCell = document.createElement("td");
    dobCell.textContent = jsonData[i][1];
    row.appendChild(dobCell);
    var genderCell = document.createElement("td");
    genderCell.textContent = jsonData[i][2];
    row.appendChild(genderCell);

    var emailCell = document.createElement("td");
    emailCell.textContent = jsonData[i][3];
    row.appendChild(emailCell);

    var phoneCell = document.createElement("td");
    phoneCell.textContent = jsonData[i][4];
    row.appendChild(phoneCell);

    tbody.appendChild(row);
  }


  // -------------------------------------------------------
  
  var customers = XLSX.utils.sheet_to_json(worksheet, { header: 1 });


  const customerTable = document.getElementById("customer-table");
  
  customers.forEach(function(customer, index) {
    const row = customerTable.insertRow();
    const name_Cell = row.insertCell(0);
    const dob_Cell = row.insertCell(1);
    const gender_Cell = row.insertCell(2);
    const email_Cell = row.insertCell(3);
    const phone_Cell = row.insertCell(4);
    const editCell = row.insertCell(5);
  
    name_Cell.innerHTML = customer[0];
    dob_Cell.innerHTML = customer[1];
    gender_Cell.innerHTML =customer[2];
    email_Cell.innerHTML = customer[3];
    phone_Cell.innerHTML = customer[4];
  
    const editButton = document.createElement("button");
    
    editButton.innerHTML = "Chỉnh sửa";
    
    editButton.addEventListener("click", function() {
      showEditForm(index);
    });
    editCell.appendChild(editButton);
  });

  const clickButton2 = document.getElementById("button2");
  clickButton2.addEventListener("click", function openMC() {

    hideEditForm();
  });

  const clickButton = document.getElementById("edit-form");
  
  clickButton.addEventListener("click", function openMC() {

    hideEditForm();
  });

  const editForm = document.getElementById("edit-form");
  const editId = document.getElementById("edit-id");
  const editName = document.getElementById("edit-name");
  const editDob = document.getElementById("edit-dob");
  const editGender = document.getElementById("edit-gender");
  const editEmail = document.getElementById("edit-email");
  const editPhone = document.getElementById("edit-phone");
  
  function showEditForm(index) {
    const customer = customers[index];
    editId.value = index;
    editName.value = customer[0];
    editDob.value = customer[1];
    editGender.value = customer[2];
    editEmail.value = customer[3];
    editPhone.value = customer[4];
    editForm.style.display = "block";
  }
  
  editForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const index = editId.value;
    customers[index][0] = editName.value;
    customers[index][1] = editDob.value;
    customers[index][2] = editGender.value;
    customers[index][3] = editEmail.value;
    customers[index][4] = editPhone.value;
    // saveData();
    hideEditForm();
  });
  
  function hideEditForm() {
    editForm.style.display = "none";
  }
  
  
  // function saveData() {
  //   const newWorkbook = XLSX.utils.book_new();
  //   // const newWorksheet = XLSX.utils.aoa_to_sheet(customers);
  //   // XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, "Customers");
  //     // Convert customers array to Sheet
  // const newWorksheet = XLSX.utils.json_to_sheet(customers);
  
  // // Update workbook with new Sheet
  // workbook.Sheets[worksheet] = newWorksheet;
  //   XLSX.writeFile(newWorkbook, "dataCustomer.xlsx");
  // }
  

};



oReq.send();
