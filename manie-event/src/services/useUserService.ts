import { v4 as uuidv4 } from 'uuid';
import { ref } from 'vue';
import type { UserModel } from '../models/UserModel';


export const useUserService = () => {
   const userInfo = ref<UserModel>({
    id: uuidv4(),
    photo: '',
    nomComplet: 'Léonore Dujeancourt',
    adresse: '193 rue de Gerland',
    codePostal: '69007',
    ville: 'Lyon',
    pays: 'France',
    dateNaissance: '18/07/1995',
    email: 'leonoredujeancourt@wanadoo.fr',
    telephoneNumber: '0658375281',
    password: '12345',
    messages: [],
      projet: [{
      nom: "Anniversaire Paul",
      photos: ['https://images.unsplash.com/photo-1633102467628-6511a5129a03?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      besoinLieu: false,
      enfants: false,
      service: false,
      typeActivites: ['excursion', 'sportive'],
      typeEvenement: 'Anniversaire',
      nombreInvite: '23',
      genres: ['Appart', 'bucolique'],
      prestationRestauration: ['showcooking', 'dinatoire'], //pas de question 4 s’ils ont coché le lieu « bar/restau »
      prestationBoisson: ['Bière', 'mocktail'], //Idem pour ceux qui ont indiqué « bar » ou « restau »
      prestationAnimations: ['DJ', 'animateur'],
      prestationEnfant: ['animation','clown'],
      prestationPhoto: ['Photo/vidéo Booth', 'drone'],
      prestationDecoration: ['Scénographiste'],
      prestationMateriel: ['vaisselle', 'WC', 'douche'],
      prestationTransport: ['location de véhicule','taxis/van'],
      prestationJourJ: ['officient de cérémonie', 'service de ménage'],
      limiteGeographique: 'Rhône', //pas obligatoire
      islimiteGeoFlexible: false,
      dateEvenement: ['12/12/2024:12:00:00', '13/12/2024:23:59:00'],
      isDateEvenementFlexible: false,
      budget: '200000',
      statut: 'en cours',
        prestataires: [{
        raisonSociale : 'Les ballons d\'Ugo',
        siret: 'SARL PROUT',
        photos: [],
        description: 'Si il y a un ballon d\'en le coin, je suis le gars qu\il vous faut',
        categoriePrestataire: ['restauration', 'boisson', 'animations'], //et le reste de la liste
        typePrestations: ['animation', 'ballons', 'amusant'],
        prestationProposee: ['showcooking', 'cocktail', 'buffet'],
        disponibilites: ['12/12/2025:10:00:00','17/12/2025:20:00:00'],
        adresse: '193 rue de Gerland',
        codePostal: '69007',
        ville: 'Lyon',
        pays: 'France',
        dateDeCreation: '18/07/1995',
        email: 'leonoredujeancourt@wanadoo.fr',
        telephoneNumber: '0658375281',
        password: '12345',
        messages: []
      }]
    }]
  })
  return { userInfo };
}
