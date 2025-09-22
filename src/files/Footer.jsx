import {useState} from 'react'

function Footer() {

    const [name, setName] = useState('Arun Kumar Thakur')

    return (
        <>
            <footer className='w-full py-0 md:py-8 mt-20 text-white text-center font-bold'>
                All rights reserved &copy; 2025 {name}
            </footer>
        </>
    )
}

export default Footer;