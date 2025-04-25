const time = new Date();
const year = time.getFullYear();
const date = time.getDate();
const month = time.getMonth();
let hours = time.getHours();
const meritiam = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12;
const minutes = time.getMinutes();
let timeDate = `${date}/${month + 1}/${year}`;
const GoodTime = meritiam == "AM" ? "Good Morning" : "Good Afternoon";


const loginStudents = () => {
    document.getElementById("bodyDiv").innerHTML = "";
    document.getElementById("bodyDiv").innerHTML = `<div id="main">
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
    document.getElementById("bodyDiv").innerHTML = `<div id="main">
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
        console.log(`attendance:${StudentAttendance} , ${TotalWorkingDays}`);
        console.log(StudentAttendance);
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
        //console.log(document.getElementById("bodyDiv"));

        document.getElementById("bodyDiv").innerHTML = `
        <button id="Back" onclick="homePage()"><i class="fa-solid fa-chevron-left"></i></i></button>
        <div id="depts">
<a ><div id="cse" class="dept" onclick="showCse()"><h1>CSE</h1></div></a>
<a href="ececlass.html"><div id="ece" class="dept"><h1>ECE</h1></div></a>
<a href="/mechclass.html"><div id="mech" class="dept"><h1>MECH</h1></div></a>
<a href="aiclass.html"><div id="ai" class="dept"><h1>AI</h1></div></a>
<a href="itclass.html"> <div id="id" class="dept"><h1>IT</h1></div></a>
</div>`;
        document.title = "departments";

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
    </div>
</div>
    `;
}
function showDept() {
    document.getElementById("bodyDiv").innerHTML = "";
    //console.log(document.getElementById("bodyDiv"));

    document.getElementById("bodyDiv").innerHTML = `
    <button id="Back" onclick="homePage()"><i class="fa-solid fa-chevron-left"></i></i></button>
    <div id="depts">
<a ><div id="cse" class="dept" onclick="showCse()"><h1>CSE</h1></div></a>
<a href="ececlass.html"><div id="ece" class="dept"><h1>ECE</h1></div></a>
<a href="mechclass.html"><div id="mech" class="dept"><h1>MECH</h1></div></a>
<a href="aiclass.html"><div id="ai" class="dept"><h1>AI</h1></div></a>
<a href="itclass.html"> <div id="id" class="dept"><h1>IT</h1></div></a>
</div>`;
    document.title = "Departments";
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
    document.getElementById("bodyDiv").innerHTML = `<div id="main1">
<button id="reviewBtn">Review</button>
<div id="students">

    <div class="student">
        <img src="student1.jpeg" alt="Aarthese" width="200" height="200">
        <h2>Name: Aarthese</h2>
        <p class="rollNo">Roll No: 1</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="student1.jpeg" alt="Aarav" width="200" height="200">
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

//SHOW CSE2
function showCse2() {

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
<button id="Back" onclick="showCse()"><i class="fa-solid fa-chevron-left"></i></button>
<button id="shortCut">Put Attendance</button>
<button id="reviewBtn">Get Percentage</button>
<div id="students" class="allStudents">

    <div class="student">
        <img src="male.jpg" alt="Aarthese" width="200" height="200">
        <h2>Name: Aarthese</h2>
        <p class="rollNo">Roll No: 23104001</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Abina" width="200" height="200">
        <h2>Name: Abina</h2>
        <p class="rollNo">Roll No: 23104002</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="Abinaya" width="200" height="200">
        <h2>Name: Abinaya</h2>
        <p class="rollNo">Roll No: 23104003</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="Abirami" width="200" height="200">
        <h2>Name: Abirami</h2>
        <p class="rollNo">Roll No: 23104004</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="Abisha" width="200" height="200">
        <h2>Name: Abisha</h2>
        <p class="rollNo">Roll No: 23104005</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="AbishaMary" width="200" height="200">
        <h2>Name: AbishaMary</h2>
        <p class="rollNo">Roll No: 23104006</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Abisheka" width="200" height="200">
        <h2>Name: Abisheka</h2>
        <p class="rollNo">Roll No: 23104007</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="AkshayaLakshmi" width="200" height="200">
        <h2>Name: AkshayaLakshmi</h2>
        <p class="rollNo">Roll No: 23104008</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="male.jpg" alt="Arumugavel" width="200" height="200">
        <h2>Name: Arumugavel</h2>
        <p class="rollNo">Roll No: 23104009</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Arunkumar" width="200" height="200">
        <h2>Name: ArunKumar</h2>
        <p class="rollNo">Roll No: 23104010</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Ashokraja" width="200" height="200">
        <h2>Name: Ashokraja</h2>
        <p class="rollNo">Roll No: 23104011</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Baras" width="200" height="200">
        <h2>Name: Baras</h2>
        <p class="rollNo">Roll No: 23104012</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="BavaniC" width="200" height="200">
        <h2>Name: BavaniC</h2>
        <p class="rollNo">Roll No: 23104013</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="BavaniS" width="200" height="200">
        <h2>Name: BavaniS</h2>
        <p class="rollNo">Roll No: 23104014</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="male.jpg" alt="Bern" width="200" height="200">
        <h2>Name: Bern</h2>
        <p class="rollNo">Roll No: 23104015</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="ChinnaThambi" width="200" height="200">
        <h2>Name: ChinnaThambi</h2>
        <p class="rollNo">Roll No: 23104016</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="EsakkiSorna" width="200" height="200">
        <h2>Name: EsakkiSorna</h2>
        <p class="rollNo">Roll No: 23104017</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="GiftyHepzipal" width="200" height="200">
        <h2>Name: GiftyHepzipal</h2>
        <p class="rollNo">Roll No: 23104018</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="HeavencyRose" width="200" height="200">
        <h2>Name: HeavencyRose</h2>
        <p class="rollNo">Roll No: 23104019</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="IrudayaJency" width="200" height="200">
        <h2>Name: IrudayaJency</h2>
        <p class="rollNo">Roll No: 23104020</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="Jensha" width="200" height="200">
        <h2>Name: Jensha</h2>
        <p class="rollNo">Roll No: 23104021</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="JesuAgnel" width="200" height="200">
        <h2>Name: JesuAgnel</h2>
        <p class="rollNo">Roll No: 23104022</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="male.jpg" alt="JohnImmanuel" width="200" height="200">
        <h2>Name: JohnImmanuel</h2>
        <p class="rollNo">Roll No: 23104023</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="male.jpg" alt="JohnRabeeder" width="200" height="200">
        <h2>Name: JohnRabeender</h2>
        <p class="rollNo">Roll No: 23104024</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="kamalieswari" width="200" height="200">
        <h2>Name: Kamalieswari</h2>
        <p class="rollNo">Roll No: 23104026</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Karthiga" width="200" height="200">
        <h2>Name: Karthiga</h2>
        <p class="rollNo">Roll No: 23104027</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Keerthana" width="200" height="200">
        <h2>Name: Keerthana</h2>
        <p class="rollNo">Roll No: 23104028</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="LingaPabitha" width="200" height="200">
        <h2>Name: LingaPabitha</h2>
        <p class="rollNo">Roll No: 23104029</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="male.jpg" alt="Mariyappan" width="200" height="200">
        <h2>Name: Mariyappan</h2>
        <p class="rollNo">Roll No: 23104030</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="MeehaEbaneser" width="200" height="200">
        <h2>Name: MeehaEbanesar</h2>
        <p class="rollNo">Roll No: 23104031</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="male.jpg" alt="MohamedBahrudeen" width="200" height="200">
        <h2>Name: MohamedBahrudeen</h2>
        <p class="rollNo">Roll No: 23104032</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="MuthuEsakkiammal" width="200" height="200">
        <h2>Name: MuthuEsakkiammal</h2>
        <p class="rollNo">Roll No: 23104033</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="male.jpg" alt="Muthukrishnan" width="200" height="200">
        <h2>Name: Muthukrishnan</h2>
        <p class="rollNo">Roll No: 23104034</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="male.jpg" alt="Pattuperumal" width="200" height="200">
        <h2>Name: Pattuperumal</h2>
        <p class="rollNo">Roll No: 23104035</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="Pooja" width="200" height="200">
        <h2>Name: Pooja</h2>
        <p class="rollNo">Roll No: 23104036</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="Priya" width="200" height="200">
        <h2>Name: Priya</h2>
        <p class="rollNo">Roll No: 23104037</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Priyadharshini" width="200" height="200">
        <h2>Name: Priyadharshini</h2>
        <p class="rollNo">Roll No: 23104038</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="RajeshKumar" width="200" height="200">
        <h2>Name: RajeshKumar</h2>
        <p class="rollNo">Roll No: 23104039</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="male.jpg" alt="RakeshPraveen" width="200" height="200">
        <h2>Name: RakeshPraveen</h2>
        <p class="rollNo">Roll No: 23104040</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="male.jpg" alt="Sampeter" width="200" height="200">
        <h2>Name: Sampeter</h2>
        <p class="rollNo">Roll No: 23104041</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="male.jpg" alt="SanthiyaguSabin" width="200" height="200">
        <h2>Name: SanthiyaguSabin</h2>
        <p class="rollNo">Roll No: 23104042</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="SelvaAllsiya" width="200" height="200">
        <h2>Name: SelvaAllsiya</h2>
        <p class="rollNo">Roll No: 23104043</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Selvakumar" width="200" height="200">
        <h2>Name: Selvakumar</h2>
        <p class="rollNo">Roll No: 23104044</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Selvapriya" width="200" height="200">
        <h2>Name: SelvaPriya</h2>
        <p class="rollNo">Roll No: 23104045</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="SelvaRathiAshal" width="200" height="200">
        <h2>Name: SelvaRathiAkshal</h2>
        <p class="rollNo">Roll No: 23104046</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="SherinSamika" width="200" height="200">
        <h2>Name: SherinSamika</h2>
        <p class="rollNo">Roll No: 23104047</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="Sipi" width="200" height="200">
        <h2>Name: Sipi</h2>
        <p class="rollNo">Roll No: 23104048</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="SriMithuna" width="200" height="200">
        <h2>Name: SriMithuna</h2>
        <p class="rollNo">Roll No: 23104050</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="SubashRackshan" width="200" height="200">
        <h2>Name: SubashRackshan</h2>
        <p class="rollNo">Roll No: 23104051</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="Suganthi" width="200" height="200">
        <h2>Name: Suganthi</h2>
        <p class="rollNo">Roll No: 23104052</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="SuryaKala" width="200" height="200">
        <h2>Name: SuryaKala</h2>
        <p class="rollNo">Roll No: 23104053</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="Sushmitha" width="200" height="200">
        <h2>Name: Sushmitha</h2>
        <p class="rollNo">Roll No: 23104054</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="male.jpg" alt="SuviseshGiftson" width="200" height="200">
        <h2>Name: SuviseshGiftson</h2>
        <p class="rollNo">Roll No: 23104055</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        
        <div class="student">
        <img src="female.jpg" alt="Swathi" width="200" height="200">
        <h2>Name: Swathi</h2>
        <p class="rollNo">Roll No: 23104056</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="female.jpg" alt="SweetyEsther" width="200" height="200">
        <h2>Name: SweetyEsther</h2>
        <p class="rollNo">Roll No: 23104057</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Udhayakumar" width="200" height="200">
        <h2>Name: Udhayakumar</h2>
        <p class="rollNo">Roll No: 23104058</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="male.jpg" alt="Vignesh" width="200" height="200">
        <h2>Name: Vignesh</h2>
        <p class="rollNo">Roll No: 23104059</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="male.jpg" alt="Willingsraja" width="200" height="200">
        <h2>Name: Willingsraja</h2>
        <p class="rollNo">Roll No: 23104060</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="Artheeswari" width="200" height="200">
        <h2>Name: Artheeswari</h2>
        <p class="rollNo">Roll No: 23104301</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        
        <div class="student">
        <img src="male.jpg" alt="Balakrishnan" width="200" height="200">
        <h2>Name: Balakrishnan</h2>
        <p class="rollNo">Roll No: 23104302</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="Chinnadurai" width="200" height="200">
        <h2>Name: Chinnadurai</h2>
        <p class="rollNo">Roll No: 23104303</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="male.jpg" alt="MohammedMunaf" width="200" height="200">
        <h2>Name: MohammedMunaf</h2>
        <p class="rollNo">Roll No: 23104304</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="female.jpg" alt="StellaPersiya" width="200" height="200">
        <h2>Name: StellaPersiya</h2>
        <p class="rollNo">Roll No: 23104305</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
        <div class="student">
        <img src="male.jpg" alt="ObedRajaSingh" width="200" height="200">
        <h2>Name: ObedRajaSingh</h2>
        <p class="rollNo">Roll No: 23104701</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
</div>
</div>`;
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
    let TotalDays = true;
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
            let timeDate = `${date}/${month + 1}/${year}`;

            const rollNo = event.target.parentElement.getElementsByClassName("rollNo")[0].textContent.split(":")[1].trim();
            const name = event.target.parentElement.getElementsByTagName("h2")[0].textContent.split(":")[1].trim();

            //console.log(String(rollNo).slice(5));
            whatsappDatas.push(`Name : ${name}  \n RollNo : ${rollNo} \n   Absent on ${timeDate} \n\n  `);

            //console.log(rollNo);
            //whatsappDate.push(`Name : ${name} %0a RollNo : ${rollNo} %0a Absent on ${timeDate}`);
            //console.log(whatsappDate);
            markAttendance(rollNo, "Absent");
            //saveAttendance(name, rollNo.value, "Absent", timeDate);
            fetchStudentsCount();

        });
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
        //let saveAbsentData = [];
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
                            format = Number(`23104${getAbsentIsNumber}`);
                            //saveAbsentData.push(format);
                        }
                        //console.log(String(format).slice(5));

                        if (String(format).slice(5).startsWith("0")) {
                            find = String(format).slice(6);
                            if (String(find).startsWith("0")) {
                                get = find.slice(1);
                                //console.log(get);

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
                                partTime1 += "All students are present on " + `${date}/${month + 1}/${year} %0a ${hours}:${minutes} ${ampm}`;
                                let message = "All students are present on " + `${date}/${month + 1}/${year}  ${hours}:${minutes} ${ampm}`;
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
                window.alert(`ERROR: ${err}`);
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

                            async function whatsAppMessage() {
                                let phone = '+919486500899';
                                let url = "https://wa.me/" + phone + "?text="
                                    + partTime1;
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
                                            console.log(data);
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
        }
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
                    for (let i = 0; i < COunt - 1; i++) {

                        let percentage = ((students[i].attendance / TWKDYS) * 100).toFixed(2);

                        //console.log(typeof percentage);
                        const NewTr = document.createElement("tr");
                        const NewTd = document.createElement("td");
                        const NewTd3 = document.createElement("td");
                        const NewTd1 = document.createElement("td");
                        const NewTd2 = document.createElement("td");


                        if (Number(percentage) < 76) {
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
                    document.getElementById("Processing").style.display = "none";

                    document.getElementById("closeTable").onclick = () => {
                        document.getElementById("mainpopupTable").style.display = "none";
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
    document.getElementById("bodyDiv").innerHTML = `<div id="main1">
<button id="reviewBtn">Review</button>
<div id="students">

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

//SHOW CSE4
function showCse4() {

    document.getElementById("bodyDiv").innerHTML = "";
    //console.log(document.getElementById("bodyDiv"));
    document.getElementById("bodyDiv").innerHTML = `<div id="main1">
<button id="reviewBtn">Review</button>
<div id="students">

    <div class="student">
        <img src="student1.jpeg" alt="Aarthese" width="200" height="200">
        <h2>Name: Aarthese</h2>
        <p class="rollNo">Roll No: 1</p>
        <button class="present">Present</button>
        <button class="absent">Absent</button>
        <p class="result"></p>
    </div>
    <div class="student">
        <img src="student1.jpeg" alt="Aarav" width="200" height="200">
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