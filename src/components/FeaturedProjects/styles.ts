import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 8rem;
  position: relative;
  z-index: 2;

  h2 {
    font-size: 2.8rem;
    margin-bottom: 0.8rem;
    color: var(--green);
  }

  .intro {
    font-size: 1.6rem;
    letter-spacing: 0.06rem;
    opacity: 0.85;
    margin-bottom: 2.4rem;
    max-width: 52rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .featured-card {
    display: flex;
    flex-direction: column;
    padding: 2rem 1.8rem;
    border-radius: 1.2rem;
    background-color: #2b2b2b;
    border: 1px solid rgba(35, 206, 107, 0.15);
    color: #fff;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease,
      background 0.3s ease;
    text-decoration: none;

    &:hover {
      transform: translateY(-4px);
      border-color: var(--green);
      background: rgba(35, 206, 107, 0.12);
      box-shadow: 0 8px 25px rgba(35, 206, 107, 0.25);
    }

    img.thumb {
      width: 100%;
      height: 14rem;
      object-fit: cover;
      border-radius: 0.8rem;
      margin-bottom: 1.6rem;
      border: 1px solid rgba(35, 206, 107, 0.2);
    }

    h3 {
      font-size: 2rem;
      margin-bottom: 0.8rem;
    }

    p.summary {
      font-size: 1.4rem;
      letter-spacing: 0.08rem;
      opacity: 0.85;
      flex: 1;
      margin-bottom: 1.2rem;
    }

    span.cta {
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--green);
      letter-spacing: 0.06rem;
    }
  }

  .footer-row {
    margin-top: 2rem;
    font-size: 1.4rem;

    a.all {
      color: var(--green);
      font-weight: 600;
      border-bottom: 1px solid transparent;
      transition: border-color 0.2s ease;

      &:hover {
        border-color: var(--green);
      }
    }
  }

  @media (max-width: 740px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`
