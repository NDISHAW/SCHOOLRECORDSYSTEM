import React from "react";
import {Table } from "react-bootstrap";
import MTStudet from "./MTStudet";
import Navbar from "./Navbar"

export default function Home(){

 
  return (
    <>
    <div style={{ width: "800px", display: "flex" }}>
      <Navbar />
    </div>
      <div style={{ width: "400px", display: "flex" }}>

        <Table>
          <MTStudet />
        </Table>
      </div>
    </>
  );
 };