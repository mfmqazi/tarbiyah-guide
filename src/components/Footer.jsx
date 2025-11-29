import React from 'react';
import { Heart, Mail, Github, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-emerald-950 text-slate-300 py-12 mt-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-2xl font-serif text-white mb-4">
                            Tarbiyah<span className="text-amber-500">Guide</span>
                        </h3>
                        <p className="mb-4 text-slate-400">
                            A comprehensive resource for Muslim parents dedicated to raising righteous children according to the Quran and Sunnah.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/tarbiyah" className="hover:text-amber-500 transition-colors">General Tarbiyah</a></li>
                            <li><a href="/daughters" className="hover:text-amber-500 transition-colors">Raising Daughters</a></li>
                            <li><a href="/marriage-prep" className="hover:text-amber-500 transition-colors">Marriage Preparation</a></li>
                            <li><a href="/resources" className="hover:text-amber-500 transition-colors">Recommended Books</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
                        <p className="flex items-center mb-2">
                            <Mail size={18} className="mr-2 text-amber-500" />
                            contact@tarbiyahguide.com
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={24} /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={24} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-emerald-900 mt-10 pt-6 text-center text-sm text-slate-500">
                    <p className="flex items-center justify-center">
                        Made with <Heart size={16} className="mx-1 text-red-500" /> for the Ummah. &copy; {new Date().getFullYear()} TarbiyahGuide.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
