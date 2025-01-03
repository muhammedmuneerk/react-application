import { useState } from 'react';
import ChatHeader from './components/ChatHeader';
import MessageList from './components/MessageList';
import VideoPlayer from './components/VideoPlayer';
import ImageGallery from './components/ImageGallery';

export default function Home() {
  const [currentMedia, setCurrentMedia] = useState(null);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-100">
      <ChatHeader />
      <main className="container mx-auto">
        <MessageList setCurrentMedia={setCurrentMedia} />
        {currentMedia && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">
            {currentMedia.endsWith('.mp4') ? (
              <VideoPlayer src={currentMedia} onClose={() => setCurrentMedia(null)} />
            ) : (
              <ImageGallery src={currentMedia} onClose={() => setCurrentMedia(null)} />
            )}
          </div>
        )}
      </main>
    </div>
  )
}

