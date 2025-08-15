import React from 'react'

const Alert = (props) => {
  return (
    
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    {props.alert.message}.

  {/* <button type="button" className='btn-close' data-bs-dismiss="alert"></button> */}
</div> 
    
  )
}

export default Alert
