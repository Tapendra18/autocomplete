import React, { useEffect, useState } from 'react';

const Autocomplete = ({
  fetchSuggestions,
  customLoading = 'loading...',
  onSelect = {},
  onChange = {},
  onBlur = {},
  onFocus = {},
  customStyles = {},
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue, 'inputvalue');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(suggestions , "suggestions")

  const HandleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const getSuggestions = async (query) => {
    setError(null);
    setLoading(true);
    try {
      let result;
      if (staticData) {
        result = staticData.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase());
        });
      } else if (fetchSuggestions) {
        result = await fetchSuggestions(query);
      }
      setSuggestions(result);
    } catch(error) {
      setError("Failed to fetch suggestions");
      setSuggestions([]);
    }finally{
      setLoading(false)
    }
  };

  useEffect(()=> {
    if(inputValue.length> 1){
      getSuggestions(inputValue);
    }else{
      getSuggestions([]);
    }
  } , [inputValue]);

  return (
    <>
      <div className="container">
        <input
          value={inputValue}
          placeholder={placeholder}
          type="text"
          style={customStyles}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={HandleInputChange}
          fetchSuggestions={fetchSuggestions}
        />
      </div>
    </>
  );
};

export default Autocomplete;
