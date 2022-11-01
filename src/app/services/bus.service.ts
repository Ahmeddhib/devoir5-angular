import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../model/bus.model';
@Injectable({
providedIn: 'root'
})
export class BusService {
buss : Bus[]; //un tableau de Produit
bus! : Bus;
constructor(private router: Router) {
  this.buss = [
      {idBus :1, nomBus : "single-decker", prixBus :110000000.000, dateCreation : new Date("01/14/2011")},
      {idBus :2, nomBus : "double-decker", prixBus :150000000.000, dateCreation : new Date("01/14/2011")},
      {idBus :3, nomBus : "minibuses", prixBus :120000000.000, dateCreation : new Date("01/14/2011")},
      {idBus :4, nomBus : "schoolbus", prixBus :100000000.000, dateCreation : new Date("01/14/2011")}
  ];
  }

listeBus(){
return this.buss;
}
ajouterBus( buss: Bus){
  this.buss.push(buss);
  this.router.navigate(['/', 'bus'])
}
supprimerBus( b: Bus){
  //supprimer le produit p du tableau bus
  const index = this.buss.indexOf(b,0);
  if (index > -1){
    this.buss.splice(index,1);
  }
}
consulterBus(id:number): Bus{
 return this.bus = this.buss.find(b => b.idBus == id)!;

}

trierBus(){
  this.buss = this.buss.sort((n1,n2) => {
  if (n1.idBus! > n2.idBus!) {
  return 1;
  }
  if (n1.idBus! < n2.idBus!) {
  return -1;
  }
  return 0;
  });
  }
  updateBus(b:Bus)
  {
  // console.log(p);
  this.supprimerBus(b);
  this.ajouterBus(b);
  this.trierBus();

  }
}






