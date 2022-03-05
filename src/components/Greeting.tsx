import { Person } from "./Person"
import { PersonList } from "./PersonList"

type GreetProps ={
    name: string,
    messageCount: number,
    isLoggedIn : boolean
}

const Greeting = (props: GreetProps) => {
    const personName = {
        first: 'Tausif',
        last: 'Sheikh'
    }
    const nameList = [
        {first: 'Tausif', last: 'Sheikh'},
        {first: 'Rehan', last: 'Sheikh'},
        {first: 'Kamran', last: 'Sheikh'}
    ]
  return (
    <div>
       {props.isLoggedIn ?  <h2>Welcome {props.name} messages {props.messageCount}</h2> : <h2>Welcome Guest</h2>}
       <Person personName={personName} />
       <PersonList names={nameList} />
    </div>
  )
}

export default Greeting