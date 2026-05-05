import './Section.scss'
import clsx from 'clsx'
import Button from '@/components/Button/index.js'

export default (props) => {
  const {className, title, titleId, description,linkLabel, isHeaderVertical = false, children} = props

  return (
    <section
      className={clsx('section', className)}
      aria-labelledby={titleId}
    >
      <header
        className={clsx(
          'section__header',
          'container',
          isHeaderVertical && 'section__header--vertical'
          )}
      >
        <h2
          className="section__title"
          id={titleId}
        >
          {title}
        </h2>
        {description && (
          <div className="section__description">
            <p>{description}</p>
          </div>
        )}
        {linkLabel && (
          <Button
            href="/"
            className="section__link"
            mode="secondary"
          >
            {linkLabel}
          </Button>
        )}
      </header>
      <div className="section__body container">{children}</div>
    </section>
  )
}
