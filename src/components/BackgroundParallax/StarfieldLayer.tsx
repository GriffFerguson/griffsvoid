"use server";
import React from "react";

type StarfieldLayerProps = {
    number: number,
    min: number,
    width: number,
    offset: number,
    layer: number
}

export default async function StarfieldLayer(props: StarfieldLayerProps) {
    
    var starfield: React.ReactNode[] = [];
    var randFactor = Math.floor(Math.random() * props.number) + props.min;
    for (var i = 0; i < randFactor; i++) {
        starfield.push(<div 
            key={`bgp_layer${props.layer}_star${i}`} 
            className={`bgp_layer${props.layer}_star`} 
            style={{
                top: `${(Math.random() * props.width) + props.offset}vh`, 
                left: `${(Math.random() * props.width) + props.offset}vw`
            }}></div>)
    }

    return <>{starfield}</>
}