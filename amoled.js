function replaceInternalCss(internalCssPath, externalCssUrl) {
    fetch(externalCssUrl)
      .then(response => response.text())
      .then(css => {
        const style = document.createElement('style');
        style.innerHTML = css;
        const existingStyle = document.querySelector(`link[href="${internalCssPath}"],style[data-href="${internalCssPath}"]`);
        if (existingStyle) {
          existingStyle.replaceWith(style);
        } else {
          document.head.appendChild(style);
        }
      })
      .catch(error => console.error(error));
  }
  
  replaceInternalCss('/assets/40532.45cfda0794123b4bec3c.css', 'https://cdn.discordapp.com/attachments/1002668973336313916/1087900430048182383/amoled.css');