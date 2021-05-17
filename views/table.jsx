import  React  from "react";
// import  {JsonToTable}  from "react-json-to-table";
// const JsonToTable = require('react-json-to-table');
// import { render } from "../app";
import Layout from "./layout"
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
// import Weather from "../Weather.json"

class Table extends React.Component {
    constructor(props){
        super(props);
    this.state = {
        title: props.title,
    };
}
    // const data = require("../Weather.json")
    render(){
    return(
        
        <Layout style={{height: "100vh"}}>
            <Header />
        <h1 style={{ fontSize: "12px", fontFamily:"Times New Roman", marginLeft:"1%" }}>*Values Taken at 6am</h1>
        {/* <JsonToTable  /> */}
        
        <Footer />
    </Layout >


    );
}
}

module.exports = Table;