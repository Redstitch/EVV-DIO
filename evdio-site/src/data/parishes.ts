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
  { parish: "All Saints", church: "St. Anthony", address: "704 First Ave.", city: "Evansville", state: "IN", zip: "47710", deanery: "South", lat: 37.9716, lng: -87.5711, phone: "812-423-5209", pastor: "Rev. Zach Etienne", website: "http://www.allsaintsevansville.org" },
  { parish: "All Saints", church: "St. Joseph", address: "600 E. Virginia St.", city: "Evansville", state: "IN", zip: "47711", deanery: "South", lat: 37.9750, lng: -87.5650, phone: "812-423-5209", pastor: "Rev. Zach Etienne", website: "http://www.allsaintsevansville.org" },
  { parish: "Annunciation of the Lord", church: "Christ the King", address: "3010 E. Chandler Avenue", city: "Evansville", state: "IN", zip: "47714", deanery: "South", lat: 37.9890, lng: -87.5280, phone: "812-476-3061", pastor: "Rev. Benny Chacko", website: "http://www.annunciationevv.org" },
  { parish: "Annunciation of the Lord", church: "Holy Spirit", address: "1800 S. Lodge Avenue", city: "Evansville", state: "IN", zip: "47714", deanery: "South", lat: 37.9840, lng: -87.5240, phone: "812-476-3061", pastor: "Rev. Benny Chacko", website: "http://www.annunciationevv.org" },
  { parish: "Good Shepherd", church: "Good Shepherd", address: "2301 N. Stockwell Rd.", city: "Evansville", state: "IN", zip: "47715", deanery: "South", lat: 38.0010, lng: -87.5100, phone: "812-477-5405", pastor: "Very Rev. Zach Etienne", website: "http://www.gsparish.org" },
  { parish: "Holy Redeemer", church: "Holy Redeemer", address: "918 W. Mill Rd.", city: "Evansville", state: "IN", zip: "47710", deanery: "South", lat: 37.9940, lng: -87.5980, phone: "812-424-8344", pastor: "Very Rev. Jason Gries", website: "http://holyredeemerchurch.org" },
  { parish: "Holy Rosary", church: "Holy Rosary", address: "1301 S. Green River Rd.", city: "Evansville", state: "IN", zip: "47715", deanery: "South", lat: 37.9750, lng: -87.5050, phone: "812-477-8923", pastor: "Rev. Bernard Etienne", website: "http://www.hrparish.org" },
  { parish: "Resurrection", church: "Resurrection", address: "5301 New Harmony Rd.", city: "Evansville", state: "IN", zip: "47720", deanery: "South", lat: 37.9700, lng: -87.6200, phone: "812-963-3121", pastor: "Rev. Jerry Pratt", website: "http://www.resurrectionevv.com/" },
  { parish: "St. Benedict Cathedral", church: "St. Benedict Cathedral", address: "1328 Lincoln Avenue", city: "Evansville", state: "IN", zip: "47714", deanery: "South", lat: 37.9680, lng: -87.5580, phone: "812-425-3369", pastor: "Very Rev. Alex Zenthoefer", website: "http://www.saintbenedictcathedral.org" },
  { parish: "St. Boniface", church: "Sacred Heart", address: "2701 W. Franklin St.", city: "Evansville", state: "IN", zip: "47712", deanery: "South", lat: 37.9780, lng: -87.6000, phone: "812-423-1721", pastor: "Rev. Christopher Droste", website: "https://www.saintbonifaceparish.org/" },
  { parish: "St. Boniface", church: "St. Agnes", address: "1600 Glendale Avenue", city: "Evansville", state: "IN", zip: "47712", deanery: "South", lat: 37.9820, lng: -87.5920, phone: "812-423-1721", pastor: "Rev. Christopher Droste", website: "https://www.saintbonifaceparish.org/" },
  { parish: "St. Boniface", church: "St. Boniface", address: "418 N. Wabash Ave.", city: "Evansville", state: "IN", zip: "47712", deanery: "South", lat: 37.9740, lng: -87.5850, phone: "812-423-1721", pastor: "Rev. Christopher Droste", website: "https://www.saintbonifaceparish.org/" },
  { parish: "Sts. Mary & John", church: "St. Mary", address: "613 Cherry St.", city: "Evansville", state: "IN", zip: "47713", deanery: "South", lat: 37.9660, lng: -87.5620, phone: "812-425-1577", pastor: "Rev. Eugene Schmitt", website: "https://stsmaryandjohnparish.org/" },
  { parish: "St. Clement", church: "St. Clement", address: "422 E. Sycamore St.", city: "Boonville", state: "IN", zip: "47601", deanery: "South", lat: 38.0490, lng: -87.2744, phone: "812-897-4653", pastor: "Rev. Ron Kreilein", website: "https://stclementparish.weconnect.com/" },
  { parish: "St. Clement", church: "St. Rupert", address: "1244 W. Red Brush Rd.", city: "Newburgh", state: "IN", zip: "47630", deanery: "South", lat: 38.0300, lng: -87.3200, phone: "812-897-4653", pastor: "Rev. Ron Kreilein", website: "https://stclementparish.weconnect.com/" },
  { parish: "St. John the Evangelist", church: "St. John the Evangelist", address: "5301 Daylight Dr.", city: "Evansville", state: "IN", zip: "47725", deanery: "South", lat: 38.0380, lng: -87.5130, phone: "812-867-3718", pastor: "Rev. Chris Forler", website: "http://www.catholicdaylight.org" },
  { parish: "St. John the Baptist", church: "St. John the Baptist", address: "625 Frame Rd.", city: "Newburgh", state: "IN", zip: "47630", deanery: "South", lat: 37.9444, lng: -87.4053, phone: "812-490-1000", pastor: "Rev. Claude Burns", website: "http://www.sjbnewburgh.org" },
  { parish: "St. Joseph - Vanderburgh Co.", church: "St. Joseph", address: "6202 W. St. Joseph Rd.", city: "Evansville", state: "IN", zip: "47720", deanery: "South", lat: 37.9800, lng: -87.6050, phone: "812-963-3273", pastor: "Rev. Eugene Schroeder", website: "http://www.stjoeco.org" },

  // ─── NORTH DEANERY ───
  { parish: "St. Francis Xavier", church: "Basilica of St. Francis Xavier", address: "205 Church St.", city: "Vincennes", state: "IN", zip: "47591", deanery: "North", lat: 38.6773, lng: -87.5286, phone: "812-882-5638", pastor: "Rev. Tony Ernst", website: "http://www.stfrancisxaviervincennes.com" },
  { parish: "St. Francis Xavier", church: "Sacred Heart", address: "2004 N. Second St.", city: "Vincennes", state: "IN", zip: "47591", deanery: "North", lat: 38.6850, lng: -87.5260, phone: "812-882-5638", pastor: "Rev. Tony Ernst", website: "http://www.stfrancisxaviervincennes.com" },
  { parish: "St. Francis Xavier", church: "St. John the Baptist", address: "803 Main St.", city: "Vincennes", state: "IN", zip: "47591", deanery: "North", lat: 38.6780, lng: -87.5310, phone: "812-882-5638", pastor: "Rev. Tony Ernst", website: "http://www.stfrancisxaviervincennes.com" },
  { parish: "St. Francis Xavier", church: "St. Thomas", address: "6268 S. St. Thomas Rd.", city: "Vincennes", state: "IN", zip: "47591", deanery: "North", lat: 38.6200, lng: -87.5400, phone: "812-882-5638", pastor: "Rev. Tony Ernst", website: "http://www.stfrancisxaviervincennes.com" },
  { parish: "St. Francis Xavier", church: "St. Vincent de Paul", address: "1837 S Hart Street Rd.", city: "Vincennes", state: "IN", zip: "47591", deanery: "North", lat: 38.6600, lng: -87.5200, phone: "812-882-5638", pastor: "Rev. Tony Ernst", website: "http://www.stfrancisxaviervincennes.com" },
  { parish: "St. Philip Neri", church: "St. Philip Neri", address: "605 W. Fourth St.", city: "Bicknell", state: "IN", zip: "47512", deanery: "North", lat: 38.7742, lng: -87.3078, phone: "812-735-4069", pastor: "Rev. Tony Ernst", website: "https://www.stphilipneribicknell.org/" },
  { parish: "Holy Name", church: "Holy Name", address: "700 Lincoln Drive", city: "Bloomfield", state: "IN", zip: "47424", deanery: "North", lat: 39.0270, lng: -86.9375, phone: "812-847-7821", pastor: "Rev. Simon Natha" },
  { parish: "St. Joan of Arc", church: "St. Joan of Arc", address: "327 W McKinley St.", city: "Jasonville", state: "IN", zip: "47438", deanery: "North", lat: 39.1612, lng: -87.1986, phone: "812-268-4088", pastor: "Rev. Suresh Bakka", website: "https://www.stmary-sullivan.com/" },
  { parish: "St. Peter", church: "St. Peter", address: "489 E Street NE", city: "Linton", state: "IN", zip: "47441", deanery: "North", lat: 39.0348, lng: -87.1667, phone: "812-847-7821", pastor: "Rev. Srinivasa Malaka" },
  { parish: "St. John the Evangelist", church: "St. John", address: "408 Church St.", city: "Loogootee", state: "IN", zip: "47553", deanery: "North", lat: 38.6767, lng: -86.9142, phone: "812-295-2225", pastor: "Very Rev. Kenneth Walker", website: "http://www.stjohnloogootee.com" },
  { parish: "St. John the Evangelist", church: "St. Martin", address: "520 Whitfield Rd.", city: "Loogootee", state: "IN", zip: "47553", deanery: "North", lat: 38.6700, lng: -86.9200, phone: "812-295-2225", pastor: "Very Rev. Kenneth Walker", website: "http://www.stjohnloogootee.com" },
  { parish: "St. John the Evangelist", church: "St. Mary", address: "128 High St.", city: "Shoals", state: "IN", zip: "", deanery: "North", lat: 38.6660, lng: -86.7910, phone: "812-295-2225", pastor: "Very Rev. Kenneth Walker", website: "http://www.stjohnloogootee.com" },
  { parish: "St. Peter", church: "St. Peter", address: "305 N. Second St.", city: "Montgomery", state: "IN", zip: "47558", deanery: "North", lat: 38.6616, lng: -87.0428, phone: "812-486-3149", pastor: "Rev. Stephen McGinnis", website: "https://stpetermontgomery.org/" },
  { parish: "St. Peter", church: "All Saints", address: "100 W. Third St.", city: "Cannelburg", state: "IN", zip: "47519", deanery: "North", lat: 38.6650, lng: -87.0800, phone: "812-486-3149", pastor: "Rev. Stephen McGinnis", website: "https://stpetermontgomery.org/" },
  { parish: "St. Mary", church: "St. Mary", address: "105 E. Jackson St.", city: "Sullivan", state: "IN", zip: "47882", deanery: "North", lat: 39.0953, lng: -87.4050, phone: "812-268-4088", pastor: "Rev. Suresh Bakka", website: "https://stmary-sullivan.com/" },
  { parish: "Our Lady of Hope", church: "Our Lady of Hope", address: "315 NE Third St.", city: "Washington", state: "IN", zip: "47501", deanery: "North", lat: 38.6593, lng: -87.1728, phone: "812-254-2883", pastor: "Very Rev. Paul Ferguson", website: "http://www.ccwash.org" },

  // ─── EAST DEANERY ───
  { parish: "St. Joseph", church: "St. Joseph", address: "1029 Kundek St.", city: "Jasper", state: "IN", zip: "47546", deanery: "East", lat: 38.3914, lng: -86.9311, phone: "812-482-1805", pastor: "Very Rev. John Brosmer", website: "http://www.saintjosephjasper.org" },
  { parish: "Holy Family", church: "Holy Family", address: "950 E. Church Ave.", city: "Jasper", state: "IN", zip: "47546", deanery: "East", lat: 38.3970, lng: -86.9370, phone: "812-482-3076", pastor: "Rev. Jeff Read", website: "http://www.holyfamilyjasper.com" },
  { parish: "Precious Blood", church: "Precious Blood", address: "1385 W. Sixth St.", city: "Jasper", state: "IN", zip: "47546", deanery: "East", lat: 38.3880, lng: -86.9400, phone: "812-482-4461", pastor: "Rev. Brian Emmick", website: "http://www.preciousbloodjasperin.org" },
  { parish: "St. Isidore the Farmer", church: "St. Peter Celestine", address: "6864 E. State Rd. 164", city: "Celestine", state: "IN", zip: "47521", deanery: "East", lat: 38.3910, lng: -86.7590, phone: "812-634-1875", pastor: "Rev. Simon Natha", website: "http://www.saintisidoreparish.com" },
  { parish: "St. Isidore the Farmer", church: "St. Raphael", address: "5564 E. St. Raphael St.", city: "Dubois", state: "IN", zip: "47527", deanery: "East", lat: 38.3700, lng: -86.7800, phone: "812-634-1875", pastor: "Rev. Simon Natha", website: "http://www.saintisidoreparish.com" },
  { parish: "St. Martin", church: "St. Martin", address: "58 S. Church St.", city: "Chrisney", state: "IN", zip: "47611", deanery: "East", lat: 38.0140, lng: -87.0290, phone: "812-649-4811", pastor: "Rev. Jaison Kuzhiyil", website: "https://stbernardrockport.org/" },
  { parish: "St. Francis of Assisi", church: "Mary, Help of Christians", address: "6827 E 1930 N", city: "Dale", state: "IN", zip: "47523", deanery: "East", lat: 38.1800, lng: -86.9600, phone: "812-937-2200", pastor: "Rev. Crispine Adongo", website: "https://sfrancisofassisi.org/" },
  { parish: "St. Francis of Assisi", church: "St. Joseph", address: "8 E. Maple St.", city: "Dale", state: "IN", zip: "47523", deanery: "East", lat: 38.1690, lng: -86.9900, phone: "812-937-2200", pastor: "Rev. Crispine Adongo", website: "https://sfrancisofassisi.org/" },
  { parish: "St. Francis of Assisi", church: "St. Nicholas", address: "180 N. Holiday Blvd.", city: "Santa Claus", state: "IN", zip: "47579", deanery: "East", lat: 38.1200, lng: -86.9140, phone: "812-937-2200", pastor: "Rev. Crispine Adongo", website: "https://sfrancisofassisi.org/" },
  { parish: "Christ the King", church: "St. Ferdinand", address: "341 E. 10th St.", city: "Ferdinand", state: "IN", zip: "47532", deanery: "East", lat: 38.2240, lng: -86.8620, phone: "812-367-1212", pastor: "Rev. Riji George", website: "http://www.christthekingdc.org/" },
  { parish: "Christ the King", church: "St. Henry", address: "1311 W 1100 S", city: "Ferdinand", state: "IN", zip: "47532", deanery: "East", lat: 38.2100, lng: -86.8400, phone: "812-367-1212", pastor: "Rev. Riji George", website: "http://www.christthekingdc.org/" },
  { parish: "St. Mary", church: "St. Mary", address: "317 N. Washington St.", city: "Huntingburg", state: "IN", zip: "47542", deanery: "East", lat: 38.2990, lng: -86.9550, phone: "812-683-2372", pastor: "Rev. Biju Thomas", website: "https://www.stmaryshuntingburg.org/" },
  { parish: "St. Mary", church: "St. Mary", address: "2831 N 500 W", city: "Jasper", state: "IN", zip: "47546", deanery: "East", lat: 38.4130, lng: -86.8190, phone: "812-482-7041", pastor: "Rev. Bill Nicholas", website: "http://stmaryireland.com" },
  { parish: "St. Bernard", church: "St. Bernard", address: "547 Elm St.", city: "Rockport", state: "IN", zip: "47635", deanery: "East", lat: 37.8833, lng: -87.0492, phone: "812-649-4811", pastor: "Rev. Jaison Kuzhiyil", website: "http://www.stbernardrockport.org" },
  { parish: "Divine Mercy", church: "Sacred Heart", address: "2504 Walnut St.", city: "Schnellville", state: "IN", zip: "47580", deanery: "East", lat: 38.3500, lng: -86.8400, phone: "812-326-2777", pastor: "Rev. Jose Thomas", website: "https://www.divinemercyduco.org/" },
  { parish: "Divine Mercy", church: "St. Anthony", address: "4444 Ohio St.", city: "St. Anthony", state: "IN", zip: "47575", deanery: "East", lat: 38.3410, lng: -86.8200, phone: "812-326-2777", pastor: "Rev. Jose Thomas", website: "https://www.divinemercyduco.org/" },

  // ─── WEST DEANERY ───
  { parish: "St. Joseph", church: "St. Joseph", address: "410 S. Race St.", city: "Princeton", state: "IN", zip: "47670", deanery: "West", lat: 38.3553, lng: -87.5675, phone: "812-385-2617", pastor: "Rev. Gary Kaiser", website: "https://www.stjosephprinceton.org" },
  { parish: "Corpus Christi", church: "Corpus Christi", address: "5528 Hogue Road", city: "Evansville", state: "IN", zip: "47712", deanery: "West", lat: 37.9620, lng: -87.6100, phone: "812-422-2027", pastor: "Rev. Luke Hassler", website: "http://www.corpuschristievansville.org" },
  { parish: "Holy Cross", church: "Holy Cross", address: "305 E. Walnut St.", city: "Fort Branch", state: "IN", zip: "47648", deanery: "West", lat: 38.2512, lng: -87.5814, phone: "812-753-3548", pastor: "Rev. Gary Kaiser", website: "http://www.holycrossparish.info" },
  { parish: "Ss. Peter & Paul", church: "Ss. Peter & Paul", address: "211 N. Vine St.", city: "Haubstadt", state: "IN", zip: "47639", deanery: "West", lat: 38.2048, lng: -87.5730, phone: "812-768-6457", pastor: "Very Rev. Andrew Thomas", website: "https://www.stsppchurch.com/" },
  { parish: "St. Matthew", church: "St. Matthew", address: "421 Mulberry St.", city: "Mt. Vernon", state: "IN", zip: "47620", deanery: "West", lat: 37.9322, lng: -87.8950, phone: "812-838-2535", pastor: "Rev. Darnis Selvanayakam", website: "https://www.stmatthewparish.us/" },
  { parish: "Blessed Sacrament", church: "Blessed Sacrament", address: "11092 E. Lincoln Heights Rd.", city: "Oakland City", state: "IN", zip: "47660", deanery: "West", lat: 38.3385, lng: -87.3450, phone: "812-749-4474", pastor: "Rev. Vargheese Kalapurakudi" },
  { parish: "Ss. Peter & Paul", church: "Ss. Peter & Paul", address: "711 Walnut St.", city: "Petersburg", state: "IN", zip: "47567", deanery: "West", lat: 38.4920, lng: -87.2786, phone: "812-354-6942", pastor: "Rev. Vargheese Kalapurakudi" },
  { parish: "St. Francis Xavier", church: "Holy Angels", address: "805 Main St.", city: "New Harmony", state: "IN", zip: "47631", deanery: "West", lat: 38.1300, lng: -87.9350, phone: "812-874-2220", pastor: "Very Rev. Edward Schnur", website: "http://www.saintwendelschool.org/parish-info.html" },
  { parish: "St. Francis Xavier", church: "St. Francis Xavier", address: "10 N. St. Francis Ave.", city: "Poseyville", state: "IN", zip: "47633", deanery: "West", lat: 38.1700, lng: -87.7830, phone: "812-874-2220", pastor: "Very Rev. Edward Schnur", website: "http://www.saintwendelschool.org/parish-info.html" },
  { parish: "St. James", church: "St. James", address: "12300 S 50 W", city: "Haubstadt", state: "IN", zip: "47639", deanery: "West", lat: 38.2100, lng: -87.5650, phone: "812-867-5175", pastor: "Rev. Andrew Thomas", website: "http://www.stjameshaubstadt.com" },
  { parish: "St. Philip the Apostle", church: "St. Philip the Apostle", address: "3500 St. Philip Rd. S", city: "Mt. Vernon", state: "IN", zip: "47620", deanery: "West", lat: 37.9400, lng: -87.8800, phone: "812-985-2275", pastor: "Rev. Ryan Hilderbrand", website: "https://saintphilipchurch.net/" },
  { parish: "St. Wendel", church: "St. Wendel", address: "10542 W. Boonville New Harmony Rd.", city: "Evansville", state: "IN", zip: "47720", deanery: "West", lat: 38.0780, lng: -87.5640, phone: "812-963-3733", pastor: "Rev. Edward Schnur", website: "http://www.saintwendelschool.org/parish-info.html" },
  { parish: "St. Bernard", church: "St. Bernard", address: "5342 E. State Road 168", city: "Fort Branch", state: "IN", zip: "47648", deanery: "West", lat: 38.1200, lng: -87.6300, phone: "812-615-0201", pastor: "Rev. Chris Forler", website: "http://www.stbernardsnakerun.org" },
];

export const deaneryColors: Record<string, string> = {
  South: "#005CBA",
  North: "#004E73",
  East: "#C0442F",
  West: "#D09000",
};
