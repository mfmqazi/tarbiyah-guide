import React from 'react';
import { BookOpen, ScrollText, Heart, Star, Shield, Sparkles } from 'lucide-react';

const Fatima = () => {
    return (
        <div className="animate-fade-in py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase mb-4 inline-block">
                        Sayyidat Nisa' al-Jannah
                    </span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-emerald-900 mb-4">
                        Fatimah bint Muhammad (RA)
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        The Leader of the Women of Paradise — A model of piety, patience, and devotion
                    </p>
                </div>

                {/* Early Life */}
                <section className="mb-16">
                    <h2 className="text-3xl font-serif font-bold text-emerald-800 mb-6">Early Life & Upbringing</h2>
                    <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-emerald-600">
                        <p className="text-slate-700 mb-4 leading-relaxed">
                            Fatimah (RA) was born in Makkah approximately five years before the Prophethood, making her the youngest daughter of Prophet Muhammad (PBUH) and Khadijah (RA). She was given the title <strong>"Az-Zahra"</strong> (The Radiant One) due to her luminous face and pure character.
                        </p>
                        <p className="text-slate-700 mb-4 leading-relaxed">
                            Growing up in the household of the Prophet, Fatimah witnessed the earliest revelations and the persecution of Muslims in Makkah. At a young age, she demonstrated remarkable courage—when the Quraysh threw filth on the Prophet while he was praying, young Fatimah rushed to remove it and confronted the aggressors, showing her fierce love and protection for her father.
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                            The loss of her mother Khadijah (RA) when Fatimah was around 10 years old deeply affected her. She took on the role of caring for the Prophet, earning her the title <strong>"Umm Abiha"</strong> (Mother of her Father) due to her tender care and concern for him.
                        </p>
                    </div>
                </section>

                {/* How the Prophet Raised Her */}
                <section className="mb-16">
                    <h2 className="text-3xl font-serif font-bold text-emerald-800 mb-8">How the Prophet (PBUH) Raised Fatimah</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Affection & Respect */}
                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                            <div className="flex items-center mb-4">
                                <Heart className="text-emerald-600 mr-3" size={32} />
                                <h3 className="text-xl font-bold text-emerald-900">Affection & Respect</h3>
                            </div>
                            <p className="text-slate-700 mb-3">
                                The Prophet (PBUH) showed immense love and respect for Fatimah. Whenever she entered the room, he would stand up to greet her, kiss her forehead, and seat her in his own place—a gesture of profound honor.
                            </p>
                            <p className="text-sm text-slate-600 italic">
                                "Fatimah is a part of me. Whoever angers her, angers me." — Prophet Muhammad (PBUH) [Sahih Bukhari 3714]
                            </p>
                        </div>

                        {/* Education */}
                        <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                            <div className="flex items-center mb-4">
                                <BookOpen className="text-amber-600 mr-3" size={32} />
                                <h3 className="text-xl font-bold text-emerald-900">Education & Knowledge</h3>
                            </div>
                            <p className="text-slate-700 mb-3">
                                Fatimah was taught the Qur'an, Islamic jurisprudence, and the etiquettes of worship directly by the Prophet. She was known for her deep understanding of the religion and her eloquent speech.
                            </p>
                            <p className="text-sm text-slate-600 italic">
                                The Prophet would confide in her secrets and glad tidings, including the news of his impending death and her status as the first of his family to join him.
                            </p>
                        </div>

                        {/* Character Development */}
                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                            <div className="flex items-center mb-4">
                                <Star className="text-emerald-600 mr-3" size={32} />
                                <h3 className="text-xl font-bold text-emerald-900">Humility & Generosity</h3>
                            </div>
                            <p className="text-slate-700 mb-3">
                                Despite being the daughter of the Prophet, Fatimah lived a life of simplicity. She would grind grain with her own hands, fetch water, and perform household chores. She was known to give away her food to the needy, even when her own family was hungry.
                            </p>
                            <p className="text-sm text-slate-600 italic">
                                "Fatimah abstained from the world and its adornments." — Ibn Sa'd, Tabaqat
                            </p>
                        </div>

                        {/* Spiritual Training */}
                        <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                            <div className="flex items-center mb-4">
                                <Sparkles className="text-amber-600 mr-3" size={32} />
                                <h3 className="text-xl font-bold text-emerald-900">Spiritual Training</h3>
                            </div>
                            <p className="text-slate-700 mb-3">
                                The Prophet taught Fatimah specific du'as and dhikr. When she complained of exhaustion from housework, he taught her the <strong>Tasbih of Fatimah</strong>: 33x Subhan Allah, 33x Alhamdulillah, 34x Allahu Akbar before sleep.
                            </p>
                            <p className="text-sm text-slate-600 italic">
                                "Shall I not teach you something better than a servant?" — Prophet Muhammad (PBUH) [Sahih Bukhari 3705]
                            </p>
                        </div>
                    </div>
                </section>

                {/* Marriage to Ali */}
                <section className="mb-16">
                    <h2 className="text-3xl font-serif font-bold text-emerald-800 mb-8">The Marriage to Ali ibn Abi Talib (RA)</h2>

                    {/* Divine Decree */}
                    <div className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white rounded-2xl p-10 mb-8">
                        <h3 className="text-2xl font-bold mb-4 text-amber-300">A Divinely Ordained Union</h3>
                        <p className="text-emerald-100 mb-4 leading-relaxed">
                            Before Ali proposed, several prominent Companions including Abu Bakr and Umar (RA) sought Fatimah's hand in marriage. The Prophet politely declined, saying, "Her matter is in the hands of her Lord." This indicated that Allah had already decreed her marriage to Ali.
                        </p>
                        <p className="text-emerald-100 leading-relaxed italic">
                            "If Ali had not existed, there would have been no suitable match for Fatimah." — Narrated in various sources
                        </p>
                    </div>

                    {/* The Proposal Process */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <h4 className="text-xl font-bold text-emerald-900 mb-4 flex items-center">
                                <ScrollText className="text-amber-600 mr-3" size={24} />
                                Ali's Humble Proposal
                            </h4>
                            <p className="text-slate-700 mb-4">
                                Ali (RA), despite being the cousin of the Prophet and one of the earliest Muslims, was hesitant to propose due to his poverty. He owned little more than a shield and a camel. Encouraged by others, he finally approached the Prophet, though his shyness made it difficult to speak.
                            </p>
                            <p className="text-slate-700">
                                The Prophet, recognizing Ali's intent, asked: <span className="italic">"Have you come to propose for Fatimah?"</span> Ali affirmed, and the Prophet smiled, pleased with the proposal.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <h4 className="text-xl font-bold text-emerald-900 mb-4 flex items-center">
                                <Heart className="text-emerald-600 mr-3" size={24} />
                                Fatimah's Consent
                            </h4>
                            <p className="text-slate-700 mb-4">
                                The Prophet went to Fatimah and said: <span className="italic">"Ali ibn Abi Talib has proposed to you. What do you say?"</span> Fatimah remained silent, lowering her gaze—a sign of modesty and consent in Islamic tradition.
                            </p>
                            <p className="text-slate-700 font-bold text-emerald-800">
                                This established a crucial principle: <strong>A woman's consent is mandatory for marriage.</strong> Her silence was understood as approval, but she was given the choice.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <h4 className="text-xl font-bold text-emerald-900 mb-4 flex items-center">
                                <Star className="text-amber-600 mr-3" size={24} />
                                The Simple Mahr (Dowry)
                            </h4>
                            <p className="text-slate-700 mb-4">
                                The Prophet asked Ali: <span className="italic">"Do you have anything to give as mahr?"</span> Ali replied that he had only his shield. The Prophet instructed him to sell it, and the mahr was set at approximately 480 dirhams (some reports say 500).
                            </p>
                            <p className="text-slate-700">
                                This simplicity reflects the Sunnah: <strong>"The best marriage is the one with the least burden."</strong> The Prophet emphasized that excessive dowries and lavish weddings are contrary to Islamic teachings.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <h4 className="text-xl font-bold text-emerald-900 mb-4 flex items-center">
                                <Shield className="text-emerald-600 mr-3" size={24} />
                                The Wedding Ceremony
                            </h4>
                            <p className="text-slate-700 mb-4">
                                The marriage took place in the year 2 AH (after Hijrah), approximately 10 months after the Battle of Badr. The wedding was modest, with a simple feast (walimah) prepared by the Ansar (Helpers of Madinah). Sa'd ibn Ubadah donated a sheep, and others contributed dates and barley.
                            </p>
                            <p className="text-slate-700 mb-4">
                                The Prophet himself recited the marriage contract (nikah). After the ceremony, he made du'a for the couple: <span className="italic">"O Allah, bless them, bless their union, and bless their offspring."</span>
                            </p>
                            <p className="text-slate-700 font-bold text-emerald-800">
                                The household items given to Fatimah included: a bed, a pillow stuffed with palm fibers, a water skin, and a grinding stone—reflecting a life of simplicity and contentment.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Married Life */}
                <section className="mb-16">
                    <h2 className="text-3xl font-serif font-bold text-emerald-800 mb-6">Married Life & Partnership</h2>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                        <p className="text-slate-700 mb-4 leading-relaxed">
                            Fatimah and Ali's marriage was marked by mutual respect, love, and shared hardship. They lived in a small house next to the Prophet's quarters in Madinah. Their early years were characterized by severe poverty—Ali worked as a laborer, and Fatimah managed the household with minimal resources.
                        </p>
                        <p className="text-slate-700 mb-4 leading-relaxed">
                            Despite their struggles, they never complained. Fatimah would grind grain until her hands blistered, and Ali would draw water from wells until his shoulders ached. When Fatimah once asked the Prophet for a servant to help with housework, he instead taught her the Tasbih of Fatimah, saying spiritual strength is better than worldly comfort.
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                            Their union was blessed with four children: <strong>Hasan, Husayn, Zaynab, and Umm Kulthum</strong>. Through Hasan and Husayn, the lineage of the Prophet continues to this day.
                        </p>
                    </div>
                </section>

                {/* Legacy */}
                <section className="mb-16">
                    <h2 className="text-3xl font-serif font-bold text-emerald-800 mb-6">Legacy & Lessons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-emerald-900 text-white p-8 rounded-xl">
                            <h4 className="text-xl font-bold mb-4 text-amber-300">Her Status</h4>
                            <p className="text-emerald-100 mb-3">
                                The Prophet (PBUH) said: <span className="italic">"Fatimah is the leader of the women of Paradise."</span> [Sahih Muslim 2450]
                            </p>
                            <p className="text-emerald-100">
                                She is one of the four greatest women in Islam, alongside Maryam (Mary), Asiya (wife of Pharaoh), and Khadijah (RA).
                            </p>
                        </div>

                        <div className="bg-amber-50 p-8 rounded-xl border border-amber-100">
                            <h4 className="text-xl font-bold mb-4 text-emerald-900">Lessons for Today</h4>
                            <ul className="space-y-2 text-slate-700">
                                <li>• <strong>Simplicity:</strong> Contentment with little is true wealth</li>
                                <li>• <strong>Consent:</strong> A woman's choice in marriage is sacred</li>
                                <li>• <strong>Partnership:</strong> Marriage is mutual support through hardship</li>
                                <li>• <strong>Spirituality:</strong> Dhikr and du'a sustain the soul</li>
                                <li>• <strong>Humility:</strong> Status doesn't exempt one from hard work</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Sources */}
                <div className="bg-slate-100 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-emerald-900 mb-4">Authentic Sources</h3>
                    <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Sahih Bukhari (3714, 3705, 5230)</li>
                        <li>• Sahih Muslim (2450, 2449)</li>
                        <li>• Jami' at-Tirmidhi (3868, 3869)</li>
                        <li>• Sunan Abu Dawud (2129)</li>
                        <li>• Tabaqat Ibn Sa'd (Vol. 8)</li>
                        <li>• Siyar A'lam al-Nubala by Imam al-Dhahabi</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Fatima;
