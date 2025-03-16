import { useState } from 'react';
import "./Dictionary.css";

function Dictionary() {
  const [word, setWord] = useState('');
  const [wordMeaning, setWordMeaning] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function GetMeaning(e) {
    e.preventDefault();  

 

    setLoading(true);
    setError('');
    setWordMeaning(null);

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();

      if (data.length > 0) {
        setWordMeaning(data[0]);
      } else {
        setError('No data found. Try a different word.');
      }
    } catch (error) {
      setError('Error fetching the meaning. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  let content;

  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p className='error'>{error}</p>;
  } else if (wordMeaning) {
    content = (
      <>
        <h1 className='title-main'><span>Meaning of </span>{wordMeaning.word}</h1>

       
      </>
    );
  } else {
    content = <p>No data found.</p>;
  }

  return (
    <div className="parent">
      <div className="main-content">
        <form className='form-elements' onSubmit={(e) => GetMeaning(e)}>
          <h2 className='title'>Welcome to Dictionary</h2>
          <div className="col-elements">
            <input
              type="text"
              className='search'
              placeholder='Enter the word here to get the meaning'
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <button className='search submit'>Submit</button>
          </div>
        </form>
      </div>

      <div className="result-content">
      {content}
      </div>
    </div>
  );
}

export default Dictionary;
