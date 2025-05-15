import React from 'react'

export default function Button({children, type, handler}) {
    const style = 
            type === "denger"
                ? "bg-red-500 text-white px-3 py-2 rounded shadow"
                : "bg-blue-500 text-white px-3 py-2 rounded shadow"
  return (
    <div>
        <button className={style} onClick={handler}>
            {children}
        </button>
    </div>
  )
}
