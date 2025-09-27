import React, { useState, useEffect, useRef } from 'react';

// SVG component for the Apple logo
const AppleLogo = () => (
  <svg className="h-10 w-10 text-black inline-block ml-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.59,13.15a2.5,2.5,0,0,0-3.3,1.5,2.47,2.47,0,0,0-1.7,2.6,2.48,2.48,0,0,0,2.5,2.5c1.4,0,2-.8,3.2-1a2.4,2.4,0,0,1,1.5-2.2A2.53,2.53,0,0,0,15.59,13.15Z" />
    <path d="M15.4,12.55a2.51,2.51,0,0,1,1-2.1,2.44,2.44,0,0,0-2.1-1.2,4.42,4.42,0,0,0-3.5,2,2.41,2.41,0,0,0-1.2,2.1,4.69,4.69,0,0,0,3.3,4.5,2.43,2.43,0,0,0,2.5-2.6A4.3,4.3,0,0,1,15.4,12.55Z" />
    <image href="https://placehold.co/40x40/FFEB3B/000000?text=" x="0" y="0" height="24" width="24" />
  </svg>
);


const V8 = () => {
    // Data for the job cards
    const jobs = [
        {
            title: 'COPYWRITER',
            image: 'https://placehold.co/400x300/f9f9f9/000000?text=Copywriter+Sketch',
            description: [
                'Loner with dark circles, addicted to words, allergic to grammatical errors, obsessed with sentence structures and drools at the sight of a great advertisement.',
                'The subject is deemed as a threat to the cliche-lovers and people with a flippant attitude towards language.'
            ],
        },
        {
            title: 'VIDEOGRAPHER',
            image: 'https://placehold.co/400x300/f9f9f9/000000?text=Videographer+Sketch',
            description: [
                "Whether you're as talented as Steven Spielberg or not, as long you believe you can pull off something 'amaze' if we gave you a billion $ budget, then great, we need some believers here."
            ],
        },
        {
            title: 'VISUALIZER',
            image: 'https://placehold.co/400x300/f9f9f9/000000?text=Visualizer+Sketch',
            description: [
                'Quirky fellow with unkempt hair, obsessed with colour combinations, has design tools sticking out of all pockets, doodles on any available surface and dances with glee at the sight of great design.',
                'The subject has total disregard to anything that has lack of design - including humans.'
            ],
        },
        {
            title: 'CLIENT SERVICING',
            image: 'https://placehold.co/400x300/f9f9f9/000000?text=Client+Servicing+Sketch',
            description: [
                'The subject has total disregard to anything that has lack of design - including humans.'
            ],
        },
    ];

    const itemsToShow = 3;
    const itemsToClone = itemsToShow;
    const loopedJobs = [...jobs, ...jobs.slice(0, itemsToClone)];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const autoScrollInterval = useRef(null);

    const handleNext = () => {
        setIsTransitioning(true);
        setCurrentIndex(prev => prev + 1);
    };
    
    const handlePrev = () => {
        setIsTransitioning(true);
        setCurrentIndex(prev => prev - 1);
    };

    const startAutoScroll = () => {
        stopAutoScroll();
        autoScrollInterval.current = setInterval(handleNext, 3000); // 3-second interval for slow scroll
    };

    const stopAutoScroll = () => {
        if (autoScrollInterval.current) {
            clearInterval(autoScrollInterval.current);
        }
    };

    useEffect(() => {
        if (currentIndex === jobs.length) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 1000); // Must match transition duration
            return () => clearTimeout(timer);
        } else if (currentIndex < 0) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(jobs.length - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, jobs.length]);
    
    useEffect(() => {
        if (!isTransitioning) {
            // A minimal delay to allow the DOM to update before re-enabling transition
            setTimeout(() => {
                setIsTransitioning(true);
            }, 50);
        }
    }, [isTransitioning]);


    useEffect(() => {
        startAutoScroll();
        return () => stopAutoScroll();
    }, []);


    return (
        <section className="relative h-screen w-full bg-gray-100 p-8 font-mono overflow-y-hidden">
            {/* Header Section */}
            <header className="flex flex-col md:flex-row justify-between items-start mb-10">
                {/* Left Header */}
                <div className='text-left'>
                    <h1 className='text-5xl font-bold tracking-tighter'>
                        <span className="bg-[#fffb00] px-2">ting</span> classifieds
                    </h1>
                    <p className='pt-2 text-gray-600'>#AllWork #AllPlay #JackWho?</p>
                    <p className='mt-2 font-semibold'>To apply at ting <a href="#" className="underline font-bold">CLICK HERE</a></p>
                </div>

                {/* Right Header (Quote) */}
                <div className='mt-8 md:mt-0 text-right flex items-start'>
                    <div className='mr-2'>
                        <p className="italic">"because the people who are</p>
                        <p className='font-bold text-2xl tracking-tight'>crazy enough to think</p>
                        <p className="italic">they can change the world,</p>
                        <p className='font-normal text-xl'>are the ones who do."</p>
                        <p className='text-gray-500'>- Apple Inc.</p>
                    </div>
                     <img src="https://img.icons8.com/ios-filled/50/000000/mac-os.png" alt="Apple Logo" className="h-12 w-12 mt-10"/>
                </div>
            </header>

            {/* Carousel Section */}
            <div className="relative w-full max-w-6xl mx-auto" onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll}>
                <div className="overflow-hidden">
                    <div
                        className="flex"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                            transition: isTransitioning ? 'transform 1s ease-in-out' : 'none'
                        }}
                    >
                        {loopedJobs.map((job, index) => (
                            <div key={index} className="w-1/3 flex-shrink-0 px-4">
                                <div className="bg-white w-full">
                                    <div className="bg-[#fffb00] text-center py-2">
                                        <h2 className="font-bold tracking-widest">{job.title}</h2>
                                    </div>
                                    <div className="border-2 border-t-0 border-black p-2">
                                        <div className="border border-black">
                                            <img src={job.image} alt={job.title} className="w-full h-auto" />
                                        </div>
                                        <div className="bg-black text-white text-center py-1 mt-2">
                                            <p className="tracking-widest text-sm">SUSPECT</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mx-auto mt-4 px-2 text-left">
                                     {job.description.map((line, i) => (
                                         <p key={i} className="mb-4 text-gray-700 text-sm">{line}</p>
                                     ))}
                                     <p className='mt-6 font-semibold text-sm'>To apply <a href="#" className="underline font-bold">CLICK HERE</a></p>
                                 </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button onClick={handlePrev} className="absolute top-1/2 left-0 md:-left-12 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button onClick={handleNext} className="absolute top-1/2 right-0 md:-right-12 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </section>
    );
}

export default V8;

