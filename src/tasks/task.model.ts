export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
export enum TaskStatus {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
  PROGRESS = 'PROGRESS',
}
