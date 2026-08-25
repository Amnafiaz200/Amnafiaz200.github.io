const { createApp } = Vue;

createApp({
  data() {
    return {
      name: 'Amna Fiaz',
      profession: 'Data Scientist | Data Engineer | AI Automation Developer',
      sections: ['About', 'Education', 'Experience', 'Projects', 'Contact'],
      currentSection: 'about',

      education: [
        {
          degree: 'BS Computer Engineering',
          institution: 'University of Engineering and Technology (UET)',
          duration: '09/2021 — 03/2025',
          location: 'Lahore, Pakistan'
        }
      ],

      experience: [
        {
          title: 'Data Scientist',
          company: 'Black Lion Innovations Group',
          duration: '03/2026 - Present',
          location: 'Remote / Lahore, Pakistan',
          tasks: [
            'Designed scalable data pipelines using Google BigQuery and Cloud Composer for automated data ingestion and processing.',
            'Developed Python web scrapers with Playwright and FastAPI to collect large-scale web and Spotify data.',
            'Built API-to-database validation frameworks to improve data quality and pipeline reliability.',
            'Automated data transformation and loading into Google BigQuery for analytics workflows.',
            'Created Tableau dashboards and Excel reports for data quality monitoring and business reporting.',
            'Worked with Python, SQL, BigQuery, Cloud Composer, Playwright, FastAPI, REST APIs, Tableau, Git, and Linux.'
          ]
        },
        {
          title: 'Data Engineer',
          company: 'LUMS (BIRL)',
          duration: '08/2025 - 02/2026',
          location: 'Lahore, Pakistan',
          tasks: [
            'Designed a five-layer clinical data ingestion pipeline for healthcare datasets.',
            'Developed SQL-based ETL and feature engineering pipelines, reducing processing time by 40%.',
            'Performed EDA, data validation, and anomaly detection to improve clinical data quality.',
            'Built FastAPI services to automate data ingestion and integration.',
            'Developed SQL and Excel reports to support clinical data analysis.',
            'Worked with Python, SQL, PostgreSQL, FastAPI, ETL, Excel, Git, and Linux.'
          ]
        }
      ],

      certification: {
        title: 'Certificate of Coordination - 3rd International AI Championship',
        location: 'LUMS 2025',
        description: 'Recognized for leadership, organization, and event coordination in Pakistan\'s major AI competition.',
        partners: ['LUMS', 'Persivia', 'Soliton', 'QIU', 'AIEF']
      },

      projects: [
        {
          title: 'Spotify Data Intelligence Platform',
          tech_focus: 'Scalable Spotify and web data collection platform with API job execution, validation, CSV exports, and cloud deployment.',
          image: 'images/spotify-data-intelligence.png',
          link: 'https://github.com/Amnafiaz200/spotify-data-intelligence-platform',
          tech_stack: ['Python', 'Playwright', 'FastAPI', 'REST APIs', 'BigQuery', 'GCP', 'AWS EC2', 'Linux'],
          features: [
            'Extracts playlist, artist, track, and social media information at scale.',
            'Collects websites, emails, phone numbers, and platform links for enrichment.',
            'Includes data validation, CSV export workflows, monitoring, and job execution APIs.',
            'Deployed as a FastAPI service on GCP VM and AWS EC2.'
          ]
        },
        {
          title: 'Real-Time Semantic Segmentation for Autonomous Navigation',
          tech_focus: 'Vision-based autonomous navigation system combining semantic segmentation with heading and speed control.',
          image: 'images/semantic-segmentation.png',
          link: 'https://github.com/Amnafiaz200/Real-time-road-scene-Segmentation-controller',
          tech_stack: ['Python', 'PyTorch', 'OpenCV', 'Semantic Segmentation', 'Deep Learning', 'Intel RealSense D455', 'Robotics'],
          features: [
            'Identifies roads, sidewalks, pedestrians, obstacles, and speed breakers from RGB video streams.',
            'Supports intelligent steering, speed adjustment, path following, and emergency stopping.',
            'Achieved 99.28% Pixel Accuracy and 95.61% Mean IoU.',
            'Demonstrates real-time scene understanding for autonomous robot navigation.'
          ]
        },
        {
          title: 'Knowledge Distillation for Efficient Image Classification',
          tech_focus: 'Benchmarked knowledge distillation methods for lightweight CIFAR-100 image classification.',
          image: 'images/knowledge-distillation.png',
          link: 'https://github.com/Amnafiaz200/knowledge-distillation-cifar100-resnet',
          tech_stack: ['Python', 'PyTorch', 'ResNet', 'KD', 'DKD', 'EKD', 'CIFAR-100', 'Computer Vision'],
          features: [
            'Implemented Vanilla KD, Decoupled KD, and Evidential KD using ResNet teacher-student models.',
            'Used ResNet110 as teacher and ResNet20 as student network.',
            'Achieved 71.57% test accuracy using DKD, outperforming baseline student accuracy.',
            'Performed hyperparameter tuning and teacher-student knowledge transfer analysis.'
          ]
        },
        {
          title: 'WhatsApp Visa Processing AI Agent',
          tech_focus: 'AI-powered WhatsApp automation workflow for visa onboarding, document collection, passport extraction, and status updates.',
          image: 'images/whatsapp-visa-agent.png',
          link: '',
          status_label: 'Private Project',
          tech_stack: ['n8n', 'Twilio WhatsApp API', 'Google Sheets', 'LlamaIndex', 'LlamaParse', 'Groq LLM API', 'Webhooks'],
          features: [
            'Automates applicant onboarding, document collection, and payment tracking.',
            'Uses LlamaParse and Groq LLM for structured passport data extraction.',
            'Stores workflow state in Google Sheets as a lightweight CRM.',
            'Includes human-in-the-loop approvals for controlled visa processing.'
          ]
        },
        {
          title: 'Medical RAG Chatbot',
          tech_focus: 'End-to-end medical chatbot using PDF parsing, embeddings, vector search, and hallucination-reduction prompts.',
          image: 'images/medical-rag-chatbot.png',
          link: 'https://github.com/Amnafiaz200/My_Medical-Chatbot',
          tech_stack: ['Python', 'LangChain', 'FAISS', 'HuggingFace', 'Groq API', 'Streamlit', 'RAG'],
          features: [
            'Parses medical PDFs and chunks documents for retrieval-based question answering.',
            'Uses embeddings and FAISS vector search for context-aware responses.',
            'Integrates LangChain and Groq API with a Streamlit user interface.',
            'Designed prompts to reduce hallucination and improve answer reliability.'
          ]
        },
        {
          title: 'Agentic AI Job Search Platform',
          tech_focus: '24/7 AI-powered LinkedIn job agent for discovery, compatibility scoring, resume generation, and application tracking.',
          image: 'images/agentic-job-platform.png',
          link: '',
          status_label: 'Coming Soon',
          tech_stack: ['Antigravity 2.0', 'Gemini 3.5 Flash', 'BrowserACT', 'Google Sheets API', 'Google Cloud', 'Python', 'Automation'],
          features: [
            'Discovers LinkedIn job opportunities through scheduled automation workflows.',
            'Evaluates job compatibility using Gemini and structured scoring logic.',
            'Generates ATS-optimized resumes and cover letters for target roles.',
            'Tracks applications in Google Sheets with JSON and CSV-based workflow outputs.'
          ]
        }
      ],

      form: {
        name: '',
        email: '',
        message: ''
      },
      darkMode: true
    };
  },
  methods: {
    submitForm() {
      alert('Thank you, ' + this.form.name + '! Your message has been received. I will respond to ' + this.form.email + ' shortly.');
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    },
    updateCurrentSection() {
      const sectionNames = this.sections.map((section) => section.toLowerCase());
      const scrollPosition = window.scrollY + 120;

      for (const section of sectionNames) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          this.currentSection = section;
          break;
        }
      }
    },
    setupMobileMenu() {
      const hamburger = document.getElementById('hamburger');
      const navLinks = document.getElementById('nav-links');

      if (!hamburger || !navLinks) return;

      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
      });

      navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
        });
      });
    },
    setupParticles() {
      if (typeof particlesJS === 'undefined') return;

      particlesJS('particles-js', {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          color: { value: '#00ff00' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: true },
          size: { value: 5, random: true },
          line_linked: { enable: true, distance: 150, color: '#00ff00', opacity: 0.2, width: 1 },
          move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out' }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' }
          }
        }
      });
    }
  },
  mounted() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');

    this.setupParticles();
    this.setupMobileMenu();
    this.updateCurrentSection();
    window.addEventListener('scroll', this.updateCurrentSection);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateCurrentSection);
  }
}).mount('#app');
