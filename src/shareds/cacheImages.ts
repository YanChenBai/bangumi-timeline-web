import type { GetTimelineResp } from '@/types'
import { baseUrl } from './env'

async function isCached(cacheName: string, url: string) {
  if ('caches' in window) {
    return caches.open(cacheName).then(async (cache) => {
      const response = await cache.match(url)
      return response ? true : false
    })
  } else {
    return Promise.resolve(false)
  }
}

const getImgUrl = (img: string) => `${baseUrl}/img/${img}`
const CACHE_NAME = 'timeline-images'
export async function cacheImages(data: GetTimelineResp) {
  const images = data
    .map((item) =>
      item.value.map((bangumis) => bangumis.map((bangumi) => getImgUrl(bangumi.cover)))
    )
    .reduce((acc, cur) => acc.concat(cur), [])
    .reduce((acc, cur) => acc.concat(cur), [])

  const notCachedImages = new Set<string>()

  for (const img of images) {
    const _isCached = await isCached(CACHE_NAME, img)
    if (!_isCached) {
      notCachedImages.add(img)
    }
  }

  console.log('Not Cached Images Count:', `${notCachedImages.size}/${images.length}`)

  const cache = await caches.open(CACHE_NAME)
  await cache.addAll(notCachedImages)
}
