// import { TaskItemType } from '../../Types/Task';

// const addTaskItem = (
//   groupId: number,
//   inputTaskItem: string,
//   onSuccess?: () => void
// ) => {
//   if (!inputTaskItem) {
//     console.error('inputTaskItem must not be empty');
//     return;
//   }

//   const foundedGroupTask = taskGroupList.find(
//     (taskGroup) => taskGroup.id === groupId
//   );
//   if (!foundedGroupTask) return;

//   const newTaskItem: TaskItemType = {
//     id: new Date().getMilliseconds(),
//     title: inputTaskItem,
//     status: false,
//   };

//   const newListTaskItem = [...foundedGroupTask.tasks, newTaskItem];
//   foundedGroupTask.tasks = newListTaskItem;

//   const newTaskGroupList = taskGroupList.map((taskGroup) => {
//     if (taskGroup.id === groupId) {
//       return foundedGroupTask;
//     }
//     return taskGroup;
//   });
//   setTaskGroupList(newTaskGroupList);

//   onSuccess?.();
// };
