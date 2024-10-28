import React from "react";

const Buttons = ({ isPaused, setIsPaused, setSelectedLight, isPurpleLightVisible, setIsPurpleLightVisible }) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center mt-5 gap-3">
            <button onClick={() => setIsPaused(!isPaused)}>
                {isPaused ? 'Start lighting' : 'Stop lighting'}</button>
            <button onClick={() => {
                setSelectedLight('primary');
                setIsPurpleLightVisible(!isPurpleLightVisible); 
                if (isPurpleLightVisible) {
                    alert("Blue light is eliminated to traffic light");
                  } else {
                    alert("Blue light is added to traffic light");
                  }
            }}>{isPurpleLightVisible ? 'Hide blue light' : 'Show blue light'}</button>
        </div>
    )
}

export default Buttons;
{/* <button onClick={() => {
                setSelectedLight('primary');
                setIsPurpleLightVisible(true); // Mostrar la luz púrpura al hacer clic
            }}>Purpura</button> */}