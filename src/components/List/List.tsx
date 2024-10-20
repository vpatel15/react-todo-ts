import React from 'react'
import ListItem from '../ListItem/ListItem'

interface ListProps {
  taskList: { id: number; label: string; checked: boolean }[];
  toggleCheck: (id: number) => void;
  onDelete: (id: number) => void;
}
const List: React.FC<ListProps> = ({taskList, toggleCheck, onDelete}: ListProps) => {
  return (
    <>
      {taskList && taskList.length > 0 && (
        <ul className="todo-task-list">
          {taskList.map((item) => (
            <ListItem
              id={item?.id}
              checked={item.checked}
              onCheckBoxChange={toggleCheck}
              label={item?.label}
              onDelete={() => onDelete(item?.id)}
            />
          ))}
        </ul>
      )}
    </>
  )
}

export default List