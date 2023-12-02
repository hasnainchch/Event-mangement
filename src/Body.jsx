import React from 'react'



const Body = (props) => {
  const {resName,stars}=props;
  return (
    <>
    <div className="res-card">
            <img  className="res-logo" alt="res-logo" src="https://cdn0.weddingwire.com/vendor/309779/3_2/320/jpg/7d5a2480_51_977903-164082055649645.webp"/>
           <h3>{props.resName}</h3>
           
           <h4>{props.stars}</h4>
           
        </div>

<div className="res-card1">
<img  className="res-logo1" alt="res-logo1" src="https://cdn0.weddingwire.com/vendor/309779/3_2/320/jpg/7d5a2480_51_977903-164082055649645.webp"/>
<h3>{props.resName}</h3>

<h4>{props.stars}</h4>

</div>
</>
  )
}

export default Body;