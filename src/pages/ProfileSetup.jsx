import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

export default function ProfileSetup() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email,
      name,
      bio,
    });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Complete Your Profile</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Short Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        required
      ></textarea>
      <button type="submit">Save Profile</button>
    </form>
  );
}
