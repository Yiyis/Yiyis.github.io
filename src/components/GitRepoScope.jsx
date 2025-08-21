import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class GitRepoScope extends React.Component {
  render() {
    return (
      <div className="cover-container d-flex full-screen-height">
        <Nav displayLogo={true} />
        <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
          <div className="img-container">
            <img
              className="project-main img-fluid cover"
              src="pics/projects/GitRepoScope/thumbnail.png"
              alt="Image of Shopify Market Place"
            />
            <div className="img-overlay"></div>
            <h1 className="project-title text-center text-white">
              SaaS Fullstack Development
            </h1>
            <ProjectInfo
              year={data[25].date}
              type={data[25].type}
              tools={data[25].tools}
              role={data[25].role}
            />
          </div>
          <div id="content">
            <div className="container-fluid p-custom">
              <div className="row">
                <div className="col-md-6">
                  <h1>SaaS Fullstack Development</h1>
                  <p className="pt-3">
                    I developed Git Repo Scope -- a comprehensive SaaS API
                    management platform that combines modern web development
                    with AI-powered insights. Built with Next.js 14 and React
                    18, this full-stack application features a complete
                    dashboard for API key lifecycle management, including CRUD
                    operations, usage tracking, and permission-based access
                    control. The platform integrates Google OAuth authentication
                    through NextAuth.js and leverages Supabase's PostgreSQL
                    database with Row Level Security for secure multi-tenancy. A
                    standout feature is the AI-powered GitHub repository
                    analysis system, built using LangChain and OpenAI's GPT-4
                    Nano, which provides intelligent summarization and metadata
                    extraction from repository documentation. The application
                    showcases advanced concepts including rate limiting with
                    atomic usage tracking, parallel API processing for optimal
                    performance, and a glassmorphism design system implemented
                    with Tailwind CSS and Shadcn/UI components. This project
                    demonstrates proficiency in modern fullstack architecture,
                    AI integration, and production-ready security
                    practices—delivering a polished developer tool that bridges
                    API management with intelligent code analysis.
                  </p>
                  <h3 className="pt-5 text-dark">Platfrom stack: </h3>
                  <ul>
                    <li>
                      Frontend: NextJS, Tailwind, React, Shadcn UI, Radix UI
                    </li>
                    <li>Backend: NextJS, Restful API, Supabase</li>
                    <li>AI: OpenAI, Langchain, Structured Output with Zod</li>
                    <li>Authentication: NextAuth, Google OAuth</li>
                    <li>Hosting: Vercel</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <img
                    src="pics/projects/GitRepoScope/mockup.png"
                    className="img_fluid w-100"
                    alt="Bradley Smoker shopify"
                  />
                </div>
              </div>
            </div>
            <div className="container-fluid bg-light-purple">
              <h3 className="pt-5 text-center">
                <a
                  href="https://gitreposcope.vercel.app/"
                  className="alert-link text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              </h3>
              <img
                src="pics/projects/GitRepoScope/showcase.png"
                className="img_fluid w-100"
                alt="Git Repo Scope Platform showcase"
              />
              <div className="col text-center pb-5 pt-5">
                <ScrollToTop />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
}

export default GitRepoScope;
