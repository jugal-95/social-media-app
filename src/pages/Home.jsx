import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  orderBy,
  query,
} from "firebase/firestore";

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const postsData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPosts(postsData);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleLike = async (postId, currentLikes) => {
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, {
      likes: currentLikes + 1,
    });
    fetchPosts(); // refresh
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div>
      <h2>Welcome, {user.email}</h2>
      <button onClick={handleLogout}>Logout</button>
      <br />
      <Link to="/create">+ Create Post</Link>

      <hr />

      <h3>Global Feed:</h3>
      {posts.map((post) => (
        <div key={post.id} style={{ border: "1px solid #ccc", margin: 10 }}>
          <p>{post.content}</p>
          <button onClick={() => handleLike(post.id, post.likes)}>
            ❤️ {post.likes}
          </button>
        </div>
      ))}
    </div>
  );
}
