let students = [];
let editIndex = -1;

function addStudent(){

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let course =
    document.getElementById("course").value;

    if(name==="" || email==="" || course===""){
        alert("Please fill all fields");
        return;
    }

    if(editIndex===-1){

        students.push({
            name:name,
            email:email,
            course:course
        });

        alert("✅ Student Added Successfully!");

    }else{

        students[editIndex]={
            name:name,
            email:email,
            course:course
        };

        alert("✏️ Student Updated Successfully!");

        editIndex=-1;
    }

    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("course").value="";

    displayStudents();
}

function displayStudents(){

    let studentList =
    document.getElementById("studentList");

    studentList.innerHTML="";

    students.forEach((student,index)=>{

        studentList.innerHTML += `
        <div class="student">
            <p>
            ${student.name}
            -
            ${student.email}
            -
            ${student.course}
            </p>

            <button class="edit-btn"
            onclick="editStudent(${index})">
            Edit
            </button>

            <button class="delete-btn"
            onclick="deleteStudent(${index})">
            Delete
            </button>
        </div>
        `;
    });

    document.getElementById("count").innerText =
    students.length;
}

function editStudent(index){

    document.getElementById("name").value =
    students[index].name;

    document.getElementById("email").value =
    students[index].email;

    document.getElementById("course").value =
    students[index].course;

    editIndex=index;
}

function deleteStudent(index){

    if(confirm("Delete this student?")){

        students.splice(index,1);

        displayStudents();
    }
}

function searchStudent(){

    let input =
    document.getElementById("search")
    .value.toLowerCase();

    let cards =
    document.getElementsByClassName("student");

    for(let i=0;i<cards.length;i++){

        let text =
        cards[i].innerText.toLowerCase();

        if(text.includes(input)){
            cards[i].style.display="block";
        }
        else{
            cards[i].style.display="none";
        }
    }
}
