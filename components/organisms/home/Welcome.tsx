import { Button } from "@/components/atoms/Button";

export default function Welcome() {
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
        <Button padding="0.75em 1em">
          <span>Get in Touch</span>
        </Button>
      </div>
    </div>
  );
}
