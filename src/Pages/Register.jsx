import { useState } from "react";
import UseInput from "../Hooks/UseInput";
import InputField from "../Components/InputField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { updateProfile } from "firebase/auth";

import UseAuth from "../Hooks/UseAuth";
import {
  inputFieldError,
  passwordValidationError,
  registerSuccessfully,
  termError,
} from "../ToastFunc/ToastFunction";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING;

const imageHostingApi2 = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=00fc9e4302335a502d2035bb196a9314`;

const Register = () => {
  const [axiosPublicUrl] = UseAxiosPublic();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false); // for checkbox state
  const [imageInput, setImageInput] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const { registerFunction, user, logoutFunction } = UseAuth();

  const nameInput = UseInput();
  const emailInput = UseInput();
  const passwordlInput = UseInput();

  // Function to validate the password
  const isPasswordValid = (password) => {
    const minLength = 6;
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(
      password
    );

    return (
      password.length >= minLength && hasCapitalLetter && hasSpecialCharacter
    );
  };

  // function for handling check box state
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleRegister = async () => {
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordlInput.value;

    const imageFile = { image: imageInput };
    console.log(imageFile);

    // check  null input value
    if (!name.trim() || !email.trim() || !password.trim()) {
      return inputFieldError();
    } else if (!isChecked) {
      return termError();
    }
    //  else if (!isPasswordValid(password)) {
    //   return passwordValidationError();
    // }

    // !
    // !
    // !
    // !
    // !
    // !
    // !
    // !

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
      console.log(data);

      if (data?.success) {
        const photoUrl = data?.data?.display_url;
        setImageUrl(photoUrl);
        console.log(photoUrl);

        const registerResponse = await registerFunction(email, password);

        if (registerResponse?.user) {
          updateProfile(registerResponse?.user, {
            displayName: name,
            photoURL: photoUrl,
          })
            .then((response) => {
              logoutFunction();
              registerSuccessfully();
              setTimeout(() => {
                navigate("/login");
              }, 1200);
            })
            .catch((error) => {
              const errormsg = error.message;
              console.log(errormsg);
              toast.warn(`${errormsg}`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            });
        }
      }
      toast.success("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error.message);

      toast.error("Failed to upload image");
    }

    // !
    // !
    // !
    // !
    // !
    // !
    // !
    // !
  };

  // for taking image input value
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageInput(file);
    }
  };

  // framer motion varients
  const parentVariants = {
    hidden: {
      x: "-1000",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  console.log("--------------------------");
  console.log(user);
  console.log("--------------------------");
  return (
    <div className="   ">
      {/* <!-- component --> */}

      <div
        className=" py-4 relative mainContiner flex  w-full items-center justify-center bg-gray-900 bg-no-repeat bg-cover bg-center  "
        style={{
          backgroundImage: `url('https://i.ibb.co/2tvg04G/pexels-rdne-stock-project-736308.jpg')`,
        }}
      >
        <div className="absolute w-full h-full opacity-20 top-0 left-0 bg-gray-800  "></div>

        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          className="  formContainer w-[82%] xsm:w-[72%] sm:w-[64%] md:w-[52%] xmd:w-[49%] lg:w-[44%] rounded-md  bg-gray-200 dark:bg-gray-500 bg-opacity-60  shadow-lg backdrop-blur dark:backdrop-blur dark:bg-opacity-70 px-4 py-5 sm:px-5 sm:py-7 md:px-6 md:py-8 "
        >
          {/* form  */}

          {/* register body  body   */}

          <motion.h1
            initial={{ x: "-100", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className=" dancingFont w-full text-center block text-2xl sm:text-3xl font-semibold pb-2 sm:pb-3 md:pb-4 lg:pb-5 mb-2 sm:mb-3 md:mb-4 border-b border-gray-400 text-gray-900 dark:text-gray-100  "
          >
            Register your account
          </motion.h1>

          {/* input component  */}
          {/* heading,inpType,placeHolder */}

          <motion.div
            initial={{ x: "-100", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="nameInput"
          >
            <InputField
              heading={"Your Name"}
              inpType={"text"}
              placeHolder="Enter your name"
              inputId="name_input"
              inputHook={nameInput}
            />
          </motion.div>

          <motion.div
            initial={{ x: "-100", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="nameInput"
          >
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
          </motion.div>

          {/* category  */}
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              User Category
            </label>
            <select
              id="category"
              onChange={(e) => setCategory(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
            >
              <option value="">Select category</option>
              <option value="Breakfast">DeliveryMen</option>
              <option value="Appetizers">User</option>
            </select>
          </div>

          {/* category  */}

          <motion.div
            initial={{ x: "-100", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="nameInput"
          >
            <InputField
              heading={"Email"}
              inpType={"email"}
              placeHolder="Enter your email"
              inputId="email_input"
              inputHook={emailInput}
            />
          </motion.div>

          <motion.div
            initial={{ x: "-100", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="nameInput"
          >
            <InputField
              heading={"Password"}
              inpType={"password"}
              placeHolder="Enter your email"
              inputId="password_input"
              inputHook={passwordlInput}
            />
          </motion.div>

          <motion.div
            initial={{ x: "-100", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-start mt-3  w-full "
          >
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                onChange={handleCheckboxChange}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-800 dark:text-gray-50 "
            >
              I agree with the{" "}
              <Link className="text-blue-600 hover:underline dark:text-blue-500">
                terms and conditions
              </Link>
              .
            </label>
          </motion.div>

          {/* input component  */}

          <motion.div
            initial={{ x: "-100", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9 }}
          >
            {" "}
            <button
              className=" mt-5 rounded hover:shadow font-semibold bg-gray-600 hover:bg-gray-700 dark:bg-gray-100 active:scale-[.99] py-2 w-full text-white dark:text-gray-900 "
              onClick={() => handleRegister()}
            >
              Register
            </button>{" "}
          </motion.div>

          <motion.p
            initial={{ x: "-100", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className=" text-gray-900 dark:text-gray-50  mt-3 "
          >
            Already have An Account ?
            <span className="text-red-600 font-semibold pl-1 ">
              <Link to={`/login`}>Log in</Link>
            </span>{" "}
          </motion.p>

          {/* register  body   */}

          {/* form  */}
        </motion.div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
