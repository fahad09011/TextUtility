import React from 'react'

const Alert = (props) => {
  return (
    <div className='mt-1 px-1' style={{height:"50px"}}>
      { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    {props.alert.message}.

</div> 
   }
    </div>
    
  )
}

export default Alert
