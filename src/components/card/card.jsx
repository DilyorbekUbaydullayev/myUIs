import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import stl from './card.module.css';
const card = ({img}) => {
  return (
    <div>
       <div className='card border-light card1' style={{boxShadow:'0px 5px 11px -1px rgba(71, 73, 75, 0.16)'}}>
        <img src={img} alt="" style={{maxWidth:'100%',height:'auto'}} />
        <div className="p-3">
        <h5>Lorem ipsum dolor</h5>
        <p className="text-primary fs-6">Category Two</p>
        <p className={stl.title}>
          Mauris sit amet quam congue, pulvinar urna et, congue diam.
          Suspendisse eu lorem massa. Integer sit amet posuere.
        </p>
        </div>
        <div className={stl.cart}>
          <p className={stl.p}>ADD TO FAVORITES</p>
          <p className={stl.p1}>CONTINUE READING</p>
        </div>
      </div>
    </div>
  )
}

export default card



