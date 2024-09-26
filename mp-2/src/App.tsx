import InsecureTvShow from "./components/InsecureTvShow";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Cast} from "./interfaces/Cast";

//CSS sytling for the Basic Overall Page
const MainDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px purple solid;
`;

export default function App() {
  
  //useState Hook to store Data.
  const [data, setData] = useState<Cast[]>([]);

  //useEffect Hook for error handling and re-rendering
  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch('https://api.tvmaze.com/shows/5967/cast');
      const results : Cast []  = await rawData.json();
      setData(results);
    }
    // Grabs data from the api 
    fetchData()
      .then(() => console.log("Data fetched successfully", data))
      .catch((e: Error) => console.log("There was the error: " + e));
  }, [data.length]);
  return(
    <MainDiv>
      <InsecureTvShow data={data}/>
    </MainDiv>
    
)

}