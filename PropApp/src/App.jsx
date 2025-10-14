function Student(props){
  return <h2>Hello,{props.name}!</h2>;
}
function App(){
  return(
    <div>
      <Student name = "Aditya"/>
      <Student name = "Priyanshu"/>
    </div>
  );
}
export default App;