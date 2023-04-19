import React from 'react'

export default function PhotographerPhoto(props) {
  return (
    <div>
      <form className='signup container'>
        <h4>This Component is used to uploaad photo of the photographer.</h4>
        <div>
      <button className='mr-3' onClick={() => {
        props?.setName((prev)=>{
          return {...prev, photographerphoto:false, thanks:true}
        })
      }}>
        Sign Up
      </button>

      <button onClick={() => {
        props?.setName((prev)=>{
          return {...prev, photographercitylanguage:true,photographerphoto:false}
        })
      }}>
        Prev
      </button>
      </div>
      </form>
    </div>
  )
}
