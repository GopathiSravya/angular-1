import { Component } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  menuItems = [
    { icon: 'home', label: 'Home', route: '/' },
    { icon: 'subscriptions', label: 'Subscriptions', route: '/subscriptions' },
    { icon: 'library_books', label: 'Library', route: '/library' },
    { icon: 'history', label: 'History', route: '/history' },
    { icon: 'video_library', label: 'Your videos', route: '/your-videos' },
    { icon: 'watch_later', label: 'Watch later', route: '/watch-later' },
    { icon: 'thumb_up', label: 'Liked videos', route: '/liked-videos' },
  ];
  // You can add additional logic here if needed
}
