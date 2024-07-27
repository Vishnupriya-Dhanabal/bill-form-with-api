
// document.addEventListener('DOMContentLoaded', function() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const id = urlParams.get('id');
//     const formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
//     const data = formDataArray.find(item => item.id === id);

//     if (data) {
//         const invoiceDetails = document.getElementById('invoice-details');
//         let itemsHTML = '';

//         data.items.forEach(item => {
//             itemsHTML += <p>${item.product} - Quantity: ${item.quantity}, Price: ${item.price}, Amount: ${item.amount}</p>;
//         });

//         invoiceDetails.innerHTML = `
//             <h2>Customer Name: ${data.customerName}</h2>
//             <p>Purchase Date: ${data.purchaseDate}</p>
//             <p>Phone Number: ${data.phoneNumber}</p>
//             <p>Email: ${data.email}</p>
//             <p>Address: ${data.address}</p>
//             <p>Gender: ${data.gender}</p>
//             <h3>Items:</h3>
//             ${itemsHTML}
//             <h4>Subtotal: $${parseFloat(data.items.reduce((acc, item) => acc + parseFloat(item.amount), 0)).toFixed(2)}</h4>
//             <h4>GST (5%): $${(parseFloat(data.items.reduce((acc, item) => acc + parseFloat(item.amount), 0)) * 0.05).toFixed(2)}</h4>
//             <h4>Discount (10%): $${(parseFloat(data.items.reduce((acc, item) => acc + parseFloat(item.amount), 0)) * 0.10).toFixed(2)}</h4>
//             <h4>Total: $${(parseFloat(data.items.reduce((acc, item) => acc + parseFloat(item.amount), 0)) * 1.05 * 0.90).toFixed(2)}</h4>
//         `;
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     // Get the customer ID from the URL or session storage
//     const urlParams = new URLSearchParams(window.location.search);
//     const customerId = urlParams.get('id'); // Assuming you pass 'id' as a query parameter

//     if (customerId) {
//         fetch('http://localhost:8080/api/invoice/getCustomer/{customerEmail}')
//             .then(response => response.json())
//             .then(data => {
//                 if (data && data.customer) {
//                     populateCustomerDetails(data.customer);
//                 } else {
//                     console.error('Customer data not found');
//                 }
//             })
//             .catch(error => console.error('Error fetching customer data:', error));
//     } else {
//         console.error('No customer ID provided');
//     }
// });

// function populateCustomerDetails(customer) {
//     const customerDetails = `
//         <h3>Customer Information</h3>
//         <p><strong>Name:</strong> ${customer.customerName}</p>
//         <p><strong>Email:</strong> ${customer.email}</p>
//         <p><strong>Phone:</strong> ${customer.mobileNo}</p>
//         <p><strong>Address:</strong> ${customer.address}</p>
//         <p><strong>Gender:</strong> ${customer.gender}</p>
//     `;
//     document.getElementById('customerDetails').innerHTML = customerDetails;

//     // Populate product details using map
//     const tableBody = document.querySelector('#invoiceTable tbody');
//     customer.customerProduct.map(product => {
//         const row = `
//             <tr>
//                 <td>${product.productName}</td>
//                 <td>${product.quantity}</td>
//                 <td>${product.price}</td>
//                 <td>${product.totalAmount}</td>
//             </tr>
//         `;
//         tableBody.innerHTML += row;
//     });
// }


document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const customerEmail = urlParams.get('email');

    if (customerEmail) {
        fetch(`http://localhost:8080/api/invoice/getCustomer/${customerEmail}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched data:', data); // Log the data to verify its structure

                // Access the nested data
                const customerData = data.data.Data.customer;
                const invoiceData = data.data;

                // Populate the invoice details
                document.getElementById('customerName').textContent = customerData.customerName;
                document.getElementById('date').textContent = customerData.date;
                document.getElementById('mobileNo').textContent = customerData.mobileNo;
                document.getElementById('email').textContent = customerData.email;
                document.getElementById('address').textContent = customerData.address;
                document.getElementById('gender').textContent = customerData.gender;

                // Populate items
                const itemsList = document.getElementById('items-list');
                itemsList.innerHTML = '';
                if (Array.isArray(customerData.customerProducts) && customerData.customerProducts.length > 0) {
                    customerData.customerProducts.forEach(item => {
                        const itemElement = document.createElement('p');
                        itemElement.textContent = `${item.productName} - $${item.price} (Qty: ${item.quantity})`;
                        itemsList.appendChild(itemElement);
                    });
                } else {
                    itemsList.textContent = 'No items available';
                }

                // Populate totals
                document.getElementById('subtotal').textContent = invoiceData.totalprouctsAmount.toFixed(2);
                document.getElementById('gst').textContent = invoiceData.gstAmount.toFixed(2);
                document.getElementById('discount').textContent = invoiceData.discountAmount.toFixed(2);
                document.getElementById('total').textContent = invoiceData.grandTotalAmount.toFixed(2);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                // Optionally display an error message on the page
                document.getElementById('invoice-details').textContent = 'Error fetching data';
            });
    } else {
        document.getElementById('invoice-details').textContent = 'No customer email provided';
    }
});


