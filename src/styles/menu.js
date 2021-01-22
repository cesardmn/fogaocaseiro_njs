import styled from 'styled-components'

export const Page = styled.div`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  height: 297mm;
  width: 210mm;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  align-items: center;
  border: 1px solid grey;

`
export const Header = styled.div`
  /* border: 1px solid black; */
  height: 30mm;
  width: 100%;
  overflow: hidden;  
  background-image: url('./media/bg.png');
  background-size: cover;

  display: flex;
  align-items:center;
  justify-content: space-evenly;

  img {
    height: 100%;
    object-fit: contain;
  }

  .social {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content:space-evenly;

    a {
      color: white;
      text-decoration: none;
      font-size: 32px;
      font-weight: bold;
      span {
        margin-left: 1rem;
      }
    }
  }
`

export const TopGroup = styled.div`
  height: 15mm;
  width: 100%;

  display: flex;
  align-items:baseline;
  justify-content: center;
  font-size: 24px;
  
  span {
    margin-left: 0.5rem;
    font-size: 26px;
    color: grey;
  } 
`

export const MenuList = styled.div`
  height: 252mm;
  width: 100%;
  overflow: hidden;

  .typeList {
    
    h1 {
      padding: 0 1rem;
      font-size: 34px;
      margin: 1rem 0;
      text-decoration: underline;
      margin: 2.5rem 0;
    }

    li {
      display: flex;
      font-size: 30px;
      border-bottom: 1px solid #e2e2e2;
      margin-bottom: 2rem;
      padding-left: 1rem;
    }

  }

`