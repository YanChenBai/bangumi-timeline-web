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

const getImgUrl = (img: string) => `${baseUrl}/${img}`

export async function cacheImages(data: GetTimelineResp) {
  const images = data
    .map((item) =>
      item.value.map((bangumis) => bangumis.map((bangumi) => getImgUrl(bangumi.cover)))
    )
    .reduce((acc, cur) => acc.concat(cur), [])
    .reduce((acc, cur) => acc.concat(cur), [])

  const notCachedImages: string[] = []

  for (const img of images) {
    if (!isCached('timeline-images', img)) {
      notCachedImages.push(img)
    }
  }

  const cache = await caches.open('timeline-images')
  cache.addAll(notCachedImages)
}