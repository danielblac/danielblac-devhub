"use client";
import { Button } from "@/components/atoms/Button";
import { useRouter } from "next/navigation";

export default function Welcome() {
  const router = useRouter();

  return (
    <div className="welcome">
      <div className="welcome-header">
        <h1>Your Technology Partner for a Digital Future.</h1>
      </div>

      <div className="welcome-text-btn">
        <p>
          We don’t just create websites and apps; we build experiences that
          drive results. Our team works closely with you to understand your
          needs, ensuring that your digital presence is both functional and
          user-centric.
        </p>
        <Button padding="0.75em 1em" onClick={() => router.push("/contact")}>
          <span>Get in Touch</span>
        </Button>
      </div>
    </div>
  );
}
