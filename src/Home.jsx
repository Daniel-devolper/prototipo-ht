import React, { useEffect, useState } from 'react';
import { FecthPost } from './FecthPost';

export const Home = () => {
 
    const [id, setId] = useState(1)
    
    const [randomColorPrimary, setRandomColorPrimary] = useState(0)

    const [randomColorSecundary, setRandomColorSecundary] = useState(0)
    
    const colorsPrimary=['bg-red-300','bg-blue-300','bg-green-300','bg-yellow-300','bg-indigo-500']
    
    const colorsSecundary=['bg-indigo-500','bg-green-300','bg-yellow-300','bg-red-300','bg-blue-300']
    
    const [todo, setTodo] = useState([{
        "userId": 10,
        "id": 0,
        "title": "quis eius est sint explicabo",
        "completed": true
    }])

    useEffect(() => {
        if (id===200) {
            setId(1)
        }
        const interval=setInterval(() => {
            setId(id + 1)
            FecthPost(id).then((data)=>{
                setTodo(data)
            })

            setRandomColorPrimary(Math.floor(Math.random() * (5 - 0)) + 0);
            setRandomColorSecundary(Math.floor(Math.random() * (5 - 0)) + 0);
         }, 5000);      
         return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    
    return (
        <div>
            {               
                todo.map((item)=>(
                    <div key={item.id} className="relative grid justify-center grid-cols-1 grid-rows-4 gap-2 ml-5 mr-5 text-center bg-gray-200 border-2 rounded md:grid-rows-2 md:grid-cols-2 md:gap-4 md:w-1/2 h-3/4 md:mx-auto md:top-40 top-5 justify-items-center border-blue drop-shadow-xl">
                        <div className={`w-11/12 h-auto p-2 mt-2 border-2 md:ml-2 border-white rounded ${colorsPrimary[randomColorPrimary]}`}>
                            <p className='p-4'>
                               <span className='font-semibold'>User Id:</span> {item.userId}
                            </p>
                        </div>

                        <div className={`w-11/12 h-auto p-2 md:mr-2 border-2 border-white rounded md:mt-2 ${colorsSecundary[randomColorSecundary]}`}>
                            <p className='p-4'>
                               <span className='font-semibold'>Id:</span> {item.id}
                            </p>
                        </div>

                    <div className={`w-11/12 h-auto p-2 md:ml-2 border-2 border-white rounded md:mb-2 ${colorsSecundary[randomColorSecundary]}`}>
                            <p className='p-4'>
                                <span className='font-semibold'>Title:</span> {item.title}
                            </p>
                        </div>

                        <div className={`w-11/12 h-auto p-2 md:mr-2 mb-2 ${colorsPrimary[randomColorPrimary]} border-2 border-white rounded`}>
                            <p className='p-4'>
                               <span className='font-semibold'>Completed:</span> {item.completed ? 'Si' : 'No'}
                            </p>
                        </div>    
                    </div>    
                ))
            }           
        </div>
    )
}

export default Home;
