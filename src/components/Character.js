import React from 'react'
import styled from 'styled-components'

const FlexDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
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

const Birth = styled.p`
    border: 2px solid white;
    border-radius: 3px;
    padding: 10px 20px;

`

const Character = ({char}) => {
    const { name, birth_year } = char
    return(
        <FlexDiv>
            <h2>{name}</h2>
            <Birth>{birth_year}</Birth>
        </FlexDiv>
    )
}


export default Character