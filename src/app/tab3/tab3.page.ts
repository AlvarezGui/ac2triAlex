import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IAtores } from '../model/IAtores';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router, public alertController: AlertController, public toastController: ToastController) {}

  listaAtores: IAtores[] = [
    {
      nome: 'Tom Cruise',
      nascimento: '03/07/1962',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg',
      pagina: '/TomCruise',
      favorito: false
    },
    {
      nome: 'Robert De Niro',
      nascimento: '17/08/1943',
      foto: 'https://br.web.img3.acsta.net/c_310_420/pictures/15/09/16/17/30/201281.jpg',
      pagina: '/RoberDeNiro',
      favorito: false
    },
    {
      nome: 'Chris Pratt',
      nascimento: '21/06/1979',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Chris_Pratt_2018.jpg/800px-Chris_Pratt_2018.jpg',
      pagina: '/ChrisPratt',
      favorito: false
    },
    {
      nome: 'Johnny Depp',
      nascimento: '09/06/1963',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Johnny_Depp_Deauville_2019.jpg/640px-Johnny_Depp_Deauville_2019.jpg',
      pagina: '/JohnnyDepp',
      favorito: false
    },
    {
      nome: 'Mark Hamill',
      nascimento: '25/09/1951',
      foto: 'data:image/jpeg;base64,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',
      pagina: '/JohnnyDepp',
      favorito: false
    }

  ];

  exibirAtores(ator: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramAtor:ator}};
    this.router.navigate(['ator-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(ator: IAtores) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar esse ator?',
      buttons: [
        {
          text: 'N??o',
          role: 'cancel',
          handler: () => {
            ator.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            ator.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Ator adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

}
