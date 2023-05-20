
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
};

oReq.send();
