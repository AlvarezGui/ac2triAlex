import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ISerie } from '../model/ISerie';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router, public alertController: AlertController, public toastController: ToastController) {}

  listaSerie: ISerie[] = [
    {
      nome: 'Gray\'\s Anatomy',
      lancamento: '27/03/2005',
      temporadas: '18',
      classificacao: 4,
      cartaz: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSee9x6Ia4Q995ZdT2WHEgPYqMmQp-ms6IzRerpopWCouiIQk9W",
      generos: ['Drama', 'Romance'],
      pagina: '/Gray',
      favorito: false
    },
    {
      nome: 'Arcane',
      lancamento: '06/11/2021',
      temporadas: '1',
      classificacao: 9.5,
      cartaz: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQw9ZZQVJqnze9k8r6c5xUeFSc9iBNtiY2nuQd_N1qWAQ6javhR",
      generos: ['SteamPunk', 'Fantasia Científica', 'Ação'],
      pagina: '/Arcane',
      favorito: true
    },
    {
      nome: 'The Boys',
      lancamento: '26/07/2019',
      temporadas: '3',
      classificacao: 7,
      cartaz: "https://rotacult.com.br/wp-content/uploads/2020/08/The-Boys-ganha-trailer-e-cartazes-oficiais-da-segunda-temporada-2.jpg",
      generos: ['Humor', 'Ação'],
      pagina: '/TheBoys',
      favorito: false
    },
    {
      nome: 'Lúcifer',
      lancamento: '25/01/2016',
      temporadas: '6',
      classificacao: 8,
      cartaz: "https://resizing.flixster.com/DdxKzBpxyB6D61amGRNJ0LAOrW0=/ems.ZW1zLXByZC1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw",
      generos: ['Mistério', 'Comédia', 'Fantasia Urbana'],
      pagina: '/Lucifer',
      favorito: true
    },
    {
      nome: 'One Piece',
      lancamento: '20/08/1999',
      temporadas: '20',
      classificacao: 10,
      cartaz: "https://images-na.ssl-images-amazon.com/images/I/81rEhhwbubL.jpg",
      generos: ['Comédia', 'Aventura', 'Ação', 'Fantasia'],
      pagina: '/OnePiece',
      favorito: true
    }
  ];

  exibirSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(serie: ISerie) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a série?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            serie.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Serie adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

}
