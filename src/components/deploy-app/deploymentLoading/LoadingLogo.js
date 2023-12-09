import React from 'react';

function LoadingLogo() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
            zIndex: '9999', // Ensure the loading logo appears above everything else
            backdropFilter: 'blur(5px)', // Add this line
        }}>
            <img src="/mainlogo.png" alt="Loading..." style={{
                animation: 'spin 2s linear infinite',
                '@keyframes spin': {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                },
                width: '100px',
                height: '100px'
            }} />
        </div>
    );
}

export default LoadingLogo;