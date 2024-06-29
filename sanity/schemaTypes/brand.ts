type Field = {
  name: string
  title: string
  type: string
}

type Brand = {
  name: string
  type: string
  title: string
  fields: Field[]
}

const brand: Brand = {
  name: 'brand',
  type: 'document',
  title: 'Бренды',
  fields: [
    {
      name: 'name',
      title: 'Названия бренда',
      type: 'string',
    },
  ],
}

export default brand
