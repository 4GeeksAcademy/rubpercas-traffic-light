import React from "react";
import { useState } from "react";

const TrafficLight = () => {
    const [selectedLight, setSelectedLight] = useState(null);

    const handleLightClick = (color) => {
        setSelectedLight(color);
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="bg-black" style={{ height: '80px', width: '20px' }}>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center bg-black rounded-1 gap-2" style={{ height: "250px", width: "100px" }}>
                <div className={`bg-danger rounded-circle ${selectedLight === 'danger' ? 'selected' : ''}`} style={{ height: "70px", width: "70px" }} onClick={() => handleLightClick('danger')}></div>
                <div className={`bg-warning rounded-circle ${selectedLight === 'warning' ? 'selected' : ''}`} style={{ height: "70px", width: "70px" }} onClick={() => handleLightClick('warning')}></div>
                <div className={`bg-success rounded-circle ${selectedLight === 'success' ? 'selected' : ''}`} style={{ height: "70px", width: "70px" }} onClick={() => handleLightClick('success')}></div>
            </div>
        </div>
    )
}

export default TrafficLight;