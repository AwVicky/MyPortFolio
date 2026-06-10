import { useCallback, useState } from 'react'
import { CarouselWrap } from './styles'

type Props = {
  images: string[]
  label: string
}

export function ProjectCarousel({ images, label }: Props) {
  const [index, setIndex] = useState(0)
  const len = images.length
  const safeIndex = len === 0 ? 0 : index % len

  const prev = useCallback(() => {
    if (len < 2) return
    setIndex((i) => (i - 1 + len) % len)
  }, [len])

  const next = useCallback(() => {
    if (len < 2) return
    setIndex((i) => (i + 1) % len)
  }, [len])

  if (len === 0) return null

  const src = images[safeIndex]

  return (
    <CarouselWrap className="project-carousel">
      <div className="viewport">
        <img
          src={src}
          alt={`${label} — preview ${safeIndex + 1} of ${len}`}
          className="slide-img"
          loading="lazy"
        />
      </div>
      {len > 1 ? (
        <div className="carousel-nav">
          <button type="button" onClick={prev} aria-label="Previous preview">
            ‹
          </button>
          <span className="dots" aria-hidden="true">
            {images.map((_, i) => (
              <span key={i} className={i === safeIndex ? 'dot active' : 'dot'} />
            ))}
          </span>
          <button type="button" onClick={next} aria-label="Next preview">
            ›
          </button>
        </div>
      ) : null}
    </CarouselWrap>
  )
}
