// Simple language switcher (placeholder for enhancement)
function setLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(response => response.json())
    .then(texts => {
      Object.keys(texts).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = texts[id];
      });
    });
}
