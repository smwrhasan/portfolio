/* Some variables */

var tags = document.getElementsByTagName("small");

var toTop = document.getElementById("to-top");

const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

function check() {
    var uname = document.getElementById("name").value;
    var umail = document.getElementById("mail").value;
    var sub = document.getElementById("subject").value;
    var msg = document.getElementById("msg").value;

    /* Validation check */
    if (uname.length < 4) {
        tags[0].style.display = "block";
    } else {
        tags[0].style.display = "none";
    }
    if (umail.match(emailPattern)) {
        tags[1].style.display = "none";
    } else {
        tags[1].style.display = "block";
    }
    if (sub.length < 8) {
        tags[2].style.display = "block";
    } else {
        tags[2].style.display = "none";
    }
    if (msg.length < 1) {
        tags[3].style.display = "block";
    } else {
        tags[3].style.display = "none";
    }

    if (uname.length > 3 && sub.length > 7 && msg.length > 0 && umail.match(emailPattern)) {
        sendMail(uname, umail, sub, msg);
    } else {
        console.log("error occurred.");
    }
}

function sendMail(name, email, subject, message) {
    var btn = document.getElementById("btn");

    emailjs
        .send("service_ozolfwa", "template_h6khyw4", {
            name: name,
            mail: email,
            subject: subject,
            message: message,
        })
        .then(
            function () {
                btn.innerHTML = "Successful!";
                btn.disabled = true;
                tags[4].innerHTML = "Massage has been sent successfully.";
                tags[4].style.display = "block";
                tags[4].style.color = "green";
            },
            function (error) {
                btn.innerHTML = "Error!";
                btn.disabled = true;
                tags[4].innerHTML = "Error! Please refresh the page and try again.";
                tags[4].style.display = "block";
            }
        );
}

function scrolling() {
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 150) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    });
}

function unredo(tbtn) {
    if(tbtn.innerText == "Appreciate"){
        tbtn.innerText = "Appreciated!";
		tbtn.style.background="#444"
		tbtn.style.border="1px solid #222"
    }else{
        tbtn.innerText = "Appreciate";
		tbtn.style.background="#292b2c"
		tbtn.style.border="1px solid #292b2c"
    }
}

/* Function calling */

scrolling();