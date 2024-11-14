export interface ITodo {
  id: string;
  name: string;
  done: boolean;
}

export type FilterType = 'active' | 'all' | 'done'
export type ShortResponseBody = { status: number; message: string }