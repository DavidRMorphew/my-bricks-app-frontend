const FilterInputComponent = props => {
    
    const {handleOnChange, handleOnClick, value} = props
    
    return(
        <div>
            <div className="over-background">
                <br></br>
                <h1>Filter Results Here!</h1>
                <br></br>
                <h3>Type the set NAME, THEME, or NUMBER</h3>
                <h3>to filter results:</h3>
            </div>
                <input type="text" name="filterTerm" onChange={ handleOnChange } value={ value }/>
                <button onClick={ handleOnClick }>Clear Search</button>
            <br></br>
        </div>
    )
}

export default FilterInputComponent