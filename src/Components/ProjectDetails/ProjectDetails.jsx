import { useParams } from 'react-router-dom';
import {
  MLThumb,
  SWEBlogAppThumb,
  BlogSlides,
  RocketThumb,
  ProjectNeptuneImage,
  JobApplicationLoggerImage,
  IncidentResponseImage,
  NovaThumb,
  PremLeagueThumb,
} from '../../assets';
import styles from './projectdetails.module.css';

const projectsData = {
  "breast-cancer-ml-model": {
    title: "Breast Cancer Tumor Prediction Model",
    description: `
      I built this machine learning application to predict whether a breast cancer tumor is malignant or benign using structured diagnostic features.

      I trained the model on the Breast Cancer Wisconsin Diagnostics dataset from Kaggle and evaluated multiple approaches before selecting logistic regression.

      I implemented a Flask backend and a React frontend, with experimentation and feature analysis completed in Python/Jupyter notebooks.

      I tuned hyperparameters with RandomizedSearchCV and persisted both the model and scaler with Joblib for efficient inference. I also exposed prediction endpoints through a REST API and ensured the UI remained responsive across mobile, tablet, and desktop.
    
      `,
    repoLink: "https://github.com/mbengue1/BreastCancerML",
    projectLink: 'https://mlbreastcancermodel.netlify.app',
    image: MLThumb,
  },
  "swe-blog-app": {
    title: "Full Stack SWE Blog App",
    description: `
      I built this full-stack blogging platform with Node.js, Express, React, and MongoDB using a full CRUD architecture. I also designed and implemented multiple REST APIs from scratch.

      Key Features:
      - User authentication: I implemented sign-up, account creation, and secure login flows.
      - Blog creation and management: I built create/edit/delete flows for authenticated users, including image thumbnail uploads.
      - Responsive design: I delivered a responsive UI with dark mode support across mobile, tablet, and desktop.
      - Category filtering: I added category-based filtering and category selection during blog creation.
      - Profile management: I implemented profile update capabilities for authenticated users.
      - Blog viewing controls: I enforced permission boundaries so public users can view content but cannot edit or delete other users' blogs.

      I integrated frontend and backend layers to deliver a reliable user experience, with backend logic and database interactions handled in Express/MongoDB and the client experience implemented in React.

      I used MongoDB for flexible data modeling and Cloudinary for scalable image upload and media handling.
    `,
    repoLink: "https://github.com/mbengue1/SWEBlogApplication",
    projectLink: BlogSlides,
    image: SWEBlogAppThumb,
  },
  "2d-rocket-game": {
    title: "2D Java Rocket Traveler Game",
    description: `I developed this 2D Rocket Traveler game in Java to create an engaging and immersive gameplay experience. I designed multiple rocket ship options with distinct visual styles and enabled full-direction movement for free-form space navigation.

I built the core loop around shooting and destroying asteroids as dynamic obstacles. I also implemented random spawning behavior so difficulty scales as more asteroids are cleared, keeping gameplay fast-paced and challenging.

I focused on smooth controls so players can react quickly, avoid collisions, and maintain control in intense moments. I paired that with vibrant space visuals, detailed rockets, and animated asteroid movement to improve the overall feel.

I included multiple difficulty levels to support both casual players and players who want a steeper challenge curve.

I built this project to showcase my skills in Java programming, gameplay systems, and interactive UI design.
    `,
    repoLink: "https://github.com/mbengue1/Java-Rocket-Game",
    projectLink: "https://github.com/mbengue1/Java-Rocket-Game",
    image: RocketThumb,
  },
  "neptune-sportsbook": {
    title: "Neptune Sportsbook - AI-Enhanced Sports Betting Platform",
    description: `
      I built Neptune Sportsbook as a modern, AI-enhanced sports betting application with React Native and real-time odds integration. My goal was to combine live market data with intelligent insights in a mobile-first experience.

      The app currently runs as an MVP with live odds and a full mock betting flow. I integrated The Odds API for Soccer, Football, Basketball, Hockey, and Tennis across major leagues and tournaments, and I built the bet selection/management flow end to end.

      I used React Native + TypeScript with Expo for cross-platform development and faster deployment cycles. On the backend, I built Node.js/Express APIs, used MongoDB for data/session persistence, and integrated Firebase for authentication and real-time capabilities. I also structured state with React Context and custom hooks for maintainable performance.

      My next phase focuses on AI features including conversational sports insights, recommendation/risk models, and deeper analytics. I also plan to add real-time score updates, push notifications, and payment processing.

      I built this project to demonstrate my ability to integrate modern mobile engineering, live-data APIs, and AI/ML direction into a cohesive product.
    `,
    repoLink: "https://github.com/mbengue1/project-neptune",
    projectLink: "https://github.com/mbengue1/project-neptune",
    image: ProjectNeptuneImage,
  },
  "ai-incident-response": {
    title: "AI-Powered Incident Response System",
    description: `
      I built this AI-powered incident response system as a real-time platform that triages alerts, notifies engineers, and tracks incidents across a microservices architecture.

      I implemented real-time ingestion from monitoring sources (Datadog, Prometheus, CloudWatch, and similar systems) through APIs/webhooks. I then added AI-assisted triage that summarizes alerts, assigns severity, and suggests remediation steps to reduce manual response overhead.

      I built live notification workflows with WebSockets and escalation support across channels like Slack, email, SMS, and PagerDuty-style paths. I also developed a React/TypeScript dashboard with timeline tracking and AI summaries so teams can see incident context in real time.

      I implemented role-based access control so ownership and visibility align with team responsibilities. I also added automated postmortem generation with AI-summarized root-cause analysis exportable to PDF/Markdown.

      I designed the stack for reliability and scale: Express + TypeScript backend services, OpenAI integration with fallbacks, MongoDB for incident/user data, Redis for caching/sessions, Docker + Kubernetes for orchestration, and GitHub Actions + AWS (EKS/RDS/S3/CloudWatch) for CI/CD and deployment.

      I currently have core triage, live notifications, and timeline-driven dashboard tracking implemented. My roadmap includes deeper Slack/PagerDuty/Jira integrations and multi-region failover for enterprise-grade resilience.
    `,
    repoLink: "https://github.com/mbengue1/ai-incident-response-system",
    projectLink: "https://github.com/mbengue1/ai-incident-response-system",
    image: IncidentResponseImage,
  },
  "job-application-autologger": {
    title: "Job Application Auto-Logger (Google Apps Script)",
    description: `
      I built the Job Application Auto-Logger in Google Apps Script to remove manual job-tracking work by parsing Gmail confirmations and writing structured entries into Google Sheets.

      I implemented intelligent Gmail query patterns that capture multiple ATS formats (for example: "application received", "job application submitted", "your application was received"). After detection, I parse each thread to extract role, company, term, location, and date-applied metadata.

      I designed a de-duplication strategy that uses Gmail Thread ID as a primary key with role-company fallback logic. Instead of blindly appending rows, I update existing entries when new status information arrives.

      I structured the tracker around 14 core fields including pipeline stage, company/role context, recruiter/contact progress, interview rounds, offer status, platform metadata, and hidden IDs for consistency. I also added formatting automation for status and yes/no fields to improve scanability.

      I built the solution entirely in JavaScript with Google Apps Script and integrated Gmail/Sheets APIs directly. I used regex parsing to support common ATS senders (Workday, Greenhouse, Lever, and others), and I enabled both manual and scheduled execution modes.

      I currently have a fully functional implementation with production-style parsing and de-duplication behavior. My planned enhancements include dashboard analytics, per-ATS parsing modules, and automatic platform detection from sender domains.
    `,
    repoLink: "https://github.com/mbengue1/job-application-script",
    projectLink: "https://github.com/mbengue1/job-application-script",
    image: JobApplicationLoggerImage,
  },
  "nova-voice-assistant": {
    title: "N.O.V.A - No Ordinary Voice Assistant",
    description: `
      I built N.O.V.A (No Ordinary Voice Assistant) as a personal AI assistant inspired by J.A.R.V.I.S. and F.R.I.D.A.Y., focused on deep integration, natural conversation, and proactive assistance.

      In the MVP, I implemented wake-word detection ("Hey Nova") with Picovoice Porcupine for low-overhead activation. After activation, I process audio, transcribe with Whisper/faster-whisper, and route commands through a modular skill system for tasks like app control, Notion checks, system queries, and calculations.

      I designed the architecture as LLM-first with OpenAI GPT-4o-mini for contextual responses instead of scripted intent trees. I built a router to decide between skill execution and conversational LLM output. For voice output, I integrated Azure Neural TTS with macOS fallback support, plus barge-in interruption and graceful error handling.

      I currently support skills for AppleScript/JXA app control, system information retrieval, mathematical reasoning with explanations, and Notion-based agenda workflows. I optimized background execution for ARM64 Mac environments and kept the architecture modular for easy extension.

      My roadmap includes proactive context-aware behavior, cross-device support, long-term memory via vector storage, and eventual expansion to Windows and iPhone platforms.
    `,
    repoLink: "https://github.com/mbengue1/nova",
    projectLink: "https://github.com/mbengue1/nova",
    image: NovaThumb,
  },
  "premier-league-role-discovery": {
    title: "Premier League Role Discovery",
    description: `
  
I built this Premier League Role Discovery project as an unsupervised machine learning and interactive visualization tool to rethink traditional position labels. Instead of fixed defender/midfielder/forward buckets, I clustered players into functional, data-driven roles using detailed match metrics.

I applied advanced feature engineering, dimensionality reduction, and clustering techniques (including PCA, UMAP, and K-Means) to uncover role archetypes that better reflect on-pitch behavior.

I deployed the project as an interactive Streamlit app where users can search players, inspect assigned roles, and compare similar players within clusters. I added radar charts, heatmaps, scatter plots, and explainability views so users can understand which features drive each role assignment.

    `,
    repoLink: "https://github.com/mbengue1/pl-role-discovery",
    projectLink: "https://pl-role-discovery.streamlit.app/",
    image: PremLeagueThumb,
  },
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section className={`${styles.container} section-shell`}>
      <h1 className={styles.title}>{project.title}</h1>
      <div className={styles.content}>
        <img src={project.image} alt={project.title} className={styles.image} />
        <div className={styles.textContainer}>
          <h3 className={styles.header}>Description</h3>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.buttonContainer}>
            {project.projectLink && project.projectLink !== project.repoLink && (
              <a href={project.projectLink} className={styles.plink} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
            <a href={project.repoLink} className={styles.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
