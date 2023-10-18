import React from "react";
import NewTaskForm from "../Task/Form/newTaskForm";
import TaskCart from "../Task";
import { ApiResponse } from "./tasks.types";

const TasksList: React.FC<ApiResponse> = ({ tasks }) => {
  return (
    <div className="flex justify-content-center align-items-start">
      <div>
        <NewTaskForm />
      </div>

      <div>
        {tasks.map((task) => (
          <TaskCart {...task} />
        ))}
      </div>
    </div>
  );
};

export default TasksList;
