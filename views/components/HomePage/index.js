import { React } from "react";
import { Grid, Segment, Divider, Card, Icon, Image, Item } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';


export const Home = () => {
    // const I1 = require("/images/smirror1.jpg");
    return(
    <div className="Home">
        <Segment style={{
            margin: "0",
            height: "100%",
            border:"1px solid lightgrey",
            fontSize: '20px',
            
        }}>
            This is a website I decided to build to describe a project I made last Thanksgiving break. I built a smart mirror using a Raspberry PI 3 and an arduino Uno to read temps from outside.
            <br></br>
            <br></br>
            The mirror connects to the wifi and displays things like national US Covid data. There is also a python script on the mirror that makes a network map and finds the users phone and when
            the user leaves wifi signal, the mirror display is then shut off.
            <br></br>
            <br></br>
             The about page has photos and examples of how I built it and what I used hardware and software wise. 
             <br></br>
             <br></br>
             The data page uses a table to display a json I made from the temps recorded from the arduin uno.
        </Segment>
        </div>
    )
}