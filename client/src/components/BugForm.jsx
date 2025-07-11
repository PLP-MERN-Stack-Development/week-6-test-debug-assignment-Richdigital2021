import React from "react"; // ✅ Required for JSX
import { useState } from "react";
import axios from "axios";

export default function BugForm({ onSuccess }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/bugs", {
        title,
        description,
      });
      setTitle("");
      setDescription("");
      onSuccess();
    } catch (err) {
      alert("Error creating bug");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ display: "block", marginBottom: "0.5rem", width: "300px" }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          display: "block",
          marginBottom: "0.5rem",
          width: "300px",
          height: "100px",
        }}
      />
      <button type="submit">Submit Bug</button>
      <style>
        {`
          button {
            border: solid .5px #4caf50;
            border-radius: 4px;
            padding: 0.5rem 1rem;
            background-color: #4caf50;
            color: white;
            cursor: pointer;
          }

          button:hover {
            background-color: #45a049;
          }
        `}
      </style>
    </form>
  );
}
