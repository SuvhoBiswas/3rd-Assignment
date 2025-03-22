function generateTable() {
    // Get input value
    const numberInput = document.getElementById('numberInput');
    const errorMessage = document.getElementById('errorMessage');
    const tableOutput = document.getElementById('tableOutput');
    
    // Clear previous output and error messages
    errorMessage.textContent = '';
    tableOutput.innerHTML = '';
    
    // Get the input value
    const number = numberInput.value;
    
    // Validation
    if (!number) {
        errorMessage.textContent = 'Please enter a valid number!';
        return;
    }
    
    if (number <= 0) {
        errorMessage.textContent = 'Please enter a number greater than 0!';
        return;
    }
    
    // Generate multiplication table
    let tableHTML = '<table class="multiplication-table">';
    for (let i = 1; i <= 10; i++) {
        tableHTML += `
            <tr>
                <td>${number} × ${i}</td>
                <td>=</td>
                <td>${number * i}</td>
            </tr>
        `;
    }
    tableHTML += '</table>';
    
    // Display the table
    tableOutput.innerHTML = tableHTML;
}

// Add event listener for Enter key
document.getElementById('numberInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        generateTable();
    }
}); 