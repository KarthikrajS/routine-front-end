import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// import { Calendar } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import { useCallback, useMemo } from 'react';

const locales = { 'en-US': import('date-fns/locale/en-US') };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

const CalendarView = ({ tasks, onEventDrop, setTasks }) => {
    console.log(tasks, "tasks");
    const events = tasks.map(task => ({
        title: task.title,
        start: new Date(task.dueDate.startDate),
        end: new Date(task.dueDate.endDate),
        desc: task.description,
        status: task?.status,
        priority: task?.priority,
        id: task?.id
    }));

    const DnDCalendar = withDragAndDrop(Calendar)

    const moveEvent = useCallback(
        ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
            const { allDay } = event
            if (!allDay && droppedOnAllDaySlot) {
                event.allDay = true
            }
            if (allDay && !droppedOnAllDaySlot) {
                event.allDay = false;
            }

            setTasks((prev) => {
                const existing = prev.find((ev) => ev.id === event.id) ?? {}
                const filtered = prev.filter((ev) => ev.id !== event.id)
                return [...filtered, { ...existing, dueDate: { startDate: start, endDate: end }, allDay: event.allDay }]
            })
        },
        [setTasks]
    )

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

            style={{ height: 500 }}
            draggableAccessor={(event) => true}
            onEventDrop={moveEvent}
            onEventResize={resizeEvent}
            popup
            resizable
        />
    );
};
export default CalendarView;
