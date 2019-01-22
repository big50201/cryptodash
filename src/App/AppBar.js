import React from 'react'
import sytled from 'styled-components'

const Bar = sytled.div`
    display:grid;
    grid-template-columns:180px 1fr 100px;
`
export default ()=>(
<Bar>
    <div>Cryptodash</div>
    <div/>
    <div>Dashboard</div>
    <div>Settings</div>
</Bar>)