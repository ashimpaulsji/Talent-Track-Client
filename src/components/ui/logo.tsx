import React from 'react';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
    return (
        <div className={`logo ${className}`}>
            <h2 className="text-3xl font-extrabold tracking-tight flex items-center space-x-1">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                    Talent
                </span>
                <span className="text-indigo-800">Track</span>
                <span className="ml-1 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-pulse"></span>
            </h2>
        </div>
    );
};

export default Logo;