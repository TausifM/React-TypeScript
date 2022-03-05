
import './App.css';
import Greeting from './components/Greeting';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Status } from './components/Status';

function App() {
  return (
    <div className="App">
    <Greeting name='Tausif' messageCount={10} isLoggedIn={false}/>
    <Greeting name='Tausif' isLoggedIn={false}/>
    <Status status='error' />
    <Heading>Hi</Heading>
    <Oscar>
      <Heading>Hi Tausif </Heading>
    </Oscar>
    </div>
  );
}

export default App;
