// lib/useTranslation.js
import { useRouter } from 'next/router'
import en from '../locales/en.json'
import es from '../locales/es.json'

export default function useT() {
  const { locale } = useRouter()
  return locale === 'es' ? es : en
}
