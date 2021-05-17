import React from 'react';
import Layout from './layout';
import  Header  from "./components/Header/header";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";

function Dashboard(props) {
  return (
    <Layout title={props.title}>
      <Header />
      <h1>{props.title}</h1>
      <h2>Smart Mirror Home Page</h2>
      <h3>Welcome, {props.user.email}</h3>
      <About />
     {/* <a href="/users/profile">Profile</a> | <a href="/logout">Log out</a> */}

     <Footer/>
    </Layout>
  );
}

module.exports = Dashboard;
