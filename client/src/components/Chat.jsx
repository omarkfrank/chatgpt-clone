// Chat.jsx - Componente de chat com avatar e mensagens estilizadas - 2024-04

import { useState, useRef, useEffect } from "react";
import api from "../api/axios";

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Olá! Como posso ajudar hoje?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Rolagem automática
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend() {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await api.post("/chat", { message: input });

      const aiMessage = { sender: "ai", text: res.data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Erro ao conectar ao servidor." },
      ]);
    }

    setInput("");
    setLoading(false);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") handleSend();
  }

  // 🔹 Avatar ajustado (usando /ia.png no public)
  function Avatar({ sender }) {
    const isUser = sender === "user";

    // Avatar do usuário com letra "U" e fundo azul
    if (isUser) {
      return (
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "#4A90E2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          U
        </div>
      );
    }

    // Avatar da IA com imagem SVG (usando /favicon.svg no public)
    return (
      <img
        src="/ia.png"
        alt="IA Avatar"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.messagesBox}>
        {messages.map((msg, index) => {
          const isUser = msg.sender === "user";

          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: isUser ? "row-reverse" : "row",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <Avatar sender={msg.sender} />

              <div
                style={{
                  ...styles.message,
                  backgroundColor: isUser ? "#DCF8C6" : "#EEE",
                  alignSelf: isUser ? "flex-end" : "flex-start",
                }}
              >
                {msg.text}
              </div>
            </div>
          );
        })}

        {loading && (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Avatar sender="ai" />
            <div style={{ ...styles.message, backgroundColor: "#EEE" }}>
              Digitando...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div style={styles.inputArea}>
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          style={styles.input}
        />

        <button onClick={handleSend} style={styles.button}>
          Enviar
        </button>
      </div>
    </div>
  );
}

//
// 🎨 CSS em JS
//
const styles = {
  container: {
    height: "100vh",
    maxWidth: "600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    fontFamily: "Arial, sans-serif",
  },
  messagesBox: {
    flex: 1,
    overflowY: "auto",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  message: {
    maxWidth: "70%",
    padding: "10px",
    borderRadius: "10px",
    fontSize: "14px",
    lineHeight: "1.4",
  },
  inputArea: {
    display: "flex",
    marginTop: "12px",
    gap: "8px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #aaa",
  },
  button: {
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
  },
};
