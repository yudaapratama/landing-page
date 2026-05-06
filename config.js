/*
 * ============================================================
 *  EDIT YOUR DETAILS HERE — Personal Portfolio Config
 * ============================================================
 *
 * Fill in your information below. The page reads this file
 * and renders everything automatically.
 *
 * Instructions:
 *   1. Edit the values between the quotes '' or the brackets []
 *   2. Save the file
 *   3. Open index.html in a browser
 *
 * Fields marked // optional can be left empty or removed.
 * ============================================================
 */

const config = {

  // ----------------------------------------------------------
  //  YOUR NAME
  //  Shown large at the top of the page.
  // ----------------------------------------------------------
  name: 'Alex Rivera',

  // ----------------------------------------------------------
  //  YOUR TITLE / ROLE
  //  Displayed below your name in the accent color.
  // ----------------------------------------------------------
  title: 'Designer & Developer',

  // ----------------------------------------------------------
  //  TAGLINE
  //  A short, punchy line about what you do.
  //  Keep it under ~100 characters for best layout.
  // ----------------------------------------------------------
  tagline: 'I craft digital experiences that balance beauty with purpose.',

  // ----------------------------------------------------------
  //  BIOGRAPHY
  //  A paragraph or two about yourself. Shown in the About
  //  section. Use \n for line breaks if needed.
  // ----------------------------------------------------------
  bio: `I am a designer and front-end developer based in Portland. I believe great digital products are built at the intersection of visual craft and technical rigor. My approach centers on clarity: every component earns its place, every interaction has intent.

Over the past eight years, I have worked with startups, agencies, and direct clients to design interfaces that people genuinely enjoy using. When I am not at a keyboard, I am probably hiking the Pacific Crest Trail or experimenting with fermented foods.`,

  // ----------------------------------------------------------
  //  AVATAR IMAGE
  //  Optional. Path relative to index.html, or a full URL.
  //  If empty (''), your initials will be shown instead.
  // ----------------------------------------------------------
  avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&h=240&fit=crop&crop=face',

  // ----------------------------------------------------------
  //  SOCIAL LINKS
  //  Add as many as you like. Each needs a platform name
  //  and a full url (starting with https://).
  //  Supported platforms: GitHub, LinkedIn, Twitter, Dribbble,
  //  Behance, Instagram, YouTube, Website, or any custom name.
  // ----------------------------------------------------------
  social_links: [
    { platform: 'GitHub',    url: 'https://github.com/alexrivera' },
    { platform: 'LinkedIn',  url: 'https://linkedin.com/in/alexrivera' },
    { platform: 'Dribbble',  url: 'https://dribbble.com/alexrivera' },
  ],

  // ----------------------------------------------------------
  //  ACCENT COLOR
  //  A hex color used for links, highlights, and interactive
  //  elements. Warm tones (terracotta, rust, gold) work best
  //  with the default light/dark themes.
  //
  //  Some recommended options:
  //    Terracotta:  #b84a3b
  //    Rust:        #c1553c
  //    Burnt orange:#c96b3e
  //    Deep gold:   #b8863c
  //    Warm teal:   #3a7a7a
  //    Muted plum:  #7a4a6a
  // ----------------------------------------------------------
  accent_color: '#b84a3b',

  // ----------------------------------------------------------
  //  PROJECTS PAGE INTRO
  //  Text shown at the top of the projects listing page
  //  (projects.html). Leave empty for default text.
  // ----------------------------------------------------------
  projects_intro: 'A curated selection of design and development work.',

  // ----------------------------------------------------------
  //  PROJECTS / WORK
  //  Each project entry has:
  //    title          — Project name (required)
  //    description    — Short summary, 1-3 sentences (required)
  //    image_url      — Path or URL to project image (optional)
  //    link_url       — Link to the live project or case study
  //                     (optional — leave empty '' to hide the link)
  //    alt            — Image alt text (optional but recommended)
  //
  //  Project detail page fields (all optional):
  //    long_description — Detailed paragraph about the project
  //    tech_stack       — Array of technology names (e.g. ['React', 'Node.js'])
  //    demo_url         — Live demo URL
  //    repo_url         — GitHub repo URL
  //    gallery          — Array of image URL strings for a gallery grid
  //
  //  Add or remove entries as needed. Currently 9 projects
  //  which triggers pagination (6 per page = 2 pages).
  // ----------------------------------------------------------
  projects: [
    {
      title: 'Field Notes',
      description: 'A digital archive for ethnographic research with real-time collaboration and rich media annotation. Designed for anthropologists in the field.',
      image_url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=900&h=600&fit=crop',
      link_url: 'https://fieldnotes.example.com',
      alt: 'Field Notes app interface showing a map with pinned observations',
      long_description: 'Field Notes is a comprehensive digital platform designed for anthropologists and ethnographic researchers who need to capture, organize, and share their fieldwork in real time. The application combines spatial mapping with rich media annotation, allowing researchers to pin observations to geographic locations and collaborate with colleagues across the globe. Built with a focus on offline-first capabilities, Field Notes ensures data is never lost, even in the most remote field locations.',
      tech_stack: ['React', 'Node.js', 'PostgreSQL', 'Mapbox GL', 'WebSockets'],
      demo_url: 'https://demo.fieldnotes.example.com',
      repo_url: 'https://github.com/alexrivera/fieldnotes',
      gallery: [
        'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop',
      ],
    },
    {
      title: 'Solaris',
      description: 'Energy monitoring dashboard for residential solar systems that makes complex energy data feel approachable and actionable for homeowners.',
      image_url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&h=600&fit=crop',
      link_url: 'https://solaris.example.com',
      alt: 'Solaris dashboard showing energy production and consumption charts',
      long_description: 'Solaris transforms complex solar energy data into clear, actionable insights for homeowners. The dashboard provides real-time monitoring of energy production, consumption, and storage, with intelligent recommendations for optimizing usage patterns. Designed in close collaboration with solar installers and homeowners, Solaris simplifies the renewable energy experience through thoughtful data visualization and proactive alerts. The system supports multi-panel arrays, battery storage integration, and grid-tied configurations.',
      tech_stack: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'InfluxDB'],
      demo_url: 'https://demo.solaris.example.com',
      repo_url: 'https://github.com/alexrivera/solaris',
      gallery: [
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop',
      ],
    },
    {
      title: 'Meridian',
      description: 'Typography-focused publishing platform for long-form journalism with a custom reading experience powered by variable font technology.',
      image_url: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=900&h=600&fit=crop',
      link_url: 'https://meridian.example.com',
      alt: 'Meridian article reader showing clean typographic layout',
      long_description: 'Meridian is a publishing platform built from the ground up for long-form journalism. At its core is a custom reading experience powered by variable font technology, allowing seamless weight and width adjustments that adapt to the reader preference and device capabilities. The platform includes a powerful editorial toolkit with collaborative editing, automated typographic layout, and multi-platform distribution. Meridian serves independent publishers and newsrooms that prioritize reading experience above all else.',
      tech_stack: ['Next.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'AWS Lambda'],
      demo_url: 'https://demo.meridian.example.com',
      repo_url: 'https://github.com/alexrivera/meridian',
      gallery: [
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1529699211955-0340e2853e5f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1471970394675-613138e3d8b4?w=800&h=600&fit=crop',
      ],
    },
    {
      title: 'Verdant',
      description: 'Precision agriculture analytics platform that helps farmers optimize crop yields through satellite imagery and machine learning predictions.',
      image_url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&h=600&fit=crop',
      link_url: 'https://verdant.example.com',
      alt: 'Verdant dashboard showing satellite imagery of farmlands with yield predictions',
      long_description: 'Verdant brings precision agriculture to small and medium farms through an intuitive analytics platform. By combining satellite imagery, soil sensor data, and machine learning models, it delivers actionable insights on irrigation scheduling, pest risk forecasting, and harvest timing. The platform is designed to work in areas with limited connectivity, featuring offline data collection and sync capabilities that make it viable for rural agricultural communities around the world.',
      tech_stack: ['React', 'Python', 'TensorFlow', 'PostGIS', 'AWS'],
      demo_url: 'https://demo.verdant.example.com',
      repo_url: 'https://github.com/alexrivera/verdant',
      gallery: [
        'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&h=600&fit=crop',
      ],
    },
    {
      title: 'Pulse',
      description: 'Personal health tracking and coaching app that combines wearable data with behavior science to build lasting wellness habits.',
      image_url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=600&fit=crop',
      link_url: 'https://pulse.example.com',
      alt: 'Pulse health app showing workout summary and heart rate trends',
      long_description: 'Pulse is a holistic health companion that goes beyond simple step counting. The app integrates with wearable devices to track activity, sleep, heart rate variability, and stress levels, then uses behavior science principles to suggest personalized micro-habits. What sets Pulse apart is its adaptive coaching engine that learns from user responses and adjusts recommendations based on real-world constraints like weather, schedule conflicts, and past adherence patterns.',
      tech_stack: ['React Native', 'Node.js', 'MongoDB', 'Redis', 'WebSockets'],
      demo_url: 'https://demo.pulse.example.com',
      repo_url: 'https://github.com/alexrivera/pulse',
      gallery: [
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop',
      ],
    },
    {
      title: 'Atelier',
      description: 'Collaborative creative workspace for design teams with version control for visual assets and real-time whiteboarding.',
      image_url: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=900&h=600&fit=crop',
      link_url: 'https://atelier.example.com',
      alt: 'Atelier workspace showing a design board with team collaboration tools',
      long_description: 'Atelier reimagines creative collaboration by bringing version control principles to visual design. Teams can branch, merge, and review design files just like code, with pixel-perfect diff views that make changes instantly visible. The platform combines a real-time whiteboard for brainstorming, a component library manager, and an approval workflow system that integrates with Slack, Jira, and Figma. Atelier was built by designers who wanted the same rigor in visual collaboration that developers have in code.',
      tech_stack: ['Next.js', 'WebRTC', 'Supabase', 'Canvas API', 'TypeScript'],
      demo_url: 'https://demo.atelier.example.com',
      repo_url: 'https://github.com/alexrivera/atelier',
      gallery: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      ],
    },
    {
      title: 'Aether',
      description: 'AI-powered music production assistant that helps producers generate stems, suggest chord progressions, and mix tracks intelligently.',
      image_url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=900&h=600&fit=crop',
      link_url: 'https://aether.example.com',
      alt: 'Aether music production interface showing waveform and AI suggestions',
      long_description: 'Aether is an intelligent music production environment that accelerates the creative workflow without replacing the artist. It uses a custom audio foundation model trained on licensed multi-track recordings to suggest chord progressions, generate accompaniment stems, and automate repetitive mixing tasks. Producers can describe a sound in natural language and Aether generates it, or upload a reference track and get a structural analysis. The tool is designed to be a co-pilot, not an autopilot.',
      tech_stack: ['Python', 'PyTorch', 'C++', 'JUCE', 'React', 'WebAudio'],
      demo_url: 'https://demo.aether.example.com',
      repo_url: 'https://github.com/alexrivera/aether',
      gallery: [
        'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop',
      ],
    },
    {
      title: 'Cascade',
      description: 'Real-time weather monitoring and alert platform for outdoor enthusiasts with hyperlocal forecasts and trail condition reports.',
      image_url: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=900&h=600&fit=crop',
      link_url: 'https://cascade.example.com',
      alt: 'Cascade weather platform showing mountain forecast with trail conditions',
      long_description: 'Cascade delivers hyperlocal weather intelligence tailored for hikers, climbers, skiers, and trail runners. By fusing data from personal weather stations, satellite imagery, and user-submitted trail reports, Cascade provides forecasts that matter for outdoor decision-making: wind exposure on ridges, lightning risk windows, snowpack stability ratings, and sunset timing for descents. The mobile app works offline with cached topo maps and has earned a loyal following among backcountry adventurers.',
      tech_stack: ['Swift', 'Python', 'FastAPI', 'PostgreSQL', 'Mapbox GL'],
      demo_url: 'https://demo.cascade.example.com',
      repo_url: 'https://github.com/alexrivera/cascade',
      gallery: [
        'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      ],
    },
    {
      title: 'Lumina',
      description: 'AI-enhanced photo editing suite for professional photographers with intelligent masking and batch processing workflows.',
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&h=600&fit=crop',
      link_url: 'https://lumina.example.com',
      alt: 'Lumina photo editor showing layer-based editing interface',
      long_description: 'Lumina combines professional-grade editing tools with AI-powered assistants to accelerate photo workflows without sacrificing creative control. Its neural masking engine can isolate subjects, skies, and objects with a single click, while the batch processing system learns from manual edits and applies consistent adjustments across thousands of images. Built on a non-destructive layer architecture, Lumina supports RAW processing, color grading, frequency separation, and plugin extensibility for specialized workflows like astrophotography and product photography.',
      tech_stack: ['C++', 'Qt', 'CUDA', 'Python', 'ONNX Runtime', 'WebAssembly'],
      demo_url: 'https://demo.lumina.example.com',
      repo_url: 'https://github.com/alexrivera/lumina',
      gallery: [
        'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop',
      ],
    },
  ],

  // ----------------------------------------------------------
  //  CONTACT EMAIL
  //  Shown in the Contact section. Clicking opens the user's
  //  default mail client.
  // ----------------------------------------------------------
  contact_email: 'hello@alexrivera.dev',

  // ----------------------------------------------------------
  //  FOOTER TEXT
  //  Optional. If empty, defaults to:
  //  "© [current year] [name]. Crafted with care."
  // ----------------------------------------------------------
  footer_text: '',

};

// Do not edit below this line — it makes the config available
// to the page script.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
}
