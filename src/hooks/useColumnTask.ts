import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { ColumnType } from "../utils/enums";
import { TaskModel } from "../utils/models";
import useTaskCollection from "./useTaskCollection";

function useColumnTasks(column: ColumnType) {
  const [tasks, setTasks] = useTaskCollection();

  const addEmptyTask = useCallback(() => {
    console.log(`Adding new empty task to ${column} column`);

    setTasks((allTasks) => {
      const columnTasks = allTasks[column];

      if (columnTasks.length > MAX_TASK_PER_COLUMN) {
        
      }
    });
  }, [column, setTasks]);
}

export default useColumnTasks;