import snapQuoteShot from '../assets/SnapQuoteGT.jpg'
import aiHomeShot from '../assets/AihomePro.png'
import blackTreeShot from '../assets/BlacktreeLogo.png'
import crediOneShot from '../assets/CrediOne.png'
import wantlystShot from '../assets/wantlystLogo.png'
import snapQuoteIcon from '../assets/SnapQuoteGT.jpg'
import aiHomeIcon from '../assets/aihomepro-icon.png'
import blackTreeIcon from '../assets/blacktree-icon.png'
import crediOneIcon from '../assets/credione-icon.png'
import wantlystIcon from '../assets/wantlyst-icon.png'

export type ProjectLinks = {
  android?: string
  ios?: string
  github?: string
  web?: string
}

export interface PortfolioProject {
  id: string
  title: string
  summary: string
  description: string
  tech: string[]
  icon: string
  iconAlt: string
  /** Larger promotional / UI imagery for the carousel */
  gallery: string[]
  links: ProjectLinks
  ongoing?: boolean
  featured?: boolean
}

export const PROJECTS: PortfolioProject[] = [
  {
    id: 'snapquotegt',
    title: 'SnapQuoteGT',
    summary: 'Procurement & RFQs for contractors',
    description:
      'A React Native procurement management app that enables contractors to create RFQs, receive supplier quotes, compare bids side-by-side across building sectors, and manage their supplier network end-to-end on iOS and Android.',
    tech: [
      'React Native',
      'Redux Toolkit',
      'TanStack Query',
      'React Navigation',
      'Formik & Yup',
      'Google Places API',
    ],
    gallery: [snapQuoteShot],
    icon: snapQuoteIcon,
    iconAlt: 'SnapQuoteGT app icon',
    links: {
      android:
        'https://play.google.com/store/apps/details?id=com.snapquotegt',
      ios: 'https://apps.apple.com/pk/app/snapquotegt/id6757408018',
      github: 'https://github.com/AwVicky',
    },
    featured: true,
  },
  {
    id: 'aihomepro',
    title: 'AI Home Pro — Smart Home Assistant',
    summary: 'GPT-4o Vision household diagnostics',
    description:
      'A React Native app that lets homeowners diagnose and fix household issues (HVAC, plumbing, electrical, appliances) by submitting a photo and description to an AI assistant powered by OpenAI GPT-4o Vision via Firebase Cloud Functions. Users can escalate to a live expert, save solutions, and access subscription-based repair guides.',
    tech: [
      'React Native',
      'Firebase',
      'OpenAI GPT-4o',
      'Redux',
      'RevenueCat',
      'GiftedChat',
      'AdMob',
    ],
    gallery: [aiHomeShot],
    icon: aiHomeIcon,
    iconAlt: 'AI Home Pro app icon',
    links: {
      android: 'https://play.google.com/store/apps/details?id=com.aihomepro',
      ios: 'https://apps.apple.com/us/app/ai-home-pro/id6748644264',
      github: 'https://github.com/AwVicky',
    },
    featured: true,
  },
  {
    id: 'blacktree',
    title: 'BlackTree — Educational App',
    summary: 'Learning platform with Stripe & IAP',
    description:
      'A cross-platform educational app built with React Native, Firebase, and TypeScript, featuring real-time data, in-app purchases, and secure payment integration via Stripe. Designed to deliver a smooth and scalable learning experience on both iOS and Android.',
    tech: [
      'React Native',
      'TypeScript',
      'Firebase',
      'Firebase Functions',
      'Stripe',
      'In-App Purchase',
    ],
    gallery: [blackTreeShot],
    icon: blackTreeIcon,
    iconAlt: 'BlackTree app icon',
    links: {
      github: 'https://github.com/AwVicky',
    },
  },
  {
    id: 'credione',
    title: 'CrediOne — Mobile Lending App',
    summary: 'Loans, repayments, secure auth',
    description:
      'A React Native mobile lending app enabling users to apply for loans, track repayments, manage profiles and bank accounts, and receive real-time notifications. Features secure auth (Google & Apple Sign-In), encrypted storage, multi-language support, and live chat.',
    tech: [
      'React Native',
      'TypeScript',
      'Redux Toolkit',
      'React Query',
      'Stripe',
      'Firebase FCM',
      'Google Sign-In',
      'Apple Auth',
      'i18next',
      'Notifee',
    ],
    gallery: [crediOneShot],
    icon: crediOneIcon,
    iconAlt: 'CrediOne app icon',
    links: {
      github: 'https://github.com/AwVicky',
    },
    ongoing: true,
  },
  {
    id: 'wantlyst',
    title: 'Wantlyst — Shopping Wishlist App',
    summary: 'Social wishlists & share extensions',
    description:
      'A cross-platform React Native shopping wishlist app featuring social collaboration, real-time chat, product discovery, Firebase notifications, and native Android/iOS share extensions. Built with a Redux + React Query data layer for seamless performance.',
    tech: [
      'React Native',
      'TypeScript',
      'Redux',
      'React Query',
      'Firebase FCM',
      'React Navigation',
      'Axios',
    ],
    gallery: [wantlystShot],
    icon: wantlystIcon,
    iconAlt: 'Wantlyst app icon',
    links: {
      github: 'https://github.com/AwVicky',
    },
    ongoing: true,
  },
]

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured)
