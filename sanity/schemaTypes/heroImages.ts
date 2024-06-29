type Field = {
  name: string
  type: string
  title: string
}

type HeroImages = {
  name: string
  type: string
  title: string
  fields: Field[]
}

const heroImages: HeroImages = {
  name: 'heroImage',
  type: 'document',
  title: 'Баннер',
  fields: [
    {
      name: 'image1',
      type: 'image',
      title: 'Изображение',
    },
    {
      name: 'image2',
      type: 'image',
      title: 'Изображение',
    },
  ],
}

export default heroImages
