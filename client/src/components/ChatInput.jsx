// ChatInput.jsx - Componente para entrada de mensagens no chat - 2024-04

import { useState } from "react";

export default function ChatInput({ onSendMessage }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onSendMessage(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} style={StyleSheet.form}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.input}
        placeholder="Digite sua mensagem ..."
      />
      <button type="submit" style={styles.button}>
        Enviar
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    gap: "10px",
    padding: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 20px",
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
