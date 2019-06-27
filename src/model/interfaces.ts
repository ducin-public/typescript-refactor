export interface Todo {
    id: string,
    title: string,
    completed: boolean
}

export interface Storage {
    getAll(): void,
    create(payload: Todo): void,
    delete(payload: Todo['id']): void,
    update(payload: Todo): void,
    toggle(payload: Todo): void,
    toggleAll(payload: Todo): void,
    destroy(payload: Todo): void,
    destroyCompleted(): void
}