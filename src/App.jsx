import { useState } from "react";
function App(){
    const [formData, setFormData] = 
    useState({
      name: "",
      email:"",
      password:"",
    });
   const handleChange = (e) => {const {name,value} = e.target;
  setFormData({
    ...formData,[name]:value
  });
  };
    return(
        <>
       
       <input type="text" placeholder="Enter Your Name" name="name" value={formData.name} 
       onChange={handleChange}/><br></br><br></br>

       <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange}/><br></br><br></br>

       <input type="password" name="password" placeholder="Enter Your Password" value={formData.password} onChange={handleChange}/><hr>
       </hr>

<h2>Name: {formData.name}</h2>
<h2>Email: {formData.email}</h2>
<h2>Password: {formData.password}</h2>

      
</>
    )
}
export default App;