import { Inter, Roboto } from '@next/font/google'
import LocalFont from '@next/font/local'

// If loading a variable font, you don't need to specify the font weight
export const inter = Inter({
  subsets: ['latin'],
  // weight: '100'
})


// 可变字体
export const roboto = Roboto({
  weight: '400',
  style: [
    'italic',
    'normal',
  ],
  subsets: ['latin']
})