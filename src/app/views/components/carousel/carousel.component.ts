import { Component, ContentChild, ElementRef, Input, OnInit, QueryList, TemplateRef } from '@angular/core';
import { ImageHref } from 'src/app/models/image';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() carouselSlideItems: CarouselSlideItem[] = [];
  
  @ContentChild('Title') Title!: TemplateRef<null>;
  @ContentChild('SubTitle') SubTitle!: TemplateRef<null>;

  constructor() {  }

  ngOnInit(): void {
  }

}

/**
 * A CarouselSlideItem is ONLY an image (and it's alt text).
 */
export class CarouselSlideItem extends ImageHref {
  constructor(href: string, altText: string) {
    super(href, altText);
  }
}
