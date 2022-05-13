import { GirdPic } from 'components/hoverpic/index'
import { Button } from 'components'
import { useState } from 'react'

export const GridMain = () => {
  const [hidden, setHidden] = useState(true)

  const Show = () => {
    if (hidden) {
      setHidden(false)
    } else {
      setHidden(true)
    }
  }

  return (
    <div className="flex flex-col mx-auto max-w-[1592px]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-y-9 relative">
        <GirdPic />
        <GirdPic />
        <GirdPic />
        <GirdPic />
        <GirdPic />
        <GirdPic />
        <GirdPic />
        <GirdPic />
      </div>
      <div
        className={`${hidden ? 'hidden' : 'visible'} mt-9 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-y-9 relative `}
      >
        <GirdPic />
        <GirdPic />
        <GirdPic />
        <GirdPic />
        <GirdPic />
        <GirdPic />
        <GirdPic />
      </div>
      <div className="flex justify-center mt-[64px]">
        <Button variant="fill" onClick={() => Show()}>
          del
        </Button>
      </div>
    </div>
  )
}

export default GridMain
