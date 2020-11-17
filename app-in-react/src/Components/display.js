import emoji from '../emojiList'
import '../Assets/css/ResultList.css'

function createIcon(props){
    return <div className="display-emoji" key={props.title}>
        {props.symbol} {props.title}
        <hr></hr>
    </div>
}

export function DefaultDisplay(){
    let defaultList = [];
    for (let i = 0; i < 20; i++) {
        defaultList.push(createIcon(emoji[i]))
    }
    return defaultList;
}

function findSearchValue(props){
    let searchList = []
    emoji.map(q=>{
        if(q.keywords.toLowerCase().includes(props)){
            searchList.push(createIcon(q))
        }
    })
    return searchList;
}

export function searchDisplay(props){
    let searchValue = props.toString();
    if(findSearchValue(searchValue)!=[]){
        return findSearchValue(searchValue);
    }else{
        return null;
    }
}