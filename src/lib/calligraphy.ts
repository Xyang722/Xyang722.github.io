import type { ImageMetadata } from 'astro'
import type { PhotoData, Photo, PolaroidVariant } from '~/types'

const photoModules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photos/calligraphy-*/**/*.{webp,jpg,jpeg,png}',
  { eager: true },
)

function getPhotos(dir: string, alt: string, variants: PolaroidVariant[]): Photo[] {
  return Object.entries(photoModules)
    .filter(([path]) => path.includes(`/${dir}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod], index) => {
      const img = mod.default
      return {
        src: img,
        alt,
        width: img.width,
        height: img.height,
        variant: variants[index] || '4x3',
      }
    })
}

export const CalligraphyList: PhotoData[] = [
  {
    title: '游西山诗十二首',
    icon: { type: 'emoji', value: '✒️' },
    date: '2026',
    travel: '',
    photos: getPhotos(
      'calligraphy-youxishan',
      '游西山诗十二首',
      ['4x3', '4x3', '4x3', '4x3'],
    ),
  },
  {
    title: '醉翁亭记',
    icon: { type: 'emoji', value: '🖌️' },
    date: '2026',
    travel: '',
    photos: getPhotos(
      'calligraphy-zuiwengting',
      '醉翁亭记',
      ['4x3', '4x3', '4x3', '4x3'],
    ),
  },
  {
    title: '扇面-晏殊 蝶恋花',
    icon: { type: 'emoji', value: '✒️' },
    date: '2026',
    travel: '',
    photos: getPhotos(
      'calligraphy-shanmian',
      '扇面-晏殊 蝶恋花',
      ['4x3'],
    ),
  },
]
