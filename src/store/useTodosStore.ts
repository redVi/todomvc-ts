import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { FilterType, ITodo } from '@/types'
import { ApiTodos } from '@/api/apiTodos.ts'

const api = new ApiTodos()

export const useTodosStore = defineStore('todos', () => {
  // state
  const list = ref<ITodo[]>([])
  const filterName = ref<FilterType>('active')

  // getters
  const allTodos = computed(() => list.value)
  const doneTodos = computed(() => list.value.filter((i: ITodo) => i.done))
  const activeTodos = computed(() => list.value.filter((i: ITodo) => !i.done))

  // actions
  function setFilter(name: FilterType) {
    filterName.value = name
  }

  async function apiGetTodos(): Promise<void> {
    const response = await api.fetchTodos()
    if (Array.isArray(response)) list.value = response
  }

  async function addTodo(todo: ITodo): Promise<void> {
    list.value.push(todo)
    await api.addTodo(todo)
  }

  async function removeTodo(todo: ITodo): Promise<void> {
    list.value = list.value.filter((i: ITodo) => i.id !== todo.id)
    await api.removeTodo(todo.id)
  }

  async function makeTodoComplete(id: string): Promise<void> {
    const todoIndex = list.value.findIndex(todo => todo.id === id)
    if (todoIndex != -1) list.value[todoIndex].done = true
    await api.updateTodo(id, list.value[todoIndex])
  }

  async function clearCompleted(): Promise<void> {
    list.value = list.value.filter(i => !i.done)
    await api.updateTodos(list.value)
  }

  return {
    apiGetTodos,
    filterName,
    allTodos,
    doneTodos,
    activeTodos,
    addTodo,
    removeTodo,
    makeTodoComplete,
    setFilter,
    clearCompleted,
  }
})
