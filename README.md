# Pocket-Template-Project

## WireFrame

Logiciel Whimsical
url : <https://whimsical.com/porte-folio-3o5AmrpnDY3WPBNAiVVMNM>

## concept

Template de porte-folio qui ce générera automatiquement au remplissage d'un fichier "My-Props.js".
Information à fournir :

```js
 const fakeProps = [
    {
      id: 1,
      name: "présentation",
      path: "#presentation",
      content: [
        {
        id: "presentation-content-1",
        title: "Qui suis-je ?", // le premier titre sera plus gros que les suivants. <h2>
        description:"Première desciption",
        picture: "https://fakeimg.pl/200/" // optionnel mais recommandé pour le premier bloc
        },
        {
          id: "presentation-content-2", // s'il on souhaite rajouté plusieurs section ou paragraphe il c'est possible
          title: "Mon parcours",
          description:"Cuisinier à magazinier puis vendeur de cigarette electronique pour finir développeur web !",
          picture: "https://fakeimg.pl/200/"
        },
        {
          id: "presentation-content-3",
          title: "Ma vision de l'avenir", // titre au format <h3>
          description:"Devenir un développeur respecter dans la profession et ayant accomplis toutes sorte de projet dans plein de techno différente",
          picture: "https://fakeimg.pl/200/"
        },
        {
          id: "presentation-content-4",
          title: "Objectif",
          description:"Continuer ma monté en compétence seul ou en entreprise afin de devenir suffisament performant afin de rendre mes projet perso lucratif",
          picture: "https://fakeimg.pl/200/"
        },
      ]
    },
    {
      id: 2,
      name: "mes créations", // sera mis en page au format carrousel et aura un lien d'accès à une page propres au nom du projet si l'utilisateur click sur l'image. 
      path: "#créations",
      content: [
        {
          id: "presentation-projet-1",
          title: "Ce porte-folio déjà !",
          techno: ["react","scss","html","node.js"],
          link:"url",
          demo:"url",
          etat:"fini",
          description:"J'ai développer tout seul comme un grand ce portefolio avec react et materialize.",
          picture: "https://fakeimg.pl/200/"
        },
        {
          id: "presentation-projet-2",
          title: "Jeu de la vie",
          techno: ["react","css","html", "rédux"],
          link:"url",
          demo:"url",
          etat:"fini",
          description:"le jeu de la vie est une expérience à la base mathématique qui permet d'étudier le fait que de simple règle très basique dans un tableau peut mener au chaos total...",
          picture: "https://fakeimg.pl/200/"
        },
      ]
    },
    {
      id: 3,
      name: "mes réseaux", // petite mosaique avec text descriptif au survole de l'image
      path: "#reseaux",
      content: [
        {
          id: "réseaux-1",
          title: "LinkdIn",
          link:"url",
          description:"Retrouver moi sur ce super réseaux professionnel ou je suis **pas du tout** actif.. et ou ce mêlent Cv, demande de stage et poste bullshit",
          picture: "https://fakeimg.pl/200/"

        },
        {
          id: "réseaux-2",
          title: "discord",
          link:"url",
          description:"Ma deuxième maison dans ma maison. Ajouter moi en ami avec un petit message comme quoi vous venez de ce site et on pourra conversé jusqu'au bout de la nuit !",
          picture: "https://fakeimg.pl/200/"
        },
        {
          id: "réseaux-3",
          title: "Github",
          link:"url",
          description:"pas réellement un réseaux dit social mais ici vous trouverez tout mes projets que je daigne à mettre en public. Si certain vous intéresses ou vous souhaiter simplement en suivre un en particulié n'hésiter pas ;)",
          picture: "https://fakeimg.pl/200/"
        },
      ]
    }

  ]
```

### IMPORTANT

Merci de me crédité dans le footer en laissant le lien direct du repos github du projet en me citant.
;)
