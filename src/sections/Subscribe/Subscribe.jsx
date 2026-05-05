import Section from '../../layouts/Section/index.js'
import './Subscribe.scss'
import Field from '@/components/Field/index.js'
import Button from '@/components/Button/index.js'

export default () => {
  return (
    <Section className="subscribe container">
      <div className="subscribe__inner">
        <h2 className="subscribe__title">Deliciousness to your inbox</h2>
        <div className="subscribe__description">
          <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
        </div>
        <form className="subscribe__form">
          <label htmlFor="email" className="visually-hidden">Email</label>
          <input
            className="subscribe__input"
            id="email"
            name="email"
            type="email"
            placeholder="example@mail.com"
          />
          <Button className="subscribe__button" type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    </Section>
  )
}