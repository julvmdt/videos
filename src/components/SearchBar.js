import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [inputText, setInputText] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(inputText);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
