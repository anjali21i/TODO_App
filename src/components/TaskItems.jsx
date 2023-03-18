import isToday from "date-fns/isToday";
import isAfter from 'date-fns/isAfter';
import isBefore from "date-fns/isBefore";
import addDays from "date-fns/addDays";
import dateFnsFormat from 'date-fns/format';

const FORMAT = 'dd/MM/yyyy';

export const TaskItems = ({selectedTab, tasks}) => {
    let tasksToRender = [...tasks];
    if(selectedTab === "NEXT_7") {
        tasksToRender = tasksToRender.filter(
            (task) => 
            isAfter(task.date, new Date()) &&
            isBefore(task.date, addDays(new Date(), 7))
        );
    }

    if(selectedTab === "TODAY") {
        tasksToRender = tasksToRender.filter((task) => isToday(task.date));
    }

    return (
        <div className="task-items-container">
            {tasksToRender.map((task) => (
                <div className="task-item">
                    <p>{task.text}</p>
                    <p>{dateFnsFormat(new Date(task.date), FORMAT)}</p>
                </div>
            ))}
        </div>
    );
};