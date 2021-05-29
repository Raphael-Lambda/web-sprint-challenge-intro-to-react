import React from 'react'
import styled from 'styled-components'

const HeaderH1 = styled.h1`
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
`
const SearchBar = styled.input`
    height: 2rem;
    font-size: 1.5rem;
    font-family: ${props => props.theme.font.family.codeSnippetStyle};
    margin: 0;
    border: 2px solid grey;
    border-radius: 3px;
    &:focus{
        outline: none;
        border: 2px solid orange;
    }
`

const Header = ({ searchCharacter }) => {

    return(
        <>
            <HeaderH1>Characters</HeaderH1>
            <SearchBar placeholder="Character name" onInput={(evt) => {searchCharacter(evt)}}></SearchBar>
        </>
    )
}

export default Header