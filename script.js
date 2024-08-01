const accessKey = "CX5scR6z9igd44j7R42El6VgdKDDkFcwBXOZsesBiPQ";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML = ""; // Clear previous results
    }

    const results = data.results;
    results.forEach(result => {
        const div = document.createElement("div");
        div.classList.add("result-item");
        const img = document.createElement("img");
        img.src = result.urls.small;
        img.alt = result.alt_description;
        div.appendChild(img);
        searchResult.appendChild(div);
    });

    if (data.total_pages > page) {
        showMoreBtn.style.display = "block";
    } else {
        showMoreBtn.style.display = "none";
    }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
});
