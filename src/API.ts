/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateTaskMutationVariables = {
  owner: string,
  title: string,
  taskStatus: string,
  description: string,
};

export type CreateTaskMutation = {
  // In this example, only users in the ManagerGroup can create tasks
  createTask:  {
    __typename: "Task",
    id: string,
    owner: string,
    title: string,
    description: string,
    taskStatus: string | null,
  } | null,
};

export type UpdateTaskStatusMutationVariables = {
  id: string,
  taskStatus: string,
};

export type UpdateTaskStatusMutation = {
  // Both Employees and Managers can update a task's status
  updateTaskStatus:  {
    __typename: "Task",
    id: string,
    owner: string,
    title: string,
    description: string,
    taskStatus: string | null,
  } | null,
};

export type UpdateTaskBodyMutationVariables = {
  id: string,
  title: string,
  description: string,
};

export type UpdateTaskBodyMutation = {
  updateTaskBody:  {
    __typename: "Task",
    id: string,
    owner: string,
    title: string,
    description: string,
    taskStatus: string | null,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  // Users belonging to both EmployeesGroup and ManagerGroup can read a particular task
  getTask:  {
    __typename: "Task",
    id: string,
    owner: string,
    title: string,
    description: string,
    taskStatus: string | null,
  } | null,
};

export type AllTasksQueryVariables = {
  nextToken?: string | null,
};

export type AllTasksQuery = {
  // Only Managers can list all the Tasks
  allTasks:  {
    __typename: "TaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      owner: string,
      title: string,
      description: string,
      taskStatus: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};
