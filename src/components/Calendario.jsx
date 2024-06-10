import {useContext, useEffect, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import ptLocale from '@fullcalendar/core/locales/pt';
import css from "./Dashboard_Card_Profs.module.css";
import Modal from "react-modal";
import {Dados} from "../contexts/context";

Modal.setAppElement("#root");

const Calendario = () => {
    const [feriados, setFeriados] = useState([]);
    const [emenda, setEmenda] = useState([]);
    const [ignore, setIgnore] = useState(0);
    const { fetchData } = useContext(Dados);

    useEffect(() => {
        const handleEmenda = async () => {
            let resp = await fetchData("/feriado", "GET");
            setEmenda(resp.response);
        };

        handleEmenda()
    }, [ignore]);


    useEffect(() => {
        const handleFeriado = async () => {
            let resp = await fetchData("/emenda", "GET");
            setFeriados(resp.response);
        };

        handleFeriado();
    }, [ignore]);

    const emendadinha = emenda.map(emenda => ({
        title: emenda.nome,
        start: emenda.data_emenda,

    }));

    const fullCalendarEvents = feriados.map(feriado => ({
        title: feriado.nome,
        start: feriado.data_feriado,

    }));


    return (
        <div>
        <FullCalendar
            plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
            ]}
            headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            locale={ptLocale}
            events={[
                ...fullCalendarEvents,
                ...emendadinha
            ]}

        />
        </div>
)
    ;
};

export default Calendario;
