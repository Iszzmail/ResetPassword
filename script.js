let username;
let password;
let obj = {};
let storage = [];

function signup() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  checkUserName(username, password);
  
}

function checkUserName(x, y) {
  obj = {
    uname: x,
    upass: y,
  };
storage.push(obj)

  if (storage.length==2) {
    if (storage[0].uname === storage[1].uname) {
      console.log("UserName "+x +" Already exixts");
      storage.pop()
    }
    
  } 
  
if(storage.length>2){
      for(let i=0;i<storage.length-1;i++){
          if(storage[i].uname==x){
              console.log("UserName "+x +" Already exixtssss");
              storage.pop();
          }
          
         else{
             console.log("added")
         }
         }
}
console.log(storage);
}

function checkpass(x,y){

    let obj={
        uuname:x,
        uupass:y
    }
    
    let storage = [];
    storage.push(obj)

    if (storage.length==1) {
        if (storage[0].uuname==x && storage[0].uupass==y) {
          console.log("logged in");
        }
        else if(storage[i].uname!=x){
            console.log("Please sign up")
          }
      }

    if (storage.length==2) {
        if (storage[0].uuname==x && storage[1].uupass==y) {
          console.log("logged in");
        }
        else if(storage[i].uname!=x){
            console.log("Please sign up")
          }
      }
    


        if(storage.length>2){
            for(let i=0;i<storage.length;i++){
        if(storage[i].uuname==x && storage[i].uupass==y){
            console.log("logged in")
        }

        else if(storage[i].uuname!=x){
            console.log("Please sign up")
          }

        else if(storage[i].uuname==x && storage[i].uupass!=y){
            console.log("wrong password")
        }
        else{
            console.log("no user found")
    }
    
    }
    }
    }
    
    
    function login(){
        
    checkpass(username,password)
    
    }

    function reset(){   
        let username1 = document.getElementById("username").value;
        let password1 = document.getElementById("password").value;


        for(let i=0;i<storage.length;i++){
            if(username1==storage[i].uname){
                let Nnew = prompt("enter the new password");
                
                storage[i].upass=Nnew;
                console.log("password has been updated")
            }
        }
        
    }