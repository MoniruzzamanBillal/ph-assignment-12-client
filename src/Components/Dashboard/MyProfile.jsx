import React, { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import Loading from "../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { updateProfile } from "firebase/auth";

//
const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const MyProfile = () => {
  const [axiosPublicUrl] = UseAxiosPublic();
  const { user, loading } = UseAuth();
  const [imageInput, setImageInput] = useState();
  const [photoUrl, setPhotoUrl] = useState(user?.photoURL);

  // console.log(user);

  // update function
  const handleUpdate = async () => {
    // console.log("update button click");

    const formData = new FormData();
    formData.append("image", imageInput);

    try {
      const response = await fetch(imageHostingApi, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      // console.log(data);
      const imageUrl = data?.data?.display_url;

      if (data?.success) {
        setPhotoUrl(imageUrl);
        updateProfile(user, {
          photoURL: imageUrl,
        });
      }

      toast.success("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error.message);

      // toast.error("Failed to upload image");
    }

    //
  };

  useEffect(() => {
    handleUpdate();
  }, [photoUrl]);

  // for taking image input value
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImageInput(file);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="MyProfileContainer ">
      <div className="myProfileWrapper  w-[95%] xsm:w-[90%] sm:w-[85%] md:w-[95%] lg:w-[85%] m-auto ">
        {/*  */}
        {/*  */}
        <div class=" py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-xl px-4 md:px-8">
            <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div className="profileLeft   ">
                <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                  <img
                    src={photoUrl}
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    class="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div class=" profileRight  pt-4  ">
                {/* user name  */}
                <div className="userName  text-base sm:text-lg lg:text-xl mb-2  ">
                  <p>
                    Username :{" "}
                    <span className="font-semibold"> {user?.displayName} </span>{" "}
                  </p>
                </div>
                {/* user name  */}

                {/* user email  */}
                <div className="userEmail text-base sm:text-lg lg:text-xl mb-2  ">
                  <p>
                    Email address :{" "}
                    <span className="font-semibold"> {user?.email} </span>{" "}
                  </p>
                </div>
                {/* user email  */}

                {/* user role  */}
                <div className="userRole  text-base sm:text-lg lg:text-xl mb-2  ">
                  <p>
                    Role : <span className="font-semibold">User</span>{" "}
                  </p>
                </div>
                {/* user role  */}

                {/* update image  */}
                <div className="updateImage  ">
                  {/*  */}
                  <div className="inputComponent mt-3  w-full mb-1  ">
                    <label
                      className="block mb-2 text-base sm:text-lg font-medium text-gray-900 dark:text-white"
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
                  {/*  */}
                </div>
                {/* update image  */}

                {/* update button  */}
                <div className="updateBtn">
                  <button
                    className=" mt-5 rounded hover:shadow font-semibold bg-gray-600 hover:bg-gray-700 dark:bg-gray-100 active:scale-[.99] py-2 w-full text-white dark:text-gray-900 "
                    onClick={() => handleUpdate()}
                  >
                    Update
                  </button>
                </div>
                {/* update button  */}

                {/*  */}
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyProfile;
