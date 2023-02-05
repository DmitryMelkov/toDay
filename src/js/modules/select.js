export const customSelect = () => {
  const dropdown = document.querySelectorAll('.dropdown');

  dropdown.forEach((dropDownWrapper) => {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener('click', function (e) {
      dropDownList.classList.toggle('dropdown__list--visible');
      dropDownBtn.classList.toggle('dropdown__button--active');
    });

    //запись значения в селект
    dropDownListItems.forEach((listItem) => {
      listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        dropDownBtn.innerHTML = this.innerHTML;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove('dropdown__list--visible');
        dropDownBtn.classList.remove('dropdown__button--active');
      });
    });

    dropDownList.addEventListener('mouseleave', () => {
      dropDownList.classList.remove('dropdown__list--visible');
      dropDownBtn.classList.remove('dropdown__button--active');
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--visible');
      }
    });
  });

  const form = document.querySelector('.form');

  const formValue = (e) => {
    e.preventDefault();

    

  };

  form.addEventListener('submit', formValue);
};
