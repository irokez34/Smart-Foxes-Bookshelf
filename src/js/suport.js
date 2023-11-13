document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('additionalItems').style.display = 'none';
});

function toggleExpand() {
  var expandBtn = document.querySelector('.expand-btn');
  var additionalItems = document.getElementById('additionalItems');

  expandBtn.classList.toggle(
    'expanded',
    additionalItems.style.display == 'none'
  );

  additionalItems.style.display =
    additionalItems.style.display == 'none' ? 'flex' : 'none';
}
