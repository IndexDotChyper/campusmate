import Navbar from "./components/Navbar";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-2xl">
          
          {/* Hero Section */}
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-gray-800">
              CampusMate AI 
            </h1>
            <p className="text-gray-600 mt-1 text-sm">
              Your AI assistant for syllabus, timetables & college notes
            </p>
          </div>

          {/* Chat Card */}
          <Chat />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-4 border-t bg-white">
        Built with ❤️ · Index.Chyper
      </footer>
    </div>
  );
}

export default App;
