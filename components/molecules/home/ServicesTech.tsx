import { Button } from "@/components/atoms/Button";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import Image from "next/image";
import { ReactNode, useRef } from "react";
import { FaDev } from "react-icons/fa";
import { LuPenTool } from "react-icons/lu";

interface ParallaxProps {
  children: ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <div className="scroller-item">{children}</div>
        <div className="scroller-item">{children}</div>
        <div className="scroller-item">{children}</div>
        <div className="scroller-item">{children}</div>
      </motion.div>
    </div>
  );
}

export default function ServicesTech() {
  return (
    <div className="services-tech">
      <div className="dev-stack">
        <div className="dev-stack-header">
          <div className="dev-stack-logo">
            <FaDev size={18} />
          </div>
          <p>Dev Stack</p>
        </div>
        <div className="dev-stack-name-logo">
          <ParallaxText baseVelocity={-2}>
            <div className="stack-item">
              <div className="stack-logo">
                <Image
                  width={23}
                  height={23}
                  alt="js"
                  src="/images/js-logo.png"
                />
              </div>
              <p>JavaScript</p>
            </div>
            <div className="stack-item">
              <div className="stack-logo">
                <Image
                  width={23}
                  height={23}
                  alt="js"
                  src="/images/nextjs-icon.png"
                />
              </div>
              <p>Next Js</p>
            </div>
            <div className="stack-item">
              <div className="stack-logo">
                <Image
                  width={23}
                  height={23}
                  alt="js"
                  src="/images/react-icon.png"
                />
              </div>
              <p>React</p>
            </div>
            <div className="stack-item">
              <div className="stack-logo">
                <Image
                  width={23}
                  height={23}
                  alt="js"
                  src="/images/nodejs-icon.png"
                />
              </div>
              <p>Node Js</p>
            </div>
          </ParallaxText>
          <ParallaxText baseVelocity={2}>
            <div className="stack-item">
              <div className="stack-logo">
                <Image
                  width={23}
                  height={23}
                  alt="js"
                  src="/images/typescript-icon.png"
                />
              </div>
              <p>TypeScript</p>
            </div>
            <div className="stack-item">
              <div className="stack-logo">
                <Image
                  width={23}
                  height={23}
                  alt="js"
                  src="/images/nestjs-icon.png"
                />
              </div>
              <p>Nest Js</p>
            </div>
            <div className="stack-item">
              <div className="stack-logo">
                <Image
                  width={23}
                  height={23}
                  alt="js"
                  src="/images/sass-icon.png"
                />
              </div>
              <p>SCSS</p>
            </div>
            <div className="stack-item">
              <div className="stack-logo">
                <Image
                  width={23}
                  height={23}
                  alt="js"
                  src="/images/github-icon.png"
                />
              </div>
              <p>Github</p>
            </div>
          </ParallaxText>
          <ParallaxText baseVelocity={-2}>
            <div className="stack-item">
              <div className="stack-logo">
                <Image
                  width={23}
                  height={23}
                  alt="js"
                  src="/images/react-icon.png"
                />
              </div>
              <p>React Native</p>
            </div>
            <div className="stack-item">
              <div className="stack-logo">
                <Image
                  width={23}
                  height={23}
                  alt="js"
                  src="/images/expo-icon.png"
                />
              </div>
              <p>Expo</p>
            </div>
            <div className="stack-item">
              <div className="stack-logo">
                <Image
                  width={23}
                  height={23}
                  alt="js"
                  src="/images/tailwind-icon.png"
                />
              </div>
              <p>Tailwind CSS</p>
            </div>
            <div className="stack-item">
              <div className="stack-logo">
                <Image
                  width={23}
                  height={23}
                  alt="js"
                  src="/images/git-icon.png"
                />
              </div>
              <p>Git</p>
            </div>
          </ParallaxText>

          <div className="dev-stack-link">
            <p>
              <span>+16</span> others
            </p>
          </div>
        </div>
      </div>
      <div className="design-dev-stack">
        <div className="design-stack">
          <div className="design-stack-header">
            <div className="design-stack-logo">
              <LuPenTool />
            </div>
            <p>Design Stack</p>
          </div>
          <div className="design-stack-tools">
            <div className="design-tool">
              <div className="design-tool-logo">
                <Image
                  width={30}
                  height={30}
                  alt="js"
                  src="/images/figma.png"
                />
              </div>
              <p>Figma</p>
            </div>
            <div className="design-tool">
              <div className="design-tool-logo">
                <Image
                  width={30}
                  height={30}
                  alt="js"
                  src="/images/sketch.png"
                />
              </div>
              <p>Sketch</p>
            </div>
            <div className="design-tool">
              <div className="design-tool-logo">
                <Image
                  width={30}
                  height={30}
                  alt="js"
                  src="/images/jitter.png"
                />
              </div>
              <p>Jitter</p>
            </div>
            <div className="design-tool">
              <div className="design-tool-logo">
                <Image
                  width={30}
                  height={30}
                  alt="js"
                  src="/images/after-effect.png"
                />
              </div>
              <p>After Effects</p>
            </div>
            <div className="design-tool">
              <div className="design-tool-logo">
                <Image
                  width={30}
                  height={30}
                  alt="js"
                  src="/images/adobe-photoshop.png"
                />
              </div>
              <p>Adobe Photoshop</p>
            </div>
            <div className="design-tool">
              <div className="design-tool-logo">
                <Image
                  width={30}
                  height={30}
                  alt="js"
                  src="/images/adobe-illustrator.png"
                />
              </div>
              <p>Adobe Illustrator</p>
            </div>

            <div className="design-tool">
              <div className="design-tool-logo">
                <Image
                  width={30}
                  height={30}
                  alt="js"
                  src="/images/spline.png"
                />
              </div>
              <p>Spline</p>
            </div>
          </div>
        </div>
        <div className="dev-speed">
          <div className="speed-header">
            <p>Super-fast development time</p>
            <Button>Get in Touch</Button>
          </div>
          <p className="speed-message">
            We help you create stunning websites in record time—optimized for
            performance, functionality, and seamless user experience
          </p>
        </div>
      </div>
    </div>
  );
}
