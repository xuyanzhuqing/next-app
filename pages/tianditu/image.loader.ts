import { ImageLoaderProps } from 'next/image'
import type { State } from './index'
export default function ImageLoader({
  src,
  width,
  quality,
  TILECOL,
  TILEROW
}: ImageLoaderProps & State) {
  const token = '0af08991b225a26ae6ce8db20e528541'
  const params = {
    SERVICE: 'WMTS',
    REQUEST: 'GetTile',
    VERSION: '1.0.0',
    LAYER: 'cva',
    STYLE: 'default',
    TILEMATRIXSET: 'w',
    FORMAT: 'tiles',
    tk: token,
    TILECOL,
    TILEROW,
    TILEMATRIX: 13
  }

  const scheme = Object.keys(params)
    .map((v) => [v, params[v]].join('='))
    .join('&')

  return `${src}?${scheme}`
}
