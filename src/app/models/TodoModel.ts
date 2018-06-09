import { observable } from 'mobx';

export class TodoModel {
    private static nextId = 1;
    private static generateId() {
        return this.nextId++;
    }

    public readonly id: number;
    @observable public text: string;
    @observable public completed: boolean;

    constructor(text: string, completed: boolean = false) {
        this.id = TodoModel.generateId();
        this.text = text;
        this.completed = completed;
    }
}

export default TodoModel;
