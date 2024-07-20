import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/slices/userSlice";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const [formData, setFormData] = useState();

  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(); //useDispatch is a hook that allows us to dispatch actions
  const { error, loading } = useSelector((state) => state.user); //useSelector is a hook that allows us to select data from the redux store
  // console.log("Error in component: ", error);

  const navigate = useNavigate(); //useNavigate is a hook that allows us to navigate to different routes
  // different from Link component which is used to navigate to different routes by clicking on it

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
    console.log(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default browser behavior of submitting the form to a new page prevent reloading the page

    try {
      dispatch(signInStart()); //dispatching the signInStart action
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success == false) {
        dispatch(signInFailure(data.message)); //dispatching the signInFailure action
        // setLoading(false);
        // setError(data.message);

        return;
      }

      dispatch(signInSuccess(data)); //dispatching the signInSuccess action
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(data.message));
      return;
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-2xl text-center font-semibold my-5">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="john@email.com"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          type="submit">
          {loading ? "Loading..." : "Sign In"} {/*conditional rendering */}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>
          Dont have an account?
          <Link to="/sign-up">
            <span className="text-blue-500"> Sign Up </span>
          </Link>
        </p>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SignIn;
