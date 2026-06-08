let students = [];
let editIndex = -1;

function addStudent() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value.trim();

    if (name === "" || email === "" || course === "") {
        alert("Please fill all fields!");
        return;
    }

    if (editIndex === -1) {

        students.push({
            name: name,
            email: email,
            course: course
        });

        alert("✅ Student Added Successfully!");

    } else {

        students[editIndex] = {
            name: name,
            email: email,
            course: course
        };

        alert("✏️ Student Updated Successfully!");

        editIndex = -1;

        document.querySelector(".add-btn").innerText =
            "Add Student";
    }

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";

    displayStudents();
}

function displayStudents() {

    const studentList = document.getElementById("studentList");

    studentList.innerHTML = "";

    students.forEach((student, index) => {

        studentList.innerHTML += `
            <div class="student-card">
                <h3>${student.name}</h3>
                <p>${student.email}</p>
                <p>${student.course}</p>

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

    document.getElementById("totalStudents").innerText =
        students.length;
}

function editStudent(index) {

    document.getElementById("name").value =
        students[index].name;

    document.getElementById("email").value =
        students[index].email;

    document.getElementById("course").value =
        students[index].course;

    editIndex = index;

    document.querySelector(".add-btn").innerText =
        "Update Student";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function deleteStudent(index) {

    let confirmDelete =
        confirm("Are you sure you want to delete this student?");

    if (confirmDelete) {

        students.splice(index, 1);

        displayStudents();

        alert("🗑️ Student Deleted Successfully!");
    }
}

function searchStudent() {

    const search =
        document.getElementById("search").value.toLowerCase();

    const cards =
        document.querySelectorAll(".student-card");

    cards.forEach(card => {

        if (card.innerText.toLowerCase().includes(search)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
