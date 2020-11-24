import CreateContainer from './container'
import { useState } from 'react'
import '../Asset/Css/header.css'
const meal_api = "https://www.themealdb.com/api/json/v1/1/random.php";


export default function CreateHeader() {
    let [container, setContainer] = useState(<CreateContainer
        img=""
        foodname=""
        instruction=""
        strCategory=""
        strArea=""
        temp=""
        url=""
    />)

    let handleClick = () => {
        fetch(meal_api)
            .then(res => res.json())
            .then(meal => {
                console.log(meal);
                setContainer(<CreateContainer
                    img={meal.meals[0].strMealThumb}
                    foodname={meal.meals[0].strMeal}
                    instruction={meal.meals[0].strInstructions}
                    strCategory={meal.meals[0].strCategory}
                    strArea={meal.meals[0].strArea}
                    temp={meal.meals[0].strIngredient1}
                    temp2={meal.meals[0].strMeasure1}
                    url={meal.meals[0].strYoutube}
                />);
            });
    }
    return (
        <div>
            <div className="header">
                <h1>Feeling hungry?</h1>
                <h3 className="to-top">Get a random meal by clicking below</h3>
                <button onClick={handleClick} className="to-top">GET MEAL</button>
            </div>
            <div>
                {container}
            </div>
        </div>

    )
}