import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Vysledky = () => {
    const [matchData, setMatchData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tym, setTym] = useState("Životice");

    const zmenaTymu = (vybranyTym) =>{
        setTym(vybranyTym);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/scrape');
                setMatchData(response.data.zapasy);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('An error occurred while fetching data.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const filteredMatchData = matchData.filter(match => {
        return match.domaci.includes(tym) || match.hoste.includes(tym);
    });

    const sanitizeString = (str) => {
        return str.replace(/ *\([^)]*\) */g, "");
    };

    return (
        <div className='big:mx-48 mx-12 my-12'>
        <select onChange={e => zmenaTymu(e.target.value)}>
            <option value="">Vyberte tým</option>
            <option value="Životice">Hladké Životice</option>
            <option value="Bartošovice">Bartošovice</option>
            <option value="Albrechtice">Velké Albrechtice</option>
            <option value="Jičín">Starý Jičín B</option>
            <option value="Petřvald">Petřvald B</option>
            <option value="Vražné">Vražné</option>
            <option value="Bordovice">Bordovice</option>
            <option value="Ženklava">Ženklava</option>
            <option value="Straník">Straník</option>
            <option value="Trojanovice">Trojanovice Bystré</option>
            <option value="Zbyslavice">Zbyslavice</option>
            <option value="Hostašovice">Hostašovice</option>
        </select>
        <div> 
            <div>                     
                {filteredMatchData.slice(14,18).map((match, index) => (
                    <div key={index} className='flex items-center border-t-2 border-gray-300 p-4 justify-between gap-4'>
                        <div className='sm:w-48 w-28 flex gap-2 items-center'>
                            <img src={sanitizeString(match.domaci) + ".webp"} className='sm:w-5 w-12' alt="" /><p className='sm:block hidden'>{sanitizeString(match.domaci)} </p>                        
                        </div>
                        <p className='text-2xl font-bold text-main w-16'>{sanitizeString(match.skore)}</p>
                        <div className='sm:w-48 w-28 flex gap-2 items-center justify-end'>
                            <p className='sm:block hidden'>{sanitizeString(match.hoste)} </p><img src={sanitizeString(match.hoste) + ".webp"} className='sm:w-5 w-12' alt="" />                        
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Vysledky;
