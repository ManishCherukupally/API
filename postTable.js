function submitData(){
    let titleInput=document.querySelector('#title').value;
    let bodyInput=document.querySelector('#body').value;
    let userIdInput=document.querySelector('#userid').value;

    let postData={"title":titleInput,"body":bodyInput,"usrid": userIdInput};
     
    //      fetch("http://jsonplaceholder.typicode.com/posts",{
    //     method:"POST", 
    //     body:JSON.stringify(postData),
    //     headers:{
    //         "Content-Type": "application/json"
    //     }
    // })
    // .then(res =>{
    //     return res.json()
    // })
    // .then(data=> {
    //     console.log(data)
    //     dataTable(data)

    // });

    fetch("http://localhost:4000/",{
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
        dataTable(data)

    });
}
    function dataTable(post){
    let tblBody=document.querySelector('.tablebody1')

    let row=document.createElement("tr")
    let titleCell=document.createElement("td")
    let bodyCell=document.createElement("td")
    let userIdCell=document.createElement("td")

    titleCell.innerText=post.title;
    row.appendChild(titleCell);

    bodyCell.innerText=post.body;
    row.appendChild(bodyCell);

    userIdCell.innerText=post.usrid;
    row.appendChild(userIdCell);

    tblBody.appendChild(row);
    }


