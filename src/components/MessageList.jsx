import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import Message from './Message'
import { messages } from '../data/messages'

export default function MessageList({ setCurrentMedia }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex(prev => Math.min(prev + 1, messages.length - 1)),
    onSwipedRight: () => setCurrentIndex(prev => Math.max(prev - 1, 0)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  })

  return (
    <div {...handlers} className="space-y-6 px-4 py-6 max-w-2xl mx-auto">
      {messages.slice(currentIndex, currentIndex + 10).map(message => (
        <Message key={message.id} message={message} setCurrentMedia={setCurrentMedia} />
      ))}
    </div>
  )
}

