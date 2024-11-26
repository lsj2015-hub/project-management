import React from "react";
import { format } from "date-fns";
import { Task } from "@/state/api";
import Image from "next/image";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className="mb-3 rounded bg-white p-4 shadow dark:bg-dark-secondary dark:text-white">
      {task.attachments && task.attachments?.length > 0 && (
        <div className="">
          <strong>Attachments:</strong>
          <div className="flex flex-wrap">
            <Image
              src={`/${task.attachments[0].fileURL}`}
              alt={task.attachments[0].fileName}
              width={400}
              height={200}
              className="rounded-md"
            />
          </div>
        </div>
      )}
      <p className="">
        <strong>ID:</strong> {task.id}
      </p>
      <p className="">
        <strong>Title:</strong> {task.title}
      </p>
      <p className="">
        <strong>Description:</strong>{" "}
        {task.description || "No description provided"}
      </p>
      <p className="">
        <strong>Status:</strong> {task.status}
      </p>
      <p className="">
        <strong>Priority:</strong> {task.priority}
      </p>
      <p className="">
        <strong>Tags:</strong> {task.tags || "No tags"}
      </p>
      <p className="">
        <strong>startDate:</strong>
        {task.startDate ? format(new Date(task.startDate), "P") : "Not set"}
      </p>
      <p className="">
        <strong>dueDate:</strong>
        {task.dueDate ? format(new Date(task.dueDate), "P") : "Not set"}
      </p>
      <p className="">
        <strong>Author:</strong>{" "}
        {task.author ? task.author.username : "Unknown"}
      </p>
      <p className="">
        <strong>Assignee:</strong>{" "}
        {task.assignee ? task.assignee.username : "Unassigned"}
      </p>
    </div>
  );
};

export default TaskCard;
