// src/composables/useCountdown.js
import { ref, computed, onMounted, onUnmounted } from 'vue'

/**
 * 倒计时
 * @param {number} targetTs - 目标时间戳（毫秒）
 */
export function useCountdown(targetTs) {
  const now = ref(Date.now())
  let timer = null

  const diff = computed(() => Math.max(0, targetTs - now.value))

  const days    = computed(() => Math.floor(diff.value / 86400000))
  const hours   = computed(() => Math.floor((diff.value % 86400000) / 3600000))
  const minutes = computed(() => Math.floor((diff.value % 3600000) / 60000))
  const seconds = computed(() => Math.floor((diff.value % 60000) / 1000))

  const isEnd = computed(() => diff.value === 0)

  onMounted(() => { timer = setInterval(() => { now.value = Date.now() }, 1000) })
  onUnmounted(() => { clearInterval(timer) })

  return { days, hours, minutes, seconds, isEnd }
}