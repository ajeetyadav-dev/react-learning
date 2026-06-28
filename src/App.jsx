import { useState } from "react";
function App(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const submit = (e) => {
        e.preventDefault();
        alert('Your Form Submit')
    }
    return(
        <>
        <form onSubmit={submit}>
       <input type="text" placeholder="Enter Your Name" value={name} 
       onChange={(e) =>
         setName(e.target.value)}/><br></br>

         <input type="email" placeholder="Enter Your Email" value={email} 
       onChange={(e) =>
         setEmail(e.target.value)}/><br></br>

         <input type="password" placeholder="Enter Your Password" value={password} 
       onChange={(e) =>
         setPassword(e.target.value)}/><br></br>
         <button type="submit">Submit</button>
</form>
       <h2>Hello {name}</h2>
       <h2> {email}</h2>
       <h2> {password}</h2>
</>
    )
}
export default App;