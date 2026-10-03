const Jsx=()=>{
  
    

const students=[{name:"vaibhavi",age:22,phone_no:1234567890},
    {name:"Maithli",age:22,phone_no:1234567890},
    {name:"Arnav",age:22,phone_no:1234567890},
    {name:"Rani",age:22,phone_no:1234567890}
]
const teacher=[{name:"Pranali",age:22,phone_no:1234567890},
    {name:"Raj",age:22,phone_no:1234567890},
    {name:"Suraj",age:22,phone_no:1234567890},
    {name:"Gayatri",age:22,phone_no:1234567890}
]
//  var isStudent=false;

    return(
<div>
{/* {
isStudent ? 
    students.map((item,key) =>{
        return(
            <p> {item.name} {item.age} {item.phone_no}</p>
        );
    })    :

    teacher.map((item,key)=>{
        return(
            <p>{ item.name} {item.age} {item.phone_no}</p>
        )
    })

} */}
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">age</th>
      <th scope="col">phone_no</th>
    </tr>
  </thead>
  <tbody>
    {teacher.map((item,key)=>{
        return(
<tr>
      <th scope="row">{key+1}</th>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.phone_no}</td>
    </tr>
        )
    })
    }
    
  </tbody>
</table>

</div>
      
    )
}
export default Jsx;