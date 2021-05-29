import React from 'react'
import styled from 'styled-components'

/* 
=============================
styled Components
=============================
*/
const FlexDiv = styled.div`
    max-height: 4.5rem;
    width: 85%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-top: 2px dashed white;
    &:hover{
        background: lightblue;
    }
    &:first-of-type{
        border-top: none;
        width: 100%;
        &:hover{
            background: lightgrey;
        }
    }
    
`

const FlexDivCol = styled.div`
    display: flex;
    flex-flow: column nowrap;
    border: 2px solid grey;
    border-radius: 3px;
    background: lightgrey;
    padding: 0px 50px 0 50px;
    margin: 15px 100px 0 100px;
    font-variant: small-caps;
    letter-spacing: 3px;
    font-family: ${props => props.theme.font.family.codeSnippetStyle};
    transition: all .15s ease-out;
    :hover {
        transform: scale(1.02);
    }
`
const Arrow = styled.p`
    height: 1.5em;
    width: 1.5em;
    border: 2px solid black;
    border-radius: .75em;
    transform: rotate(-90deg);
    font-size: 2.5em;
    color: black;
    opacity: .3;
    &:hover{
        opacity: 1;
    }
`

const Birth = styled.p`
    border: 2px solid white;
    border-radius: 3px;
    padding: 0 20px;
    margin-right: 10px;

`
const Property = styled.p`
    font-size: 1.3em;
`

/* 
=============================
component
=============================
*/
const Character = ({char, details, displayDetails}) => {
    const { name } = char
    return(
        <FlexDivCol>
            <FlexDiv>
                <h2>{name}</h2>
                <Arrow onClick={() => {displayDetails(name)}}>&#60;</Arrow>
            </FlexDiv>
            {
                Object.keys(char).map((item) => {
                    if(item !== 'name' && name === details){
                        return(<FlexDiv key={item}>
                            <Property>{item}</Property>
                            <Birth>{char[item]}</Birth>
                        </FlexDiv>)
                    }
                })
            }

                
                {/* here goes all the details to display onclick */}
        </FlexDivCol>

    )
}


export default Character