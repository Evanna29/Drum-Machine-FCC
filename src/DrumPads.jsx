import { useState, useRef } from "react";
import "./DrumPads.css"



export default function DrumPads() {   



    const audios= [
    
"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
];

const [currentKey, setCurrentKey] = useState("");

    const lettersForKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    const nameForKeys = ["Heater-1", "Heater-2", "Heater-3", "Heater-4", "Clap", "Open-HH", "Kick-n-Hat", "Kick", "Closed-HH"];

    const audioRefs = audios.map(() => useRef(null));
    

    const handleClick = index => {
        const audio = audioRefs[index].current;
        if (audio) {
            // audio.onloadeddata = () => {
            audio.play();
            setCurrentKey(nameForKeys[index]);
        //  };
        }
    };
    const handleKeyDown = event => {    
        const index = lettersForKeys.indexOf(event.key.toUpperCase());
        const audio = audioRefs[index].current;
        
        // if (index >= 0) {
        //     handleClick(index);
            
        // }
        if (audio) {
            // audio.onloadeddata = () => {
            audio.play();
            setCurrentKey(nameForKeys[index]);
            // }
        }
    }
    
    return (
        <div>
        {audios.map((audioSrc, index) => (
            <button
                key={index}
                className="drum-pad"
                id={`drum-pad-${index}`}
                onClick={() => handleClick(index)}
                onKeyDown={() =>handleKeyDown(event)}>
                {lettersForKeys[index]}
                
                <audio
                    ref={audioRefs[index]}
                    className="clip"
                    id={lettersForKeys[index]}
                    preload="auto"
                    src={audioSrc}
                />
            </button>
            
        ))}
        
        <div id="display">{currentKey}</div>
    </div>
    );
}
