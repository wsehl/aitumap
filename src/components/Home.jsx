import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Show from './Show';

const Home = () => {
    const [selectedOption, setSelectedOption] = useState('first');
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    }

    return (
        <>
            <Sidebar handleOptionChange={handleOptionChange}/>
            <Show selectedOption={selectedOption}/>
        </>
    )
}

export default Home