import React, { useState } from "react";
import {
  AppWrapper,
  Wrapper,
  ImgLogo,
  ImgFeatured,
  ItemLogo,
  Featured,
  Banner,
  ImgBanner,
  ImgWbnb,
  Strong,
  Title,
  H1,
  H3,
  Span,
  Textarea,
  Input,
  BscTestnet,
  Button,
  SpanTitle,
} from "./styles";
import "./createcollection.css";
import Image from "../../assets/logo-img.jpg";

import { BiChevronRight } from "react-icons/bi";

const Updata = (): JSX.Element => {
  const [imgLogo, setImgLog] = useState<any>(Image);
  const [imgFeatured, setImgFeatured] = useState<any>(Image);
  const [imgBanner, setImgBanner] = useState<any>(Image);

  const handleImgFeatured = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImgFeatured({ featured: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const imageHandler = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImgLog({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleImgBanner = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImgBanner({ profileBanner: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const { profileImg } = imgLogo;
  const { featured } = imgFeatured;
  const { profileBanner } = imgBanner;

  return (
    <AppWrapper>
      <Title>
        <SpanTitle>
          My Collections <BiChevronRight />
          <strong>Create a Collection</strong>
        </SpanTitle>
      </Title>
      <Wrapper>
        <H1>Create a Collection</H1>
        <Span>
          <Strong>*</Strong>
          Required fields
        </Span>
        <H3>
          Logo image<Strong>*</Strong>
        </H3>
        <Span>
          This image will also be used for navigation. 350 x 350 recommended.
        </Span>
        <ItemLogo>
          <ImgLogo
            src={profileImg ? profileImg : Image}
            alt=""
            id="img"
            className="img"
          />
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={imageHandler}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input">
              <i className="material-icons">add_photo_alternate</i>
              Choose your Photo
            </label>
          </div>
        </ItemLogo>
        <H3>Featured image</H3>
        <Span>
          This image will be used for featuring your collection on the homepage,
          category pages, or other promotional areas of OpenSea. 600 x 400
          recommended.
        </Span>
        <Featured>
          <ImgFeatured
            src={featured ? featured : Image}
            alt=""
            id="img__featured"
            className="img__featured"
          />
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input__featured"
            onChange={handleImgFeatured}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input__featured">
              <i className="material-icons">add_photo_alternate</i>
              Choose your Photo
            </label>
          </div>
        </Featured>
        <H3>Banner image</H3>
        <Span>
          This image will appear at the top of your collection page. Avoid
          including too much text in this banner image, as the dimensions change
          on different devices. 1400 x 350 recommended.
        </Span>
        <Banner>
          <ImgBanner
            src={profileBanner ? profileBanner : Image}
            alt=""
            id="img__Banner"
            className="img__Banner"
          />
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input__Banner"
            onChange={handleImgBanner}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input__Banner">
              <i className="material-icons">add_photo_alternate</i>
              Choose your Photo
            </label>
          </div>
        </Banner>
        <H3>
          Name<Strong>*</Strong>
        </H3>
        <Input placeholder="Example: Treasures of the Sea" />
        <H3>URL</H3>
        <Span>
          Customize your URL on OpenSea. Must only contain lowercase letters,
          numbers, and hyphens.
        </Span>
        <Input placeholder="https://opensea.io/collection/treasures-of-the-sea" />
        <H3>Description</H3>
        <Span>
          <Strong>Markdown</Strong>syntax is supported. 0 of 1000 characters
          used.
        </Span>
        <Textarea></Textarea>
        <H3>Blockchain</H3>
        <BscTestnet>
          <span>BSC Testnet</span>
        </BscTestnet>
        <Button>Create</Button>
      </Wrapper>
    </AppWrapper>
  );
};

export default Updata;
