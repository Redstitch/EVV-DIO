export interface NavLink {
  label: string;
  href: string;
  featured?: boolean;
  external?: boolean;
}

export interface NavColumn {
  heading?: string;
  links: NavLink[];
  highlight?: {
    title: string;
    text: string;
    href: string;
    btnText: string;
  };
  cta?: {
    label: string;
    href: string;
  };
  note?: string;
}

export interface NavItem {
  key: string;
  label: string;
  href: string;
  alignRight?: boolean;
  menuWidth?: "wide" | "extra-wide" | "narrow";
  cols?: 2 | 3 | 4;
  children?: NavColumn[];
}

export const navItems: NavItem[] = [
  {
    key: "about",
    label: "About",
    href: "/about",
    menuWidth: "wide",
    cols: 3,
    children: [
      {
        heading: "Our Diocese",
        links: [
          { label: "Our Bishop", href: "/about/our-bishop", featured: true },
          { label: "Diocesan Leadership", href: "/about/leadership" },
          { label: "Our History", href: "/about/our-history" },
          { label: "Past Bishops", href: "/about/past-bishops" },
          { label: "Cathedral Library & Museum", href: "/about/cathedral-library" },
          { label: "Our Vision & Priorities", href: "/about/our-vision" },
          { label: "Monthly Dashboard", href: "/about/dashboard" },
          { label: "Diocesan Director Discussions", href: "/about/director-discussions" },
        ],
        highlight: {
          title: "Monthly Dashboard",
          text: "See how your support is making an impact across the diocese.",
          href: "/about/dashboard",
          btnText: "View Latest Report",
        },
      },
      {
        heading: "Offices & Resources",
        links: [
          { label: "Offices & Departments", href: "/about/offices" },
          { label: "Directories", href: "/about/directories" },
          { label: "Staff Directory", href: "/about/staff-directory" },
          { label: "Clergy Directory", href: "/about/clergy-directory" },
          { label: "Catholic Resources & Links", href: "/about/resources" },
          { label: "Careers", href: "/about/careers" },
          { label: "Contact Us", href: "/about/contact" },
          { label: "Media Inquiries", href: "/about/press-room" },
        ],
      },
      {
        heading: "Safety",
        links: [
          { label: "Safe Environment", href: "/about/safe-environment", featured: true },
          { label: "Report Abuse", href: "/about/report-abuse", featured: true },
        ],
      },
    ],
  },
  {
    key: "parishes",
    label: "Parishes & Mass",
    href: "/parishes",
    cols: 2,
    children: [
      {
        heading: "Find a Parish",
        links: [
          { label: "Parish Finder Map", href: "/parishes", featured: true },
          { label: "Mass Times", href: "/parishes/mass-times" },
          { label: "Watch Mass Online", href: "/parishes/watch-mass" },
        ],
        highlight: {
          title: "New to the Area?",
          text: "Welcome to SW Indiana. Find a Catholic community near you.",
          href: "/parishes",
          btnText: "Find Your Parish",
        },
      },
      {
        heading: "Browse by Deanery",
        links: [
          { label: "North Deanery", href: "/parishes/north-deanery" },
          { label: "South Deanery", href: "/parishes/south-deanery" },
          { label: "East Deanery", href: "/parishes/east-deanery" },
          { label: "West Deanery", href: "/parishes/west-deanery" },
        ],
        note: "45 parishes across 12 counties",
      },
    ],
  },
  {
    key: "faith",
    label: "Faith & Sacraments",
    href: "/faith",
    menuWidth: "wide",
    cols: 3,
    children: [
      {
        heading: "Start Here",
        links: [
          { label: "How to Become Catholic", href: "/faith/become-catholic", featured: true },
          { label: "Find a Parish", href: "/parishes" },
          { label: "Watch Mass Online", href: "/parishes/watch-mass" },
        ],
      },
      {
        heading: "The Sacraments",
        links: [
          { label: "Baptism", href: "/faith/baptism" },
          { label: "First Communion", href: "/faith/first-communion" },
          { label: "Confirmation", href: "/faith/confirmation" },
          { label: "Catholic Marriage", href: "/faith/marriage" },
          { label: "Annulments", href: "/faith/annulments" },
          { label: "Anointing of the Sick", href: "/faith/anointing" },
          { label: "Vocations", href: "/faith/vocations" },
        ],
      },
      {
        heading: "Prayer & Community",
        links: [
          { label: "Prayer & Worship Resources", href: "/faith/prayer-worship" },
          { label: "Church Calendar", href: "/faith/calendar" },
        ],
        cta: {
          label: "Explore All Sacraments",
          href: "/faith",
        },
      },
    ],
  },
  {
    key: "schools",
    label: "Catholic Schools",
    href: "/schools",
    menuWidth: "wide",
    cols: 3,
    children: [
      {
        heading: "Our Schools",
        links: [
          { label: "Catholic Schools Overview", href: "/schools", featured: true },
          { label: "Mission & Vision", href: "/schools/mission-vision" },
          { label: "Find a School / School Listings", href: "/schools/find" },
          { label: "Schools Map", href: "/schools/map" },
          { label: "Inquire About Enrollment", href: "/schools/enroll", featured: true },
        ],
        highlight: {
          title: "Catholic Schools",
          text: "26 schools providing faith-based education across SW Indiana.",
          href: "/schools",
          btnText: "Explore Our Schools",
        },
      },
      {
        heading: "Browse Schools",
        links: [
          { label: "High Schools", href: "/schools/high-schools" },
          { label: "Elementary Schools", href: "/schools/prek-5" },
        ],
      },
      {
        heading: "For Families & Staff",
        links: [
          { label: "Tuition Assistance & Affordability", href: "/schools/tuition" },
          { label: "Programs for Children with Special Needs", href: "/schools/special-needs" },
          { label: "Accreditation & Standards", href: "/schools/accreditation" },
          { label: "Student Health & Wellness", href: "/schools/health" },
          { label: "Teaching & Staff Careers", href: "/schools/careers" },
          { label: "For School Staff & Administrators", href: "/schools/staff-admin" },
        ],
      },
    ],
  },
  {
    key: "ministries",
    label: "Ministries",
    href: "/ministries",
    menuWidth: "wide",
    cols: 3,
    children: [
      {
        heading: "Family & Life",
        links: [
          { label: "Marriage & Family Life", href: "/ministries/marriage-family", featured: true },
          { label: "Respect for Life", href: "/ministries/respect-life" },
          { label: "Healing After Abortion", href: "/ministries/project-rachel" },
          { label: "Support for Expectant Mothers", href: "/ministries/expectant-mothers" },
          { label: "Men's Ministry", href: "/ministries/mens-ministry" },
          { label: "Senior Ministry", href: "/ministries/senior-ministry" },
        ],
      },
      {
        heading: "Youth & Education",
        links: [
          { label: "Youth & Young Adults", href: "/ministries/youth", featured: true },
          { label: "College Campus Ministry", href: "/ministries/campus-ministry" },
        ],
      },
      {
        heading: "Community & Outreach",
        links: [
          { label: "Hispanic Ministry", href: "/ministries/hispanic" },
          { label: "Disability & Inclusion", href: "/ministries/disability" },
          { label: "Special Needs Religious Ed (SPRED)", href: "/ministries/spred" },
          { label: "Prison & Jail Ministry", href: "/ministries/prison-ministry" },
          { label: "Social Justice", href: "/ministries/social-justice" },
          { label: "Catholic Charities", href: "https://catholiccharitiesevansville.org", external: true },
          { label: "Catholic Ministries Appeal", href: "/give/appeal" },
        ],
        cta: {
          label: "View All Ministries",
          href: "/ministries",
        },
      },
    ],
  },
  {
    key: "events",
    label: "Events",
    href: "/events",
    alignRight: true,
    menuWidth: "narrow",
    cols: 2,
    children: [
      {
        links: [
          { label: "Events Calendar", href: "/events", featured: true },
          { label: "Retreats", href: "/events/retreats" },
          { label: "Meeting Rooms & Spaces", href: "/events/spaces" },
          { label: "Watch Mass Online", href: "/parishes/watch-mass" },
        ],
        cta: {
          label: "See All Events",
          href: "/events",
        },
      },
    ],
  },
  {
    key: "message",
    label: "The Message",
    href: "/the-message",
    alignRight: true,
    cols: 2,
    children: [
      {
        heading: "News",
        links: [
          { label: "Latest Headlines", href: "/the-message", featured: true },
          { label: "Diocesan News", href: "/the-message/category/diocesan-news" },
          { label: "Local News", href: "/the-message/category/local-news" },
          { label: "US/World News", href: "/the-message/category/us-world-news" },
          { label: "Catholic Schools", href: "/the-message/category/school" },
          { label: "Special Features", href: "/the-message/category/special-features" },
          { label: "Seminarian Profiles", href: "/the-message/category/seminarian-profiles" },
        ],
      },
      {
        heading: "Columns & More",
        links: [
          { label: "Columns", href: "/the-message/category/columns", featured: true },
          { label: "Photo Galleries", href: "/the-message/category/photo-galleries" },
          { label: "Videos", href: "/the-message/category/video" },
          { label: "En Español", href: "/the-message/category/spanish" },
          { label: "About The Message", href: "/the-message/about" },
          { label: "Contact Us", href: "/about/contact" },
        ],
        highlight: {
          title: "Subscribe",
          text: "Get The Message delivered weekly.",
          href: "/the-message/subscribe",
          btnText: "Subscribe Now",
        },
      },
    ],
  },
];

export const giveItem: NavItem = {
  key: "give",
  label: "Give",
  href: "/give",
  alignRight: true,
  menuWidth: "wide",
  cols: 2,
  children: [
    {
      heading: "Ways to Give",
      links: [
        { label: "Why Give?", href: "/give", featured: true },
        { label: "Give Online", href: "/give#online", external: true },
        { label: "Give Stock or Securities", href: "/give/stock" },
        { label: "Planned & Legacy Giving", href: "/give/planned-giving" },
      ],
      highlight: {
        title: "Give Online Now",
        text: "Secure giving through OSV — one-time or recurring.",
        href: "/give#online",
        btnText: "Donate",
      },
    },
    {
      heading: "Campaigns & Impact",
      links: [
        { label: "Catholic Ministries Appeal", href: "/give/appeal" },
        { label: "Donor Recognition (Deo Gratias Society)", href: "/give/donor-recognition" },
        { label: "Annual Impact Report", href: "/give/impact-report" },
        { label: "Stories of Impact", href: "/give/stories" },
      ],
      cta: {
        label: "How Your Gift Makes a Difference",
        href: "/give/how-your-gift-makes-a-difference",
      },
    },
  ],
};
