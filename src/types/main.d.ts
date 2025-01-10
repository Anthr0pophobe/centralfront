export type Actions = {
  readonly id: number,
  name: string
}

export type VehiculeType = {
  readonly id: number,
  name: string,
  caracteristiques: Caracteristiques[]
}

export type Caracteristiques = {
  readonly id: number,
  name: string,
  values: Array
}