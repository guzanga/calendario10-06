import Professores from "../components/Dashboard_Card_Profs"
import css from "./Tela_professores.module.css"
import Header from "../components/Header";
import Alunos from "../components/Dashboard_Card_Alunos"
export default function Tela_Alunos (){
    return(
        <div className={css.cor_fundo}>
            <Header></Header>
            <div className={css.td}>
                <h2 className={css.titulo}>Buscar Aluno</h2>
                <div className={css.barra_pesquisa}>
                    <input className={css.inp} placeholder={"Buscar"}></input>
                    <button className={css.btn}><img className={css.lupa} src="./lupa.png"/></button>

                </div>
                <div className={css.profs}>
                    <Alunos></Alunos>
                </div>
            </div>
        </div>
    )
}