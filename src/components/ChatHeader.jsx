export default function ChatHeader() {
  return (
    <header className="bg-gray-800/95 backdrop-blur-sm text-white py-4 px-6 sticky top-0 z-10 border-b border-gray-700 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
          <span className="text-xl font-bold">B</span>
        </div>
        <div>
          <h1 className="text-xl font-bold">BUBU Study</h1>
          <p className="text-xs text-gray-400">Online</p>
        </div>
      </div>
    </header>
  )
}

