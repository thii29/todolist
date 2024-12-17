import { TodoGroupType } from '../types';

export const sampleData: TodoGroupType[] = [
  {
    idGroup: 1,
    name: 'Group A',
    tasks: [
      { id: 1, title: 'Task 1zzzz', status: true },
      { id: 2, title: 'Task 2', status: true },
      { id: 3, title: 'Task 3', status: false },
      { id: 4, title: 'Task 4', status: true },
      //.... them 1 thang
    ],
  },
  {
    idGroup: 2,
    name: 'Group Bzzzs',
    tasks: [
      { id: 6, title: 'Task 6', status: false },
      { id: 8, title: 'Task 8', status: true },
      { id: 9, title: 'Task 9', status: false },
      { id: 10, title: 'Task 10', status: false },
    ],
  },
  {
    idGroup: 3,
    name: 'Group C',
    tasks: [
      { id: 6, title: 'Task 6', status: true },
      { id: 7, title: 'Task 7', status: false },
      { id: 8, title: 'Task 8', status: true },
      { id: 10, title: 'Task 10', status: false },
    ],
  },
];
