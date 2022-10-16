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
  selectedMember: Description;

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
      new Description("./././assets/home/arduino-board-concept.png", "undefined image", "What is Exo-Movement?", "A Bio-Mechanical Company", "Exo-Movement is a for-profit company in the biomechanical field developing an exoskeleton suit for those who are paralysis victims, specifically paraplegics. The suit will provide its user more independence and improve their quality of life through a non-invasive method of regaining the ability to walk, bend over, and pick up items."),
      new Description("./././assets/home/arduino-board-concept.png", "undefined image", "Why paralysis victims?", "The undersupported populus", "There are currently 5.4 million people in America suffering from paralysis. They cannot stand, walk or lift anything without some form of assistance. Most individuals incur upwards of $2.5 million in medical bills over the course of their lives, all while being provided minimal medical options. Oue device aims to ease this economic nightmare and allow these individuals to return to some form of normalcy."),
      new Description("./././assets/home/arduino-board-concept.png", "undefined image", "How does it work?", "Mind-Controlled Robo-Suit", "The device is meant to assist with torso movement and lifting strength. It will be controlled through an electroencephalogram (EEG) and a series of motors and actuators. Essentially, it would control the motion of the user's upper body by reading the electrical signals from the brain, just as your muscles do now. It will maintain the natural motion paths and even offer predictive movements through a machine learning protocol (artificial intelligence)"),
    ]

    this.team = [
      new Description("./././assets/home/team/odin.jpg", "undefined image", "Odin Francis", "Founder, Vice President, and Lead Developer", "A fourth year student at Boston University pursuing a dual degree in Mechanical Engineering with a concentration in Aerospace and Interdisciplinary Physics. Odin has experience with the engineering process as well as advanced CAD modeling, intermediate woodworking, and intermediate metalworking. He also has extensive knowledge of robotics and automotive mechanics."),
      new Description("./././assets/home/team/no_picture.png", "undefined image", "Dylan Finn", "Head of BCI Research", "From a young age, Dylan has found a passion for computers and their potential, and recently completed his Computer Science B.S. with a concentration in Data Analytics. His interest in the Exo-Movement Project was inspired by the untimely paralyzing of a close family friend in 2006. Wanting to see this family-friend walk his daughter down the aisle is what has driven the research into Brain Computer Interfacing in the hopes of developing a brain to motor control system. Dylan is currently working as a junior developer and will be seeking to attend a graduate program to further his knowledge and make his dream a reality.	"),
      new Description("./././assets/home/team/sean.jpg", "undefined image", "Sean McNamee", "Lead Software Developer", "Eagle Scout 2018. B.S. in Computer Science 2021. Azure Developer Associate 2022. Sean is specialized in .NET technologies, experienced with Angular, fascinated with ML and microarchitecture, and believes that every day is an opportunity for improvement. This belief holds true for anyone's knowledge, any technology, and anyone's positive impact on others. As a member of Exo-Movement, he can pursue the first, trailblaze the second, and proliferate the third."),
      new Description("./././assets/home/team/no_picture.png", "undefined image", "Kyle Sousa", "Social Media Manager", "Finishing a Bachelor of Arts in Music, concentrating in Ethnomusicology. "),
      new Description("./././assets/home/team/chris.png", "undefined image", "Christopher Gibson", "Research Assistant, Anatomy and Neurology", "Finishing a Bachelor of Science degree in Biology at the City College of New York (CCNY), concentration in cellular biology and molecular genetics. Teaching assistant at CCNY in General Chemistry, as well as a tutor in Introductory Biology, Genetics, and General Chemistry. Seeking to attend medical school within the next couple of years. Christopher has clinical research experience and has mastered an array of laboratory skills. "),
    ]
    this.selectedMember = this.team[0];

    this.timeline = [
      new Description("", "undefined image", "Odin and Dylan found Exo-Movement", "", ""),
    ];
  }
  ngOnInit(): void {
  }

  onMemberSelected(member: Description): void {
    this.selectedMember = member;
  }
}

class CarouselSlideItem extends ImageHref {
  constructor(href: string, altText: string) {
    super(href, altText);
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