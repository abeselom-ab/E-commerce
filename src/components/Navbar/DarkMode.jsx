import React from 'react'
import LightButton from '../../assets/image/light-mode-button.jpg'
import DarkButton from '../../assets/image/dark-mode-button.jpg'

const DarkMode = () => {
    const [theme, setTheme]= React.useState(
        localStorage.getItem("theme") ? 
        localStorage.getItem("theme"): "light"  
    );
     const element=document.documentElement; //html element

     React.useEffect(()=>{
        if(theme ==="dark"){
            element.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else{
            element.classList.remove("dark")
            localStorage.setItem("theme","light")
        }
     }, [theme]);

  return (
    <div className='relative'>
        <img src={LightButton} alt="" 
        onClick={()=> setTheme(theme==="light" ? "dark" : "light")}
        className={`w-12 rounded-full cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] 
        transition-all duration-300 absolute right-0 z-10 ${theme==="dark" ? "opacity-0" : "opacity-100"}` }
        />
        <img src={DarkButton} alt="" 
        onClick={()=> setTheme(theme==="dark" ? "light" : "dark")}
        className='w-12 rounded-full cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] 
        transition-all duration-300 '
        />
    </div>
  )
}

export default DarkMode