import React from 'react'

export default function Newsitem(props) {
  
  return (
    
    <div className='container my-3 md-4'>
    <div className="card" style={{ width: "18rem" }}>
      {/* <div className="container1" style={{left:"90px"}}> */}
    <span className="position-absolute top-0  badge rounded-pill bg-danger">
    {props.srcname}
  </span>
  {/* </div> */}
        <img src={props.Imageurl==null?"https://az-pe.com/wp-content/uploads/2018/05/kemptons-blank-profile-picture.jpg":props.Imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <p className="card-text"><small className="text-muted">By {props.author==null?"Unknown":props.author} on {new Date(props.publishedAt).toLocaleDateString()}</small></p>
                <a href={props.url} target="_blank"  rel="noreferrer"  className="btn btn-sm  btn-dark sm">Read More</a>
            </div>
            </div>
      </div>
  )
}

