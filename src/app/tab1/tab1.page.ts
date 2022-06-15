import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router, public alertController: AlertController, public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg",
      generos: ['Ação', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores Ultimato',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg",
      generos: ['Aventura', 'Ficção Científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Sonic 2 - O Filme',
      lancamento: '07/04/2022',
      duracao: '2h02m',
      classificacao: 8.3,
      cartaz: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRV7IVERTAcWspYVVwYvctl7JU2A35X6Ab3eBqbaeV6H_yUJin_",
      generos: ['Ação', 'Animação'],
      pagina: '/sonicdois',
      favorito: true
    },
    {
      nome: 'Doutor Estranho no Multiverso da Loucura',
      lancamento: '04/05/2022',
      duracao: '2h06m',
      classificacao: 7,
      cartaz: "https://br.web.img3.acsta.net/pictures/22/02/14/18/29/1382589.png",
      generos: ['Ação', 'Aventura', 'fantasia'],
      pagina: '/estranho',
      favorito: false
    },
    {
      nome: 'Morbius',
      lancamento: '31/03/2022',
      duracao: '1h48m',
      classificacao: 100,
      cartaz: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROpIKX2iKXzuv6drNKrg8fhUJda06Knms9UPS9JGlFLdkO91fO",
      generos: ['Ação', 'Aventura', 'drama'],
      pagina: '/morbius',
      favorito: true
    }
  ];

  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

}
