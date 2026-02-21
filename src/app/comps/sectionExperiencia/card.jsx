import style from "./card.module.css";

export default function Card(props){
    return(
        <>
        <div className={style.card}>
            <p>{props.data}</p>
            <h3>{props.titulo}</h3>
            <small>{props.empresa}</small>
            <p>{props.descricao}</p>
        </div>
        </>
    )
}