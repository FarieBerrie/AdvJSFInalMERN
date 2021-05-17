import  React  from "react";
import { Grid, Segment, Divider, Card, Icon, Image, Item } from "semantic-ui-react";
// import 'semantic-ui-css/semantic.min.css';
// import Image1 from "../../../images/smirror2.jpg";
// import Image2 from "../../../images/smirror3.jpg";
// import Image3 from "../../../images/smirror4.jpg";
// import Image4 from "../../../images/smirror5/jpg";
// const Image1 = require("../../../images/smirror2.jpg");

function About () {
    // const I1 = require("/images/smirror1.jpg");
    // const Image1 = require("../../../images/smirror2.jpg");
    return(
    <div className="Home">
        <Segment style={{
            margin: "0",
            border:"1px solid lightgrey"
        }}>
        {/* <Item.Group style={{
            margin: "auto",
            display: "flex",
            height: "90%",
    }}>
            <Item>
                <Item.Image style={{
                    margin: "auto",
                    border: "2px solid #3e6af9",
                }}/>
            </Item>
            <Icon style={{margin: "auto"}}
            name="wifi" size="small" />
            <Item>
                <Item.Image style={{
                    margin: "auto",
                    border: "2px solid #3e6af9",
                    
                }} />
            </Item>
            <Icon style={{margin: "auto"}}
            name="tv" size="small" />
            <Item>
                <Item.Image style={{
                    margin: "auto",
                    border: "2px solid #3e6af9",
                }} />
            </Item>
            <Icon style={{margin: "auto"}}
            name="images" size="small" />
            <Item>
                <Item.Image style={{
                    margin: "auto",
                    border: "2px solid #3e6af9",
                }} />
            </Item>
        </Item.Group> */}
        </Segment>
        <Segment style={{
        }}>
        <Grid columns={2} relaxed="very">
        <Grid.Column style={{
            fontSize:"20px"
        }}>
        Hardware used:
        <br></br>
        <Card style={{width: "100%", border:"1px solid lightgrey"}}>
        <Card.Content style={{fontSize: "15px",
            width: "100%" }}>Raspberry PI model 3 B+ 
        <br></br>
        <Icon name="chart pie" /></Card.Content>
        <Card.Content style={{fontSize: "15px",
            width: "100%"}}>Emerson 19" TV 
        <br></br>
        <Icon name="tv"/></Card.Content>
        <Card.Content style={{fontSize: "15px",
            width: "100%"}}>19" x 11" Acrylic Glass 
            <br></br>
        <Icon name="window maximize outline"/>
        </Card.Content>
        <Card.Content style={{fontSize: "15px",
            width: "100%"}}>GILA Platinum Grey Heat-Control Window Film 
        <br></br>
        <Icon name="tint"/></Card.Content>
        <Card.Content style={{fontSize: "15px",
            width: "100%"}}>Two 19" x 1' x 6" boards 
        <br></br>
        <Icon name="tree" /></Card.Content>
        <Card.Content style={{fontSize: "15px",
            width: "100%"}}>Arduino Uno
            <br></br>
            <Icon name="computer"/></Card.Content>
        <Card.Content style={{fontSize: "15px",
            width: "100%"}}>DHT11 Temperature Humidity Sensor
        <br></br>
        <Icon name="thermometer empty" />
            </Card.Content>
        </Card>
        </Grid.Column>
        <Grid.Column style={{
            fontSize:"20px"
        }}>
        Software Used:
        <br></br>
        <Card style={{width: "100%", border:"1px solid lightgrey"}}>
        <Card.Content style={{fontSize: "15px",
            width: "100%" }}><a href="https://github.com/MichMich/MagicMirror" > Magic Mirror OS</a> 
            </Card.Content>
            <br></br>
        <Card.Content style={{fontSize: "15px",
            width: "100%"}}><a href="https://covid19api.com/">COVID Data</a>
        </Card.Content>
        <br></br>
        <Card.Content style={{fontSize: "15px",
            width: "100%"}}><a href="https://create.arduino.cc/projecthub/pibots555/how-to-connect-dht11-sensor-with-arduino-uno-f4d239"> DHT11 Pinout and Sensor Code</a> 
            </Card.Content>
            <br></br>
        <Card.Content style={{fontSize: "15px",
            width: "100%"}}><a href="https://github.com/zuo000/MMM-HomeAssistant">Home Assistant for smart home control</a>
        </Card.Content>
        <br></br>
        <Card.Content style={{fontSize: "15px",
            width: "100%"}}><a href="https://github.com/Dentrax/MMM-ArduPort">Arduino Port to display serial connection status</a> 
        </Card.Content>
        <br></br>
        <Card.Content style={{fontSize: "15px",
            width: "100%"}}><a href="https://github.com/timdows/MMM-JsonTable"> JsonTable Module for displaying covid data</a>
        </Card.Content>
        <br></br>
        <Card.Content style={{fontSize: "15px",
            width: "100%"}}><a href="https://github.com/RpDp-git/PiDisplaySleep"> Python program to run a network map check and put the display to sleep if a smartphone is disconnected </a>
        </Card.Content>
        <br></br>
        </Card>
        </Grid.Column>
        </Grid>
        {/* <Divider vertical> And </Divider> */}
        </Segment>
        </div>
    );
}

module.exports = About;