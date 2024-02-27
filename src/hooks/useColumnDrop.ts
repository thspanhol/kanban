import { useDrop } from 'react-dnd';
import { ColumnType, ItemType } from '../utils/enums';
import { DragItem, TaskModel } from '../utils/models';

function useColumnDrop(
    column: ColumnType,
    handleDrop: (fromColumn: ColumnType, taskId: TaskModel['id']) => void,
) {}

export default useColumnDrop;