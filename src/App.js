import logo from './logo.svg';
import './App.css';
import LearnAos from './Components/LearnAos';
import LearnClear from './Components/LearnClear';
import LearnCode from './Components/LearnCode';
import LearnNew from './Components/LearnNew';

function App() {
  return (
    <div className="App">
   <LearnAos/>
      <LearnClear/>
      <LearnCode/>
      <LearnNew/>
    </div>
  );
}

export default App;
