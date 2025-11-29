import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Heart, Shield } from 'lucide-react';

const Home = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative bg-emerald-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                            Raising the Next Generation of <span className="text-amber-500">Believers</span>
                        </h1>
                        <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                            A comprehensive guide to Islamic parenting, Tarbiyah, and preparing your children for a life of faith and success in this world and the Hereafter.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/tarbiyah" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center">
                                Start the Journey <ArrowRight className="ml-2" size={20} />
                            </Link>
                            <Link to="/resources" className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center">
                                Browse Resources
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Principles */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-emerald-900 mb-4">The Foundation of Tarbiyah</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Raising children in Islam is an act of worship. It requires patience, knowledge, and a deep connection with Allah.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all group">
                            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                                <Heart className="text-emerald-600 group-hover:text-white" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-emerald-900 mb-3">Nurturing with Love</h3>
                            <p className="text-slate-600">
                                Following the Sunnah of the Prophet (PBUH) in showing affection, mercy, and kindness to children to build strong emotional bonds.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all group">
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                                <BookOpen className="text-amber-600 group-hover:text-white" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-emerald-900 mb-3">Knowledge & Education</h3>
                            <p className="text-slate-600">
                                Instilling the love of the Quran and Sunnah early on, while ensuring a balanced education that prepares them for the world.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all group">
                            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                                <Shield className="text-emerald-600 group-hover:text-white" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-emerald-900 mb-3">Protection & Guidance</h3>
                            <p className="text-slate-600">
                                Safeguarding their fitrah (innate nature) from negative influences and guiding them through the challenges of the modern world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Quote */}
            <section className="py-20 bg-emerald-50">
                <div className="container mx-auto px-4 text-center">
                    <blockquote className="max-w-4xl mx-auto">
                        <p className="text-3xl md:text-4xl font-serif italic text-emerald-800 mb-8 leading-relaxed">
                            "The best gift a father can give to his child is good manners (Tarbiyah)."
                        </p>
                        <footer className="text-amber-600 font-bold text-lg">— Prophet Muhammad (PBUH) [Tirmidhi]</footer>
                    </blockquote>
                </div>
            </section>
        </div>
    );
};

export default Home;
