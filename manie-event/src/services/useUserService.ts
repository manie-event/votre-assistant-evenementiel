import { v4 as uuidv4 } from 'uuid';
import { ref } from 'vue';
import type { UserModel } from '../models/UserModel';


export const useUserService = () => {
   const user = ref<UserModel> = {
    id: uuidv4(),
    photo: '',
    nomComplet: 'Léonore Dujeancourt',
    adresse: '193 ru de Gerland',
    codePostal: '69007',
    ville: 'Lyon',
    pays: 'France',
    dateNaissance: '18/07/1995',
    email: 'leonoredujeancourt@wanadoo.fr',
    telephoneNumber: '0658375281',
    projet: [{
      nom: "Anniversaire Paul",
  photos: ['https://images.unsplash.com/photo-1633102467628-6511a5129a03?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  lieu: 'Lyon 3',
  genres: ['champètre', 'bucolique'],
  prestataires: [{
    nom : 'Les ballons d\'Ugo',
  photos: [],
  description: 'Si il y a un ballon d\'en le coin, je suis le gars qu\il vous faut',
  prestations: ['animation', 'ballons', 'amusant'],
  disponibilites: ['12/12/2025:10:00:00','17/12/2025:20:00:00']
  }]
    }]
  }
  return { user };
}
