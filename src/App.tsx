
import './App.css';
import { Button } from './components/Button';
import Greeting from './components/Greeting';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
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
    <Button handleClick={(event,id) => {
      console.log("Click", event, id)
    }} />
    <Input value='' handleChange={(event) => console.log(event, "Input")}/>
    </div>
  );
}

export default App;
