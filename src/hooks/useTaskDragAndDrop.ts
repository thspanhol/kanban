import { useDrag } from 'react-dnd';
import { ItemType } from '../utils/enums';
import { DragItem, TaskModel } from '../utils/models';

export function useTaskDragAndDrop({
    task,
    index,
}: {
    task: TaskModel;
    index: number;
}) {
    useDrag<
    DragItem,
    void,
    { isDragging: boolean }
    >({})
}