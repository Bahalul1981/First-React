
// // WORKING WITH CLASS COMPONENT

// import React from "react";

// //Class constractor and extended react coponent.
// class App extends React.Component{

//   state= {
//     Name:"Bahalul",
//     Age:40,
//     Occupation: "Salseman",
//     Address: "Vårbergsvägen-193,Stockholm,Sweden.",
//     programmingLanguage: ["Javascript", "java","python"]
//   }

//  hitme=()=>{
//    if(this.state.Name==="Bahalul")
//    {
//     this.setState({
//       Name:"Farhana Yasmin"
//     })

//    }
//    else{ this.setState({
//     Name:"Bahalul"
//   })}
 
//  }


//   render(){
//     return (
//               <>
//                   <div>
//                     <h1>All about Dawn Amin Ahmed</h1> 
//                     <h3>Name:<mark>{this.state.Name}</mark></h3>
//                     <h3>Age: {this.state.Age}</h3>
//                     <h3>Occupation: {this.state.Occupation}</h3>
//                     <h3>Address: {this.state.Address}</h3>
//                     <h4>Programminglanguage</h4>
//                     {
//                      this.state.programmingLanguage.map((elem)=>(
//                        <li>{elem}</li>
//                      ))
//                     }
                 
                    
                    
//                   </div>
//                   <div>
//                   <button onClick={this.hitme}>Click me</button>
//                   </div>
//               </>
//     )
//   }


// }
// export default App










// WORKING WITH FUNCTIONAL COMPONENT

import React,{useState} from "react";

function App(){

  const runafunction =()=>{
 
   if(name === "Dawn Amin Ahmed")
   setName("Odhim Dewan")
   else
   setName("Dawn Amin Ahmed")
  
    
 
  }

  const[name,setName]=useState("Dawn Amin Ahmed");
  const[age,setAge]=useState(37);
  const[address,setAddress]=useState({gata:"Vårbergsvägen-193",house:"Lgh-1302"});
  const[education,setEducation]=useState({masters:"social science",gratuatet:"Frontend developer"});
  const[expariance,setExpariance]=useState({first:"prim chiao ciao",secons:"scandic foresta"});
  const[programming,setProgramming]=useState(["c","c++","c#","python","javascript","java","php",])



  return (
    <>
    <h1>Name: {name}</h1>
    <h1 onClick={()=>setAge(100)}>Age: {age}</h1> 
    <h1>Address gata: {address.gata}</h1>
    <h1>Address house: {address.house}</h1><hr></hr>
    <h1>Education 1: {education.masters}</h1>
    <h1>Education 2: {education.gratuatet}</h1><hr></hr>
    <h1>expariance1 : {expariance.first}</h1> 
    <h1>expariance2 : {expariance.secons}</h1> 
    <h3>Programming language: {programming.map((programming)=>(<li>{programming}</li>))}</h3> <hr></hr>
    <button onClick={runafunction}>
      change me

    </button>


    </>
  )
}

export default App
