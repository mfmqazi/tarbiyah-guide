import React from 'react';
import { HeartHandshake, Scale, MessageCircle, Gift, Users, Shield, AlertTriangle, BookOpen, Sparkles } from 'lucide-react';

const MarriagePrep = () => {
    return (
        <div className="animate-fade-in py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-6">Marriage Preparation</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Preparing your daughter for the most significant partnership of her life according to the Sunnah.
                    </p>
                </div>

                {/* Preparing Your Daughter */}
                <section className="mb-20">
                    <h2 className="text-3xl font-serif font-bold text-emerald-800 mb-8">Preparing Your Daughter for Marriage</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-emerald-600">
                            <div className="flex items-center mb-4">
                                <MessageCircle className="text-emerald-600 mr-3" size={28} />
                                <h3 className="text-xl font-bold text-emerald-900">Conversations to Have</h3>
                            </div>
                            <ul className="space-y-3 text-slate-700">
                                <li>• <strong>Expectations:</strong> Discuss realistic expectations about marriage, household roles, and compromise</li>
                                <li>• <strong>Rights & Responsibilities:</strong> Teach her Islamic rights (mahr, kind treatment, financial support) and her duties (respect, obedience in good, managing the home)</li>
                                <li>• <strong>Intimacy:</strong> Have age-appropriate conversations about marital intimacy from an Islamic perspective</li>
                                <li>• <strong>Conflict Resolution:</strong> Teach her how to communicate effectively and resolve disagreements with wisdom</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-amber-500">
                            <div className="flex items-center mb-4">
                                <Sparkles className="text-amber-600 mr-3" size={28} />
                                <h3 className="text-xl font-bold text-emerald-900">Emotional Preparation</h3>
                            </div>
                            <p className="text-slate-700 mb-4">
                                Marriage is a major life transition. Help her understand that:
                            </p>
                            <ul className="space-y-2 text-slate-700">
                                <li>• Marriage requires patience, sacrifice, and emotional maturity</li>
                                <li>• Her husband is not perfect; neither is she</li>
                                <li>• Challenges are normal and can strengthen the bond</li>
                                <li>• Seeking help (from elders, counselors) is a sign of wisdom, not weakness</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Choosing a Spouse */}
                <section className="mb-20">
                    <h2 className="text-3xl font-serif font-bold text-emerald-800 mb-8">Choosing the Right Spouse</h2>

                    <div className="bg-emerald-900 text-white rounded-2xl p-10 mb-8">
                        <h3 className="text-2xl font-bold mb-4 text-amber-300">The Prophet's Criteria</h3>
                        <p className="text-emerald-100 mb-4 leading-relaxed">
                            The Prophet (PBUH) said: <span className="italic">"A woman is married for four things: her wealth, her family status, her beauty, and her religion. So you should marry the religious woman (otherwise) you will be a loser."</span> [Sahih Bukhari 5090]
                        </p>
                        <p className="text-emerald-100 leading-relaxed">
                            Similarly, for men: <span className="italic">"If there comes to you one whose religion and character you are pleased with, then marry (your daughter) to him. If you do not do so, there will be tribulation in the land and widespread corruption."</span> [Tirmidhi 1084]
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <div className="flex items-center mb-4">
                                <Scale className="text-emerald-600 mr-3" size={28} />
                                <h3 className="text-xl font-bold text-emerald-900">Deen & Character First</h3>
                            </div>
                            <p className="text-slate-700 mb-4">
                                Prioritize piety (Taqwa) and good manners (Akhlaq) over wealth, lineage, or looks. A man who fears Allah will treat your daughter with justice and mercy.
                            </p>
                            <p className="text-sm text-slate-600">
                                <strong>Key Questions:</strong> Does he pray regularly? How does he treat his parents? What is his reputation among friends? Is he honest in his dealings?
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <div className="flex items-center mb-4">
                                <AlertTriangle className="text-amber-600 mr-3" size={28} />
                                <h3 className="text-xl font-bold text-emerald-900">Red Flags to Watch For</h3>
                            </div>
                            <ul className="space-y-2 text-slate-700">
                                <li>• Inconsistent prayer or neglect of religious obligations</li>
                                <li>• Disrespect toward parents or elders</li>
                                <li>• Anger issues or controlling behavior</li>
                                <li>• Dishonesty or secrecy about important matters</li>
                                <li>• Excessive debt or financial irresponsibility</li>
                                <li>• Unwillingness to discuss important topics openly</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <div className="flex items-center mb-4">
                                <Users className="text-emerald-600 mr-3" size={28} />
                                <h3 className="text-xl font-bold text-emerald-900">Family Compatibility</h3>
                            </div>
                            <p className="text-slate-700 mb-4">
                                Marriage is not just between two individuals, but between two families. Consider:
                            </p>
                            <ul className="space-y-2 text-slate-700">
                                <li>• Shared values and lifestyle expectations</li>
                                <li>• Cultural compatibility (if relevant)</li>
                                <li>• Family dynamics and in-law relationships</li>
                                <li>• Geographic proximity and support systems</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <div className="flex items-center mb-4">
                                <BookOpen className="text-amber-600 mr-3" size={28} />
                                <h3 className="text-xl font-bold text-emerald-900">Istikhara & Seeking Guidance</h3>
                            </div>
                            <p className="text-slate-700 mb-4">
                                Teach your daughter to pray Salat al-Istikhara (the prayer for guidance) when considering a proposal. The Prophet (PBUH) taught this du'a for all important decisions.
                            </p>
                            <p className="text-sm text-slate-600 italic">
                                "O Allah, I seek Your guidance by virtue of Your knowledge, and I seek ability by virtue of Your power..." [Sahih Bukhari 1162]
                            </p>
                        </div>
                    </div>
                </section>

                {/* Consent */}
                <section className="mb-20">
                    <div className="bg-gradient-to-r from-amber-50 to-white p-10 rounded-2xl border-l-4 border-amber-600">
                        <div className="flex items-start">
                            <HeartHandshake className="text-amber-600 mr-4 flex-shrink-0" size={40} />
                            <div>
                                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Consent is Mandatory</h3>
                                <p className="text-slate-700 mb-4 leading-relaxed">
                                    Islam strictly forbids forced marriages. The Prophet (PBUH) said: <span className="italic">"A matron should not be given in marriage except after consulting her; and a virgin should not be given in marriage except after her permission."</span> [Sahih Bukhari 5136]
                                </p>
                                <p className="text-slate-700 mb-4 leading-relaxed">
                                    In another narration, a young woman came to the Prophet complaining that her father had married her off without her consent. The Prophet gave her the choice to annul the marriage or accept it. [Sunan an-Nasa'i 3269]
                                </p>
                                <p className="text-slate-700 font-bold text-emerald-800">
                                    Parents must facilitate, guide, and advise, but never coerce. Her "Yes" must be free and willing.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Engagement & Wedding */}
                <section className="mb-20">
                    <h2 className="text-3xl font-serif font-bold text-emerald-800 mb-8">The Engagement & Wedding Process</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <h4 className="text-xl font-bold text-emerald-900 mb-4">The Engagement Period</h4>
                            <p className="text-slate-700 mb-4">
                                The engagement (khitbah) is a promise to marry, not the marriage itself. During this time:
                            </p>
                            <ul className="space-y-2 text-slate-700">
                                <li>• The couple should get to know each other in a halal manner (with a mahram present)</li>
                                <li>• Keep the engagement period short (3-6 months is ideal)</li>
                                <li>• Avoid excessive physical contact or private meetings</li>
                                <li>• Use this time to discuss important topics: finances, children, career goals, living arrangements</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <h4 className="text-xl font-bold text-emerald-900 mb-4 flex items-center">
                                <Gift className="text-amber-600 mr-3" size={24} />
                                The Mahr (Bridal Gift)
                            </h4>
                            <p className="text-slate-700 mb-4">
                                The mahr is a mandatory gift from the groom to the bride, symbolizing his commitment and her honor. It is her right and belongs to her alone.
                            </p>
                            <ul className="space-y-2 text-slate-700">
                                <li>• The amount should be reasonable and within the groom's means</li>
                                <li>• Excessive dowries are discouraged in Islam</li>
                                <li>• The mahr can be paid immediately or deferred (or a combination)</li>
                                <li>• It can be money, gold, property, or even teaching Qur'an (as in one Hadith)</li>
                            </ul>
                            <p className="text-sm text-slate-600 italic mt-4">
                                "The most blessed marriage is the one with the least burden." [Bayhaqi]
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <h4 className="text-xl font-bold text-emerald-900 mb-4">The Wedding: Simplicity is Sunnah</h4>
                            <p className="text-slate-700 mb-4">
                                The Prophet's weddings were simple and modest. Avoid extravagance, debt, and cultural practices that contradict Islamic principles.
                            </p>
                            <ul className="space-y-2 text-slate-700">
                                <li>• The nikah (marriage contract) is the essential part, not the party</li>
                                <li>• A walimah (wedding feast) is recommended but should be simple</li>
                                <li>• Invite the poor and needy, not just the wealthy</li>
                                <li>• Avoid mixed-gender free-mixing, music, and extravagance</li>
                                <li>• Focus on barakah (blessings), not showing off</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Mother's Advice */}
                <div className="bg-amber-50 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden mb-20">
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <MessageCircle className="mx-auto text-amber-600 mb-6" size={48} />
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-8">Timeless Advice for Your Daughter</h2>
                        <p className="text-xl text-slate-700 italic mb-8 leading-relaxed">
                            "O my daughter, you are leaving the home you grew up in to a home you do not know, and to a companion you are not familiar with. Be a maid to him and he will be a slave to you. Preserve his household and wealth. Respect his family and friends. Be content with what he provides. Do not disobey his reasonable requests, and do not reveal his secrets. If he sleeps, let him rest. If he eats, be cheerful. Be mindful of his nose (smell good) and his eyes (look presentable). The more he sees of your beauty and smells of your fragrance, the more he will love you."
                        </p>
                        <p className="font-bold text-emerald-800">— Adapted from the advice of Umamah bint al-Harith to her daughter on her wedding day</p>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full border-8 border-white/50 rounded-3xl pointer-events-none"></div>
                </div>

                {/* Post-Marriage Support */}
                <section>
                    <h2 className="text-3xl font-serif font-bold text-emerald-800 mb-8 text-center">Your Role After Her Marriage</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-emerald-600">
                            <Shield className="text-emerald-600 mb-4" size={32} />
                            <h4 className="font-bold text-lg mb-3 text-emerald-900">Support, Don't Interfere</h4>
                            <p className="text-slate-600">
                                Be a source of comfort and wisdom, but allow them to solve their own minor conflicts to build resilience. Don't take sides or create division.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-amber-500">
                            <Users className="text-amber-600 mb-4" size={32} />
                            <h4 className="font-bold text-lg mb-3 text-emerald-900">Maintain Ties</h4>
                            <p className="text-slate-600">
                                Visit them, invite them, and keep the bond strong without overstaying your welcome. Respect their privacy and independence as a new family unit.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-emerald-600">
                            <Sparkles className="text-emerald-600 mb-4" size={32} />
                            <h4 className="font-bold text-lg mb-3 text-emerald-900">Make Du'a</h4>
                            <p className="text-slate-600">
                                Continue praying for the stability, love, and barakah in their marriage. Your du'a is one of the most powerful gifts you can give.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MarriagePrep;
