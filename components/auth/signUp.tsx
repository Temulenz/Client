"use client";

import { useState } from "react";
import { SignUpForm } from "./signUpForm";
import { SignUpPassword } from "./signUpFormPassword";

export default function SignUp() {
  const [step, setStep] = useState(0);
  const StepComponents = [SignUpForm, SignUpPassword][step];

  const [email, setEmail] = useState("");

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <main className="flex justify-center ">
      <div className="py-[246px]">
        <StepComponents
          email={email}
          setEmail={setEmail}
          handleNextStep={handleNextStep}
        />
      </div>

      <img className="p-[20px]" src="delivery.png" />
    </main>
  );
}
