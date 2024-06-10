import Header from "../components/Header";
import css from "./Feriados.module.css";
import Modal from "react-modal";
import {useContext, useEffect, useState} from "react";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import {Dados} from "../contexts/context";

Modal.setAppElement("#root");

export default function Emenda() {
    const [emenda, setEmenda] = useState([]);
    const [ignore, setIgnore] = useState(0);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const { fetchData } = useContext(Dados);





    function toggleExpansion(index) {
        setExpandedIndex(expandedIndex === index ? null : index);
    }

    useEffect(() => {
        const handleFeriado = async () => {
            let resp = await fetchData("/emenda", "GET");
            setEmenda(resp.response);
        };

        handleFeriado();
    }, [ignore]);


    return (
        <div className={css.td}>
            <Header />
            <div className={css.lista_feriados}>
                <div className={css.container}>
                    <h3 className={css.titulo}>Dias não letivos Cadastrados</h3>
                    <div className={css.listar_feriados}>
                        {emenda.map((feriado, index) => (
                            <div key={index} className={css.feriado_item}>
                                <div className={css.itens2} onClick={() => toggleExpansion(index)}>
                                    <p>Nome: {feriado.nome}</p>
                                    <p>Data: {feriado.data_feriado}</p>
                                    <input type={"checkbox"}/>
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>
            </div>
        </div>
    );}
