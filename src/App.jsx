
import { useState, useEffect } from "react";

function Ligne({ lineId, setActive }) {

    useEffect(() => {
        setActive(n => n + 1);

        const id = setInterval(() => {
            console.log("Ligne :", lineId);
        }, 1000);

        return () => {
            clearInterval(id);
            setActive(n => n - 1);
        };

    }, []);

    return <h2>Ligne : {lineId}</h2>;
}

export default function App() {
    const [lineId, setLineId] = useState(1);
    const [show, setShow] = useState(true);
    const [active, setActive] = useState(0);

    return (
        <div>
            <h1>Démo useEffect</h1>

            <button onClick={() => setLineId(n => n + 1)}>
                Changer de ligne
            </button>

            <button onClick={() => setShow(s => !s)}>
                Masquer / Afficher
            </button>

            {show && (
                <Ligne
                    lineId={lineId}
                    setActive={setActive}
                />
            )}

            <h3>Intervalles actifs : {active}</h3>
        </div>
    );
}
