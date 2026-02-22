import Image from "next/image";
import style  from './rodape.module.css'

export default function Rodape() {

    const imagens =[
        {src:"/assets/rodape/facebook.png", width: 100, height: 100, alt:"Logo Facebook"},
        {src:"/assets/rodape/twitter.png", width: 100, height: 100, alt:"Logo Twitter"},
        {src:"/assets/rodape/linkedin.png", width: 100, height: 100, alt:"Logo LinkedIn"},
        {src:"/assets/rodape/dribble.png", width: 100, height: 100, alt:"Logo Dribble"},
        {src:"/assets/rodape/behance.png", width: 100, height: 100, alt:"Logo Behance"},
        {src:"/assets/rodape/google.png", width: 100, height: 100, alt:"Logo Google"},
    ]

    return (
<>
        <footer className={style.rodapeFooter}>
            <Image src="/assets/rodape/logo.png" className={style.logo} width={100} height={100} alt="Logo da Agência" />
            <p> Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
        ferramentas e tecnologias personalizadas.</p>

            <div className={style.imgs}>
                {imagens.map((imageOptimizer, index) => (
                    <img key={index} src={imageOptimizer.src} width={imageOptimizer.width} height={imageOptimizer.height} alt={imageOptimizer.alt} className={style.img} />
                ))}
            </div>
        </footer>
        <div className={style.copyright}>
             <p>Copyright 2026<span> ©Ícaro Augusto S.S.</span></p>
        </div>
    
        
        </>
    )
}