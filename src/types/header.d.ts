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
  container: Sub[] | string[],
}

export type Sub = {
  readonly id: number,
  title: string,
  names: string[]
}