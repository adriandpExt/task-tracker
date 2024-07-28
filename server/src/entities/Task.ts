export interface Tasks {
  id?: string;
  title: string;
  description: string;
  dueDate?: string;
  statusId: number;
  assignTo: string;
  createdBy?: string;
}

export interface CreateTask {
  id?: string;
  title: string;
  description: string;
  statusId: number;
  assignTo: string;
}

export interface UpdateTask {
  id?: string;
  title: string;
  description: string;
  dueDate: string;
  statusId: number;
  assignTo: string;
  createdBy?: string;
}
