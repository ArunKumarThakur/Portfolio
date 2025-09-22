
import {useEffect, useState} from "react";
import arun from './arun.jpg'
function Introduction() {
    const roles = ['Java Developer', 'Web Developer', 'Fullstack Engineer'];
    const [charIdx, setCharIdx] = useState(0);
    const [roleIdx, setRoleIdx] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);
    let typingSpeed = 150;

    useEffect(() => {
        const currRole = roles[roleIdx];

        const timeout = setTimeout(() => {
            if(!deleting) {
                setText(currRole.substring(0, charIdx + 1));
                setCharIdx(prev => prev + 1);
            } else {
                setText(currRole.substring(0, charIdx - 1));
                setCharIdx(prev => prev - 1);
            }

            if(!deleting && charIdx === currRole.length + 1) {
                setDeleting(true);
                typingSpeed = 100;
            }

            if(deleting && charIdx === 0) {
                setDeleting(false);
                setRoleIdx(prev => (prev + 1) % roles.length);
                typingSpeed = 150;
            }
        }, typingSpeed)

        return () => clearTimeout(timeout);
    }, [charIdx, roleIdx, text, deleting]);
    return(
        <>
            <main className='w-full text-white mt-20 py-5 px-0 md:px-4' id='about'>
                <div className='flex flex-col-reverse md:flex-row text-center items-center justify-between px-0'>
                    {/*Left*/}
                    <div className='left text-left flex flex-col gap-3 items-center md:items-start'>
                        <h2 className='text-3xl font-bold'>Hi, I am {text}</h2>
                        <h3 className='text-xl'>Arun Kumar Thakur</h3>
                        <p className='leading-relaxed max-w-xl font-bold text-sm sm:text-base text-center md:text-left'>I am a passionate Java developer with strong problem-solving skills and a focus on building efficient, scalable solutions.
                            I enjoy learning modern technologies, exploring creative ideas, and delivering impactful projects that create real value
                            for users.</p>


                        <div className='max-w-xl flex gap-5 mt-5'>
                            <a href="https://github.com/ArunKumarThakur" target="_blank">
                                <i className="fab fa-github text-3xl sm:text-4xl duration-100 ease-linear hover:scale-110 text-white"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/arun-kumar-thakur?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BrEXJwj9tRNyEvfAxVuuMPQ%3D%3D"
                               target="_blank">
                                <i className="fab fa-linkedin text-3xl sm:text-4xl duration-100 ease-linear hover:scale-110"></i>
                            </a>
                            <a href="https://www.instagram.com/__i.m_arun?igsh=bG9ndzc1NWhoYXA0" target="_blank">
                                <i className="fab fa-instagram text-3xl sm:text-4xl duration-100 ease-linear hover:scale-110"></i>
                            </a>
                        </div>
                    </div>

                    {/*Right*/}
                    <div className='flex justify-center md:justify-end'>
                        <img src={arun} alt='Arun'
                             className='h-40 w-40 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover rounded-full shadow-lg'/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Introduction;