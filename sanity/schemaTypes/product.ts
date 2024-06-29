type Rule = {
  required: () => Rule
  error: (message: string) => Rule
}
type Field = {
  name: string
  type: string
  title: string
  validation?: (rule: Rule) => Rule
  options?: {
    list: {title: string; value: string}[]
    layout: string
  }
  of?: {type: string}[]
  to?: {type: string}[]
}

type Product = {
  name: string
  title: string
  type: string
  fields: Field[]
}

const product: Product = {
  name: 'product',
  title: 'Товары',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Название товара',
      validation: (Rule) => Rule.required().error('Это поле обязательно для заполнения'),
    },
    {
      name: 'primary_image',
      type: 'image',
      title: 'Изображение товара',
      validation: (Rule) => Rule.required().error('Это поле обязательно для заполнения'),
    },
    {
      name: 'other_images',
      type: 'array',
      title: 'Другие изображение товара',
      of: [{type: 'image'}],
    },
    {
      name: 'price',
      title: 'Цена',
      type: 'number',
      validation: (Rule) => Rule.required().error('Это поле обязательно для заполнения'),
    },
    {
      name: 'memory',
      title: 'Объём памяти',
      type: 'number',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Подробности товара',
      validation: (Rule) => Rule.required().error('Это поле обязательно для заполнения'),
    },
    {
      name: 'category',
      title: 'Категория',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
      validation: (Rule) => Rule.required().error('Это поле обязательно для заполнения'),
    },

    {
      name: 'in_stock',
      title: 'В наличии',
      type: 'string',
      options: {
        list: [
          {title: 'Да', value: 'yes'},
          {title: 'Нет', value: 'no'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required().error('Это поле обязательно для заполнения'),
    },

    {
      name: 'brand',
      title: 'Бренд',
      type: 'reference',
      to: [
        {
          type: 'brand',
        },
      ],
    },
  ],
}
export default product
