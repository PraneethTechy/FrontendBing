import React from 'react';

// Reusable component for each location details block
const LocationCard = ({ city, address, studios, businessEnquiries, jobOpenings, callTimings }) => (
    <div className="mb-8">
        <h3 className="text-2xl font-semibold tracking-wider lowercase mb-3">{city}</h3>
        <p className="text-sm leading-relaxed text-gray-700">{address}</p>
        
        {studios && (
            <>
                <h4 className="font-semibold mt-6 mb-2">ting studios</h4>
                <p className="text-sm leading-relaxed text-gray-700">{studios}</p>
            </>
        )}

        {businessEnquiries && (
            <div className="mt-6 text-sm text-gray-700">
                <p>For Business Enquiries:</p>
                <p className="font-semibold">{businessEnquiries.join(' / ')}</p>
            </div>
        )}
        {jobOpenings && (
            <div className="mt-4 text-sm text-gray-700">
                <p>For Job Openings:</p>
                <p className="font-semibold">{jobOpenings}</p>
            </div>
        )}
        {callTimings && (
            <div className="mt-4 text-sm text-gray-700">
                <p>Call Timings:</p>
                <p className="font-semibold">{callTimings}</p>
            </div>
        )}
    </div>
);

// SVG Icons for social media links
const SocialIcons = () => (
    <div className="flex justify-around items-center border-t border-b border-gray-300 py-4 my-8">
        {/* Placeholder for Mail Icon */}
        <a href="#" className="text-gray-600 hover:text-black"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></a>
        {/* Placeholder for Facebook Icon */}
        <a href="#" className="text-gray-600 hover:text-black"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg></a>
        {/* Placeholder for LinkedIn Icon */}
        <a href="#" className="text-gray-600 hover:text-black"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></a>
        {/* Placeholder for Instagram Icon */}
        <a href="#" className="text-gray-600 hover:text-black"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg></a>
        {/* Placeholder for YouTube Icon */}
        <a href="#" className="text-gray-600 hover:text-black"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
    </div>
);

const ContactPage = () => {
    const locations = [
        { city: 'mumbai', address: '19, Adi Marzban Path, Ballard Estate, Fort, Mumbai - 400 001.', studios: '71/73 Bhagwan Bhavan, Mint Road Lane, Fort, Mumbai - 400 001.', businessEnquiries: ['+91 98676 97283', '+91 98208 82644'], jobOpenings: '+91 7977463384', callTimings: '10am - 7pm IST.' },
        { city: 'chennai', address: '37 / 27, Karpagambal Nagar, Mylapore, Chennai - 600 004.', studios: 'New No.40, Old No.32, Karpagambal Nagar, Mylapore, Chennai - 600 004.', businessEnquiries: ['+91 44 4854 8824', '+91 98404 88884'], jobOpenings: '+91 98651 88884', callTimings: '10am - 7pm IST.' },
        { city: 'kochi', address: 'B2, V Square, Chembumukku, Kakkanad, Ernakulam - 682037.', businessEnquiries: ['+91 81299 59274', '+91 44 4854 8824'], jobOpenings: '+91 81299 59274' },
        { city: 'ahmedabad', address: 'Connekt 15th Floor, Gala Empire, Opp. T.V. Tower, Thaltej Drive In Road, Ahmedabad - 380054.', businessEnquiries: ['+91 99507 17687', '+91 98208 82644'], jobOpenings: '+91 22 3513 2003' },
        { city: 'bengaluru', address: 'No. 106, 2nd Floor, No.18, Sufiya Elite, Cunningham Road, Bengaluru - 560 052.' }
    ];




    return (
        <div className="bg-stone-50 min-h-screen p-8 md:p-12 font-mono">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="border-b-4 border-dotted border-black pb-4 mb-4">
                    <div className="flex items-center">
                        <h1 className="text-5xl font-extrabold tracking-tighter">
                            <span className="bg-black text-white px-3 py-1">contact</span> us
                        </h1>
                        {/* Placeholder for doodle */}
                    
                    </div>
                    <p className="text-xl text-gray-800 mt-4">#ReachOut</p>
                </header>

                {/* Locations Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 my-10 ">
                    <LocationCard {...locations[0]} />
                    <LocationCard {...locations[1]} />
                    <LocationCard {...locations[2]} />
                    <LocationCard {...locations[3]} />
                    {/* Bengaluru card is separate as it might span columns or be styled differently */}
                    <div className="sm:col-span-2 lg:col-span-1">
                       <LocationCard {...locations[4]} />
                    </div>
                </div>

                {/* Social Media Icons */}
                <SocialIcons />

                

            </div>
        </div>
    );
};

export default ContactPage;

