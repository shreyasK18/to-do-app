import React from 'react'

import { Link } from 'react-router-dom'
export default function header() {
    return (
        <header style={headerStyle}>
            <h1 ><i class="fa fa-clipboard-check-alt"></i>{' '}To Do</h1>
            <Link to="/" style={linkStyle}>Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}
const headerStyle={
    // backgroundColor:"#448018",
    color:'#fff',
    textAlign:'center',
    padding:'10px',
    color:'#fff',
    margin:'10px'
}
const linkStyle={
    color:"#fff",
    textDecoration:'none'

}