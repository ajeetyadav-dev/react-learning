import { useState , useEffect } from "react";
function App(){
 useEffect(()=>{
  console.log("Mounted");
  return ()=>{
    console.log("Component Unmounted");
    };
}, []);
return(
  <>
  <h1>Cleanup Function</h1>
  </>
);
}
export default App;