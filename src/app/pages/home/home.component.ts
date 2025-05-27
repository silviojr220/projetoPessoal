import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { FormsComponent } from "../../components/forms/forms.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, FormsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
