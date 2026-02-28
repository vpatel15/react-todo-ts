import Button from "@mui/material/Button";
import Input from "../components/Input/Input";
import "./Todo.css";
import { useState } from "react";
import List from "../components/List/List";
import React from "react";

import { Todo, TodoSchema } from "../schemas/todo";

const Todo: React.FC = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<Todo[]>([]);

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const addTask = React.useCallback(() => {
    const newTask: Todo = {
      id: Math.floor(Math.random() * 100),
      checked: false,
      label: task,
    };

    // validate newTask against our schema before inserting
    const parsed = TodoSchema.safeParse(newTask);
    if (!parsed.success) {
      // in a real app you might report this to analytics or show UI
      console.error('invalid todo created', parsed.error);
      return;
    }

    setTaskList([...taskList, parsed.data]);
  }, [task, taskList]);

  const deleteTask = React.useCallback((id: number) => {
    const newList = taskList.filter((item) => item.id !== id);
    setTaskList([...newList]);
  }, [taskList]);

  const toggleCheck = React.useCallback((id: number) => {
    console.log("toggle: ", id);

    const updatedTaskList = taskList.map((task) => {
      if (id === task.id) {
        task.checked = !task.checked
      }
      return task;
    })
    setTaskList(updatedTaskList);
  }, [taskList]);

  const MemoizedList = React.memo(List);
  const MemoizedButton = React.memo(Button);

  return (
    <div className="todo">
      <div className="todo-task-box">
        <Input
          type="text"
          name="task"
          value={task}
          label={"Enter todo here"}
          onChange={handleTaskChange}
        />
        <MemoizedButton variant="contained" onClick={addTask}>
          Add Task
        </MemoizedButton>
      </div>
      <MemoizedList
        taskList={taskList}
        toggleCheck={toggleCheck}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default Todo;
