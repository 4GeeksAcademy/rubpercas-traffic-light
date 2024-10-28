import React from "react";
import { useState, useEffect, useRef } from "react";
import Buttons from "./Buttons";


const TrafficLight = () => {
    const [selectedLight, setSelectedLight] = useState("danger");
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);
    const [isPurpleLightVisible, setIsPurpleLightVisible] = useState(false);

    useEffect(() => {
        const startInterval = () => {
            intervalRef.current = setInterval(() => {
                setSelectedLight((prevLight) => {
                    switch (prevLight) {
                        case 'danger':
                            return 'warning';
                        case 'warning':
                            return 'success';
                        case 'success':
                            return 'danger';
                        default:
                            return 'danger';
                    }
                });
            }, 1000);
        };

        if (!isPaused) {
            startInterval();
        }

        return () => clearInterval(intervalRef.current);
    }, [isPaused]);

    const handleLightClick = (color) => {
        setSelectedLight(color);
        clearInterval(intervalRef.current); // Detenemos el intervalo al hacer clic
        intervalRef.current = null; // Reiniciamos la referencia
        setIsPaused(true); // Marcamos como pausado
        console.log("Color seleccionado:", color);
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="bg-black" style={{ height: '80px', width: '20px' }}>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center bg-black gap-2" style={{ height: "250px", width: "100px" }}>
                <div className={`bg-danger rounded-circle ${selectedLight === 'danger' ? 'selected' : ''}`} style={{ height: "70px", width: "70px" }} onClick={() => handleLightClick('danger')}></div>
                <div className={`bg-warning rounded-circle ${selectedLight === 'warning' ? 'selected' : ''}`} style={{ height: "70px", width: "70px" }} onClick={() => handleLightClick('warning')}></div>
                <div className={`bg-success rounded-circle ${selectedLight === 'success' ? 'selected' : ''}`} style={{ height: "70px", width: "70px" }} onClick={() => handleLightClick('success')}></div>

            </div>
            {isPurpleLightVisible && (
                <div className="d-flex flex-column align-items-center justify-content-start bg-black" style={{ height: "100px", width: "100px" }}>
                    <div className={`bg-primary rounded-circle ${selectedLight === 'primary' ? 'selected' : ''}`} style={{ height: "70px", width: "70px" }} onClick={() => handleLightClick('primary')}>
                    </div>
                </div>
            )}

            <Buttons
                isPaused={isPaused}
                setIsPaused={setIsPaused}
                setSelectedLight={setSelectedLight}
                isPurpleLightVisible={isPurpleLightVisible}
                setIsPurpleLightVisible={setIsPurpleLightVisible}
            />

        </div>
    )
}

export default TrafficLight;
