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
      <div style={{display:'flex',alignItems:'center',gap:'1rem',width:'45%'}} >
        <Dropdown />
        <div style={{
          display:'flex',
          alignItems:'center',
          gap:'0.5rem',
          backgroundColor:'orange',
          padding:'0.4rem',
          borderRadius:'0.5rem'

        }}>
        <svg xmlns="http://www.w3.org/2000/svg" height={'0.8rem'} viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
            Add new
        </div>
        <div style={{
          display:'flex',
          alignItems:'center',
          gap:'0.5rem',
          backgroundColor:'darkblue',
          padding:'0.4rem',
          color:'white',
          borderRadius:'0.5rem'
          }}>
        <svg xmlns="http://www.w3.org/2000/svg"height={'0.8rem'} style={{
          fill:'white'
        }} viewBox="0 0 640 512"><path d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384z"/></svg>
            pos
        </div>
        <div style={{
          height:'2rem',
          width:'2vw',
          backgroundColor:'lightgray',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          borderRadius:'8px',

        }}>
        <svg xmlns="http://www.w3.org/2000/svg" height={'0.8rem'} viewBox="0 0 512 512"><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
        </div>

        <div style={{
          height:'2rem',
          width:'2vw',
          backgroundColor:'lightgray',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          borderRadius:'8px',

        }}>
          
      
        </div>

        <div style={{
          height:'2rem',
          width:'2vw',
          backgroundColor:'lightgray',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          borderRadius:'8px',

        }}>
           <svg xmlns="http://www.w3.org/2000/svg" height={'0.8rem'} viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
      
        </div>

        <div style={{
          height:'2rem',
          width:'2vw',
          backgroundColor:'lightgray',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          borderRadius:'8px',

        }}>
          
       <div style={{
          height:'2rem',
          width:'2vw',
          backgroundColor:'lightgray',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          borderRadius:'8px',

        }}>
          
          <svg xmlns="http://www.w3.org/2000/svg" height={'0.8rem'} viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
        </div>

        </div>
        <div style={{
          height:'2rem',
          width:'2vw',
          backgroundColor:'lightgray',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          borderRadius:'8px',

        }}>
          <svg xmlns="http://www.w3.org/2000/svg" height={'0.8rem'} viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
      
        </div>


        <div style={{
          height:'2rem',
          width:'2vw',
          backgroundColor:'lightgray',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          borderRadius:'8px',

        }}>
          <svg xmlns="http://www.w3.org/2000/svg" height={'0.8rem'} viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
      
        </div>




       
        
      </div>
    </div>
  );
};

export default TopNav;
