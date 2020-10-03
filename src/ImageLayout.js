import React, { useState } from 'react';
import MainPage from './Componts/MainPage';
import Upload from './Componts/Upload';
import Album from './Componts/Album';
import Modal from './Componts/Modal';

function ImageLayout({ handleLogout }) {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div className="App">
            <button onClick={handleLogout}>Logout</button>
            <br />
            <br />
            <h3>Task Name: Embed</h3> <p>Click here to know<a href="https://docs.google.com/document/d/11Uulmqk08Pvme0goMkjUvZeOgomMbcOZJ88lYMv3ajM/edit">About the task</a></p>
            <MainPage />
            <Upload />
            <Album setSelectedImg={setSelectedImg} />
            { selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </div>
    );
}

export default ImageLayout;
