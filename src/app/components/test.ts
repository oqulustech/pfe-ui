showModal = false;
modalWidth: number = 600;
modalHeight: number = 200;
modalTitle = 'Modal Title';
data = 'This is the message inside the modal.';

// Method to open modal
openModal() {
  this.showModal = true;
}

// Method to close modal
closeModal(close: boolean) {
  this.showModal = close;
}