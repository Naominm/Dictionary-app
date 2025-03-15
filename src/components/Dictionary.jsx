
import {useState,useEffect}  from 'react'
import "./Dictionary.css";

function Dictionary(){
const[wordMeaning, setWordMeaning]=useState(null);
const[error,setError]=useState('');
const [loading, setLoading] = useState(true);

useEffect(()=>{

    async function GetMeaning(){
        try {
        const response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`)
        if(!response.ok){
           throw new Error("failed to fetch");
        }
        const data=await response.json();
        setWordMeaning(data[0]);
} catch (error) {
    setError("Error Fetching the meaning please try again later")
   }
  finally{
    setLoading(false);
  }
}
GetMeaning()

}, []);

if(loading)return <p>loading...</p>

if(error)return <p className='error'>{error}</p>

if(!wordMeaning) return <p>No data found</p>

return(
    <div className="main-content">
   <h1>{wordMeaning.word}</h1>
    
</div>
    )
}

export default Dictionary;