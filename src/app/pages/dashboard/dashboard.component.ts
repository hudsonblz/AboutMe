import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faDatabase, faMoneyBill, faRulerCombined, faTachometerAlt, faTerminal } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faAngular,
  faJs,
  faCss3,
  faHtml5,
  faLaravel,
  faSass,
  faLinux,
  faPhp,
  faPython,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  acquiredSkills: Array<SkillView> = [];
  learningSkills: Array<SkillView> = [];

  constructor() {}

  ngOnInit(): void {
    this.loadSkills();
  }

  loadSkills() {
    this.loadAcquiredSkills();
    this.loadLearningSkills();
  }

  loadAcquiredSkills() {
    this.acquiredSkills.push({ icon: faAngular, skillName: 'Angular' });
    this.acquiredSkills.push({ icon: faJs, skillName: 'JavaScript' });
    this.acquiredSkills.push({ icon: faHtml5, skillName: 'HTML' });
    this.acquiredSkills.push({ icon: faCss3, skillName: 'CSS' });
    this.acquiredSkills.push({ icon: faSass, skillName: 'SASS e BEM' });
    this.acquiredSkills.push({ icon: faPhp, skillName: 'PHP' });
    this.acquiredSkills.push({ icon: faLaravel, skillName: 'Laravel' });
    this.acquiredSkills.push({ icon: faLinux, skillName: 'Linux' });
    this.acquiredSkills.push({ icon: faDatabase, skillName: 'SQL' });
  }

  loadLearningSkills(){
    this.learningSkills.push({ icon: faTerminal, skillName: 'Shell script' });
    this.learningSkills.push({ icon: faPython, skillName: 'Python' });
    this.learningSkills.push({ icon: faTachometerAlt, skillName: 'Produtividade' });
    this.learningSkills.push({ icon: faRulerCombined, skillName: 'Design Patterns' });
    this.learningSkills.push({ icon: faMoneyBill, skillName: 'Investimentos'});
  }
}

export class SkillView {
  icon: any;
  skillName: string = '';
}
