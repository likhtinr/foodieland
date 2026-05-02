import './RecipeCard.scss'
import {Image} from 'minista'
import Tags from '../Tags/Tags.jsx'
import clsx from 'clsx'
import Icon from '../Icon/index.js'

export default (props) => {
  const {
    title,
    tags,
    imgSrc,
    isLiked,
  } = props

  const likeButtonTitle = isLiked ? 'Dislike' : 'Like'
  return (
    <article className="recipe-card">
      <a
        href="/"
        className="recipe-card__link"
      >
        <Image
          className="recipe-card__image"
          src={imgSrc}
        />
        <h3 className="recipe-card__title h4">{title}</h3>
        <Tags
          className="recipe-card__tags"
          items={tags}
        />
      </a>
      <button
        className={clsx(
          'recipe-card__button',
          isLiked && 'is-liked'
          )}
          type="button"
          area-label={likeButtonTitle}
          title={likeButtonTitle}
        >
        <Icon
          hasFill
          name="heart"
        />
      </button>
    </article>
  )
}