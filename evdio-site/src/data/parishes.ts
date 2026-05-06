export interface ParishLocation {
  parish: string;
  church: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  deanery: "South" | "North" | "East" | "West";
  lat: number;
  lng: number;
  phone: string;
  pastor: string;
  website?: string;
}

export const parishLocations: ParishLocation[] = [
  // ─── SOUTH DEANERY ───
  { parish: "All Saints", church: "St. Anthony", address: "704 First Ave.", city: "Evansville", state: "IN", zip: "47710", deanery: "South", lat: 37.984125, lng: -87.574927, phone: "812-423-5209", pastor: "Rev. Zach Etienne", website: "http://www.allsaintsevansville.org" },
  { parish: "All Saints", church: "St. Joseph", address: "600 E. Virginia St.", city: "Evansville", state: "IN", zip: "47711", deanery: "South", lat: 37.984520, lng: -87.575367, phone: "812-423-5209", pastor: "Rev. Zach Etienne", website: "http://www.allsaintsevansville.org" },
  { parish: "Annunciation of the Lord", church: "Christ the King", address: "3010 E. Chandler Avenue", city: "Evansville", state: "IN", zip: "47714", deanery: "South", lat: 37.965271, lng: -87.513299, phone: "812-476-3061", pastor: "Rev. Benny Chacko", website: "http://www.annunciationevv.org" },
  { parish: "Annunciation of the Lord", church: "Holy Spirit", address: "1800 S. Lodge Avenue", city: "Evansville", state: "IN", zip: "47714", deanery: "South", lat: 37.955320, lng: -87.538813, phone: "812-476-3061", pastor: "Rev. Benny Chacko", website: "http://www.annunciationevv.org" },
  { parish: "Good Shepherd", church: "Good Shepherd", address: "2301 N. Stockwell Rd.", city: "Evansville", state: "IN", zip: "47715", deanery: "South", lat: 38.000581, lng: -87.501571, phone: "812-477-5405", pastor: "Very Rev. Zach Etienne", website: "http://www.gsparish.org" },
  { parish: "Holy Redeemer", church: "Holy Redeemer", address: "918 W. Mill Rd.", city: "Evansville", state: "IN", zip: "47710", deanery: "South", lat: 38.020931, lng: -87.576866, phone: "812-424-8344", pastor: "Very Rev. Jason Gries", website: "http://holyredeemerchurch.org" },
  { parish: "Holy Rosary", church: "Holy Rosary", address: "1301 S. Green River Rd.", city: "Evansville", state: "IN", zip: "47715", deanery: "South", lat: 37.959368, lng: -87.493268, phone: "812-477-8923", pastor: "Rev. Bernard Etienne", website: "http://www.hrparish.org" },
  { parish: "Resurrection", church: "Resurrection", address: "5301 New Harmony Rd.", city: "Evansville", state: "IN", zip: "47720", deanery: "South", lat: 38.016775, lng: -87.637861, phone: "812-963-3121", pastor: "Rev. Jerry Pratt", website: "http://www.resurrectionevv.com/" },
  { parish: "St. Benedict Cathedral", church: "St. Benedict Cathedral", address: "1328 Lincoln Avenue", city: "Evansville", state: "IN", zip: "47714", deanery: "South", lat: 37.970323, lng: -87.540707, phone: "812-425-3369", pastor: "Very Rev. Alex Zenthoefer", website: "http://www.saintbenedictcathedral.org" },
  { parish: "St. Boniface", church: "Sacred Heart", address: "2701 W. Franklin St.", city: "Evansville", state: "IN", zip: "47712", deanery: "South", lat: 37.981277, lng: -87.605698, phone: "812-423-1721", pastor: "Rev. Christopher Droste", website: "https://www.saintbonifaceparish.org/" },
  { parish: "St. Boniface", church: "St. Agnes", address: "1600 Glendale Avenue", city: "Evansville", state: "IN", zip: "47712", deanery: "South", lat: 37.959210, lng: -87.616013, phone: "812-423-1721", pastor: "Rev. Christopher Droste", website: "https://www.saintbonifaceparish.org/" },
  { parish: "St. Boniface", church: "St. Boniface", address: "418 N. Wabash Ave.", city: "Evansville", state: "IN", zip: "47712", deanery: "South", lat: 37.981978, lng: -87.594408, phone: "812-423-1721", pastor: "Rev. Christopher Droste", website: "https://www.saintbonifaceparish.org/" },
  { parish: "Sts. Mary & John", church: "St. Mary", address: "613 Cherry St.", city: "Evansville", state: "IN", zip: "47713", deanery: "South", lat: 37.969254, lng: -87.565667, phone: "812-425-1577", pastor: "Rev. Eugene Schmitt", website: "https://stsmaryandjohnparish.org/" },
  { parish: "St. Clement", church: "St. Clement", address: "422 E. Sycamore St.", city: "Boonville", state: "IN", zip: "47601", deanery: "South", lat: 38.050980, lng: -87.270077, phone: "812-897-4653", pastor: "Rev. Ron Kreilein", website: "https://stclementparish.weconnect.com/" },
  { parish: "St. Clement", church: "St. Rupert", address: "1244 W. Red Brush Rd.", city: "Newburgh", state: "IN", zip: "47630", deanery: "South", lat: 37.939050, lng: -87.272113, phone: "812-897-4653", pastor: "Rev. Ron Kreilein", website: "https://stclementparish.weconnect.com/" },
  { parish: "St. John the Evangelist", church: "St. John the Evangelist", address: "5301 Daylight Dr.", city: "Evansville", state: "IN", zip: "47725", deanery: "South", lat: 38.090737, lng: -87.485461, phone: "812-867-3718", pastor: "Rev. Chris Forler", website: "http://www.catholicdaylight.org" },
  { parish: "St. John the Baptist", church: "St. John the Baptist", address: "625 Frame Rd.", city: "Newburgh", state: "IN", zip: "47630", deanery: "South", lat: 37.950174, lng: -87.414223, phone: "812-490-1000", pastor: "Rev. Claude Burns", website: "http://www.sjbnewburgh.org" },
  { parish: "St. Joseph - Vanderburgh Co.", church: "St. Joseph", address: "6202 W. St. Joseph Rd.", city: "Evansville", state: "IN", zip: "47720", deanery: "South", lat: 38.065709, lng: -87.648048, phone: "812-963-3273", pastor: "Rev. Eugene Schroeder", website: "http://www.stjoeco.org" },

  // ─── NORTH DEANERY ───
  { parish: "St. Francis Xavier", church: "Basilica of St. Francis Xavier", address: "205 Church St.", city: "Vincennes", state: "IN", zip: "47591", deanery: "North", lat: 38.690000, lng: -87.512000, phone: "812-882-5638", pastor: "Rev. Tony Ernst", website: "http://www.stfrancisxaviervincennes.com" },
  { parish: "St. Francis Xavier", church: "Sacred Heart", address: "2004 N. Second St.", city: "Vincennes", state: "IN", zip: "47591", deanery: "North", lat: 38.689358, lng: -87.511556, phone: "812-882-5638", pastor: "Rev. Tony Ernst", website: "http://www.stfrancisxaviervincennes.com" },
  { parish: "St. Francis Xavier", church: "St. John the Baptist", address: "803 Main St.", city: "Vincennes", state: "IN", zip: "47591", deanery: "North", lat: 38.675113, lng: -87.527781, phone: "812-882-5638", pastor: "Rev. Tony Ernst", website: "http://www.stfrancisxaviervincennes.com" },
  { parish: "St. Francis Xavier", church: "St. Thomas", address: "6268 S. St. Thomas Rd.", city: "Vincennes", state: "IN", zip: "47591", deanery: "North", lat: 38.586887, lng: -87.561249, phone: "812-882-5638", pastor: "Rev. Tony Ernst", website: "http://www.stfrancisxaviervincennes.com" },
  { parish: "St. Francis Xavier", church: "St. Vincent de Paul", address: "1837 S Hart Street Rd.", city: "Vincennes", state: "IN", zip: "47591", deanery: "North", lat: 38.649112, lng: -87.493362, phone: "812-882-5638", pastor: "Rev. Tony Ernst", website: "http://www.stfrancisxaviervincennes.com" },
  { parish: "St. Philip Neri", church: "St. Philip Neri", address: "605 W. Fourth St.", city: "Bicknell", state: "IN", zip: "47512", deanery: "North", lat: 38.773708, lng: -87.312965, phone: "812-735-4069", pastor: "Rev. Tony Ernst", website: "https://www.stphilipneribicknell.org/" },
  { parish: "Holy Name", church: "Holy Name", address: "700 Lincoln Drive", city: "Bloomfield", state: "IN", zip: "47424", deanery: "North", lat: 39.031728, lng: -86.942881, phone: "812-847-7821", pastor: "Rev. Simon Natha" },
  { parish: "St. Joan of Arc", church: "St. Joan of Arc", address: "327 W McKinley St.", city: "Jasonville", state: "IN", zip: "47438", deanery: "North", lat: 39.161022, lng: -87.203866, phone: "812-268-4088", pastor: "Rev. Suresh Bakka", website: "https://www.stmary-sullivan.com/" },
  { parish: "St. Peter", church: "St. Peter", address: "489 E Street NE", city: "Linton", state: "IN", zip: "47441", deanery: "North", lat: 39.038462, lng: -87.160875, phone: "812-847-7821", pastor: "Rev. Srinivasa Malaka" },
  { parish: "St. John the Evangelist", church: "St. John", address: "408 Church St.", city: "Loogootee", state: "IN", zip: "47553", deanery: "North", lat: 38.677598, lng: -86.910284, phone: "812-295-2225", pastor: "Very Rev. Kenneth Walker", website: "http://www.stjohnloogootee.com" },
  { parish: "St. John the Evangelist", church: "St. Martin", address: "520 Whitfield Rd.", city: "Loogootee", state: "IN", zip: "47553", deanery: "North", lat: 38.676994, lng: -86.914170, phone: "812-295-2225", pastor: "Very Rev. Kenneth Walker", website: "http://www.stjohnloogootee.com" },
  { parish: "St. John the Evangelist", church: "St. Mary", address: "128 High St.", city: "Shoals", state: "IN", zip: "", deanery: "North", lat: 38.664294, lng: -86.792221, phone: "812-295-2225", pastor: "Very Rev. Kenneth Walker", website: "http://www.stjohnloogootee.com" },
  { parish: "St. Peter", church: "St. Peter", address: "305 N. Second St.", city: "Montgomery", state: "IN", zip: "47558", deanery: "North", lat: 38.664436, lng: -87.046867, phone: "812-486-3149", pastor: "Rev. Stephen McGinnis", website: "https://stpetermontgomery.org/" },
  { parish: "St. Peter", church: "All Saints", address: "100 W. Third St.", city: "Cannelburg", state: "IN", zip: "47519", deanery: "North", lat: 38.671371, lng: -86.999527, phone: "812-486-3149", pastor: "Rev. Stephen McGinnis", website: "https://stpetermontgomery.org/" },
  { parish: "St. Mary", church: "St. Mary", address: "105 E. Jackson St.", city: "Sullivan", state: "IN", zip: "47882", deanery: "North", lat: 39.094248, lng: -87.405702, phone: "812-268-4088", pastor: "Rev. Suresh Bakka", website: "https://stmary-sullivan.com/" },
  { parish: "Our Lady of Hope", church: "Our Lady of Hope", address: "315 NE Third St.", city: "Washington", state: "IN", zip: "47501", deanery: "North", lat: 38.659704, lng: -87.172336, phone: "812-254-2883", pastor: "Very Rev. Paul Ferguson", website: "http://www.ccwash.org" },

  // ─── EAST DEANERY ───
  { parish: "St. Joseph", church: "St. Joseph", address: "1029 Kundek St.", city: "Jasper", state: "IN", zip: "47546", deanery: "East", lat: 38.396502, lng: -86.933130, phone: "812-482-1805", pastor: "Very Rev. John Brosmer", website: "http://www.saintjosephjasper.org" },
  { parish: "Holy Family", church: "Holy Family", address: "950 E. Church Ave.", city: "Jasper", state: "IN", zip: "47546", deanery: "East", lat: 38.375904, lng: -86.921135, phone: "812-482-3076", pastor: "Rev. Jeff Read", website: "http://www.holyfamilyjasper.com" },
  { parish: "Precious Blood", church: "Precious Blood", address: "1385 W. Sixth St.", city: "Jasper", state: "IN", zip: "47546", deanery: "East", lat: 38.394597, lng: -86.955696, phone: "812-482-4461", pastor: "Rev. Brian Emmick", website: "http://www.preciousbloodjasperin.org" },
  { parish: "St. Isidore the Farmer", church: "St. Peter Celestine", address: "6864 E. State Rd. 164", city: "Celestine", state: "IN", zip: "47521", deanery: "East", lat: 38.383475, lng: -86.775749, phone: "812-634-1875", pastor: "Rev. Simon Natha", website: "http://www.saintisidoreparish.com" },
  { parish: "St. Isidore the Farmer", church: "St. Raphael", address: "5564 E. St. Raphael St.", city: "Dubois", state: "IN", zip: "47527", deanery: "East", lat: 38.443466, lng: -86.801726, phone: "812-634-1875", pastor: "Rev. Simon Natha", website: "http://www.saintisidoreparish.com" },
  { parish: "St. Martin", church: "St. Martin", address: "58 S. Church St.", city: "Chrisney", state: "IN", zip: "47611", deanery: "East", lat: 38.014448, lng: -87.033319, phone: "812-649-4811", pastor: "Rev. Jaison Kuzhiyil", website: "https://stbernardrockport.org/" },
  { parish: "St. Francis of Assisi", church: "Mary, Help of Christians", address: "6827 E 1930 N", city: "Dale", state: "IN", zip: "47523", deanery: "East", lat: 38.166042, lng: -86.926491, phone: "812-937-2200", pastor: "Rev. Crispine Adongo", website: "https://sfrancisofassisi.org/" },
  { parish: "St. Francis of Assisi", church: "St. Joseph", address: "8 E. Maple St.", city: "Dale", state: "IN", zip: "47523", deanery: "East", lat: 38.165159, lng: -86.988738, phone: "812-937-2200", pastor: "Rev. Crispine Adongo", website: "https://sfrancisofassisi.org/" },
  { parish: "St. Francis of Assisi", church: "St. Nicholas", address: "180 N. Holiday Blvd.", city: "Santa Claus", state: "IN", zip: "47579", deanery: "East", lat: 38.122572, lng: -86.925334, phone: "812-937-2200", pastor: "Rev. Crispine Adongo", website: "https://sfrancisofassisi.org/" },
  { parish: "Christ the King", church: "St. Ferdinand", address: "341 E. 10th St.", city: "Ferdinand", state: "IN", zip: "47532", deanery: "East", lat: 38.224283, lng: -86.859783, phone: "812-367-1212", pastor: "Rev. Riji George", website: "http://www.christthekingdc.org/" },
  { parish: "Christ the King", church: "St. Henry", address: "1311 W 1100 S", city: "Ferdinand", state: "IN", zip: "47532", deanery: "East", lat: 38.219267, lng: -86.902667, phone: "812-367-1212", pastor: "Rev. Riji George", website: "http://www.christthekingdc.org/" },
  { parish: "St. Mary", church: "St. Mary", address: "317 N. Washington St.", city: "Huntingburg", state: "IN", zip: "47542", deanery: "East", lat: 38.295816, lng: -86.949738, phone: "812-683-2372", pastor: "Rev. Biju Thomas", website: "https://www.stmaryshuntingburg.org/" },
  { parish: "St. Mary", church: "St. Mary", address: "2831 N 500 W", city: "Jasper", state: "IN", zip: "47546", deanery: "East", lat: 38.420072, lng: -86.997897, phone: "812-482-7041", pastor: "Rev. Bill Nicholas", website: "http://stmaryireland.com" },
  { parish: "St. Bernard", church: "St. Bernard", address: "547 Elm St.", city: "Rockport", state: "IN", zip: "47635", deanery: "East", lat: 37.884408, lng: -87.051462, phone: "812-649-4811", pastor: "Rev. Jaison Kuzhiyil", website: "http://www.stbernardrockport.org" },
  { parish: "Divine Mercy", church: "Sacred Heart", address: "2504 Walnut St.", city: "Schnellville", state: "IN", zip: "47580", deanery: "East", lat: 38.341186, lng: -86.754391, phone: "812-326-2777", pastor: "Rev. Jose Thomas", website: "https://www.divinemercyduco.org/" },
  { parish: "Divine Mercy", church: "St. Anthony", address: "4444 Ohio St.", city: "St. Anthony", state: "IN", zip: "47575", deanery: "East", lat: 38.315430, lng: -86.826422, phone: "812-326-2777", pastor: "Rev. Jose Thomas", website: "https://www.divinemercyduco.org/" },

  // ─── WEST DEANERY ───
  { parish: "St. Joseph", church: "St. Joseph", address: "410 S. Race St.", city: "Princeton", state: "IN", zip: "47670", deanery: "West", lat: 38.351685, lng: -87.562553, phone: "812-385-2617", pastor: "Rev. Gary Kaiser", website: "https://www.stjosephprinceton.org" },
  { parish: "Corpus Christi", church: "Corpus Christi", address: "5528 Hogue Road", city: "Evansville", state: "IN", zip: "47712", deanery: "West", lat: 37.982833, lng: -87.641878, phone: "812-422-2027", pastor: "Rev. Luke Hassler", website: "http://www.corpuschristievansville.org" },
  { parish: "Holy Cross", church: "Holy Cross", address: "305 E. Walnut St.", city: "Fort Branch", state: "IN", zip: "47648", deanery: "West", lat: 38.210000, lng: -87.605000, phone: "812-753-3548", pastor: "Rev. Gary Kaiser", website: "http://www.holycrossparish.info" },
  { parish: "Ss. Peter & Paul", church: "Ss. Peter & Paul", address: "211 N. Vine St.", city: "Haubstadt", state: "IN", zip: "47639", deanery: "West", lat: 38.206530, lng: -87.576714, phone: "812-768-6457", pastor: "Very Rev. Andrew Thomas", website: "https://www.stsppchurch.com/" },
  { parish: "St. Matthew", church: "St. Matthew", address: "421 Mulberry St.", city: "Mt. Vernon", state: "IN", zip: "47620", deanery: "West", lat: 37.933024, lng: -87.893436, phone: "812-838-2535", pastor: "Rev. Darnis Selvanayakam", website: "https://www.stmatthewparish.us/" },
  { parish: "Blessed Sacrament", church: "Blessed Sacrament", address: "11092 E. Lincoln Heights Rd.", city: "Oakland City", state: "IN", zip: "47660", deanery: "West", lat: 38.338077, lng: -87.361010, phone: "812-749-4474", pastor: "Rev. Vargheese Kalapurakudi" },
  { parish: "Ss. Peter & Paul", church: "Ss. Peter & Paul", address: "711 Walnut St.", city: "Petersburg", state: "IN", zip: "47567", deanery: "West", lat: 38.490521, lng: -87.279334, phone: "812-354-6942", pastor: "Rev. Vargheese Kalapurakudi" },
  { parish: "St. Francis Xavier", church: "Holy Angels", address: "805 Main St.", city: "New Harmony", state: "IN", zip: "47631", deanery: "West", lat: 38.126432, lng: -87.935100, phone: "812-874-2220", pastor: "Very Rev. Edward Schnur", website: "http://www.saintwendelschool.org/parish-info.html" },
  { parish: "St. Francis Xavier", church: "St. Francis Xavier", address: "10 N. St. Francis Ave.", city: "Poseyville", state: "IN", zip: "47633", deanery: "West", lat: 38.170364, lng: -87.780418, phone: "812-874-2220", pastor: "Very Rev. Edward Schnur", website: "http://www.saintwendelschool.org/parish-info.html" },
  { parish: "St. James", church: "St. James", address: "12300 S 50 W", city: "Haubstadt", state: "IN", zip: "47639", deanery: "West", lat: 38.171543, lng: -87.574295, phone: "812-867-5175", pastor: "Rev. Andrew Thomas", website: "http://www.stjameshaubstadt.com" },
  { parish: "St. Philip the Apostle", church: "St. Philip the Apostle", address: "3500 St. Philip Rd. S", city: "Mt. Vernon", state: "IN", zip: "47620", deanery: "West", lat: 37.982838, lng: -87.716858, phone: "812-985-2275", pastor: "Rev. Ryan Hilderbrand", website: "https://saintphilipchurch.net/" },
  { parish: "St. Wendel", church: "St. Wendel", address: "10542 W. Boonville New Harmony Rd.", city: "Evansville", state: "IN", zip: "47720", deanery: "West", lat: 38.106477, lng: -87.696638, phone: "812-963-3733", pastor: "Rev. Edward Schnur", website: "http://www.saintwendelschool.org/parish-info.html" },
  { parish: "St. Bernard", church: "St. Bernard", address: "5342 E. State Road 168", city: "Fort Branch", state: "IN", zip: "47648", deanery: "West", lat: 38.252941, lng: -87.465424, phone: "812-615-0201", pastor: "Rev. Chris Forler", website: "http://www.stbernardsnakerun.org" },
];

export const deaneryColors: Record<string, string> = {
  South: "#005CBA",
  North: "#004E73",
  East: "#C0442F",
  West: "#D09000",
};
