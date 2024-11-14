import { ITodo, ShortResponseBody } from '@/types'

export class ApiTodos {

  url = 'http://localhost:3000/tasks/'

  async fetchTodos(): Promise<ITodo[] | ShortResponseBody> {
    const response = await fetch(this.url)

    if (response.ok) {
      return await response.json()
    } else {
      return { status: response.status, message: response.statusText }
    }
  }

  async updateTodos(list: ITodo[]): Promise<void> {
    await fetch(this.url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(list),
    })
  }

  async addTodo(todo: ITodo): Promise<void> {
    await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(todo),
    })
  }

  async removeTodo(id: string | number): Promise<void> {
    await fetch(this.url + id, {
      method: 'DELETE',
    })
  }

  async updateTodo(id: string | number, todo: ITodo): Promise<void> {
    await fetch(this.url + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(todo),
    })
  }
}