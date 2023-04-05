import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background: #fff;
  background: radial-gradient(
      circle,
      rgba(238, 174, 202, 1) 0%,
      rgba(199, 233, 148, 1) 100%
    )
    h1 {
    text-align: center;
  }
  
  .accordion {
    max-width: 100%;
  }
  .accordion-title {
    cursor: pointer;
    background-color: #ffffff;

    .icon__title {
      display: flex;
      justify-content:center;
      align-items: center;
      padding-left: 20px;
    }
  }
  .accordion-title {
    padding: 0rem;
  }
  .accordion-content {
    padding: 1rem;
  }
  .accordion-content {
    background-color: #ffffff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    align-items:center;
    justify-content:center;
  }
`;