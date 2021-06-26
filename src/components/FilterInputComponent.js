import React, {Component} from "react"

class FilterInputComponent extends Component {
    
    state = {
        filterTerm: ''
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnClick = e => {
        e.preventDefault()
        this.setState({
            filterTerm: ''
        })
    }

    render(){
        return(
            <div>
                <h1 className="over-background">Filter Results Here!</h1>
                <form>
                    <input type="text" name="filterTerm" onChange={this.handleOnChange} value={this.state.filterTerm}/>
                    <button onClick={this.handleOnClick}>Clear Search</button>
                </form>
            </div>
        )
    }
}

export default FilterInputComponent