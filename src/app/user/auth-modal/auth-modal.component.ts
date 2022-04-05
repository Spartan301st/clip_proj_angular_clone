import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit, OnDestroy {

  constructor(public modal: ModalService) { }

  ngOnInit(): void {
    // modal for auth
    this.modal.register("auth")
    // modal for test
    // this.modal.register("test")
  }

  ngOnDestroy(): void {
    this.modal.unregister("auth")
  }

}
