import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 820px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const AppWrapper = styled.div`
  width: 100%;
`;

export const ImgCreate = styled.div`
  width: 100%;
`;

export const WrapperRight = styled.div`
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
  cursor: pointer;
`;

export const ItemLogo = styled.div`
  width: 160px;
  height: 160px;
  align-items: center;
  border-color: #b3b3b3;
  border-radius: 50%;
  border-style: dashed;
  border-width: 3px;
  color: #353840;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  justify-content: center;
  line-height: 22.5px;
  padding: 4px;
  position: relative;
`;

interface ImgLogoProp {
  width: number;
  height: number;
  radius: number;
}

export const ImgLogo = styled.img`
  width: 146px;
  height: 146px;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  left: 4px;
  top: 3px;
  flex-shrink: 0;
`;

export const Featured = styled.div`
  width: 300px;
  height: 200px;
  align-items: center;
  border-color: #cccccc;
  border-radius: 10px;
  border-style: dashed;
  border-width: 3px;
  color: #353840;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  justify-content: center;
  line-height: 22.5px;
  padding: 4px;
  position: relative;
`;

export const ImgFeatured = styled.img`
  width: 286px;
  height: 186px;
  background-color: #ccc;
  border-radius: 10px;
  font-size: 15px;
  line-height: 22.5px;
  cursor: pointer;
  position: absolute;
`;

export const Banner = styled.div`
  width: 700px;
  height: 200px;
  align-items: center;
  border-color: #b3b3b3;
  border-radius: 10px;
  border-style: dashed;
  border-width: 3px;
  color: #353840;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  justify-content: center;
  line-height: 22.5px;
  padding: 4px;
  position: relative;
`;

export const ImgBanner = styled.img`
  width: 686px;
  height: 186px;
  background-color: #ccc;
  border-radius: 10px;
  color: tran;
  font-size: 15px;
  line-height: 22.5px;
  cursor: pointer;
  position: absolute;
`;

export const ImgWbnb = styled.img`
  width: 32px;
  height: 32px;
`;

export const Strong = styled.strong`
  color: #eb5757;
  display: inline;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
`;
export const Title = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid rgb(214, 211, 211);
`;
export const SpanTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const H1 = styled.h1`
  color: #04111d;
  font-family: Poppins;
  font-size: 40px;
  font-weight: 600;
  line-height: 44px;
  margin: 33.2px 0px 16px;
`;
export const H3 = styled.h3`
  color: #353840;
  font-family: Poppins;
  font-weight: 600;
  line-height: 24px;
  margin: 10px 0px 5px;
`;
export const Span = styled.span`
  color: #353840;
  font-family: Poppins;
  font-size: 15px;
  line-height: 22.5px;
  margin-bottom: 5px;
`;
export const Textarea = styled.textarea`
  border-color: #8a939b;
  border-radius: 10px;
  border-style: solid;
  border-width: 2px;
  color: #04111d;
  font-family: Poppins;
  font-size: 15px;
  line-height: 22.5px;
  padding: 12px;
  outline: none;
`;
export const Input = styled.input`
  color: #353840;
  flex-basis: 0%;
  font-family: Poppins;
  font-size: 15px;
  line-height: 22.5px;
  padding: 5px 12px 5px 10px;
  outline: none;
`;
export const BscTestnet = styled.div`
  display: flex;
  align-items: center;
`;
export const Button = styled.button`
  width: 109px;
  height: 60px;
  align-items: center;
  background-color: #2081e2;
  border-color: #2081e2;
  border-radius: 12px;
  border-style: solid;
  border-width: 2px;
  box-shadow: #000000 0px 0px 0px 0px;
  color: #ffffff;
  display: inline-flex;
  font-family: Poppins;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.16px;
  line-height: 22px;
  padding: 17px 24px;
  text-align: center;
  margin: 20px 0px 20px;
  cursor: pointer;
`;
