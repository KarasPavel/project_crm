let direction_it = document.getElementById("direction_it");
let position_it = document.getElementById("position_it");
let skill_name_employees = document.getElementById("skill_name_employees");
let outDataASPT;

var employeetable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];


httpGet(location.origin+"/direction")
    .then(response => funcSelectDirection(JSON.parse(response)));
function funcSelectDirection(extData) {
    for (let i = 0; i < extData.length; i++) {
        elem = new Option(extData[i]['direction'], extData[i]['id']);
        direction_it.appendChild(elem)
    }
}

httpGet(location.origin+"/position")
    .then(response => funcSelectPosition(JSON.parse(response)));

function funcSelectPosition(extData) {
    for (let i = 0; i < extData.length; i++) {
        elem = new Option(extData[i]['position'], extData[i]['id']);
        position_it.appendChild(elem)
    }
}

httpGet(location.origin+"/skills")
    .then(response => funcSelectSkill(JSON.parse(response)));

function funcSelectSkill(extData) {
    for (let i = 0; i < extData.length; i++) {
        elem = new Option(extData[i]['skill_name'], extData[i]['id']);
        skill_name_employees.appendChild(elem)
    }
}



function studget(studdata) {
    // CLEAR TABLE BY DELETE ROWS
    console.log(studdata)
    globaldata = studdata;
    for (let i = document.getElementById('employeeTable').getElementsByTagName('tr').length - 1; i; i--) {
        document.getElementById('employeeTable').deleteRow(i);
    }
    var rowTable = 0;
    for (var gr in studdata) {
        var row = employeetable.insertRow(rowTable);
        if(studdata[gr]['ASPT'] === 1) {outDataASPT = 'Yes' } else outDataASPT = 'No';
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = '<a href="employees/show/' + studdata[gr]['person_id'] + '">' + studdata[gr]['name'] + '</a>';
        cell2.innerHTML = '<a href="employees/show/' + studdata[gr]['person_id'] + '">' + studdata[gr]['position'] + '</a>';
        cell3.innerHTML = '<a href="employees/show/' + studdata[gr]['person_id'] + '">' + studdata[gr]['direction'] + '</a>';
        cell4.innerHTML = '<a href="employees/show/' + studdata[gr]['person_id'] + '">' + studdata[gr]['company_name'] + '</a>';
        cell5.innerHTML = '<a href="employees/show/' + studdata[gr]['person_id'] + '">' + outDataASPT + '</a>';
        cell6.innerHTML = '<a href="employees/show/' + studdata[gr]['person_id'] + '">' + studdata[gr]['comment'] + '</a>';
        rowTable++;
    }
}

function allEmployeesShow() {
    jsonPost(location.origin + "/employees/data", 5)
        .then(response => studget(JSON.parse(response)))
        .then(studget(studdata))
}
allEmployeesShow();

// function allStudensShow() {
//     jsonPost(location.origin + "/students/studentsalloutput", 5)
//         .then(response => studget(JSON.parse(response)))
//         .then(studget(studdata))
// }
//     allStudensShow();