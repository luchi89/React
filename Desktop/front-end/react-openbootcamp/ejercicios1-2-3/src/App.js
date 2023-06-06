import  "./App.css";
import logo from "./logo.svg";
import ComponenteA from "./components/componenteA";

// class App extends React.ComponenteA {
//   constructor ()
// }

//extends es la palabra que hereda del componente de react//
function App() {
  // creating an object called contactprueba
  
  const contactprueba = {
    
    nombre: "luciano",
    apellido: "cozzi",
    email: "lucianof.cozzi@gmail.com",
    conectado: "false",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <ComponenteA contact={contactprueba}/>

      </header>
    </div>
  );
}

export default App;

