import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {

  appTitle = 'myLibrary';

  headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: "'Stint Ultra Condensed', 'sans-serif'",
    padding: '1rem 2rem 1rem 2rem',
    fontSize: '2.5rem',
    boxShadow: '1px 1px 4px black'
  }

  titleStyle = {
    margin: '0',
    cursor: 'pointer'
  }
  
  buttonStyle = {
    border: 'none',
    backgroundColor: 'white',
    fontFamily: 'Roboto',
    fontSize: '1.7rem',
    cursor: 'pointer'
  }

}
