import React, {memo} from 'react'

function Child({count}) {
  console.log("Hi Shivam")
  return (
    <div>
      Hi Shivam + {count}
    </div>
  )
}

export default memo(Child)
