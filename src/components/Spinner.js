import React, { Component } from 'react'
import loading from './spinner.gif'
const Spinner= ()=> {
    return (
      <div className='container text-center '>
        <img src={loading} style={{ height : '2rem'}} alt="" />
      </div>
    )
}
export default Spinner