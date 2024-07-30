// let dataArray = [];

// function fetchData() {
//   fetch("http://localhost:8080/api/product/get/All/product")
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("Network response was not ok.");
//       }
//     })
//     .then((data) => {
//       if (dataArray.length === 0) { 
//         console.log("The array is empty.");
//       }

//       dataArray.push(data);
//     })
//     .catch((error) => {
//       console.error(
//         "There has been a problem with your fetch operation:",
//         error
//       );
//     });
// }

// fetchData();

// // Add row function
// function addRow() {
//     var table = document.getElementById("bill-table").getElementsByTagName('tbody')[0];
//     var rowCount = table.rows.length;
//     var row = table.insertRow();
//     var slCell = row.insertCell();
//     var productCell = row.insertCell();
//     var quantityCell = row.insertCell();
//     var priceCell = row.insertCell();
//     var amountCell = row.insertCell();
//     var actionCell = row.insertCell();

//     slCell.textContent = rowCount + 1;

//     var productSelect = document.createElement("select");
//     productSelect.className = "form-control";
//     productSelect.name = "productName";
//     productSelect.onchange = function() { 
//         setPrice(this); 
//         validateRows();
//         populateDropdown(dataArray) 
//     };

//     productCell.appendChild(productSelect);
//     quantityCell.innerHTML = '<input type="number" class="form-control" name="quantity" placeholder="Enter quantity" onchange="calculateAmount(this.parentElement.parentElement); validateRows();">';
//     priceCell.innerHTML = '<input type="number" class="form-control" name="price" readonly>';
//     amountCell.innerHTML = '<input type="number" class="form-control" name="totalAmount" readonly>';
//     actionCell.innerHTML = '<button type="button" class="btn btn-danger" onclick="deleteRow(this)">Delete</button>';

//     validateRows(); // Validate all rows immediately after adding
// }

// function populateDropdown(dataArray) {
//     var productSelect = document.getElementById('productName');
//     productSelect.innerHTML = '<option value="" data-price="0">Select a product</option>'; 
// console.log(dataArray)
//         dataArray.forEach(function(product) {
//             console.log(product)
//             var option = document.createElement("option");
//             option.value = product.data.name;
//             option.setAttribute("data-price", product.price);
//             option.textContent = product.name;
//             productSelect.appendChild(option);
//         });
    
// }
// // Validate all rows and manage "Add Row" button state
// function validateRows() {
//     var rows = document.querySelectorAll('#bill-table tbody tr');
//     var isValid = true;
//     var lastRow = rows[rows.length - 1];

//     if (lastRow) {
//         var productSelect = lastRow.querySelector('select[name="productName"]').value;
//         var quantityInput = lastRow.querySelector('input[name="quantity"]').value;
//         isValid = productSelect && productSelect !== 'Select a product' && quantityInput && quantityInput > 0;
//     }

//     document.getElementById('add').disabled = !isValid;
// }

// // Delete row function
// function deleteRow(button) {
//     var row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
//     updateRowNumbers();
//     calculateTotal();
//     validateRows(); // Revalidate after deletion
// }

// // Set price function
// function setPrice(selectElement) {
//     var price = selectElement.options[selectElement.selectedIndex].getAttribute('data-price');
//     var row = selectElement.parentElement.parentElement;
//     row.querySelector('input[name="price"]').value = price || 0;
//     calculateAmount(row);
// }

// // Calculate amount function
// function calculateAmount(row) {
//     var quantity = row.querySelector('input[name="quantity"]').value;
//     var price = row.querySelector('input[name="price"]').value;
//     var totalAmount = row.querySelector('input[name="totalAmount"]');
//     if (quantity && price) {
//         totalAmount.value = quantity * price;
//     } else {
//         totalAmount.value = 0;
//     }
//     calculateTotal();
// }

// // Calculate total function
// function calculateTotal() {
//     var rows = document.querySelectorAll('#bill-table tbody tr');
//     var subtotal = 0;
//     rows.forEach(row => {
//         var amount = row.querySelector('input[name="totalAmount"]').value;
//         subtotal += parseFloat(amount) || 0;
//     });
//     var gst = subtotal * 0.05;
//     var discount = subtotal * 0.10;
//     var total = subtotal + gst - discount;
//     document.getElementById('subtotal').textContent = subtotal.toFixed(2);
//     document.getElementById('gst').textContent = gst.toFixed(2);
//     document.getElementById('discount').textContent = discount.toFixed(2);
//     document.getElementById('total').textContent = total.toFixed(2);
// }

// // Add event listeners function
// function addEventListeners() {
//     var quantityInputs = document.querySelectorAll('input[name="quantity"]');
//     quantityInputs.forEach(input => {
//         input.addEventListener('input', function() {
//             calculateAmount(this.parentElement.parentElement);
//             validateRows();
//         });
//     });
// }

// // Document loaded event
// document.addEventListener('DOMContentLoaded', function() {
//     addEventListeners();
//     validateRows(); // Initial validation
// });

// // Update row numbers function
// function updateRowNumbers() {
//     var table = document.getElementById("bill-table").getElementsByTagName('tbody')[0];
//     for (var i = 0; i < table.rows.length; i++) {
//         table.rows[i].cells[0].textContent = i + 1;
//     }
// }

// // Handle form submit function
// function handleSubmit(event) {
//     event.preventDefault();
//     var isValid = true;

//     // Clear previous errors
//     document.querySelectorAll('.error').forEach(function(el) {
//         el.textContent = '';
//     });

//     // Validation checks
//     const customerName = document.getElementById('customerName').value;
//     const purchaseDate = document.getElementById('purchase-date').value;
//     const mobileNo = document.getElementById('mobileNo').value;
//     const email = document.getElementById('email').value;
//     const address = document.getElementById('address').value;
//     const gender = document.getElementById('gender').value;

//     if (!customerName) {
//         document.getElementById('customerNameError').textContent = 'Customer name is required.';
//         isValid = false;
//     }

//     if (!purchaseDate) {
//         document.getElementById('purchaseDateError').textContent = 'Purchase date is required.';
//         isValid = false;
//     }

//     if (!mobileNo) {
//         document.getElementById('mobileNoError').textContent = 'Mobile number is required.';
//         isValid = false;
//     }

//     if (!email) {
//         document.getElementById('emailError').textContent = 'Email is required.';
//         isValid = false;
//     }

//     if (!address) {
//         document.getElementById('addressError').textContent = 'Address is required.';
//         isValid = false;
//     }

//     if (!gender) {
//         document.getElementById('genderError').textContent = 'Gender is required.';
//         isValid = false;
//     }

//     const productRows = document.querySelectorAll('#bill-table tbody tr');
//     productRows.forEach(row => {
//     event.preventDefault();

//         const productName = row.querySelector('select[name="productName"]').value;
//         const quantity = row.querySelector('input[name="quantity"]').value;
//         const quantityError = row.querySelector('.quantityError');
//         const productNameError = row.querySelector('.productNameError');
//         if (!productName || productName === 'Select a product') {
//             productNameError.textContent = 'Product is required.';
//             isValid = false;
//         }
//         if (!quantity || quantity <= 0) {
//             quantityError.textContent = 'Quantity must be greater than zero.';
//             isValid = false;
//         }
//     });

//     if (!isValid) return;

//     const customerProduct = [];
//     productRows.forEach(row => {
//         const productName = row.querySelector('select[name="productName"]').value;
//         const quantity = row.querySelector('input[name="quantity"]').value;
//         const price = row.querySelector('input[name="price"]').value;
//         const totalAmount = row.querySelector('input[name="totalAmount"]').value;
//         customerProduct.push({ productName, quantity, price, totalAmount });
//     });

//     // Create the payload
//     const payload = {
//         customerName,
//         email,
//         mobileNo,
//         address,
//         gender,
//         customerProduct
//     };
//     console.log(payload);

//     // Send the POST request
//     fetch('http://localhost:8080/api/invoice/buy/product', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(payload)
//     })
//     .then(response => {
//         if (!response.ok) {
//             return response.json().then(data => {
//                 throw new Error(`API Error: ${data.error.code} - ${data.error.reason}`);
//             });
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Success:', data);
//         // Handle successful response, e.g., display a success message
//         alert('Order placed successfully!');
//          window.location.href = "table.html"
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         // Handle error, e.g., display an error message
//         if (error.message.includes('409 CONFLICT')) {
//             alert('Conflict occurred. Please check your data for duplicates or inconsistencies.');
//         } else if (error.message.includes('400 BAD_REQUEST')) {
//             alert('Invalid data. Please check your inputs.');
//         } else {
//             alert('An error occurred. Please try again later.');
//         }
//     });
// }


let dataArray = [];

// Function to fetch data from the API
function fetchData() {
    fetch("http://localhost:8080/api/product/get/All/product")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Network response was not ok.");
            }
        })
        .then((responseData) => {
            dataArray = responseData.data || [];
            populateDropdowns();
        })
        .catch((error) => {
            console.error("There has been a problem with your fetch operation:", error);
        });
}

// Call the fetchData function on page load
fetchData();

// Function to add a new row in the table
function addRow() {
    const table = document.getElementById("bill-table").getElementsByTagName("tbody")[0];
    const rowCount = table.rows.length;
    const row = table.insertRow();
    
    row.innerHTML = `
        <td>${rowCount + 1}</td>
        <td>
            <select class="form-control" name="productName" onchange="setPrice(this); calculateAmount(this.parentElement.parentElement); validateAddRowButton();">
                <option value="" data-price="0">Select a product</option>
            </select>
            <span class="error productNameError"></span>
        </td>
        <td>
            <input type="number" class="form-control" name="quantity" placeholder="Enter quantity" onchange="calculateAmount(this.parentElement.parentElement); validateAddRowButton();">
            <span class="error quantityError"></span>
        </td>
        <td><input type="number" class="form-control" name="price" readonly></td>
        <td><input type="number" class="form-control" name="totalAmount" readonly></td>
        <td>
            <button type="button" class="btn btn-danger" onclick="deleteRow(this)">Delete</button>
        </td>
    `;
    populateDropdown(row.querySelector("select"));
}

// Function to populate the product dropdown with fetched data
function populateDropdown(selectElement) {
    selectElement.innerHTML = '<option value="" data-price="0">Select a product</option>';

    dataArray.forEach((product) => {
        if (product.productName) {
            const option = document.createElement("option");
            option.value = product.productName;
            option.setAttribute("data-price", product.price);
            option.textContent = product.productName;
            selectElement.appendChild(option);
        }
    });
    
}


// Function to populate all dropdowns (useful when data is fetched or updated)
function populateDropdowns() {
    document.querySelectorAll("select[name='productName']").forEach(populateDropdown);
}
//Validate all rows and manage "Add Row" button state
function validateRows() {
    var rows = document.querySelectorAll('#bill-table tbody tr');
    var isValid = true;
    var lastRow = rows[rows.length - 1];

    if (lastRow) {
        var productSelect = lastRow.querySelector('select[name="productName"]').value;
        var quantityInput = lastRow.querySelector('input[name="quantity"]').value;
        isValid = productSelect && productSelect !== 'Select a product' && quantityInput && quantityInput > 0;
    }

    document.getElementById('add').disabled = !isValid;
}
// Delete row function
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateRowNumbers();
    calculateTotal();
    validateRows(); // Revalidate after deletion
}

// Function to set the price based on the selected product
function setPrice(selectElement) {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const price = selectedOption.getAttribute("data-price") || 0;
    const row = selectElement.closest("tr");
    row.querySelector("input[name='price']").value = price;
    calculateAmount(row);
}

// Function to calculate the amount for each row
function calculateAmount(row) {
    const quantity = row.querySelector("input[name='quantity']").value;
    const price = row.querySelector("input[name='price']").value;
    const totalAmount = quantity * price;
    row.querySelector("input[name='totalAmount']").value = totalAmount.toFixed(2);
    calculateTotals();
}

// Function to calculate subtotal, GST, discount, and total
function calculateTotals() {
    let subtotal = 0;
    document.querySelectorAll("input[name='totalAmount']").forEach((input) => {
        subtotal += parseFloat(input.value) || 0;
    });

    const gst = subtotal * 0.05;
    const discount = subtotal * 0.10;
    const total = subtotal + gst - discount;

    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("gst").textContent = gst.toFixed(2);
    document.getElementById("discount").textContent = discount.toFixed(2);
    document.getElementById("total").textContent = total.toFixed(2);
}

// Function to delete a row
function deleteRow(button) {
    const row = button.closest("tr");
    row.parentNode.removeChild(row);
    updateRowNumbers();
    calculateTotals();
}

// Function to update row numbers after a row is deleted
function updateRowNumbers() {
    document.querySelectorAll("#bill-table tbody tr").forEach((row, index) => {
        row.cells[0].textContent = index + 1;
    });
}

// Form submission handling
function handleSubmit(event) {
    event.preventDefault();

    // Perform validation and other logic here

    alert("Form submitted!");
}

// Function to enable/disable the Add Row button
function validateAddRowButton() {
    const addRowButton = document.getElementById("add");
    let valid = true;

    document.querySelectorAll("select[name='productName']").forEach((selectElement) => {
        if (selectElement.value === "") {
            valid = false;
        }
    });

    document.querySelectorAll("input[name='quantity']").forEach((inputElement) => {
        if (inputElement.value === "" || inputElement.value <= 0) {
            valid = false;
        }
    });

    addRowButton.disabled = !valid;
}

// Calculate amount function
function calculateAmount(row) {
    var quantity = row.querySelector('input[name="quantity"]').value;
    var price = row.querySelector('input[name="price"]').value;
    var totalAmount = row.querySelector('input[name="totalAmount"]');
    if (quantity && price) {
        totalAmount.value = quantity * price;
    } else {
        totalAmount.value = 0;
    }
    calculateTotal();
}

// Calculate total function
function calculateTotal() {
    var rows = document.querySelectorAll('#bill-table tbody tr');
    var subtotal = 0;
    rows.forEach(row => {
        var amount = row.querySelector('input[name="totalAmount"]').value;
        subtotal += parseFloat(amount) || 0;
    });
    var gst = subtotal * 0.05;
    var discount = subtotal * 0.10;
    var total = subtotal + gst - discount;
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('gst').textContent = gst.toFixed(2);
    document.getElementById('discount').textContent = discount.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
}

// Add event listeners function
function addEventListeners() {
    var quantityInputs = document.querySelectorAll('input[name="quantity"]');
    quantityInputs.forEach(input => {
        input.addEventListener('input', function() {
            calculateAmount(this.parentElement.parentElement);
            validateRows();
        });
    });
}

// Document loaded event
document.addEventListener('DOMContentLoaded', function() {
    addEventListeners();
    validateRows(); // Initial validation
});

// Update row numbers function
function updateRowNumbers() {
    var table = document.getElementById("bill-table").getElementsByTagName('tbody')[0];
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[0].textContent = i + 1;
    }
}

// Handle form submit function
function handleSubmit(event) {
    event.preventDefault();
    var isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(function(el) {
        el.textContent = '';
    });

    // Validation checks
    const customerName = document.getElementById('customerName').value;
    const purchaseDate = document.getElementById('purchase-date').value;
    const mobileNo = document.getElementById('mobileNo').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const gender = document.getElementById('gender').value;

    if (!customerName) {
        document.getElementById('customerNameError').textContent = 'Customer name is required.';
        isValid = false;
    }

    if (!purchaseDate) {
        document.getElementById('purchaseDateError').textContent = 'Purchase date is required.';
        isValid = false;
    }

    if (!mobileNo) {
        document.getElementById('mobileNoError').textContent = 'Mobile number is required.';
        isValid = false;
    }

    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    }

    if (!address) {
        document.getElementById('addressError').textContent = 'Address is required.';
        isValid = false;
    }

    if (!gender) {
        document.getElementById('genderError').textContent = 'Gender is required.';
        isValid = false;
    }

    const productRows = document.querySelectorAll('#bill-table tbody tr');
    productRows.forEach(row => {
    event.preventDefault();

        const productName = row.querySelector('select[name="productName"]').value;
        const quantity = row.querySelector('input[name="quantity"]').value;
        const quantityError = row.querySelector('.quantityError');
        const productNameError = row.querySelector('.productNameError');
        if (!productName || productName === 'Select a product') {
            productNameError.textContent = 'Product is required.';
            isValid = false;
        }
        if (!quantity || quantity <= 0) {
            quantityError.textContent = 'Quantity must be greater than zero.';
            isValid = false;
        }
    });

    if (!isValid) return;

    const customerProduct = [];
    productRows.forEach(row => {
        const productName = row.querySelector('select[name="productName"]').value;
        const quantity = row.querySelector('input[name="quantity"]').value;
        const price = row.querySelector('input[name="price"]').value;
        const totalAmount = row.querySelector('input[name="totalAmount"]').value;
        customerProduct.push({ productName, quantity, price, totalAmount });
    });

    // Create the payload
    const payload = {
        customerName,
        email,
        mobileNo,
        address,
        gender,
        customerProduct
    };
    console.log(payload);

    // Send the POST request
    fetch('http://localhost:8080/api/invoice/buy/product', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => {
                throw new Error(`API Error: ${data.error.code} - ${data.error.reason}`);
            });
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        // Handle successful response, e.g., display a success message
        alert('Order placed successfully!');
         window.location.href = "table.html"
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error, e.g., display an error message
        if (error.message.includes('409 CONFLICT')) {
            alert('Conflict occurred. Please check your data for duplicates or inconsistencies.');
        } else if (error.message.includes('400 BAD_REQUEST')) {
            alert('Invalid data. Please check your inputs.');
        } else {
            alert('An error occurred. Please try again later.');
        }
    });
}

