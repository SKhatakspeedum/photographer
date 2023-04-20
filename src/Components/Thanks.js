import React from 'react'

export default function Thanks(props) {

  return (
    <div>
      <form className='signup container'>
      <h2>Thanks for Registeration!!</h2>
     
      <div>
      <button onClick={() => {
        props?.setName((prev)=>{
          return {...prev, thanks:false, login:true}
        })
      }}>
       Login Now...
      </button>
      </div>
      </form>
    </div>
  )
}
