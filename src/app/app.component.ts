import { Component } from '@angular/core';
import { Social } from './social';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'temp-website';



  iconList: string[] = ["Behance", "Facebook", "Github", "Instagram", "LinkedIn", "Twitter"];
  socialArray: Array<Social> = [
    { id: '1', name: 'Twitter', url: 'https://twitter.com/aravind_marri' },
    { id: '2', name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100004137167756' },
    { id: '3', name: 'Github', url: 'https://github.com/aravindmarri' },
    { id: '4', name: 'Instagram', url: 'https://www.instagram.com/aravind_marri/' },
    { id: '5', name: 'Behance', url: 'https://www.behance.net/aravind_marri' },
    { id: '6', name: 'LinkedIn', url: 'https://www.linkedin.com/in/aravindmarri/' }
  ];

}
