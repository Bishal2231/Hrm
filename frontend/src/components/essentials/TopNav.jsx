// import { Dropdown } from "bootstrap";

import React from "react";
import Dropdown from "./DropDown";

const TopNav = () => {
  return (
    <div
      style={{
        width: "98vw",
        position: "absolute",
        top: "0",
        display: "flex",
        alignItems: "center",
        backgroundColor:'white',
        justifyContent:'space-between',

      }}
    >
      <div
        style={{
          display: "flex",
          width: "40%",
          justifyContent: "space-between",
          alignItems: "center",
        //   backgroundColor:'pink'
        }}
      >
        <div className="nameAndLogioContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={"2rem"}
            style={{ fill: "orange", marginTop: "0.7rem" }}
            viewBox="0 0 448 512"
          >
            <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
          </svg>
          <div className="titleContainer">
            <div className="title">
              <h6 className="subTitle">HRM</h6>
              <h2>ArthaVidhi</h2>
            </div>
          </div>
        </div>
        <div
          style={{
            border: "1.5px solid black",
            height: "2.3rem",
            width:'49%',
            borderRadius: 8,
            borderRight: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            padding: 5,
            opacity:0.5
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={"0.8rem"}
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          <input
            type="text"
            placeholder="search"
            style={{
              outline: "none",
            }}
          />
          <div
            style={{
              backgroundColor: "lightblue",
              width: "2rem",
              borderRadius: 2,
              fontSize:'0.7rem',
              height:'1.5rem',
              justifyContent:'center',
              alignItems:'center',
              borderRight:'1rem'
            }}
          >
            <p>
            ⌘ K
            </p>
          </div>
        </div>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:'1rem',width:'40%',backgroundColor:'pink'}} >
        <Dropdown />
        <div style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
        <svg xmlns="http://www.w3.org/2000/svg" height={'0.8rem'} viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
            Add new
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
        <svg xmlns="http://www.w3.org/2000/svg"height={'0.8rem'} viewBox="0 0 640 512"><path d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384z"/></svg>
            pos
        </div>
      </div>
    </div>
  );
};

export default TopNav;
