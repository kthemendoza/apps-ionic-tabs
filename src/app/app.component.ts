import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root', //nombre del componente que se llama desde el index y la ruta es
  templateUrl: 'app.component.html' //la ruta es esta
}) // aqui se empiezan a declarar las clases   --- una clase es la respresentacion de un objeto real
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp(); //inicaliza la app
  }

  initializeApp() { //metodo
    this.platform.ready().then(() => {   
      this.statusBar.styleDefault();
      this.splashScreen.hide(); // el cargando de una app cuando ingresa  a la app, de esperar o pasar de una vista a otra
    });
  }
}


//inicializa index , css y luego carga los componentes para q la app inicie