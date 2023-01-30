import React, { Component } from 'react'

const Newsitem = (props)=> {
    let { title , description , imgUrl , newsUrl, author, date} = props
    return (
      <div>
        <div className="card my-2 mx-2" style={{ margin : 'auto'}}>
  <img src={imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target='_blank' className="btn btn-primary">Read more</a>
  </div>
</div>
        </div>
    )
}
export default Newsitem