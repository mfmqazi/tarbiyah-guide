import React from 'react';
import { BookOpen, Video, ExternalLink, Globe, FileText } from 'lucide-react';

const Resources = () => {
    const books = [
        {
            title: "Our Family Our Legacy",
            author: "Dr. Yasir Qadhi",
            description: "A comprehensive guide analyzing the family institution, offering practical tips for spouses and parents to foster strong bonds.",
            tag: "Must Read"
        },
        {
            title: "Tuhfat al-Mawdud (Newborn Baby Guide)",
            author: "Ibn al-Qayyim al-Jawziyyah",
            description: "Classical comprehensive work on nurturing children from birth through all stages of life, encompassing spiritual, moral, and practical aspects based on Qur'an and Sunnah.",
            tag: "Classic"
        },
        {
            title: "Parenting in the West",
            author: "Dr. Ekram Beshir & Dr. Mohamed Rida Beshir",
            description: "Practical advice for Muslim parents raising children in non-Muslim societies, balancing Islamic identity with modern challenges.",
            tag: "Practical"
        },
        {
            title: "Meeting the Challenge of Parenting in the West",
            author: "Dr. Ekram Beshir",
            description: "An Islamic perspective on parenting challenges faced by Muslim families in Western societies.",
            tag: "Practical"
        },
        {
            title: "Before You Tie the Knot",
            author: "Dr. Ekram & Mohamed Rida Beshir",
            description: "Essential guide for preparing Muslim youth for marriage, covering expectations, rights, and responsibilities.",
            tag: "Marriage"
        },
        {
            title: "The Muslim Marriage Guide",
            author: "Ruqaiyyah Waris Maqsood",
            description: "Comprehensive resource on Islamic marriage, intimacy, and building a successful partnership.",
            tag: "Marriage"
        },
        {
            title: "The Ideal Muslimah",
            author: "Dr. Muhammad Ali al-Hashimi",
            description: "Comprehensive guide on the character, conduct, and responsibilities of a Muslim woman based on Qur'an and Sunnah.",
            tag: "Women"
        },
        {
            title: "Fiqh of Love: Marriage in Islam",
            author: "Dr. Yasir Qadhi",
            description: "Detailed exploration of Islamic marriage from a fiqh perspective, covering rights, responsibilities, and building a successful marriage.",
            tag: "Marriage"
        },
        {
            title: "Don't Be Sad",
            author: "Aaidh ibn Abdullah al-Qarni",
            description: "While not specifically about parenting, this book helps parents develop emotional resilience to model for their children.",
            tag: "Self-Help"
        }
    ];

    const lectures = [
        {
            title: "The Rights of Children",
            speaker: "Dr. Yasir Qadhi",
            platform: "YouTube",
            duration: "1 hr 15 min",
            description: "Comprehensive lecture on children's rights in Islam"
        },
        {
            title: "Raising Daughters in Islam",
            speaker: "Mufti Menk",
            platform: "YouTube",
            duration: "45 min",
            description: "The immense reward and responsibility of raising daughters"
        },
        {
            title: "Protecting Our Youth",
            speaker: "Nouman Ali Khan",
            platform: "Bayyinah TV",
            duration: "30 min",
            description: "Strategies for protecting youth from modern challenges"
        },
        {
            title: "Islamic Parenting Series",
            speaker: "Dr. Yasir Qadhi",
            platform: "YouTube",
            duration: "10 episodes",
            description: "Complete series covering all aspects of Islamic parenting"
        },
        {
            title: "The Prophetic Example in Raising Children",
            speaker: "Sheikh Omar Suleiman",
            platform: "Yaqeen Institute",
            duration: "50 min",
            description: "How the Prophet (PBUH) interacted with children"
        },
        {
            title: "Marriage in Islam",
            speaker: "Dr. Yasir Qadhi",
            platform: "YouTube",
            duration: "2 hrs",
            description: "Comprehensive lecture on Islamic marriage principles"
        },
        {
            title: "Preparing for Marriage",
            speaker: "Ustadh Nouman Ali Khan",
            platform: "Bayyinah TV",
            duration: "1 hr",
            description: "What to look for and how to prepare for marriage"
        },
        {
            title: "Tarbiyah of Children",
            speaker: "Sheikh Abdul Nasir Jangda",
            platform: "Qalam Institute",
            duration: "Series",
            description: "Detailed series on Islamic upbringing of children"
        }
    ];

    const websites = [
        {
            name: "MuslimMatters.org",
            description: "Articles on parenting, family, and contemporary Muslim issues",
            url: "muslimmatters.org"
        },
        {
            name: "Yaqeen Institute",
            description: "Research-based articles on Islamic topics including family and parenting",
            url: "yaqeeninstitute.org"
        },
        {
            name: "Productive Muslim",
            description: "Productivity tips for Muslim families and parents",
            url: "productivemuslim.com"
        },
        {
            name: "About Islam Family Section",
            description: "Counseling and advice on family matters from Islamic perspective",
            url: "aboutislam.net/family"
        }
    ];

    return (
        <div className="animate-fade-in py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-6">Recommended Resources</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Curated books, lectures, websites, and articles to deepen your understanding of Islamic parenting and family life.
                    </p>
                </div>

                {/* Books Section */}
                <div className="mb-20">
                    <div className="flex items-center mb-10">
                        <BookOpen className="text-amber-600 mr-4" size={32} />
                        <h2 className="text-3xl font-serif font-bold text-emerald-900">Essential Reading</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {books.map((book, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-slate-100 flex flex-col">
                                <div className="bg-emerald-900 h-2"></div>
                                <div className="p-8 flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                            {book.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">{book.title}</h3>
                                    <p className="text-amber-600 font-medium mb-4 text-sm">by {book.author}</p>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {book.description}
                                    </p>
                                </div>
                                <div className="bg-slate-50 px-8 py-4 border-t border-slate-100">
                                    <a
                                        href={`https://www.google.com/search?q=${encodeURIComponent(book.title + ' ' + book.author + ' book')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-emerald-700 font-bold text-sm hover:text-emerald-900 flex items-center"
                                    >
                                        Find Online <ExternalLink size={14} className="ml-2" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lectures Section */}
                <div className="mb-20">
                    <div className="flex items-center mb-10">
                        <Video className="text-amber-600 mr-4" size={32} />
                        <h2 className="text-3xl font-serif font-bold text-emerald-900">Lectures & Series</h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        {lectures.map((lecture, index) => (
                            <div key={index} className={`p-6 flex flex-col md:flex-row items-center justify-between hover:bg-slate-50 transition-colors ${index !== lectures.length - 1 ? 'border-b border-slate-100' : ''}`}>
                                <div className="flex items-center mb-4 md:mb-0 w-full md:w-auto">
                                    <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                                        <Video size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-emerald-900">{lecture.title}</h3>
                                        <p className="text-slate-500 text-sm">{lecture.speaker}</p>
                                        <p className="text-slate-400 text-xs mt-1">{lecture.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
                                    <span className="text-slate-400 text-sm font-medium">{lecture.platform}</span>
                                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">
                                        {lecture.duration}
                                    </span>
                                    <a
                                        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(lecture.title + ' ' + lecture.speaker)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-emerald-600 hover:text-emerald-800"
                                        title="Search on YouTube"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Websites & Online Resources */}
                <div className="mb-20">
                    <div className="flex items-center mb-10">
                        <Globe className="text-amber-600 mr-4" size={32} />
                        <h2 className="text-3xl font-serif font-bold text-emerald-900">Websites & Online Resources</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {websites.map((site, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:border-emerald-500 transition-colors">
                                <h3 className="text-lg font-bold text-emerald-900 mb-2">{site.name}</h3>
                                <p className="text-slate-600 text-sm mb-4">{site.description}</p>
                                <a href={`https://${site.url}`} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 text-sm font-medium flex items-center">
                                    Visit Website <ExternalLink size={14} className="ml-2" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Note */}
                <div className="bg-amber-50 rounded-xl p-8 border border-amber-100">
                    <div className="flex items-start">
                        <FileText className="text-amber-600 mr-4 flex-shrink-0" size={28} />
                        <div>
                            <h3 className="text-xl font-bold text-emerald-900 mb-3">Important Note</h3>
                            <p className="text-slate-700 leading-relaxed">
                                While these resources are recommended, always verify information with qualified scholars and ensure compatibility with authentic Sunni Islamic teachings. Not all content from every author may align perfectly with orthodox Sunni beliefs. Use discernment and consult local scholars when in doubt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
