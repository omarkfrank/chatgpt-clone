// ChatWindow.jsx - Componente para exibir mensagens do chat - 2024-04

import ChatMessage from "./ChatMessage";

export default function ChatWindow({ messages }) {
  return (
    <div style={styles.container}>
      {messages.map((msg, i) => (
        <ChatMessage key={i} from={msg.from} text={msg.text} />
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    height: "70vh",
    overflowY: "auto",
    background: "#f9fafb",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
};
