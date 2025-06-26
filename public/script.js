const time = new Date();
const year = time.getFullYear();
const date = time.getDate();
const month = time.getMonth();
let hours = time.getHours();
const meritiam = hours >= 12 ? "PM" : "AM";

hours = hours.toString().padStart(2, "0");
const minutes = time.getMinutes().toString().padStart(2, "0");

RailTime = `${hours}:${minutes}`;
hours = hours % 12 || 12;
let timeDate = `${date}/${month + 1}/${year}`;
let Time = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${meritiam}`;

const GoodTime = meritiam == "AM" ? "Good Morning🌅" : "Good Afternoon☀️" || RailTime >= "16:00" ? "Good Evening🌇" : "Good Afternoon☀️";
document.getElementById("Time").textContent = `${GoodTime}`;
document.getElementById("Date").textContent = `Today is ${timeDate}`;


const loginAdmin = () => {
    document.getElementById("bodyDiv").innerHTML = "";
    document.getElementById("bodyDiv").innerHTML = `
    <button id="Back" onclick="homePage()"><i class="fa-solid fa-chevron-left"></i></i></button>
    <h1>Login for Admin</h1>
    <div id="main">
   
    <div id="loginBox">
        <table>
            <tr>
                <td colspan="2">
                    <h2>Login for Admin</h2>
                </td>
            </tr>
            <tr>
                <td><label for="username">UserName:</label></td>
                <td><input type="text" id="username"></td>
            </tr>
            <tr>
                <td><label for="password">Password:</label></td>
                <td><input type="password" id="password"></td>
            </tr>
            <tr>
                <td><button id="loginBtn" onclick="showLoginAdmin()">Login</button></td>
            </tr>
        </table>
    </div>`
}

const loginStudents = () => {
    document.getElementById("bodyDiv").innerHTML = "";
    document.getElementById("bodyDiv").innerHTML = `
    <button id="Back" onclick="homePage()"><i class="fa-solid fa-chevron-left"></i></i></button>
    <h1>Login for Students</h1>
    <div id="main">
    <div id="loginBox">
        <table>
            <tr>
                <td colspan="2">
                    <h2>Login for Students</h2>
                </td>
            </tr>
            <tr>
                <td><label for="username">UserName:</label></td>
                <td><input type="text" id="username"></td>
            </tr>
            <tr>
                <td><label for="password">Password:</label></td>
                <td><input type="password" id="password"></td>
            </tr>
            <tr>
                <td><button id="loginBtn" onclick="showLoginStudents()">Login</button></td>
            </tr>
        </table>
    </div>
</div>`;
}

const loginStaff = () => {
    document.getElementById("bodyDiv").innerHTML = "";
    document.getElementById("bodyDiv").innerHTML = `
    <button id="Back" onclick="homePage()"><i class="fa-solid fa-chevron-left"></i></i></button>
    <h1>Login for Staff</h1>
    <div id="main">
    <div id="loginBox">
        <table>
            <tr>
                <td colspan="2">
                    <h2>Login for Staff</h2>
                </td>
            </tr>
            <tr>
                <td><label for="username">UserName:</label></td>
                <td><input type="text" id="username"></td>
            </tr>
            <tr>
                <td><label for="password">Password:</label></td>
                <td><input type="password" id="password"></td>
            </tr>
            <tr>
                <td><button id="loginBtn" onclick="showLoginStaff()">Login</button></td>
            </tr>
        </table>
    </div>
</div>`;
}

class studentsLogin {
    static objCount = 0;
    static allObjects = [];

    constructor(UserName, RollNo) {
        this.UserName = UserName;
        this.RollNo = RollNo;
        studentsLogin.objCount++;
        studentsLogin.allObjects.push(this);
    }

}

const Aarthese = new studentsLogin("Aarthese", 23104001);
const Abina = new studentsLogin("Abina", 23104002);
const Abinaya = new studentsLogin("Abinaya", 23104003);
const Abirami = new studentsLogin("Abirami", 23104004);
const Abisha = new studentsLogin("Abisha", 23104005);
const Abishamary = new studentsLogin("Abishamary", 23104006);
const Abisheka = new studentsLogin("Abisheka", 23104007);
const Akshayalakshmi = new studentsLogin("Akshayalakshmi", 23104008);
const Arumugavel = new studentsLogin("Arumugavel", 23104009);
const Arunkumar = new studentsLogin("ArunKumar", 23104010);
const Ashokraja = new studentsLogin("Ashokraja", 23104011);
const Baras = new studentsLogin("Baras", 23104012);
const BavaniC = new studentsLogin("BavaniC", 23104013);
const BavaniS = new studentsLogin("BavaniS", 23104014);
const Bern = new studentsLogin("Bern", 23104015);
const Chinnathambi = new studentsLogin("Chinnathambi", 23104016);
const Esakkisorna = new studentsLogin("Esakkisorna", 23104017);
const Giftyhepzipal = new studentsLogin("Giftyhepzipal", 23104018);
const Heavencyrose = new studentsLogin("Heavencyrose", 23104019);
const Irudayajency = new studentsLogin("Irudayajency", 23104020);
const Jensha = new studentsLogin("Jensha", 23104021);
const Jesuagnel = new studentsLogin("Jesuagnel", 23104022);
const Johnimmanuel = new studentsLogin("Johnimmanuel", 23104023);
const Johnrabeender = new studentsLogin("Johnrabeender", 23104024);
const Kamalieswari = new studentsLogin("Kamalieswari", 23104026);
const Karthiga = new studentsLogin("Karthiga", 23104027);
const Keerthana = new studentsLogin("Keerthana", 23104028);
const Lingapabitha = new studentsLogin("Lingapabitha", 23104029);
const Mariyappan = new studentsLogin("Mariyappan", 23104030);
const Meehaebanesar = new studentsLogin("Meehaebanesar", 23104031);
const Mohamedbahrudeen = new studentsLogin("Mohamedbahrudeen", 23104032);
const Muthuesakkiammal = new studentsLogin("Muthuesakkiammal", 23104033);
const Muthukrishnan = new studentsLogin("Muthukrishnan", 23104034);
const Pattuperumal = new studentsLogin("Pattuperumal", 23104035);
const Pooja = new studentsLogin("Pooja", 23104036);
const Priya = new studentsLogin("Priya", 23104037);
const Priyadharshini = new studentsLogin("Priyadharshini", 23104038);
const RajeshKumar = new studentsLogin("Rajeshkumar", 23104039);
const Rakeshpraveen = new studentsLogin("Rakeshpraveen", 23104040);
const Sampeter = new studentsLogin("Sampeter", 23104041);
const Santhiyagusabin = new studentsLogin("Santhiyagusabin", 23104042);
const Selvaallsiya = new studentsLogin("Selvaallsiya", 23104043);
const Selvakumar = new studentsLogin("Selvakumar", 23104044);
const Selvapriya = new studentsLogin("Selvapriya", 23104045);
const Selvarathiakshal = new studentsLogin("Selvarathiakshal", 23104046);
const Sherinsamika = new studentsLogin("Sherinsamika", 23104047);
const Sipi = new studentsLogin("Sipi", 23104048);
const Srimithuna = new studentsLogin("Srimithuna", 23104050);
const Subashrackshan = new studentsLogin("Subashrackshan", 23104051);
const Suganthi = new studentsLogin("Suganthi", 23104052);
const Suryakala = new studentsLogin("Suryakala", 23104053);
const Sushmitha = new studentsLogin("Sushmitha", 23104054);
const Suviseshgiftson = new studentsLogin("Suviseshgiftson", 23104055);
const Swathi = new studentsLogin("Swathi", 23104056);
const Sweetyesther = new studentsLogin("Sweetyesther", 23104057);
const Udhayakumar = new studentsLogin("Udhayakumar", 23104058);
const Vignesh = new studentsLogin("Vignesh", 23104059);
const Willingsraja = new studentsLogin("Willingsraja", 23104060);
const Artheeswari = new studentsLogin("Artheeswari", 23104301);
const Balakrishnan = new studentsLogin("Balakrishnan", 23104302);
const Chinnadurai = new studentsLogin("Chinnadurai", 23104303);
const Mohammedmunaf = new studentsLogin("Mohammedmunaf", 23104304);
const Stellapersiya = new studentsLogin("Stellapersiya", 23104305);
const Obedrajasingh = new studentsLogin("Obedrajasingh", 23104701);

//console.log(studentsLogin.allObjects);


function showLoginStudents() {

    const userName = document.getElementById("username");
    const password = document.getElementById("password");
    if (userName.value == "" || userName.value == null || password.value == "" || password.value == null) {
        window.alert("Enter UserName and Password");
    }

    else if (Boolean(userName.value.trim()) && Boolean(password.value)) {
        let Checking = true;
        for (let i = 0; i < studentsLogin.allObjects.length; i++) {
            if (userName.value.trim() == studentsLogin.allObjects[i].UserName && password.value == studentsLogin.allObjects[i].RollNo) {
                document.getElementById("bodyDiv").innerHTML = "";
                document.getElementById("bodyDiv").innerHTML = `
                <div id="mainPopup">
                    <div id="popup">
                        
                        <div>
                          <h2>${studentsLogin.allObjects[i].UserName}</h2>
                          <h2>Roll No: ${studentsLogin.allObjects[i].RollNo}</h2>
                          <h2 id="percentage">Your Percentage: </h2>
                        </div>
                        <button id="close">Close</button>
                    </div>
                </div>
                <div id="waitPopup">
                    <div id="wait">
                        <h2 id="waitMeg">Waiting For Processing...</h2>
                    </div>

                </div>
                <button id="Back" onclick="homePage()"><i class="fa-solid fa-chevron-left"></i></i></button>
                <h1>Welcome to JACSICE</h1>
                <h2>${studentsLogin.allObjects[i].UserName}</h2>                 
                <div id="studentsPage">
                    
                <div id="Access">
                 <div>
                   <i class="fa-solid fa-percent fonts"></i>
                   <h2>Get Percentage</h2>
                   <button id="GetPercentageBtn" onclick="getPercentage(${userName.value.trim()} ,${Number(password.value)})">Get</button>
                 </div>
                </div>
                </div>`;
                Checking = false;
                break;
            }
        }
        if (Checking) {
            window.alert("invalid username or password");
        }

    }
}

const showLoginAdmin = () => {

    const userName = document.getElementById("username");
    const password = document.getElementById("password");
    if (userName.value == "" || userName.value == null || password.value == "" || password.value == null) {
        window.alert("Enter UserName and Password");
    }

    else if (userName.value.trim() == "Admin" && password.value == "12345") {
        showloginAdmin = () => {
            document.getElementById("bodyDiv").innerHTML = "";
            document.getElementById("bodyDiv").innerHTML = `
        <button id="Back" onclick="homePage()"><i class="fa-solid fa-chevron-left"></i></i></button>
        <h1>Welcome to JACSICE</h1>
        <div id="AdminMain">
            <h2>${GoodTime}</h2>
            <h2>Today is ${timeDate}</h2>
            <div id="adminPage">
                <div id="Access">
                    <div>
                        <i class="fa-solid fa-users fonts"></i>
                        <h2>Students</h2>
                        <button class="LoginBtn" onclick="AdminDept()">Show Students</button>
                    </div>
                    <div>
                        <i class="fa-solid fa-user-shield fonts"></i>
                        <h2>Staff</h2>
                        <button class="LoginBtn" onclick="showAllStaff()">Show Staff</button>
                    </div>
                </div>
            </div>`;
            document.title = "Admin";
        }
        showloginAdmin();
    }
    else {
        window.alert("invalid username or password");
    }
}

function AdminDept() {
    document.getElementById("bodyDiv").innerHTML = "";
    //console.log(document.getElementById("bodyDiv"));

    document.getElementById("bodyDiv").innerHTML = `
    <button id="Back" onclick="showloginAdmin()"><i class="fa-solid fa-chevron-left"></i></i></button>
    <div id="depts">
<a ><div id="cse" class="dept" onclick="AdminCse()"><h1>CSE</h1></div></a>
<a href="ececlass.html"><div id="ece" class="dept"><h1>ECE</h1></div></a>
<a href="mechclass.html"><div id="mech" class="dept"><h1>MECH</h1></div></a>
<a href="aiclass.html"><div id="ai" class="dept"><h1>AI</h1></div></a>
<a href="itclass.html"> <div id="id" class="dept"><h1>IT</h1></div></a>
</div>`;
    document.title = "Departments";
}

function AdminCse() {
    document.getElementById("bodyDiv").innerHTML = "";
    document.getElementById("bodyDiv").innerHTML = `
        <button id="Back" onclick="AdminDept()"><i class="fa-solid fa-chevron-left"></i></i></button>
        <div id="classes">
<a ><div id="1year" class="class" onclick=""><h1>1 year</h1></div></a>
<a ><div id="2year" class="class" onclick="AdminCse2()"><h1>2 year</h1></div></a>
<a ><div id="3year" class="class" onclick=""><h1>3 year</h1></div></a>
<a><div id="4year" class="class" onclick=""><h1>4 year</h1></div></a>
</div>`;
    document.title = "CSE Classes";
}

async function AdminCse2() {
    let data = await getAllStudent();
    //console.log(data);
    document.getElementById("bodyDiv").innerHTML = "";
    //console.log(document.getElementById("bodyDiv"));
    document.getElementById("bodyDiv").innerHTML = `

<button id="Back" onclick="AdminCse()"><i class="fa-solid fa-chevron-left"></i></button>
    <div style="display:none;" id="mainAddPopup">
        <button id="Back" class="StaffBack"><i class="fa-solid fa-chevron-left"></i></button>
    <div id="popup">
    <form>
        <h1 id="Title">Add Students</h1>
        <table>
            <tr>
                <td><label for="StudentName">Student Name: </label></td><td><input type="text" placeholder="Student Name" required id="StudentName"></td>
            </tr>
            <tr>
                <td><label for="rollno">Roll No: </label></td><td><input type="number" placeholder="Roll No" required id="rollno"></td>
            </tr>


            <tr>
                <td colspan="2"><button type="button" id="LoginBtn" onclick="AddStudent()">Add Student</button></td>

            </tr>
            <tr>
                <td colspan="2"><button type="button" id="UpdateStudentBtn" style="display:none"  onclick="UpdateStudentInBase()">Update Student</button></td>            
            </tr>
        </table>
    </form>
</div>
</div>
<h1>CSE 2-YEAR</h1>
<div id="students" class="allStudents">
    <button id="AddStaff" onclick="ShowStudentPOPUP()">+</button>
</div>`;
    document.title = "CSE 2-YEAR";
    const AllStudents = document.querySelector(".allStudents");
    data.forEach(student => {
        if (student.name == "TWD") {
        }
        else {
            StudentDiv = document.createElement("div");
            StudentDiv.classList = "student";
            StudentDiv.innerHTML = `
        <img src="male.jpg" alt="${student.name}" width="200px" height="200px" >
        <h2><strong>Name: </strong> ${student.name}</h2>
        <p><strong>Roll No: </strong> ${student.rollno}</p>
        <h3>History</h3>
        <button id="updateBtn" onclick="updateStudentPOPUP(event)">update</button>
        <button id="deleteBtn" onclick="deleteStudent('${student.rollno}')">Delete</button>

        `;
            AllStudents.appendChild(StudentDiv);
        }
    })
}

ShowStudentPOPUP = () => {
    document.getElementById("mainAddPopup").style.display = "block";
    document.querySelector(".StaffBack").onclick = () => {
        document.getElementById("mainAddPopup").style.display = "none";
    }
    document.getElementById("UpdateStudentBtn").style.display = "none";
    document.getElementById("LoginBtn").style.display = "block";

}

updateStudentPOPUP = (event) => {
    document.getElementById("mainAddPopup").style.display = "block";
    document.getElementById("Title").textContent = "Update Staff";
    document.querySelector(".StaffBack").onclick = () => {
        document.getElementById("mainAddPopup").style.display = "none";
    }
    document.getElementById("UpdateStudentBtn").style.display = "block";
    document.getElementById("LoginBtn").style.display = "none";

    const StudentName = document.getElementById("StudentName");
    const RollNo = document.getElementById("rollno");
    event.target.parentElement.querySelectorAll("p").forEach(p => {
        studentRollNo = p.textContent;
        console.log(studentRollNo);
        if (studentRollNo.startsWith("Roll No")) {
            RollNo.value = studentRollNo.split(":")[1].trim();
        }
    });
    event.target.parentElement.querySelectorAll("h2").forEach(h2 => {
        studentName = h2.textContent;
        console.log(studentName);
        if (studentName.startsWith("Name")) {
            StudentName.value = studentName.split(":")[1].trim();
        }
    })
}

function UpdateStudentInBase() {
    const StudentName = document.getElementById("StudentName");
    const RollNo = document.getElementById("rollno");
    console.log(StudentName.value, RollNo.value);
    let datas = {
        name: StudentName.value,
        rollno: RollNo.value,
    }
    updateStudent(RollNo.value, datas);

}

async function updateStudent(rollno, updatedData) {
    const APIURL = `/api/students/${rollno} `;
    try {
        const response = await fetch(APIURL, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Student updated:", data);

        document.getElementById("mainAddPopup").style.display = "none";
        document.getElementById("waitMeg").textContent = "Student Updated Successfully";
        document.getElementById("wait").style.backgroundColor = "rgb(0, 255, 0)";
        document.getElementById("wait").style.display = "block";
        await AdminCse2();
        setTimeout(() => {
            document.getElementById("wait").style.display = "none";
        }, 4000);
        // Optionally, you can refresh the staff list or show a success message
    } catch (error) {
        document.getElementById("waitMeg").textContent = 'Error updating Student:', error;
        document.getElementById("wait").style.backgroundColor = "rgb(255, 0, 0)";
        document.getElementById("wait").style.display = "block";
        setTimeout(() => {
            document.getElementById("wait").style.display = "none";
        }, 4000);
        console.error('Error updating Student:', error);
    }
}

async function deleteStudent(rollno) {
    const APIURL = `/api/students/${rollno} `;
    try {
        const response = await fetch(APIURL, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Student deleted:", data);
        document.getElementById("waitMeg").textContent = "Student Deleted";
        document.getElementById("wait").style.display = "block";
        document.getElementById("wait").style.backgroundColor = "red";
        await AdminCse2();
        setTimeout(() => {
            document.getElementById("wait").style.display = "none";
            document.getElementById("wait").style.backgroundColor = "rgb(0, 255, 0);";

        }, 4000);
        // Optionally, you can refresh the staff list or show a success message
    } catch (error) {
        console.error('Error deleting Student:', error);
    }
}

function AddStudent() {
    const StudentName = document.getElementById("StudentName");
    const RollNo = document.getElementById("rollno");


    if (StudentName.value == "" || RollNo.value == "") {
        window.alert("Enter all the fields");
    }
    else {
        //console.log(StudentName.value, RollNo.value);
        // Add code to save staff details
        AddNewStudent(StudentName.value.trim(), RollNo.value.trim());
        // After saving, you can close the popup
        document.getElementById("mainAddPopup").style.display = "none";

    }
}

async function AddNewStudent(name, rollno) {

    if (name === "" || rollno === "") {
        window.alert("Please fill all fields");
        return;
    }
    attendance = 0;
    history = [];
    TotalWorkDays = 0;

    const APIURL = '/api/students';
    try {
        const response = await fetch('/api/students', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, rollno, attendance, history, TotalWorkDays })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        //console.log("New Student added:", data);
        document.getElementById("waitMeg").textContent = "Student Added Successfully";
        document.getElementById("wait").style.backgroundColor = "rgb(0, 255, 0)";
        document.getElementById("wait").style.display = "block";
        AdminCse2();
        setTimeout(() => {
            document.getElementById("wait").style.display = "none";

        }, 4000);
        // Optionally, you can refresh the staff list or show a success message
    } catch (error) {
        document.getElementById("waitMeg").textContent = "Error adding new Student";
        document.getElementById("wait").style.backgroundColor = "red";
        document.getElementById("wait").style.display = "block";
        setTimeout(() => {
            document.getElementById("wait").style.display = "none";

        }, 4000);
        console.error('Error adding new Student:', error);
    }
}

async function getAllStudent() {
    const APIURL = '/api/students';
    try {
        const response = await fetch(APIURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        data = await response.json();
        //console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching Students:', error);
        document.getElementById("waitMeg").textContent = "Internal Server Error";
        document.getElementById("wait").style.backgroundColor = "red";
        document.getElementById("wait").style.display = "block";
        setTimeout(() => {
            document.getElementById("wait").style.display = "none";
        }, 4000)
    }
}

async function showAllStaff() {
    await getAllStaff();
    //console.log(data);

    document.getElementById("bodyDiv").innerHTML = "";
    document.getElementById("bodyDiv").innerHTML = `
        <div id="wait" style = "display:none;">
            <h2 id="waitMeg"></h2>
    </div >
        <button id="Back" onclick="showloginAdmin()"><i class="fa-solid fa-chevron-left"></i></i></button >
    <div style="display:none;" id="mainAddPopup">
        <button id="Back" class="StaffBack" ><i class="fa-solid fa-chevron-left"></i></button>
    <div id="popup">
    <form>
        <h1 id="Title">Add Staff</h1>
        <table>
            <tr>
                <td><label for="StaffName">Staff Name: </label></td><td><input type="text" placeholder="Staff Name" required id="StaffName"></td>
            </tr>
            <tr>
                <td><label for="StaffID">Staff ID: </label></td><td><input type="text" placeholder="Staff ID" required id="StaffID"></td>
            </tr>
            <tr>
                <td><label for="Email">Staff Email: </label></td><td><input type="email" placeholder="Staff mail" required id="Email"></td>
            </tr>
            <tr>
                <td><label for="Department">Department: </label></td>
                <td>
                    <select id="Department" required>
                        <option value="" disabled selected>Select Department</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="IT">IT</option>
                        <option value="MECH">MECH</option>
                        <option value="AI">AI</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><label for="Designation">Designation: </label></td>
                <td>
                    <select id="Designation" required>
                        <option value="" disabled selected>Select Designation</option>
                        <option value="Professor">Professor</option>
                        <option value="Assistant Professor">Assistant Professor</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td colspan="2"><button type="button" id="LoginBtn" onclick="AddStaff()">Add Staff</button></td>

            </tr>
            <tr>
                <td colspan="2"><button type="button" id="UpdateStaffBtn" style="display:none"  onclick="UpdateStaffInBase()">Update Staff</button></td>            
            </tr>
        </table>
    </form>

    </div>
</div>
    <h1>All Staffs🧑‍🏫</h1>
    <div id="AllStaff">
        <div id="staffs">
        </div>
        <button id="AddStaff" onclick="ShowPOPUP()">+</button>

    </div>`;

    document.title = "All Staffs";
    const staffs = document.getElementById("staffs");
    data.forEach(staff => {
        staffDiv = document.createElement("div");
        staffDiv.id = "staffMember";
        staffDiv.innerHTML = `
        <img src="male.jpg" alt="${staff.staffName}" width="200px" height="200px" >
        <p><strong>Staff Name:</strong> ${staff.staffName}</p>
        <p><strong>Staff ID:</strong> ${staff.staffId}</p>
        <p><strong>Email:</strong><br> ${staff.Email}</p>        
        <p><strong>Department:</strong> ${staff.Department}</p>
        <p><strong>Designation:</strong> ${staff.Designation}</p>
        <button id="updateBtn" onclick="UpdateStaffPOPUP(event)">update</button>
        <button id="deleteBtn" onclick="deleteStaff('${staff.staffId}')">Delete</button>

    `;
        staffs.appendChild(staffDiv);
    })
}

UpdateStaffPOPUP = (event) => {

    document.getElementById("mainAddPopup").style.display = "block";
    document.getElementById("Title").textContent = "Update Staff";
    document.querySelector(".StaffBack").onclick = () => {
        document.getElementById("mainAddPopup").style.display = "none";
    }
    document.getElementById("UpdateStaffBtn").style.display = "block";
    document.getElementById("LoginBtn").style.display = "none";

    const StaffName = document.getElementById("StaffName");
    const StaffID = document.getElementById("StaffID");
    const Email = document.getElementById("Email");
    const Department = document.getElementById("Department");
    const Designation = document.getElementById("Designation");
    event.target.parentElement.querySelectorAll("p").forEach((p) => {
        p = p.textContent;
        console.log(p);
        if (p.startsWith("Staff Name:")) {
            StaffName.value = p.split(":")[1].trim();
        } else if (p.startsWith("Staff ID:")) {
            StaffID.value = p.split(":")[1].trim();
        } else if (p.startsWith("Email:")) {
            Email.value = p.split(":")[1].trim();
        } else if (p.startsWith("Department:")) {
            Department.value = p.split(":")[1].trim();
        } else if (p.startsWith("Designation:")) {
            Designation.value = p.split(":")[1].trim();
        }

    })

}

function UpdateStaffInBase() {
    let datas = {
        staffName: StaffName.value,
        staffId: StaffID.value,
        Email: Email.value,
        Department: Department.value,
        Designation: Designation.value
    }
    console.log(datas, StaffID.value);
    updateStaff(StaffID.value, datas);

}

ShowPOPUP = () => {
    document.getElementById("mainAddPopup").style.display = "block";
    document.querySelector(".StaffBack").onclick = () => {
        document.getElementById("mainAddPopup").style.display = "none";
    }
    document.getElementById("UpdateStaffBtn").style.display = "none";
    document.getElementById("LoginBtn").style.display = "block";

}

function AddStaff() {

    const StaffName = document.getElementById("StaffName");
    const StaffID = document.getElementById("StaffID");
    const Email = document.getElementById("Email");
    const Department = document.getElementById("Department");
    const Designation = document.getElementById("Designation");

    if (StaffName.value == "" || StaffID.value == "" || Email.value == "" || Department.value == "" || Designation.value == "") {
        window.alert("Enter all the fields");
    }
    else {
        console.log(StaffName.value, StaffID.value, Email.value, Department.value, Designation.value);
        // Add code to save staff details
        AddNewStaff(StaffName.value.trim(), StaffID.value.trim(), Email.value.trim(), Department.value, Designation.value);
        // After saving, you can close the popup
        document.getElementById("mainAddPopup").style.display = "none";

    }
}

async function getAllStaff() {
    const APIURL = `/api/staff`;
    try {
        const response = await fetch(APIURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        data = await response.json();
        //console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching staff:', error);
        document.getElementById("waitMeg").textContent = "Internal Server Error";
        document.getElementById("wait").style.backgroundColor = "red";
        document.getElementById("wait").style.display = "block";
        setTimeout(() => {
            document.getElementById("wait").style.display = "none";
        }, 4000)
    }
}

async function AddNewStaff(staffName, staffId, Email, Department, Designation) {

    if (staffName === "" || staffId === "" || Email === "" || Department === "" || Designation === "") {
        window.alert("Please fill all fields");
        return;
    }

    const APIURL = `/api/staff`;
    try {
        const response = await fetch('/api/staff', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ staffName, staffId, Email, Department, Designation })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("New staff added:", data);
        document.getElementById("waitMeg").textContent = "Staff Added Successfully";
        document.getElementById("wait").style.backgroundColor = "rgb(0, 255, 0)";
        document.getElementById("wait").style.display = "block";
        showAllStaff();
        setTimeout(() => {
            document.getElementById("wait").style.display = "none";

        }, 4000);
        // Optionally, you can refresh the staff list or show a success message
    } catch (error) {
        document.getElementById("waitMeg").textContent = "ERROR";
        document.getElementById("wait").style.backgroundColor = "red";
        document.getElementById("wait").style.display = "block";
        setTimeout(() => {
            document.getElementById("wait").style.display = "none";

        }, 4000);
        console.error('Error adding new staff:', error);
    }
}

async function deleteStaff(staffID) {
    const APIURL = `/api/staff/${staffID} `;
    try {
        const response = await fetch(APIURL, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Staff deleted:", data);
        document.getElementById("waitMeg").textContent = "Staff Deleted";
        document.getElementById("wait").style.display = "block";
        document.getElementById("wait").style.backgroundColor = "red";
        showAllStaff();
        setTimeout(() => {
            document.getElementById("wait").style.display = "none";
            document.getElementById("wait").style.backgroundColor = "rgb(0, 255, 0);";

        }, 4000);
        // Optionally, you can refresh the staff list or show a success message
    } catch (error) {
        console.error('Error deleting staff:', error);
    }
}

async function findSingleStaff(staffID) {
    const APIURL = `/api/staff/${staffID} `;
    try {
        const response = await fetch(APIURL, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch staff');
        }
        staff = await response.json();
        //console.log('Fetched staff:', staff);
        // You can now use the staff object to update the UI as needed
        //return staff;
    }
    catch (error) {
        console.error('Error fetching staff:', error);
        alert('Failed to fetch staff details.');
        return null;
    }
}
async function updateStaff(staffID, updatedData) {
    const APIURL = `/api/staff/${staffID} `;
    try {
        const response = await fetch(APIURL, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Staff updated:", data);

        document.getElementById("mainAddPopup").style.display = "none";
        document.getElementById("waitMeg").textContent = "Staff Updated Successfully";
        document.getElementById("wait").style.backgroundColor = "rgb(0, 255, 0)";
        document.getElementById("wait").style.display = "block";
        await showAllStaff();
        setTimeout(() => {
            document.getElementById("wait").style.display = "none";
        }, 4000);
        // Optionally, you can refresh the staff list or show a success message
    } catch (error) {
        document.getElementById("waitMeg").textContent = 'Error updating staff:', error;
        document.getElementById("wait").style.backgroundColor = "rgb(255, 0, 0)";
        document.getElementById("wait").style.display = "block";
        setTimeout(() => {
            document.getElementById("wait").style.display = "none";
        }, 4000);
        console.error('Error updating staff:', error);
    }
}

// Example usage: pushPerformance('STAFF123', { date: '2025-06-25', score: 98, remarks: 'Great job' })
async function pushPerformance(staffId, performanceObj) {
    try {
        const response = await fetch(`/api/staff/${staffId}/performance`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(performanceObj)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to update performance');
        }
        const updatedStaff = await response.json();
        console.log('Performance updated:', updatedStaff);
        return updatedStaff;
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to update performance: ' + error.message);
    }
}

async function TotalWorkedDays(rollno) {
    //const APIURL = `https://studentattendance-1-krzr.onrender.com/api/students`; 
    const APIURL = `/api/students`;
    try {
        const response = await fetch(`${APIURL}/${rollno}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ TotalWorkingDays: 1 })
        });

        console.log(response.ok);

        const data = await response.json();

        if (response.ok) {
            console.log("TotalworkDays updated:", data);
            //fetchStudents();
        } else {
            console.error("Error updating TotalworkDays:", data.message);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

function getPercentage(username, rollno) {
    document.getElementById("waitPopup").style.display = "block";
    document.getElementById("close").onclick = () => {
        document.getElementById("mainPopup").style.display = "none";
    }

    const APIURL = `/api/students`;
    console.log(username.UserName, rollno);
    console.log("Worked");
    let StudentAttendance = 0;
    let TotalWorkingDays = 0;
    async function fetchStudents() {

        try {
            const response = await fetch(`${APIURL}/${rollno}`);
            const students = await response.json();
            StudentAttendance = students.attendance;

        }
        catch (error) {
            console.error('Error fetching students:', error);
        }
        console.log(StudentAttendance);
    }


    async function fetchTotalWorkDays(rollno) {

        try {
            const response = await fetch(`${APIURL}/${rollno}`);
            const TotalWorkDays = await response.json();
            TotalWorkingDays = TotalWorkDays.TotalWorkDays;
        }
        catch (error) {
            console.error('Error fetching TotalWorkDays:', error);
        }
        console.log(TotalWorkingDays);
    }
    fetchStudents();
    fetchTotalWorkDays(951323);
    setTimeout(() => {
        document.getElementById("waitPopup").style.display = "none";
        // console.log(`attendance:${StudentAttendance} , ${TotalWorkingDays}`);
        //console.log(StudentAttendance);
        document.getElementById("percentage").textContent = `Your Percentage: ${((StudentAttendance / TotalWorkingDays) * 100).toFixed(2)}%`;
        document.getElementById("mainPopup").style.display = "block";
    }, 3000);

    //const percentage = (students[0].attendance / 1) * 100;
    //document.getElementById("percentage").textContent = `Your Percentage: ${percentage}%`;
}

function showLoginStaff() {
    const _UserName = "JACSICE";
    const _Password = "12345";
    const userName = document.getElementById("username");
    const password = document.getElementById("password");
    if (userName.value == "" || userName.value == null || password.value == "" || password.value == null) {
        window.alert("Enter UserName and Password");
    }

    else if (userName.value.trim() == _UserName && password.value == _Password) {
        document.getElementById("bodyDiv").innerHTML = "";
        document.getElementById("bodyDiv").innerHTML =
            `<div style="display:none;" id="mainpopupTable">
    <button id="Back" onclick="NonestaffPerformPOPUP()"><i class="fa-solid fa-chevron-left"></i></button>
    <div id="popup">
        <table id="table" border="0">
            <tr>
                <td><label for="StaffName">Staff Name: </label></td><td><input type="text" placeholder="Staff Name" required id="StaffName"></td>
            </tr>
            <tr>
                <td><label for="StaffID">Staff ID: </label></td><td><input type="text" placeholder="Staff ID" required id="StaffID"></td>
            </tr>
            <tr>
                <td><button class="LoginBtn" onclick="CheckStaffLogin()">Login</button></td>
            </tr>
        </table>
    </div>
</div>
    <button id="Back" onclick="homePage()"><i class="fa-solid fa-chevron-left"></i></i></button>
    <h1>Staff Details</h1>
    <div id="StaffChoice">
        <div class="Choice">
        <i class="fa-regular fa-clipboard fonts"></i>
        <h1>Attendance</h1>
        <button id="StaffChoiceBtn" class="LoginBtn" onclick="showDept()">Login</button>
        </div>
        <div class="Choice">
        <i class="fa-solid fa-user fonts"></i>
        <h1>My Profile</h1>
        <button  class="LoginBtn" onclick="ShowstaffPerformPOPUP()">Login</button>
        </div>
    </div>
    `;
        document.title = "Staff Choice";


        //window.open("dept.html", "_self");
    }
    else {
        window.alert("invalid username or password");
    }

}



function homePage() {
    document.getElementById("bodyDiv").innerHTML = "";
    document.getElementById("bodyDiv").innerHTML = `
    <div>
    <h1>Attendance</h1>
    <h2 id="Time">${GoodTime}</h2>
    <h2 id="Date">${timeDate}</h2>
    <div id="firstmain">

        <div id="staff">
            <i class="fa-solid fa-person-chalkboard fonts"></i>
            <h1>Staff</h1>
            <button id="loginStaff" onclick="loginStaff()">Login</button>
        </div>
        <div id="students1">
            <i class="fa-solid fa-graduation-cap fonts"></i>
            <h1>Students</h1>
            <button id="loginStudents" onclick="loginStudents()">Login</button>
        </div>
        <div id="Admin">
            <i class="fa-solid fa-user-shield fonts"></i>
            <h1>Admin</h1>
            <button id="loginAdmin" onclick="loginAdmin()">Login</button>
        </div>
    </div>
</div>
    `;
    document.title = "Attendance";

}
function showDept() {
    document.getElementById("bodyDiv").innerHTML = "";
    //console.log(document.getElementById("bodyDiv"));

    document.getElementById("bodyDiv").innerHTML = `
    <button id="Back" onclick="showStaffChoice()"><i class="fa-solid fa-chevron-left"></i></i></button>
    <div id="depts">
<a ><div id="cse" class="dept" onclick="showCse()"><h1>CSE</h1></div></a>
<a href="ececlass.html"><div id="ece" class="dept"><h1>ECE</h1></div></a>
<a href="mechclass.html"><div id="mech" class="dept"><h1>MECH</h1></div></a>
<a href="aiclass.html"><div id="ai" class="dept"><h1>AI</h1></div></a>
<a href="itclass.html"> <div id="id" class="dept"><h1>IT</h1></div></a>
</div>`;
    document.title = "Departments";
}
function showStaffChoice() {
    document.getElementById("bodyDiv").innerHTML = "";
    document.getElementById("bodyDiv").innerHTML =
        `<div style="display:none;" id="mainpopupTable">
    <button id="Back" onclick="NonestaffPerformPOPUP()"><i class="fa-solid fa-chevron-left"></i></button>
    <div id="popup">
        <table id="table" border="0">
            <tr>
                <td><label for="StaffName">Staff Name: </label></td><td><input type="text" placeholder="Staff Name" required id="StaffName"></td>
            </tr>
            <tr>
                <td><label for="StaffID">Staff ID: </label></td><td><input type="text" placeholder="Staff ID" required id="StaffID"></td>
            </tr>
            <tr>
                <td><button class="LoginBtn" onclick="CheckStaffLogin()">Login</button></td>
            </tr>
        </table>
    </div>
</div>
    <button id="Back" onclick="homePage()"><i class="fa-solid fa-chevron-left"></i></i></button>
    <h1>Staff Details</h1>
    <div id="StaffChoice">
        <div class="Choice">
        <i class="fa-regular fa-clipboard fonts"></i>
        <h1>Attendance</h1>
        <button id="StaffChoiceBtn" class="LoginBtn" onclick="showDept()">Login</button>
        </div>
        <div class="Choice">
        <i class="fa-solid fa-user fonts"></i>
        <h1>My Profile</h1>
        <button  class="LoginBtn" onclick="ShowstaffPerformPOPUP()">Login</button>
        </div>
    </div>
    `;
    document.title = "Staff Details";
}

async function CheckStaffLogin() {

    const StaffName = document.getElementById("StaffName");
    const StaffID = document.getElementById("StaffID");
    if (StaffName.value == "" || StaffName.value == null || StaffID.value == "" || StaffID.value == null) {
        window.alert("Enter Staff Name and Staff ID");
    }
    else {
        await getAllStaff();
        //console.log(data, data[0].staffName);
        for (i = 0; i < data.length; i++) {
            if (StaffName.value == data[i].staffName || StaffID.value == data[i].staffId) {
                await findSingleStaff(StaffID.value);
                //console.log(staff.Performance);
                document.title = "My Profile";
                document.getElementById("bodyDiv").innerHTML = "";
                document.getElementById("bodyDiv").innerHTML =

                    `<button id="Back" onclick="showStaffChoice()"><i class="fa-solid fa-chevron-left"></i></i></button>
        <div >
        <h1 style="text-align:center">My Profile</h1><hr><br>

        <div>
            <img src="male.jpg" width="100px" height="100px">
            <h1 id="Name">${staff.staffName}</h1>
            <h2 id="designation">${staff.Designation}</h2>
        </div>
        <hr>
        <div id="PerformancePage">
            <table>
                <tr>
                    <td><label>Name: </label></td>
                    <td><input type="text" disabled readonly value="${staff.staffName}"></td>
                </tr>
                <tr>
                    <td><label>ID: </label></td>
                    <td><input type="text" disabled readonly value="${staff.staffId}"></td>
                </tr>
                <tr>
                    <td><label>Email: </label></td>
                    <td><input type="text" disabled readonly value="${staff.Email}"></td>
                </tr>
                <tr>
                    <td><label>Department: </label></td>
                    <td><input type="text" disabled readonly value="${staff.Department}"></td>
                </tr>
                <tr>
                    <td><label>Designation: </label></td>
                    <td><input type="text" disabled readonly value="${staff.Designation}"></td>
                </tr>
                <tr>
                    <td><label>TotalTeachingHours: </label></td>
                    <td><input type="number" disabled readonly value="${staff.TotalTeachingHours}"></td>
                </tr>
            </table>
            <hr>
            <div>
            <h1 style="text-align:center">Performance</h1>
            <hr>
            ${Array.isArray(staff.Performance) && staff.Performance.length > 0
                        ? staff.Performance.map(perf => `
        <table border="0" id="PerformanceTable">
            <tr>
                <td class="TD">Course Name:</td><td>${perf.courseName}</td>
            </tr>
            <tr>
                <td  class="TD">Semester:</td><td>${perf.semester}</td>
            </tr>
            <tr>
                <td class="TD">hourDuration:</td><td>${perf.hourDuration}</td>
            </tr>
            <tr>
                <td  class="TD">PeriodTiming:</td><td>${perf.periodTiming}</td>
            </tr>
            <tr>
                <td class="TD">Date:</td><td>${perf.date}</td>
            </tr>
            <tr>
                <td class="TD">Time:</td><td>${perf.time}</td>
            </tr>
            <tr>
                <td class="TD">AbsentStudents:</td>
                <td>
                    <ul>
                        ${Array.isArray(perf.absentStudents) && perf.absentStudents.length > 0
                                ? perf.absentStudents.map(student => `<li>${student}</li>`).join('')
                                : '<li>None</li>'
                            }
                    </ul>
                </td>
            </tr>
            <tr>
                <td class="TD">AbsentStudentsCount:</td><td>${perf.AbsentStudentsCount}</td>
            </tr>
        </table>
        <hr>
        <br>
    `).join('')
                        : '<p>No performance records found.</p>'
                    }

            </div>
        </div>
    </div>
    `;

            }
        }
    }

}

function viewPerformancePage(staff) {
    document.title = "My Profile";
    document.getElementById("bodyDiv").innerHTML = "";
    document.getElementById("bodyDiv").innerHTML =

        `<button id="Back" onclick="showStaffChoice()"><i class="fa-solid fa-chevron-left"></i></i></button>
        <div >
        <h1 style="text-align:center">My Profile</h1><hr><br>

        <div>
            <img src="male.jpg" width="100px" height="100px">
            <h1 id="Name">${staff.staffName}</h1>
            <h2 id="designation">${staff.Designation}</h2>
        </div>
        <hr>
        <div id="PerformancePage">
            <table>
                <tr>
                    <td><label>Name: </label></td>
                    <td><input type="text" disabled readonly value="${staff.staffName}"></td>
                </tr>
                <tr>
                    <td><label>ID: </label></td>
                    <td><input type="text" disabled readonly value="${staff.staffId}"></td>
                </tr>
                <tr>
                    <td><label>Email: </label></td>
                    <td><input type="text" disabled readonly value="${staff.Email}"></td>
                </tr>
                <tr>
                    <td><label>Department: </label></td>
                    <td><input type="text" disabled readonly value="${staff.Department}"></td>
                </tr>
                <tr>
                    <td><label>Designation: </label></td>
                    <td><input type="text" disabled readonly value="${staff.Designation}"></td>
                </tr>
                <tr>
                    <td><label>Performance: </label></td>
                    <td>
                        <table border="1" id="PerformanceTable">
                            <tr>
                                <td>Course Name:</td><td>${staff.Performance.courseName}</td>
                            </tr>
                            <tr>
                                <td>Semester:</td><td>${staff.Performance.semester}</td>
                            </tr>
                            <tr>
                                <td>hourDuration:</td><td>${staff.Performance.hourDuration}</td>
                            </tr>
                            <tr>
                                <td>PeriodTiming:</td><td>${staff.Performance.periodTiming}</td>
                            </tr>
                            <tr>
                                <td>Date:</td><td>${staff.Performance.date}</td>
                            </tr>
                            <tr>
                                <td>Time:</td><td>${staff.Performance.time}</td>
                            </tr>
                            <tr>
    <td>AbsentStudents:</td>
    <td>
        <ul>
            ${Array.isArray(staff.Performance.absentStudents) && staff.Performance.absentStudents.length > 0
            ? staff.Performance.absentStudents.map(student => `<li>${student}</li>`).join('')
            : '<li>None</li>'
        }
        </ul>
    </td>
</tr>
                            <tr>
                                <td>AbsentStudentsCount:</td><td>${staff.Performance.AbsentStudentsCount}</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td><label>TotalTeachingHours: </label></td>
                    <td><input type="number" disabled readonly value="${staff.TotalTeachingHours}"></td>
                </tr>
            </table>
        </div>
    </div>
    `;
}
ShowstaffPerformPOPUP = () => {
    document.getElementById("mainpopupTable").style.display = "block";
}
NonestaffPerformPOPUP = () => {

    document.getElementById("mainpopupTable").style.display = "none";
}

function showCse() {
    document.getElementById("bodyDiv").innerHTML = "";
    document.getElementById("bodyDiv").innerHTML = `
        <button id="Back" onclick="showDept()"><i class="fa-solid fa-chevron-left"></i></i></button>
        <div id="classes">
<a ><div id="1year" class="class" onclick="showCse1()"><h1>1 year</h1></div></a>
<a ><div id="2year" class="class" onclick="showCse2()"><h1>2 year</h1></div></a>
<a ><div id="3year" class="class" onclick="showCse3()"><h1>3 year</h1></div></a>
<a><div id="4year" class="class" onclick="showCse4()"><h1>4 year</h1></div></a>
</div>`;
    document.title = "CSE Classes";
}
//SHOW CSE1
function showCse1() {

    document.getElementById("bodyDiv").innerHTML = "";
    //console.log(document.getElementById("bodyDiv"));
    document.getElementById("bodyDiv").innerHTML = `
    <button id="Back" onclick="showCse()"><i class="fa-solid fa-chevron-left"></i></i></button>
    <div id="main1">
<button id="reviewBtn">Review</button>
<div id="students">

    <div class="student">
        <img src="male.jpg" alt="Aarthese" width="200" height="200">
        <h2>Name: Aarthese</h2>
        <p class="rollNo">Roll No: 1</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Aarav" width="200" height="200">
        <h2>Name: Aarav</h2>
        <p class="rollNo">Roll No: 2</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>

</div>
</div>`;
    document.title = "CSE 1-Year";
    const presentBtn = document.getElementsByClassName("present");
    const absentBtn = document.getElementsByClassName("absent");

    const time = new Date();
    const year = time.getFullYear();
    const date = time.getDate();
    const month = time.getMonth();
    let hours = time.getHours();
    hours = hours % 12 || 12;
    const minutes = time.getMinutes();

    Array.from(presentBtn).forEach(button => {
        button.addEventListener("click", (event) => {
            //event.target.parentElement.getElementsByClassName("absent")[0].innerHTML = "<del>Absent</del>";
            event.target.style.display = "none";
            event.target.parentElement.getElementsByClassName("absent")[0].style.display = "none";
            event.target.parentElement.getElementsByClassName("result")[0].textContent = "Present";
            event.target.parentElement.getElementsByClassName("result")[0].style.color = "green";

            let timeDate = `${date}/${month + 1}/${year} %0a ${hours}:${minutes}`;

            const rollNo = event.target.parentElement.getElementsByClassName("rollNo")[0].textContent.split(":")[1].trim();
            //console.log(rollNo);
            //markAttendance(rollNo, "present");
            //saveAttendance(name, rollNo.value, "Present", timeDate);
            fetchStudentsCount();
        });
    });

    Array.from(absentBtn).forEach(button => {
        button.addEventListener("click", (event) => {
            //event.target.parentElement.getElementsByClassName("present")[0].innerHTML = "<del>Present</del>";
            event.target.style.display = "none";
            event.target.parentElement.getElementsByClassName("present")[0].style.display = "none";
            event.target.parentElement.getElementsByClassName("result")[0].textContent = "Absent";
            event.target.parentElement.getElementsByClassName("result")[0].style.color = "red";
            let timeDate = `${date}/${month + 1}/${year} %0a ${hours}:${minutes}`;

            const rollNo = event.target.parentElement.getElementsByClassName("rollNo")[0].textContent.split(":")[1].trim();
            markAttendance(rollNo, "Absent");
            //saveAttendance(name, rollNo.value, "Absent", timeDate);
            fetchStudentsCount();
        });
    });

    const APIURL = `https://studentattendance-1-krzr.onrender.com/api/students`; // If running on the same domain


    // Fetch and display the count of students
    async function fetchStudentsCount() {
        try {
            const response = await fetch(`${APIURL}/count`);
            console.log(response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            count = data.count;
            console.log(`Total students: ${data.count}`);
        } catch (error) {
            console.error('Error fetching student count:', error);
        }
    }


    // Function to mark attendance (Present/Absent)
    async function markAttendance(rollno, status) {
        const date = new Date().toLocaleString();
        const historyEntry = `${status} on ${date}`;
        const check = await fetch(APIURL);
        //console.log(check);
        try {
            const response = await fetch(`${APIURL}/${3}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ attendance: status, historyEntry })
            });

            //console.log(response.ok);

            const data = await response.json();

            if (response.ok) {
                console.log("Attendance updated:", data);
                //fetchStudents();
            } else {
                console.error("Error updating attendance:", data.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
}

//Timing 

//console.log(RailTime);
//SHOW CSE2
async function showCse2() {

    document.getElementById("bodyDiv").innerHTML = "";
    //console.log(document.getElementById("bodyDiv"));
    document.getElementById("bodyDiv").innerHTML = `
<div id="mainPopup">
    <div id="altPopup">
                    
    </div>
</div>
<div id="main1">
<div style="display:none;" id="mainpopupTable">
    <button id="Back" onclick="${() => { document.getElementById("mainpopupTable").style.display = "none" }}"><i class="fa-solid fa-chevron-left"></i></button>
    <div id="popup">
        <button id="closeTable">Close</button>

        <table id="table" border="0">
            <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Percentage</th>
            </tr>
        </table>
    </div>
</div>
<div style="display:none;" id="mainpopupStaff">
    <button id="Back" onclick="showCse2()"><i class="fa-solid fa-chevron-left"></i></button>
    <div id="popup">
        <h1 id="heading">Staff Details</h1>
        <table id="StaffLogintable" border="0">
        <tr>
        <td><label for="staffName">Staff Name:</label></td><td><input type="text" placeholder="Staff Name" id="staffName" style="border:1px solid border-radius:4px"></td>
        </tr>
        <tr>
        <td><label for="staffId">Staff ID:</label></td><td><input type="text" placeholder="Staff ID" id="staffId" style="border:1px solid border-radius:4px" ></td>
        </tr>
        <tr>
        <td><button class="LoginBtn" id="StaffLoginBtn">Login</button></td>
        </tr>
        </table>

        <table id="staffTable" style="display:none">
        <tr>
            <td><label>Date :</label></td><td>${timeDate}</td>
        </tr>
        <tr>
            <td><label>Time :</label></td><td>${Time}</td>
        </tr>        
        <tr>
            <td><label for="Staffname">Staff Name :</label></td>
            <td><input id="Staffname" type="text" disabled readonly></td>
        </tr>
        <tr>
            <td><label for="semester">Semester :</label></td>
            <td>
                <select id=semester onchange="showSemesterCourses()">
                    <option value="Selected" disabled selected>Select Semester</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </td>
        </tr>
        <tr>
            <td><label>Course Name :</label></td>
            <td>
                <select id="thirdSemCourse" style="display:none">
                    <option value="Selected" disabled selected>Select Course</option>
                    <option value="DPCO">DPCO</option>
                    <option value="DM">DM</option>
                    <option value="FDS">FDS</option>
                    <option value="OOP">OOP</option>
                    <option value="DS">DS</option>
                    <option value="DPCO_Lab">DPCO_Lab</option>
                    <option value="FDS_Lab">FDS_Lab</option>
                    <option value="OOP_Lab">OOP_Lab</option>
                    <option value="DS_Lab">DS_Lab</option>
                </select>
                <select id="fourthSemCourse" style="display:none">
                    <option value="Selected" disabled selected>Select Course</option>
                    <option value="ESS">ESS</option>
                    <option value="AIML">AIML</option>
                    <option value="DBMS">DBMS</option>
                    <option value="TOC">TOC</option>
                    <option value="IOS">IOS</option>
                    <option value="ALGM">ALGM</option>
                    <option value="DBMS_Lab">DBMS_Lab</option>
                    <option value="IOS_Lab">IOS_Lab</option>
                    <option value="ALGM_Lab">ALGM_Lab</option>
                    <option value="AIML_Lab">AIML_Lab</option>
                </select>
            </td>
        </tr>
        <tr>
            <td><label for="hourDurationSelect">Select Hour Duration :</label></td>
            <td>
                <select id="hourDurationSelect" onchange="showPeriodTiming()">
                    <option value="Selected" disabled selected>Select Hour Duration</option>
                    <option value="7" style="display : ${RailTime < "10:15" ? "block" : "none"}">7</option>
                    <option value="6" style="display : ${RailTime < "11:05" ? "block" : "none"}">6</option>
                    <option value="5" style="display : ${RailTime < "12:10" ? "block" : "none"}">5</option>
                    <option value="4" style="display : ${RailTime < "13:00" ? "block" : "none"}">4</option>
                    <option value="3" style="display : ${RailTime < "14:30" ? "block" : "none"}">3</option>
                    <option value="2" style="display : ${RailTime < "15:20" ? "block" : "none"}">2</option>
                    <option value="1" style="display : ${RailTime < "16:00" ? "block" : "none"}">1</option>
                </select>
            </td>
        </tr>
        <tr>
            <td><label>Your Period timing:</label></td>
            <td><input type="text" id="periodTiming" disabled readonly placeholder="Period Timing" style="font-weight:bold"></td>
        </tr>
        <tr>
            <td><button id="SubmitStaffDatas">submit</button></td>
        </tr>

        </tr>
    </table>
    </div>
</div>


<div id="Processing">
    <h2>Waiting for Processing...</h2>
</div>
<button id="Back" onclick="showCse()"><i class="fa-solid fa-chevron-left"></i></button>
<button id="shortCut">Put Attendance</button>
<button id="reviewBtn">Get Percentage</button>
<div id="students" class="allStudents">
</div>
</div> `;
    let data = await getAllStudent();
    const AllStudents = document.querySelector(".allStudents");
    data.forEach(student => {
        if (student.name == "TWD") { }
        else {
            StudentDiv = document.createElement("div");
            StudentDiv.classList = "student";
            StudentDiv.innerHTML = `
        <img src="male.jpg" alt="${student.name}" width="200px" height="200px" >
        <h2>Name: ${student.name}</h2>
        <p class="rollNo">Roll No: ${student.rollno}</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        `;
            AllStudents.appendChild(StudentDiv);
        }
    })

    document.title = "CSE 2-Year";
    const reviewBtn = document.getElementById("reviewBtn");
    const shortCut = document.getElementById("shortCut");

    const presentBtn = document.getElementsByClassName("present");
    const absentBtn = document.getElementsByClassName("absent");

    const time = new Date();
    const year = time.getFullYear();
    const date = time.getDate();
    const month = time.getMonth();
    let hours = time.getHours();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const correntTime = time.toLocaleString();
    //console.log(correntTime);

    let whatsappDatas = [];
    let AbsentTodayName = [];
    let TotalDays = true;
    Array.from(presentBtn).forEach(button => {
        button.addEventListener("click", (event) => {
            //event.target.parentElement.getElementsByClassName("absent")[0].innerHTML = "<del>Absent</del>";
            event.target.style.display = "none";
            event.target.parentElement.getElementsByClassName("absent")[0].style.display = "none";
            event.target.parentElement.getElementsByClassName("result")[0].textContent = "Present";
            event.target.parentElement.getElementsByClassName("result")[0].style.color = "green";

            let timeDate = `${date} /${month + 1}/${year} % 0a ${hours}:${minutes} `;

            const rollNo = event.target.parentElement.getElementsByClassName("rollNo")[0].textContent.split(":")[1].trim();
            //console.log(rollNo);
            markAttendance(rollNo, "Present");
            //saveAttendance(name, rollNo.value, "Present", timeDate);
            fetchStudentsCount();
            if (TotalDays) {
                TotalWorkedDays(951323);
                TotalDays = false;
            }
        });
    });

    Array.from(absentBtn).forEach(button => {
        button.addEventListener("click", (event) => {
            //event.target.parentElement.getElementsByClassName("present")[0].innerHTML = "<del>Present</del>";
            event.target.style.display = "none";
            event.target.parentElement.getElementsByClassName("present")[0].style.display = "none";
            event.target.parentElement.getElementsByClassName("result")[0].textContent = "Absent";
            event.target.parentElement.getElementsByClassName("result")[0].style.color = "red";
            let timeDate = `${date} /${month + 1}/${year} `;

            const rollNo = event.target.parentElement.getElementsByClassName("rollNo")[0].textContent.split(":")[1].trim();
            const name = event.target.parentElement.getElementsByTagName("h2")[0].textContent.split(":")[1].trim();

            //console.log(String(rollNo).slice(5));
            whatsappDatas.push(`Name: ${name} \n RollNo: ${rollNo} \n   Absent on ${correntTime} \n  `);
            AbsentTodayName.push(`Name : ${name} , RollNo: ${rollNo}`);

            //console.log(rollNo);
            //whatsappDate.push(`Name: ${ name } % 0a RollNo: ${ rollNo } % 0a Absent on ${ timeDate } `);
            //console.log(whatsappDate);
            markAttendance(rollNo, "Absent");
            //saveAttendance(name, rollNo.value, "Absent", timeDate);
            fetchStudentsCount();

        });
    });

    const AllButtons = document.querySelectorAll(".allStudents button");
    //console.log(AllButtons);
    AllButtons.forEach(button => {
        button.style.display = "none";
    });

    //const APIURL = `https://studentattendance-1-krzr.onrender.com/api/students`; // If running on the same domain
    const APIURL = `/api/students`;
    shortCut.onclick = async (event) => {
        var format;
        var find;
        var get;

        //var presentArray = ['001','002','003','004' , '005' , '006' , '007' , '008','009','010','011','012','013','014','015','016','017','018','019','020','021','022','023','024','025','026','027','028','029','030','031','032','033','034','035','036','037','038','039','040','' ];
        var allButtons = event.target.parentElement.querySelector(".allStudents").children;
        //console.log(allButtons);

        buttonArray = [];

        for (let i = 0; i < allButtons.length; i++) {
            //console.log(allButtons[i].querySelector(".present"));
            buttonArray.push(allButtons[i]);
        }

        document.querySelector("#mainpopupStaff").style.display = "block";


        document.querySelector("#StaffLoginBtn").onclick = async () => {
            let data = await getAllStaff();
            //console.log(data);
            const staffName = document.getElementById("staffName").value.trim();
            const staffId = document.getElementById("staffId").value.trim();

            if (staffName === "" || staffId === "" || staffName == null || staffId == null) {
                window.alert("Enter the Staff Name and Staff ID");
                return;
            }
            else {
                let checkStaff = true;
                for (i = 0; i < data.length; i++) {
                    if (data[i].staffId === staffId && data[i].staffName === staffName) {
                        checkStaff = false;
                        //console.log(document.getElementById("staffTable"));
                        //console.log(document.getElementById("StaffLogintable"));
                        document.getElementById("StaffLogintable").style.display = "none";
                        document.querySelector("#mainpopupStaff").style.display = "block";
                        document.getElementById("staffTable").style.display = "block";
                        document.getElementById("Staffname").value = data[i].staffName;


                        document.querySelector("#SubmitStaffDatas").onclick = async () => {
                            const staffName = document.getElementById("Staffname").value;
                            const courseName = document.getElementById("thirdSemCourse").value == "Selected" ? document.getElementById("fourthSemCourse").value : document.getElementById("thirdSemCourse").value;
                            const semester = document.getElementById("semester").value;
                            const hourDuration = document.getElementById("hourDurationSelect").value;
                            const periodTiming = document.getElementById("periodTiming").value;

                            if (staffName === "" || courseName === "" || semester === "" || hourDuration === "" || periodTiming === "" || staffName == null || courseName == null || semester == null || hourDuration == null || periodTiming == null) {
                                window.alert("Please fill all the fields");
                                return;
                            }
                            else {
                                AllButtons.forEach(async button => {
                                    button.style.display = "block";
                                });
                                //console.log(staffName, staffId, subject, semester, hourDuration, periodTiming);
                                //await saveAttendance(staffName, staffId, subject, semester, hourDuration, periodTiming);
                                document.querySelector("#mainpopupStaff").style.display = "none";
                                setTimeout(async () => {

                                    const AbsentIs = window.prompt("Enter the  Number of Students Absent:");

                                    if (AbsentIs == "" || AbsentIs == null) {
                                        window.alert("invalid input");
                                    }
                                    else {
                                        try {
                                            if (AbsentIs > 0) {
                                                for (i = 0; i < AbsentIs; i++) {
                                                    const getAbsentIsNumber = window.prompt("Enter the Absent Students Number one-by-one(23104---):");

                                                    if (getAbsentIsNumber.startsWith("23104")) {
                                                        format = Number(getAbsentIsNumber);
                                                        //saveAbsentData.push(format);
                                                    }
                                                    else {
                                                        format = Number(`23104${getAbsentIsNumber} `);
                                                        //saveAbsentData.push(format);
                                                    }
                                                    //console.log(String(format).slice(5));

                                                    if (String(format).slice(5).startsWith("0")) {
                                                        find = String(format).slice(6);
                                                        if (String(find).startsWith("0")) {
                                                            console.log(find);
                                                            get = find.slice(1);
                                                            console.log(get);

                                                            for (let i = 0; i < buttonArray.length; i++) {
                                                                if (buttonArray[i] === buttonArray[get - 1]) {
                                                                    buttonArray[i] = "";
                                                                    break;
                                                                }
                                                            }

                                                            /*let NewArray = buttonArray.filter(button => {
                                                                console.log(button.querySelector(".rollNo").textContent !== buttonArray[get - 1].querySelector(".rollNo").textContent);
                                                            });
                                                            console.log(NewArray);*/

                                                            await allButtons[get - 1].querySelector(".absent").click();

                                                            //console.log(event.target.parentElement.querySelector(".allStudents").children[get - 1]);
                                                        }
                                                        else if (String(find) >= 10 && String(find) <= 24) {
                                                            console.log(find);
                                                            get = find - 1;
                                                            //console.log(get);
                                                            for (let i = 0; i < buttonArray.length; i++) {
                                                                if (buttonArray[i] === buttonArray[get]) {
                                                                    buttonArray[i] = "";
                                                                    break;
                                                                }
                                                            }

                                                            await allButtons[get].querySelector(".absent").click();

                                                            //console.log(event.target.parentElement.querySelector(".allStudents").children[get]);
                                                        }
                                                        else if (String(find) >= 26 && String(find) <= 48) {
                                                            //console.log(find);
                                                            get = find - 2;
                                                            //console.log(get);
                                                            for (let i = 0; i < buttonArray.length; i++) {
                                                                if (buttonArray[i] === buttonArray[get]) {
                                                                    buttonArray[i] = "";
                                                                    break;
                                                                }
                                                            }
                                                            //console.log(event.target.parentElement.querySelector(".allStudents").children[get]);
                                                            await allButtons[get].querySelector(".absent").click();

                                                        }
                                                        else if (String(find) >= 50 && String(find) <= 60) {
                                                            //console.log(find);
                                                            get = find - 3;
                                                            //console.log(get);
                                                            for (let i = 0; i < buttonArray.length; i++) {
                                                                if (buttonArray[i] === buttonArray[get]) {
                                                                    buttonArray[i] = "";
                                                                    break;
                                                                }
                                                            }
                                                            //console.log(event.target.parentElement.querySelector(".allStudents").children[get]);
                                                            await allButtons[get].querySelector(".absent").click();

                                                        }
                                                        else {
                                                            window.alert("There are no students in this number");
                                                        }
                                                    }
                                                    else if (String(format).slice(5).startsWith("3")) {
                                                        find = String(format).slice(7);
                                                        var late = 57;

                                                        get = late + (Number(find));
                                                        //console.log(get);
                                                        for (let i = 0; i < buttonArray.length; i++) {
                                                            if (buttonArray[i] === buttonArray[get]) {
                                                                buttonArray[i] = "";
                                                                break;
                                                            }
                                                        }

                                                        //console.log(event.target.parentElement.querySelector(".allStudents").children[get]);
                                                        await allButtons[get].querySelector(".absent").click();

                                                    }
                                                    else if (String(format).slice(5).startsWith("7")) {
                                                        get = 63;
                                                        for (let i = 0; i < buttonArray.length; i++) {
                                                            if (buttonArray[i] === buttonArray[get]) {
                                                                buttonArray[i] = "";
                                                                break;
                                                            }
                                                        }

                                                        //console.log(event.target.parentElement.querySelector(".allStudents").children[get]);
                                                        await allButtons[get].querySelector(".absent").click();

                                                    }
                                                    //await markAttendance(format, "Absent");
                                                    //console.log(event.target.parentElement.querySelector(".allStudents").children[].querySelectorAll(".rollNo"));

                                                }
                                                setTimeout(() => {
                                                    presentFunction();
                                                }, 3000);

                                                presentFunction = async () => {
                                                    for (i = 0; i < buttonArray.length; i++) {
                                                        if (buttonArray[i] == "") {

                                                        }
                                                        else {
                                                            await buttonArray[i].querySelector(".present").click();
                                                        }
                                                    }
                                                }
                                                TodayAttedance = {
                                                    courseName: courseName,
                                                    semester: semester,
                                                    hourDuration: hourDuration,
                                                    periodTiming: periodTiming,
                                                    date: `${date} /${month + 1}/${year}`,
                                                    time: `${hours}:${minutes} ${meritiam}`,
                                                    absentStudents: AbsentTodayName,
                                                    AbsentStudentsCount: AbsentTodayName.length,

                                                }
                                                pushPerformance(staffId, TodayAttedance);
                                                console.log(TodayAttedance);
                                            }
                                            else {
                                                presentFun = async () => {
                                                    for (i = 0; i < buttonArray.length; i++) {
                                                        if (buttonArray[i] == "") {

                                                        }
                                                        else {
                                                            await buttonArray[i].querySelector(".present").click();
                                                        }
                                                    }
                                                }
                                                presentFun();
                                                async function sendWhatsAppPresent() {

                                                    function checkFunc() {
                                                        if (whatsappDatas.length == 0) {
                                                            let partTime1 = '';
                                                            partTime1 += "All students are present on " + `${date} /${month + 1}/${year} % 0a ${hours}:${minutes} ${ampm} `;
                                                            let message = "All students are present on " + `${correntTime} `;
                                                            async function whatsAppMessage() {
                                                                let phone = '+919486500899';
                                                                let url = "https://wa.me/" + phone + "?text="
                                                                    + partTime1;
                                                                await window.open(url, "_blank");
                                                                partTime1 = "";
                                                            }
                                                            async function sendTelegram() {
                                                                function sendMessage() {
                                                                    //const message = document.getElementById('msg').value;

                                                                    fetch('/send-to-telegram', {
                                                                        method: 'POST',
                                                                        headers: {
                                                                            'Content-Type': 'application/json',
                                                                        },
                                                                        body: JSON.stringify({ message })
                                                                    })
                                                                        .then((response) => {
                                                                            response.json();
                                                                            console.log(response);
                                                                        })
                                                                        .then(data => {
                                                                            console.log(data);
                                                                            alert('Message sent to Telegram successfully!');
                                                                        })
                                                                        .catch(error => {
                                                                            console.error('Error:', error);
                                                                            alert('An error occurred.');
                                                                        });
                                                                }
                                                                sendMessage();
                                                            }
                                                            sendTelegram();
                                                            //whatsAppMessage();
                                                        }

                                                    }
                                                    checkFunc();
                                                }
                                                sendWhatsAppPresent();
                                            }

                                        }

                                        catch (err) {
                                            console.log(err);
                                            window.alert(`ERROR: ${err} `);
                                        }
                                        finally {
                                            async function sendWhatsApp() {
                                                //console.log("Entered");

                                                function Batch1() {
                                                    //console.log(whatsappDatas.length);
                                                    if (whatsappDatas.length > 0) {
                                                        let partTime1 = '';
                                                        let message = '';
                                                        for (let i = 0; i < whatsappDatas.length; i++) {
                                                            partTime1 += whatsappDatas[i];
                                                            message += whatsappDatas[i];

                                                        }
                                                        message += `\n\n${correntTime} `;

                                                        async function whatsAppMessage() {
                                                            let phone = '+919486500899';
                                                            let url = "https://wa.me/" + phone + "?text="
                                                                + partTime1 + `${correntTime} `;
                                                            await window.open(url, "_blank");
                                                            partTime1 = "";
                                                        }
                                                        async function sendTelegram1() {
                                                            function sendMessage2() {
                                                                //const message = document.getElementById('msg').value;

                                                                fetch('/send-to-telegram', {
                                                                    method: 'POST',
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                    },
                                                                    body: JSON.stringify({ message })
                                                                })
                                                                    .then((response) => {
                                                                        response.json();
                                                                        console.log(response);
                                                                    })
                                                                    .then(data => {
                                                                        //console.log(data);
                                                                        alert('Message sent to Telegram successfully!');
                                                                    })
                                                                    .catch(error => {
                                                                        console.error('Error:', error);
                                                                        alert('An error occurred.');
                                                                    });
                                                            }
                                                            sendMessage2();
                                                        }
                                                        sendTelegram1();
                                                        //whatsAppMessage();
                                                    }

                                                }

                                                Batch1();
                                            }
                                            sendWhatsApp();

                                        }
                                        setTimeout(() => {
                                            showCse();
                                        }, 5000);
                                    }
                                }, 100);


                            }
                        }

                    }
                }
                if (checkStaff) {
                    window.alert("Invalid Staff ID or Staff Name");
                    document.getElementById("StaffLogintable").style.display = "block";
                    document.querySelector("#mainpopupStaff").style.display = "block";
                }
            }
        }
        showSemesterCourses = () => {
            setTimeout(() => {
                const semester = document.getElementById("semester").value;
                const thirdSemCourse = document.getElementById("thirdSemCourse");
                const fourthSemCourse = document.getElementById("fourthSemCourse");
                if (semester === "3") {
                    thirdSemCourse.style.display = "block";
                    fourthSemCourse.style.display = "none";
                }
                else if (semester === "4") {
                    thirdSemCourse.style.display = "none";
                    fourthSemCourse.style.display = "block";
                }
            }, 100);
        }
        showPeriodTiming = () => {

            const hourDurationSelect = document.getElementById("hourDurationSelect");
            const periodTiming = document.getElementById("periodTiming");


            if (hourDurationSelect.value == "1" && RailTime < "10:15") {

                periodTiming.value = "9:25 AM to 10:15 AM";
            }
            else if (hourDurationSelect.value == "1" && RailTime >= "10:15" && RailTime < "11:05") {

                periodTiming.value = "10:15 AM to 11:05 AM";
            }
            else if (hourDurationSelect.value == "1" && RailTime >= "11:05" && RailTime < "12:10") {

                periodTiming.value = "11:20 AM to 12:10 PM";
            }
            else if (hourDurationSelect.value == "1" && RailTime >= "12:10" && RailTime < "13:40") {

                periodTiming.value = "12:10 PM to 1:00 PM";
            }
            else if (hourDurationSelect.value == "1" && RailTime >= "13:40" && RailTime < "14:30") {

                periodTiming.value = "1:40 PM to 2:30 PM";
            }
            else if (hourDurationSelect.value == "1" && RailTime >= "14:30" && RailTime < "15:20") {

                periodTiming.value = "2:30 PM to 3:20 PM";
            }
            else if (hourDurationSelect.value == "1" && RailTime >= "15:20" && RailTime < "16:10") {

                periodTiming.value = "3:20 PM to 4:10 PM";
            }
            else if (hourDurationSelect.value == "2" && RailTime < "10:15" && RailTime < "11:05") {

                periodTiming.value = "9:25 AM to 11:05 AM";
            }
            else if (hourDurationSelect.value == "2" && RailTime >= "10:15" && RailTime < "11:05") {

                periodTiming.value = "10:15 AM to 12:10 PM";
            }
            else if (hourDurationSelect.value == "2" && RailTime >= "11:05" && RailTime < "12:10") {

                periodTiming.value = "11:20 AM to 1:00 PM";
            }
            else if (hourDurationSelect.value == "2" && RailTime >= "12:10" && RailTime < "13:40") {

                periodTiming.value = "12:10 PM to 2:30 PM";
            }
            else if (hourDurationSelect.value == "2" && RailTime >= "13:40" && RailTime < "14:30") {

                periodTiming.value = "1:40 PM to 3:20 PM";

            }
            else if (hourDurationSelect.value == "2" && RailTime >= "14:30" && RailTime < "15:20") {

                periodTiming.value = "2:30 PM to 4:10 PM";

            }
            else if (hourDurationSelect.value == "3" && RailTime < "10:15" && RailTime < "11:05") {

                periodTiming.value = "9:25 AM to 12:10 PM";
            }
            else if (hourDurationSelect.value == "3" && RailTime >= "10:15" && RailTime < "11:05") {

                periodTiming.value = "10:15 AM to 1:00 PM";
            }
            else if (hourDurationSelect.value == "3" && RailTime >= "11:05" && RailTime < "12:10") {

                periodTiming.value = "11:20 AM to 2:30 PM";
            }
            else if (hourDurationSelect.value == "3" && RailTime >= "12:10" && RailTime < "13:40") {

                periodTiming.value = "12:10 PM to 3:20 PM";
            }
            else if (hourDurationSelect.value == "3" && RailTime >= "13:40" && RailTime < "14:30") {

                periodTiming.value = "1:40 PM to 4:10 PM";
            }
            else if (hourDurationSelect.value == "4" && RailTime < "10:15" && RailTime < "11:05") {

                periodTiming.value = "9:25 AM to 1:00 PM";
            }
            else if (hourDurationSelect.value == "4" && RailTime >= "10:15" && RailTime < "11:05") {

                periodTiming.value = "10:15 AM to 2:30 PM";
            }
            else if (hourDurationSelect.value == "4" && RailTime >= "11:05" && RailTime < "12:10") {

                periodTiming.value = "11:20 AM to 3:20 PM";
            }
            else if (hourDurationSelect.value == "4" && RailTime >= "12:10" && RailTime < "13:40") {

                periodTiming.value = "12:10 PM to 4:10 PM";
            }
            else if (hourDurationSelect.value == "5" && RailTime < "10:15" && RailTime < "11:05") {

                periodTiming.value = "9:25 AM to 2:30 PM";

            }
            else if (hourDurationSelect.value == "5" && RailTime >= "10:15" && RailTime < "11:05") {

                periodTiming.value = "10:15 AM to 3:20 PM";
            }
            else if (hourDurationSelect.value == "5" && RailTime >= "11:05" && RailTime < "12:10") {

                periodTiming.value = "11:20 AM to 4:10 PM";
            }
            else if (hourDurationSelect.value == "6" && RailTime < "10:15" && RailTime < "11:05") {

                periodTiming.value = "9:25 AM to 3:20 PM";
            }
            else if (hourDurationSelect.value == "6" && RailTime >= "10:15" && RailTime < "11:05") {

                periodTiming.value = "10:15 AM to 4:10 PM";
            }
            else if (hourDurationSelect.value == "7" && RailTime < "10:15" && RailTime < "11:05") {

                periodTiming.value = "9:25 AM to 4:10 PM";
            }

        }

        //let saveAbsentData = [];
        //const AbsentIs = window.prompt("Enter the  Number of Students Absent:");

    }
    let totalReset = true;
    reviewBtn.onclick = async (event) => {

        async function fetchTotalWorkDays(rollno) {

            try {
                const response = await fetch(`${APIURL}/${rollno}`);
                const TotalWorkDays = await response.json();
                TotalWorkingDays = TotalWorkDays.TotalWorkDays;
            }
            catch (error) {
                console.error('Error fetching TotalWorkDays:', error);
            }
            //console.log(TotalWorkingDays);
        }
        await fetchTotalWorkDays(951323);
        //console.log(TotalWorkingDays);
        let TWKDYS = TotalWorkingDays;
        const mainPopup = document.getElementById("mainPopup");
        const popup = document.getElementById("altPopup");
        //console.log(mainPopup);
        //console.log(popup);
        popup.innerHTML = ``;
        popup.innerHTML = `
        <div>
            <h2><i class="fa-solid fa-triangle-exclamation"></i>Warning</h2>
            <p>This will reset the attendance of all students. Are you sure you want to proceed?</p>
            <button id="yesBtn">Yes</button>
            <button id="noBtn">No</button>
        </div>`;
        mainPopup.style.display = "block";

        document.getElementById("noBtn").onclick = () => {
            mainPopup.style.display = "none";
        }
        document.getElementById("yesBtn").onclick = async () => {
            if (true) {

                document.querySelector("#mainpopupStaff").style.display = "block";
                document.getElementById("StaffLoginBtn").onclick = async () => {
                    let data = await getAllStaff();
                    const staffName = document.getElementById("staffName");
                    const staffId = document.getElementById("staffId");

                    if (staffName.value == "" || staffId.value == "") {
                        window.alert("Enter the staff Name and staff ID");
                        return;
                    }
                    else {

                        let checkstaff = true;
                        for (i = 0; i < data.length; i++) {
                            if (data[i].staffName == staffName.value && data[i].staffId == staffId.value) {
                                document.querySelector("#mainpopupStaff").style.display = "none";
                                checkstaff = false;
                                mainPopup.style.display = "none";
                                document.getElementById("Processing").style.display = "block";
                                async function fetchStudentsCount() {
                                    try {
                                        const response = await fetch(`${APIURL}/count`);
                                        console.log(response);
                                        if (!response.ok) {
                                            throw new Error('Network response was not ok');
                                        }
                                        const data = await response.json();
                                        COunt = data.count;
                                        console.log(`Total students: ${data.count}`);
                                    } catch (error) {
                                        console.error('Error fetching student count:', error);
                                    }
                                }

                                async function fetchStudents() {

                                    try {
                                        const response = await fetch(APIURL);
                                        const students = await response.json();
                                        //console.log(students);
                                        //console.log(COunt);
                                        //console.log(event.target.parentElement.querySelector(".allStudents").children);
                                        //console.log(event.target.parentElement.querySelectorAll(".student"));
                                        const allStudents = event.target.parentElement.querySelector(".allStudents").children;

                                        //console.log(allStudents);
                                        const table = document.getElementById("table");
                                        //console.log(students);
                                        /*
                                        let orderDatas = [];
                                        let NameOrder = [];
                                        for (let i = 0; i < COunt; i++) {
                                            //NameOrder.push(students[i].name);
                                            orderDatas.push(students[i].rollno);
                            
                                            if (students[i].name == "Artheeswari") {
                                                NameOrder[60] = "Artheeswari";
                                            }
                            
                                            else if (students[i].name == "Balakrishnan") {
                                                NameOrder[61] = "Balakrishnan";
                                            }
                            
                                            else if (students[i].name == "Chinnadurai") {
                                                NameOrder[62] = "Chinnadurai";
                                            }
                            
                                            else if (students[i].name == "MohammedMunaf") {
                                                NameOrder[63] = "MohammedMunaf";
                                            }
                            
                                            else if (students[i].name == "StellaPersiya") {
                                                NameOrder[64] = "StellaPersiya";
                                            }
                            
                                            else if (students[i].name == "ObedRajaSingh") {
                                                NameOrder[65] = "ObedRajaSingh";
                                            }
                                            else {
                                                NameOrder[i] = students[i].name;
                            
                                            }
                                        }
                            
                                        orderDatas = orderDatas.sort();
                                        NameOrder = NameOrder.slice(0 , 61).sort();
                            
                                        console.log(NameOrder);
                                        //NameOrder = NameOrder.sort();
                                        */
                                        let lowPercentage = [];
                                        document.getElementById("mainpopupTable").style.display = "block";
                                        document.getElementById("closeTable").style.display = "none";

                                        for (let i = 0; i < COunt - 1; i++) {
                                            if (students[i].name == "TWD") {

                                            }
                                            else {
                                                //console.log(students[i].attendance);
                                                let percentageRaw = (students[i].attendance / TWKDYS) * 100;
                                                let percentage = isNaN(percentageRaw) ? "0" : percentageRaw.toFixed(2);
                                                //console.log(students[i].attendance);
                                                //console.log(percentage, (students[i].attendance / TWKDYS) * 100);
                                                const NewTr = document.createElement("tr");
                                                const NewTd = document.createElement("td");
                                                const NewTd3 = document.createElement("td");
                                                const NewTd1 = document.createElement("td");
                                                const NewTd2 = document.createElement("td");


                                                if (Number(percentage) < 75) {
                                                    NewTr.style.backgroundColor = "rgb(226, 144, 144)";
                                                    lowPercentage.push(`Name:${students[i].name} \n RollNo:${students[i].rollno} \n Percentage:${percentage}% \n \n`);

                                                }
                                                else {
                                                    NewTr.style.backgroundColor = "rgb(117, 184, 122)";
                                                }

                                                NewTd3.textContent = i + 1;
                                                NewTd.textContent = students[i].name;
                                                NewTd1.textContent = students[i].rollno;
                                                NewTd2.textContent = `${percentage}%`;

                                                NewTr.append(NewTd3, NewTd, NewTd1, NewTd2);
                                                table.append(NewTr);

                                                /*console.log(allStudents[i]);
                                                Newh4 = document.createElement("h4");
                                                let percentage = ((students[i].attendance / TWKDYS) * 100).toFixed(2);
                                                //console.log(percentage);
                                                Newh4.style.color = "blue";
                                                Newh4.innerHTML = `${students[i].name} Attendance Percentage = ${percentage}%`;
                                                allStudents[i].append(Newh4);*/
                                                //console.log(Newdiv.textContent);
                                                let RollNo = event.target.parentElement.getElementsByClassName("student")[i].getElementsByClassName("rollNo")[0].textContent.split(":")[1];
                                                //console.log(RollNo);
                                                await markAttendance(RollNo, "Reset");
                                                if (totalReset) {
                                                    await markAttendance(951323, "Reset");
                                                    totalReset = false;
                                                }
                                            }
                                        }
                                        document.getElementById("closeTable").style.display = "block";
                                        document.getElementById("Processing").style.display = "none";

                                        document.getElementById("closeTable").onclick = () => {
                                            document.getElementById("mainpopupTable").style.display = "none";
                                            document.getElementById("table").innerHTML = "";

                                        }

                                        if (lowPercentage.length > 0) {

                                            //console.log("Entered");
                                            function lowPercentageInform() {
                                                //console.log(whatsappDatas.length);
                                                if (lowPercentage.length > 0) {
                                                    let partTime1 = '';
                                                    let message = '';
                                                    for (i = 0; i < lowPercentage.length; i++) {
                                                        partTime1 += lowPercentage[i];
                                                        message += lowPercentage[i];

                                                    }
                                                    async function sendTelegram2() {
                                                        function sendMessage1() {
                                                            //const message = document.getElementById('msg').value;

                                                            fetch('/send-to-telegram', {
                                                                method: 'POST',
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                },
                                                                body: JSON.stringify({ message })
                                                            })
                                                                .then((response) => {
                                                                    response.json();
                                                                    console.log(response);
                                                                })
                                                                .then(data => {
                                                                    //console.log(data);
                                                                    console.log('Message sent to Telegram successfully!');
                                                                })
                                                                .catch(error => {
                                                                    console.error('Error:', error);
                                                                    alert('An error occurred.Contact Selva');
                                                                });
                                                        }
                                                        sendMessage1();
                                                    }

                                                    async function whatsAppPercentage() {
                                                        let phone = '+919486500899';
                                                        let url = "https://wa.me/" + phone + "?text="
                                                            + partTime1;
                                                        await window.open(url, "_blank");
                                                        partTime1 = "";
                                                    }
                                                    sendTelegram2();
                                                    //whatsAppPercentage();
                                                }
                                            }
                                            lowPercentageInform();
                                        }
                                    }
                                    catch (error) {
                                        console.error('Error fetching students:', error);
                                    }
                                }
                                fetchStudentsCount();
                                setTimeout(() => {
                                    fetchStudents();
                                }, 2000);
                            }
                        }
                        if (checkstaff) {
                            window.alert("Invalid Staff Name or Staff Id");
                        }
                    }
                }
            }
        }
    }

    // Fetch and display the count of students
    async function fetchStudentsCount() {
        try {
            const response = await fetch(`${APIURL}/count`);
            console.log(response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            count = data.count;
            console.log(`Total students: ${data.count}`);
        } catch (error) {
            console.error('Error fetching student count:', error);
        }
    }

    // Function to mark attendance (Present/Absent)
    async function markAttendance(rollno, status) {
        try {
            const date = new Date().toLocaleString();
            let decision = 0;
            let historyDecision = "";

            if (status === "Absent") {
                decision = 0;
                historyDecision = `${status} on ${date}`;
            } else if (status === "Present") {
                decision = 0.1428571428571;
                historyDecision = ""; // No history entry for "Present"
            } else if (status === "Reset") {
                decision = 0;
                historyDecision = "Reset";
            }

            const response = await fetch(`${APIURL}/${rollno}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ attendance: decision, historyDecision }) // Include historyDecision
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Attendance updated:", data);
            } else {
                console.error("Error updating attendance:", data.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
}

//SHOW CSE3
function showCse3() {

    document.getElementById("bodyDiv").innerHTML = "";
    //console.log(document.getElementById("bodyDiv"));
    document.getElementById("bodyDiv").innerHTML = `
<div id="mainPopup">
    <div id="altPopup">
                    
    </div>
</div>
    <div id="main1">
<div style="display:none;" id="mainpopupTable">
    <div id="popup">
        <button id="closeTable">Close</button>
        <table id="table" border="1">
            <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Percentage</th>
            </tr>

        </table>
    </div>
</div>
<div id="Processing">
    <h2>Waiting for Processing...</h2>
</div>
    <button id="Back" onclick="showCse()"><i class="fa-solid fa-chevron-left"></i></i></button>
    <button id="shortCut">Put Attendance</button>
<button id="reviewBtn">Get Percentage</button>
<div id="students" class="allStudents">
    <div class="student">
        <img src="female.jpg" alt="Ahishajeslin" width="200" height="200">
        <h2>Name: Ahishajeslin</h2>
        <p class="rollNo">Roll No: 22104001</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Akila" width="200" height="200">
        <h2>Name: Akila</h2>
        <p class="rollNo">Roll No: 22104002</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Arumuganainar" width="200" height="200">
        <h2>Name: Arumuganainar</h2>
        <p class="rollNo">Roll No: 22104003</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Asfar" width="200" height="200">
        <h2>Name: Asfar</h2>
        <p class="rollNo">Roll No: 22104004</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Ashwindevashir" width="200" height="200">
        <h2>Name: Ashwindevashir</h2>
        <p class="rollNo">Roll No: 22104005</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Cathrinwinsmilein" width="200" height="200">
        <h2>Name: Cathrinwinsmilein</h2>
        <p class="rollNo">Roll No: 22104006</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Davidsolomonraj" width="200" height="200">
        <h2>Name: Davidsolomonraj</h2>
        <p class="rollNo">Roll No: 22104007</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Derekjebasraj" width="200" height="200">
        <h2>Name: Derekjebasraj</h2>
        <p class="rollNo">Roll No: 22104008</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Dharshini" width="200" height="200">
        <h2>Name: Dharshini</h2>
        <p class="rollNo">Roll No: 22104009</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Esakkimuthulogesh" width="200" height="200">
        <h2>Name: Esakkimuthulogesh</h2>
        <p class="rollNo">Roll No: 22104010</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Gerald" width="200" height="200">
        <h2>Name: Gerald</h2>
        <p class="rollNo">Roll No: 22104011</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Godsonazariah" width="200" height="200">
        <h2>Name: Godsonazariah</h2>
        <p class="rollNo">Roll No: 22104012</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Immanuel" width="200" height="200">
        <h2>Name: Immanuel</h2>
        <p class="rollNo">Roll No: 22104014</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Jackshiya" width="200" height="200">
        <h2>Name: Jackshiya</h2>
        <p class="rollNo">Roll No: 22104015</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Jayashree" width="200" height="200">
        <h2>Name: Jayashree</h2>
        <p class="rollNo">Roll No: 22104016</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Jencyruby" width="200" height="200">
        <h2>Name: Jencyruby</h2>
        <p class="rollNo">Roll No: 22104018</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Jenifar" width="200" height="200">
        <h2>Name: Janifar</h2>
        <p class="rollNo">Roll No: 22104019</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Jenispriya" width="200" height="200">
        <h2>Name: Jenispriya</h2>
        <p class="rollNo">Roll No: 22104021</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Jenitha" width="200" height="200">
        <h2>Name: Jenitha</h2>
        <p class="rollNo">Roll No: 22104022</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Jeyadharshini" width="200" height="200">
        <h2>Name: Jeyadharshini</h2>
        <p class="rollNo">Roll No: 22104023</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Keerthana" width="200" height="200">
        <h2>Name: Keerthana</h2>
        <p class="rollNo">Roll No: 22104025</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Kingslingibson" width="200" height="200">
        <h2>Name: Kingslingibson</h2>
        <p class="rollNo">Roll No: 22104026</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Kowsika" width="200" height="200">
        <h2>Name: Kowsika</h2>
        <p class="rollNo">Roll No: 22104027</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Lakshmi" width="200" height="200">
        <h2>Name: Lakshmi</h2>
        <p class="rollNo">Roll No: 22104029</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Logamanoj" width="200" height="200">
        <h2>Name: Logamanoj</h2>
        <p class="rollNo">Roll No: 22104030</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Mariakavin" width="200" height="200">
        <h2>Name: Mariakavin</h2>
        <p class="rollNo">Roll No: 22104031</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Marimuthu" width="200" height="200">
        <h2>Name: Marimuthu</h2>
        <p class="rollNo">Roll No: 22104032</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Maxvelyabes" width="200" height="200">
        <h2>Name: Maxvelyabes</h2>
        <p class="rollNo">Roll No: 22104033</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Muthulakshmi" width="200" height="200">
        <h2>Name: Muthulakshmi</h2>
        <p class="rollNo">Roll No: 22104034</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Muthuraja" width="200" height="200">
        <h2>Name: Muthuraja</h2>
        <p class="rollNo">Roll No: 22104035</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Nagalakshmi" width="200" height="200">
        <h2>Name: Nagalakshmi</h2>
        <p class="rollNo">Roll No: 22104036</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Nandhakumar" width="200" height="200">
        <h2>Name: Nandhakumar</h2>
        <p class="rollNo">Roll No: 22104037</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Petchiammal" width="200" height="200">
        <h2>Name: Petchiammal</h2>
        <p class="rollNo">Roll No: 22104039</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Prema" width="200" height="200">
        <h2>Name: Prema</h2>
        <p class="rollNo">Roll No: 22104040</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Princy" width="200" height="200">
        <h2>Name: Princy</h2>
        <p class="rollNo">Roll No: 22104041</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Renuka" width="200" height="200">
        <h2>Name: Renuka</h2>
        <p class="rollNo">Roll No: 22104042</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Sahayaabinaya" width="200" height="200">
        <h2>Name: Sahayaabinaya</h2>
        <p class="rollNo">Roll No: 22104043</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Samroshan" width="200" height="200">
        <h2>Name: Samroshan</h2>
        <p class="rollNo">Roll No: 22104044</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Santhasri" width="200" height="200">
        <h2>Name: Santhasri</h2>
        <p class="rollNo">Roll No: 22104045</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Santhoshraman" width="200" height="200">
        <h2>Name: Santhoshraman</h2>
        <p class="rollNo">Roll No: 22104046</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Saranya" width="200" height="200">
        <h2>Name: Saranya</h2>
        <p class="rollNo">Roll No: 22104047</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Shunmugapriya" width="200" height="200">
        <h2>Name: Shunmugapriya</h2>
        <p class="rollNo">Roll No: 22104048</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Shunmugasundaram" width="200" height="200">
        <h2>Name: Shunmugasundaram</h2>
        <p class="rollNo">Roll No: 22104049</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Sivasakthi" width="200" height="200">
        <h2>Name: Sivasakthi</h2>
        <p class="rollNo">Roll No: 22104050</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Solomonraja" width="200" height="200">
        <h2>Name: Solomonraja</h2>
        <p class="rollNo">Roll No: 22104051</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Sowmiya" width="200" height="200">
        <h2>Name: Sowmiya</h2>
        <p class="rollNo">Roll No: 22104052</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Steffinajesrin" width="200" height="200">
        <h2>Name: Steffinajesrin</h2>
        <p class="rollNo">Roll No: 22104053</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Subburaj" width="200" height="200">
        <h2>Name: Subburaj</h2>
        <p class="rollNo">Roll No: 22104054</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Sudharsan" width="200" height="200">
        <h2>Name: Sudharsan</h2>
        <p class="rollNo">Roll No: 22104055</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Sujitha" width="200" height="200">
        <h2>Name: Sujitha</h2>
        <p class="rollNo">Roll No: 22104056</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Sushmidha" width="200" height="200">
        <h2>Name: Sushmidha</h2>
        <p class="rollNo">Roll No: 22104057</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Vanitha" width="200" height="200">
        <h2>Name: Vanitha</h2>
        <p class="rollNo">Roll No: 22104058</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Yukeshkumar" width="200" height="200">
        <h2>Name: Yukeshkumar</h2>
        <p class="rollNo">Roll No: 22104060</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Abishekabraham" width="200" height="200">
        <h2>Name: Abishekabraham</h2>
        <p class="rollNo">Roll No: 22104301</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="JebaseelanReginald" width="200" height="200">
        <h2>Name: JebaseelanReginald</h2>
        <p class="rollNo">Roll No: 22104302</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Jebastin" width="200" height="200">
        <h2>Name: Jebastin</h2>
        <p class="rollNo">Roll No: 22104303</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Michealroshan" width="200" height="200">
        <h2>Name: Michealroshan</h2>
        <p class="rollNo">Roll No: 22104304</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Mosesjonesjulion" width="200" height="200">
        <h2>Name: Mosesjonesjulion</h2>
        <p class="rollNo">Roll No: 22104305</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Thomasedison" width="200" height="200">
        <h2>Name: Thomasedison</h2>
        <p class="rollNo">Roll No: 22104306</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Mariaaaron" width="200" height="200">
        <h2>Name: Mariaaaron</h2>
        <p class="rollNo">Roll No: 22104701</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Amibha" width="200" height="200">
        <h2>Name: Amibha</h2>
        <p class="rollNo">Roll No: 22104702</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>

</div>
</div>`;

    async function TotalWorkedDay(rollno) {
        //const APIURL = `https://studentattendance-1-krzr.onrender.com/api/students`; 
        const APIURL = '/api/3rd_year';
        try {
            const response = await fetch(`${APIURL}/${rollno}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ TotalWorkingDays: 1 })
            });

            //console.log(response.ok);

            const data = await response.json();

            if (response.ok) {
                //console.log("TotalworkDays updated:", data);
                //fetchStudents();
            } else {
                console.error("Error updating TotalworkDay:", data.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    document.title = "CSE 3-Year";
    const reviewBtn = document.getElementById("reviewBtn");
    const shortCut = document.getElementById("shortCut");

    const presentBtn = document.getElementsByClassName("present");
    const absentBtn = document.getElementsByClassName("absent");

    const time = new Date();
    const year = time.getFullYear();
    const date = time.getDate();
    const month = time.getMonth();
    let hours = time.getHours();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const correntTime = time.toLocaleString();

    let TotalDays = true;
    let whatsappDatas = [];
    Array.from(presentBtn).forEach(button => {
        button.addEventListener("click", (event) => {
            //event.target.parentElement.getElementsByClassName("absent")[0].innerHTML = "<del>Absent</del>";
            event.target.style.display = "none";
            event.target.parentElement.getElementsByClassName("absent")[0].style.display = "none";
            event.target.parentElement.getElementsByClassName("result")[0].textContent = "Present";
            event.target.parentElement.getElementsByClassName("result")[0].style.color = "green";

            let timeDate = `${date}/${month + 1}/${year} %0a ${hours}:${minutes}`;

            const rollNo = event.target.parentElement.getElementsByClassName("rollNo")[0].textContent.split(":")[1].trim();
            //console.log(rollNo);
            markAttendance(rollNo, "Present");
            //saveAttendance(name, rollNo.value, "Present", timeDate);
            fetchStudentsCount();
            if (TotalDays) {
                TotalWorkedDay(951322);
                TotalDays = false;
            }
        });
    });

    Array.from(absentBtn).forEach(button => {
        button.addEventListener("click", (event) => {
            //event.target.parentElement.getElementsByClassName("present")[0].innerHTML = "<del>Present</del>";
            event.target.style.display = "none";
            event.target.parentElement.getElementsByClassName("present")[0].style.display = "none";
            event.target.parentElement.getElementsByClassName("result")[0].textContent = "Absent";
            event.target.parentElement.getElementsByClassName("result")[0].style.color = "red";
            let timeDate = `${date}/${month + 1}/${year} %0a ${hours}:${minutes}`;

            const rollNo = event.target.parentElement.getElementsByClassName("rollNo")[0].textContent.split(":")[1].trim();
            const name = event.target.parentElement.getElementsByTagName("h2")[0].textContent.split(":")[1].trim();

            whatsappDatas.push(`Name : ${name}  \n RollNo : ${rollNo} \n   Absent on ${correntTime} \n\n  `);
            markAttendance(rollNo, "Absent");
            //saveAttendance(name, rollNo.value, "Absent", timeDate);
            fetchStudentsCount();
        });
    });
    const APIURL = '/api/3rd_year';
    //const APIURL = `https://studentattendance-1-krzr.onrender.com/api/students`; // If running on the same domain
    shortCut.addEventListener("click", async (event) => {
        var allButtons = event.target.parentElement.querySelector(".allStudents").children;

        buttonArray = [];
        for (let i = 0; i < allButtons.length; i++) {
            buttonArray.push(allButtons[i]);
        }
        //console.log(buttonArray);
        //console.log(buttonArray[0].querySelector(".rollNo").textContent.split(":")[1].trim());
        const AbsentIs = window.prompt("Enter the number of Students Absent");

        if (AbsentIs == "" || AbsentIs == null) {
            alert("Please enter the number of students absent");
            return;
        }
        if (AbsentIs.includes("@#$%^&*(abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ)){")) {
            alert("invaild data");
            return;
        }
        else {
            try {
                if (AbsentIs > 0) {
                    for (let i = 0; i < AbsentIs; i++) {
                        const getAbsentIsNumber = window.prompt("Enter the Absent Students Number one-by-one(23104---):");

                        if (getAbsentIsNumber == "" || getAbsentIsNumber == null) {
                            alert("invalid input");
                        }
                        else if (getAbsentIsNumber.startsWith("0")) {
                            //console.log("Worked");
                            format = Number(`22104${getAbsentIsNumber}`);
                            for (let i = 0; i < buttonArray.length; i++) {
                                if (buttonArray[i] == "") {

                                }
                                else if (buttonArray[i].querySelector(".rollNo").textContent.split(":")[1].trim() == format) {

                                    //console.log(buttonArray[i].querySelector(".rollNo").textContent.split(":")[1].trim());
                                    //console.log(format);
                                    //console.log(i);

                                    buttonArray[i].querySelector(".absent").click();
                                    buttonArray[i].querySelector(".absent").style.display = "none";
                                    buttonArray[i].querySelector(".present").style.display = "none";
                                    buttonArray[i].querySelector(".result").textContent = "Absent";
                                    buttonArray[i].querySelector(".result").style.color = "red";
                                    buttonArray[i] = "";


                                }

                            }
                        }
                        else if (getAbsentIsNumber.startsWith("22104")) {
                            format = Number(getAbsentIsNumber);
                            for (let i = 0; i < buttonArray.length; i++) {
                                if (buttonArray[i].querySelector(".rollNo").textContent.split(":")[1].trim() == format) {
                                    buttonArray[i].querySelector(".absent").click();
                                    buttonArray[i].querySelector(".absent").style.display = "none";
                                    buttonArray[i].querySelector(".present").style.display = "none";
                                    buttonArray[i].querySelector(".result").textContent = "Absent";
                                    buttonArray[i].querySelector(".result").style.color = "red";
                                    buttonArray[i] = "";

                                }

                            }

                        }
                        else if (getAbsentIsNumber.startsWith("30")) {
                            format = Number(`22104${getAbsentIsNumber}`);
                            for (let i = 0; i < buttonArray.length; i++) {
                                if (buttonArray[i].querySelector(".rollNo").textContent.split(":")[1].trim() == format) {
                                    buttonArray[i].querySelector(".absent").click();
                                    buttonArray[i].querySelector(".absent").style.display = "none";
                                    buttonArray[i].querySelector(".present").style.display = "none";
                                    buttonArray[i].querySelector(".result").textContent = "Absent";
                                    buttonArray[i].querySelector(".result").style.color = "red";
                                    buttonArray[i] = "";

                                }

                            }
                        }
                        else if (getAbsentIsNumber.startsWith("70")) {
                            format = Number(`22104${getAbsentIsNumber}`);
                            for (let i = 0; i < buttonArray.length; i++) {
                                if (buttonArray[i].querySelector(".rollNo").textContent.split(":")[1].trim() == getAbsentIsNumber) {
                                    buttonArray[i].querySelector(".absent").click();
                                    buttonArray[i].querySelector(".absent").style.display = "none";
                                    buttonArray[i].querySelector(".present").style.display = "none";
                                    buttonArray[i].querySelector(".result").textContent = "Absent";
                                    buttonArray[i].querySelector(".result").style.color = "red";
                                    buttonArray[i] = "";

                                }
                            }

                        }
                        setTimeout(() => {
                            presentFunction();
                        }, 2000);

                        presentFunction = async () => {
                            for (i = 0; i < buttonArray.length; i++) {
                                if (buttonArray[i] == "") {

                                }
                                else {
                                    await buttonArray[i].querySelector(".present").click();
                                }
                            }
                        }
                    }
                    if (whatsappDatas.length > 0) {
                        let message = '';
                        for (let i = 0; i < whatsappDatas.length; i++) {
                            message += whatsappDatas[i];
                        }
                        async function sendTelegram() {
                            function sendMessage() {
                                //const message = document.getElementById('msg').value;

                                fetch('/send-to-telegram-3rd-year', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({ message })
                                })
                                    .then((response) => {
                                        response.json();
                                        //console.log(response);
                                        console.log(response.ok);
                                    })
                                    .then(data => {
                                        //console.log(data);
                                        window.alert('Message sent to Telegram successfully!');
                                    })
                                    .catch(error => {
                                        console.error('Error:', error);
                                        alert('An error occurred.');
                                    });
                            }
                            sendMessage();
                        }
                        sendTelegram();
                    }
                }
                else {
                    for (i = 0; i < buttonArray.length; i++) {
                        buttonArray[i].querySelector(".present").style.display = "none";
                        buttonArray[i].querySelector(".absent").style.display = "none";
                        buttonArray[i].querySelector(".result").textContent = "Present";
                        buttonArray[i].querySelector(".result").style.color = "green";
                        buttonArray[i].querySelector(".present").click();
                    }
                    let message = "All students are present on " + `${correntTime}`;
                    async function sendTelegram() {
                        function sendMessage() {
                            //const message = document.getElementById('msg').value;

                            fetch('/send-to-telegram-3rd-year', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({ message })
                            })
                                .then((response) => {
                                    response.json();
                                    //console.log(response);
                                })
                                .then(data => {
                                    //console.log(data);
                                    alert('Message sent to Telegram successfully!');
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                    alert('An error occurred.');
                                });
                        }
                        sendMessage();
                    }
                    sendTelegram();

                }
            }
            catch (err) {
                console.log(err);
            }
        }

    });
    let totalReset = true;
    reviewBtn.onclick = async (event) => {
        let TotalWorkingDays
        async function fetchTotalWorkDays(rollno) {

            try {
                const response = await fetch(`${APIURL}/${rollno}`);
                const TotalWorkDays = await response.json();
                TotalWorkingDays = TotalWorkDays.TotalWorkDays;
                console.log(TotalWorkingDays);
                console.log(response);
            }
            catch (error) {
                console.error('Error fetching TotalWorkDays:', error);
            }
            //console.log(TotalWorkingDays);
        }
        await fetchTotalWorkDays(951322);
        //console.log(TotalWorkingDays);
        let TWKDYS = TotalWorkingDays;
        const mainPopup = document.getElementById("mainPopup");
        const popup = document.getElementById("altPopup");
        //console.log(mainPopup);
        //console.log(popup);
        popup.innerHTML = ``;
        popup.innerHTML = `
        <div>
            <h2><i class="fa-solid fa-triangle-exclamation"></i>Warning</h2>
            <p>This will reset the attendance of all students. Are you sure you want to proceed?</p>
            <button id="yesBtn">Yes</button>
            <button id="noBtn">No</button>
        </div>`;
        mainPopup.style.display = "block";

        document.getElementById("noBtn").onclick = () => {
            mainPopup.style.display = "none";
        }
        document.getElementById("yesBtn").onclick = () => {

            mainPopup.style.display = "none";
            document.getElementById("Processing").style.display = "block";
            async function fetchStudentsCount() {
                try {
                    const response = await fetch(`${APIURL}/count`);
                    console.log(response);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    COunt = data.count;
                    console.log(`Total students: ${data.count}`);
                } catch (error) {
                    console.error('Error fetching student count:', error);
                }
            }

            async function fetchStudents() {

                try {
                    const response = await fetch(APIURL);
                    const students = await response.json();

                    //console.log(students);
                    //console.log(COunt);

                    //console.log(event.target.parentElement.querySelector(".allStudents").children);
                    //console.log(event.target.parentElement.querySelectorAll(".student"));
                    const allStudents = event.target.parentElement.querySelector(".allStudents").children;

                    //console.log(allStudents);
                    const table = document.getElementById("table");
                    //console.log(students);

                    let lowPercentage = [];
                    document.getElementById("mainpopupTable").style.display = "block";
                    document.getElementById("closeTable").style.display = "none";
                    for (let i = 0; i < COunt - 1; i++) {

                        let percentage = ((students[i].attendance / TWKDYS) * 100).toFixed(2);

                        //console.log(typeof percentage);
                        const NewTr = document.createElement("tr");
                        const NewTd = document.createElement("td");
                        const NewTd3 = document.createElement("td");
                        const NewTd1 = document.createElement("td");
                        const NewTd2 = document.createElement("td");


                        if (Number(percentage) < 75) {
                            NewTr.style.backgroundColor = "rgb(226, 144, 144)";
                            lowPercentage.push(`Name:${students[i].name} \n RollNo:${students[i].rollno} \n Percentage:${percentage}% \n \n`);

                        }
                        else {
                            NewTr.style.backgroundColor = "rgb(117, 184, 122)";
                        }

                        NewTd3.textContent = i + 1;
                        NewTd.textContent = students[i].name;
                        NewTd1.textContent = students[i].rollno;
                        NewTd2.textContent = `${percentage}%`;

                        NewTr.append(NewTd3, NewTd, NewTd1, NewTd2);
                        table.append(NewTr);

                        /*console.log(allStudents[i]);
                        Newh4 = document.createElement("h4");
                        let percentage = ((students[i].attendance / TWKDYS) * 100).toFixed(2);
                        //console.log(percentage);
                        Newh4.style.color = "blue";
                        Newh4.innerHTML = `${students[i].name} Attendance Percentage = ${percentage}%`;
                        allStudents[i].append(Newh4);*/
                        //console.log(Newdiv.textContent);
                        let RollNo = event.target.parentElement.getElementsByClassName("student")[i].getElementsByClassName("rollNo")[0].textContent.split(":")[1];
                        //console.log(RollNo);
                        await markAttendance(RollNo, "Reset");
                        if (totalReset) {
                            await markAttendance(951322, "Reset");
                            totalReset = false;
                        }
                    }
                    document.getElementById("Processing").style.display = "none";

                    document.getElementById("closeTable").onclick = () => {
                        document.getElementById("mainpopupTable").style.display = "none";
                        document.getElementById("table").innerHTML = "";

                    }

                    if (lowPercentage.length > 0) {

                        //console.log("Entered");
                        function lowPercentageInform() {
                            //console.log(whatsappDatas.length);
                            if (lowPercentage.length > 0) {
                                let partTime1 = '';
                                let message = '';
                                for (i = 0; i < lowPercentage.length; i++) {
                                    partTime1 += lowPercentage[i];
                                    message += lowPercentage[i];


                                }
                                message += `\n${correntTime}`;
                                async function sendTelegram2() {
                                    function sendMessage1() {
                                        //const message = document.getElementById('msg').value;

                                        fetch('/send-to-telegram-3rd-year', {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json',
                                            },
                                            body: JSON.stringify({ message })
                                        })
                                            .then((response) => {
                                                response.json();
                                                console.log(response);
                                            })
                                            .then(data => {
                                                console.log(data);
                                                console.log('Message sent to Telegram successfully!');
                                            })
                                            .catch(error => {
                                                console.error('Error:', error);
                                                alert('An error occurred.Contact Selva');
                                            });
                                    }
                                    sendMessage1();
                                }

                                async function whatsAppPercentage() {
                                    let phone = '+919486500899';
                                    let url = "https://wa.me/" + phone + "?text="
                                        + partTime1;
                                    await window.open(url, "_blank");
                                    partTime1 = "";
                                }
                                sendTelegram2();
                                //whatsAppPercentage();
                            }
                        }
                        lowPercentageInform();
                    }
                }
                catch (error) {
                    console.error('Error fetching students:', error);
                }
            }
            fetchStudentsCount();
            setTimeout(() => {
                fetchStudents();
            }, 2000);
        }
    }
    fetchStudents();
    // Fetch and display the count of students
    async function fetchStudentsCount() {
        try {
            const response = await fetch(`${APIURL}/count`);
            //console.log(response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            count = data.count;
            //console.log(`Total students: ${data.count}`);
        } catch (error) {
            console.error('Error fetching student count:', error);
        }
    }
    async function fetchStudents() {
        const APIURL = '/api/3rd_year'; // Replace with your backend API endpoint
        try {
            // Fetch student data from the backend
            const response = await fetch(APIURL);
            if (!response.ok) {
                throw new Error('Failed to fetch students');
            }

            const students = await response.json(); // Parse the JSON response
            //console.log('Fetched Students:', students);

        } catch (error) {
            console.error('Error fetching students:', error);
            alert('Failed to load students. Please try again later.');
        }
    }


    // Function to mark attendance (Present/Absent)
    async function markAttendance(rollno, status) {
        const date = new Date().toLocaleString();
        const historyEntry = `${status} on ${date}`;
        const check = await fetch(APIURL);
        //console.log(check);
        try {
            const date = new Date().toLocaleString();
            let decision = 0;
            let historyDecision = "";

            if (status === "Absent") {
                decision = 0;
                historyDecision = `${status} on ${date}`;
            } else if (status === "Present") {
                decision = 1;
                historyDecision = ""; // No history entry for "Present"
            } else if (status === "Reset") {
                decision = 0;
                historyDecision = "Reset";
            }

            const response = await fetch(`${APIURL}/${rollno}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ attendance: decision, historyDecision }) // Include historyDecision
            });

            const data = await response.json();

            if (response.ok) {
                //console.log("Attendance updated:", data);
            } else {
                console.error("Error updating attendance:", data.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

}

//SHOW CSE4
function showCse4() {

    document.getElementById("bodyDiv").innerHTML = "";
    //console.log(document.getElementById("bodyDiv"));
    document.getElementById("bodyDiv").innerHTML = `
    <button id="Back" onclick="showCse()"><i class="fa-solid fa-chevron-left"></i></i></button>
    <div id="main1">
<button id="reviewBtn">Review</button>
<div id="students">

    <div class="student">
        <img src="male.jpg" alt="Aarthese" width="200" height="200">
        <h2>Name: Aarthese</h2>
        <p class="rollNo">Roll No: 1</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Aarav" width="200" height="200">
        <h2>Name: Aarav</h2>
        <p class="rollNo">Roll No: 2</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>

</div>
</div>`;

    const presentBtn = document.getElementsByClassName("present");
    const absentBtn = document.getElementsByClassName("absent");

    const time = new Date();
    const year = time.getFullYear();
    const date = time.getDate();
    const month = time.getMonth();
    let hours = time.getHours();
    hours = hours % 12 || 12;
    const minutes = time.getMinutes();

    Array.from(presentBtn).forEach(button => {
        button.addEventListener("click", (event) => {
            //event.target.parentElement.getElementsByClassName("absent")[0].innerHTML = "<del>Absent</del>";
            event.target.style.display = "none";
            event.target.parentElement.getElementsByClassName("absent")[0].style.display = "none";
            event.target.parentElement.getElementsByClassName("result")[0].textContent = "Present";
            event.target.parentElement.getElementsByClassName("result")[0].style.color = "green";

            let timeDate = `${date}/${month + 1}/${year} %0a ${hours}:${minutes}`;

            const rollNo = event.target.parentElement.getElementsByClassName("rollNo")[0].textContent.split(":")[1].trim();
            //console.log(rollNo);
            //markAttendance(rollNo, "present");
            //saveAttendance(name, rollNo.value, "Present", timeDate);
            fetchStudentsCount();
        });
    });

    Array.from(absentBtn).forEach(button => {
        button.addEventListener("click", (event) => {
            //event.target.parentElement.getElementsByClassName("present")[0].innerHTML = "<del>Present</del>";
            event.target.style.display = "none";
            event.target.parentElement.getElementsByClassName("present")[0].style.display = "none";
            event.target.parentElement.getElementsByClassName("result")[0].textContent = "Absent";
            event.target.parentElement.getElementsByClassName("result")[0].style.color = "red";
            let timeDate = `${date}/${month + 1}/${year} %0a ${hours}:${minutes}`;

            const rollNo = event.target.parentElement.getElementsByClassName("rollNo")[0].textContent.split(":")[1].trim();
            markAttendance(rollNo, "Absent");
            //saveAttendance(name, rollNo.value, "Absent", timeDate);
            fetchStudentsCount();
        });
    });

    const APIURL = `https://studentattendance-1-krzr.onrender.com/api/students`; // If running on the same domain


    // Fetch and display the count of students
    async function fetchStudentsCount() {
        try {
            const response = await fetch(`${APIURL}/count`);
            console.log(response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            count = data.count;
            console.log(`Total students: ${data.count}`);
        } catch (error) {
            console.error('Error fetching student count:', error);
        }
    }

    // Function to mark attendance (Present/Absent)
    async function markAttendance(rollno, status) {
        const date = new Date().toLocaleString();
        const historyEntry = `${status} on ${date}`;
        const check = await fetch(APIURL);
        console.log(check);
        try {
            const response = await fetch(`${APIURL}/${3}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ attendance: status, historyEntry })
            });

            console.log(response.ok);

            const data = await response.json();

            if (response.ok) {
                console.log("Attendance updated:", data);
                //fetchStudents();
            } else {
                console.error("Error updating attendance:", data.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
}