function toggleExpand() {
  var additionalItems = document.getElementById('additionalItems');
  var expandBtn = document.querySelector('.expand-btn');

  additionalItems.style.display =
    additionalItems.style.display === 'none' ||
    additionalItems.style.display === ''
      ? 'flex'
      : 'none';

  // Добавление/удаление класса "expanded" для изменения стилей стрелки
  expandBtn.classList.toggle(
    'expanded',
    additionalItems.style.display === 'flex'
  );
}
