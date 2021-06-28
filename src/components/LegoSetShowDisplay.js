import LegoSetShowCard from './LegoSetShowCard'
import PartCards from './PartCards'

const LegoSetShowDisplay = props => {
    const {set, changeOwnedSetStatus} = props

    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LegoSetShowCard set={set} changeOwnedSetStatus={changeOwnedSetStatus}/>
            <PartCards set={set}/>
        </div>
    )
}

export default LegoSetShowDisplay