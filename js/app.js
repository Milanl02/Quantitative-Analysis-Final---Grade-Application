var responseDIV=document.body.querySelector(".response");

//Start of Website:
var list = ["View Grades", "Add Grades"]
var listTwo = []

function NavCreation() {
    var nav = document.createElement("nav");
    createButton(list[0]);
    createButton(list[1]);
    document.body.appendChild(nav);

    function createButton(pg) {
        var butt = document.createElement("button");
        butt.innerHTML = pg;
        butt.addEventListener("click", function () {
            navigate(pg);
        })
        nav.appendChild(butt);
    }
}

function createText() {
    var wrapper = document.createElement("wrapper");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
}

function navigate(pg) {
    if (pg === "View Grades") {
        viewPage();
    } else if (pg === "Add Grades") {
        addPage();
    }
}

function viewPage() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var titletwo = document.createElement("h1");
    titletwo.innerHTML = "View Your Added Grades Here!"
    wrapper.appendChild(titletwo)
    var result=document.createElement("button");
    result.classList.add("resultbutton");
    result.innerHTML="Add More Grades!"
    wrapper.appendChild(result);
    result.addEventListener("click", function () {
        navigate("Add Grades")
    })
    var golf=document.createElement("div");
    addNote()
    function addNote() {
        golf.innerHTML = ""
        for (var i = 0; i < listTwo.length; i++) {
            var note = document.createElement("div");
            var line=document.createElement("div")
            note.innerHTML ="Student's Name Above: Student's Grade Below: " + listTwo[i];
            line.innerHTML="_____________________________________________"
            golf.appendChild(note);
            golf.appendChild(line);
        }
    }

    wrapper.appendChild(golf);
}

function addPage() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "Add Grades Here!"
    wrapper.appendChild(header)
    var name = document.createElement("input");
    name.classList.add("entername");
    name.placeholder = "Enter Student's Name"
    wrapper.appendChild(name)
    var grade = document.createElement("input");
    grade.classList.add("entergrade");
    grade.placeholder = "Enter Grade: (0-100)"
    wrapper.appendChild(grade)
    var done = document.createElement("button")
    done.classList.add("donebutton");
    done.innerHTML = "Submit Grade";
    wrapper.appendChild(done)
    var roughdraft = document.createElement("div");
    roughdraft.classList.add("roughdraft")
    wrapper.appendChild(roughdraft)
    var trevor = false;
    done.addEventListener("click", function () {
        var note = document.body.querySelector(".entername").value;
        var regional = document.body.querySelector(".entergrade").value;
        if (isNaN(parseInt(regional))) {
            roughdraft.innerHTML = "Grade must be a number between 0-100. Try again!"
        } else if (parseInt(regional) < 0 || parseInt(regional) > 100) {
            roughdraft.innerHTML = "Grade can not be a number less than 0 or greater than 100. Try again!"
        } else if (isNaN(note)) {
            listTwo.push(note)
            listTwo.push(regional)
            addNote()
            navigate("View Grades")
            trevor = false
        } else {
            trevor = true;
            roughdraft.innerHTML = "That is not a student's name. Try again!"
        }

    })
    wrapper.appendChild(note);
    wrapper.appendChild(regional);

    function addNote() {
        roughdraft.innerHTML = ""
        for (var i = 0; i < listTwo.length; i++) {
            var note = document.createElement("div");
            note.innerHTML = listTwo[i];
            roughdraft.appendChild(note);
        }
    }
}

//Sign In Page:
document.body.querySelector(".submitButton").addEventListener("click", function (){
    var enteredUsername=document.body.querySelector(".username").value;
    var enteredPassword=document.body.querySelector(".password").value;
    if (enteredUsername==="cool"&&enteredPassword==="password"){
        document.body.innerHTML="";
        NavCreation();
        createText();
        navigate("View Grades");
    }else{
        responseDIV.innerHTML="The wrong username or password was entered. Try again!"
    }
})