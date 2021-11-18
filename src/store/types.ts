export type SuccessPayload<T> = {
  data: T
}

export type FailurePayload = {
  error: string
}

export type InitialState<T> = {
  pedding: boolean
  data: T
  error: string | null
}