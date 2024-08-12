const estudiante = {

    name : "Luis",
    lastName : "Reyes",
    curso: 1
}


fetch ('http://localhost:8784/api/univer/estudiante',{
    method : "POST",
    body: JSON.stringify(estudiante),
    headers:{"Content-type" : "application/json"}
})
.then(response =>{
    if(response.ok && response.status === 201){
        console.log(response)
        return response.json()
    }
})
.then(json =>{
    console.log(json)
})