export type Categorie = {
  readonly id: number,
  name: string,
  link: string,
  sousCategorie: SousCategorie[],
}

export type SousCategorie = {
  readonly id: number,
  name: string,
  link: string
  array: array,
}