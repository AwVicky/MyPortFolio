import styled from "styled-components";


export const CarouselWrap = styled.div`
  margin-bottom: 2rem;

  .viewport {
    border-radius: 0.8rem;
    overflow: hidden;
    border: 1px solid rgba(35, 206, 107, 0.2);
    background: rgba(0, 0, 0, 0.25);
  }

  .slide-img {
    display: block;
    width: 100%;
    max-height: 22rem;
    object-fit: cover;
  }

  .carousel-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    margin-top: 1rem;
  }

  .carousel-nav button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    font-size: 2.4rem;
    line-height: 1;
    background: var(--green);
    color: #fff;
    transition: filter 0.2s ease, transform 0.2s ease;

    &:hover {
      filter: brightness(0.92);
      transform: scale(1.05);
    }
  }

  .dots {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .dot {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.25);
  }

  .dot.active {
    background: var(--green);
  }

  html.light & .dot {
    background: rgba(0, 0, 0, 0.2);
  }

  html.light & .dot.active {
    background: var(--green);
  }
`;

export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 2rem;
    overflow: visible;

    .animated{
      height: 100%;
    }

    .project{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      border: 1px solid rgba(35, 206, 107, 0.15);
      &:hover{
        transform: scale(1.04);
        background: rgba(35, 206, 107, 0.12);
        border-color: var(--green);
        box-shadow: 0 8px 25px rgba(35, 206, 107, 0.25);
        color: #FFF;
        h3 { color: #FFF; }
        p { color: #FFF; }
        footer .tech-list { color: #FFF; }
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 4rem;
            height: 4rem;
            border-radius: 0.8rem;
            border: 1px solid rgba(35, 206, 107, 0.2);
            background: rgba(255, 255, 255, 0.04);
            cursor: pointer;
            transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
            &:hover {
              border-color: var(--green);
              background: rgba(35, 206, 107, 0.12);
              box-shadow: 0 4px 14px rgba(35, 206, 107, 0.3);
              transform: translateY(-3px);
            }
          }
        }
        a > img {
          width: 5.0rem;
        }
        .app-icon {
          width: 5.4rem;
          height: 5.4rem;
          border-radius: 1.2rem;
          object-fit: cover;
        }
        .app-icon--white {
          background: #ffffff;
          padding: 0.5rem;
          object-fit: contain;
        }
        .store-icon {
          width: 2.4rem;
          height: 2.4rem;
          object-fit: contain;
          opacity: 0.8;
          transition: opacity 0.25s ease;
          &:hover {
            opacity: 1;
          }
        }
        .badge-ongoing {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--green);
          background: rgba(35, 206, 107, 0.12);
          border: 1px solid rgba(35, 206, 107, 0.4);
          border-radius: 2rem;
          padding: 0.35rem 1rem;
          letter-spacing: 0.05rem;
          animation: pulse-badge 2s ease-in-out infinite;
        }
        @keyframes pulse-badge {
          0%, 100% { box-shadow: 0 0 0 0 rgba(35, 206, 107, 0.4); }
          50%       { box-shadow: 0 0 0 5px rgba(35, 206, 107, 0); }
        }
      }
      
      h3{
        margin-bottom: 2rem;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem 1.6rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`