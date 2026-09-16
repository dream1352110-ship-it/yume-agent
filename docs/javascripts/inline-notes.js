(() => {
  const isNoteLink = (link) => {
    try {
      const url = new URL(link.href, window.location.href);
      return (
        url.origin === window.location.origin &&
        url.pathname.includes('/notes/30-resources/tools/hello-agents/')
      );
    } catch {
      return false;
    }
  };

  const getInsertionPoint = (link) =>
    link.closest('p, li, td') || link;

  document.addEventListener('click', async (event) => {
    const link = event.target.closest('a');
    if (!link || !isNoteLink(link)) return;

    event.preventDefault();
    const insertionPoint = getInsertionPoint(link);
    const existing = insertionPoint.nextElementSibling;

    if (existing?.classList.contains('inline-note-card')) {
      existing.remove();
      link.setAttribute('aria-expanded', 'false');
      return;
    }

    const card = document.createElement('details');
    card.className = 'inline-note-card';
    card.open = true;
    card.innerHTML = `
      <summary>详情：${link.textContent.trim()}</summary>
      <div class="inline-note-content"><p>正在加载笔记...</p></div>
    `;
    insertionPoint.after(card);
    link.setAttribute('aria-expanded', 'true');

    card.addEventListener('toggle', () => {
      link.setAttribute('aria-expanded', String(card.open));
      if (!card.open) card.remove();
    });

    try {
      const response = await fetch(link.href);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const html = await response.text();
      const documentFragment = new DOMParser()
        .parseFromString(html, 'text/html')
        .querySelector('.md-content');
      const content = card.querySelector('.inline-note-content');
      if (!documentFragment || !content) throw new Error('笔记内容不存在');
      const heading = documentFragment.querySelector('h1');
      heading?.remove();
      content.replaceChildren(...documentFragment.childNodes);
    } catch (error) {
      const content = card.querySelector('.inline-note-content');
      if (content) content.innerHTML = '<p>暂时无法加载详情，请重新点击或打开独立页面。</p>';
      console.error('Inline note failed:', error);
    }
  });
})();
