import React, {Component} from "react"

class FilterInputComponent extends Component {
    
    render(){
        return(
            <div>
                <div className="over-background">
                    <br></br>
                    <h1>Filter Results Here!</h1>
                    <br></br>
                    <h3>Type the set NAME, THEME, or NUMBER</h3>
                    <h3>to filter results:</h3>
                </div>
                <form>
                    <input type="text" name="filterTerm" onChange={this.props.handleOnChange} value={this.props.value}/>
                    <button onClick={this.props.handleOnClick}>Clear Search</button>
                </form>
                <br></br>
            </div>
        )
    }
}

export default FilterInputComponent