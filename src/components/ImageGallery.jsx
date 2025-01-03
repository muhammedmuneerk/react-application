import { useState } from 'react'
import { Button } from '../ui/button'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const images = [
  '/photos/photo_1@02-01-2025_01-48-50_thumb.jpg',
  '/photos/photo_1@02-01-2025_01-48-50_thumb.jpg',
  // Add more image URLs...
]

export default function ImageGallery({ src, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(images.indexOf(src))

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-3xl w-full">
      <div className="relative">
        <img src={images[currentIndex]} alt="Gallery image" className="w-full rounded-lg" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 text-white"
          onClick={onClose}
        >
          <X />
        </Button>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <Button variant="ghost" size="icon" onClick={goToPrevious}>
          <ChevronLeft />
        </Button>
        <span className="text-sm">
          {currentIndex + 1} / {images.length}
        </span>
        <Button variant="ghost" size="icon" onClick={goToNext}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}

