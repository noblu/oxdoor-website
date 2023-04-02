import img1 from "../assets/cửa-nhựa-ABS-hàn-quốc/h1.jpg";
import img2 from "../assets/cửa-nhựa-ABS-hàn-quốc/h2.jpg";
import img3 from "../assets/cửa-nhựa-ABS-hàn-quốc/h5.jpg";
import img4 from "../assets/cửa-nhựa-ABS-hàn-quốc/h6.jpg";

interface ItemProp {
  name: string;
  link: string;
}
export const Item = [
  {
    name: "Cửa nhựa OXDoor",
    link: "products/dewoo",
    // data: dataDW,
  },
  {
    name: "Cửa nhựa Composite SBSDOOR",
    link: "products/sbsdoor",
    // data: dataCP,
  },
  {
    name: "Cửa nhựa OXDoor Hàn Quốc ",
    link: "products/abs",
    // data: dataDW,
  },
  {
    name: "Cửa nhựa OXDoor Kosdoor ",
    link: "products/kosdoor",
    // data: dataCP,
  },
  {
    name: "Cửa nhựa Đài Loan ",
    link: "products/dai-loan",
    // data: dataDL,
  },
];

export const ItemCatallogue = [
  {
    name: "Cửa nhựa OXDoor",
    link: "/catalogue/Dewoo",
  },
  {
    name: "Cửa nhựa Composite SBSDOOR",
    link: "/catalogue/sbsdoor",
  },
  {
    name: "Cửa nhựa OXDoor Hàn Quốc ",
    link: "/catalogue/abs",
  },
  ,
  {
    name: "Cửa nhựa OXDoor Kosdoor ",
    link: "/catalogue/kosdoor",
  },
  ,
  {
    name: "Cửa nhựa Đài Loan ",
    link: "/catalogue/door",
  },
];
export const dataHQ = [
  {
    id: 1,
    picture: img1,
    title: "Cửa nhựa Composite SBS DOOR",
    text: "Sản phẩm bền đẹp, vững chắc cho ngôi nhà của Bạn.",
  },
  {
    id: 2,
    picture: img2,
    title: "Cửa nhựa ABS Hàn Quốc",
    text: "Sản phẩm bền đẹp, vững chắc cho ngôi nhà của Bạn.",
  },
  {
    id: 3,
    picture: img3,
    title: "Cửa nhựa G7 Kosdoor",
    text: "Sản phẩm bền đẹp, vững chắc cho ngôi nhà của Bạn.",
  },
  {
    id: 4,
    picture: img4,
    title: "Cửa nhựa Đài Loan",
    text: "Sản phẩm bền đẹp, vững chắc cho ngôi nhà của Bạn.",
  },
];
