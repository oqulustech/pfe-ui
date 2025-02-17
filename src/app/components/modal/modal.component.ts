import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modalWidth: number = 0;
  @Input() modalHeight: number = 0;
  @Input() title: string = ''; // Modal title
  @Input() data: any; // Modal data
  @Input() showModal: boolean = false; // Control modal visibility
  @Input() showfooter: boolean = false; // Control modal visibility
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter(); // Event to close modal

  ngOnInit() {
    console.log("data----", this.data);
    // Add any initialization logic here
  }

  ngOnDestroy() {
    // Add any cleanup logic here
  }

  // Method to close the modal
  close() {
    this.closeModal.emit(false);
  }

}
