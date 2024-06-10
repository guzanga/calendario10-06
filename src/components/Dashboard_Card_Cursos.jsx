import css from "./Dashboard_Card_Profs.module.css";
import Modal from "react-modal";
import { useState } from "react";
import { HiArchiveBoxXMark } from "react-icons/hi2";

Modal.setAppElement("#root");

export default function Dashboard_Card_Cursos() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [cursos, setCursos] = useState([]);
    const [novoCurso, setNovoCurso] = useState({
        nome: "",
        cargaHoraria: "",
        duracao: "",
        dataInicio: "",
        diasSemana: ""
    });
    const [expandedIndex, setExpandedIndex] = useState(null);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setNovoCurso({ ...novoCurso, [name]: value });
    }

    function handleCadastrarCurso() {
        setCursos([...cursos, novoCurso]);
        setNovoCurso({
            nome: "",
            cargaHoraria: "",
            duracao: "",
            dataInicio: "",
            diasSemana: ""
        });
        closeModal();
    }

    function handleExcluirCurso(index) {
        const updatedCursos = [...cursos];
        updatedCursos.splice(index, 1);
        setCursos(updatedCursos);
    }

    function toggleExpansion(index) {
        setExpandedIndex(expandedIndex === index ? null : index);
    }

    return (
        <div>
            <div className={css.card_profs}>
                <h4 className={css.titulo}>Cursos Cadastrados</h4>
                <div className={css.todos_alunos}>
                    {cursos.map((curso, index) => (
                        <div className={css.campo2} key={index}>
                            <div className={css.separa_nome}>
                                <p className={css.professores}>Nome: {curso.nome}</p>
                                <button
                                    className={css.btn_lixeira}
                                    onClick={() => handleExcluirCurso(index)}
                                >
                                    <HiArchiveBoxXMark className={css.icon_lixeira}/>
                                </button>
                            </div>

                            {expandedIndex === index && (
                                <>
                                    <p className={css.professores}>Carga Horária: {curso.cargaHoraria}</p>
                                    <p className={css.professores}>Duração: {curso.duracao}</p>
                                    <p className={css.professores}>Data de Início: {curso.dataInicio}</p>
                                    <p className={css.professores}>Dias da Semana: {curso.diasSemana}</p>
                                </>
                            )}
                            <div className={css.lado}>
                                <button className={css.btn_vermais} onClick={() => toggleExpansion(index)}>
                                    {expandedIndex === index ? 'Ver menos' : 'Ver mais'}
                                </button>
                            </div>


                        </div>
                    ))}
                </div>
                <button className={css.mais} onClick={openModal}>+</button>
                <div className={css.plus}>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                    >
                        <div className="modal-content">
                            <div>
                                <h2>Cadastrar Novo Curso</h2>
                            </div>
                            <div className={css.separa_inps}>
                                <input
                                    className={css.inp}
                                    placeholder={"Nome:"}
                                    name="nome"
                                    value={novoCurso.nome}
                                    onChange={handleInputChange}
                                    required
                                ></input>
                                <input
                                    className={css.inp}
                                    placeholder={"Carga Horária:"}
                                    name="cargaHoraria"
                                    value={novoCurso.cargaHoraria}
                                    onChange={handleInputChange}
                                    required
                                ></input>
                                <input
                                    className={css.inp}
                                    placeholder={"Duração:"}
                                    name="duracao"
                                    value={novoCurso.duracao}
                                    onChange={handleInputChange}
                                    required
                                ></input>
                                <input
                                    className={css.inp}
                                    placeholder={"Data de Início:"}
                                    name="dataInicio"
                                    value={novoCurso.dataInicio}
                                    onChange={handleInputChange}
                                    required
                                ></input>
                                <input
                                    className={css.inp}
                                    placeholder={"Dias da Semana:"}
                                    name="diasSemana"
                                    value={novoCurso.diasSemana}
                                    onChange={handleInputChange}
                                    required
                                ></input>
                            </div>
                            <div>
                                <button className={css.cadastrar_btn} onClick={handleCadastrarCurso}>
                                    Cadastrar
                                </button>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

