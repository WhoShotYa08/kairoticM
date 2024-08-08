import React from 'react';
import Icon1 from '../../src/assets/download1.png';
import Icon2 from '../../src/assets/download.jpeg';

export default function UserAnalytics(){
    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center'
    };

    const boxContainerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '40px'
    };

    const boxStyle = {
        flex: '1',
        margin: '0 10px',
        padding: '20px',
        backgroundColor: '#87CEEB',
        color: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center'
    };

    const headingStyle = {
        fontSize: '18px',
        margin: '0 0 10px',
        fontWeight: 'bold'
    };

    const numberStyle = {
        fontSize: '32px',
        margin: '10px 0 0',
        fontWeight: 'bold'
    };

    const imageContainerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '20px'
    };

    const imageBoxStyle = {
        flex: '1',
        margin: '0 10px',
        textAlign: 'center'
    };

    const imageStyle = {
        width: '200px',
        height: '200px',
        borderRadius: '8px'
    };

    const titleStyle = {
        color: '#87CEEB',
        fontSize: '50px',
        marginBottom: '40px'
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>User Analytics</h1>
            <div style={boxContainerStyle}>
                <div style={boxStyle}>
                    <h2 style={headingStyle}>Documents Uploaded</h2>
                    <p style={numberStyle}>5</p>
                </div>
                <div style={boxStyle}>
                    <h2 style={headingStyle}>Users on Platform</h2>
                    <p style={numberStyle}>56</p>
                </div>
                <div style={boxStyle}>
                    <h2 style={headingStyle}>Documents Signed Off</h2>
                    <p style={numberStyle}>12</p>
                </div>
            </div>
            <div style={imageContainerStyle}>
                <div style={imageBoxStyle}>
                    <h2 style={headingStyle}>Users Statistics on User Engagement</h2>
                    <img src={Icon1} alt="Image 1" style={imageStyle} />
                </div>
                <div style={imageBoxStyle}>
                    <h2 style={headingStyle}>Documents Statistics that have been signed on</h2>
                    <img src={Icon2} alt="Image 2" style={imageStyle} />
                </div>
            </div>
        </div>
    );
}
