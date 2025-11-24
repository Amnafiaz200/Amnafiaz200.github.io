const { createApp } = Vue;

createApp({
  data() {
    return {
      name: 'Amna Fiaz',
      profession: 'AI Software Engineer & ML Integrator',
      sections: ['About', 'Education', 'Experience', 'Projects', 'Contact'],
      currentSection: 'home',

      // Education Data
education: [
  {
    degree: 'MS Artificial Intelligence',
    institution: 'LUMS — Lahore University of Management and Sciences',
    duration: '08/2025 — Present',
    location: 'Lahore, Pakistan'
  },
  {
    degree: 'BS Computer Engineering',
    institution: 'University of Engineering and Technology (UET)',
    duration: '09/2021 — 03/2025',
    location: 'Lahore, Pakistan'
  }
]
,
      
      // Experience Data
      experience: [
        {
            title: 'Python Backend Developer',
            company: 'LUMS (BIRL)',
            duration: '08/2025 — Present',
            location: 'Lahore, Pakistan',
            tasks: [
                'Built scalable, reliable backend systems for research platforms',
                'Implemented real-time data visualization for healthcare applications',
                'Developed Python REST APIs enabling secure, real-time data flow',
                'Created AI-powered automated analysis pipelines for better accuracy & faster insights',
                'Worked with FastAPI, SQL databases, API integrations',
                'Supported research systems requiring high uptime & reliable computation'    
            ]
        },
        {
            title: 'Database Intern',
            company: 'SKYCODE',
            duration: '05/2024 — 08/2024',
            location: 'Lahore, Pakistan',
            tasks: [
                'Designed and optimized MySQL & PostgreSQL schemas',
                'Improved database query speed by 20%',
                'Maintained backup, recovery, and performance monitoring',
                'Supported backend integration and optimized queries for web platforms'
            ]
        }
      ],

      // Certification Data
      certification: {
        title: 'Certificate of Coordination — 3rd International AI Championship',
        location: 'LUMS 2025',
        description: 'Recognized for exceptional leadership, organization, and event management. Successfully coordinated Pakistan’s largest AI competition.',
        partners: ['LUMS', 'Persivia', 'Soliton', 'QIU', 'AIEF']
      },

      // Projects Data
      projects: [
        {
          title: 'MediBot AI',
          tech_focus: 'AI-powered medical assistant that analyzes uploaded PDFs and provides accurate, real-time medical explanations.',
          image: 'images/MediBot AI.png',
          link: 'https://github.com/Amnafiaz200/My_Medical-Chatbot',
          tech_stack: ['LangChain', 'HuggingFace', 'Groq LLaMA API', 'FAISS', 'Python', 'FastAPI'],
          features: [
            'Uses Retrieval-Augmented Generation for precise, authoritative responses',
            'Context-aware prompts for natural and empathetic conversations',
            'Designed complete backend + UI query workflow',
            'Improved model reliability through iterative testing'
          ]
        },
        {
  title: 'Titanic Survival Prediction',
  tech_focus: 'Machine learning models built from scratch — Decision Tree, Random Forest & SVM — to predict passenger survival on the Titanic.',
  image: 'images/Titanic Project.png',  
  link: 'https://github.com/Amnafiaz200/Titanic-ML-From-Scratch', // change if different
  tech_stack: ['Python', 'NumPy', 'Pandas', 'Decision Tree (Custom)', 'Random Forest (Custom)', 'SVM (Custom)'],
  features: [
    'Implemented Decision Tree, Random Forest, and SVM completely from scratch',
    'No scikit-learn classifiers — full internal algorithm logic written manually',
    'Preprocessing pipeline including missing value handling & feature engineering',
    'Model comparison with accuracy evaluation on Titanic dataset',
    'Educational project showing how classic ML algorithms work internally'
  ]
},
        {
          title: 'Causal Inference Analysis',
          tech_focus: 'Built a full causal inference pipeline using Python to analyze the real policy effect of Castle Doctrine laws on violent crime.',
          image: 'images/Causal Inference Analysis.png',
          link: 'https://github.com/Amnafiaz200/Analyzing-the-Impact-of-Castle-Doctrine-Laws-on-Violent-Crime-Rates',
          tech_stack: ['Pandas', 'NumPy', 'Matplotlib', 'Causal ML', 'DiD', 'Structural Modeling'],
          features: [
            'Estimated ATE & policy intervention effects',
            'Differentiated correlation vs real causation using DiD',
            'End-to-end reproducible pipeline for real-world policy data'
          ]
        }
      ],


      // Form Data for Contact Section
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
      // In a real application, you would send this data to a backend service (like Firestore or an email service).
      // Since we don't have a backend here, we'll use a custom message box instead of alert().
      // Use document.getElementById to display a success message in a designated area.
      console.log('Form Submitted:', this.form);
      alert('Thank you, ' + this.form.name + '! Your message has been received. I will respond to ' + this.form.email + ' shortly.');
      
      // Clear form
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    },
    updateCurrentSection() {
      const sections = this.sections.map(s => s.toLowerCase());
      const scrollPosition = window.scrollY + 100;
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          this.currentSection = section;
          break;
        }
      }
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
      localStorage.setItem('darkMode', this.darkMode);
    }
  },
  mounted() {
    // Initialize dark mode
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      this.darkMode = savedMode === 'true';
    } else {
      this.darkMode = true; // Default to dark mode
    }
    
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
    
    // Initialize particles.js
    particlesJS("particles-js", {
      "particles": {
        "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00ff00" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": true },
        "size": { "value": 5, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#00ff00", "opacity": 0.2, "width": 1 },
        "move": { "enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "repulse" },
          "onclick": { "enable": true, "mode": "push" }
        }
      }
    });
    
    // Set up scroll event listener
    window.addEventListener('scroll', this.updateCurrentSection);
    
    // Hide loader after page loads
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        document.getElementById('loader').style.visibility = 'hidden';
      }, 1500);
    });
    
    // Initial check for current section
    this.updateCurrentSection();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateCurrentSection);
  }
}).mount('#app');