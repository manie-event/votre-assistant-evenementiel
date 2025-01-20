export interface PrestataireModel {
  raisonSociale : string,
  siret: string,
  adresse: string,
  codePostal: string,
  ville: string,
  pays: string,
  dateDeCreation: string,
  email: string,
  telephoneNumber: string,
  password: string
  photos: string[],
  description: string,
  disponibilites: string[] // comment gérer le typage d'un range de disponibilité ?
  messages: string[]
  categoriePrestataire: string[], //et le reste de la liste
  typePrestations: string[],
  prestationProposee: string[],
}
