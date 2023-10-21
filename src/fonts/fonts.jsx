import { Playfair_Display, Black_Ops_One, Roboto } from 'next/font/google'

export const Playfair = Playfair_Display({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin']
})

export const Black_Ops = Black_Ops_One({
    weight: '400',
    subsets: ['latin']
})

export const Roboto_Font = Roboto({
    weight: ['100', '300', '400', '500', '700'],
    subsets: ['latin']
})