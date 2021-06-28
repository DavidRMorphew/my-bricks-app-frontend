import LegoSetShowCard from './LegoSetShowCard'

const LegoSetShowDisplay = props => {
    const {set, changeOwnedSetStatus} = props

    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LegoSetShowCard set={set} changeOwnedSetStatus={changeOwnedSetStatus}/>
        </div>
    )
}

export default LegoSetShowDisplay