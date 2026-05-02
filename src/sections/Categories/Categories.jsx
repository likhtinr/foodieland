import Section from '../../layouts/Section/index.js'
import Grid from '@/components/Grid/index.js'
import CategoryCard from '../../components/CategoryCard/index.js'
import categories from './data.json'

export default () => {

  return (
    <Section
      title="Categories"
      titleId="categories"
      linkLabel="View All Categories"
    >
      <Grid columns={6}>
        {categories.map((category, index) => (
          <CategoryCard {...category} key={index}/>
        ))}
      </Grid>
    </Section>
  )
}