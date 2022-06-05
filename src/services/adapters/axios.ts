import axios, { AxiosRequestConfig } from 'axios'
declare module 'axios' {
  export type AxiosResponse<T = any> = Promise<T>
}

export const endpoints = {
  fakeOnline: 'https://random-data-api.com/api/stripe/random_stripe',
}

export const req = async <T>(endpoint: string, callback: (arg: T) => void) => {
  try {
    const { data } = await axios.request({
      method: 'get',
      url: endpoint,
    })
    callback(data)
  } catch (error: unknown) {
    console.error(error)
  }
}
