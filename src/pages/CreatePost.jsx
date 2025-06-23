import { useState } from "react";
import { db } from "../firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const { user } = useAuth();
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handlePost = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "posts"), {
      uid: user.uid,
      content,
      likes: 0,
      createdAt: serverTimestamp(),
    });
    setContent("");
    navigate("/");
  };

  return (
    <form onSubmit={handlePost}>
      <h2>Create Post</h2>
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">Post</button>
    </form>
  );
}
