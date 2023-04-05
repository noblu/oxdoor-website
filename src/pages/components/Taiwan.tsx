import React from "react";
import Loading from "../../components/Loading/Loading";
import Exceptem from "../../components/Exceptem/Exceptem";
import { useGetTaiwansQuery } from "../../redux/feature/taiwanApiSlice";

const Taiwan = () => {
  const { data, isLoading, isSuccess } = useGetTaiwansQuery("getTaiwans");
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
        <h2 className="text-4xl mb-5">Sản Phẩm Cửa Nhựa DaiLoan</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {content}
        </div>
      </div>
    </>
  );
};

export default Taiwan;
