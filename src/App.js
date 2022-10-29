import "./App.css";
import { Body } from "./components/body/Body";
import { Counter } from "./components/counter/counter";
import { Header } from "./components/header/Header";
import { Memo } from "./components/memo/Memo";
import { PostProvider } from "./context/PostContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <PostProvider>
          <Header />
          <Body />
          <Memo />
          <Counter />
        </PostProvider>
      </UserProvider>
    </div>
  );
}

export default App;
