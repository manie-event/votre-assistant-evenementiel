import type { PrestataireModel } from "./PrestataireModel";

export interface ProjectModel {
  nom: string,
  photos: string[],
  besoinLieu: boolean,
  enfants: boolean,
  service: boolean,
  typeActivites: string[],
  typeEvenement: string,
  nombreInvite: string,
  genres: string[],
  prestationRestauration: string[], //pas de question 4 s’ils ont coché le lieu « bar/restau »
  prestationBoisson: string[], //Idem pour ceux qui ont indiqué « bar » ou « restau »
  prestationAnimations: string[],
  prestationEnfant: string[],
  prestationPhoto: string[],
  prestationDecoration: string[],
  prestationMateriel: string[],
  prestationTransport: string[],
  prestationJourJ: string[],
  limiteGeographique: string, //pas obligatoire
  islimiteGeoFlexible: boolean,
  dateEvenement: string[],
  isDateEvenementFlexible: boolean,
  budget: string,
  statut: string,
  prestataires: PrestataireModel[]
}
