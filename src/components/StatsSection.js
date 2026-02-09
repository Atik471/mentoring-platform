'use client';

export default function StatsSection() {
    const stats = [
        { number: '6,800+', label: 'Available mentors' },
        { number: '36,900+', label: 'Matches made' },
        { number: '130+', label: 'Countries represented' },
    ];

    return (
        <section className="bg-transparent py-16 px-4" style={{ color: '#fbeedd' }}>
            <div className="max-w-7xl mx-auto">
                <div className="bg-gradient-to-r from-teal-900/40 to-teal-800/40 backdrop-blur-sm rounded-2xl border border-white/10 px-8 py-12 md:px-16 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center"
                            >
                                <div
                                    className="text-5xl md:text-6xl font-bold mb-2"
                                    style={{ fontFamily: '"Shippori Mincho", serif', fontWeight: 600 }}
                                >
                                    {stat.number}
                                </div>
                                <div className="text-base md:text-lg opacity-90">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
