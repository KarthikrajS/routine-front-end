import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// import { Calendar } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import { useCallback, useMemo } from 'react';
import enUS from 'date-fns/locale/en-US';
const locales = { 'en-US': enUS };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

const CalendarView = ({ tasks, setTasks, openModal, setSelectedTask }) => {
    const events = tasks.map(task => ({
        ...task,
        title: task.title,
        start: new Date(task.dueDate.startDate),
        end: new Date(task.dueDate.endDate),
        desc: task.description,
        status: task?.status,
        priority: task?.priority,
        id: task?._id

    }));

    const DnDCalendar = withDragAndDrop(Calendar)

    const moveEvent =
        ({ event, start, end }) => {
            console.log(event, start, end, "event");
            setTasks(event.id, { dueDate: { startDate: new Date(start), endDate: new Date(end) } })
        }



    const resizeEvent = useCallback(
        ({ event, start, end }) => {
            setTasks((prev) => {
                const existing = prev.find((ev) => ev.id === event.id) ?? {}
                const filtered = prev.filter((ev) => ev.id !== event.id)
                return [...filtered, { ...existing, start, end }]
            })
        },
        [setTasks]
    )



    const defaultDate = useMemo(() => new Date(), [])

    return (
        <DnDCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            draggableAccessor={(event) => true}
            onEventDrop={moveEvent}
            onEventResize={resizeEvent}
            popup
            resizable
            onDoubleClickEvent={(event) => {
                openModal();

                setSelectedTask({
                    dueDate: { startDate: new Date(event.start), endDate: new Date(event.end) }, ...event
                })
            }}

        />
    );
};
export default CalendarView;
