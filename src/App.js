import "./App.css";
import { Body } from "./components/body/Body";
import { Header } from "./components/header/Header";
import { PostProvider } from "./context/PostContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <PostProvider>
          <Header />
          <Body />
        </PostProvider>
      </UserProvider>
    </div>
  );
}

export default App;
