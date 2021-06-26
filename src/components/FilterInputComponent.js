import React, {Component} from "react"

class FilterInputComponent extends Component {
    
    render(){
        return(
            <div>
                <h1 className="over-background">Filter Results Here!</h1>
                <form>
                    <input type="text" name="filterTerm" onChange={this.props.handleOnChange} value={this.props.value}/>
                    <button onClick={this.props.handleOnClick}>Clear Search</button>
                </form>
            </div>
        )
    }
}

export default FilterInputComponent