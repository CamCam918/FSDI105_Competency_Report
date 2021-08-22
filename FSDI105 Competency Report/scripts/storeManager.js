const KEY_USERS="users";
function saveUser(user){
    // load old data
    let data=readUsers();
    // merg
    data.push(user);
    // save
    let val=JSON.stringify(data);
    localStorage.setItem(KEY_USERS,val);
}

function readUsers(){
 let data=localStorage.getItem(KEY_USERS);
 if(!data){
     return [];
 }else{
     let list=JSON.parse(data); //parse = string back into object
     return list;
 }
//  console.log(data)
}

function clearData(){
    // Warning:this will clear all data
    localStorage.clear();
}

function clearUsers(){
    localStorage.removeItem(KEY_USERS);
    
}

