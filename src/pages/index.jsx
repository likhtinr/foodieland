import Hero from '@/sections/Hero'
import Categories from '../sections/Categories/index.js'
import Recipes from '../sections/Recipes/index.js'
import Banner from '../layouts/Banner/index.js'
import InstagramView from '../sections/InstagramView/index.js'
import DailyRecipes from '../sections/DailyRecipes/index.js'
import Subscribe from '../sections/Subscribe/index.js'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Categories />
      <Recipes />
      <Banner />
      <InstagramView />
      <DailyRecipes />
      <Subscribe />
    </>
  )
}
