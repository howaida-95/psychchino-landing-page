/**
 * English UI strings for Psychochino (source of types for the Arabic file).
 */
export const en = {
  brand: "Psychochino",
  siteTitle: "Psychochino — Psychology book discussions on Google Meet",
  siteDescription:
    "Psychochino was introduced by Ibrahim and is facilitated by a team of about five psychologists. Join live psychology book discussions from anywhere via Google Meet.",

  backToTop: "Back to top",

  language: { en: "English", ar: "عربى", currentAria: "Language" },

  nav: {
    howIHelp: "How I help",
    aboutMe: "About me",
    services: "Services",
    books: "Books",
    approach: "Approach",
    therapists: "Therapists",
    stories: "Stories",
    blog: "Blog",
    contact: "Contact",
  },

  header: {
    ctaMeet: "Get Meet invite",
    ctaMeetShort: "Meet",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    badge: "Book discussions · Google Meet",
    h1a: "Psychology books,",
    h1b: "real conversation",
    pBrand: "Psychochino",
    p1a: "was introduced by",
    pIbrahim: "Ibrahim",
    p1b: "and brings together about",
    pFive: "five psychologists",
    p1c: "to host live discussions of psychology books. People join from home on",
    pMeet: "Google Meet",
    p1d: "—listen, ask questions, and connect around ideas that matter.",
    cta1: "Request the next Meet link",
    cta2: "Meet the psychologists",
    statFacilitators: "Facilitators",
    statValFacilitators: "~5",
    statFormat: "Format",
    statValFormat: "Live",
    statPlatform: "Platform",
    statValPlatform: "Meet",
  },

  whatHelp: {
    services: "Services",
    heading: "What can I help you with?",
    areasLabel: "Areas of focus",
    img1Alt: "Psychologist in a light blazer at a desk with laptop and notepad",
    img2Alt: "Client on a bed with a laptop during a session at home",
    p1a: "Psychochino",
    p1b: ", introduced by",
    p1c: "Ibrahim",
    p1d:
      ", hosts live psychology book discussions on Google Meet with about five psychologist facilitators—so you can explore ideas in community, not alone.",
    p2: "Together in each session, we connect what you read to everyday life: patterns, stress, relationships, and growth—always as a guided conversation, not group therapy.",
    p3: "Our aim is clarity and curiosity: better language for your experience, and practical takeaways from the books we share.",
    blockquote: "Whether you are new to psychology books or read them for work, you belong in the conversation—we will meet you there on Google Meet.",
  },

  tagCloud: [
    "Social relations",
    "Family conflict",
    "Trauma",
    "Anxiety",
    "Heavy stress",
    "Relationship",
    "Depression",
    "Sexuality",
    "Teens",
    "Addictions",
  ] as [string, string, string, string, string, string, string, string, string, string],

  niceToMeet: {
    kicker: "How it started",
    heading: "Nice to meet you",
    p1: "Ibrahim launched Psychochino to bring readers and clinicians together around psychology books—so ideas from the page turn into shared understanding, not something you digest alone.",
    p2: "Today a small team of about five psychologists helps plan themes, choose readings, and host the live Google Meet sessions. Whether you are new to the field or read for work, you are welcome at the table.",
    highlights: [
      "Founded by Ibrahim—Psychochino exists to make psychology books accessible through dialogue",
      "About five licensed psychologists rotate as facilitators and discussion guides",
      "Sessions run on Google Meet so participants can join from anywhere",
      "Focused on respectful, curious conversation—not individual therapy in a group setting",
    ] as [string, string, string, string],
    cta1: "Ask about the next session",
    cta2: "See the psychologist facilitators",
    imageCaption: "Ibrahim · Introduced Psychochino",
    imageAlt: "Ibrahim, who introduced Psychochino",
  },

  services: {
    heading: "What Psychochino offers",
    lead: "One community, three simple ingredients: good books, a video room, and psychologists who love teaching through conversation.",
    cards: [
      {
        title: "Psychology book discussions",
        body: "We pick accessible, meaningful titles and meet to unpack arguments, studies, and stories—always with room for your questions.",
      },
      {
        title: "Google Meet gatherings",
        body: "Every circle happens live online. You get a Meet link, a clear agenda, and guidance on how to participate respectfully.",
      },
      {
        title: "Psychologist facilitators",
        body: "Roughly five licensed psychologists—including Ibrahim’s collaborators—lead sessions, frame chapters, and keep discussion clinically informed.",
      },
    ] as [
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
    ],
  },

  howItWorks: {
    heading: "How a Psychochino session works",
    lead: "From invitation to Meet link to conversation—transparent steps so you know what to expect.",
    steps: [
      {
        step: "01",
        title: "See the next book & date",
        body: "We announce the title, chapters, and session time. You can RSVP or ask Ibrahim’s team for the calendar.",
      },
      {
        step: "02",
        title: "Get your Google Meet link",
        body: "Before the call, you receive a Meet link and any prep notes—no special software beyond a browser.",
      },
      {
        step: "03",
        title: "Join the live discussion",
        body: "Psychologists open the session, ground the reading, and invite questions. You listen or speak—your pace.",
      },
    ] as [
      { step: string; title: string; body: string },
      { step: string; title: string; body: string },
      { step: string; title: string; body: string },
    ],
  },

  therapists: {
    heading: "The people behind Psychochino",
    lead: "Ibrahim introduced Psychochino; a rotating group of about five psychologist facilitators (plus collaborators) leads Google Meet book discussions and helps choose readings.",
    cta: "Contact for session info",
    people: [
      { name: "Ibrahim", role: "Founder · Introduced Psychochino", initials: "I" },
      { name: "Dr. Elena Marquez", role: "Psychologist · Discussion facilitator", initials: "EM" },
      { name: "James Okonkwo, LCSW", role: "Clinical social worker · Co-facilitator", initials: "JO" },
      { name: "Dr. Priya Nair", role: "Psychologist · Book circles", initials: "PN" },
      { name: "Dr. Amira Hassan", role: "Psychologist · Research-minded sessions", initials: "AH" },
      { name: "Dr. Leo Chen", role: "Psychologist · Co-facilitator", initials: "LC" },
    ] as [
      { name: string; role: string; initials: string },
      { name: string; role: string; initials: string },
      { name: string; role: string; initials: string },
      { name: string; role: string; initials: string },
      { name: string; role: string; initials: string },
      { name: string; role: string; initials: string },
    ],
  },

  testimonials: {
    heading: "Voices from the community",
    lead: "Names and details are adjusted to protect privacy. Experiences shared here are about book discussions, not clinical care.",
    quotes: [
      {
        text: "I joined for one book and stayed for the community. The psychologists actually read along with us.",
        name: "Alex T.",
        detail: "Psychochino · Google Meet",
      },
      {
        text: "Ibrahim sets a welcoming tone, and the Meet format made it easy for both of us to attend from different cities.",
        name: "Sam & Riley",
        detail: "Book discussion regulars",
      },
      {
        text: "It is not therapy—it is better described as a smart book club with experts in the room. I learn something every week.",
        name: "Morgan K.",
        detail: "First season participant",
      },
    ] as [
      { text: string; name: string; detail: string },
      { text: string; name: string; detail: string },
      { text: string; name: string; detail: string },
    ],
  },

  cta: {
    heading: "Join the next psychology book Meet",
    lead: "Leave your email and a short message—we will send Google Meet details for upcoming Psychochino sessions and reading schedules. No spam.",
    emailLabel: "Email",
    emailPh: "you@example.com",
    submit: "Request invite",
    p1: "Already on the list? ",
    p1Bold: "Open your Google Meet link at session time.",
    p2: " for private questions.",
    p2LinkText: "hello@psychochino.com",
    p2Before: "Email ",
  },

  blogs: {
    kicker: "From the team",
    heading: "Blog",
    lead: "Short reads on how we run Psychochino—book choices, online sessions, and the culture we try to protect in every Meet.",
    allPosts: "All posts",
    readMore: "Read more",
  },

  footer: {
    blurb: "Psychology book circles led by licensed psychologists—join live on Google Meet.",
    follow: "Follow us",
    disclaimer:
      "Community discussions are educational and supportive; they are not a substitute for personal therapy or emergency care—if you are in crisis, contact local emergency services.",
  },

  incomingBooks: {
    kicker: "Up next",
    heading: "Incoming books",
    lead: "New circles are added regularly. Each row lists facilitators and the first session date; you will receive the Google Meet link after you RSVP.",
    instructors: "Instructors",
    startDate: "Starting date",
    items: [
      {
        title: "The Body Keeps the Score",
        coverAlt: "Paperback book cover on a warm background",
        description:
          "We open Bessel van der Kolk’s classic on trauma and the nervous system—first four chapters—with time for reflection and Q&A.",
        instructors: ["Dr. Elena Marquez", "Dr. Amira Hassan"],
        startDate: "2026-05-15",
      },
      {
        title: "Thinking, Fast and Slow",
        coverAlt: "Stack of books on a wooden table",
        description:
          "A slower read through Kahneman’s insights on decision-making; we pair short sections with everyday examples from participants.",
        instructors: ["Dr. Priya Nair", "Ibrahim"],
        startDate: "2026-06-03",
      },
      {
        title: "Attached",
        coverAlt: "Open book pages in soft light",
        description:
          "Attachment styles in relationships—guided by Levine & Heller—with ground rules for respectful, non-clinical discussion.",
        instructors: ["James Okonkwo, LCSW", "Dr. Leo Chen"],
        startDate: "2026-06-22",
      },
    ],
  },

  heroSlider: [
    {
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=960&q=80",
      alt: "Psychologist facilitating a discussion",
      quote: "Hearing how others read the same chapter changed everything—I show up to every Meet.",
      attribution: "Jordan, Psychochino participant",
    },
    {
      src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=960&q=80",
      alt: "Group conversation online",
      quote: "The facilitators keep it grounded in science but still human. It never feels like a lecture.",
      attribution: "Sam & Riley, book circle",
    },
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=960&q=80",
      alt: "Professional leading an online session",
      quote: "Google Meet made it easy to join from another city—I still feel part of the room.",
      attribution: "Alex T., regular attendee",
    },
    {
      src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=960&q=80",
      alt: "Smiling host at a video call",
      quote: "Ibrahim and the team set a tone where it is safe to ask basic questions.",
      attribution: "Morgan K., first-time guest",
    },
  ],

  blogPage: {
    kicker: "Psychochino",
    listLeadBefore: "All posts. You can return to the ",
    listLeadLink: "home page",
    listLeadAfter: " anytime.",
    readArticle: "Read article",
  },

  blogPost: {
    back: "All posts",
    backHome: "Back to Psychochino home",
  },

  blogBySlug: {
    "why-book-circles-work": {
      title: "Why psychology book circles work for busy minds",
      excerpt:
        "Short sessions on Google Meet, clear chapters, and facilitators who love questions make reading feel doable again.",
      coverAlt: "Open notebook and pen in soft light",
      body: [
        "We built Psychochino around a simple hunch: psychology books are easier to finish when you are not holding them alone. A weekly rhythm, a bit of structure, and facilitators who frame the text in plain language can turn a dense chapter into a conversation you look forward to.",
        "In our circles, Ibrahim and the team do not test you on the reading—we connect themes to your week, stress, and relationships, always in an educational, non-clinical tone. If you have skipped a chapter, you are still welcome in the room.",
      ],
    },
    "google-meet-tips-psychochino": {
      title: "Five ways to get comfortable on Google Meet (Psychochino edition)",
      excerpt:
        "From lighting to the mute button—small habits that make online book discussion feel as warm as a living-room chat.",
      coverAlt: "Laptop on a desk for a video call",
      body: [
        "You do not need a studio setup. A table near a window, headphones if your space is noisy, and joining two minutes early to check audio is enough. Most of us keep video on, but you can turn the camera off anytime you need a break—it does not change your seat in the group.",
        "The facilitators will repeat prompts so late joiners are not lost, and the Meet chat is there for side questions without interrupting the main thread.",
      ],
    },
    "how-we-pick-incoming-books": {
      title: "How Psychochino picks incoming books (and your voice matters)",
      excerpt: "A look at the criteria our psychologists use: accessibility, variety, and room for discussion—not exams.",
      coverAlt: "Stack of hardcover books",
      body: [
        "We look for non-fiction and select fiction when it opens clear psychological themes. A book might stay on the calendar for several weeks so nobody has to sprint through six hundred pages in a weekend.",
        "If you have a title you want the community to try, we read every suggestion. The final picks balance freshness with what our five facilitator psychologists feel confident supporting on Meet.",
      ],
    },
  },
};

export type MessageDictionary = typeof en;
