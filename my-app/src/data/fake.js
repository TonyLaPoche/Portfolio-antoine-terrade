import profilPicture from '../assets/SVG/profil.jpeg';
// import logoOclock from '../assets/SVG/iconOclock.svg';
// import think from '../assets/SVG/think.svg';
// import target from '../assets/SVG/target_goal_icon_152113.svg';

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
      // {
      //   id: 'presentation-content-2',
      //   title: 'Mon parcours',
      //   description: [
      //     "Mordue d'informatique de puis tout jeune, il m'aura fallut du temps avant de trouver ma voie.",
      //     "J'ai directement cherché à travaillé dès que possible dès mon tout jeune age en tant que cuisinier puis après un malencontreux accident j'ai travailler quelque temps en temps que magazinier puis responsable de rayon et j'ai été débouché par un magasin de cigarette electronique (ce qui à été un réel tournant dans ma vie).",
      //     "J'y suis resté 7 longue années ou j'ai combattue à bras le corps ma timidité puis au file du temps j'eu suffisament de responsibilité dans l'entreprise que j'ai commencé par être responsable du site internet de l'entreprise (commande, gestion interface avec prestashop, campagne de newsletter) et c'est la que le déclic est apparue.",
      //     "J'aime le développement Web à tel point que j'ai décidé de toutes abandonnée pour me convertir à 100% pour cette toute nouvelle passion ",
      //     "J'ai alors fait un bootcamp de 6mois afin de voir si toutes les bases que j'avais accumulé en autodidacte était conforme au marché du travaille. C'était la période de ma vie la plus enrichissante que ça soit en terme d'apprentissage ou de rencontre",
      //     'Et me voiçi développeur Web Junior prêt à en découdre !',
      //   ],
      //   picture: logoOclock,
      //   position: 'right',
      // },
      // {
      //   id: 'presentation-content-3',
      //   title: "Ma vision de l'avenir",
      //   description: [
      //     'Je souhaiterais devenir un développeur Web accomplit.  ',
      //     "C'est à dire une personne capable de proposé des solution inovante et ludique à toutes problématique qui touche au application du web. ",
      //     "J'aime transmettre, échanger, apprendre et ce métier et un puit sans fond dans ces domaines et je m'y sent chez moi.",
      //     "Une phrase que j'aime beaucoup dit que quand le travaille est une passion ce n'est plus un travail mais une évolution et bien je m'ys retrouve totalement je souhaite évoluer sans cesses",
      //   ],
      //   picture: think,
      //   position: 'left',
      // },
      // {
      //   id: 'presentation-content-4',
      //   title: 'Objectif',
      //   description: [
      //     'Concernant mes objectifs professionnel actuel sont simple.',
      //     "Trouver une entreprise qui accepterais de me mentoré afin de continuer à m'élever dans le développement Web.",
      //     "Et pourquoi pas un jour allez sur de l'applicatif mobile afin de peut être réalisé un rêves d'enfance crée un jeu en ligne ",
      //   ],
      //   picture: target,
      //   position: 'right',
      // },
    ],
  },
  {
    id: 2,
    name: 'mes créations',
    path: '#créations',
    content: [
      {
        id: 'presentation-projet-1',
        title: 'Portfolio',
        alt: 'portfolio',
        techno: ['react1', 'scss', 'html', 'node.js'],
        link: 'https://github.com/TonyLaPoche/Pocket-Template-Project',
        demo: 'localhost:3000',
        etat: 'fini',
        description:
          "J'ai développer tout seul comme un grand ce portefolio avec react et materialize.",
        picture: 'https://fakeimg.pl/400/',
      },
      {
        id: 'presentation-projet-2',
        title: 'Jeu de la vie',
        alt: 'Jdlv',
        techno: ['react2', 'css', 'html', 'rédux'],
        link: 'https://github.com/TonyLaPoche/JDLV-React',
        demo: 'https://jdlv-tony-react-v4.surge.sh/',
        etat: 'fini',
        description:
          "Le Jeu de la vie est un « jeu à zéro joueur », puisqu'il ne nécessite aucune intervention du joueur lors de son déroulement. Il s’agit d’un automate cellulaire, un modèle où chaque état conduit mécaniquement à l’état suivant à partir de règles préétablies.",
        picture:
          'https://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif',
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
