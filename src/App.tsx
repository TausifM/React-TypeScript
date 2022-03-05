
import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
    <Greeting name='Tausif' messageCount={10} isLoggedIn={false}/>
    </div>
  );
}

export default App;
