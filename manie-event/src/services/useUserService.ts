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
  projet:
}
}
