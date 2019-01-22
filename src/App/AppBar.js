import React from 'react'
import styled,{css} from 'styled-components'

const Logo = styled.div`
 font-size:1.5em;
`
const Bar = styled.div`
    display:grid;
    margin-bottom:40px;
    grid-template-columns:180px auto 100px 100px;
`

const ControlButtomElem = styled.div`
    cursor:pointer;
    ${props=>props.active && css`
        text-shadow:0px 0px 60px #03ff03;
    `}
`
function ControlButton({name,active}){
    return (
    <ControlButtomElem active={active}>
        {toUpperCase(name)}
    </ControlButtomElem>)
}

function toUpperCase(lower){
    return lower.chatAt(0).toUpperCase() + lower.subStr(1);
}

export default ()=>(
<Bar>
    <Logo>Cryptodash</Logo>
    <div/>
    <ControlButton active name="dashboard"/>
    <ControlButton name="settings"/>
</Bar>)