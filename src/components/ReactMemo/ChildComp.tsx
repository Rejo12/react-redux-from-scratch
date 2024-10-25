/* eslint-disable indent */
// eslint-disable-next-line no-unused-vars
import React, { memo, useEffect, forwardRef, useImperativeHandle } from 'react'

type ChildCompProps = {
  value: number
  incChildCount: () => void
  key: number
  id: number
}

type Ref = {
  refValue: number
  refMethod: () => string
}

const ChildComp = forwardRef<Ref, ChildCompProps>((props, ref) => {
  useEffect(() => {
    console.log('useEffect', props)
  })
  useImperativeHandle(ref, () => {
    console.log('imperativeHandle', props)
    return {
      refValue: props.id,
      refMethod: () => {
        return `Current ref is ${ref} and id is ${props.id}`
      },
    }
  })
  var { value: childCount, incChildCount } = props
  console.log(props, ref)
  return (
    <>
      <hr style={{ backgroundColor: '#fff' }} />
      Child Component : {childCount}
      <div>
        <button onClick={() => incChildCount()}>Child button</button>
      </div>
      <hr style={{ backgroundColor: '#fff' }} />
    </>
  )
})

export default memo(ChildComp)
