import React from 'react'
import { MyContext } from './Context'

const Child2 = () => {
  return (
    <div style={{border:"1px solid yellow"}}>
        <h2>Children 2 </h2>
        
        <MyContext.Consumer>
            {ContextData=>(                 
                <>
                child 2 is not the child component of Context still data is coming from Context in the child2 component
                <h4>Name :{ContextData.state.name} </h4>
                <h4>Value :{ContextData.state.value} </h4>
                <button onClick={()=> ContextData.handleClick(2)}>Increment</button>
                </>
            )}

        </MyContext.Consumer>

    </div>
  )
}

export default Child2