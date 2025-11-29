import React from 'react';
import { CheckCircle, BookOpen, Heart, Shield, Users, Lightbulb } from 'lucide-react';

const GeneralTarbiyah = () => {
    return (
        <div className="animate-fade-in py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-6">
                        General Tarbiyah
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Comprehensive guidance rooted in the Qur'an, Sunnah, and the scholarly works of Dr. Yasir Qadhi, Ibn al-Qayyim, and classical jurists.
                    </p>
                </div>

                {/* Quranic Foundation */}
                <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 mb-16 border border-emerald-100">
                    <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-6">The Quranic Foundation</h2>
                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                        Allah (SWT) commands us in the Qur'an: <span className="font-bold italic">"O you who have believed, protect yourselves and your families from a Fire whose fuel is people and stones..."</span> (Qur'an 66:6). This verse establishes that parents are responsible for the spiritual protection and guidance of their children.
                    </p>
                    <p className="text-slate-700 mb-4 leading-relaxed">
                        Luqman's advice to his son (Qur'an 31:13-19) provides a comprehensive model of Islamic parenting:
                    </p>
                    <ul className="space-y-3 text-slate-700">
                        <li className="flex items-start">
                            <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                            <span><strong>Tawheed first:</strong> "Do not associate anything with Allah" (31:13)</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                            <span><strong>Gratitude to parents:</strong> Teaching children to honor their parents (31:14)</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                            <span><strong>Accountability:</strong> "Even if it is the weight of a mustard seed..." Allah knows all (31:16)</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                            <span><strong>Prayer & righteousness:</strong> Establish prayer and enjoin good (31:17)</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                            <span><strong>Humility & moderation:</strong> "Do not turn your cheek in contempt..." (31:18-19)</span>
                        </li>
                    </ul>
                </div>

                {/* Core Principles */}
                <div className="mb-20">
                    <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-10 text-center">Foundational Pillars of Tarbiyah</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-emerald-600">
                            <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                <Heart className="text-emerald-700" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Lead by Example (Qudwah)</h3>
                            <p className="text-slate-600 mb-4">
                                Children are keen observers. The Prophet (PBUH) said: <span className="italic">"All of you are shepherds and each of you is responsible for his flock"</span> (Bukhari 893). Parents must embody the values they wish to instill—honesty, prayer, kindness, and patience.
                            </p>
                            <p className="text-sm text-slate-500">
                                <strong>Practical Tip:</strong> Let your children see you praying Tahajjud, giving charity, and treating others with respect. Actions speak louder than lectures.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-amber-500">
                            <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                <BookOpen className="text-amber-700" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4">The Power of Du'a</h3>
                            <p className="text-slate-600 mb-4">
                                Never underestimate the supplication of a parent. The Prophet (PBUH) taught us: <span className="italic">"Three supplications are answered without doubt: the supplication of the oppressed, the supplication of the traveler, and the supplication of the parent for their child"</span> (Tirmidhi 1905).
                            </p>
                            <p className="text-sm text-slate-500">
                                <strong>Recommended Du'a:</strong> "O Allah, make them righteous, guide them, and protect them from all evil."
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-emerald-600">
                            <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                <Shield className="text-emerald-700" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Trust & Communication</h3>
                            <p className="text-slate-600 mb-4">
                                Dr. Yasir Qadhi emphasizes that the absence of trust can lead to disastrous consequences, as seen in the story of Yusuf (AS) whose brothers concealed their plot from their father (Qur'an 12:8-18).
                            </p>
                            <p className="text-sm text-slate-500">
                                <strong>Practical Tip:</strong> Create a judgment-free zone where children feel safe sharing their struggles, doubts, and questions.
                            </p>
                        </div>

                        {/* Pillar 4 */}
                        <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-amber-500">
                            <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                <Users className="text-amber-700" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Teaching Aqeedah</h3>
                            <p className="text-slate-600 mb-4">
                                The first and most important lesson is Tawheed—the Oneness of Allah. Ibn al-Qayyim wrote that a child's heart is like a blank slate; parents must fill it with the love of Allah and His Messenger before the world fills it with distractions.
                            </p>
                            <p className="text-sm text-slate-500">
                                <strong>Start Early:</strong> Teach "La ilaha illallah" as their first words, explain Allah's names, and connect daily events to His wisdom.
                            </p>
                        </div>

                        {/* Pillar 5 */}
                        <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-emerald-600">
                            <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                <Heart className="text-emerald-700" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Love for the Prophet (PBUH)</h3>
                            <p className="text-slate-600 mb-4">
                                Instill deep love and reverence for the Prophet Muhammad (PBUH). Share stories of his mercy, bravery, and character. The Prophet said: <span className="italic">"None of you truly believes until I am more beloved to him than his father, his child, and all of mankind"</span> (Bukhari 15).
                            </p>
                            <p className="text-sm text-slate-500">
                                <strong>Practical Tip:</strong> Read Seerah together, celebrate Mawlid with gratitude, and send Salawat daily as a family.
                            </p>
                        </div>

                        {/* Pillar 6 */}
                        <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-amber-500">
                            <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                <Lightbulb className="text-amber-700" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Balanced Discipline</h3>
                            <p className="text-slate-600 mb-4">
                                The Prophet (PBUH) never struck a child or servant. Discipline should be firm yet compassionate, teaching consequences without breaking the child's spirit. Ibn Taymiyyah advised: <span className="italic">"Discipline with wisdom, not anger."</span>
                            </p>
                            <p className="text-sm text-slate-500">
                                <strong>Practical Tip:</strong> Use natural consequences, time-outs, and positive reinforcement. Avoid yelling or physical punishment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Age-Specific Guidance */}
                <div className="mb-20">
                    <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-10 text-center">Age-Specific Guidance</h2>
                    <div className="space-y-8">
                        {/* Ages 0-7 */}
                        <div className="bg-gradient-to-r from-emerald-50 to-white p-8 rounded-2xl border-l-4 border-emerald-600">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Ages 0-7: The Age of Play & Freedom</h3>
                            <p className="text-slate-700 mb-4">
                                The Prophet (PBUH) said: <span className="italic">"Let your child play for the first seven years"</span> (Al-Jami' al-Saghir). This doesn't mean neglect, but rather allowing exploration within safe Islamic boundaries.
                            </p>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Build strong emotional bonds through affection and quality time</li>
                                <li>• Teach basic Islamic etiquette (eating with right hand, saying Bismillah, etc.)</li>
                                <li>• Introduce short surahs and simple du'as through repetition and play</li>
                                <li>• Model good behavior; they learn by imitation</li>
                            </ul>
                        </div>

                        {/* Ages 7-14 */}
                        <div className="bg-gradient-to-r from-amber-50 to-white p-8 rounded-2xl border-l-4 border-amber-600">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Ages 7-14: The Age of Discipline & Responsibility</h3>
                            <p className="text-slate-700 mb-4">
                                The Prophet (PBUH) instructed: <span className="italic">"Command your children to pray when they are seven years old, and discipline them for it when they are ten"</span> (Abu Dawud 495).
                            </p>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Establish the five daily prayers as non-negotiable</li>
                                <li>• Teach Qur'an with Tajweed and meaning</li>
                                <li>• Assign age-appropriate chores and responsibilities</li>
                                <li>• Discuss Islamic values: honesty, modesty, charity, respect</li>
                                <li>• Monitor friendships and media consumption closely</li>
                            </ul>
                        </div>

                        {/* Ages 14+ */}
                        <div className="bg-gradient-to-r from-emerald-50 to-white p-8 rounded-2xl border-l-4 border-emerald-600">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Ages 14+: The Age of Friendship & Mentorship</h3>
                            <p className="text-slate-700 mb-4">
                                Transition from authority figure to trusted advisor. The Prophet (PBUH) treated young companions like Anas ibn Malik and Abdullah ibn Abbas with respect and mentorship.
                            </p>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Engage in mature discussions about faith, identity, and purpose</li>
                                <li>• Encourage Islamic activism and community involvement</li>
                                <li>• Discuss marriage, career, and life goals from an Islamic perspective</li>
                                <li>• Be their confidant, not their critic</li>
                                <li>• Connect them with righteous mentors and scholars</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Modern Challenges */}
                <div className="bg-slate-900 text-white rounded-3xl p-10 mb-16">
                    <h2 className="text-3xl font-serif font-bold text-amber-400 mb-8 text-center">Navigating Modern Challenges</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xl font-bold mb-3">Social Media & Technology</h4>
                            <p className="text-slate-300 mb-4">
                                Monitor screen time, use parental controls, and teach digital etiquette. Discuss the dangers of oversharing, cyberbullying, and inappropriate content.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-3">Peer Pressure</h4>
                            <p className="text-slate-300 mb-4">
                                Equip children with confidence in their Islamic identity. Role-play scenarios where they must stand firm in their values (e.g., refusing haram food, maintaining modesty).
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-3">Identity Crisis</h4>
                            <p className="text-slate-300 mb-4">
                                Help them embrace being Muslim in the West. Celebrate Islamic holidays, connect with the Muslim community, and teach them to be proud ambassadors of Islam.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-3">Mental Health</h4>
                            <p className="text-slate-300 mb-4">
                                Normalize seeking help. Combine Islamic counseling with professional therapy when needed. Teach them that mental health struggles don't reflect weak faith.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Scholarly References */}
                <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
                    <h3 className="text-2xl font-bold text-emerald-900 mb-6">Scholarly References</h3>
                    <ul className="space-y-3 text-slate-700">
                        <li>• <strong>Ibn al-Qayyim</strong> - <em>Tuhfat al-Mawdud bi Ahkam al-Mawlud</em> (The Gift to the Beloved Concerning the Rulings of the Newborn)</li>
                        <li>• <strong>Dr. Yasir Qadhi</strong> - <em>Our Family Our Legacy</em></li>
                        <li>• <strong>Ibn Taymiyyah</strong> - <em>Majmu' al-Fatawa</em> (Collection of Fatwas)</li>
                        <li>• <strong>Imam al-Ghazali</strong> - <em>Ihya Ulum al-Din</em> (Revival of Religious Sciences)</li>
                        <li>• <strong>Sahih Bukhari & Sahih Muslim</strong> - Authentic Hadith collections</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default GeneralTarbiyah;
