import { useState } from "react";
function App(){
 const [fruits,setFruits] = useState(["Apple","Mango"]);
 return(
  <>

   <ul>
    {fruits.map((fruit,i)=>(
        <li key={i}>{fruit}</li>
      
    ))}
   </ul>
  </>
   
 
  

 );
}
export default App;