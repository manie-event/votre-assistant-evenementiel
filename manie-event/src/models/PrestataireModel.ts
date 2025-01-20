export interface PrestataireModel {
  nom : string,
  photos: string[],
  description: string,
  prestations: string[]
  disponibilites: string[] // comment gérer le typage d'un range de disponibilité ?
}
