import React from "react"


function Button({label, click}) {
  return (
    <button onClick={() => click()}>{label}</button>
  )
}

export const MemoizedButton = React.memo(Button)