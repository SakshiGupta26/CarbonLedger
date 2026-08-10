import React from 'react'

const Button = ({button}) => {
  return (
    <div>
      <button
          className="w-full bg-[#10B981] text-[#003824] p-2 font-bold py-2.5 rounded-lg hover:bg-[#0ea774] transition-colors"
        >
          {button}
        </button>
    </div>
  )
}

export default Button
