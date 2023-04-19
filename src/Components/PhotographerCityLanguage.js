import React from 'react'

export default function PhotographerCityLanguage(props) {
  return (
    <div>
        <form className='signup container'>
      <h4>This component is geting photographer city and languages.</h4>
      <div>
      <button className='mr-3' onClick={() => {
        props?.setName((prev)=>{
          return {...prev, photographerphoto:true, photographercitylanguage:false}
        })
      }}>
        Next 
      </button>

      <button onClick={() => {
        props?.setName((prev)=>{
          return {...prev, photographercitylanguage:false,photographers:true}
        })
      }}>
        Prev
      </button>
      </div>
      </form>
    </div>
  )
}
