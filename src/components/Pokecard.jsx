

export const Pokecard = ({imagen, nombre, tipos, stats}) => {
    return(

        <article className="pokecard">
            <div className="sprite-container">
                <img src={imagen} alt="sprite" />
            </div>

            <div className="info-container">
                <h1 className="card-pokemon-name">{nombre}</h1>
                <ul className="type-list">
                    {tipos.map( (t, index) => (
                        <li key={index} className={`type-${t.type.name}`}
                        >{t.type.name}</li>
                    ))}
                </ul>
                <ul className="class-list">
                {stats.map((s, index) => (
                    <li key={index}>{`${s.stat.name} : ${s.base_stat}`}</li>
                ))}
                </ul>
            </div>

        </article>

    )
}