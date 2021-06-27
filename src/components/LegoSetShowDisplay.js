import Card from 'react-bootstrap/Card'

const LegoSetShowDisplay = props => {
    const {set} = props
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card 
                border="dark" 
                className="my-4"
                style={{ width: '80%' }}
            >
                {set.name}
            </Card>
        </div>
    )
}

export default LegoSetShowDisplay