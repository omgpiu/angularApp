export interface ITask {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}

export type TAddTask = Omit<ITask, 'id'>
