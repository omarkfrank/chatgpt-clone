/* App.jsx - This is the main component of the React application. It serves as the entry point for rendering the chat interface. 
The App component imports and renders the Chat component, which contains the core functionality of the chat application. 
By keeping the App component simple and focused on rendering, we maintain a clean separation of concerns and ensure that the application's structure is easy to understand and maintain. - 2026 04 */

import Chat from "./components/Chat";

function App() {
  return <Chat />;
}

export default App;

/*====! Teste de requisição frontend para o backend !====*/

/* import { useState } from "react";
import api from "./api/axios";

function App() {
  const [response, setResponse] = useState("");

  async function enviarMensagem() {
    try {
      const res = await api.post("/chat", {
        message: "Olá do frontend!",
      });

      setResponse(res.data.reply);
    } catch (error) {
      console.error("Erro:", error);
      setResponse("Erro ao conectar com o backend");
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Teste de Comunicação Front → Back</h1>

      <button onClick={enviarMensagem}>Enviar mensagem de teste</button>

      <p>Resposta do backend:</p>
      <pre>{response}</pre>
    </div>
  );
}

export default App;
 */
