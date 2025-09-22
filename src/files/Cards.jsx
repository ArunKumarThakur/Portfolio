import Footer from './Footer'
import Contact from './Contact.jsx'
import Card from './Card.jsx'
import Navbar from "./Navbar.jsx";
import Introduction from './Introduction.jsx'
import arun from './arun.jpg'
function Cards(){

    const arr = {
        'name' :"Bank Management System",
        'body' :"A Spring Boot-based Bank Management System demonstrating dependency injection,\n" +
            "    Spring JPA, and RESTful APIs for efficient management of customers, accounts, and\n" +
            "    transactions with scalable and maintainable code.",
        img:arun
    }

    const arr1 = {
        'name' : 'Bank Management System',
        'body' : 'A Spring Boot-based Bank Management System demonstrating dependency injection,\n' +
            '     Spring JPA, and RESTful APIs for efficient management of customers, accounts, and\n' +
            '     transactions with scalable and maintainable code.',
        img:arun
    }

    const arr2 = {
        'name' : 'Bank Management System',
        'body' : 'A Spring Boot-based Bank Management System demonstrating dependency injection,\n' +
            '     Spring JPA, and RESTful APIs for efficient management of customers, accounts, and\n' +
            '     transactions with scalable and maintainable code.',
        img:arun
    }

    return (
        <>
            <Navbar />
            <Introduction />
            <section className="w-full mt-20 " id='projects'>
                <h2 className='text-center font-bold text-4xl'>My Projects</h2>
                <div className="flex flex-wrap gap-8 items-center justify-center w-full mt-10">
                    <Card arr={arr} />
                    <Card arr={arr1} />
                    <Card arr={arr2} />
                </div>
            </section>
            <Contact/>
            <Footer />
        </>
    )
}


export default Cards;