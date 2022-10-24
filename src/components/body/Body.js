import { useContext, useState } from "react";
import PostContext from "../../context/PostContext";
import UserContext from "../../context/UserContext";
import { Login } from "../../login";
import { getPosts } from "../../posts";

export function Body() {
  const { user, setUser } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostContext);
  const [content, setContent] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = async () => {
    const user = await Login(id);
    setUser(user);
    setId("");
  };

  const handlePost = async () => {
    console.log(content);
    const newPosts = await getPosts(content);
    setPosts(newPosts);
  };

  return (
    <>
      <h1>Body start</h1>
      <h5>{user?.id}</h5>
      {posts.map((post) => {
        return <>{post}</>;
      })}
      <div>
        <input
          type="text"
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Id"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post content"
        />
        <button onClick={handlePost}>Post</button>
      </div>
      <h5>Body end</h5>
    </>
  );
}
