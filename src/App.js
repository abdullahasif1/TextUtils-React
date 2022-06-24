import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
//import TextForm from './components/TextForm';
function App() {
  return (
    ///JSX Fragment
  <>   
      <NavBar title="Menu" dropdown="About website"/>
      <div className="container my-3">
       
      {/*  <TextForm heading="Enter the text to moniter changes"/> */}
      <About/>
      </div>
       
  </>
  );
  
}

export default App;
