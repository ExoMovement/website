import { Component, OnInit } from '@angular/core';
import { ImageHref } from 'src/app/models/image';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
  carouselSlideItems: CarouselSlideItem[];
  descriptions: Description[];
  team: Description[];
  timeline: Description[];
  value: number = 0;

  constructor() { 
    this.carouselSlideItems = [
      new CarouselSlideItem("./././assets/home/arduino-board-concept.png", "First Slide"),
      new CarouselSlideItem("./././assets/home/circuit-board.png", "Second slide"),
      new CarouselSlideItem("./././assets/home/exo-hands.png", "Third slide"),
      new CarouselSlideItem("./././assets/home/Milling.png", "Fourth slide"),
    ];

    this.descriptions = [
      new Description("", "undefined image", "What", "", "We are doing exo-skeleton"),
      new Description("", "undefined image", "Why", "", "It seems like the right thing to do"),
    ]

    this.team = [
      new Description("", "undefined image", "Odin", "", ""),
      new Description("", "undefined image", "Dylan", "", ""),
      new Description("", "undefined image", "Sean", "", ""),
    ]

    this.timeline = [
      new Description("", "undefined image", "Odin", "", ""),
    ];
  }
  ngOnInit(): void {
  }
}

class CarouselSlideItem extends ImageHref {
  static slideIndex: number = 0;
  index: number;

  constructor(href: string, altText: string) {
    super(href, altText);
    this.index = CarouselSlideItem.slideIndex++;
  }
}

class Description extends ImageHref {
  title: string;
  subtitle: string
  description: string;

  constructor(href: string, altText: string, title: string, subtitle: string, description: string) {
    super(href, altText);
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
  }
}