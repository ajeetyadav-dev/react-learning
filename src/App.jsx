import { useState } from "react";
function App(){
 const [loading]= useState(true);
 return(
  <>
  {
    loading ? <h1>Loading...</h1>:
    <h1>Data Loaded✔️</h1>
  }
  </>
 )
}
export default App;