export interface WorshipSite {
  church: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface StaffMember {
  title: string;
  name: string;
}

export interface MassTime {
  day: string;
  time: string;
}

export interface SchoolInfo {
  name: string;
  address?: string;
  principal?: string;
  phone?: string;
}

export interface ParishDetail {
  slug: string;
  parish: string;
  city: string;
  deanery: "South" | "North" | "East" | "West";
  established: string;
  history: string;
  pastor: string;
  staff: StaffMember[];
  massSchedule: MassTime[];
  worshipSites: WorshipSite[];
  phone: string;
  fax?: string;
  email?: string;
  website?: string;
  school?: SchoolInfo;
}

export const parishDetails: ParishDetail[] = [
  // ─── SOUTH DEANERY ───────────────────────────────────────────────

  {
    slug: "st-benedict-cathedral",
    parish: "St. Benedict Cathedral",
    city: "Evansville",
    deanery: "South",
    established: "1912",
    history: "Established in 1912 and dedicated as St. Benedict Cathedral in 1999, the parish is the Cathedral of the Diocese of Evansville.",
    pastor: "Very Rev. Alex Zenthoefer, D. Min.",
    staff: [
      { title: "Parochial Vicar", name: "Rev. Tyler Underhill" },
      { title: "Deacon", name: "David Rice" },
      { title: "Pastoral Associate", name: "Sister Pat McGuire, O.S.B." },
      { title: "Business Manager", name: "Angie Wellmeier" },
      { title: "Director of Discipleship", name: "Pete Barry" },
      { title: "Music Director, Organist", name: "Jeremy Korba" },
      { title: "Choir Director", name: "Jennifer Korba" },
      { title: "Youth & Young Adult Minister", name: "Catherine Shockley" },
      { title: "Administrative Assistant", name: "Kelley Knies" },
    ],
    massSchedule: [
      { day: "Monday–Saturday", time: "9 a.m." },
      { day: "Saturday Anticipation", time: "4:30 p.m." },
      { day: "Sunday", time: "8 a.m., 10:30 a.m." },
    ],
    worshipSites: [
      { church: "St. Benedict Cathedral", address: "1328 Lincoln Avenue", city: "Evansville", state: "IN", zip: "47714" },
    ],
    phone: "(812) 425-3369",
    fax: "(812) 425-3378",
    website: "https://www.saintbenedictcathedral.org",
    school: { name: "St. Benedict Cathedral School", address: "530 South Harlan Avenue, 47714", principal: "Megan Wright", phone: "(812) 425-4596" },
  },

  {
    slug: "all-saints-evansville",
    parish: "All Saints",
    city: "Evansville",
    deanery: "South",
    established: "2015",
    history: "St. Anthony of Padua, established in 1888, merged with St. Joseph Parish on July 1, 2015, and took the name All Saints Parish.",
    pastor: "Very Rev. Zach Etienne",
    staff: [
      { title: "Moderator", name: "Rev. Zach Etienne" },
      { title: "Sacramental Ministers", name: "Rev. John Davidson, Rev. Steve Lintzenich" },
      { title: "Pastoral Life Coordinator", name: "Sharon Vogler" },
      { title: "Director of Ministry Development", name: "Tom Bogenschutz" },
      { title: "Justice Minister", name: "Brenda Meyer" },
      { title: "Business Manager/Pastoral Associate", name: "Kristi Wagner" },
      { title: "Music Coordinator", name: "Fatma Seib" },
    ],
    massSchedule: [
      { day: "Tuesday & Thursday", time: "7 a.m. (St. Anthony Chapel)" },
      { day: "Saturday", time: "4 p.m. (St. Joseph Church)" },
      { day: "Sunday", time: "10:30 a.m., 5 p.m. (St. Anthony Church)" },
    ],
    worshipSites: [
      { church: "St. Anthony of Padua Church", address: "704 N. First Avenue", city: "Evansville", state: "IN", zip: "47710" },
      { church: "St. Joseph Church", address: "600 E. Virginia Street", city: "Evansville", state: "IN", zip: "47711" },
    ],
    phone: "(812) 423-5209",
    website: "http://allsaintsevansville.org",
  },

  {
    slug: "annunciation-of-the-lord",
    parish: "Annunciation of the Lord",
    city: "Evansville",
    deanery: "South",
    established: "2014",
    history: "Annunciation of the Lord Parish was created by the merger July 1, 2014, of Christ the King Parish (est. 1942) and Holy Spirit Parish (est. 1952).",
    pastor: "Rev. Benny A. Chacko",
    staff: [
      { title: "Associate Pastor", name: "Rev. John Pfister" },
      { title: "Haitian Priest", name: "Rev. Johnson Vil" },
      { title: "Director of Operations", name: "Tom Falkenstein" },
      { title: "Parish Catechetical Leader", name: "Anne Baumgart" },
      { title: "Youth Ministry", name: "Ashlee Owens" },
      { title: "OCIA Coordinator", name: "Dr. William Ante" },
      { title: "Family Evangelization", name: "Peggy Vogt" },
      { title: "Music Director", name: "Anna Creek" },
      { title: "Business Manager", name: "Krystal Smith" },
    ],
    massSchedule: [
      { day: "Wednesday (school year)", time: "8:30 a.m. (Holy Spirit)" },
      { day: "Saturday Anticipation", time: "4 p.m. (Holy Spirit)" },
      { day: "Sunday", time: "6 a.m., 7:30 a.m., 11 a.m. (Christ the King)" },
      { day: "Sunday", time: "9 a.m., 11 a.m. Creole (Holy Spirit)" },
    ],
    worshipSites: [
      { church: "Christ the King Church", address: "3010 E. Chandler Avenue", city: "Evansville", state: "IN", zip: "47714" },
      { church: "Holy Spirit Church", address: "1800 S. Lodge Avenue", city: "Evansville", state: "IN", zip: "47714" },
    ],
    phone: "(812) 476-3061",
    fax: "(812) 476-3062",
    website: "https://www.annunciationevv.org",
    school: { name: "Christ the King School", address: "3101 Bayard Park Drive, 47714", principal: "Matt Moore", phone: "(812) 476-1792" },
  },

  {
    slug: "good-shepherd-evansville",
    parish: "Good Shepherd",
    city: "Evansville",
    deanery: "South",
    established: "2016",
    history: "Good Shepherd Parish was formed through the July 1, 2016, merger of Good Shepherd Church and School and St. Theresa Church and School. St. Theresa was founded in 1947 and Good Shepherd in 1955.",
    pastor: "Very Rev. Zach Etienne",
    staff: [
      { title: "Deacon", name: "Dan DeCastra" },
      { title: "Coordinator of Worship", name: "Jenny Stuart" },
      { title: "Formation Coordinator", name: "Sue Kroupa" },
      { title: "Youth Ministry Coordinator", name: "Wade Lovell" },
      { title: "Finance Officer", name: "Tim Seprodi" },
      { title: "Office Coordinator", name: "Dianne Thomas" },
    ],
    massSchedule: [
      { day: "Mon, Wed, Thu", time: "7:40 a.m." },
      { day: "Tuesday", time: "6 p.m." },
      { day: "Saturday Anticipation", time: "4:30 p.m." },
      { day: "Sunday", time: "7:30 a.m., 10:30 a.m." },
    ],
    worshipSites: [
      { church: "Good Shepherd Church", address: "2301 N. Stockwell Road", city: "Evansville", state: "IN", zip: "47715" },
    ],
    phone: "(812) 477-5405",
    website: "https://www.gsparish.org",
    school: { name: "Good Shepherd School", address: "2301 North Stockwell Road, 47715", principal: "Kristen Girten", phone: "(812) 476-4477" },
  },

  {
    slug: "holy-redeemer-evansville",
    parish: "Holy Redeemer",
    city: "Evansville",
    deanery: "South",
    established: "1952",
    history: "Holy Redeemer, established in 1952, is in the South Deanery.",
    pastor: "Very Rev. Jason Gries",
    staff: [
      { title: "Deacon", name: "Kevin Bach, Thomas Cervone" },
      { title: "Pastoral Associate", name: "Anne Stofleth-Martin" },
      { title: "Coordinator of Faith Formation", name: "Emily Hamilton" },
      { title: "Coordinator of Youth Ministry", name: "Mary Jo Keen" },
      { title: "Director of Finance and Operations", name: "Lori Hurt" },
      { title: "Principal", name: "Jessica Zavala" },
      { title: "Communications Coordinator", name: "Liz Campbell" },
    ],
    massSchedule: [
      { day: "Tuesday & Thursday", time: "8 a.m." },
      { day: "Wednesday", time: "6:30 p.m." },
      { day: "Saturday Anticipation", time: "5 p.m." },
      { day: "Sunday", time: "9 a.m." },
    ],
    worshipSites: [
      { church: "Holy Redeemer Church", address: "918 W. Mill Road", city: "Evansville", state: "IN", zip: "47710" },
    ],
    phone: "(812) 424-8344",
    fax: "(812) 424-7166",
    website: "https://www.holyredeemerchurch.org",
    school: { name: "Holy Redeemer School", address: "918 West Mill Road, 47710", principal: "Jessica Zavala", phone: "(812) 422-3688" },
  },

  {
    slug: "holy-rosary-evansville",
    parish: "Holy Rosary",
    city: "Evansville",
    deanery: "South",
    established: "1950",
    history: "Established as Most Holy Rosary of the Blessed Virgin Mary in 1950. Holy Rosary Parish and Nativity Parish merged on July 1, 2016.",
    pastor: "Rev. Bernie Etienne",
    staff: [
      { title: "Parochial Vicar", name: "Rev. Martin Estrada" },
      { title: "Deacons", name: "Chris Borowiecki, Jose Garrido, Jorge Melendres" },
      { title: "Pastoral Associate", name: "Sister Mary Mundy, S.P." },
      { title: "Coordinator of Hispanic Ministry", name: "Sandra Bazaldua" },
      { title: "Director of Operations", name: "Elizabeth Flatt" },
      { title: "Director of Religious Education", name: "Carol Ann Gaddis" },
      { title: "Director of Music", name: "Nancy Mills" },
    ],
    massSchedule: [
      { day: "Mon, Wed, Thu, Fri", time: "8 a.m." },
      { day: "Tuesday", time: "6 p.m." },
      { day: "Wednesday", time: "6 p.m. (Spanish)" },
      { day: "Saturday Anticipation", time: "4:30 p.m." },
      { day: "Sunday", time: "7:30 a.m., 9 a.m., 11 a.m., 12:30 p.m. (Spanish)" },
    ],
    worshipSites: [
      { church: "Holy Rosary Church", address: "1301 S. Green River Road", city: "Evansville", state: "IN", zip: "47715" },
    ],
    phone: "(812) 477-8923",
    fax: "(812) 471-7226",
    website: "https://www.hrparish.org",
    school: { name: "Holy Rosary School", address: "1303 South Green River Road, 47715", principal: "Joan Fredrich", phone: "(812) 477-2271" },
  },

  {
    slug: "resurrection-evansville",
    parish: "Resurrection",
    city: "Evansville",
    deanery: "South",
    established: "1954",
    history: "Resurrection, established in 1954, is in the South Deanery.",
    pastor: "Rev. Jerry Pratt",
    staff: [
      { title: "Pastoral Associate / Deacon", name: "Ed Walker" },
      { title: "Director of Operations", name: "Glenn A. Smith" },
      { title: "Director of Faith Formation", name: "Annie-Rose Keith" },
      { title: "Business Manager", name: "Beth Hebbeler" },
      { title: "Director of Communications", name: "Lindsey Ziliak" },
      { title: "Music Director", name: "Jennifer Schmitz" },
    ],
    massSchedule: [
      { day: "Mon, Wed, Fri", time: "7:30 a.m." },
      { day: "Saturday Anticipation", time: "5 p.m." },
      { day: "Sunday", time: "8 a.m., 10:30 a.m." },
    ],
    worshipSites: [
      { church: "Resurrection Church", address: "5301 New Harmony Road", city: "Evansville", state: "IN", zip: "47720" },
    ],
    phone: "(812) 963-3121",
    website: "https://www.resurrectionevv.com",
    school: { name: "Resurrection School", address: "5301 New Harmony Road, 47720", principal: "Courtney Ethridge", phone: "(812) 963-6148" },
  },

  {
    slug: "st-boniface-evansville",
    parish: "St. Boniface",
    city: "Evansville",
    deanery: "South",
    established: "2014",
    history: "The new St. Boniface Parish was created by the merger of St. Agnes (est. 1892), Sacred Heart (est. 1885), and the existing St. Boniface (est. 1881) on July 1, 2014. The parish runs Westside Catholic School.",
    pastor: "Rev. Christopher Droste",
    staff: [
      { title: "Priest in Residence", name: "Rev. Lowell Will" },
      { title: "Deacon", name: "Robert Mattingly" },
      { title: "Director of Operations", name: "Jamie Wicks" },
      { title: "PCL, Youth Ministry", name: "Jenny Mayer" },
    ],
    massSchedule: [
      { day: "Tuesday", time: "8 a.m. (St. Boniface)" },
      { day: "Thursday", time: "8 a.m. (St. Agnes)" },
      { day: "Saturday", time: "8 a.m. in Grotto (St. Boniface)" },
      { day: "Saturday Anticipation", time: "4:30 p.m. (St. Agnes)" },
      { day: "Sunday", time: "7:30 a.m., 12 p.m. Latin (Sacred Heart)" },
      { day: "Sunday", time: "10 a.m. (St. Boniface)" },
    ],
    worshipSites: [
      { church: "St. Boniface Church", address: "418 N. Wabash Avenue", city: "Evansville", state: "IN", zip: "47712" },
      { church: "St. Agnes Church", address: "1600 Glendale Avenue", city: "Evansville", state: "IN", zip: "47712" },
      { church: "Sacred Heart of Jesus Church", address: "2701 W. Franklin Street", city: "Evansville", state: "IN", zip: "47712" },
    ],
    phone: "(812) 423-1721",
    email: "saintboniface@evdio.org",
    website: "https://www.saintbonifaceparish.org",
    school: { name: "Westside Catholic School", address: "St. Agnes Campus PK-4: 1620 Glendale Ave; St. Boniface Campus 5-8: 2031 W. Michigan", principal: "Sister Catherine Stewart, O.P.", phone: "(812) 422-1014" },
  },

  {
    slug: "sts-mary-and-john-evansville",
    parish: "Sts. Mary and John",
    city: "Evansville",
    deanery: "South",
    established: "2014",
    history: "Sts. Mary and John Parish was created by the merger on July 1, 2014, of St. Mary Parish (est. 1867) and St. John Parish, and by the merger on April 27, 2015, with Holy Trinity Parish.",
    pastor: "Rev. Eugene Schmitt",
    staff: [
      { title: "Deacon", name: "Dennis Russell" },
      { title: "Office Manager", name: "Kimberly Kuehn" },
      { title: "Director of Communication and Membership", name: "Lee Griggs" },
      { title: "Director of Outreach", name: "Pat Fitzsimmons" },
      { title: "Music Director", name: "Tina Schutte" },
      { title: "Youth Coordinator", name: "Marcela Guivas" },
    ],
    massSchedule: [
      { day: "Mon, Tue, Thu, Fri", time: "12:05 p.m." },
      { day: "Saturday Anticipation", time: "4 p.m." },
      { day: "Sunday", time: "10 a.m., 4 p.m." },
    ],
    worshipSites: [
      { church: "St. Mary Church", address: "613 Cherry Street", city: "Evansville", state: "IN", zip: "47713" },
    ],
    phone: "(812) 425-1577",
    fax: "(812) 426-1416",
    website: "https://www.stsmaryandjohnparish.org",
  },

  {
    slug: "st-clement-boonville",
    parish: "St. Clement",
    city: "Boonville",
    deanery: "South",
    established: "2014",
    history: "St. Clement Parish, established in Boonville in 1880, is a new parish created by the merger on July 1, 2014, with St. Rupert Parish in Red Brush. The parish dedicated a new church in 2010.",
    pastor: "Rev. Ron Kreilein",
    staff: [
      { title: "Deacons", name: "Thomas Lambert, Dave Seibert" },
      { title: "DRE", name: "Jana Jenkins" },
      { title: "Youth Minister", name: "Shanon Marchand" },
    ],
    massSchedule: [
      { day: "Wednesday", time: "6 p.m. (St. Clement)" },
      { day: "Thursday & Friday", time: "8 a.m. (St. Clement)" },
      { day: "Tuesday", time: "6 p.m. (St. Rupert)" },
      { day: "Saturday Anticipation", time: "5 p.m. (St. Clement)" },
      { day: "Sunday", time: "7:30 a.m. (St. Rupert), 10:30 a.m. (St. Clement)" },
    ],
    worshipSites: [
      { church: "St. Clement Church", address: "422 E. Sycamore Street", city: "Boonville", state: "IN", zip: "47601" },
      { church: "St. Rupert Church", address: "1244 W. Red Brush Road", city: "Newburgh", state: "IN", zip: "47630" },
    ],
    phone: "(812) 897-4653",
    website: "https://stclementparish.weconnect.com",
  },

  {
    slug: "st-john-the-evangelist-daylight",
    parish: "St. John the Evangelist",
    city: "Daylight",
    deanery: "South",
    established: "1868",
    history: "The parish of St. John the Evangelist, established in Elberfeld in 1868, opened a new church in Daylight in 1987.",
    pastor: "Rev. Christopher Forler",
    staff: [
      { title: "Parochial Vicar", name: "Rev. Aaron Herrenbruck" },
      { title: "Deacon", name: "Vincent Bernardin, Lonny Davis" },
      { title: "Parish Catechetical Leader and Youth Minister", name: "Mary Shetler" },
      { title: "Director of Music and Liturgy", name: "Jason Allen" },
      { title: "Parish Office Manager", name: "Berny Heitzman" },
    ],
    massSchedule: [
      { day: "Monday", time: "12 p.m." },
      { day: "Tuesday & Thursday", time: "8 a.m." },
      { day: "Wednesday", time: "5:30 p.m." },
      { day: "Friday", time: "9 a.m." },
      { day: "Saturday Anticipation", time: "4 p.m." },
      { day: "Sunday", time: "7:15 a.m., 10 a.m." },
    ],
    worshipSites: [
      { church: "St. John the Evangelist Church", address: "5301 Daylight Drive", city: "Evansville", state: "IN", zip: "47725" },
    ],
    phone: "(812) 867-3718",
    website: "https://www.catholicdaylight.org",
    school: { name: "Daylight Discovery Preschool", address: "5301 Daylight Drive, 47725", principal: "Traci Davis", phone: "(812) 867-3718" },
  },

  {
    slug: "st-john-the-baptist-newburgh",
    parish: "St. John the Baptist",
    city: "Newburgh",
    deanery: "South",
    established: "1866",
    history: "St. John the Baptist Church, founded in 1866, is in the South Deanery. Newburgh is in Warrick County.",
    pastor: "Rev. Claude Burns",
    staff: [
      { title: "Deacons", name: "Anthony Schapker, Mark Thieman" },
      { title: "Director of Operations", name: "Brian Mitchell" },
      { title: "Coordinator of Religious Education", name: "Marty Horning" },
      { title: "Youth Ministry Coordinator", name: "Olivia Phipps" },
      { title: "Director of Music and Liturgy Coordinator", name: "James Lutz" },
      { title: "Director of Communications and Marketing", name: "Summer Wright" },
    ],
    massSchedule: [
      { day: "Tue, Wed, Fri", time: "7 a.m." },
      { day: "Thursday", time: "6:30 p.m." },
      { day: "Saturday", time: "9 a.m." },
      { day: "Saturday Anticipation", time: "5 p.m." },
      { day: "Sunday", time: "7 a.m., 8:45 a.m., 11 a.m." },
    ],
    worshipSites: [
      { church: "St. John the Baptist Church", address: "625 Frame Road", city: "Newburgh", state: "IN", zip: "47630" },
    ],
    phone: "(812) 490-1000",
    fax: "(812) 490-1010",
    website: "https://www.sjbnewburgh.org",
    school: { name: "St. John the Baptist School", address: "725 Frame Road, 47630", principal: "Katie Hubiak", phone: "(812) 490-2000" },
  },

  // ─── NORTH DEANERY ────────────────────────────────────────────────

  {
    slug: "st-philip-neri-bicknell",
    parish: "St. Philip Neri",
    city: "Bicknell",
    deanery: "North",
    established: "1908",
    history: "St. Philip Neri Parish, in Knox County, was established in 1908. It shares a priest with St. Francis Xavier Parish in Vincennes.",
    pastor: "Rev. Tony Ernst",
    staff: [
      { title: "Parochial Vicar", name: "Rev. Caleb Scherzinger, Rev. Clint Johnson" },
      { title: "CRE", name: "Carrie Horton" },
      { title: "Music Director", name: "Joyce Villwock" },
      { title: "Parish Secretary/Bookkeeper", name: "Rose McGuire" },
    ],
    massSchedule: [
      { day: "Tuesday", time: "6 p.m." },
      { day: "Sunday", time: "9 a.m." },
    ],
    worshipSites: [
      { church: "St. Philip Neri Church", address: "605 W. Fourth Street", city: "Bicknell", state: "IN", zip: "47512" },
    ],
    phone: "(812) 735-4069",
    email: "philipneri4069@gmail.com",
    website: "https://www.stphilipneribicknell.org",
  },

  {
    slug: "holy-name-bloomfield",
    parish: "Holy Name",
    city: "Bloomfield",
    deanery: "North",
    established: "1959",
    history: "Holy Name Parish was formally established in 1959 as Holy Name of Jesus Church. Bloomfield is in Greene County. In 1983, Holy Name became the first parish in the diocese to be led by a pastoral life coordinator.",
    pastor: "Rev. Simon Natha",
    staff: [
      { title: "Deacon", name: "Albert Frabutt" },
      { title: "CRE", name: "Kari Hale" },
      { title: "RCIA Coordinator", name: "Deacon Albert Frabutt" },
      { title: "Secretary", name: "Sherry Gilreath" },
    ],
    massSchedule: [
      { day: "Wednesday", time: "6 p.m." },
      { day: "Sunday", time: "9 a.m." },
    ],
    worshipSites: [
      { church: "Holy Name Church", address: "700 Lincoln Drive", city: "Bloomfield", state: "IN", zip: "47424" },
    ],
    phone: "(812) 847-7821",
  },

  {
    slug: "st-joan-of-arc-jasonville",
    parish: "St. Joan of Arc",
    city: "Jasonville",
    deanery: "North",
    established: "1908",
    history: "St. Joan of Arc was established as a mission in 1902, and as a parish in 1908, in the Greene County community of Jasonville. The parish shares a pastor with St. Mary Parish in Sullivan.",
    pastor: "Rev. Suresh Bakka",
    staff: [
      { title: "Deacon", name: "Brian McCammon" },
      { title: "RCIA Coordinator", name: "Deacon Brian McCammon" },
      { title: "Secretary", name: "Jeanie Whiteman" },
    ],
    massSchedule: [
      { day: "Sunday", time: "5 p.m." },
    ],
    worshipSites: [
      { church: "St. Joan of Arc Church", address: "327 West McKinley Street", city: "Jasonville", state: "IN", zip: "47438" },
    ],
    phone: "(812) 268-4088",
    website: "https://www.stmarys-sullivan.com",
  },

  {
    slug: "st-peter-linton",
    parish: "St. Peter",
    city: "Linton",
    deanery: "North",
    established: "1901",
    history: "St. Peter Parish was established in Linton in 1901. Linton is in Greene County. St. Peter shares a pastor with Holy Name Parish in Bloomfield.",
    pastor: "Rev. Simon Natha",
    staff: [
      { title: "Deacon", name: "Albert Frabutt" },
      { title: "CRE", name: "Kari Hale" },
      { title: "Music Director", name: "Donna Lannan" },
      { title: "Secretary", name: "Sherry Gilreath" },
    ],
    massSchedule: [
      { day: "Tuesday", time: "6 p.m." },
      { day: "Thursday & Friday", time: "8 a.m." },
      { day: "Saturday Anticipation", time: "5 p.m." },
      { day: "Sunday", time: "11 a.m." },
    ],
    worshipSites: [
      { church: "St. Peter Church", address: "489 E Street N.E.", city: "Linton", state: "IN", zip: "47441" },
    ],
    phone: "(812) 847-7821",
  },

  {
    slug: "st-john-loogootee",
    parish: "St. John",
    city: "Loogootee",
    deanery: "North",
    established: "2014",
    history: "St. John Parish was created July 1, 2014, by the merger of St. Joseph Church in Bramble, St. Mary Church in Shoals, St. Martin Church in Whitfield, and the existing St. John Church (founded as a mission in 1857, parish in 1859).",
    pastor: "Very Rev. J. Kenneth Walker, MCL, JCL",
    staff: [
      { title: "Deacon", name: "William R. Consley" },
      { title: "PCL and Youth Ministry", name: "Ashton H. Kahle" },
      { title: "Business Manager", name: "Vicki Strange" },
      { title: "Administrative Assistant to the Pastor", name: "Adam Strange" },
    ],
    massSchedule: [
      { day: "Tuesday", time: "7 p.m." },
      { day: "Wednesday", time: "12 p.m." },
      { day: "Thursday & Friday", time: "9 a.m." },
      { day: "Saturday Anticipation", time: "5 p.m." },
      { day: "Sunday", time: "8 a.m., 10 a.m., 4 p.m." },
    ],
    worshipSites: [
      { church: "St. John Church", address: "408 Church Street", city: "Loogootee", state: "IN", zip: "47553" },
      { church: "St. Joseph Church, Bramble", address: "Bramble", city: "Loogootee", state: "IN", zip: "47553" },
      { church: "St. Mary Church, Shoals", address: "Shoals", city: "Shoals", state: "IN", zip: "47581" },
      { church: "St. Martin Church, Whitfield", address: "Whitfield", city: "Loogootee", state: "IN", zip: "47553" },
    ],
    phone: "(812) 295-2225",
    website: "https://www.stjohnloogootee.com",
  },

  {
    slug: "st-peter-montgomery",
    parish: "St. Peter",
    city: "Montgomery",
    deanery: "North",
    established: "2014",
    history: "St. Peter Church, established in 1818, is one of the oldest parishes in the diocese. St. Peter Parish was created by the merger of All Saints Parish in Cannelburg and the existing St. Peter on July 1, 2014.",
    pastor: "Rev. Stephen McGinnis",
    staff: [
      { title: "Religious Education and Youth Ministry", name: "Jami Snyder" },
      { title: "Music Director", name: "Angie Traylor" },
      { title: "Parish Secretary", name: "Patty Fuhs" },
    ],
    massSchedule: [
      { day: "Wednesday", time: "8 a.m." },
      { day: "Thursday", time: "Noon" },
      { day: "Friday", time: "8 a.m." },
      { day: "Saturday Anticipation", time: "5:30 p.m." },
      { day: "Sunday", time: "7:45 a.m., 9:30 a.m." },
      { day: "Tuesday", time: "6 p.m. (All Saints, Cannelburg)" },
    ],
    worshipSites: [
      { church: "St. Peter Church", address: "305 N. Second Street", city: "Montgomery", state: "IN", zip: "47558" },
      { church: "All Saints Church, Cannelburg", address: "100 W. Third Street", city: "Cannelburg", state: "IN", zip: "47519" },
    ],
    phone: "(812) 486-3149",
    email: "montstpeter@gmail.com",
    website: "https://www.stpetermont.org",
  },

  {
    slug: "st-mary-sullivan",
    parish: "St. Mary",
    city: "Sullivan",
    deanery: "North",
    established: "1867",
    history: "St. Mary Church, the only parish in Sullivan County, was established in 1867. St. Mary shares a pastor with St. Joan of Arc Church in Jasonville.",
    pastor: "Rev. Suresh Bakka",
    staff: [
      { title: "Deacon", name: "Brian McCammon" },
      { title: "Secretary", name: "Jeanie Whiteman" },
      { title: "Bookkeeper", name: "Pattie Mayfield" },
    ],
    massSchedule: [
      { day: "Tuesday", time: "6 p.m." },
      { day: "Wed, Thu, Fri", time: "7:35 a.m." },
      { day: "Saturday Anticipation", time: "4:30 p.m." },
      { day: "Sunday", time: "9 a.m." },
    ],
    worshipSites: [
      { church: "St. Mary Church", address: "105 E. Jackson Street", city: "Sullivan", state: "IN", zip: "47882" },
    ],
    phone: "(812) 268-4088",
    website: "https://www.stmarys-sullivan.com",
  },

  {
    slug: "st-francis-xavier-vincennes",
    parish: "St. Francis Xavier",
    city: "Vincennes",
    deanery: "North",
    established: "1732",
    history: "The Basilica of St. Francis Xavier (the Old Cathedral) was founded in 1732 and served as the Cathedral for the Diocese of Vincennes. It is the oldest parish in the diocese. On July 1, 2016, Sacred Heart, St. John the Baptist, St. Thomas the Apostle and St. Vincent de Paul parishes merged with St. Francis Xavier to form the current parish.",
    pastor: "Rev. Tony Ernst",
    staff: [
      { title: "Parochial Vicar", name: "Rev. Caleb Scherzinger" },
      { title: "Parochial Vicar", name: "Rev. Clint Johnson" },
      { title: "Deacons", name: "Reynaldo Carandang, Ronald Cardinal, Pat Herman, Kevin Kilmer, Cletus Yochum" },
      { title: "CRE", name: "Patricia Earley" },
      { title: "Youth Coordinator", name: "Megan Hoffman" },
      { title: "Secretary", name: "Karen Sampson" },
      { title: "Bookkeeper", name: "Kathy Lane" },
    ],
    massSchedule: [
      { day: "Tuesday", time: "8:10 a.m. (Basilica)" },
      { day: "Wednesday", time: "6 p.m. (Basilica), 8:10 a.m. (Sacred Heart)" },
      { day: "Thursday", time: "6 p.m. (St. Thomas), 8:10 a.m. (St. Vincent de Paul)" },
      { day: "Friday", time: "Noon (Basilica), 8:10 a.m. (St. John Baptist)" },
      { day: "Saturday", time: "7:30 a.m. (Basilica)" },
      { day: "Saturday Anticipation", time: "5 p.m. (St. John Baptist)" },
      { day: "Sunday", time: "8 a.m. Spanish (Basilica), 7:30 a.m. & 11 a.m. (St. John Baptist), 9:30 a.m. (Sacred Heart), 5:30 p.m. (Basilica)" },
    ],
    worshipSites: [
      { church: "Minor Basilica of St. Francis Xavier", address: "205 Church Street", city: "Vincennes", state: "IN", zip: "47591" },
      { church: "Sacred Heart Church", address: "2004 N. Second Street", city: "Vincennes", state: "IN", zip: "47591" },
      { church: "St. John the Baptist Church", address: "803 Main Street", city: "Vincennes", state: "IN", zip: "47591" },
      { church: "St. Thomas the Apostle Church", address: "6268 S. St. Thomas Road", city: "Vincennes", state: "IN", zip: "47591" },
      { church: "St. Vincent de Paul Church", address: "1837 S. Hart Street Road", city: "Vincennes", state: "IN", zip: "47591" },
    ],
    phone: "(812) 882-5638",
    email: "stfrancisxavier1@gmail.com",
    website: "https://www.stfrancisxaviervincennes.com",
    school: { name: "Vincennes Catholic Schools", address: "Flaget Elementary: 800 Vigo St; Rivet Middle & High: 210 Barnett", principal: "Samantha McClure (Flaget), Joe Maione (Rivet)", phone: "(812) 882-5460" },
  },

  {
    slug: "our-lady-of-hope-washington",
    parish: "Our Lady of Hope",
    city: "Washington",
    deanery: "North",
    established: "2008",
    history: "Our Lady of Hope Church, founded in 2008, is a merger of St. Simon (1837) and St. Mary (1874) parishes. The parish is the location of Washington Catholic Elementary School and Washington Catholic Middle & High School.",
    pastor: "Very Rev. Paul Ferguson",
    staff: [
      { title: "Parochial Vicar", name: "Rev. Juan Ramirez" },
      { title: "Deacon", name: "Dennis Hilderbrand" },
      { title: "Pastoral Associate", name: "Yvonne Evans" },
      { title: "DRE, RCIA, Hispanic Ministry", name: "Kande Batz" },
      { title: "Music Director", name: "Laura Litwiler" },
      { title: "Business Manager", name: "Debbie Wichman" },
    ],
    massSchedule: [
      { day: "Tuesday", time: "5:30 p.m." },
      { day: "Wednesday", time: "8:30 a.m." },
      { day: "Friday", time: "8:30 a.m." },
      { day: "Saturday Anticipation", time: "4 p.m." },
      { day: "Sunday", time: "7 a.m., 9 a.m., 11:15 a.m. (Spanish)" },
    ],
    worshipSites: [
      { church: "Our Lady of Hope Church", address: "315 N.E. Third Street", city: "Washington", state: "IN", zip: "47501" },
    ],
    phone: "(812) 254-2883",
    fax: "(812) 254-2884",
    website: "https://www.ccwash.org",
    school: { name: "Washington Catholic Schools", address: "Elementary: 310 N.E. Second St; Middle & High: 201 N.E. Second St", principal: "Kelsi Edwards (Elementary), Karie Craney (Middle & High)", phone: "(812) 254-3845" },
  },

  // ─── EAST DEANERY ────────────────────────────────────────────────

  {
    slug: "st-isidore-celestine",
    parish: "St. Isidore the Farmer",
    city: "Celestine",
    deanery: "East",
    established: "2016",
    history: "St. Isidore Parish was created on July 1, 2016, by the merger of St. Celestine Parish in Celestine (est. 1843) and St. Raphael Parish in Dubois (est. 1899).",
    pastor: "Rev. Simon Natha",
    staff: [
      { title: "Director of Faith Formation/Operations Manager", name: "Brooke Atkins" },
      { title: "Parish Secretary", name: "Angela Mundy" },
      { title: "Youth Coordinator", name: "Alex Linne" },
      { title: "Music Director", name: "Lisa Wagner" },
    ],
    massSchedule: [
      { day: "Tuesday", time: "6:30 p.m. (St. Celestine)" },
      { day: "Friday", time: "8 a.m. (St. Celestine)" },
      { day: "Wednesday & Thursday", time: "8 a.m. (St. Raphael)" },
      { day: "Saturday Anticipation", time: "4:30 p.m. (seasonal)" },
      { day: "Sunday", time: "8 a.m. (St. Celestine), 10 a.m. (St. Raphael)" },
    ],
    worshipSites: [
      { church: "St. Celestine Church", address: "6864 E. State Road 164", city: "Celestine", state: "IN", zip: "47521" },
      { church: "St. Raphael Church", address: "5564 E. St. Raphael Street", city: "Dubois", state: "IN", zip: "47527" },
    ],
    phone: "(812) 634-1875",
    fax: "(812) 634-7255",
    email: "stisidore@evdio.org",
    website: "https://www.saintisidoreparish.com",
  },

  {
    slug: "st-martin-chrisney",
    parish: "St. Martin I",
    city: "Chrisney",
    deanery: "East",
    established: "1866",
    history: "The Spencer County parish of St. Martin I Church was established in 1866. St. Martin I Parish merged with St. John Chrysostom Parish at New Boston on July 1, 2014.",
    pastor: "Rev. Jaison Kuzhiyil",
    staff: [
      { title: "Deacon", name: "Michael Waninger" },
      { title: "PCL and Youth Ministry", name: "Johnny Sherfick" },
      { title: "Music Director, Organist, Liturgical Coordinator", name: "Karen Waninger" },
      { title: "Secretary", name: "Lori Chew" },
    ],
    massSchedule: [
      { day: "Thursday", time: "6 p.m." },
      { day: "Sunday", time: "9 a.m." },
    ],
    worshipSites: [
      { church: "St. Martin I Church", address: "58 S. Church Street", city: "Chrisney", state: "IN", zip: "47611" },
    ],
    phone: "(812) 649-4811",
    fax: "(812) 649-4176",
    website: "https://www.stmartinchrisney.org",
  },

  {
    slug: "st-francis-of-assisi-dale",
    parish: "St. Francis of Assisi",
    city: "Dale",
    deanery: "East",
    established: "2015",
    history: "On July 1, 2015, St. Joseph Parish in Dale (est. 1909), St. Nicholas Church in Santa Claus, and Mary, Help of Christians Church in Mariah Hill merged to form St. Francis of Assisi Parish.",
    pastor: "Rev. Crispine Adongo",
    staff: [
      { title: "Deacon", name: "James Woebkenberg" },
      { title: "Business Manager", name: "Devin Carpenter" },
      { title: "Religious Education", name: "Stephanie Wollenmann" },
      { title: "Hispanic Ministry Coordinator", name: "Miriam Martinez" },
    ],
    massSchedule: [
      { day: "Wednesday", time: "7:30 a.m. (St. Joseph, Dale)" },
      { day: "Thursday", time: "7:30 a.m. (Mary Help of Christians)" },
      { day: "Tuesday", time: "7:30 a.m. (St. Nicholas)" },
      { day: "Saturday Anticipation", time: "5 p.m. (St. Nicholas)" },
      { day: "Sunday", time: "7 a.m. (Mary Help of Christians), 9 a.m. & 11 a.m. Spanish (St. Joseph, Dale)" },
    ],
    worshipSites: [
      { church: "St. Joseph Church", address: "8 E. Maple Street", city: "Dale", state: "IN", zip: "47523" },
      { church: "Mary, Help of Christians Church", address: "6827 E. County Road 1930 N", city: "Dale", state: "IN", zip: "47523" },
      { church: "St. Nicholas Church", address: "180 N. Holiday Boulevard", city: "Santa Claus", state: "IN", zip: "47579" },
    ],
    phone: "(812) 937-2200",
    fax: "(812) 937-4197",
    email: "stjoedale@evdio.org",
    website: "https://sfrancisofassisi.org",
  },

  {
    slug: "christ-the-king-ferdinand",
    parish: "Christ the King",
    city: "Ferdinand",
    deanery: "East",
    established: "2017",
    history: "Christ the King Parish formed on March 1, 2017, through the merger of the former St. Ferdinand Parish (est. 1848) and the former St. Henry Parish (est. 1862) in Dubois County.",
    pastor: "Rev. Riji George",
    staff: [
      { title: "Deacon", name: "James King" },
      { title: "Faith Formation Team", name: "Theodora Houchins, Julie Lindauer, Jack Tuinier" },
      { title: "OCIA Coordinator", name: "Jack Tuinier" },
      { title: "Director of Youth Ministry", name: "Sr. Teresa Gunter" },
      { title: "Business Manager", name: "Joan Lange" },
    ],
    massSchedule: [
      { day: "Tuesday", time: "6 p.m. (St. Ferdinand)" },
      { day: "Wednesday", time: "6 p.m. (St. Henry)" },
      { day: "Thursday", time: "7:30 a.m. (St. Henry)" },
      { day: "Friday", time: "7:30 a.m. (St. Ferdinand)" },
      { day: "Saturday Anticipation", time: "5 p.m. (St. Ferdinand)" },
      { day: "Sunday", time: "7:30 a.m. (St. Henry), 10 a.m. (St. Ferdinand)" },
    ],
    worshipSites: [
      { church: "St. Ferdinand Church", address: "341 E. 10th Street", city: "Ferdinand", state: "IN", zip: "47532" },
      { church: "St. Henry Church", address: "1311 W. 1100 S", city: "Ferdinand", state: "IN", zip: "47532" },
    ],
    phone: "(812) 367-1212",
    fax: "(812) 367-1066",
    email: "stferd@psci.net",
    website: "https://www.christthekingdc.org",
  },

  {
    slug: "st-mary-huntingburg",
    parish: "St. Mary",
    city: "Huntingburg",
    deanery: "East",
    established: "1861",
    history: "Formally established in 1861 as Visitation of the Blessed Virgin Mary, the parish is in the East Deanery. Huntingburg is in Dubois County.",
    pastor: "Rev. Biju Thomas",
    staff: [
      { title: "Parochial Vicar, Part-time", name: "Rev. Homero Rodriguez" },
      { title: "PCL", name: "Clare Neukam" },
      { title: "Evangelization Leader", name: "Kim Kendall" },
      { title: "Parish Secretary", name: "Angie McDonald" },
    ],
    massSchedule: [
      { day: "Tuesday", time: "6 p.m." },
      { day: "Wed, Fri, Sat", time: "8 a.m." },
      { day: "Thursday", time: "12:05 p.m." },
      { day: "Saturday Anticipation", time: "4:30 p.m." },
      { day: "Sunday", time: "7:30 a.m., 10 a.m., 12:30 p.m. (Spanish)" },
    ],
    worshipSites: [
      { church: "St. Mary Church", address: "317 N. Washington Street", city: "Huntingburg", state: "IN", zip: "47542" },
    ],
    phone: "(812) 683-2372",
    fax: "(812) 683-2747",
    website: "https://www.stmaryshuntingburg.org",
  },

  {
    slug: "st-mary-ireland",
    parish: "St. Mary of the Annunciation",
    city: "Ireland",
    deanery: "East",
    established: "1891",
    history: "Formally established in 1891 as Annunciation of the Blessed Virgin Mary, the parish is in the East Deanery. Ireland is in Dubois County.",
    pastor: "Rev. Bill Nicholas",
    staff: [
      { title: "PCL, OCIA Coordinator", name: "Martha Schmitt" },
      { title: "Music Director", name: "Charlene Sermersheim" },
      { title: "Director, St. John Bosco Youth Ministry", name: "Catherine Berghoff" },
      { title: "Adult Faith Formation and Parish Communications", name: "Bonnie Meadows" },
    ],
    massSchedule: [
      { day: "Tuesday & Wednesday", time: "6 p.m." },
      { day: "Thursday & Friday", time: "7 a.m." },
      { day: "Saturday", time: "8 a.m." },
      { day: "Sunday", time: "7 a.m., 10 a.m." },
    ],
    worshipSites: [
      { church: "St. Mary Church", address: "2831 N. 500 W.", city: "Jasper", state: "IN", zip: "47546" },
    ],
    phone: "(812) 482-7041",
    website: "https://www.stmaryireland.com",
    school: { name: "Holy Trinity Catholic School", address: "Ireland Campus", principal: "Jenna M. Seng (Pre-K–2), Jonathan D. Temple (3–8)", phone: "(812) 482-4461" },
  },

  {
    slug: "holy-family-jasper",
    parish: "Holy Family",
    city: "Jasper",
    deanery: "East",
    established: "1948",
    history: "Holy Family Church, established in 1948, is in the East Deanery.",
    pastor: "Rev. Jeff Read",
    staff: [
      { title: "Deacon", name: "David McDaniel" },
      { title: "DRE", name: "Joseph H. Munning IV" },
      { title: "Director of Music and Liturgy", name: "Taylor Blalock" },
      { title: "Business Manager, Bookkeeper", name: "Lori Murphy" },
      { title: "Parish Secretary", name: "Diane A. Verkamp" },
    ],
    massSchedule: [
      { day: "Tuesday", time: "6:30 p.m." },
      { day: "Wed–Fri", time: "8 a.m." },
      { day: "Saturday Anticipation", time: "5 p.m." },
      { day: "Sunday", time: "8:30 a.m., 10:30 a.m." },
    ],
    worshipSites: [
      { church: "Holy Family Church", address: "950 E. Church Avenue", city: "Jasper", state: "IN", zip: "47546" },
    ],
    phone: "(812) 482-3076",
    fax: "(812) 634-6998",
    website: "https://www.holyfamilyjasper.com",
    school: { name: "Holy Trinity Catholic School, East Campus", address: "990 E. Church Avenue, 47546", principal: "Jenna M. Seng (Pre-K–2), Jonathan D. Temple (3–8)", phone: "(812) 482-4485" },
  },

  {
    slug: "precious-blood-jasper",
    parish: "Precious Blood",
    city: "Jasper",
    deanery: "East",
    established: "1954",
    history: "Formally established in 1954 as Precious Blood of Our Lord Jesus Christ, the parish is in the East Deanery.",
    pastor: "Rev. Brian Emmick",
    staff: [
      { title: "Deacon", name: "Mike Jones" },
      { title: "Faith Formation Coordinator", name: "Emily Ketzner" },
      { title: "Spiritual Life Coordinator", name: "Nancy Mendel" },
      { title: "Coordinator of Music Ministry", name: "Ann Nagy" },
    ],
    massSchedule: [
      { day: "Monday", time: "6:30 a.m." },
      { day: "Tue–Fri", time: "8 a.m." },
      { day: "Saturday Anticipation", time: "4 p.m." },
      { day: "Sunday", time: "8 a.m., 10:30 a.m." },
    ],
    worshipSites: [
      { church: "Precious Blood Church", address: "1385 W. Sixth Street", city: "Jasper", state: "IN", zip: "47546" },
    ],
    phone: "(812) 482-4461",
    fax: "(812) 482-7762",
    website: "https://www.preciousbloodjasperin.org",
    school: { name: "Holy Trinity Catholic School, Central Campus", address: "1385 W. Sixth St., 47546", principal: "Jenna M. Seng (Pre-K–2), Jonathan D. Temple (3–8)", phone: "(812) 482-4461" },
  },

  {
    slug: "st-joseph-jasper",
    parish: "St. Joseph",
    city: "Jasper",
    deanery: "East",
    established: "1837",
    history: "St. Joseph Church, established in 1837, is in the East Deanery. It is one of the oldest parishes in the diocese.",
    pastor: "Very Rev. John Brosmer",
    staff: [
      { title: "Parochial Vicar", name: "Rev. Keith Hart" },
      { title: "Parochial Vicar, Part-time", name: "Rev. Homero Rodriguez" },
      { title: "DRE", name: "Grace Mehringer" },
      { title: "Director of Music", name: "Melanie Baker" },
      { title: "Finance Coordinator", name: "Tamra Mehringer" },
      { title: "Bilingual Administrative Assistant", name: "Marlene Munoz" },
    ],
    massSchedule: [
      { day: "Monday–Saturday", time: "8 a.m." },
      { day: "Tuesday", time: "6:30 p.m. (Spanish)" },
      { day: "Wednesday", time: "12:05 p.m." },
      { day: "Thursday", time: "6:30 p.m." },
      { day: "Saturday Anticipation", time: "4:30 p.m." },
      { day: "Sunday", time: "6 a.m., 7:30 a.m., 9 a.m., 10:30 a.m. (Spanish), 6 p.m." },
    ],
    worshipSites: [
      { church: "St. Joseph Church", address: "1029 Kundek Street", city: "Jasper", state: "IN", zip: "47546" },
    ],
    phone: "(812) 482-1805",
    fax: "(812) 482-1814",
    website: "https://www.saintjosephjasper.org",
  },

  {
    slug: "st-bernard-rockport",
    parish: "St. Bernard",
    city: "Rockport",
    deanery: "East",
    established: "1850",
    history: "St. Bernard Church, founded in 1850, is in the East Deanery. Rockport is in Spencer County.",
    pastor: "Rev. Jaison Kuzhiyil",
    staff: [
      { title: "Deacon", name: "Michael Waninger" },
      { title: "RCIA Coordinator", name: "Carolyn Thorpe" },
      { title: "PCL and Youth Ministry", name: "Johnny Sherfick" },
      { title: "Music Director", name: "Sherry Newton" },
      { title: "Secretary", name: "Lori Chew" },
      { title: "Business Manager", name: "Paul Schulte" },
    ],
    massSchedule: [
      { day: "Tuesday", time: "6 p.m." },
      { day: "Wednesday & Friday", time: "8 a.m." },
      { day: "Saturday Anticipation", time: "5 p.m." },
      { day: "Sunday", time: "7:30 a.m., 10:30 a.m." },
    ],
    worshipSites: [
      { church: "St. Bernard Church", address: "547 Elm Street", city: "Rockport", state: "IN", zip: "47635" },
    ],
    phone: "(812) 649-4811",
    fax: "(812) 649-4176",
    website: "https://www.stbernardrockport.org",
    school: { name: "St. Bernard School", address: "207 N. 6th St., 47635", principal: "Ryan Nowak", phone: "(812) 649-2501" },
  },

  {
    slug: "divine-mercy-st-anthony",
    parish: "Divine Mercy",
    city: "St. Anthony",
    deanery: "East",
    established: "2016",
    history: "St. Anthony Parish (est. 1864) merged with Sacred Heart Parish in Schnellville to form Divine Mercy Parish on July 1, 2016. The parish is in Dubois County.",
    pastor: "Rev. Jose Thomas",
    staff: [
      { title: "Deacon", name: "Charles Johnson" },
      { title: "Parish Catechetical Leader", name: "Janie Kempf" },
      { title: "Secretary", name: "Wilma Wendholt" },
      { title: "Bookkeeper", name: "Karen Wendholt" },
    ],
    massSchedule: [
      { day: "Tuesday", time: "6 p.m. (St. Anthony)" },
      { day: "Wednesday", time: "6 p.m. (Sacred Heart)" },
      { day: "Thursday", time: "8 a.m. (St. Anthony)" },
      { day: "Friday", time: "8 a.m. (Sacred Heart)" },
      { day: "Saturday Anticipation", time: "4:30 p.m. (seasonal)" },
      { day: "Sunday", time: "8 a.m. (Sacred Heart), 10 a.m. (St. Anthony)" },
    ],
    worshipSites: [
      { church: "St. Anthony Church", address: "4444 Ohio Street", city: "St. Anthony", state: "IN", zip: "47575" },
      { church: "Sacred Heart Church", address: "2504 Walnut Street", city: "Schnellville", state: "IN", zip: "47580" },
    ],
    phone: "(812) 326-2777",
    website: "https://www.divinemercyduco.org",
  },

  // ─── WEST DEANERY ────────────────────────────────────────────────

  {
    slug: "corpus-christi-evansville",
    parish: "Corpus Christi",
    city: "Evansville",
    deanery: "West",
    established: "1955",
    history: "Corpus Christi, established in 1955, is in the West Deanery.",
    pastor: "Rev. Luke Hassler",
    staff: [
      { title: "Deacon, OCIA Coordinator", name: "Thomas Goebel" },
      { title: "Deacon", name: "Danny Wheeler" },
      { title: "Faith Formation", name: "Cecilia Reising" },
      { title: "Music Director", name: "Diane Sammet" },
      { title: "Office Manager", name: "Angie Wulff" },
    ],
    massSchedule: [
      { day: "Monday & Friday", time: "7 a.m." },
      { day: "Tuesday", time: "8:15 a.m. (school year)" },
      { day: "Saturday", time: "8 a.m." },
      { day: "Saturday Anticipation", time: "4 p.m." },
      { day: "Sunday", time: "7:30 a.m., 10 a.m." },
    ],
    worshipSites: [
      { church: "Corpus Christi Church", address: "5528 Hogue Road", city: "Evansville", state: "IN", zip: "47712" },
    ],
    phone: "(812) 422-2027",
    email: "corpuschristi@evdio.org",
    website: "https://www.corpuschristievansville.org",
    school: { name: "Corpus Christi School", address: "5530 Hogue Road, 47712", principal: "Andrea Greaney", phone: "(812) 422-1208" },
  },

  {
    slug: "holy-cross-fort-branch",
    parish: "Holy Cross",
    city: "Fort Branch",
    deanery: "West",
    established: "1947",
    history: "Holy Cross Church in Fort Branch, established in 1947, is in Gibson County. Holy Cross shares a pastor with St. Joseph Parish in Princeton.",
    pastor: "Rev. Gary Kaiser",
    staff: [
      { title: "Deacon", name: "Joseph Siewers" },
      { title: "OCIA Coordinator", name: "Gerald Weber" },
      { title: "Music Director", name: "Drew Wilson" },
      { title: "Youth Ministry", name: "Bryan Macke" },
      { title: "Parish/Business Manager", name: "Dawn Michel" },
    ],
    massSchedule: [
      { day: "Wednesday", time: "8:15 a.m." },
      { day: "Thursday", time: "6 p.m." },
      { day: "Saturday Anticipation", time: "4:30 p.m. (Apr–Sep)" },
      { day: "Sunday", time: "8:30 a.m." },
    ],
    worshipSites: [
      { church: "Holy Cross Church", address: "305 E. Walnut Street", city: "Fort Branch", state: "IN", zip: "47648" },
    ],
    phone: "(812) 753-3548",
    website: "https://www.holycrossparish.info",
    school: { name: "Holy Cross School", address: "202 South Church Street, 47648", principal: "Nathan Winstead", phone: "(812) 753-3280" },
  },

  {
    slug: "st-james-haubstadt",
    parish: "St. James",
    city: "Haubstadt",
    deanery: "West",
    established: "1847",
    history: "Formally established in 1847 as St. James the Greater, the parish in Gibson County is linked with Sts. Peter and Paul Parish in Haubstadt.",
    pastor: "Very Rev. Andrew Thomas",
    staff: [
      { title: "Senior Parochial Vicar", name: "Rev. Kenneth R. Betz" },
      { title: "Parochial Vicar", name: "Rev. Phillip Rogier" },
      { title: "Coordinator of Operations", name: "Frank West" },
      { title: "DRE", name: "Chris Wickman" },
      { title: "Director of Sacred Music", name: "Drew Wilson" },
    ],
    massSchedule: [
      { day: "Tuesday", time: "7:30 a.m." },
      { day: "Wednesday", time: "6:30 p.m." },
      { day: "Thursday & Friday", time: "7:30 a.m." },
      { day: "Saturday Anticipation", time: "5 p.m." },
      { day: "Sunday", time: "7 a.m., 9 a.m." },
    ],
    worshipSites: [
      { church: "St. James Church", address: "12300 S. 50 W", city: "Haubstadt", state: "IN", zip: "47639" },
    ],
    phone: "(812) 867-5175",
    website: "https://www.stjameshaubstadt.com",
    school: { name: "St. James School", address: "12394 S. 40 W., Haubstadt 47639", principal: "Eric Chamberlain", phone: "(812) 867-2661" },
  },

  {
    slug: "sts-peter-and-paul-haubstadt",
    parish: "Sts. Peter and Paul",
    city: "Haubstadt",
    deanery: "West",
    established: "1877",
    history: "Sts. Peter and Paul Church in Haubstadt was established in 1877 in Gibson County. The parish is linked with St. James Parish in Haubstadt.",
    pastor: "Very Rev. Andrew Thomas",
    staff: [
      { title: "Senior Parochial Vicar", name: "Rev. Kenneth R. Betz" },
      { title: "Parochial Vicar", name: "Rev. Phillip Rogier" },
      { title: "Deacon", name: "William Brandle" },
      { title: "Coordinator of Operations", name: "Frank West" },
      { title: "Pastoral Assistant for Mission", name: "Amie Hulfachor" },
    ],
    massSchedule: [
      { day: "Monday", time: "6:30 p.m." },
      { day: "Tuesday", time: "6 a.m." },
      { day: "Wednesday & Friday", time: "8 a.m." },
      { day: "Saturday Anticipation", time: "5 p.m." },
      { day: "Sunday", time: "7 a.m., 10 a.m." },
    ],
    worshipSites: [
      { church: "Sts. Peter and Paul Church", address: "211 N. Vine Street", city: "Haubstadt", state: "IN", zip: "47639" },
    ],
    phone: "(812) 768-6457",
    fax: "(812) 768-9371",
    website: "https://www.stsppchurch.com",
    school: { name: "Sts. Peter and Paul School", address: "210 N. Vine Street, Haubstadt 47639", principal: "Samantha Erny", phone: "(812) 768-6775" },
  },

  {
    slug: "st-matthew-mount-vernon",
    parish: "St. Matthew",
    city: "Mount Vernon",
    deanery: "West",
    established: "1857",
    history: "St. Matthew Church, established in 1857, is in the West Deanery. Mount Vernon is in Posey County.",
    pastor: "Rev. Ryan Hilderbrand",
    staff: [
      { title: "Parochial Vicar", name: "Rev. Varghese Kalaparakudi" },
      { title: "Deacons", name: "Tom Evans, Robert Martin" },
      { title: "PCL", name: "Michele Gondi" },
      { title: "Music Director", name: "Tom Scheller" },
      { title: "Business Manager", name: "Donett May" },
    ],
    massSchedule: [
      { day: "Wednesday", time: "8:15 a.m." },
      { day: "Thursday", time: "5:30 p.m." },
      { day: "Saturday Anticipation", time: "4:30 p.m." },
      { day: "Sunday", time: "9 a.m." },
    ],
    worshipSites: [
      { church: "St. Matthew Church", address: "421 Mulberry Street", city: "Mount Vernon", state: "IN", zip: "47620" },
    ],
    phone: "(812) 838-2535",
    fax: "(812) 838-0237",
    website: "https://www.stmatthewparish.us",
    school: { name: "St. Matthew School", address: "401 Mulberry Street, 47620", principal: "Christian Shockley", phone: "(812) 838-3621" },
  },

  {
    slug: "blessed-sacrament-oakland-city",
    parish: "Blessed Sacrament",
    city: "Oakland City",
    deanery: "West",
    established: "1948",
    history: "Blessed Sacrament Church, founded as a mission in 1923, was established as a parish in 1948. The parish shares a pastor with Sts. Peter and Paul Parish in Petersburg.",
    pastor: "Rev. Vargheese Kalapurakudi",
    staff: [
      { title: "Deacon", name: "Gary Keepes" },
      { title: "CRE", name: "Lori Stolz" },
      { title: "OCIA Coordinators", name: "Alan and Lynn Will" },
      { title: "Music Director", name: "Doris Stolz" },
      { title: "Secretary and Bookkeeper", name: "Jill Keepes" },
    ],
    massSchedule: [
      { day: "Wednesday", time: "6:30 p.m." },
      { day: "Sunday", time: "8 a.m." },
    ],
    worshipSites: [
      { church: "Blessed Sacrament Church", address: "11092 E. Lincoln Heights Road", city: "Oakland City", state: "IN", zip: "47660" },
    ],
    phone: "(812) 749-4474",
  },

  {
    slug: "sts-peter-and-paul-petersburg",
    parish: "Sts. Peter and Paul",
    city: "Petersburg",
    deanery: "West",
    established: "1847",
    history: "Sts. Peter and Paul Church, the only Catholic parish in Pike County, was founded in 1847. The parish shares a pastor with Blessed Sacrament Parish in Oakland City.",
    pastor: "Rev. Vargheese Kalapurakudi",
    staff: [
      { title: "Deacon", name: "Gary Keepes" },
      { title: "RCIA Coordinator", name: "Deacon Gary Keepes" },
      { title: "Secretary and Bookkeeper", name: "Jill Keepes" },
    ],
    massSchedule: [
      { day: "Thursday", time: "10:30 a.m." },
      { day: "Saturday Anticipation", time: "4:30 p.m." },
      { day: "Sunday", time: "11 a.m." },
    ],
    worshipSites: [
      { church: "Sts. Peter and Paul Church", address: "711 Walnut Street", city: "Petersburg", state: "IN", zip: "47567" },
    ],
    phone: "(812) 354-6942",
  },

  {
    slug: "st-philip-posey-county",
    parish: "St. Philip the Apostle",
    city: "Mount Vernon",
    deanery: "West",
    established: "1847",
    history: "Formally established in 1847 as St. Philip the Apostle, the parish in Posey County is in the West Deanery.",
    pastor: "Rev. Ryan Hilderbrand",
    staff: [
      { title: "Parochial Vicar", name: "Rev. Varghese Kalaparakudi" },
      { title: "Director of Sacred Music", name: "Timothy Fox" },
      { title: "Director of Parish Ministry / Deacon", name: "Charles Koressel" },
      { title: "Director of Parish Operations", name: "Matt Bohleber" },
    ],
    massSchedule: [
      { day: "Wednesday & Friday", time: "7:45 a.m." },
      { day: "Saturday Anticipation", time: "4 p.m." },
      { day: "Sunday", time: "7:30 a.m., 9:30 a.m." },
    ],
    worshipSites: [
      { church: "St. Philip Church", address: "3500 St. Philip Road South", city: "Mount Vernon", state: "IN", zip: "47620" },
    ],
    phone: "(812) 985-2275",
    fax: "(812) 985-2590",
    website: "https://www.saintphilipchurch.net",
    school: { name: "St. Philip School", address: "3420 St. Philip Road South, 47620", principal: "Kellie Kelsey", phone: "(812) 985-2447" },
  },

  {
    slug: "st-francis-xavier-poseyville",
    parish: "St. Francis Xavier",
    city: "Poseyville",
    deanery: "West",
    established: "2014",
    history: "St. Francis Xavier Parish was created by the merger of Holy Angels Parish in New Harmony and the existing St. Francis Xavier (est. 1886) on July 1, 2014. The parish is linked with St. Wendel Parish.",
    pastor: "Rev. Ed C. Schnur",
    staff: [
      { title: "Deacon", name: "Mark McDonald" },
      { title: "Bookkeeper", name: "Terri Kiesel" },
      { title: "Secretary", name: "Sara Lipking" },
    ],
    massSchedule: [
      { day: "Wednesday", time: "7:30 a.m. (St. Francis Xavier)" },
      { day: "Sunday", time: "7 a.m., 10 a.m. (St. Francis Xavier)" },
    ],
    worshipSites: [
      { church: "St. Francis Xavier Church", address: "10 N. St. Francis Avenue", city: "Poseyville", state: "IN", zip: "47633" },
      { church: "Holy Angels Oratory", address: "805 Main Street", city: "New Harmony", state: "IN", zip: "47631" },
    ],
    phone: "(812) 874-2220",
  },

  {
    slug: "st-joseph-princeton",
    parish: "St. Joseph",
    city: "Princeton",
    deanery: "West",
    established: "1867",
    history: "St. Joseph Church was established as a parish in 1867. Princeton is in Gibson County. St. Joseph shares a pastor with Holy Cross Parish in Fort Branch.",
    pastor: "Rev. Gary Kaiser",
    staff: [
      { title: "Deacon", name: "Joseph Siewers" },
      { title: "Liturgical Coordinator", name: "Seth Stevens" },
      { title: "Parish Catechetical Leader", name: "Beth Kirsch" },
      { title: "Music Ministry Coordinator", name: "Doris Stolz" },
      { title: "Parish/Business Manager", name: "Angie Paul" },
    ],
    massSchedule: [
      { day: "Tuesday", time: "6 p.m." },
      { day: "Friday & Saturday", time: "8:15 a.m. / 7 a.m." },
      { day: "Saturday Anticipation", time: "4:30 p.m. (Oct–Mar)" },
      { day: "Sunday", time: "10:30 a.m." },
    ],
    worshipSites: [
      { church: "St. Joseph Church", address: "410 S. Race Street", city: "Princeton", state: "IN", zip: "47670" },
    ],
    phone: "(812) 385-2617",
    fax: "(812) 648-0025",
    website: "https://www.stjosephprinceton.org",
    school: { name: "St. Joseph School", address: "427 South Stormont Street, 47670", principal: "Valerie Zimmer", phone: "(812) 385-2228" },
  },

  {
    slug: "st-wendel",
    parish: "St. Wendel",
    city: "St. Wendel",
    deanery: "West",
    established: "1842",
    history: "St. Wendel Church, established in 1842, is linked with the newly created St. Francis Xavier Parish in Poseyville.",
    pastor: "Rev. Ed C. Schnur",
    staff: [
      { title: "Deacon", name: "Mark McDonald" },
      { title: "Music Director", name: "Alex Schnautz" },
      { title: "Bookkeeper", name: "Terri Kiesel" },
      { title: "Secretary", name: "Sara Lipking" },
    ],
    massSchedule: [
      { day: "Tuesday & Thursday", time: "7:30 a.m." },
      { day: "Saturday Anticipation", time: "4:30 p.m." },
      { day: "Sunday", time: "8:30 a.m." },
    ],
    worshipSites: [
      { church: "St. Wendel Church", address: "10542 W. Boonville-New Harmony Road", city: "Evansville", state: "IN", zip: "47720" },
    ],
    phone: "(812) 963-3733",
    website: "https://saintwendelschool.org",
    school: { name: "St. Wendel School", address: "4725 St. Wendel-Cynthiana Road, Wadesville, IN 47638", principal: "Hallie Scheu", phone: "(812) 963-3958" },
  },

  {
    slug: "st-bernard-snake-run",
    parish: "St. Bernard",
    city: "Snake Run",
    deanery: "West",
    established: "1877",
    history: "St. Bernard Church was founded in 1877 in the Gibson County settlement of Snake Run. The parish shares a pastor with St. John the Evangelist, Daylight.",
    pastor: "Rev. Chris Forler",
    staff: [
      { title: "Parochial Vicar", name: "Rev. Aaron Herrenbruck" },
      { title: "Deacons", name: "Vince Bernardin, Lonny Davis" },
      { title: "CRE", name: "Rose Obert" },
      { title: "Music Director", name: "Kelly Obert" },
    ],
    massSchedule: [
      { day: "Sunday", time: "8:30 a.m." },
    ],
    worshipSites: [
      { church: "St. Bernard Church", address: "5342 E. State Road 168", city: "Fort Branch", state: "IN", zip: "47648" },
    ],
    phone: "(812) 615-0201",
    email: "lspindler@evdio.org",
    website: "https://www.stbernardsnakerun.org",
  },

  {
    slug: "st-joseph-vanderburgh-county",
    parish: "St. Joseph",
    city: "Evansville",
    deanery: "West",
    established: "1841",
    history: "St. Joseph Church was established in 1841 in Vanderburgh County.",
    pastor: "Rev. Eugene A. Schroeder",
    staff: [
      { title: "CRE, RCIA, Youth Ministry", name: "Jessica Reckelhoff" },
      { title: "Liturgical Coordinator, Music Director", name: "Kristen Gilles" },
      { title: "Parish Secretary, Bookkeeper", name: "Julie Kempf" },
    ],
    massSchedule: [
      { day: "Monday", time: "6:30 p.m." },
      { day: "Tue, Wed, Fri", time: "7:30 a.m." },
      { day: "Saturday Anticipation", time: "5 p.m." },
      { day: "Sunday", time: "8 a.m., 10:30 a.m." },
    ],
    worshipSites: [
      { church: "St. Joseph Church", address: "6202 W. St. Joseph Road", city: "Evansville", state: "IN", zip: "47720" },
    ],
    phone: "(812) 963-3273",
    website: "https://www.stjoeco.org",
    school: { name: "St. Joseph School", address: "6130 West St. Joseph Road, 47720", principal: "Kelsey Meier", phone: "(812) 963-3335" },
  },
];

// Helper to find a parish by slug
export function getParishBySlug(slug: string): ParishDetail | undefined {
  return parishDetails.find((p) => p.slug === slug);
}

// Get all slugs for static generation
export function getAllParishSlugs(): string[] {
  return parishDetails.map((p) => p.slug);
}

// Normalize parish name for comparison
function normalizeName(name: string): string {
  return name
    .replace(/Sts?\./g, "St")
    .replace(/Ss\./g, "St")
    .replace(/&/g, "and")
    .replace(/[.,]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

// Map from parish name (as used in parishes.ts) to slug
export function getSlugForParish(parishName: string, city: string): string | undefined {
  const normalizedInput = normalizeName(parishName);

  const detail = parishDetails.find((p) => {
    const normalizedParish = normalizeName(p.parish);
    const nameMatch =
      normalizedParish === normalizedInput ||
      normalizedInput.startsWith(normalizedParish) ||
      normalizedParish.startsWith(normalizedInput);

    if (!nameMatch) return false;

    // If multiple parishes share a name (e.g. St. Peter), also match city
    const sameName = parishDetails.filter((pp) => {
      const n = normalizeName(pp.parish);
      return n === normalizedParish || n.startsWith(normalizedInput) || normalizedInput.startsWith(n);
    });
    if (sameName.length > 1) {
      const cityLower = city.toLowerCase();
      return p.city.toLowerCase() === cityLower ||
        p.worshipSites.some((ws) => ws.city.toLowerCase() === cityLower);
    }
    return true;
  });
  return detail?.slug;
}

// Get website URL for a parish by name/city (used by MassTimesMap)
export function getWebsiteForParish(parishName: string, city: string): string | undefined {
  const slug = getSlugForParish(parishName, city);
  if (!slug) return undefined;
  const detail = parishDetails.find((p) => p.slug === slug);
  return detail?.website;
}
