'use client';

import Button from './Button';
import Image from 'next/image';

export default function OneOffSessionSection() {
    return (
        <section className="py-16 px-4 md:px-20 bg-background">
            <div className="max-w-7xl mx-auto bg-[#0f3f35] rounded-lg p-12 py-40 md:p-16 text-white text-center shadow-xl">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Free Trial */}
                    <div className="flex flex-col items-center group">
                        <div className="mb-6 opacity-90 transition-transform duration-300">
                            <Image src="/solar_hand-money-bold-duotone.svg" alt="Free Trial" width={64} height={64} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 tracking-tight">Free Trial</h3>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-[200px]">
                            Get a free trial with every mentor
                        </p>
                    </div>

                    {/* No Strings */}
                    <div className="flex flex-col items-center group">
                        <div className="mb-6 opacity-90 transition-transform duration-300">
                            <Image src="/solar_link-broken-bold-duotone.svg" alt="No Strings" width={64} height={64} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 tracking-tight">No Strings</h3>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-[250px]">
                            Cancelling is simple and can be done anytime
                        </p>
                    </div>

                    {/* Fully Vetted */}
                    <div className="flex flex-col items-center group">
                        <div className="mb-6 opacity-90 transition-transform duration-300">
                            <Image src="/solar_high-quality-bold-duotone.svg" alt="Fully Vetted" width={64} height={64} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 tracking-tight">Fully Vetted</h3>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-[280px]">
                            We demand the highest quality service from our mentors
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <Button
                        variant="primary"
                        className="bg-gradient-to-r from-[#008f9c] to-[#00a8cc] hover:from-[#007f8c] hover:to-[#0098bc] text-white px-10 py-3 rounded-full font-bold text-lg shadow-lg border-0 transition-transform"
                    >
                        Find my mentor
                    </Button>

                    <a href="#" className="flex items-center text-gray-300 hover:text-white hover:underline gap-1 text-sm font-medium transition-colors mt-2">
                        Become a mentor
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
