

// auth page


    
   
// let forelement=document.getElementById('form');
// forelement.addEventListener('submit', function(event){
//     event.preventDefault();

//     let errors=document.querySelector('.error');
    
    
//    let users={Username:'username',
//    Password:'password'
// }

// let username=document.getElementById('user').value;
// if( username==""){
//     alert('username can not be empty');
//     return false
    
// }
// let password=document.getElementById('password').value;
    
//     if( password==''){
        
//         alert('password do not  be empty');
//     return false
        
//     }
   
    
//     if(password!=="" && username !==''){
//         alert('form submited');
//         sessionStorage.setItem('log',JSON.stringify(users));
//         let location=window.location.href='todo.html';
//     }else{
//     alert("not submit")
//     }
//    forelement.submit();
// });



function newLOcatin(){
    let location=window.location.href='register.html';
    console.log(location)
      
}
var User=[{firstname:'giorgi',passwords:'giogio'}];
sessionStorage.setItem('User',JSON.stringify(User));
function testUser(){
    
    User.forEach(u=>{
        if(sessionStorage){
           console.log(JSON.parse(sessionStorage.getItem('User')));
           window.location.href="todo.html"
        }else{
            alert("dont match");
        }
    })
    
};


function testUser2(){
    var person=[{firstname:'nika',passwords:'nikoniko'}];
   
    sessionStorage.setItem('person',JSON.stringify(person));

    person.forEach(p=>{
        if(sessionStorage.value=p){
            
            console.log(JSON.parse(sessionStorage.getItem('person')))
            window.location.href="todo.html"
        }else{
            alert("dont match");
        }
    })
    clear(logOutTimer);
    
};
let logOutTimer=setTimeout(function(){sessionStorage.clear();} (8000));

// // registration

// let regform=document.getElementById('regform');
// regform.addEventListener('submit',function(event){
//     event.preventDefault();
//     let error={};

//     console.log(event.target);
//     let formElement=event.target;

//     let userName=document.getElementById('reguser').value;
// if( userName==""){
//     error.myuser="enter your username";
    
// }
// let userid=document.getElementById('lastnm').value;
// if(userid==""){
//     error.myuserid='enter your ID';
// };
// let email=document.getElementById('emailreg').value;
// let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// if(email==""||!email. match (pattern)){
//     error.myemail='enter your email';
// };
// let phonenum=document.getElementById('Phone');
// if(phonenum==""){
//     error.myphone='enter your phone number';
// }

// let pasword=document.getElementById('passw').value;
// let pasword2=document.getElementById('passw2').value;
    
//     if( pasword==''||pasword!==pasword2){
//         error.mypasword='password do not  be empty ';
//     }
//     if( pasword2==''||pasword!==pasword2){
//         error.mypasword2='password do not  match ';
//     }



//     for (let item in error){
//         let errorsspan=document.querySelector('.error_'+ item);
//         if(errorsspan){
//             errorsspan.innerText=error[item];
//         }
//     }
//    var storage=regform;
//     if(Object.keys(error).length==0){
//         alert('form submited');
//         sessionStorage.setItem('form',JSON.stringify(storage));
//         window.location.href="todo.html";
//     }
//     formElement.submit()

    
// });


// let error={
//     myuser:"enter your username",
//     mypasword:"password do not  be empty ",
//     mypasword2:"pasword do not match",
//     myuserid:"enter your ID",
//     myemail:"enter your email",
//     myphone:"enter your phone number"
// };



function showTestuser(){
let Test=document.querySelector('.test');
let testAuth=document.querySelector('.testauth');
testAuth.classList.toggle('used')
}   



function goback(){
    let backPage=window.location.href='/index.html';
    console.log(backPage)
      
}

function showMore(){
let dots=document.getElementById('dot');
let more=document.getElementById('more');
let loadBtn=document.getElementById('loadbtn');
if(dots.style.display==="none"){
    dots.style.display="inline";
    loadBtn.innerHTML="იხილეთ მეტი";
    more.style.display="none"
}else{
    dots.style.display="none";
    loadBtn.innerHTML="იხილეთ ნაკლები";
    more.style.display="inline"
}
}

function viewMore(){
    let dot=document.getElementById('dots');
let loadmore=document.getElementById('loadmore');
let mybtn=document.querySelector('.mybtn');
if(dot.style.display==="none"){
    dot.style.display="inline";
    mybtn.innerHTML="იხილეთ მეტი";
    loadmore.style.display="none"
}else{
    dot.style.display="none";
    mybtn.innerHTML="იხილეთ ნაკლები";
    loadmore.style.display="inline"
}
}

// todo list



   class mytodo
            {
            constructor(name,phonenumber,id){
                
          this.name=name;
          this.phonenumber=phonenumber;
          this.id=Date.now();
            }
        }

        var phonebook=document.getElementById('numField').value
        var inputField = document.getElementById('inputField').value;
       

    var toDo=[];

    
        toDo=new mytodo(
            inputField.value,
            phonebook.value
            
        )

    function addtodo(){

        toDo.push(inputField);
        toDo.push(phonebook);
        
        console.log(toDo);
        
    }

    function printtodo(){

        var toDoContainer = document.getElementById('toDoContainer');
        toDoContainer.innerHTML="";

        for(var i=0;i<toDo.length;i++){
            var li=document.createElement('li');
            var listitem=li.appendChild(document.createTextNode(toDo[i]));
            toDoContainer.appendChild(listitem);
            deltodo();
            sessionStorage.setItem("input",JSON.stringify(toDo[i]))
        }
        
    }

    function deltodo(){
        let dlbtn=document.createElement('button');
            dlbtn.classList.add('dlbtn')
            dlbtn.innerText='delete';
        listitem.appendChild(dlbtn);
    }


    var addToDoButton = document.getElementById('addToDo');
    addToDoButton.addEventListener('click',function (){

    addtodo();
    printtodo();
    
        
    })
    
    




  

  


