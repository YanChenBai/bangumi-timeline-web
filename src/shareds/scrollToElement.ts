export function scrollToElement(id: string, offset = 0, smooth = true) {
  const target = document.getElementById(id)
  if (!target) return
  const top = target!.offsetTop + offset
  window.scrollTo({
    top: top,
    behavior: smooth ? 'smooth' : 'instant'
  })
}
