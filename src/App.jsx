import { useState } from "react";
function App(){
    const [count,setCount] = useState(0);
    return(
        <>     
           <h1>Counter : {count}</h1>
        <button 
        onClick={()=>
                setCount(count + 1)}
            
        >+</button>
        <button onClick={() =>{
            if (count > 0){
                setCount(count - 1);
            }
        }}>-</button>
        <button onClick={() =>setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 5)}>+5</button>
        <hr></hr>
        {count >=10 ? (
            <h2 style={{ color : "green"}}>🎉Great Job!</h2>):(
                <h2 style={{ color : "orange"}}>Keep Clicking.....</h2>
            
        )}
           </>
       

    );
}
export default App;