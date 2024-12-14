function handleSearch(event) {
  if (event.key === "Enter") {
    const query = event.target.value;
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;
  }
}
