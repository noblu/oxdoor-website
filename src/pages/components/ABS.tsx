import React from "react";
import { useGetPostsQuery } from "../../redux/feature/absApiSlice";
import Loading from "../../components/Loading/Loading";
import ItemProduct from "../ItemProduct";
import PageProducts from "../pageProducts";
import Exceptem from "../../components/Exceptem/Exceptem";

const ABS = () => {
  const { data, isLoading, isSuccess } = useGetPostsQuery("getPosts");

  console.log(data, "data");
  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (isSuccess) {
    content = data?.posts.map((item: any, index: any) => (
      <Exceptem item={item} key={index} />
    ));
  }
  return (
    <>
      <div className="flex items-center justify-center flex-col mt-7">
        <h2 className="text-4xl mb-5">Sản Phẩm Cửa Nhựa ABS</h2>
        <span className="text-xl">
          Sản phẩm bền đẹp, vững chắc cho ngôi nhà của Bạn.
        </span>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {content}
        </div>
      </div>
    </>
  );
};

export default ABS;
