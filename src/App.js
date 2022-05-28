import Container from "./components/Container";
import { ChatContextProvider } from "./contexts/ChatContext";

function App() {
  return (
    <ChatContextProvider>
      <div className="App">
        <Container />
      </div>
    </ChatContextProvider>
  );
}

export default App;
