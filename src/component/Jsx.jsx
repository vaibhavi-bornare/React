const Jsx=()=>{
  
    // var student={
    //     name:"vaibhavi",
    //     age:22,
    //     phone_no:1234567890,
    //     email:"vaibhavi@gmail.com"
    // }

    const name =["vaibhavi","rani","tejshri","yashodha"];
const students=[{name:"vaibhavi",age:22,phone_no:1234567890},{name:"Maithli",age:22,phone_no:1234567890},
    {name:"Arnav",age:22,phone_no:1234567890},{name:"Rani",age:22,phone_no:1234567890}
]


    return(
<div>

{/* <h1>{student.name}</h1>
<p>{student.age}</p>
<p>{student.phone_no}</p>
<p>{student.email}</p> */}

{/* <h1>{name[0]}</h1>
<h1>{name[1]}</h1>
<h1>{name[2]}</h1>
<h1>{name[3]}</h1> */}

{
    students.map((item,key)=>{
        return(
            <p>{key} {item.name} {item.age} {item.phone_no}</p>
        )
    })
}


</div>
      
    )
}
export default Jsx;