interface Alloy {
  name: string
  components: Component[]
}

interface Component {
  name: string
  minValue: number
  maxValue: number
}
