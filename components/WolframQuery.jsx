"use client";

import { useState } from "react";
import axios from "axios";
import { VscSend } from "react-icons/vsc";
import { SiWolfram } from "react-icons/si";

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

  const renderResult = (result) => {
    if (!result) return null;

    const lines = result.split('\n').filter(line => line.trim() !== '');
    return lines.map((line, index) => {
      if (line.startsWith('image:')) {
        const imageUrl = line.split('image: ')[1];
        return <img key={index} src={imageUrl} alt={`Result image ${index}`} />;
      }
      if (line.startsWith('Wolfram Language code:')){
        return;
      }
      return <p key={index}>{makeLinksClickable(line)}</p>;
    });
  };

  const makeLinksClickable = (text) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    return text.split(urlPattern).map((part, index) =>
      urlPattern.test(part) ? (
        <a className="underline text-blue-500" key={index} href={part} target="_blank" rel="noopener noreferrer">{part}</a>
      ) : (
        part
      )
    );
  };

  return (
    <div className="min-h-screen text-black">      
      <div className="flex justify-center items-center p-2"><SiWolfram className="h-10 w-10"/></div>
      <h1 className="flex justify-center text-2xl font-bold">Ask WolframAlpha</h1>
      <br></br>
      <form className="flex justify-start" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="placeholder:italic placeholder:text-slate-400 outline outline-black w-full bg-gray-200 rounded-md p-2"
          placeholder='Try "time to pay $1200 credit card" '
        />
        <button className="bg-gray-200 outline outline-black rounded-md p-3 " type="submit"><VscSend /></button>
      </form>
      {error && <p>Error: {error}</p>}
      {result && <div>{renderResult(result)}</div>}
    </div>
  );
};

export default WolframQuery;
