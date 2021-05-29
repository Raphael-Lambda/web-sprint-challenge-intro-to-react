import React from 'react'
import styled from 'styled-components'

/* 
=============================
styled Components
=============================
*/
const FlexDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

const FlexDivCol = styled.div`
    display: flex;
    flex-flow: column nowrap;
    border: 2px solid grey;
    border-radius: 3px;
    background: lightgrey;
    padding: 10px 50px 0 50px;
    margin: 10px 100px 0 100px;
    font-variant: small-caps;
    letter-spacing: 3px;
    font-family: ${props => props.theme.font.family.codeSnippetStyle};
    transition: all .15s ease-out;
    :hover {
        transform: scale(1.05);
    }
`
const Arrow = styled.p`
    transform: rotate(-90deg);
    font-size: 3em;
    color: black;
    opacity: .3;
    &:hover{
        opacity: 1;
    }
`

const Birth = styled.p`
    border: 2px solid white;
    border-radius: 3px;
    padding: 10px 20px;

`

/* 
=============================
component
=============================
*/
const Character = ({char, details, displayDetails}) => {
    const { name, birth_year } = char
    return(
        <FlexDivCol>
            <FlexDiv>
                <h2>{name}</h2>
                <Arrow onClick={() => {displayDetails()}}>&#60;</Arrow>
            </FlexDiv>
            {
                details?
                Object.keys(char).map((key) => {
                    console.log(key)
                    if(key !== 'name'){
                        return(<FlexDiv>
                            <h2>{key}</h2>
                            <Birth>{char[key]}</Birth>
                        </FlexDiv>)
                    }
                }):null
            }

                
                {/* here goes all the details to display onclick */}
        </FlexDivCol>

    )
}


export default Character