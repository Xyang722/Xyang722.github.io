import type { ImageMetadata } from 'astro'
import type { PhotoData, Photo, PolaroidVariant } from '~/types'

// Auto-import all images under the photos directory.
const photoModules = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/**/*.{webp,jpg,jpeg,png}', { eager: true })

/**
 * Get a sorted list of photos by directory name.
 * @param dir - Directory name, for example '2025-06-21-cat'
 * @param alt - Image alt text
 * @param variants - Variant for each image, mapped by index
 */
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

export const PhotosList: PhotoData[] = [
  {
    title: 'Suzhou - Evening Walk',
    icon: { type: 'emoji', value: '🌃' },
    description: 'A brief summer evening in Suzhou, with city lights and a saved little route from the day.',
    date: '2025-06-24',
    travel: '',
    photos: getPhotos('2025-6-24suzhou', 'A summer evening walk in Suzhou', ['4x3', '4x3', '4x3']),
  },
  {
    title: 'Wuxi - Yuantouzhu',
    icon: { type: 'emoji', value: '🌿' },
    description: 'An early-spring walk by Taihu Lake, kept for the soft light, water, and open air.',
    date: '2025-03-26',
    travel: '',
    photos: getPhotos('2025-3-26Yuantouzhu', 'An early spring walk at Yuantouzhu in Wuxi', ['4x3', '4x3', '4x3', '4x3', '4x3', '4x3']),
  },
  {
    title: 'Hangzhou - West Lake',
    icon: { type: 'emoji', value: '🍁' },
    description: '深秋西湖，红枫灼灼，层林尽染。湖面倒映着金黄与赤红，像是打翻了调色盘，把最浓的秋意都留在了这片山水之间。',
    date: '2024-12-10',
    travel: '',
    photos: getPhotos('2024-12-10westlake', 'Autumn red maples at West Lake in Hangzhou', ['4x3', '4x3', '4x3', '4x3', '4x3', '4x3', '4x3', '4x3', '4x3', '4x3']),
  },
]
