import { animationFrameWrapper, findElement } from 'simon-js-tool'
import { nextTick } from 'vue'
export function delivery() {
  const listWrapper = findElement('.jobs-list')!
  const lists = findElement('a', true, listWrapper) as unknown as HTMLAnchorElement[]
  lists?.forEach(list =>
    window.open(list.href),
  )

  const stop = animationFrameWrapper(async () => {
    const btn = findElement('btn-container')!
    if (!btn)
      return
    const deliveryresume = findElement('btn-outline', btn)
    if (!deliveryresume)
      return
    deliveryresume?.click()
    await nextTick()
    await nextTick()
    const resumeLists = findElement('resume-list')!
    if (!resumeLists)
      return
    const resume = findElement('li', true, resumeLists)!
    if (!resume)
      return
    const latestResume = Array.from(resume).slice(-1)[0] as HTMLElement
    latestResume?.click()
    const footer = findElement('dialog-footer')!
    const submit = findElement('.btn-sure', footer)
    submit?.click()
    stop()
    window.close()
  }, 500)
}

