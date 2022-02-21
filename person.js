const Person = (props) => {
    return (
        <div>
        <p>Learn some information about this person : </p>
        <p> Name is {props.name.length > 8 ? props.name.slice(0, 6) : props.name} </p> 
        <p>Age is {props.age}</p>
        {props.age >=18 ? <h3>Please Go Vote!</h3> : <h3>You must be 18 to vote</h3>}
        <ul>{props.hobbies.map(h => <li>{h}</li>)}</ul>
        </div>
    )
}