import { Component} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  title = 'What I Know How To Do.';
  skills_featured = [
    {
      title : 'Creative',
      description : 'I’ve been taking art classes since I was about 8 years old. I went to art school in San Francisco for a while, which was where I fell in love with web programming. The last few years my creativity has been focused in web design, graphic design, and photography. I love finding creative ways approach a challenge, or share a message. Creativity gives me my own unique outlook on the world.'
    },
    {
      title : 'Problem Solving',
      description : 'I love logic problems, algorithms, and puzzles; anything that kicks my brain into gear. I enjoy the process of diving deep into a problem to really understand it before presenting a solution. I am excited by the challenge of solving a new problem in the best way possible.'
    },
    {
      title : 'Training',
      description : 'The ability to be able to explain things in a clear way is one of the most important skills I have developed. You really don\’t know what you don\’t know until you have to explain it to someone with no experience in the subject. I worked at a camera shop for a while where I trained customers on photography basics and how to use their cameras. I taught at a code school, and mentored remote students with Treehouse. I have trained clients on using WordPress to manage their own sites.'
    },
    {
      title : 'Design',
      description : 'I understand the importance of being able to view a site on any and every device, and I embrace the idea of mobile first development. I always use responsive design to allow your message to be clear on any platform. Effective design is so important. I love being able to use design enhance the message, not to obscure it. I am extremely comfortable in creating in Adobe Photoshop, Illustrator, and InDesign.'
    },
    {
      title : 'JavaScript',
      description : 'I’ve worked with a few different JavaScript frameworks now, and feel comfortable in picking up new ones as needed. I enjoy being able to leverage the power behind the different frameworks and libraries when building a site. I\’ve worked mostly with Backbone.js in a job setting, but have done freelance and personal projects using Angular 2, Node, and Keystone.'
    },
    {
      title : 'Content Management Systems',
      description : 'Besides static sites, I have studied and built projects in WordPress, Drupal, and Keystone.js content management systems. I love how easy these platforms make it for the non-programmers to manage their own sites. It is always fun to train someone new in these subjects and watch how proud they are later when they can make their own changes. '
    }
  ];

}
