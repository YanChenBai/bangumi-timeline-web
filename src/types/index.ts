export interface Bangumi {
  name: string
  url: string
  cover: string
  updateTime: string
  episode: string
}

export type GetTimelineResp = {
  value: Bangumi[][]
  id: number
  key: string
  name: string
  updatedAt: string
  createdAt: string
}[]
