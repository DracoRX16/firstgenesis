"use client";

import { useState } from "react";
import axios from "axios";
import { VscSend } from "react-icons/vsc";

const WolframQuery = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    try {
      const response = await axios.get("/api/wolfram", {
        params: { query },
      });
      setResult(response.data.result);
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div className="bg-gray-300 w-full rounded-lg min-h-screen text-black">
      <h1 className="flex justify-center text-2xl font-bold">Ask WolframAlpha</h1>
      <form className="flex justify-start" onSubmit={handleSubmit}>
        <input
        className="bg-gray-200 rounded-md p-2"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          class="placeholder:italic placeholder:text-black"
          placeholder="Enter your query"
        />
        <button className="bg-gray-200 rounded-md p-3 " type="submit"><VscSend /></button>
      </form>
      {error && <p>Error: {error}</p>}
      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default WolframQuery;
