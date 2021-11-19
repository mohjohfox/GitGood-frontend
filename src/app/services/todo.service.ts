import { Todo } from '../model/todo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private items: Map<number, Todo> = new Map([
        [1, {
            id: 1,
            title: 'item1',
            done: false,
        }],
        [2, {
            id: 2,
            title: 'item2',
            done: true,
        }],
        [3, {
            id: 3,
            title: 'item3',
            done: false,
        }]
    ]);

    constructor(private readonly httpClient: HttpClient) {
    }

    getAll(): Promise<Todo[]> {
        return Promise.resolve(Array.from(this.items.values()));
    }

    findById(id: number): Promise<Todo> {
        return Promise.resolve(this.items.get(id));
    }

    saveItem(item: Todo): Promise<Todo> {
        let id = item.id;
        if (!id) {
            id = this.items.size + 1;
            item.id = id;
        }

        this.items.set(id, item);

        return Promise.resolve(this.items.get(id));
    }

    private copy(item: Todo): Todo {
        if (!item) {
            return item;
        }
        return JSON.parse(JSON.stringify(item));
    }
}
