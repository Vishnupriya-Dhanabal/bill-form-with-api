


document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#invoiceTable tbody');

    // Function to display customer data
    function displayCustomerData(data) {
        // Access the nested Data array
        const customerData = data.data.Data;

        // Check if customerData is an array and not empty
        if (Array.isArray(customerData) && customerData.length > 0) {
            customerData.forEach(item => {
                const row = document.createElement('tr');

                // Create cells for each item property
                const nameCell = document.createElement('td');
                nameCell.textContent = item.customerName || 'N/A';
                row.appendChild(nameCell);

                const dateCell = document.createElement('td');
                dateCell.textContent = item.date || 'N/A';
                row.appendChild(dateCell);

                const phoneCell = document.createElement('td');
                phoneCell.textContent = item.mobileNo || 'N/A';
                row.appendChild(phoneCell);

                const emailCell = document.createElement('td');
                emailCell.textContent = item.email || 'N/A';
                row.appendChild(emailCell);

                const addressCell = document.createElement('td');
                addressCell.textContent = item.address || 'N/A';
                row.appendChild(addressCell);

                const genderCell = document.createElement('td');
                genderCell.textContent = item.gender || 'N/A';
                row.appendChild(genderCell);

                const actionCell = document.createElement('td');

                // Create View button
                const viewButton = document.createElement('button');
                viewButton.textContent = 'View';
                viewButton.className = 'btn btn-success';
                viewButton.onclick = () => {
                    window.location.href = `customerinvoice.html?email=${item.email}`;
                };
                actionCell.appendChild(viewButton);
            
                // Create Edit button
                    const editButton = document.createElement('button');
                    editButton.textContent = 'Edit';
                    editButton.className = 'btn btn-danger ml-2';
                    editButton.onclick = () => {
                        // Store the customer data in localStorage
                        localStorage.setItem('editCustomer', JSON.stringify(item));
                        window.location.href = 'customer.html';
                    };
                    actionCell.appendChild(editButton);

                row.appendChild(actionCell);
                tableBody.appendChild(row);
            });
        } else {
            // Display a message if no data is available
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.colSpan = 7; // Adjust based on the number of columns
            cell.textContent = 'No data available';
            row.appendChild(cell);
            tableBody.appendChild(row);
        }
    }

    // Function to fetch and display customer data
    function fetchAndDisplayCustomerData(url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched data:', data); // Log the data to verify its structure
                displayCustomerData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                // Optionally display an error message in the table
                tableBody.innerHTML = '<tr><td colspan="7">Error fetching data</td></tr>'; // Adjust based on the number of columns
            });
    }

    // Fetch and display customer invoices on page load
    fetchAndDisplayCustomerData('http://localhost:8080/api/invoice/getAllCustomer');

    // Add event listener to the button
    document.getElementById('showProductsBtn').addEventListener('click', () => {
        fetchAndDisplayCustomerData('http://localhost:8080/api/invoice/getAllCustomerAndBuyedProduct');
    });
});
