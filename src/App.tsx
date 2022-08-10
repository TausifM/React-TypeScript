
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import Greeting from './components/Greeting';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { LoggedIn } from './components/state/LoggedIn';
import { Oscar } from './components/Oscar';
import { Status } from './components/Status';
import { User } from './components/state/User';
import { Counter } from './components/useReducer/Counter';
import Profile from './components/Profile';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
    <Todo />
    <Greeting name='Tausif' messageCount={10} isLoggedIn={true}/>
    {/* <Greeting name='Tausif' isLoggedIn={true}/> */}
    <Status status='error' />
    <Heading>Hi</Heading>
    <Oscar>
      <Heading>Hi Tausif </Heading>
    </Oscar>
    <Profile name='Tausif' email='gmail.com' mobile={1234567890} status='active' styles={{padding: "1rem", margin: "2rem", backgroundColor: 'black', color: 'white'}} >
      <Heading>Hi Tausif </Heading>
    </Profile>
    <Button handleClick={(event,id) => {
      console.log("Click", event, id)
    }} />
    <Input value='' handleChange={(event) => { console.log(event)}} />   
     <Container styles={{padding: "1rem", margin: "2rem", backgroundColor: 'black', color: 'white'}}/>
     <LoggedIn />
     <User />
     <Counter />
    </div>
  );
}

export default App;
