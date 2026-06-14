<script>
  let results = [];
  let query = '';

  async function handleSearch(e) {
    query = e.target.value.toLowerCase();

    if (!query) {
      results = [];
      return;
    }

    const res = await fetch('/dreams/search-index.json');
    const data = await res.json();

    results = data.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
  }
</script>
