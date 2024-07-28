export interface TaskAssignment {
  id?: string;
  taskId: string;
  assignTo: string;
  assignBy: string;
}

export interface TaskAssignmentByUser {
  taskId: string;
  title: string;
  description: string;
  dueDate: string;
  statusId: string;
}

export interface PostTaskAssign {
  taskId: string;
  assignTo: string;
}
