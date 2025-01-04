import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const ForgotPassword = () => {
  const location = useLocation()

  const emailFromState = location.state?.email || "";

  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (!email) {
      toast.error("Email is required!");
      return;
    }

    toast.success("Password reset link sent to your email.");
    window.location.href = "https://mail.google.com";
  };

    return (
        <div>
             <div className="w-7/12 mx-auto mt-10">
      <Helmet>
        <title>Career Compass | Forgot Password</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleReset} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={emailFromState} // MARK: Prefill email from state
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#DB494F] text-white text-lg font-bold">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
        </div>
    );
};

export default ForgotPassword;