import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 12rem;
  position: relative;
  z-index: 2;

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0;
    color: var(--green);
  }

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 72rem;
  }

  .experience-card {
    padding: 2rem 2.4rem;
    border-radius: 1.2rem;
    background-color: #2b2b2b;
    border: 1px solid rgba(35, 206, 107, 0.15);
    color: #fff;
    transition: border-color 0.25s ease, box-shadow 0.25s ease,
      background 0.25s ease;

    &:hover {
      border-color: var(--green);
      box-shadow: 0 8px 25px rgba(35, 206, 107, 0.18);
      background: rgba(35, 206, 107, 0.08);
    }

    h3 {
      font-size: 2rem;
      margin-bottom: 0.6rem;
      color: #fff;
    }

    .meta {
      font-size: 1.35rem;
      letter-spacing: 0.06rem;
      opacity: 0.75;
      margin-bottom: 1.4rem;
      color: var(--green);
      font-weight: 600;
    }

    ul {
      margin: 0;
      padding-left: 1.8rem;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }

    li {
      font-size: 1.55rem;
      letter-spacing: 0.06rem;
      line-height: 1.45;
      color: rgba(255, 255, 255, 0.92);
      list-style: disc;
    }
  }

  @media (max-width: 740px) {
    text-align: left;
  }
`
