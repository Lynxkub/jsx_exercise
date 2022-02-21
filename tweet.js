const Tweet = ({username , user , date , message}) => {
    return (
        <div>
            <ul>
                <li>{username}</li>
                <li>{user}</li>
                <li>{date}</li>
                <li>{message}</li>
            </ul>
        </div>
    )
}