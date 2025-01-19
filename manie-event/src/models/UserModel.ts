export interface UserModel {
  id: number,
  photo?: string,
  nomComplet: string,
  adresse: string,
  codePostal: string,
  ville: string,
  pays: string,
  dateNaissance: Date,
  email: string,
  telephoneNumber: string,
  projet: Project[]
}
