import { TaskGroupType } from '../Types/Task';

export const taskDataTest: TaskGroupType[] = [
  {
    id: 1,
    title: 'Group A',
    tasks: [
      { id: 1, title: 'Task 1zzzzzzz', status: true },
      { id: 2, title: 'Task 2', status: true },
      { id: 3, title: 'Task 3', status: false },
      { id: 4, title: 'Task 4', status: true },
      { id: 5, title: 'Task 5', status: false },
      //.... them 1 thang
    ],
  },
  {
    id: 2,
    title: 'Group Bzzzs',
    tasks: [
      { id: 6, title: 'Task 6', status: false },
      { id: 7, title: 'Task 7', status: false },
      { id: 8, title: 'Task 8', status: true },
      { id: 9, title: 'Task 9', status: false },
      { id: 10, title: 'Task 10', status: false },
    ],
  },
  {
    id: 3,
    title: 'Group C',
    tasks: [
      { id: 6, title: 'Task 6', status: true },
      { id: 7, title: 'Task 7', status: false },
      { id: 8, title: 'Task 8', status: true },
      { id: 9, title: 'Task 9', status: true },
      { id: 10, title: 'Task 10', status: false },
    ],
  },
];
