"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Image from "next/image";
import Trusted from "@/components/molecules/Trusted";

export default function Faq() {
  return (
    <div className="faq">
      <Image
        src="/images/faq-bubble.png"
        alt="logo"
        width={162}
        height={192}
        className="about-bubble-one"
      />
      <Image
        src="/images/projects-bubble.png"
        alt="logo"
        width={83}
        height={76}
        className="about-bubble-two"
      />

      <div className="faq-content">
        <div className="faq-side">
          <p className="faq-content-header">FAQ</p>
          <h2>Questions? Answers.</h2>
          <p className="faq-msg">
            We have a lot to offer, here is a sneak peak
          </p>
        </div>
        <div className="faq-main">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{ backgroundColor: "#F2F2F7" }}
            >
              <Typography sx={{ fontSize: "1.2rem" }}>
                What services does DanielBlac DevHub offer?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography gutterBottom>
                  DanielBlac DevHub provides comprehensive digital solutions
                  including custom website development, mobile apps, UI/UX
                  design, and tech education programs. We serve startups,
                  businesses, individuals and companies looking to enhance their
                  digital presence.
                </Typography>
                <Typography>
                  Our web development covers everything from simple landing
                  pages to complex web applications. For mobile, we build iOS
                  and Android apps using modern frameworks. We also offer
                  hands-on courses in programming and digital skills.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ marginTop: "0.875em" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{ backgroundColor: "#F2F2F7" }}
            >
              <Typography sx={{ fontSize: "1.2rem" }}>
                How do I join your Tech Education program?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography gutterBottom>
                  Our Tech Education program offers practical training in web
                  development, mobile app creation, backend systems, and UI/UX
                  design principles.
                </Typography>
                <Typography gutterBottom>
                  To enroll: Visit our Tech Education page, complete the
                  application form, and our team will contact you within 48
                  hours. No prior experience is needed for beginner courses.
                </Typography>
                <Typography>
                  We offer flexible learning paths with project-based curriculum
                  suitable for all skill levels.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ marginTop: "0.875em" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{ backgroundColor: "#F2F2F7" }}
            >
              <Typography sx={{ fontSize: "1.2rem" }}>
                What&apos;s the cost for website or app development?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography gutterBottom>
                  Website development starts at $500 for basic sites (5-8 pages)
                  and ranges up to $20,000+ for complex web applications.
                  E-commerce solutions typically cost between $800-$10,000.
                </Typography>
                <Typography>
                  Mobile apps range from $2,000 for single-platform apps to
                  $40,000+ for complex cross-platform solutions. We provide free
                  consultations and transparent quotes tailored to your specific
                  needs.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ marginTop: "0.875em" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{ backgroundColor: "#F2F2F7" }}
            >
              <Typography sx={{ fontSize: "1.2rem" }}>
                Can I participate in the development process?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography gutterBottom>
                  We encourage active client participation throughout the entire
                  development lifecycle. Our process includes weekly progress
                  updates with screenshots and demos, scheduled feedback
                  sessions, and access to a staging environment where you can
                  test features in real-time.
                </Typography>
                <Typography>
                  We&apos;re flexible with collaboration tools and can use your
                  preferred platform (Google Meet, Slack, Discord, etc.) to
                  ensure seamless communication.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ marginTop: "0.875em" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{ backgroundColor: "#F2F2F7" }}
            >
              <Typography sx={{ fontSize: "1.2rem" }}>
                How do you ensure quality results?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography gutterBottom>
                  Our quality assurance process begins with a detailed discovery
                  phase where we document all requirements. We then create
                  wireframes for your approval before development begins.
                </Typography>
                <Typography>
                  During development, we conduct regular testing and provide
                  opportunities for your feedback at every milestone. The final
                  review includes a comprehensive walkthrough before launch,
                  with unlimited revisions available during the development
                  phase.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ marginTop: "0.875em" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{ backgroundColor: "#F2F2F7" }}
            >
              <Typography sx={{ fontSize: "1.2rem" }}>
                Can I request custom features?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography gutterBottom>
                  We specialize in implementing custom features including unique
                  UI/UX interactions, specialized database structures, API
                  integrations, and emerging technologies like AI/ML or
                  blockchain components.
                </Typography>
                <Typography>
                  During our discovery phase, we assess technical feasibility
                  and provide clear timelines and cost estimates for any special
                  requests. We welcome challenging technical requirements.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ marginTop: "0.875em" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{ backgroundColor: "#F2F2F7" }}
            >
              <Typography sx={{ fontSize: "1.2rem" }}>
                What industries do DanielBlac DevHub specialize in?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography gutterBottom>
                  While we work across all sectors, we have particular expertise
                  in e-commerce, FinTech, healthcare, education technology, and
                  SaaS platforms.
                </Typography>
                <Typography>
                  Our team has experience building online stores, marketplaces,
                  banking apps, HIPAA-compliant portals, learning management
                  systems, and subscription-based web applications.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ marginTop: "0.875em" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{ backgroundColor: "#F2F2F7" }}
            >
              <Typography sx={{ fontSize: "1.2rem" }}>
                How long does website development take?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography gutterBottom>
                  Basic websites typically take 3-6 weeks, while small business
                  websites require 4-8 weeks. E-commerce sites usually take 8-16
                  weeks, and custom web applications need 12-24 weeks.
                </Typography>
                <Typography>
                  Timelines depend on content readiness, approval processes,
                  third-party integrations, prompt funds deployment, and the
                  number of revisions requested. We provide detailed project
                  schedules during planning.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ marginTop: "0.875em" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{ backgroundColor: "#F2F2F7" }}
            >
              <Typography sx={{ fontSize: "1.2rem" }}>
                Do you provide ongoing support?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography gutterBottom>
                  We offer tiered support plans starting at $50/month for basic
                  maintenance including security updates and bug fixes. Standard
                  support ($100-300/month) adds content updates, while premium
                  care ($500+/month) includes 24/7 monitoring and monthly
                  optimization.
                </Typography>
                <Typography>
                  All plans include regular backups, performance monitoring,
                  security patches, and uptime reporting. We&apos;ll recommend
                  the best option based on your project&apos;s needs.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ marginTop: "0.875em" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{ backgroundColor: "#F2F2F7" }}
            >
              <Typography sx={{ fontSize: "1.2rem" }}>
                What technology stack do DanielBlac DevHub use?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography gutterBottom>
                  Our frontend solutions use Next.js, React.js, with TypeScript.
                  For backend, we work with Nest.js Node.js. Mobile apps are
                  built with React Native or Flutter.
                </Typography>
                <Typography>
                  We select technologies based on project requirements,
                  scalability needs, and your team&apos;s technical comfort,
                  using databases like PostgreSQL, MySQL,NoSQL, MongoDB, or
                  Firebase as appropriate.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ marginTop: "0.875em" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{ backgroundColor: "#F2F2F7" }}
            >
              <Typography sx={{ fontSize: "1.2rem" }}>
                Do you work with international clients?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography gutterBottom>
                  Yes, we regularly collaborate with clients worldwide. Our
                  distributed team accommodates different time zones (US,
                  Europe, Asia) and conducts meetings in English.
                </Typography>
                <Typography>
                  We accept payments in multiple currencies and comply with
                  international standards like GDPR. We&apos;ve successfully
                  delivered projects across North America, Europe, and Africa.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <Trusted />
    </div>
  );
}
