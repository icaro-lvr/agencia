'use client';
import style from './topo.module.css';
import  Image from 'next/image';
import {useState, useEffect} from 'react';

export default function Topo() {

const  [isLightMode, setIsLightMode] = useState(true);

const alterarModo = ({children}) => {
    setIsLightMode(!isLightMode);
}

useEffect(() => {
    if (isLightMode) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  });

const sunIcon = "/assets/Topo/sun.png";
const moonIcon = "/assets/Topo/moon.png";



    return(

        <header className={style.barraFixa} style={{
            backgroundColor: isLightMode ? "#fff" : "#252525",
            transition: "0.3s"
        }}>
                <Image src="/assets/Topo/logo.png" width={150} height={100} alt="Logo da Agência" className={style.logo}/>
                <button onClick={alterarModo} className={style.modo}>
                    {isLightMode ? (
                        <Image src={moonIcon} className={style.icone} width={30} height={30} alt="Modo Escuro" />
                    ) : (
                        <Image src={sunIcon} className={style.icone} width={30} height={30} alt="Modo Claro" />
                    )}
                </button>
        </header>

      
        
    )}