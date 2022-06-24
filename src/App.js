import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
function App() {
  return (
    ///JSX Fragment
  <>   
      <NavBar title="Menu" dropdown="About website"/>
      <div className="container">
       
        <TextForm heading="Enter the text to moniter changes"/> 
      </div>
       
  </>
  );
  
}

export default App;
