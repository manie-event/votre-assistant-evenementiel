import type { ProjectModel } from "./ProjectModel";

export interface UserModel {
  id: string,
  photo?: string,
  nomComplet: string,
  adresse: string,
  codePostal: string,
  ville: string,
  pays: string,
  dateNaissance: string,
  email: string,
  telephoneNumber: string,
  password: string,
  messages: string[],
  projet: ProjectModel[]
}
