import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.page.html',
  styleUrls: ['./wizard.page.scss'],
})
export class WizardPage implements OnInit {

  constructor(
    private storage: Storage,
    private router: Router
  ) { }

  ngOnInit() {

    this.storage.get('wizard').then((val) => {
      if(val){
        this.router.navigate(['/login']);
      }
    });

  }

  closeWizard(){
    this.storage.set('wizard', 'true');
    this.router.navigate(['/login']);

  }

}
