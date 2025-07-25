import bigScreen4 from '../assets/bigScreen4.jpg';
import placeholder from '../assets/placeholder.png';
import placeholder2 from '../assets/placeholder2.png';
import smallScreen from '../assets/smallScreen.png';
import profilePic from '../assets/profilePic.png';


function Third() {
  return (
    <div className='min-h-screen min-w-full bg-slate-950'>
        {/* navbar goes here */}
        <nav className='w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center'>
            <div className='text-2xl text-indigo-700 font-bold'>
                Tushar Bhatt
            </div>
            <ul className='md:flex hidden font-semibold tracking-tighter'>
                <li className='mx-[10px] cursor-pointer'>Home</li>
                <li className='mx-[10px] cursor-pointer'>About Me</li>
                <li className='mx-[10px] cursor-pointer'>Contact Me</li>
            </ul>
            <div className='hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer'>
                Login/Sign Up
            </div>
            <div className='md:hidden'>
                <a className='text-4xl font-extrabold' href="#">&#8801;</a>
            </div>
        </nav>
        {/* navbar ends here. */}

        {/* image section starts here. */}
        <header className='w-full h-auto'>
            <img className='w-full hidden md:block' src={bigScreen4} alt="" />
            <img className='w-full md:hidden' src={smallScreen} alt="" />
        </header>
        {/* image section ends here. */}

        {/* My Works section. */}
        <div className='h-auto w-full flex flex-wrap flex-col items-center text-center p-10 justify-self-center-safe'>
            <div className='w-full h-auto flex flex-wrap flex-col items-center'>
                <p className='text-indigo-800 font-bold text-center tracking-tighter uppercase md:text-2xl'> 
                    "Engineering: where the noble semi-skilled laborers  execute the vision of those who think and dream."
                    <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 md:mt-4 mb-12 rounded-2xl justify-self-center-safe'></div>
                </p>
            </div>
            <div className='w-full flex flex-wrap justify-evenly'>
                <div className='w-46 flex flex-col item-center mb-12'>
                    <img className='w-44 h-44' src={placeholder} alt="" />
                    <p className='text-3xl font-bold text-white'>Title</p>
                    <p className='text-2xl font-bold text-gray-500'>Desctiption</p>
                </div>
                <div className='w-46 flex flex-col item-center mb-12'>
                    <img className='w-44 h-44' src={placeholder} alt="" />
                    <p className='text-3xl font-bold text-white'>Title</p>
                    <p className='text-2xl font-bold text-gray-500'>Desctiption</p>
                </div>
                <div className='w-46 flex flex-col item-center mb-12'>
                    <img className='w-44 h-44' src={placeholder} alt="" />
                    <p className='text-3xl font-bold text-white'>Title</p>
                    <p className='text-2xl font-bold text-gray-500'>Desctiption</p>
                </div>
            </div>
        </div>
        {/* My Works section ends here. */}

        {/* My Achievement section */}
        <div className='h-auto w-full flex flex-wrap flex-col items-center text-center p-10'>
            <div className='w-full h-auto flex flex-wrap flex-col items-center'>
                <p className='text-indigo-800 font-bold text-center tracking-tighter uppercase md:text-2xl'> 
                    "My Achievements"
                    <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 md:mt-4 mb-12 rounded-2xl justify-self-center-safe'></div>
                </p>
            </div>
            <div className='w-[90%] h-auto flex flex-wrap justify-around space-x-2'>
                <div className='w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2 hover:bg-amber-50 group hover:shadow-xl shadow-gray-500'>
                    <img src={placeholder2} alt="" />
                    <p className='text-3xl font-bold text-white group-hover:text-slate-800 transition-all duration-200'>Title</p>
                    <p className='text-xl font-bold text-gray-500'>Description</p>
                </div>
                <div className='w-64 flex flex-col items-center mb-12 border-white p-2 hover:bg-amber-50 hover:border-2 rounded-xl group shadow-xs shadow-gray-500 hover:shadow-xl'>
                    <img src={placeholder2} alt="" />
                    <p className='text-3xl font-bold text-white group-hover:text-slate-800 transition-all duration-200'>Title</p>
                    <p className='text-xl font-bold text-gray-500'>Description</p>
                </div>
                <div className='w-64 flex flex-col items-center mb-12 border-white p-2 hover:bg-amber-50 hover:border-2 rounded-xl group shadow-xs shadow-gray-500 hover:shadow-xl'>
                    <img src={placeholder2} alt="" />
                    <p className='text-3xl font-bold text-white group-hover:text-slate-800 transition-all duration-200'>Title</p>
                    <p className='text-xl font-bold text-gray-500'>Description</p>
                </div>
                <div className='w-64 flex flex-col items-center mb-12 border-white p-2 hover:bg-amber-50 hover:border-2 rounded-xl group shadow-xs shadow-gray-500 hover:shadow-xl'>
                    <img src={placeholder2} alt="" />
                    <p className='text-3xl font-bold text-white group-hover:text-slate-800 transition-all duration-200'>Title</p>
                    <p className='text-xl font-bold text-gray-500'>Description</p>
                </div>
                <div className='w-64 flex flex-col items-center mb-12 border-white p-2 hover:bg-amber-50 hover:border-2 rounded-xl group shadow-xs shadow-gray-500 hover:shadow-xl'>
                    <img src={placeholder2} alt="" />
                    <p className='text-3xl font-bold text-white group-hover:text-slate-800 transition-all duration-200'>Title</p>
                    <p className='text-xl font-bold text-gray-500'>Description</p>
                </div>
            </div>
        </div>
        {/* My Achievement section ends here */}

        {/* footer starts here. */}

        <footer className="w-full bg-gray-900 px-4 text-white py-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12">
            <div>
                <img className='w-16 h-16 rounded-4xl' src={profilePic} alt="" />
                <p className='my-4'>Email me: tusharbhatt.1405@gmail.com</p>
            </div>
            <div>
                <h2 className='font-bold text-xl mt-4'>Tushar Bhatt</h2>
                <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
                <div className='max-w-32'>
                    <p>About me</p>
                    <p>FAQs</p>
                    <p>Pivacy Policy</p>
                </div>
            </div>
            <div>
                <h2 className='font-bold text-xl mt-4'>Discord</h2>
                <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
                <div className='max-w-32'>
                    <p>Discord</p>
                </div>
            </div>
            <div>
                <h2 className='font-bold text-xl mt-4'>Links</h2>
                <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
                <div className='max-w-32'>
                    <p>LinkedIn</p>
                    <p>Twitter</p>
                    <p>Github</p>
                    <p>LinkedIn</p>
                </div>
            </div>
        </footer>
        {/* footer starts here. */}

        <div className=" w-full h-full bg-slate-900">
            <p className='text-xs text-gray-400 text-center pb-2'>“I don’t like lemon-flavored anything. Lemon is a solvent, not a flavor.”</p>
        </div>

    </div>
  )
}

export default Third