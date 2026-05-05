import './RecipeCard.scss'
import {Image} from 'minista'
import Tags from '../Tags/Tags.jsx'
import clsx from 'clsx'
import Icon from '../Icon/index.js'

export default (props) => {
  const {
    title,
    titleExtraClassName = 'h4',
    mode = "",
    tags = [],
    imgSrc,
    isLiked,
  } = props

  const likeButtonTitle = isLiked ? 'Dislike' : 'Like'
  return (
    <article
      className={clsx("recipe-card",
        mode && `recipe-card--${mode}`
        )}
    >
      <a
        href="/"
        className="recipe-card__link"
      >
        <Image
          className="recipe-card__image"
          src={imgSrc}
        />
        <h3 className={clsx('recipe-card__title', titleExtraClassName)}>{title}</h3>
        <Tags
          className="recipe-card__tags"
          items={tags}
        />
      </a>
      <button
        className={clsx(
          'recipe-card__like-button',
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