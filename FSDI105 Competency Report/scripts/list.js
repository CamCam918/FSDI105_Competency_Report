function displayUsers(users){
    // travel the array
    for(let i=0;i<users.length;i++){
    // get each user
        let user = users[i];
    // display the user
        let syntax=`
        <tr>
            <td>${user.firstName} </td>
            <td>${user.lastName} </td>
            <td>${user.email} </td>            
            <td>${user.age} </td>
            <td>${user.address} </td>
            <td>${user.phoneNumber} </td>
            <td>${user.payment} </td>
            <td style="background-color:${user.color}"> </td>
        <tr>
        `;
    $("#tblUsers").append(syntax);
    // append the user to the DOM
    }
}

function init(){
    console.log("Listing Users");
    var users=readUsers();//this fn is on the storeManager.js
    displayUsers(users);
    $("#btnClear").click(function(){
        clearUsers();
        location.reload();
    })
    
}


window.onload=init;