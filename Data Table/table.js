document.addEventListener('DOMContentLoaded', function() {
    const formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
    const tbody = document.getElementById('table').getElementsByTagName('tbody')[0];

    formDataArray.forEach(data => {
        const row = tbody.insertRow();

        const customerNameCell = row.insertCell();
        customerNameCell.textContent = data.customerName;

        const purchaseDateCell = row.insertCell();
        purchaseDateCell.textContent = data.purchaseDate;

        const phoneNumberCell = row.insertCell();
        phoneNumberCell.textContent = data.phoneNumber;

        const emailCell = row.insertCell();
        emailCell.textContent = data.email;

        const addressCell = row.insertCell();
        addressCell.textContent = data.address;

        const genderCell = row.insertCell();
        genderCell.textContent = data.gender;

        const actionCell = row.insertCell();
        const invoiceButton = document.createElement('button');
        invoiceButton.textContent = 'Invoice';
        invoiceButton.className = 'btn btn-primary';
        invoiceButton.onclick = function() {
            window.location.href = "invoice.html?id=" + data.id;
        };
        actionCell.appendChild(invoiceButton);
    });
});                         



// window.onload = () => {
//     table();
//   };
//   let student = [];
//   let editvalue;
//   let studentDetails = {};
  
  
//   async function table(){
//     let url = "https://650abed7dfd73d1fab08cefd.mockapi.io/student";
//       await fetch(url, {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       })
//         .then((Result) => Result.json())
//         .then((res) => {
//           console.log(res);
//           student = res;
//           console.log(student);
//         })
//         .catch((errorMsg) => {
//           console.log(errorMsg);
//         });
  
//       let k=""
//       for( i = 0; i < student.length; i++){
//         k += "<tr>"
//         k += "<td>" + student[i].name + "</td>"
//         k += "<td>" + student[i].email + "</td>"
//         k += "<td>" + student[i].number + "</td>"
//         k += "<td>" + student[i].password+ "</td>"
//         k += "<td>" + student[i].c_password+ "</td>"
//         k += "<td>" + student[i].gender+ "</td>"
//         k += "<td>" + student[i].language+ "</td>"
//         k += "<td>" + student[i].date+ "</td>"
//         k += '<td> <button type="button" class="btn btn-primary" onclick= "edit('+ student[i].id +')">Edit</button>   <button type="button" class="btn btn-danger" onclick= "Delete('+ student[i].id +')">Delete</button></td>';
//         k += "</tr>"
//       }
//       document.getElementById("tabledata").innerHTML = k;
//     }
  
    
  
//   function edit(id) {
//       editvalue = id;
//       window.location.href = "student_details.html?id=" + id;
//   }
//   function back(){
//     window.location.replace('card.html');
//   }
//   function add(){
//     window.location.replace('student_details.html');
//   }
  
//   function Delete(id) {
//     let url ="https://650abed7dfd73d1fab08cefd.mockapi.io/student" ;
//     fetch(url + "/" + id , {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((Result) => Result.json())
//       .then((string) => {
//         console.log(string);
//         table();
//       })
//       .catch((errorMsg) => {
//         console.log(errorMsg);
//       });
//   }
