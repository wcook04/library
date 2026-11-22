(() => {
  const root = new URL('.', document.currentScript.src).pathname;
  const holding = root + 'read/short/';
  if (location.pathname.startsWith(root + '@')) {
    location.replace(holding);
    return;
  }
  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest('button');
    const link = event.target.closest('a[href]');
    const showsAuthors = button?.matches('.edition-switch button:first-child')
      || button?.textContent?.trim() === 'See this paragraph in the authors’ paper';
    const opensAuthors = link?.origin === location.origin && [root, holding, holding.slice(0, -1)].includes(link.pathname);
    if (!showsAuthors && !opensAuthors) return;
    if (!showsAuthors && (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    location.assign(opensAuthors ? link.href : holding);
  }, true);
})();
