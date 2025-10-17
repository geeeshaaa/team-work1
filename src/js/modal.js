// Mobile Modal Menu Functionality
(function () {
  // константа
  const burgerButton = document.querySelector('.burger-menu-button');
  const mobileModal = document.getElementById('mobile-modal');
  const navLinks = document.querySelectorAll('.mobile-modal-nav-link');

  // перевіряє стан відкриття/закриття модалки
  function toggleModal() {
    const isOpen = mobileModal.classList.contains('is-open');

    if (isOpen) {
      closeModal();
    } else {
      openModal();
    }
  }

  // відкриття модалки
  function openModal() {
    mobileModal.classList.add('is-open');
    burgerButton.classList.add('is-open');
  }

  // закриття модалки
  function closeModal() {
    mobileModal.classList.remove('is-open');
    burgerButton.classList.remove('is-open');
  }

  // клік по бургеру
  burgerButton.addEventListener('click', toggleModal);

  // Закриття модалки при кліку на посилання навігації
  navLinks.forEach(link => {
    link.addEventListener('click', closeModal);
  });
})();
