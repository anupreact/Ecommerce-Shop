import React from 'react'

const Title = () => {
    console.log("RENDERRING TITLE")
  return (
    <h1>useCallback() hook</h1>
  )
}

export default React.memo(Title)
// export default Title
