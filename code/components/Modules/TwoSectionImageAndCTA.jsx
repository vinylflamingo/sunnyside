import React from 'react';

const TwoSectionImageAndCTA = ({
    title,
    description,
    ctaText,
    ctaUrl,
    imageUrl,
    flipSides = false,
}) => {
    return (
        <div className="w-full flex items-center justify-start">
            <div className="w-full h-[312px] md:h-[600px] grid grid-cols-1 md:grid-cols-2">
                <div
                    className={`${flipSides ? 'md:order-last' : ''
                        } w-full h-full bg-cover bg-center bg-no-repeat md:object-cover`}
                    style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
                <div className="w-full h-500px; p-6 flex flex-col justify-center">
                    <h2 className="text-xl font-semibold mb-4">{title}</h2>
                    <p className="text-base mb-4">{description}</p>
                    <a href={ctaUrl} className="text-blue-600 font-semibold">
                        {ctaText}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TwoSectionImageAndCTA;
