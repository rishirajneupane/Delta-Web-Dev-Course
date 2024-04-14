document.addEventListener("DOMContentLoaded", () => {
  const editor = document.getElementById("editor");
  const h1 = document.querySelector("h1");

  editor.addEventListener("input", () => {
    h1.innerText = editor.value;
    localStorage.setItem("editorText", editor.value);
  });

  const savedText = localStorage.getItem("editorText");
  if (savedText) {
    editor.value = savedText;
    h1.innerText = savedText;
  }
});
