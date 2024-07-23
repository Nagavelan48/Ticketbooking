function user() {
    console.log("enter");
    var resultArea = document.getElementById('area');
    resultArea.innerHTML = ''; 
    

    fetch('http://localhost:8080/ticket/getticket', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(data => {
       
        console.log(data)
        createTable(data, resultArea);
         })
    .catch(error => {
        console.error('Error:', error);
    });
}


function createTable(data, resultArea) {
    let table = document.createElement('table');
    table.className = 'data-table'; 
    let headerRow = table.insertRow();
    if (data.length > 0) {
        Object.keys(data[0]).forEach(key => {
            let headerCell = document.createElement('th');
            headerCell.textContent = key;
            headerRow.appendChild(headerCell);
        });
        // let deleteHeaderCell = document.createElement('th');
        // deleteHeaderCell.textContent = 'Delete';
        // headerRow.appendChild(deleteHeaderCell);
    }

    data.forEach(item => {
        let row = table.insertRow();
        Object.values(item).forEach(value => {
            let cell = row.insertCell();
            cell.textContent = value;
        });
        // let deleteCell = row.insertCell();
        // let deleteButton = document.createElement('button');
        // deleteButton.textContent = 'Delete';
        // deleteButton.className = 'delete-button';
        // deleteButton.onclick = function () {
        //      delete1(item.sno);
        //     console.log('Deleting...');
        // };
        // deleteCell.appendChild(deleteButton);
    });
    resultArea.appendChild(table);
}

function delete1(sno){
    fetch(`http://localhost:8080/ticket/deletebook/${sno}`, {
        method: 'DELETE'
    })

    .then(()=>{
        console.log("enter");
        user();
    }
)
.catch(error=>{
    console.error('Error deleting appointment:',error);
});
    }

function feed(){
    console.log("enter");
    var resultArea = document.getElementById('area');
    resultArea.innerHTML = ''; 
   
   

    fetch('http://localhost:8080/feed/viewfeedback', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
       
        console.log(data)
        createTable1(data, resultArea);
         })
    .catch(error => {
        console.error('Error:', error);
    });
}
function createTable1(data, resultArea) {
    let table = document.createElement('table');
    table.className = 'data-table';
    let headerRow = table.insertRow();
    if (data.length > 0) {
        Object.keys(data[0]).forEach(key => {
            let headerCell = document.createElement('th');
            headerCell.textContent = key;
            headerRow.appendChild(headerCell);
        });
    }
    data.forEach(item => {
        let row = table.insertRow();
        Object.values(item).forEach(value => {
            let cell = row.insertCell();
            cell.textContent = value;
        });
    });
    resultArea.appendChild(table);
}


function filterByDate() {

    
    var resultArea = document.getElementById('area');
    resultArea.innerHTML = ''; 

    var tb = document.getElementById('textbox').val;
    console.log(tb);

    fetch('http://localhost:8080/ticket/getticketByDate/' + tb, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(data => {
       
        console.log(data)
        createTable(data, resultArea);
         })
    .catch(error => {
        console.error('Error:', error);
    });
}