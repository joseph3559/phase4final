import React, { useEffect, useRef } from 'react'
import vida2 from '../assets/videos/vida2.mp4'


const MeetMoringa = () => {
    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);
    return (
        <div name='moringa' className='w-full my-32 h-screen'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h1 className='text-6xl font-bold text-white text-ellipsis no-underline bg-none'>Meet MoringaNFT.</h1>
                    <p className='text-3xl py-2 text-white'>The NFT marketplace with everything for everyone.</p>
                </div>

                <div className='grid md:grid-cols-3 gap-2 px-2 text-center mt-5'>
                    <div className='border py-8 rounded-xl shadow-xl bg-slate-300' >
                        <p className='text-6xl font-bold text-blue-900'>855K+</p>
                        <p className='mt-2 text-3xl font-bold'>Arts</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl bg-slate-300' >
                        <p className='text-6xl font-bold  text-blue-900'>76M+</p>
                        <p className='mt-2 text-3xl font-bold'>Collectibles</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl bg-slate-300' >
                        <p className='text-6xl font-bold  text-blue-900'>46K+</p>
                        <p className='mt-2 text-3xl font-bold'>NFTs</p>
                    </div>
                </div>

                <div className='justify-center m-auto min-w-min max-w-screen-lg p-10'>
                    <video
                        style={{ maxWidth: "100%", width: "978px", height: "350px", margin: "0 auto"}}
                        playsInline
                        loop
                        muted
                        controls={false}
                        alt="All the devices"
                        src={vida2}
                        ref={videoEl}
                        className='w-full h-full object-cover border-4 rounded-3xl border-[#ff6600]'
                    />
                </div>

            </div>
        </div>
    )
}

export default MeetMoringa