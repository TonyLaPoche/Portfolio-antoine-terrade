import profilPicture from '../assets/SVG/profil.jpeg';
import portfolio from '../assets/portfolio_500x500.png';

export const fakeProps = [
  {
    id: 'title-1',
    titre: 'Antoine Terrade',
  },
  {
    id: 1,
    name: 'présentation',
    path: '#presentation',
    content: [
      {
        id: 'presentation-content-1',
        title: 'Qui suis-je ?',
        description: [
          'Antoine Terrade, développeur Web.',
          'Née en Juin 1996 (Gémeaux). Sur la route de ses 27ans.Je réside dans la périphérie Suisse à proximité de Genève, du côté de la France.',
          'Ambitieux, Créatif, Curieux sont les maitres mots pouvant me décrire.',
          "Concernant mes passions et hobbies autres que le code, j'aime particuliairement la culture Japonaise et tout ce qui touche à l'animation. Je suis également intrigué sur le développement de Jeux Vidéo ou je m'exerce sur mon temps libre (Godot, Unity, Unreal). En dehors des écrans et ayant la chance d'être dans une région magnifique les randonnés non quasi plus de secret pour moi.",
        ],
        picture: profilPicture,
        position: 'left',
      },
    ],
  },
  {
    id: 2,
    name: 'mes créations',
    path: '#créations',
    content: [
      {
        id: '0-Portfolio',
        title: 'Portfolio',
        alt: 'portfolio',
        techno: ['react', 'tailwindcss', 'html'],
        link: 'https://github.com/TonyLaPoche/Pocket-Template-Project',
        demo: 'localhost:3000',
        etat: 'opérationnel',
        description: [
          "J'ai développé ce portefolio avec React et Tailwind. Conçu en mobile first, j’aimerais prochainement relier ce projet à un back-office, ce qui me permettrais de l’agrémenter automatiquement à l’aide d’une API. ",
          "De plus, je souhaiterais le proposer sous forme d’un modèle vierge. Cela me permettrait de le partager à des développeurs juniors, qui aimeraient s’entraîner ou pratiquer React. ",
        ],
        picture: portfolio,
      },
      {
        id: '1-JDLV-react',
        title: 'Jeu de la vie',
        alt: 'Jdlv',
        techno: ['react', 'css', 'html', 'rédux'],
        link: 'https://github.com/TonyLaPoche/JDLV-React',
        demo: 'https://jdlv-tony-react-v4.surge.sh/',
        etat: 'opérationnel',
        description: [
          "Le Jeu de la Vie est un « jeu à zéro joueur », puisqu'il ne nécessite aucune intervention du joueur lors de son déroulement. Il s’agit d’un automate cellulaire, un modèle où chaque état conduit mécaniquement à l’état suivant à partir de règles préétablies.",
          "Ce projet a été créé en parallèle de ma formation chez O’Clock. Ce fut mon premier projet en totale autonomie, faisant appel à des principes algorithmiques définis.",
          'Si vous souhaitez en savoir plus sur la mécanique de ce jeu, je vous invite à tester la démo disponible ci-dessous, et pour aller plus loin, à découvrir la vidéo de Science étonnante à ce sujet. ',
        ],
        picture:
          'https://imgs.search.brave.com/EoEu2ut15uUz9P3QYOsHxD84Vm7q339LDKfqBFxXMJ0/rs:fit:114:114:1/g:ce/aHR0cDovL3d3dy5j/b253YXlsaWZlLmNv/bS93L2ltYWdlcy84/LzgxL0dsaWRlci5n/aWY.gif',
      },
      {
        id: '2-Connect4',
        title: 'Puissance 4 local',
        alt: 'Puissance 4',
        techno: ['angular', 'scss', 'html', 'tailwinds'],
        link: 'https://github.com/TonyLaPoche/Puissance-4-Angular',
        demo: 'https://connect4app-2e98c.web.app',
        etat: 'opérationnel',
        description: [
          "J'ai recréé, dans le cadre d’un test technique, un Puissance 4.",
          "Ne possédant aucune connaissance en Angular et TypeScript au commencement de ce projet, cela a été pour moi un énorme défi. ",
          "Bien que je n’aie pas pu décrocher le stage espéré, n'ayant rempli toutes les conditions requises, je garde un très bon souvenir de cet exercice. Il a été pour moi extrêmement formateur et m’a permis de découvrir mon attrait pour les langages typés. ",
          "Le jeu est actuellement hébergé pour une utilisation en local. Prochainement, j’ai pour ambition de faire appel à mes nouvelles connaissances en Java, afin de l’améliorer et de proposer notamment une version multijoueur en ligne, avec un système de lobby. ",
          "En espérant que la démo, disponible ci-dessous, vous plaise ! "
        ],
        picture: 'https://zupimages.net/up/23/17/yqhz.png',
      },
      {
        id: '3-PokemonApp',
        title: 'Pokedex Angular',
        alt: 'Pokedex',
        techno: ['angular', 'materialize', 'typescript'],
        link: 'https://github.com/TonyLaPoche/initiation-angular-pokemon-app',
        demo: 'https://pokemon-pokedex-angular.web.app',
        etat: 'opérationnel',
        description: [
          "Cette application web est à l’origine un tutoriel Angular, permettant de gérer une base de données. Elle m’a permis de revoir les fondamentaux de ce langage, tout en utilisant le principe d’un back-office.",
          "Ce projet reprend également les bases essentielles de la méthodologie C.R.U.D (Create, Read, Update, Delete) et est ainsi lié à une base de données écrite en interne.",
          "Dans le but de rendre les données persistantes, un second projet « API_Pokemon » est en cours de production en Node.js. Il servira de pont de connexion avec l’application déjà créée.",
          "Retrouvez la démo ci-dessous ! ",
        ],
        picture: 'https://zupimages.net/up/23/17/xns9.png',
      },
      {
        id: '4-next',
        title: "Projets à venir ",
        alt: 'next projects',
        techno: ['Java', 'node.js', 'react', 'angular', 'next.js', 'typescript'],
        link: 'https://github.com/TonyLaPoche',
        demo: null,
        etat: null,
        description: [
          "Comme dis précédemment, la maitrise du Java fait parti de mes objectifs professionnels. La consolidation des projets précédents avec ce langage est donc à la fois un but et un outil pour atteindre mon objectif. ",
          "En complément de cela, je conceptualise actuellement une application complète dans le but de passer une soutenance afin d’obtenir un diplôme d’Etat, validant mes acquis techniques et professionnels.",
          "Pour finir, à plus long terme, une fois que ma maitrise de Java sera devenue satisfaisante, je rendrais ce portefolio dynamique, à l’aide d’un backoffice Java, avec Spring Boot notamment. ",
          "Je vous remercie d’être arrivé jusqu’ici et j’espère que mon profil pourra vous intéresser. N’hésitez pas à me contacter grâce au formulaire ci-dessous ou sur mes divers réseaux sociaux . ",
        ],
        picture: 'https://i.etsystatic.com/27562270/r/il/92008f/3280219303/il_340x270.3280219303_ibg5.jpg',
      },
    ],
  },
  {
    id: 3,
    name: 'mes réseaux',
    path: '#reseaux',
    content: [
      {
        id: 'réseaux-1',
        title: 'LinkdIn',
        link: 'url',
        description:
          'Retrouver moi sur ce super réseaux professionnel ou je suis **pas du tout** actif.. et ou ce mêlent Cv, demande de stage et poste bullshit',
        picture: 'https://fakeimg.pl/200/',
      },
      {
        id: 'réseaux-2',
        title: 'discord',
        link: 'https://discord.gg/zkeCnAsByF',
        description:
          "Ma deuxième maison dans ma maison. Ajouter moi en ami avec un petit message comme quoi vous venez de ce site et on pourra conversé jusqu'au bout de la nuit !",
        picture: 'https://fakeimg.pl/200/',
      },
      {
        id: 'réseaux-3',
        title: 'Github',
        link: 'url',
        description:
          "pas réellement un réseaux dit social mais ici vous trouverez tout mes projets que je daigne à mettre en public. Si certain vous intéresses ou vous souhaiter simplement en suivre un en particulié n'hésiter pas ;)",
        picture: 'https://fakeimg.pl/200/',
      },
    ],
  },
  {
    id: 4,
    name: 'contact',
    path: '#contact',
    form_content: {
      id: 'contact-1',
      name: 'Nom',
      lastName: 'Prénom',
      societe: 'Société',
      email: 'email@mail.com',
      text: 'inséré votre texte ici',
    },
  },
];

export default fakeProps;
