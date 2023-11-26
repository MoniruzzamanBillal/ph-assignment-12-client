import React, { useState } from "react";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import axios from "axios";

const imageHostingApi = `https://api.imgbb.com/1/upload?key=00fc9e4302335a502d2035bb196a9314`;

const Test = () => {
  const { axiosPublicUrl } = UseAxiosPublic();
  const [imageInput, setImageInput] = useState();
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async () => {
    const imageFile = { image: imageInput };

    console.log(imageFile);

    // const imageResponse = await axiosPublicUrl.post(
    //   imageHostingApi,
    //   imageFile,
    //   {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   }
    // );

    fetch(imageHostingApi, { method: "POST ", body: imageFile })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });

    // console.log(imageResponse);
  };

  // for taking image input value
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageInput(file);
    }
  };

  return (
    <div>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Tests</h1>
      <div className="inputComponent mt-3  w-full mb-1  ">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          for="file_input"
        >
          Upload profile picture
        </label>
        <input
          onChange={(e) => handleImageChange(e)}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
        />
      </div>
      <button
        className=" mt-5 rounded hover:shadow font-semibold bg-gray-600 hover:bg-gray-700 dark:bg-gray-100 active:scale-[.99] py-2 w-full text-white dark:text-gray-900 "
        onClick={() => handleUpload()}
      >
        Register
      </button>{" "}
    </div>
  );
};

export default Test;
