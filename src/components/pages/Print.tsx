import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import '../../styles/Project.css'

interface projectProps {
    image: string,
    link: string,
    alt: string
}    

interface pageProps{
    images:projectProps[],
    setActive: Function
}

const Print = (props: pageProps)=>{
    const ref = useRef<HTMLDivElement>(null)
   
    useEffect(()=>{
        let interval = setInterval(()=>{
            let active:(string | undefined) = 'unset'
                for(let i = 0; i <  Number(ref.current?.children.length); i++){
                    let rect = ref.current?.children[i].children[0].getBoundingClientRect()
                    if(rect && rect?.top < window.innerHeight && rect?.top + 150 < window.innerHeight){
                        active = i.toString()
                    } 
                }
                console.log(active)
        },500)
        return (()=>{clearInterval(interval)})
    },[])

    return(
        <div ref={ref} >
        {props.images.map((print, i)=>{
            return(<Link key={`print${i}${print.alt}`} to={`/${print.link}`}><img src={print.image} alt={print.alt} className='projectImage'/></Link>)
        })}
        </div>
    )
}

export default Print