import React from 'react';
import Svg, { ClipPath, Mask, Circle, Defs, G, Path, Rect } from 'react-native-svg';

export const LeftArrowBlackIcon = () => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M15 19.92L8.48 13.4C7.71 12.63 7.71 11.37 8.48 10.6L15 4.07999" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    );
};

export const LeftArrowWhiteIcon = () => {
    return (
        <Svg
            width={41}
            height={40}
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G filter="url(#filter0_b_4_911)">
                <Rect
                    width={40.8696}
                    height={40}
                    rx={20}
                    fill="#fff"
                    fillOpacity={0.1}
                />
            </G>
            <Path
                d="M23 27.92l-6.52-6.52c-.77-.77-.77-2.03 0-2.8L23 12.08"
                stroke="#fff"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Defs></Defs>
        </Svg>
    );
};