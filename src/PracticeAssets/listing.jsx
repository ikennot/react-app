function ListItem(props){
    return <li>{props.task}</li>;
};


function List (props){
    return(
        <ul>
            {props.task.map((tasks)=>(
                <ListItem key={tasks} task ={tasks + ' 📋'}/>
            ))}
        </ul>
    )
}


export default function App(){
    const task =['Eating','sleeping','coding'];
    
    return(
    <div>
        <h1>My tasks</h1>
    <List task = {task}/>
    </div>
    )
}