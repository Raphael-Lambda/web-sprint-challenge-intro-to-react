import styled from 'styled-components'

/* 
=============================
styled components
=============================
*/

const PropValue = styled.p`
border: 2px solid white;
border-radius: 3px;
padding: 0 20px;
margin-right: 10px;
`
const Property = styled.p`
    margin-left: 20px;
    font-size: 1.3em;
`

/* 
=============================
component
=============================
*/
const Detail = ({ property, value, FlexDiv}) => {
    return(
        <FlexDiv key={property}>
            <Property>{property}</Property>
            <PropValue>{value}</PropValue>
        </FlexDiv>
    )

}

export default Detail