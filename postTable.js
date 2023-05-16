
import getTheAnswer from './testexport';
console.log(getTheAnswer());
function submitData(){
    console.log("trigger")
    let titleInput=document.querySelector('#title').value;
    let bodyInput=document.querySelector('#body').value;
    let userIdInput=document.querySelector('#userid').value;

    let postData={"title":titleInput,"body":bodyInput,"usrid": userIdInput};
     
         fetch("http://jsonplaceholder.typicode.com/posts",{
        method:"POST", 
        body:JSON.stringify(postData),
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then(res =>{
        return res.json()
    })
    .then(data=> {
        console.log(data)
        DataTable(data)

    });
}


