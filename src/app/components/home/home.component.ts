import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showPart1 = false;

  showPart2 = false;

  showPart3 = false;

  showPart4 = false;

  showPart5 = false;

  showPart6 = false;

  @HostListener("window:scroll", ["$event"]) private onScroll($event: any): void {
    if (window.scrollY >= this.part1.nativeElement.offsetTop - 300) {
      this.showPart1 = true;
    }
    if (window.scrollY >= this.part2.nativeElement.offsetTop - 300) {
      this.showPart2 = true;
    }
    if (window.scrollY >= this.part3.nativeElement.offsetTop - 300) {
      this.showPart3 = true;
    }
    if (window.scrollY >= this.part4.nativeElement.offsetTop - 300) {
      this.showPart4 = true;
    }
    if (window.scrollY >= this.part5.nativeElement.offsetTop - 300) {
      this.showPart5 = true;
    }
    if (window.scrollY >= this.part6.nativeElement.offsetTop - 300) {
      this.showPart6 = true;
    }
    console.log("show Part 1", this.showPart1)
  }

  @ViewChild('part1', { static: true }) part1!: ElementRef;
  @ViewChild('part2', { static: true }) part2!: ElementRef;
  @ViewChild('part3', { static: true }) part3!: ElementRef;
  @ViewChild('part4', { static: true }) part4!: ElementRef;
  @ViewChild('part5', { static: true }) part5!: ElementRef;
  @ViewChild('part6', { static: true }) part6!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  returnPositionPart1() {
    return this.part1.nativeElement.offetTop;
  }
}
