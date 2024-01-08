import React from 'react';
import ReactPlayer from 'react-player';

export function PremiumPlay(){
    return(
        <>
        <ReactPlayer 
            url={('https://youtu.be/JhUqf_fhgeA')}
            width='100%'
            height='100%'
            controls
        />
        <ReactPlayer 
            url={('https://youtu.be/eRXbeo17tSM')}
            width='100%'
            height='100%'
            controls
        />
        <ReactPlayer 
            url={('https://youtu.be/n8J9sBhAeZA')}
            width='100%'
            height='100%'
            controls
        />
        </>
    )
}