import style from './page.module.css';
import  Image from 'next/image';

export default function SecaoBanner() {
    return(
        <>
        
        <div className={style.secaoBanner}>
            <Image src="/assets/Banner/banner.jpg" alt="Banner" width={1000} height={1000} className={style.banner}/>

            <div className={style.textos}>
            <p> BRANDING / UI / UX / TECNOLOGIA </p>
            <h1> Agência de Branding</h1>
            <span>e design digital</span>
            </div>


        </div>

        </>
    )
}