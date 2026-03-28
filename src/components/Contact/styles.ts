import styled from "styled-components";


export const Container = styled.section`
  margin-top: 10rem;

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: 4rem;
    }
    p{
      color: var(--green);
      font-weight: 500;
    }
  }

  .contacts{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 1.5rem;
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      max-width: 30rem;
      gap: 2rem;
      background-color: #2b2b2b;
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      border: 1px solid rgba(35, 206, 107, 0.15);
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
      cursor: pointer;
      img{
        width: 4rem;
        filter: invert(65%) sepia(60%) saturate(400%) hue-rotate(90deg);
      }
      a{
        color: #fff;
        font-weight: 500;
        transition: color 0.3s ease;
      }
      &:hover{
        transform: scale(1.04);
        background: rgba(35, 206, 107, 0.12);
        border-color: var(--green);
        box-shadow: 0 8px 25px rgba(35, 206, 107, 0.25);
        a{
          color: var(--green);
        }
      }
    }
  }


  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        
      }
    }
  }
  
`
/* old one - 2/1/2023 - 
@media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        flex-direction: column;
      }
    }

*/
