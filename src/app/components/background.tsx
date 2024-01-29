'use client'
import React from 'react';
import Spline from "@splinetool/react-spline"; 

const Background: React.FC = () => {
    return (
      <div
        id="background"
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Spline
          scene="https://prod.spline.design/j3rCRG34mDRp4bia/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    );
};

export default Background;
