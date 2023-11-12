import { Playfair_Display, Roboto, Foldit, Black_Ops_One, Poppins, Ubuntu } from 'next/font/google'

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
export const Foldit_Font = Foldit({
    weight: ['100', '300', '400', '500', '700'],
    subsets: ['latin']
})
export const Poppin = Poppins({
    weight: ['100', '300', '400', '500', '700', '800'],
    subsets: ['latin']
})
export const Ubuntu_font = Ubuntu({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin']
})
