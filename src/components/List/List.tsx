import React from 'react'
import ListItem from '../ListItem/ListItem'

interface ListProps {
  taskList: { id: number; label: string }[];
  toggleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: (id: number) => void;
  checkedInputs: number[]
}
const List: React.FC<ListProps> = ({taskList, toggleCheck, onDelete, checkedInputs}: ListProps) => {
  return (
    <>
      {taskList && taskList.length > 0 && (
        <ul className="todo-task-list">
          {taskList.map((item) => (
            <ListItem
              id={item?.id}
              checked={checkedInputs.includes(item?.id)}
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