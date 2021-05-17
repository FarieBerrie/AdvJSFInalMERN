import React from 'react';
import { Segment, Button, Icon } from "semantic-ui-react";
// import {Tab, Tabs, Tablist, TabPanel } from "react-tabs";
// import { NavLink } from "react-router-dom";
// import 'semantic-ui-css/semantic.min.css';

function Header(){
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
    }}
    > 
    <strong> 
        DIY Smart Mirror Display
    </strong>
    
    <Button animated color="black"
    style={{
        marginLeft: "60%",
        borderRadius: "15%",
        backgroundColor: "white"
    }}
    >
    <Button.Content href="/dashboard" visible>Home</Button.Content>
    <Button.Content hidden><Icon name="home"></Icon></Button.Content>
    </Button>
    
    
    <Button  animated color="black"
    style={{
        marginLeft: "1%",
        borderRadius: "15%",
        backgroundColor: "white"
    }}
    >
    <Button.Content href="/users/profile" visible>Profile</Button.Content>
    <Button.Content hidden><Icon name="radio"></Icon></Button.Content>
    {/* <a href="/users/profile">Profile</a> */}
    </Button>
    
    <Button animated color="blue" style={{
        marginLeft: "1%",
        borderRadius: "15%",
        backgroundColor: "white"
    }}>
    <Button.Content href="/dashboard/data" visible>Data</Button.Content>
    <Button.Content hidden><Icon name="file outline"></Icon></Button.Content>
    </Button>

    <Icon style={{
        marginLeft: "1%",
    }} name="mixcloud" size="big"> </Icon> 
    <Button animated color="blue" style={{
        marginLeft: "1%",
        borderRadius: "15%",
        backgroundColor: "white"
    }}>
    <Button.Content href="/logout" visible>Logout</Button.Content>
    <Button.Content hidden><Icon name="file outline"></Icon></Button.Content>
    </Button>
 
    </Segment>
);
}
module.exports = Header;