import React, { forwardRef, useEffect } from 'react'
import styled from 'styled-components'
import { useStateUpdate } from '../CustomHooks'

const HeaderPlaceholder = styled.h4`
  width: 13rem;
  padding: 0.8rem 5rem;
  background: #ebf5fffa;
  border-radius: 3px;
`
type TextPlaceholderPropType = {
  width: string
}
const TextPlaceholder = styled.p`
  width: ${(props: TextPlaceholderPropType) => props.width};
  padding: 0.8rem 5rem;
  background: #ebf5fffa;
  border-radius: 3px;
`

type SkeletonPropType = {
  time: null
}

type CompRef = string

const Skeleton = forwardRef<CompRef, SkeletonPropType>((props, ref) => {
  const [currState, updateState] = useStateUpdate(
    props.time || 'no time available',
  )
  console.log('props.time', props.time)
  useEffect(() => {
    updateState()
  }, [])
  return (
    <>
      <HeaderPlaceholder />
      <hr />
      {/* <br /> */}
      <TextPlaceholder width="37%" />
      <TextPlaceholder width="82%" />
      <TextPlaceholder width="99%" />
      <TextPlaceholder width="75%" />
      <div>{currState}</div>
    </>
  )
})

export default Skeleton
