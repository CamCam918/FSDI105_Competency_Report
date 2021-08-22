console.log("Users Register");
// global variable
class User {
    constructor(first, last, email, pass, age, address, phone, payment, color) {
        
        this.firstName=first;
        this.lastName=last;
        this.email=email;
        this.password=pass;        
        this.age=age;
        this.address=address;
        this.phoneNumber=phone;
        this.payment=payment;
        this.color=color;
    }
}

function registerUser(){
    
    let first=$("#txtFirst").val();
    let last=$("#txtLast").val();
    let email=$("#txtEmail").val();
    let password=$("#txtPassword").val();    
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phone=$("#txtPhone").val();
    let payment=$("#selPayment").val();
    let color=$("#txtColor").val();
    let user = new User(first,last,email,password,age,address,phone,payment,color);
    console.log(user);    
    saveUser(user);
    clearInputs();
}


function clearInputs(){
    $("#txtFirst").val("");
    $("#txtLast").val("");
    $("#txtEmail").val("");
    $("#txtPassword").val("");    
    $("#txtAge").val("");
    $("#txtAddress").val("");
    $("#txtPhone").val("");
    $("#selPayment").val("");
    $("#txtColor").val("#000000");

}

function init(){
    console.log("init function");
    $("#btnSave").click(registerUser);
    $("#btnSave").click(clearInputs);
}
window.onload=init;