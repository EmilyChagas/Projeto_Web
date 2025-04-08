import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('container') container!: ElementRef<HTMLDivElement>;

  onLoginClick(): void {
    this.container.nativeElement.classList.remove("right-panel-active");
  }
  
  onRegisterClick(): void {
    this.container.nativeElement.classList.add("right-panel-active");
  }

}

