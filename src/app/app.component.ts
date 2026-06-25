import { Component } from '@angular/core';

type Project = {
  type: string;
  title: string;
  description: string;
  tags: string[];
};

type Credential = {
  year: string;
  title: string;
  organization: string;
  detail: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly aboutHighlights = [
    'Application development',
    'Process orchestration',
    'Business process modeling',
    'Data science',
    'Machine learning',
  ];

  readonly projects: Project[] = [
    {
      type: 'Product Build',
      title: 'Igikoni Food Ordering App',
      description:
        'Designed and developed a food-ordering web application with payments, a modern client experience, and a database-backed service layer.',
      tags: ['Java', 'MongoDB', 'Angular', 'Stripe'],
    },
    {
      type: 'Reinforcement Learning',
      title: 'DeepRacer',
      description:
        'A reinforcement learning project focused on teaching a race car to complete a track and improve racing behavior through training.',
      tags: ['RL', 'Autonomous Driving', 'Simulation'],
    },
    {
      type: 'Reinforcement Learning',
      title: 'Lunar Lander',
      description:
        'A lunar landing project using proximal policy optimization to learn controlled landing behavior in a simulated environment.',
      tags: ['PPO', 'Machine Learning', 'Control'],
    },
    {
      type: 'Reinforcement Learning',
      title: 'OverCooker',
      description:
        'A collaborative cooking environment exploring how agents coordinate tasks and cook meals together.',
      tags: ['Multi-Agent RL', 'Coordination', 'Simulation'],
    },
    {
      type: 'Robotics',
      title: 'Warehouse Robot',
      description:
        'A robotics project for moving boxes in a warehouse from an origin location to a destination.',
      tags: ['Robotics', 'Path Planning', 'Automation'],
    },
    {
      type: 'Robotics',
      title: 'Forest Explorer',
      description:
        'A path-finding project for finding treasure in a forest using the closest available route.',
      tags: ['Algorithms', 'Navigation', 'Search'],
    },
    {
      type: 'Robotics',
      title: 'Solar System',
      description:
        'A navigation project centered on moving through the solar system by riding on asteroids.',
      tags: ['Simulation', 'Navigation', 'Game Logic'],
    },
  ];

  readonly educationCredentials: Credential[] = [
    {
      year: '2025',
      title: 'Master of Science in Machine Learning',
      organization: 'Georgia Institute of Technology',
      detail: 'Advanced study in machine learning systems and data-driven engineering.',
    },
    {
      year: '2021',
      title: 'Bachelor of Science in Computer Science',
      organization: 'Trinity College',
      detail: 'Minor in Models and Data.',
    },
  ];

  readonly certificationCredentials: Credential[] = [
    {
      year: '2026',
      title: 'Camunda Associate Developer',
      organization: 'Camunda',
      detail: 'Associate Developer certification.',
    },
    {
      year: '2026',
      title: 'Azure AI-103',
      organization: 'Microsoft',
      detail: 'Azure AI Engineer (AI-103).',
    },
  ];
}
