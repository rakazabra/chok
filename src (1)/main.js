(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-header]"),
      closeModalBtn: document.querySelector("[data-modal-close-header]"),
      modal: document.querySelector("[data-modal-header]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-reviews]"),
      closeModalBtn: document.querySelector("[data-modal-close-reviews]"),
      modal: document.querySelector("[data-modal-reviews]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden-reviews");
      document.body.classList.toggle("no-scroll-reviews");
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();