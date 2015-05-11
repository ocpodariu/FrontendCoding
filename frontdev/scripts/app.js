/**
 * Created by Ovidiu on 5/11/2015.
 */

var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];

function showList() {
    var myTable =
        '<table border="1" class="table table-condensed table-striped">' +
        '<tr>' +
        '<th>First Name</th>' +
        '<th>Last Name</th>' +
        '<th>Phone</th>' +
        '<th>Salary</th>' +
        '<th>View</th>' +
        '<th>Delete</th>' +
        '</tr>';

    // Show all employees
    for (var id in employeesList) {
        myTable +=
            '<tr>' +
            '<td>' + employeesList[id].firstName + '</td>' +
            '<td>' + employeesList[id].lastName  + '</td>' +
            '<td>' + employeesList[id].phone     + '</td>' +
            '<td>' + employeesList[id].salary    + '</td>' +
            '<td><button onclick = "showOneEmployee(' + id + ')">View details</button></td>' +
            '<td><button onclick = "deleteOneEmployee(' + id + ')">Delete employee</button></td>' +
            '</tr>'
    }

    // Calculate statistics
    var commonFirstName = findMostCommonFirstName();
    console.log('Most common first name is: ' + commonFirstName);

    // Show statistics
    myTable +=
        '<tr>' +
        '<td>' + commonFirstName + '</td>' +
        '<td> - </td>' +
        '<td> - </td>' +
        '<td> - </td>' +
        '<td> - </td>' +
        '<td> - </td>' +
        '</tr>';

    myTable += '</table>';

    var container = document.getElementById('listcontainer');
    container.style.display = 'block';
    container.innerHTML = myTable;
}

// Find most common first name
function findMostCommonFirstName() {
    // Count number of appearances for each first name
    var appearances = {}; // stores (firstName-appearances) pairs
    for (id in employeesList) {
        var firstName = employeesList[id].firstName;
        if (appearances[firstName])
            appearances[firstName]++;
        else
            appearances[firstName] = 1;
    }
    console.log(appearances);

    // Find maximum number of appearances and the corresponding first name
    var commonFirstName = null;
    var maxNrOfAppearances = 0;
    for (id in employeesList) {
        var firstName = employeesList[id].firstName;
        if (appearances[firstName] > maxNrOfAppearances) {
            maxNrOfAppearances = appearances[firstName];
            commonFirstName = firstName;
        }
    }

    return commonFirstName;
}

// Calculate number of unique last names
function calculateNrOfUniqueLastNames() {
    // Count number of appearances for each last name
    var appearances = {}; // stores (lastName-appearances) pairs
    for (id in employeesList) {
        var lastName = employeesList[id].lastName;
        if (appearances[lastName] == undefined)
            appearances[lastName] = 1;
    }

    return appearances.length;
    // -------------------------------------------------
}

function hideList() {
    var container = document.getElementById('listcontainer');
    container.style.display = 'none';
}

function showTotalSalary() {
    var myParagraph = '<p>';

    var totalSalary = 0.0;
    for (var id in employeesList) {
        totalSalary += employeesList[id].salary;
    }

    myParagraph += totalSalary.toFixed(2) + '</p>';

    var container = document.getElementById('totalSalaryContainer');
    container.style.display = 'block';
    container.innerHTML = myParagraph;
}

function hideTotalSalary() {
    var container = document.getElementById('totalSalaryContainer');
    container.style.display = 'none';
}

function showOneEmployee(id) {
    alert(employeesList[id].firstName + ' ' +
        employeesList[id].lastName + ' ' +
        employeesList[id].phone + ' ' +
        employeesList[id].salary + '.');
}

var Employee = function(firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;

    employeesList.push(new Employee(firstName, lastName, phone, salary));

    showList();
}

function deleteOneEmployee(id) {
    employeesList.splice(id, 1);

    showList();
}

function deleteLastEmployee() {
    employeesList.pop();

    showList();
}
