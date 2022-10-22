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
  services: CardList[];
  serviceGeneral: CardList;
  faqs: AccordiantItem[];

  constructor() {
    this.carouselSlideItems = [
      new CarouselSlideItem("./././assets/services/CAD_Model.png", "First Slide - 3D Modeling"),
      new CarouselSlideItem("./././assets/services/Cloud-Hosting.jpg", "Second slide - Cloud Web Hosting"),
      new CarouselSlideItem("./././assets/services/OnPremise-Hosting.jpg", "Third slide - On-Premise Web Hosting"),
    ];
    this.services = [
      new CardList("./././assets/home/GearLogo.png", "undefined image", "3D", "CAD and printing prototypes", [
        "3D model creation",
        "Animations",
        "Simulations",
        "Basic finite element analysis",
        "Part rendering",
      ]),
      new CardList("./././assets/home/Spine-Vector.png", "undefined image", "Website", "Management and Maintenance", [
        "Maintain and modify pre-existing sites",
        "Manage hosting (3rd party company)"
      ]), new CardList("./././assets/home/brain.png", "undefined image", "Web App", "Design and Development", [
        "Architect infrastructure for new web applications",
        "Develop new customized sites",
        "Create algorithms for tackling search and other data-focused problems",
        "Full-Stack data-driven applications"
      ])
    ];

    this.serviceGeneral = new CardList("./././assets/home/brain.png", "undefined image", "General", "", [
      "If there is something you want to work on and don't know where to start, email us for a free consultation and even if we can't help you directly, we can point you in the right direction",
    ]);

    this.faqs = [
      new AccordiantItem("./././assets/home/brain.png", "undefined image", "How much is a consultation?", "", 
        "We offer free consultations to discuss any project and give a quote for us to take on the project", 
        true
      ),
      new AccordiantItem("./././assets/home/brain.png", "undefined image", "Can I get a physical prototype?", "", 
        "We are willing to manufacture and ship any custom 3D design for a personal project/a prototype of a product",
      ),
      new AccordiantItem("./././assets/home/brain.png", "undefined image", "I want guidance on my ideas", "Brainstoring and planning", 
        "We can assist in writing a project plan/brainstorming ideas even if we are not doing the project for you (for an hourly rate)",
      ),
    ];
  }
  ngOnInit(): void {
  }

  toggleAccordianItem(accordianItem: AccordiantItem) {
    accordianItem.isShowing = !accordianItem.isShowing;
  }
}
class CardList extends ImageHref {
  static CardListIndex: number = 0;
  index: number;
  title: string;
  subtitle: string
  items: string[];

  constructor(href: string, altText: string, title: string, subtitle: string, items: string[]) {
    super(href, altText);
    this.title = title;
    this.subtitle = subtitle;
    this.items = items;
    this.index = CardList.CardListIndex++;
  }
}

class AccordiantItem extends ImageHref {
  static AccordiantItemIndex: number = 0;
  index: number;
  title: string;
  subtitle: string
  answer: string;
  isShowing: boolean;

  constructor(href: string, altText: string, title: string, subtitle: string, answer: string, showByDefault: boolean = false) {
    super(href, altText);
    this.title = title;
    this.subtitle = subtitle;
    this.answer = answer;
    this.index = AccordiantItem.AccordiantItemIndex++;
    this.isShowing = showByDefault;
  }
}