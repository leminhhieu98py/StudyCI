import React from 'react'
import {DefaultDisplay, searchDisplay} from './display'
import '../Assets/css/searchBar.css'

function CreateSearchBar(props) {
    return (
        <input
            type="text"
            name="" id="search-bar"
            placeholder="Enter key words"
            onChange={props.handleChange}
        />
    )
}

class SearchValue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
        search : e.target.value
        })
    }
    render() {
        let result = false;
        if(this.state.search != ""){
            result =true;
        }
        return (
            <React.Fragment>
                <CreateSearchBar handleChange={this.handleChange} />
                {result ? searchDisplay(this.state.search) : DefaultDisplay()}
            </React.Fragment>
        )
    }
}

export default SearchValue;