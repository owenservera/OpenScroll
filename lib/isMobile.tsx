export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  
  // Check for mobile devices
  const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  
  // Also check screen width for tablets and smaller devices
  const screenCheck = window.innerWidth <= 768;
  
  return mobileCheck || screenCheck;
};