// src/App.jsx

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Hi, I'm <span className="text-purple-400">Syed Ajmal Hussain</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-6 max-w-xl mx-auto">
          Code, crash, repeat — <span className="text-green-400">just kidding, I debug.</span>
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300"
        >
          💼 View Portfolio
        </a>
      </div>
    </div>
  );
}

export default App;
