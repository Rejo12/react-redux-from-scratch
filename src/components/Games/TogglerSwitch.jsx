import { useState } from 'react';

const App = () => {
    const [active, setActive] = useState(false);
    const [position, setPosition] = useState('8px');



    const handleClick = () => {
        console.log("clicked")
        if (active) {
            setPosition('43px');
        } else {
            setPosition('8px');
        }
        setActive((prevActive) => !prevActive);
    };
    // Edit this component
    return (
        <div>
            <div
                style={{
                    width: '60px',
                    height: '15px',
                    backgroundColor: 'blue',
                    position: 'relative',
                    borderRadius: '9px',
                    cursor: 'pointer',
                }}
                onClick={handleClick}
            ></div>
            <div
                style={{
                    width: '25px',
                    height: '25px',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '3px',
                    left: position,
                }}
            ></div>
        </div>
    );
};

export default App;
