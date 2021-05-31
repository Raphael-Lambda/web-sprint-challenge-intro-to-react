import React from 'react'
import Detail from './Detail'
import styled from 'styled-components'


/* 
=============================
styled Components
=============================
*/
const FlexDiv = styled.div`
    min-height: 4.5rem;
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
    font-family: ${props => props.theme.codeSnippetStyle};
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

/* 
=============================
component
=============================
*/
const Character = ({char, details, displayDetails, main}) => {
    return(
        <FlexDivCol>
            <FlexDiv>
                <h2>{main}</h2>
                <Arrow onClick={() => {displayDetails(main)}}>&#60;</Arrow>
            </FlexDiv>
            {
                Object.keys(char).map((item) => {
                    if(item !== 'name' && item !== 'title' && (main) === details){
                        return(
                        <Detail key={item} property={item} value={char[item]} FlexDiv={FlexDiv}/>
                        )
                    }
                })
            }
            </FlexDivCol>
    )
}

export default Character