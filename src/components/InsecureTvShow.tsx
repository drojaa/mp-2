import styled from "styled-components";
import {Cast} from "../interfaces/Cast"

// CSS Styling for the Container holding all of the content
const MainCastDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: #d8d1b9;
`;

// CSS styling for each cast member and higlights my favorite 
const IndivCastDiv=styled.div<{ person: {name: string}}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border: 7px #cec4a7 solid;
    font: italic small-caps bold calc(2px + 1vw) 'Montserrat', sans-serif;
    text-align: center;
    background-color: #c1b69c ;
    ${(props) =>
        (props.person.name === "Yvonne Orji" ||
        props.person.name === "Amanda Seales" ||
        props.person.name === "Kendrick Sampson") &&
        `&:hover {
          background-color: pink;
        }`}
`;
// CSS styling for the header and sidenote/description
    const MainTitleHeader=styled.div`
    display: block;
    text-align: center;
    margin: auto;
    width: 100%;
    font: italic small-caps bold calc(2px + 1vw) 'Montserrat', sans-serif;
    max-width: 100%;
`;


// Component to upload data and UI styling to webpage
export default function InsecureTvShow(props : { data:Cast[] }) {
    return (
        
        <MainCastDiv>
          <MainTitleHeader>
            <h1>Cast Members from the Hit Tv Show 'Insecure'</h1>
            <p>*My favorites? Just hover over each cast member—the ones glowing in pink are my top picks! </p>
          </MainTitleHeader>
            {
            props.data.map((cast: Cast) => 
                    <IndivCastDiv key={cast.person.id} person={cast.person}>
                    <h1>{cast.person.name}</h1>
                    <p>{cast.character.name}</p>  
                    <img src={cast.person.image.medium} alt={`image of ${cast.person.name}`}></img>       
                    </IndivCastDiv>
              
            )
        }
    </MainCastDiv>
        
    )      
}