export interface Todo {
    id: string,
    title: string,
    completed: boolean
}

export interface Storage {
    getAll(): Todo[],
    create(payload: Todo): void,
    toggle(payload: Todo): void,
    toggleAll(payload: Todo[]): void,
    delete(payload: Todo['id']): void,
    deleteAll(payload: Todo[]): void,
    update(payload: Todo['title']): void
}