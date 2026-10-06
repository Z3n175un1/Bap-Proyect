import { useState } from 'react'

export function AnimationsDemo() {
  const [animate, setAnimate] = useState('')

  const handleClick = (name: string) => {
    setAnimate(name)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Tailwind Animations Demo</h2>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => handleClick('fade-in')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Fade In
        </button>
        <button
          onClick={() => handleClick('fade-out')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Fade Out
        </button>
        <button
          onClick={() => handleClick('slide-in-top')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Slide In Top
        </button>
        <button
          onClick={() => handleClick('slide-in-bottom')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Slide In Bottom
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => handleClick('slide-in-left')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Slide In Left
        </button>
        <button
          onClick={() => handleClick('slide-in-right')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Slide In Right
        </button>
        <button
          onClick={() => handleClick('zoom-in')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Zoom In
        </button>
        <button
          onClick={() => handleClick('zoom-out')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Zoom Out
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => handleClick('bouncing')}
          className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Bouncing
        </button>
        <button
          onClick={() => handleClick('swing')}
          className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Swing
        </button>
        <button
          onClick={() => handleClick('wobble')}
          className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Wobble
        </button>
        <button
          onClick={() => handleClick('pulse')}
          className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Pulse
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => handleClick('rotate-90')}
          className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Rotate 90
        </button>
        <button
          onClick={() => handleClick('rotate-360')}
          className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Rotate 360
        </button>
        <button
          onClick={() => handleClick('flip-horizontal')}
          className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Flip Horizontal
        </button>
        <button
          onClick={() => handleClick('flip-vertical')}
          className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colers"
        >
          Flip Vertical
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => handleClick('tada')}
          className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Tada
        </button>
        <button
          onClick={() => handleClick('jump')}
          className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Jump
        </button>
        <button
          onClick={() => handleClick('shake')}
          className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Shake
        </button>
      </div>

      {animate && (
        <div className="animate-[{animate}] w-20 h-20 rounded bg-blue-500 flex items-center justify-center text-white">
          {animate}
        </div>
      )}
    </div>
  )
}