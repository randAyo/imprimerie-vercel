export interface obj {
  minPrice: number,
  values: object
}

export interface accordion {
  title: string
  answer: string
  id: number
}
export interface content {
  description: string[]
  accordion: accordion[]
}
export interface detail {
  name: string
  id: number
  src: string
  obj: obj
  content: content
}
export interface serviceContent {
  name: string
  src: string
  description: string[]
  minPrice: number
  
}
export interface NameList {
  name: string
  id: number
}
export interface api extends serviceContent {
  accoridon: accordion[]
  nameList: NameList[]
}