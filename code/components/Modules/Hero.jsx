import React from 'react';
import Image from 'next/image';

const Hero = ({ title, arrowPath, backgroundImage }) => {
    return (
        <div className="relative w-full bg-cover md:h-[800px] h-[538px]">
            <Image
                src={backgroundImage}
                fill={true}
                alt="Hero background"
                style={{ objectFit: 'cover' }}

            />

            <div className="absolute inset-0 flex flex-col justify-start items-center mt-[150px]">
                <h1 className="text-[40px] md:text-[56px] font-fraunces text-white tracking-widest mb-[120px] text-center">{title}</h1>
                <Image
                    src={arrowPath}
                    width={40}
                    height={40}
                    alt="Down arrow"
                />
            </div>
        </div>
    );
};

export default Hero;