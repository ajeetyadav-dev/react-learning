import User from "./User";
function App(){
  const user = {
  name:"Ajeet",

 };
 const {name} = user;
  return(
 <>
 <User user={user}

 />
 </>
  )
}
export default App;