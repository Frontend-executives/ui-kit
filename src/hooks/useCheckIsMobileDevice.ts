export const useCheckIsMobileDevice = (): boolean => {
  const userAgent = window.navigator.userAgent
  const mobileTagsRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i

  return mobileTagsRegex.test(userAgent)
}
