
import {useState,useEffect}  from 'react'

import "./Dictionary.css";

function Dictionary(){
// const[wordMeaning, setWordMeaning]=useState(null);
// const[error,setError]=useState('');
// const [loading, setLoading] = useState(true);

// useEffect(()=>{

//     async function GetMeaning(){
//         try {
//         const response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`)
//         if(!response.ok){
//            throw new Error("failed to fetch");
//         }
//         const data=await response.json();
//         setWordMeaning(data[0]);
// } catch (error) {
//     setError("Error Fetching the meaning please try again later")
//    }
//   finally{
//     setLoading(false);
//   }
// }
// GetMeaning()

// }, []);

// if(loading)return <p>loading...</p>

// if(error)return <p className='error'>{error}</p>

// if(!wordMeaning) return <p>No data found</p>

return(
  <div className="parent">
    <div className="main-content">
      <form className='form-elements'>
        
          <h2 className='title'>Welcome to Dictionary</h2>
          <div className="col-elements">
        <input type="text" className='search' placeholder='Enter the word here to get the meaning' />
        <button className='search submit'>submit</button>
      
        </div>
      </form>

   {/* <h1>{wordMeaning.word}</h1> */}
    
</div>
<div className="result-content">
  <p>lets get the meaning</p>
  <div className="word-title"></div>
  <div className="word-audio"></div>
  <div className="word-synonym"></div>
</div>
</div>
    )
}

export default Dictionary;