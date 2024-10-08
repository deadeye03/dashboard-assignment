import React from 'react'

function CustomeButton({title,className}:{title:string,className:string}) {
  return (
    <button className={`${className}`}>
        {title}
    </button>
  )
}

export default CustomeButton
