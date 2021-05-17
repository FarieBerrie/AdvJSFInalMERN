import  React  from "react";
import { Segment, Icon } from "semantic-ui-react";

function Footer () {
    return(
        <Segment
        style={{
            width: "100%",
            borderTop: "2px solid #3e6af9",
            borderBottom: "2px solid #3e6af9",
            borderRight: "2px solid silver",
            borderLeft: "2px solid silver",
            display: "flexbox",
            // alignSelf: "start",
            fontFamily: "sans-serif",
            height: "100%",
            fontSize: "20px",
            backgroundColor: "silver",
            padding: "1%"
        }}>
            <Icon size="large" 
                style={{
                marginLeft: "49%",
                // height: "15px"
            }} name="github" />
        </Segment>
    );
}

module.exports = Footer;