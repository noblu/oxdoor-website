import React from "react";
import Exceptem from "../../components/Exceptem/Exceptem";
import Loading from "../../components/Loading/Loading";
import { useGetSbssQuery } from "../../redux/feature/sbsApiSlice";

const SBSDoor = () => {
  const { data, isLoading, isSuccess } = useGetSbssQuery("getSbss");
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
        <h2 className="text-4xl mb-5">Sản Phẩm Cửa Nhựa SBS</h2>
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

export default SBSDoor;
