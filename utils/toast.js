//普通提示
function toast(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'none',
    duration: 3000
  })
}
//错误提示
toast.err = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'error',
    duration: 3000
  })
}
//成功提示
toast.success = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'success',
    duration: 3000
  })
}
// loading提示
toast.loading = (title, duraction) => {
  uni.showToast({
    title: '正在加载中...',
    icon: 'loading'
  })
}
export default toast
