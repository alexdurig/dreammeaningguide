async function handleSearch(e) {
  const query = e.target.value.toLowerCase();
  const resultsList = document.getElementById('search-results');

  if (!query) {
    resultsList.style.display = 'none';
    resultsList.innerHTML = '';
    return;
  }

  const res = await fetch('/dreams/search-index.json');
  const data = await res.json();

  const results = data.filter((item) =>
    item.title.toLowerCase().includes(query)
  );

  if (results.length > 0) {
    resultsList.style.display = 'block';
    resultsList.innerHTML = results.map((r) => `
      <li style="padding: 0.6rem 0;">
        <a href="/dreams/${r.slug}/" style="color: #6a4df5; font-weight: 600;">
          ${r.title}
        </a>
      </li>
    `).join('');
  } else {
    resultsList.style.display = 'none';
    resultsList.innerHTML = '';
  }
}

document.getElementById('search-input').addEventListener('input', handleSearch);
 
