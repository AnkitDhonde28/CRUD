var selectedRow = null;
const arr = new Set();
function onFormsubmit(){
    event.preventDefault();
    if(arr.has(document.getElementById("empid").value)){
        alert('id is used');
        return;
    }
    var checkage = document.getElementById("empage").value;
    if(checkage>=16 && checkage<=60){
        alert("record inserted");    
    }else{
        alert("please enter the age between 16 to 60");
        return;
    }
    var formdata = readData();
    if (selectedRow == null){
        insert(formdata);
    }
    arr.add(document.getElementById("empid").value);
    console.log(arr);
    resetForm();    
}


function readData(){
    var formdata = {};
    formdata["empid"] = document.getElementById("empid").value;
    formdata["empname"] = document.getElementById("empname").value;
    formdata["empage"] = document.getElementById("empage").value;
    formdata["gender"] = document.getElementById("gender").value;
    return formdata;
}

function insert(data){
    var table = document.getElementById("emplist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.empid;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.empage;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gender;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button onClick="onDelete(this)">Delete</button>`;
}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('emplist').deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm() {
    document.getElementById("empid").value = '';
    document.getElementById("empname").value = '';
    document.getElementById("empage").value = '';
    document.getElementById("gender").value = '';
    selectedRow = null;
}

