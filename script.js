const allPagesCheckbox = document.querySelector('.header input');
const pageCheckboxes = document.querySelectorAll('.row:not(.header) input');

allPagesCheckbox.addEventListener('change', () => {
  pageCheckboxes.forEach((cb) => {
    cb.checked = allPagesCheckbox.checked;
  });
});

document.querySelectorAll('.row.selectable').forEach((row) => {
  const checkbox = row.querySelector('input[type="checkbox"]');

  row.addEventListener('click', (e) => {
    if (e.target !== checkbox) {
      checkbox.click();
    }
  });
});
