function search() {
    const searchBox = document.getElementById("search-box");
    const query = searchBox.value.toLowerCase();
    const results = document.getElementById("results");
  
    let count = 0;
    let html = "";
    const elements = document.querySelectorAll("*");
  
    elements.forEach((element) => {
      if (element.innerText.toLowerCase().includes(query)) {
        count++;
        html += `<p>Result ${count}: ${element.innerText}</p>`;
      }
    });
  
    if (count > 0) {
      results.innerHTML = `<h2>Results (${count}):</h2>${html}`;
    } else {
      results.innerHTML = "<p>No results found.</p>";
    }
  }
  