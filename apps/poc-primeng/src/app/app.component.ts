import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CascadeSelect } from 'primeng/cascadeselect';
import { Timeline } from 'primeng/timeline';
import { ThemeService } from './theme.service';
@Component({
  imports: [ CascadeSelect, RouterModule, ButtonModule, Timeline],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit  {
  title = 'poc-primeng';
  isSidebarOpen = false;
  constructor(public themeService: ThemeService) {}

  events = [
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
];

  toggleSidebar() {
    console.log('ddd')
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  countries: any[] | undefined;

  selectedCity: any;

  ngOnInit() {
      this.countries = [
          {
              name: 'Australia',
              code: 'AU',
              states: [
                  {
                      name: 'New South Wales',
                      cities: [
                          { cname: 'Sydney', code: 'A-SY' },
                          { cname: 'Newcastle', code: 'A-NE' },
                          { cname: 'Wollongong', code: 'A-WO' }
                      ]
                  },
                  {
                      name: 'Queensland',
                      cities: [
                          { cname: 'Brisbane', code: 'A-BR' },
                          { cname: 'Townsville', code: 'A-TO' }
                      ]
                  }
              ]
          },
          {
              name: 'Canada',
              code: 'CA',
              states: [
                  {
                      name: 'Quebec',
                      cities: [
                          { cname: 'Montreal', code: 'C-MO' },
                          { cname: 'Quebec City', code: 'C-QU' }
                      ]
                  },
                  {
                      name: 'Ontario',
                      cities: [
                          { cname: 'Ottawa', code: 'C-OT' },
                          { cname: 'Toronto', code: 'C-TO' }
                      ]
                  }
              ]
          },
          {
              name: 'United States',
              code: 'US',
              states: [
                  {
                      name: 'California',
                      cities: [
                          { cname: 'Los Angeles', code: 'US-LA' },
                          { cname: 'San Diego', code: 'US-SD' },
                          { cname: 'San Francisco', code: 'US-SF' }
                      ]
                  },
                  {
                      name: 'Florida',
                      cities: [
                          { cname: 'Jacksonville', code: 'US-JA' },
                          { cname: 'Miami', code: 'US-MI' },
                          { cname: 'Tampa', code: 'US-TA' },
                          { cname: 'Orlando', code: 'US-OR' }
                      ]
                  },
                  {
                      name: 'Texas',
                      cities: [
                          { cname: 'Austin', code: 'US-AU' },
                          { cname: 'Dallas', code: 'US-DA' },
                          { cname: 'Houston', code: 'US-HO' }
                      ]
                  }
              ]
          }
      ];
  }
}
