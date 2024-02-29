function navToggle() {
  document.getElementById("headerUl").classList.toggle("_active");
  document.getElementById("html").classList.toggle("_overflow");
}
document.getElementById("copyright").textContent = new Date().getFullYear();

// Находим все элементы SVG на странице
var svgElements = document.querySelectorAll("svg");
// Перебираем каждый элемент SVG
svgElements.forEach(function (svgElement) {
  // Добавляем обработчик события click
  svgElement.addEventListener("click", function () {
    // Получаем путь, содержащий галочку
    var pathElement = svgElement.querySelector("path:nth-child(2)");

    // Проверяем, есть ли атрибут fill у пути
    if (pathElement.getAttribute("stroke")) {
      // Если есть, удаляем атрибут fill
      pathElement.removeAttribute("stroke");
    } else {
      // Если нет, добавляем атрибут fill с нужным значением
      pathElement.setAttribute("stroke", "#022A1E");
    }
  });
});
