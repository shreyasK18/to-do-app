import React from 'react'

export default function About() {
    return (
       <React.Fragment >
          <div style={aboutStyle}>
          <h1>
               About
           </h1>
           <p>
               This is ToDo App v1.0.0
           </p>
          </div>
       </React.Fragment>
    )
}

const aboutStyle={
    // backgroundColor:"#448018",
    color:'#fff',
    textAlign:'left',
    padding:'10px',
    color:'#fff',
    margin:'10px'
}