import React from 'react'

const Count = (props) => {

    const { count , text } = props
    console.log(`RENDERRING ${text}`)

  return (
    <div>
        {text} : { count}
    </div>
  )
}

export default React.memo(Count)
// export default Count