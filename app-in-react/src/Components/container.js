export default function CreateContainer(props) {
    return (
        <div className="container">
            <h1>{props.name} {props.country}</h1>
            <h1>{props.temp}</h1>
            <img src={props.img} alt={props.weather} />
            <h1>{props.weather}</h1>
        </div>
    )
}