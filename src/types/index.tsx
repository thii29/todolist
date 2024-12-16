export type TodoItemType = {
    id: number,
    title: string,
    status: boolean
}
export type TodoGroupType = {
    idGroup: number,
    name: string,
    tasks: TodoItemType[]
}
export enum SortTypeEnum {
    ALl ='all',
    COMPLETED = 'completed'
}