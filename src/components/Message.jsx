export default function Message({ message, setCurrentMedia }) {
  const isBot = message.sender === 'BUBU Study'
  
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[80%] ${isBot ? 'bg-[#1a1a1a]' : 'bg-[#2b5278]'} rounded-2xl p-4 shadow-lg`}>
        <div className="flex justify-between items-start mb-2 gap-4">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
              isBot ? 'bg-blue-600' : 'bg-green-600'
            }`}>
              {message.sender.charAt(0)}
            </div>
            <span className="font-medium text-sm text-white">{message.sender}</span>
          </div>
          <span className="text-xs text-gray-400 whitespace-nowrap">{message.timestamp}</span>
        </div>
        
        {message.type === 'text' && (
          <p className="text-white whitespace-pre-line">{message.content}</p>
        )}
        
        {message.type === 'video' && message.media && (
          <div className="mt-2 mb-3">
            <div 
              className="relative cursor-pointer rounded-lg overflow-hidden"
              onClick={() => setCurrentMedia(message.media.url)}
            >
              <img 
                src={message.media.thumbnail} 
                alt="Video thumbnail"
                className="w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-1 rounded text-xs text-white">
                {message.media.duration}
              </div>
            </div>
            {message.content && (
              <p className="mt-2 text-white">{message.content}</p>
            )}
          </div>
        )}
        
        {message.buttons && (
          <div className="mt-3 flex flex-wrap gap-2">
            {message.buttons.map((button, index) => (
              <a
                key={index}
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#168acd40] hover:bg-[#168acd60] text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                {button.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

