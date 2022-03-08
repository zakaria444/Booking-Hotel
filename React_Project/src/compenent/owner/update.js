import axios from "axios";
import React from "react";


export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`http://localhost:5000/api/users/:propreatairId`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(`http://localhost:5000/api/users/:propreatairId`, {
        title: "Hello World!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}
