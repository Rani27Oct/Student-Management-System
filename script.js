let students = [];

function addStudent(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    if(name==="" || email==="" || course===""){
        alert("Please fill all fields");
        return;
    }

    students.push({
        name:name,
        email:email,
        course:course
    });

    displayStudents();

    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("course").value="";
}

function displayStudents(){

    let list = document.getElementById("studentList");

    list.innerHTML="";

    students.forEach((student,index)=>{

        list.innerHTML += `
        <li>
            ${student.name} - ${student.email} - ${student.course}
            <br>
            <button class="editBtn" onclick="editStudent(${index})">Edit</button>
            <button class="deleteBtn" onclick="deleteStudent(${index})">Delete</button>
        </li>`;
    });
}

function deleteStudent(index){

    students.splice(index,1);

    displayStudents();
}

function editStudent(index){

    let newName = prompt("Enter New Name",students[index].name);

    if(newName){

        students[index].name = newName;

        displayStudents();
    }
}

function searchStudent(){

    let input =
    document.getElementById("search")
    .value.toLowerCase();

    let listItems =
    document.querySelectorAll("#studentList li");

    listItems.forEach(item=>{

        if(item.innerText.toLowerCase().includes(input)){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }
    });
}
