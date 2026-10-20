// Swiper 8's export map omits its bundled root declarations in bundler mode.
// Use its own types for the runtime exports used by this project.
declare module 'swiper' {
  export * from 'swiper/types';
  export const Navigation: import('swiper/types').SwiperModule;
}
