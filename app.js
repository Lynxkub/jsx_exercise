
const App = () => {
    return(
        <div>
            <FirstComponent />
            <NamedComponent name='Jake' />
            <Tweet  username = 'lynxkub' user='jake' date={new Date().toDateString()} message='my first tweet'/>
            <Tweet username = 'kaydebug' user='kayde' date={new Date().toDateString()} message= 'my second tweet' />
            <Tweet username = 'dudebot' user = 'lucas' date={new Date().toDateString()} message = 'my third tweet' />
            <Person name = 'Jacob' age = {30}  hobbies = {['hockey', 'coding' , 'cooking']}/>
            <Person name = 'Alexnadria' age = {6} hobbies = {['reading' , 'playing with barbies' , 'making squirrel sounds']}/>
            <Person name = 'Lucas' age = {5} hobbies = {['hotwheels' , 'watching movies' , 'playing at parks']}/>
        </div>
    )
}

ReactDOM.render(<App /> , document.getElementById('root'));