import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMsg = { role: "user", text: message };
    setMessages((prev) => [...prev, userMsg]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });

      const data = await res.json();
      const botMsg = { role: "bot", text: data.reply };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Something went wrong. Please try again." }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white shadow rounded-xl p-5 flex flex-col">
        {/* Title */}
        <h2 className="text-base font-semibold mb-2">
        Ask CampusMate 
        </h2>

        {/* Messages */}
        <div className="max-h-[240px] overflow-y-auto space-y-2 mb-2">
        {messages.length === 0 && (
            <div className="text-sm text-gray-400">
            </div>
        )}

        {messages.map((msg, i) => (
            <div
            key={i}
            className={`max-w-[85%] px-3 py-2 rounded-lg text-sm ${
                msg.role === "user"
                ? "bg-blue-600 text-white ml-auto"
                : "bg-gray-100 text-gray-800"
            }`}
            >
            {msg.text}
            </div>
        ))}

        {loading && (
            <div className="text-xs text-gray-500 italic">
            CampusMate is thinking…
            </div>
        )}
        </div>

        {/* Input */}
        <div className="flex gap-2">
        <input
            className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ask timetable, syllabus…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
            onClick={sendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
        >
            Send
        </button>
        </div>
    </div>
    );
}
