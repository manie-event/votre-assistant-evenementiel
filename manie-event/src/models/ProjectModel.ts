import type { PrestataireModel } from "./PrestataireModel";

export interface ProjectModel {
  nom: string,
  photos: string[],
  lieu: string,
  genres: string[],
  prestataires: PrestataireModel[]
}
