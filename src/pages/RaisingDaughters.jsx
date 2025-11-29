import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Book } from 'lucide-react';

const RaisingDaughters = () => {
    return (
        <div className="animate-fade-in py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase mb-4 inline-block">
                        A Path to Paradise
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-6">Raising Daughters in Islam</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        "Whoever raises two daughters... he and I will enter Paradise like these two fingers." — Prophet Muhammad (PBUH)
                    </p>
                </div>

                {/* The Reward Section */}
                <div className="bg-emerald-900 text-white rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold mb-6 text-amber-400">The Immense Reward</h2>
                            <p className="text-lg text-emerald-100 mb-6 leading-relaxed">
                                In pre-Islamic Arabia, daughters were often seen as a burden. Islam came to revolutionize this mindset, elevating the status of daughters to be a source of mercy and a ticket to Jannah for their parents.
                            </p>
                            <p className="text-lg text-emerald-100 leading-relaxed">
                                Raising a daughter with kindness, providing for her, and educating her is an act of worship that protects parents from the Hellfire and grants them closeness to the Prophet (PBUH).
                            </p>
                        </div>
                        <div className="bg-emerald-800 p-8 rounded-2xl border border-emerald-600 shadow-lg">
                            <Star className="text-amber-400 mb-4" size={40} />
                            <h3 className="text-xl font-bold mb-3 text-white">Hadith of the Prophet (PBUH)</h3>
                            <p className="italic text-white font-serif text-lg leading-relaxed">
                                "Whoever has three daughters, or three sisters, or two daughters, or two sisters, and he keeps good company with them and fears Allah regarding them, then Paradise is for him."
                            </p>
                            <p className="mt-4 text-sm text-amber-300 font-bold">— Jami` at-Tirmidhi</p>
                        </div>
                    </div>
                    {/* Decorative pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                </div>

                {/* Holistic Upbringing Grid */}
                <div className="mb-20">
                    <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-10 text-center">A Holistic Approach</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-emerald-600">
                            <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                <Heart className="text-emerald-600" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Love & Self-Esteem</h3>
                            <p className="text-slate-600 mb-4">
                                Fathers play a crucial role. A daughter who receives love, respect, and validation from her father grows up with high self-esteem and is less likely to seek validation from wrong sources.
                            </p>
                            <p className="text-sm text-slate-500 font-medium">
                                Tip: Express your love verbally and be physically affectionate, just as the Prophet (PBUH) was with Fatimah (RA).
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-amber-500">
                            <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                <Book className="text-amber-600" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Education & Knowledge</h3>
                            <p className="text-slate-600 mb-4">
                                Empower her with both religious and secular knowledge. A well-educated Muslimah is an asset to her family and the Ummah. Look to Aisha (RA) as a prime example of a scholar.
                            </p>
                            <p className="text-sm text-slate-500 font-medium">
                                Tip: Encourage her questions and critical thinking. Connect her with female scholars and mentors.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-emerald-600">
                            <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                <Star className="text-emerald-600" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Modesty (Haya)</h3>
                            <p className="text-slate-600 mb-4">
                                Teach modesty not as a restriction, but as a crown and a protection. Help her understand the wisdom behind Hijab and modest conduct so she embraces it with conviction.
                            </p>
                            <p className="text-sm text-slate-500 font-medium">
                                Tip: Focus on the internal state of Haya (shyness/modesty before Allah) before focusing solely on the external dress.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action - Learn About Fatimah (RA) */}
                <div className="text-center mb-20">
                    <div className="bg-gradient-to-r from-emerald-900 to-emerald-700 rounded-2xl p-10 shadow-xl">
                        <h2 className="text-3xl font-serif font-bold text-white mb-4">
                            Learn from the Prophet's Example
                        </h2>
                        <p className="text-emerald-100 text-lg mb-6 max-w-2xl mx-auto">
                            Discover how Prophet Muhammad (PBUH) raised his beloved daughter Fatimah (RA) with love, respect, and wisdom, and how her marriage was conducted according to the Sunnah.
                        </p>
                        <Link
                            to="/fatima"
                            className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Read About Fatimah (RA) →
                        </Link>
                    </div>
                </div>

                {/* Practical Skills */}
                <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200">
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-6">Life Skills & Homemaking</h2>
                            <p className="text-slate-600 mb-6 text-lg">
                                While academic success is important, equipping daughters with practical life skills is Sunnah. The Mothers of the Believers managed their households with excellence.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center text-emerald-800 font-medium">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                                    Cooking and nutrition basics
                                </li>
                                <li className="flex items-center text-emerald-800 font-medium">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                                    Financial literacy and budgeting
                                </li>
                                <li className="flex items-center text-emerald-800 font-medium">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                                    Emotional intelligence and conflict resolution
                                </li>
                                <li className="flex items-center text-emerald-800 font-medium">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                                    Child-rearing and early development knowledge
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2">
                            <div className="rounded-2xl shadow-xl w-full h-80 bg-gradient-to-br from-emerald-100 via-amber-50 to-emerald-50 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <Heart className="text-emerald-600 mx-auto mb-4" size={64} />
                                    <p className="text-emerald-800 font-serif text-xl italic">
                                        "The best of you are those who are best to their families"
                                    </p>
                                    <p className="text-emerald-600 text-sm mt-2">— Prophet Muhammad (PBUH)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RaisingDaughters;
