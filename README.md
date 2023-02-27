## 1 - Getstart 
Installer le node_modules :  npm install
Installer bootstrapp localement version 3.x : npm install --save bootstrap@3 
Importer bootstrapp :   angular.json
```
           "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
```
Error lors du npm install :  npm install --legacy-peer-deps

Créer un projet angular: ng new my-project --strict false

## 2 – Les bases 
### Comment une app angular demarre ?
Le main.ts bootstrapp de le app.module.ts qui contient la valeur du bootstrap : AppComponent qui lui à son contient le selecteur du template html app-root qui sera appelé dans index.html 
### Les components 
les components sont les composants de base d'une application Angular. Une application Angular peut être vue comme une arborescence de components avec AppComponent comme component racine.
### Créer un component
Un component est une class typescript qui a le décorateur @Component de angular/core  qui prend en argument un objet qui a comme attribut selector, templateUrl, styleUrls.
import { Component } from '@angular/core';
```
@Component({
  selector: 'app-<nom_component>',
  templateUrl: './<nom_component>.component.html',
  styleUrls: ['./<nom_component>.component.css']
})
export class <nom-component>Component {
}
```


Il est appelé dans le Template html avec les balises 
<app-NomComponent></app- NomComponent>

Créer un component avec angular cli :
``ng g c <nom_component> (ng generate component …)``
cette commande crée le component.ts, le template html, component.spec.ts et le style css puis met à jour le App module en déclarant le nouveau component automatiquement.
On peut aussi appeler un selecteur ou déclarer du code html dans un component à l’aide de l’attribut template dans @Component
```
@Component({...,
  template: `<app-server></app-server>
            <app-server></app-server>`,
})
```
export class ServersComponent implements OnInit {

On peut aussi définir du code css dans le component.ts grâce à l’attribut styles
```
@Component({
  styles: [
          `h3{
            text-align: center;
            color: darkgray;
          }`]
})
```
export class AppComponent

On peut sélectionner un component par :
•	Par attribut : 
``
@Component({
  selector: '[app-NomComponent]',
})
``
Ainsi pour l’appeler on utilise un élément html 
``<div app-NomComponent></div>``
*	Par classe :
  
    ``
    @Component({
      selector: '.app-NomComponent',
    })
    ``
    

Il suffit de déclarer dans le template html de cette façon :
``<div class="app- NomComponent"></div>``
*	Par id : c’est la manière classique 
selector: 'app-servers',

Role de AppModule et declaration de components

appModule est une classe typescript à pour décorateur @NgModule de angular/core. Ce décorateur prend en argument un objet qui contients les attributs : 
*	declarations : pour déclarer nos listes de components
*	imports : importer des liste de modules
*	providers : []
*	bootstrap : [AppComponent]

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Databiding (= communication)

*	Données de sortie du Code typescript vers le template html :
    *	String Interpolation : {{ data }} 
    *	Property Binding : [property] = ‘’data’’
*	Réaction aux évènements du template vers la logique business :
    * Event Biding : (property) = ‘’expression’’
*	Communication dans les deux sens :
    *	Two-Way Biding: [(property)] = ‘’data’’

