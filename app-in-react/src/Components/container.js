// list out Ingredients:
function CreateIngredients(props) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let Ingredients = []
    arr.map(order => {
        // if (temp[i] == "") { break; }
        Ingredients.push(<li>{props.temp} - {props.temp2}</li>);
    })
    return Ingredients;
}

// change from watch to embed
function ConvertWatchToEmbed(props) {
    let oldURL = props.url;
    let newURL = oldURL.replace("watch?v=", "embed/")
    return <iframe width="420" height="315" src={newURL} frameborder="0" allowfullscreen></iframe>
}


// create the main content about the food
export default function CreateContainer(props) {
    return (
        <div>
            <div className="main-content">
                <img src={props.img}
                    alt={props.foodname} />
                <div className="instruction">
                    <h1>{props.foodname}</h1>
                    <p className="to-top">{props.instruction}</p>
                </div>
            </div>
            <div className="main-content">
                <div className="foot-left">
                    <p>Category: {props.strCategory}</p>
                    <p>Area: {props.strArea}</p>
                    <h2>Ingredients: </h2>
                    <ul>
                        <CreateIngredients temp={props.temp} temp2={props.temp2} />
                    </ul>
                </div>
                <div className="foot-right">
                    <h1>Video Recipe</h1>
                    <ConvertWatchToEmbed url={props.url} />
                </div>
            </div>
        </div>
    );
}