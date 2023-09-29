"use client";
import { useState } from "react";
type Props = {};

const SignUp = (props: Props) => {
  const [tab, setTab] = useState<string>("first");

  const showVerificationForm = () => {};
  const [isLoading, setIsLoading] = useState(false);

  const handleCodeSubmit = async (code: any) => {
    if (isLoading) return;

    try {
      const payload = new FormData();
      payload.append("code", code);
      console.log(code);

      alert("Code is verified!");
    } catch (err: any) {
      alert(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form>
      {tab === "first" ? (
        <div>
          <input type="email" placeholder="Email" />
          <button
            onClick={() => {
              setTab("secon");
            }}
          >
            Sign in with Amplify
          </button>
        </div>
      ) : (
        <div>
          <div className="form-card-input-wrapper">
            <input
              className="form-card-input"
              placeholder="____"
              max="6"
              type="tel"
            />
            <div className="form-card-input-bg"></div>
          </div>
        </div>
      )}
    </form>
  );
};

export default SignUp;
