const searchicon1 = document.querySelector("#searchicon1");
const search1 = document.querySelector("#searchinput1");

searchicon1.addEventListener('click', function(){
    search1.style.display = 'flex';
    searchicon1.style.display = 'none';
})

const searchicon2 = document.querySelector("#searchicon2");
const search2 = document.querySelector("#searchinput2");

searchicon2.addEventListener('click', function(){
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
})

const bar = document.querySelector(".fa-bars");
const cross = document.querySelector("#hdcross");
const headerbar = document.querySelector(".headerbar");

bar.addEventListener('click', function(){
    setTimeout(()=>{
        cross.style.display = 'block';
    },200);
    headerbar.style.right = '0%';
})

cross.addEventListener('click', function(){
    headerbar.style.right = '-100%';
    cross.style.display = 'none';
})

const body = document.querySelector("body");

function signUp(){
    const page = document.createElement("div");
    page.classList.add("login");
    document.querySelector(".home").classList.add("pressed");
    document.querySelector(".header").classList.add("pressed");
    document.querySelector(".footer").classList.add("pressed");
    page.innerHTML = `
    <div class="sign-up">
        <h3>Sign Up</h3>
        <i class="fa-solid fa-xmark" id="cross"></i>
    </div>
    <form name="signUp" action="index.html" onsubmit="return validateForm()">
        <p class="form-txt">Enter Full Name</p>
        <input type="text" name="name" placeholder="Full Name" autofocus autocomplete="off">
        <p class="form-txt">Enter E-mail</p>
        <input type="email" name="email" placeholder="E-mail" autocomplete="off">
        <p class="form-txt">Create Password</p>
        <input type="password" name="password1" class="pwd" placeholder="Password" autocomplete="off">
        <p class="form-txt">Confirm Password</p>
        <input type="password" name="password2" class="pwd" placeholder="Confirm Password" autocomplete="off">
        
        <input type="submit" class="red_btn2" value="Sign Up">
    </form>
    <a href="#" id="signUp">Already have an account? Sign In</a>
    `;

    body.appendChild(page);

    page.querySelector("#signUp").addEventListener('click', function(){
        page.style.height = '55vh';
        page.innerHTML = `
        <div class="sign-up">
            <h3>Sign In</h3>
            <i class="fa-solid fa-xmark" id="cross"></i>
        </div>
        <form name="signIn" action="index.html" onsubmit="return checkForm()">
            <p class="form-txt">Enter E-mail</p>
            <input type="email" name="email" placeholder="E-mail" autofocus autocomplete="off">
            <p class="form-txt">Password</p>
            <input type="password" name="password" class="pwd" placeholder="Password" autocomplete="off">

            <input type="submit" class="red_btn2" value="Sign In">
        </form>
        <a href="#" id="signIn" onclick = "signUp()">Don't have an account? Sign Up</a>
        `;
        page.querySelector("#signIn").addEventListener('click', function(){
            page.remove();
        })

        page.querySelector("#cross").addEventListener('click', function(){
            document.querySelector(".home").classList.remove("pressed");
            document.querySelector(".header").classList.remove("pressed");
            document.querySelector(".footer").classList.remove("pressed");
            page.remove();
        })
    })

    page.querySelector("#cross").addEventListener('click', function(){
        document.querySelector(".home").classList.remove("pressed");
        document.querySelector(".header").classList.remove("pressed");
        document.querySelector(".footer").classList.remove("pressed");
        page.remove();
    })
}

function validateForm(){
    let x = document.forms["signUp"]["password1"].value;
    let y = document.forms["signUp"]["password2"].value;
    let name = document.forms["signUp"]["name"].value;
    let email = document.forms["signUp"]["email"].value;

    document.querySelectorAll(".error-message").forEach((errormsg) => errormsg.remove());

    if(name === ""){
        insertErrorMessage("*Full Name is required", "signUp", 1);
        return false;
    }else if(email===""){
        insertErrorMessage("*Email is required", "signUp", 2);
        return false;
    }else if(x===""){
        insertErrorMessage("*Password is required", "signUp", 3);
        return false;
    }

    if(x!=y){
        const para = document.createElement("div");
        para.innerHTML = `
        <p style="color:red; text-align: justify; font-size:12px">*Password Not Matched</p>
        `;
        document.forms["signUp"].insertBefore(para, document.forms["signUp"].querySelector(".red_btn2"));
        document.forms["signUp"]["password1"].value="";
        document.forms["signUp"]["password2"].value="";
        return false;
    }
}

function insertErrorMessage(message, cls, index){
    const para = document.createElement("div");
    para.classList.add("error-message");
    para.innerHTML = `
    <p style="color:red; text-align: justify; font-size:12px">${message}</p>
    `;
    document.forms[cls].insertBefore(para, document.forms[cls].querySelectorAll(".form-txt")[index]);
}

function checkForm(){
    let pwd = document.forms["signIn"]["password"].value;
    let email = document.forms["signIn"]["email"].value;

    document.querySelectorAll(".error-message").forEach((errormsg) => errormsg.remove());

    if(email===""){
        insertErrorMessage("*Email is required", "signIn", 1);
        return false;
    }else if(pwd===""){
        const para = document.createElement("div");
        para.innerHTML = `
        <p style="color:red; text-align: justify; font-size:12px">*Password is required</p>
        `;
        document.forms["signIn"].insertBefore(para, document.forms["signIn"].querySelector(".red_btn2"));
        document.forms["signIn"]["password"].value="";
        return false;
    }
}
