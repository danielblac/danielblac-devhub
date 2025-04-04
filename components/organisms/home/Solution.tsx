import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Solution() {
  return (
    <div className="solution">
      <div className="solution-body">
        <div className="solution-details">
          <h3>Custom-built solutions for startups and businesses</h3>
          <p>Ready to stand out? Let’s create magic!</p>
          <Button padding="0.7em 1.5em" backgroundColor="#FFF" color="#ff7c2c">
            <span>Let&apos;s Talk</span>
            <MdOutlineKeyboardArrowRight size={24} />
          </Button>
        </div>
        <div className="solution-image">
          <Image
            src="/images/solution.png"
            alt="solution"
            width={378}
            height={356}
          />
        </div>
      </div>
    </div>
  );
}
