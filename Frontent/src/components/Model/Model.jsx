import React from 'react'
import Button from '../ui/Button/Button'

const Model = ({element,message}) => {
  return (
    <div>
      <h1>
        Confirm {element}
      </h1>
      <h2>{message}</h2>
      <div>
        <Button 
        className="bg-red-700"
        button={"Cancel"} />
        <Button button={"Confirm"} />
      </div>
    </div>
  )
}

export default Model
