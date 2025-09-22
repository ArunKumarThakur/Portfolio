import arun from './arun.jpg'

function Navbar() {
    return (
        <>
            <nav className='w-full'>
                <div className='flex flex-wrap items-center justify-between shadow p-4'>

                    <div>
                        <img src={arun} alt="Arun" className="h-10 w-10 rounded-full" />
                    </div>

                    <div className='hidden sm:block md:block'>
                        <ol className='flex items-center justify-center gap-6'>
                            <li className='cursor-pointer text-xl'>Home</li>
                            <li className='cursor-pointer text-xl'><a href='#about'>About</a></li>
                            <li className='cursor-pointer text-xl'><a href='#projects'>Projects</a></li>
                            <li className='cursor-pointer text-xl'><a href='#contact'>Contact</a></li>
                            <li className='cursor-pointer text-xl'>Blog</li>
                        </ol>
                    </div>
                    <div className='flex gap-4'>
                        <button className='px-3 py-2 bg-white text-black rounded duration-200 ease-in cursoor-pointer hover:bg-sky-300'>Sign up</button>
                        <button className='px-3 py-2 bg-white text-black rounded duration-200 ease-in cursor-pointer hover:bg-sky-300'>Sign in</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;