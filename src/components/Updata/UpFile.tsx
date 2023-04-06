import React, { useState } from "react";
import Image from "../../assets/logo-img.jpg";
import { Item } from "../../types/Item";
import { client, subdomain } from "../../utils/ipfs";
import {
  useAddNewPostMutation
} from "../../redux/feature/absApiSlice";
import { OpenNotification } from "../OpenNotification/OpenNotification";
import { useAddNewDewooMutation } from "../../redux/feature/dewooApiSlice";
import { useAddNewKosMutation } from "../../redux/feature/kosApiSlice";
import { useAddNewSbsMutation } from "../../redux/feature/sbsApiSlice";
import { useAddNewTaiwanMutation } from "../../redux/feature/taiwanApiSlice";
import {
  MutationDefinition,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/dist/query";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";

const UpFile = () => {

  const [text, setText] = useState("Example Name: OX");
  const [image, setImage] = useState("");
  const [product, setProduct] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [addAbs, { isLoading }] = useAddNewPostMutation();

  const [addDewoo] = useAddNewDewooMutation();

  const [addKos] = useAddNewKosMutation();

  const [addSbs] = useAddNewSbsMutation();

  const [addTaiwan] = useAddNewTaiwanMutation();

  const handleImgFeatured = async (e: any) => {
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog: any) => console.log(`received: ${prog}`),
      });
      const url = `${subdomain}/ipfs/${added.path}`;
      client.pin.add(added.path).then((res: any) => {
        // console.log(url, "url");
        setImage(url);
      });
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  let option;
  option = Item.map((item, index) => <option key={index}>{item.name}</option>);
  const onAuthorChanged = (e: any) => setProduct(e.target.value);

  let addDoor:
    | MutationTrigger<
        MutationDefinition<
          any,
          BaseQueryFn<
            string | FetchArgs,
            unknown,
            FetchBaseQueryError,
            {},
            FetchBaseQueryMeta
          >,
          "Post",
          any,
          "api"
        >
      >
    | ((arg0: { image: string; title: string; description: string }) => {
        (): any;
        new (): any;
        unwrap: { (): any; new (): any };
      });

  if (product === "Cửa nhựa OXDoor") {
    addDoor = addAbs;
    // setText("Example Name: ODW #1");
  } else if (product === "Cửa nhựa Composite SBSDOOR") {
    addDoor = addDewoo;
    // setText("OSBS #1");
  } else if (product === "Cửa nhựa OXDoor Hàn Quốc") {
    addDoor = addKos;
    //  setText("OHQ #1");
  } else if (product === "Cửa nhựa OXDoor Kosdoor") {
    addDoor = addSbs;
    // setText("OKOS #1");
  } else {
    addDoor = addTaiwan;
    // setText("OTW #1");
  }

  const handleName = (event: any) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event: any) => {
    setDescription(event.target.value);
  };

  const handleUpFile = async (e: any) => {
    e.preventDefault();
    if (!title || !description || !image) return;

    try {
     await addDoor({
        image,
        title,
        description,
      }).unwrap();
      setImage("");
      setDescription("");
      setTitle("");
      const text = "UpFile Success";
      OpenNotification("top", text);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
    // navigation("/myCollection");
  };

  return (
    <div className="relative flex items-center justify-center flex-col h-full w-full">
      <h1 className="text-3xl m-4">UpFile</h1>

      <div className="m-4">
        <select
          className="outline-none rounded border-solid border-2 border-pink p-1"
          name=""
          id=""
          value={product}
          onChange={onAuthorChanged}
        >
          <option value="">Chọn Loại Sản Phẩm Upfile</option>
          {option}
        </select>
      </div>
      <div>
        <img
          className="rounded border-solid border-2 border-pink w-[320px] h-[420px]"
          src={image ? image : Image}
          alt=""
          id="img"
        />
        <input
          className="hidden"
          type="file"
          accept="image/*"
          name="image-upload"
          id="input"
          onChange={handleImgFeatured}
        />
        <div className="absolute top-[132px] opacity-0">
          <label
            className="w-[320px] flex items-center justify-center text-red"
            htmlFor="input"
          >
            <i className="h-[420px] w-[300px] ">add_photo_alternate</i>
            Choose your Photo
          </label>
        </div>
      </div>
      <input
        value={title}
        type="text"
        className="outline-none rounded border-solid border-2 border-pink p-1 m-4 w-[200px]"
        placeholder={`${text}`}
        onChange={handleName}
      />

      <div className="flex justify-center ">
        <div className="relative mb-3 xl:w-96" data-te-input-wrapper-init>
          <textarea
            className="peer block min-h-[auto] w-[400px] rounded border-solid border-2 border-pink bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlTextarea1"
            rows={6}
            placeholder="Your message"
            value={description}
            onChange={handleDescription}
          ></textarea>
          <label
            htmlFor="exampleFormControlTextarea1"
            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-pink transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-pink dark:peer-focus:text-pink"
          >
            Example textarea
          </label>
        </div>
      </div>
      <button
        className="bg-pink py-[10px] px-[30px] m-2 rounded text-white text-2xl"
        onClick={handleUpFile}
      >
        UpFile
      </button>
    </div>
  );
};

export default UpFile;
