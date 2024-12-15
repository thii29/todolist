export type TaskItemType = {
  id: number;
  title: string;
  status: boolean;
};

export type TaskGroupType = {
  id: number;
  title: string;
  tasks: TaskItemType[];
};

export enum SortTypeEnum {
  ALL = 'all',
  COMPLETED = 'completed',
}
