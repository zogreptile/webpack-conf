export default function desktopCssInjector() {
  const resizeHandler = () => {
    if (window.innerWidth >= 600) {
      import(/* webpackChunkName: 'styles-desktop' */ '../css/styles-desktop.css');
      window.removeEventListener('resize', resizeHandler);
    }
  };
  
  window.addEventListener('resize', resizeHandler);
  resizeHandler();
}
