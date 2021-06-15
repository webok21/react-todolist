const TodoList = (props) => {
    console.log(props)
    return (
        <ul style={props.style}>
            <li>
                <img src={props.beforeImg} alt="" />{props.todo} <img src={props.afterImg} alt="" />
            </li>
        </ul>
    );
}

export default TodoList;