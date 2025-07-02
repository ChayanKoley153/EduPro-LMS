import { Award, Search, User } from 'lucide-react'
import HeroImg from '../assets/HeroImg.png'
import CountUp from 'react-countup';

const Hero = () => {
    return (
        <div className='bg-slate-800 py-20 px-4 md:px-10'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10'>
                {/* Text Section */}
                <div className='w-full md:w-1/2 space-y-6 text-center md:text-left'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-200 leading-tight'>
                        Explore Our <span className='text-blue-500'>1000+</span><br />
                        Coding Courses
                    </h1>
                    <p className='text-gray-300 text-base sm:text-lg'>
                        Learn to code with interactive lessons, real-world projects, and expert mentors. Start your journey today!
                    </p>
                    <div className='relative flex justify-center md:justify-start'>
                        <input
                            type="text"
                            placeholder='Search your course here...'
                            className='w-full max-w-[400px] sm:max-w-[500px] bg-gray-200 text-gray-800 p-4 pr-40 rounded-lg placeholder:text-gray-500'
                        />
                        <button className='absolute right-0 top-0 bottom-0 px-4 flex items-center gap-2 bg-blue-500 text-white font-semibold rounded-r-lg text-base sm:text-lg'>
                            Search <Search size={20} />
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className='w-full md:w-1/2 relative flex justify-center items-end'>
                    <img
                        src={HeroImg}
                        alt="Hero"
                        className="w-full max-w-[450px] max-h-[450px] sm:max-w-[500px] md:max-w-[550px] drop-shadow-2xl"
                    />

                    {/* Active Students Box */}
                    <div className="bg-slate-200 hidden md:flex gap-3 items-center rounded-md absolute top-[30%] right-0 px-4 py-2 shadow-lg">
                        <div className="rounded-full bg-blue-400 p-2 text-white">
                            <User />
                        </div>
                        <div>
                            <h2 className='font-bold text-2xl'><CountUp end={4500} />+</h2>
                            <p className='italic text-sm text-gray-600 leading-none'>Active Students</p>
                        </div>
                    </div>

                    {/* Certified Students Box */}
                    <div className="bg-slate-200 hidden md:flex gap-3 items-center rounded-md absolute top-[10%] left-0 px-4 py-2 shadow-lg">
                        <div className="rounded-full bg-blue-400 p-2 text-white">
                            <Award />
                        </div>
                        <div>
                            <h2 className='font-bold text-2xl'><CountUp end={684} />+</h2>
                            <p className='italic text-sm text-gray-600 leading-none'>Certified Students</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
