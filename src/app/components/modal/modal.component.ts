import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() modalWidth: number = 0;
  @Input() modalHeight: number = 0;
  @Input() title: string = ''; // Modal title
  @Input() data: string = ''; // Modal data
  @Input() showModal: boolean = false; // Control modal visibility
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter(); // Event to close modal
  

  // Method to close the modal
  close() {
    this.closeModal.emit(false);
  }
}
