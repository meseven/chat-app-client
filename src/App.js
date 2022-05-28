import ChaList from "./components/ChaList";
import Form from "./components/Form";
import { ChatContextProvider } from "./contexts/ChatContext";

function App() {
  return (
    <ChatContextProvider>
      <div className="App">
        <ChaList />
        <Form />
      </div>
    </ChatContextProvider>
  );
}

export default App;
