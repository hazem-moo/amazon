import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ProductsItems from './containers/productsItems'
import Slider from './productId/slider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Slider />
    <ProductsItems />
    </>
  )
}
