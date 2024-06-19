import type { GetTimelineResp } from '@/types'
import { baseUrl } from '@/shareds/env'

/** 获取时间线 */
async function getTimeline() {
  return await fetch(baseUrl + '/timeline').then((res) => res.json() as Promise<GetTimelineResp>)
}

const Apis = {
  getTimeline
}

export default Apis
