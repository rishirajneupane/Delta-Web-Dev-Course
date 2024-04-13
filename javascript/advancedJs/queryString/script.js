const url = "http://universities.hipolabs.com/search?name=";
const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  const country = document.querySelector("input").value;
  const colArr = await getColleges(country);
  showColleges(colArr);
});

async function getColleges(country) {
  try {
    const response = await axios.get(url + country);
    return response.data;
  } catch (error) {
    console.error("Error fetching colleges:", error);
    return [];
  }
}

function showColleges(colArr) {
  const list = document.querySelector("#list");
  list.innerHTML = ""; // Clear previous list items

  colArr.forEach(col => {
    const li = document.createElement("li");
    li.textContent = col.name;
    list.appendChild(li);
  });
}
