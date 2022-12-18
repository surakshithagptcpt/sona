//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Form Editing</h1>
       <form id="form">
            Name:-
            <input type="text"/><br/><br/><br/>
            Adress:-
            <textarea></textarea><br/><br/><br/>
            Gender:-
            <input type='radio' name='r1'/>Male
            <input type='radio' name='r1'/>Female
            <br/><br/>
            Language select:-
            <div>
            <input type='checkbox'/>Kannada
            <br/>
            <input type='checkbox'/>English
            <br/>
            <input type='checkbox'/>Hindi
            <br/><br/>
            </div>
            Subject Select:-
            <select>
              <option selected disabled >select</option>
              <option value='OperatingSystem'>Operating System</option>
              <option value='Java'>Java</option>
              <option value='DataStructurInPython'>DataStructurInPython</option>
              <option value='SoftwareEngg'>SoftwareEngg</option>
            </select><br/><br/>
            <input type='submit'/> 

            <input type='reset'/>
            

       </form>
    </div>
  );
}

export default App;
