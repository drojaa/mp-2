import styled from "styled-components";
import {Cast} from "../interfaces/Cast"

const MainCastDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: lightblue;
`;

const IndivCastDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border: 3px green solid;
    font: italic small-caps bold calc(2px + 1vw) 'Montserrat', sans-serif;
    text-align: center;
    background-color: pink;
    
`;

    const MainTitleHeader=styled.div`
    display: block;
    text-align: center;
    margin: auto;
    width: 100%;
    max-width: 100%;
`;



export default function InsecureTvShow(props : { data:Cast[] }) {
    return (
        
        <MainCastDiv>
          <MainTitleHeader>
            <h1>Cast Members from the Hit Tv Show 'Insecure'</h1>
          </MainTitleHeader>
            {
            props.data.map((cast: Cast) => 
                    <IndivCastDiv key={cast.person.id}>
                    <h1>{cast.person.name}</h1>
                    <p>{cast.character.name}</p>  
                    <img src={cast.person.image.medium} alt={`image of ${cast.person.name}`}></img>       
                    </IndivCastDiv>
              
            )
        }
    </MainCastDiv>
        
    )

   
       
}