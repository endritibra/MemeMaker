import React from 'react'
import { useState,useEffect } from 'react'

function Form() {
    const [info,setInfo]=useState({
        topText:"",bottomText:"",imgUrl:"http://i.imgflip.com/1bij.jpg"
    })
    
    const [memes,setMemes]=useState([])


    function handleChange(event){
        
        setInfo(prevInfo=>(
            {
                ...prevInfo,
                [event.target.name]:event.target.value
            }
        ))
        
    }
    
    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setMemes(data.data.memes)
        }
        getMemes()
    }, [])
   

    function getImg(){
        const randomce=Math.floor(Math.random()*memes.length)
        const url=memes[randomce].url
        setInfo(prevInfo=>({
            ...prevInfo,
            imgUrl:url
        }))
    }



    function handleSubmit(event){
      event.preventDefault()


    }


  return (

    <div className='flex flex-col items-center p-3' onSubmit={handleSubmit}>
        <div class="flex md:flex-row flex-col inputing py-2">
        <div class="first_input flex flex-col  mx-6">
        <label htmlFor='bottomtext' className="text-black font-[Arial] text-xl py-1">Bottom Text:</label>

        <input type="text" name="topText" className='rounded-md' value={info.topText} onChange={handleChange}/> </div>

        <div class="second_input px-3 flex flex-col mx-6">
        <label htmlFor='bottomtext' className='text-black font-[Arial] text-xl py-1'>Bottom Text:</label>
        <input type="text" name="bottomText"  value={info.bottomText} className="rounded-md " onChange={handleChange}/> </div>

        <button className="bg-black text-white font-bold px-3 rounded-md h-[40px] my-6 hover:bg-white hover:text-black" onClick={getImg}>MEME!</button></div>


        <div image="flex flex-col imgcont ">
            <img src={info.imgUrl} className="imigj"/>
            <p className='top__text meme--text'>{info.topText}</p>
            <p className='bottom__text meme--text'>{info.bottomText}</p>
        </div>
    </div>

   
  )
}

export default Form