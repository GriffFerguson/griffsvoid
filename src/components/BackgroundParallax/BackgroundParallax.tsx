import React from "react";
import "@/styles/BackgroundParallax.css";
import StarfieldLayer from "./StarfieldLayer";
import ParallaxLayer from "./ParallaxLayer";

export default function BackgroundParallax({children}: {children: React.ReactNode}) {  
    return (
        <div id="bgp_void">
            <ParallaxLayer layer={1} mouseFactor={0.12}>
                <StarfieldLayer number={55} min={40} width={150} offset={-25} layer={1} />
            </ParallaxLayer>
            <ParallaxLayer layer={2} mouseFactor={0.05}>
                <StarfieldLayer number={65} min={50} width={130} offset={-15} layer={2} />
            </ParallaxLayer>
            <ParallaxLayer layer={3} mouseFactor={0.01}>
                <StarfieldLayer number={100} min={80} width={120} offset={-10} layer={3} />
            </ParallaxLayer>
        </div>
    )
}