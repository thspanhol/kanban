import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { ColumnType } from "../utils/enums";
import { TaskModel } from "../utils/models";
import useTaskCollection from "./useTaskCollection";
import { pickChakraRandomColor } from "../utils/helpers";

function useColumnTasks(column: ColumnType) {
  const [tasks, setTasks] = useTaskCollection();

  const addEmptyTask = useCallback(() => {
    console.log(`Adding new empty task to ${column} column`);

    setTasks((allTasks) => {
      const columnTasks = allTasks[column];

      if (columnTasks.length > MAX_TASK_PER_COLUMN) {
        console.log("Too many task!");
        return allTasks;
      }

      const newColumnTask: TaskModel = {
        id: uuidv4(),
        title: `New ${column} task`,
        color: pickChakraRandomColor(".300"),
        column,
      };

      return {
        ...allTasks,
        [column]: [newColumnTask, ...columnTasks],
      };
    });
  }, [column, setTasks]);

  const updateTask = useCallback(
    (id: TaskModel["id"], updateTask: Omit<Partial<TaskModel>, "id">) => {
      console.log(`Updating task ${id} with ${JSON.stringify(updateTask)}`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];

        return {
          ...allTasks,
          [column]: columnTasks.map((task) =>
            task.id == id ? { ...task, ...updateTask } : task
          ),
        };
      });
    },
    [column, setTasks]
  );

  const deleteTask = useCallback(
    (id: TaskModel["id"]) => {
      console.log(`Removing task ${id}..`);

      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: columnTasks.filter((task) => task.id !== id),
        };
      });
    },
    [column, setTasks]
  );

  return {
    tasks: tasks[column],
    addEmptyTask,
    updateTask,
    deleteTask,
  };
}

export default useColumnTasks;
