import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  title = 'Hello! My name is Michelle. I am a web developer.';
  basic_facts = [
    {
      title : 'Name',
      value : 'Michelle J Levine',
      id : 0
    },
    {
      title : 'Current Location',
      value : 'Portland, Oregon',
      id : 1
    },
    {
      title : 'City of Birth',
      value : 'San Francisco, California',
      id : 2
    },
    {
      title : 'Profession',
      value: 'Web Developer',
      id : 3
    },
    {
      title : 'Hobbies',
      value : 'Reading, painting, photography, gaming',
      id : 4
    },
    {
      title : 'Furthest I have been from home',
      value : '7,581 Miles (Sydney, Australia)',
      id : 5
    }
  ];
  about_me = 'I am a web developer currently residing in Portland, Oregon. While I have taken an unconventional route to get here, every step and detour along the way has only enhanced my ability to succeed now that I am here. I started as a creative writer and history major, dabbled in the fine arts, embraced computer graphics, explored photography, and suffered through retail before finding my “ah-ha! moment” in the world of web development. ' +
    'I believe in the journey as much as the destination, and I see the value of taking the unknown path. I can’t wait to see where it will take me next. ' +
    'To me, web and software development is all about being able to do what I love while enabling others to do the same. Programming is about solving new problems in different ways every day. It is a challenge I enjoy immersing myself in.';
  looking_for = 'Today I seek new opportunities, freelance gigs, interesting problems, tough challenges, fresh ideas, and creative thinkers. I am ready to continue my journey in web development as I grow both personally and professionally. I want to meet new people and learn from them.'


}
