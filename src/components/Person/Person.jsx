import React from 'react'
import './Person.css'
import vape from "./vap1.png"

function Person(props) {
  return (
    <div className="box">
      <img src={vape} alt="vape" className='box_img' />
       <div className="wrapp">
       <h3 className='mark_box'> Бренд: <span>  Vandy Vape  </span></h3>
      <h3 className='name_box'> Название: <span>  Vandy Vape  Pod Kit  </span></h3>
       
      <p className='description_box'>Эргономичное устройство
       с защитой от влаги, пыли и ударов по стандарту IP67.
       </p>
       <p className="cost">3200 cом</p>
       <button className='buy_box'>Купить</button>
       </div>



          
    </div>
  )
}

export default Person
 