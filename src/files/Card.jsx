import { useState } from 'react'

function Card(props) {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className='min-h-xl w-80 bg-gray-300 p-4 rounded'>

                <div className='flex flex-col gap-1 items-end justify-center text-black p-2'>
                    <a href="https://github.com/ArunKumarThakur/SpringBootBanking" target="_blank">
                        <i className="fab fa-github text-xl sm:text-3xl duration-100 ease-linear hover:scale-110 text-black"></i>
                    </a>
                    <p className='text-xl underline'><a href='https://github.com/ArunKumarThakur/SpringBootBanking' target='_blank'>Link</a></p>
                </div>

                <div className='text-black flex flex-col items-center justify-center gap-2'>
                    <img className='h-20 w-20 rounded-full' src={props.arr.img} alt='arun'/>
                    <h2 className="font-bold text-xl">{props.arr.name}</h2>
                    <p>{props.arr.body}</p>
                    <button className='w-20 h-10 p-2 bg-white rounded' onClick={() => {
                        setCount(prev => prev + 1);
                    }}>click {count}</button>
                </div>
            </div>
        </>
    )
}

export default Card;