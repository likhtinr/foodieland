import './Hero.scss'
import HeroCard from '@/components/HeroCard/index.js'

export default () => {
  return (
      <section className="hero" aria-labelledby="hero-title">
          <div
              className="hero__slider swiper"
              data-js-slider={JSON.stringify({
                    spaceBetween: 40,
                    slidesPerView: 1.0625,
                    centeredSlides: true
              })}
          >

              <ul className="hero__slider-list swiper-wrapper">
                  <li className="hero__slider-item swiper-slide">
                      <div className="hero__card">
                         1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorum id quod! Aliquam ipsam molestiae odit, officia provident reprehenderit saepe. Aut beatae distinctio ducimus enim provident soluta veniam voluptate? Adipisci aliquam consectetur deserunt dolore doloribus est fugiat harum, id nesciunt nulla perspiciatis provident quaerat quas quia tempora tenetur voluptate! Ad at autem, commodi debitis earum fuga harum, hic illum inventore ipsam magnam, quas quibusdam recusandae repudiandae sed sequi voluptate voluptatum. A alias corporis earum inventore iste. Ad animi architecto consectetur culpa, delectus distinctio illo impedit ipsam iure laboriosam odit perferendis quidem quis, quod ratione sequi suscipit temporibus velit vitae voluptas.
                      </div>
                      <HeroCard
                          category={{
                              imgSrc: '/src/assets/images/scroll.png',
                              label: 'Hot Recipes'
                          }}
                          title = "Spicy delicious chicken wings"
                          TitleTag = "h1"
                          description = "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
                          tags = {[
                              {
                                  iconName: 'clock',
                                  label: '30 Minutes'
                              },
                              {
                                  iconName: 'fork',
                                  label: 'Chicken'
                              },
                          ]}
                          author = {{
                            imgSrc: '/src/assets/images/man.jpg',
                              name: "John Smith",
                              date: {
                                dateTime: '22-03-15',
                                label: '15 March 2022'
                            },
                          }}
                          imgSrc = "/src/assets/images/chicken.jpg"
                      />
                  </li>
              </ul>
          </div>
      </section>
  )
}
