import { Component, OnInit } from '@angular/core';
import { ImageHref } from 'src/app/models/image';
import { CarouselSlideItem } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  carouselSlideItems: CarouselSlideItem[];
  descriptions: Description[];

  constructor() { 
    this.carouselSlideItems = [
      new CarouselSlideItem("./././assets/services/CAD_Model.png", "First Slide - 3D Modeling"),
      new CarouselSlideItem("./././assets/services/Cloud-Hosting.jpg", "Second slide - Cloud Web Hosting"),
      new CarouselSlideItem("./././assets/services/OnPremise-Hosting.jpg", "Third slide - On-Premise Web Hosting"),
    ]; 
    this.descriptions = [
      new Description("./././assets/home/GearLogo.png", "undefined image", "What is Exo-Movement?", "A Bio-Mechanical Company", "Exo-Movement is a for-profit company in the biomechanical field developing an exoskeleton suit for those who are paralysis victims, specifically paraplegics. The suit will provide its user more independence and improve their quality of life through a non-invasive method of regaining the ability to walk, bend over, and pick up items."),
      new Description("./././assets/home/Spine-Vector.png", "undefined image", "Why paralysis victims?", "The undersupported populus", "There are currently 5.4 million people in America suffering from paralysis. They cannot stand, walk or lift anything without some form of assistance. Most individuals incur upwards of $2.5 million in medical bills over the course of their lives, all while being provided minimal medical options. Our device aims to ease this economic nightmare and allow these individuals to return to some form of normalcy."),
      new Description("./././assets/home/brain.png", "undefined image", "How does it work?", "Mind-Controlled Robo-Suit", "The device is meant to assist with torso movement and lifting strength. It will be controlled through an electroencephalogram (EEG) and a series of motors and actuators. Essentially, it would control the motion of the user's upper body by reading the electrical signals from the brain, just as your muscles do now. It will maintain the natural motion paths and even offer predictive movements through a machine learning protocol (artificial intelligence)."),
    ]
  }
  ngOnInit(): void {
  }
}
class Description extends ImageHref {
  static DescriptionIndex: number = 0;
  index: number;
  title: string;
  subtitle: string
  description: string;

  constructor(href: string, altText: string, title: string, subtitle: string, description: string) {
    super(href, altText);
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.index = Description.DescriptionIndex++;
  }
}