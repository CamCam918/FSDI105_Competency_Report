function login(){
    let email=$("#txtEmail").val();
    let password=$("#txtPassword").val();
    console.log(email, password);

    let userList=readUsers(); // fromt he localStorage
    let found=false;
    for (var i=0;i<userList.length;i++){
        let user=userList[i];
        if(user.email===email && user.password===password){
            found=true;
            console.log("You are now logged in!");
            window.location="users.html";
        
        }
    }
    if(!found){
        console.log("Invalid Credentials!");
        var alertElement=document.getElementById("alert");
        alertElement.classList.remove("hide");
        setTimeout(function(){
        alertElement.classList.add("hide");
    }, 3000);
    }
}

function init(){
    console.log("Home Page");
    $('#btnLogin').click(login);
  
};


window.onload=init;