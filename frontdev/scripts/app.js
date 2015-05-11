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
        phone: '733910232',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '41059423',
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
        phone: '778003104',
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

    var uniqueLastNames = calculateNrOfUniqueLastNames();
    console.log('There are ' + uniqueLastNames + ' unique last names.');

    var commonPhoneNumberDigits = topCommonPhoneNumberDigits();
    console.log('Top 5 most common digits: ' + commonPhoneNumberDigits + '.');

    var averageSalary = calculateAverageSalary();
    console.log('The average salary is: ' + averageSalary + '.');

    // Show statistics
    myTable +=
        '<tr>' +
        '<td>' + commonFirstName + '</td>' +
        '<td>' + uniqueLastNames + '</td>' +
        '<td>' + commonPhoneNumberDigits + '</td>' +
        '<td>' + averageSalary + '</td>' +
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
    for (var id in employeesList) {
        var firstName = employeesList[id].firstName;
        if (appearances[firstName])
            appearances[firstName]++;
        else
            appearances[firstName] = 1;
    }

    // Find maximum number of appearances and the corresponding first name
    var commonFirstName = null;
    var maxNrOfAppearances = 0;
    for (var id in employeesList) {
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
    for (var id in employeesList) {
        var lastName = employeesList[id].lastName;
        if (appearances[lastName] == undefined)
            appearances[lastName] = 1;
    }

    return Object.keys(appearances).length;
}

// Find top 5 most common phone number digits
function topCommonPhoneNumberDigits() {
    var digits = {};
    for (var digit = '0'; digit < '10'; digit++)
        digits[digit] = 0;

    for (var id in employeesList) {
        var phoneNumber = employeesList[id].phone;
        for (var i = 0; i < phoneNumber.length; i++)
            digits[phoneNumber.charAt(i)]++;
    }

    var sortedDigits = Object.keys(digits).sort(function(a, b) {
        return digits[a] - digits[b];
    });

    return sortedDigits.splice(-5);
}

function calculateAverageSalary() {
    var totalSalary = 0;
    for (var id in employeesList)
        totalSalary += employeesList[id].salary;

    var numberOfEmployees = employeesList.length;
    if (numberOfEmployees != 0)
        return totalSalary / numberOfEmployees;
    else
        return 0.0;
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
