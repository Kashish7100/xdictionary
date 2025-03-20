import React, { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const handleSearch = () => {
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter a word..."
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={handleSearch} style={{ padding: "8px 12px" }}>Search</button>
      <div style={{ marginTop: "20px" }}>
        {definition && (
          <>
            <h3>Definition:</h3>
            <p>{definition}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
