"use client";
import React from "react"

function useMousePosition() {
    // Get mouse position
    const [mousePosition, setMousePosition] = React.useState({x: 0, y: 0});

    React.useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return mousePosition;
}

function useWindowSize() {
    const [windowSize, setWindowSize] = React.useState({x: 0, y: 0});

    React.useEffect(() => {
        const updateWindowSize = (e: UIEvent) => {
            setWindowSize({ x: window.innerWidth, y: window.innerHeight });
        };
        setWindowSize({ x: window.innerWidth, y: window.innerHeight });
        window.addEventListener('resize', updateWindowSize);
        return () => {
            window.removeEventListener('resize', updateWindowSize);
        };
    }, [])

    return windowSize;
}

export default function ParallaxLayer({layer, children, mouseFactor}: {layer:number, children: React.ReactNode, mouseFactor: number}) {
    var mousePos = useMousePosition();
    var windowSize = useWindowSize();

    // console.log(mousePos);
    // console.log(windowSize);
    return (
        <div 
            id={`bgp_layer${layer}`} 
            className="bgp_layer" 
            style={{
                top: `${((mousePos.y - (windowSize.y / 2)) * mouseFactor)}px`, 
                left: `${((mousePos.x - (windowSize.x / 2)) * mouseFactor)}px`
        }}>
            {children}
        </div>
    )
}