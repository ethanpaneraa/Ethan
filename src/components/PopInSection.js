import React from "react";
import { useState } from "react";
export default function PopInSection(props) {
    
    const [isVisible, setVisible] = useState(false); 
    const domRef = React.useRef(); 
    
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        }); 
        observer.observe(domRef.current); 
        return () => observer.unobserve(domRef.current); 
    }, []);   

    return (
        <div 
        className={`pop-in-section ${isVisible ? "is-show" : ""}`} 
        style = {{transitionDelay: `${props.delay}`}}
        ref = { domRef }
    >
        {props.children}
        </div>
    )
}
