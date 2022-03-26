export default function DataSelection(props){
    return(
        <>
            <div class="SubTitulo">
                <h2> Selecione o horário</h2>
            </div>
            
            <section>
                <div class="data-disponivel">
                    <p>Quint-feira - 24/06/2021</p>
                    <div class="lista-de-horarios">
                        <article onClick={ props.setNextScreen } className="horário">15:00</article>
                        <article onClick={ props.setNextScreen } class="horário">15:00</article>
                    </div>
                </div>
            </section>
        </>
    )
}