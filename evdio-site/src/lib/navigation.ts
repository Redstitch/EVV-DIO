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
          { label: "Our Vision & Priorities", href: "/about/our-vision" },
          { label: "Monthly Dashboard", href: "/about/dashboard" },
          { label: "Official Statements & Decrees", href: "/about/statements" },
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
          { label: "Staff Directory", href: "/about/staff-directory" },
          { label: "Clergy Directory", href: "/about/clergy-directory" },
          { label: "Parish Directory", href: "/parishes" },
          { label: "Catholic Resources & Links", href: "/about/resources" },
          { label: "Careers", href: "/about/careers" },
          { label: "Contact Us", href: "/about/contact" },
          { label: "Press Room", href: "/about/press-room" },
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
          { label: "Parish Directory", href: "/parishes/directory" },
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
        heading: "Encounter",
        links: [
          { label: "How to Become Catholic", href: "/faith/become-catholic", featured: true },
          { label: "Find a Parish", href: "/parishes" },
          { label: "Watch Mass Online", href: "/parishes/watch-mass" },
        ],
      },
      {
        heading: "Deepen",
        links: [
          { label: "Baptism", href: "/faith/baptism" },
          { label: "First Communion", href: "/faith/first-communion" },
          { label: "Confirmation", href: "/faith/confirmation" },
          { label: "Catholic Marriage", href: "/faith/marriage" },
          { label: "Anointing of the Sick", href: "/faith/anointing" },
          { label: "Vocations", href: "/faith/vocations" },
          { label: "Becoming a Deacon", href: "/faith/deacon" },
        ],
      },
      {
        heading: "Engage",
        links: [
          { label: "Prayer & Worship Resources", href: "/faith/prayer-worship" },
          { label: "Church Calendar", href: "/faith/calendar" },
          { label: "Retreats", href: "/events/retreats" },
          { label: "Young Adult Community", href: "/ministries/youth" },
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
    cols: 2,
    children: [
      {
        heading: "Our Schools",
        links: [
          { label: "Catholic Schools Overview", href: "/schools", featured: true },
          { label: "Find a School / School Listings", href: "/schools/find" },
          { label: "Schools Map", href: "/schools/map" },
          { label: "Enroll Your Child", href: "/schools/enroll" },
        ],
        highlight: {
          title: "Catholic Schools",
          text: "26 schools providing faith-based education across SW Indiana.",
          href: "/schools",
          btnText: "Explore Our Schools",
        },
      },
      {
        heading: "For Families & Staff",
        links: [
          { label: "Tuition Assistance & Affordability", href: "/schools/tuition" },
          { label: "Programs for Children with Special Needs", href: "/schools/special-needs" },
          { label: "Accreditation & Standards", href: "/schools/accreditation" },
          { label: "Student Health & Wellness", href: "/schools/health" },
          { label: "Teaching & Staff Careers", href: "/schools/careers" },
        ],
      },
    ],
  },
  {
    key: "ministries",
    label: "Ministries",
    href: "/ministries",
    menuWidth: "extra-wide",
    cols: 4,
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
          { label: "Religious Education", href: "/ministries/religious-education" },
          { label: "Special Needs Religious Ed", href: "/ministries/spred" },
          { label: "Scholarships & Financial Aid", href: "/ministries/scholarships" },
        ],
      },
      {
        heading: "Community & Outreach",
        links: [
          { label: "Ministerio Hispano", href: "/ministries/hispanic" },
          { label: "Disability & Inclusion", href: "/ministries/disability" },
          { label: "Prison & Jail Ministry", href: "/ministries/prison-ministry" },
          { label: "Social Justice", href: "/ministries/social-justice" },
          { label: "Mission & Outreach", href: "/ministries/mission-outreach" },
          { label: "Catholic Charities", href: "https://catholiccharitiesevansville.org", external: true },
        ],
      },
      {
        heading: "Giving & Support",
        links: [
          { label: "Donate", href: "/give" },
          { label: "Catholic Ministries Appeal", href: "/give/appeal" },
          { label: "Planned & Legacy Giving", href: "/give/planned-giving" },
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
        heading: "News & Stories",
        links: [
          { label: "Latest Headlines", href: "/the-message", featured: true },
          { label: "Diocesan News", href: "/the-message/diocesan-news" },
          { label: "Local & Regional News", href: "/the-message/local-news" },
          { label: "National & World News", href: "/the-message/national-news" },
          { label: "Faith & Spirituality", href: "/the-message/faith-spirituality" },
          { label: "Special Features", href: "/the-message/features" },
        ],
      },
      {
        heading: "Columns & More",
        links: [
          { label: "Opinion & Columns", href: "/the-message/columns" },
          { label: "Movie Reviews", href: "/the-message/reviews" },
          { label: "Archives", href: "/the-message/archives" },
          { label: "About The Message", href: "/the-message/about" },
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
