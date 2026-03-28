import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @keyframes float {
    0%   { transform: translateY(0px); }
    50%  { transform: translateY(-6px); }
    100% { transform: translateY(0px); }
  }

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    width: 100%;
  }

  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skill-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    padding: 1rem 1.2rem;
    border-radius: 1rem;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(35, 206, 107, 0.15);
    cursor: default;
    animation: float 3s ease-in-out infinite;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;

    &:nth-child(1)  { animation-delay: 0.0s; }
    &:nth-child(2)  { animation-delay: 0.2s; }
    &:nth-child(3)  { animation-delay: 0.4s; }
    &:nth-child(4)  { animation-delay: 0.6s; }
    &:nth-child(5)  { animation-delay: 0.8s; }
    &:nth-child(6)  { animation-delay: 1.0s; }
    &:nth-child(7)  { animation-delay: 1.2s; }
    &:nth-child(8)  { animation-delay: 1.4s; }
    &:nth-child(9)  { animation-delay: 1.6s; }
    &:nth-child(10) { animation-delay: 1.8s; }
    &:nth-child(11) { animation-delay: 2.0s; }
    &:nth-child(12) { animation-delay: 2.2s; }
    &:nth-child(13) { animation-delay: 2.4s; }

    &:hover {
      animation-play-state: paused;
      transform: scale(1.18);
      background: rgba(35, 206, 107, 0.12);
      border-color: var(--green);
      box-shadow: 0 8px 25px rgba(35, 206, 107, 0.25);
    }

    img {
      width: 3.8rem;
      transition: transform 0.3s ease;
    }

    span {
      font-size: 1.1rem;
      color: var(--green);
      font-weight: 600;
      white-space: nowrap;
      opacity: 0.85;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  .about-text{
    width: 100%;
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 75%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
    
    
  }

`