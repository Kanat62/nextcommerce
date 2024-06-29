type Field = {
  name: string
  title: string
  type: string
}

type Category = {
  name: string
  type: string
  title: string
  fields: Field[]
}

const category: Category = {
  name: 'category',
  type: 'document',
  title: 'Категории',
  fields: [
    {
      name: 'name',
      title: 'Названия котегории',
      type: 'string',
    },
  ],
}

export default category
