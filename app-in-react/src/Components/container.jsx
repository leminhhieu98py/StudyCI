export default function CreateContainer(props){
    return(
        <div className="container">
            <h2>{props.title}</h2>
            <img src={props.img} alt={props.title}/>
    <h2>Author: {props.author}</h2>
    <h2>Publisher: {props.publisher}</h2>
        </div>
    )
}