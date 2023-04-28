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
          "J'ai développé ce portefolio avec React et Tailwind !",
          "Ce projet à d'abords été pensée pour être responsive mobile",
          "Concernant la suite de ce portfolio j'ai pour but de la passer en template vierge afin de pouvoir le partager aux devs junior comme moi qui recherche un modèles ou s'entrainer/pratiquer React",
          "Je compte monter prochainement un back-office relié à ce porte-folio avec une API scrappant directement mon profil repos de Github afin de garnir automatiquement ce dernier",
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
          "Le Jeu de la vie est un « jeu à zéro joueur », puisqu'il ne nécessite aucune intervention du joueur lors de son déroulement. Il s’agit d’un automate cellulaire, un modèle où chaque état conduit mécaniquement à l’état suivant à partir de règles préétablies.",
          "Ce projet à été crée en parallèle d'une formation bootcamp.",
          'Si vous ne connaissez pas le concept du jeu de la vie je vous conseille vivement la vidéo de Science Etonnante.',
        ],
        picture:
          'https://imgs.search.brave.com/EoEu2ut15uUz9P3QYOsHxD84Vm7q339LDKfqBFxXMJ0/rs:fit:114:114:1/g:ce/aHR0cDovL3d3dy5j/b253YXlsaWZlLmNv/bS93L2ltYWdlcy84/LzgxL0dsaWRlci5n/aWY.gif',
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
