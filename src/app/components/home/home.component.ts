import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('Hello')
  canvasRef!: ElementRef;

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    let ctx = canvas.getContext('2d');

    console.log(canvas);
  }
}
