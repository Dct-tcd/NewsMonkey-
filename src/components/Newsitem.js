import React from 'react'

export default function Newsitem(props) {
  
  return (
    
    <div className='container my-3 md-4'>
    <div className="card" style={{ width: "18rem" }}>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {props.srcname}
  </span>
        <img src={props.Imageurl==null?"https://az-pe.com/wp-content/uploads/2018/05/kemptons-blank-profile-picture.jpg":props.Imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <p className="card-text"><small className="text-muted">By {props.author} on {new Date(props.publishedAt).toLocaleDateString()}</small></p>
                <a href={props.url} target="_blank" className="btn btn-sm  btn-dark sm">Read More</a>
            </div>
            </div>
      </div>
  )
}

