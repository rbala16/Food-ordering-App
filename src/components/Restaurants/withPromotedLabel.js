import React from 'react'

const withPromotedLabel = (WrappedComponent) => {
  return ({promoted,...props}) => (
    <div>
        {promoted && <label>Promoted</label>}
        <WrappedComponent {...props}/>
    </div>
    )
  
}

export default withPromotedLabel
