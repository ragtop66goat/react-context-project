import "./App.css";
import { Body } from "./components/body/Body";
import { Counter } from "./components/counter/Counter";
import { Header } from "./components/header/Header";
import { Login } from "./components/login/Login";
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
          <Login />
        </PostProvider>
      </UserProvider>
    </div>
  );
}

export default App;
