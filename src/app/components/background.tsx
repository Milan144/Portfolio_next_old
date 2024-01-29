'use client'
import React from 'react';
import Spline from "@splinetool/react-spline"; 

const Background: React.FC = () => {
    return (
      <div
        id="background"
      >
        <Spline
          scene="https://prod.spline.design/j3rCRG34mDRp4bia/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    );
};

export default Background;
