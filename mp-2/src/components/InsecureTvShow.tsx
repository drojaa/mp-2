import styled from "styled-components";
import {Cast} from "../interfaces/Cast"

const MainCastDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: pink;
`;

const IndivCastDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border: 3px darkorange solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
    
`;


export default function InsecureTvShow(props : { data:Cast[] }) {
    return (
        <MainCastDiv>
        {
            props.data.map((cast: Cast) => {
                return (
                    <h1>{cast.person.name}</h1>
                )
            })
        }
    </MainCastDiv>
    )

   
       
}