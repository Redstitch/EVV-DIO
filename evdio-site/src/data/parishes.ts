export interface Church {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface Parish {
  name: string;
  city: string;
  state: string;
  zip: string;
  deanery: "South" | "North" | "East" | "West";
  lat: number;
  lng: number;
  address: string;
  phone: string;
  website?: string;
  pastor: string;
  churches?: Church[];
}

export const parishes: Parish[] = [
  // ─── SOUTH DEANERY ───
  { name: "All Saints", city: "Evansville", state: "IN", zip: "47710", deanery: "South", lat: 37.9770, lng: -87.5710, address: "704 First Ave., Evansville, IN 47710", phone: "812-423-5209", website: "http://www.allsaintsevansville.org", pastor: "Rev. Zach Etienne", churches: [
    { name: "St. Anthony", address: "704 First Ave.", city: "Evansville", state: "IN", zip: "47710" },
    { name: "St. Joseph", address: "600 E. Virginia St.", city: "Evansville", state: "IN", zip: "47711" },
  ]},
  { name: "Annunciation of the Lord", city: "Evansville", state: "IN", zip: "47714", deanery: "South", lat: 37.9890, lng: -87.5280, address: "3010 E. Chandler Avenue, Evansville, IN 47714", phone: "812-476-3061", website: "http://www.annunciationevv.org", pastor: "Rev. Benny Chacko", churches: [
    { name: "Christ the King", address: "3010 E. Chandler Avenue", city: "Evansville", state: "IN", zip: "47714" },
    { name: "Holy Spirit", address: "1800 S. Lodge Avenue", city: "Evansville", state: "IN", zip: "47714" },
  ]},
  { name: "Good Shepherd", city: "Evansville", state: "IN", zip: "47715", deanery: "South", lat: 38.0010, lng: -87.5100, address: "2301 N. Stockwell Rd., Evansville, IN 47715", phone: "812-477-5405", website: "http://www.gsparish.org", pastor: "Very Rev. Zach Etienne" },
  { name: "Holy Redeemer", city: "Evansville", state: "IN", zip: "47710", deanery: "South", lat: 37.9940, lng: -87.5980, address: "918 W. Mill Rd., Evansville, IN 47710", phone: "812-424-8344", website: "http://holyredeemerchurch.org", pastor: "Very Rev. Jason Gries" },
  { name: "Holy Rosary", city: "Evansville", state: "IN", zip: "47715", deanery: "South", lat: 37.9750, lng: -87.5050, address: "1301 S. Green River Rd., Evansville, IN 47715", phone: "812-477-8923", website: "http://www.hrparish.org", pastor: "Rev. Bernard Etienne" },
  { name: "Resurrection", city: "Evansville", state: "IN", zip: "47720", deanery: "South", lat: 37.9700, lng: -87.6200, address: "5301 New Harmony Rd., Evansville, IN 47720", phone: "812-963-3121", website: "http://www.resurrectionevv.com/", pastor: "Rev. Jerry Pratt" },
  { name: "St. Benedict Cathedral", city: "Evansville", state: "IN", zip: "47714", deanery: "South", lat: 37.9716, lng: -87.5711, address: "1328 Lincoln Avenue, Evansville, IN 47714", phone: "812-425-3369", website: "http://www.saintbenedictcathedral.org", pastor: "Very Rev. Alex Zenthoefer" },
  { name: "St. Boniface", city: "Evansville", state: "IN", zip: "47712", deanery: "South", lat: 37.9740, lng: -87.5850, address: "418 N. Wabash Ave., Evansville, IN 47712", phone: "812-423-1721", website: "https://www.saintbonifaceparish.org/", pastor: "Rev. Christopher Droste", churches: [
    { name: "Sacred Heart", address: "2701 W. Franklin St.", city: "Evansville", state: "IN", zip: "47712" },
    { name: "St. Agnes", address: "1600 Glendale Avenue", city: "Evansville", state: "IN", zip: "47712" },
    { name: "St. Boniface", address: "418 N. Wabash Ave.", city: "Evansville", state: "IN", zip: "47712" },
  ]},
  { name: "Sts. Mary & John", city: "Evansville", state: "IN", zip: "47713", deanery: "South", lat: 37.9660, lng: -87.5620, address: "613 Cherry St., Evansville, IN 47713", phone: "812-425-1577", website: "https://stsmaryandjohnparish.org/", pastor: "Rev. Eugene Schmitt" },
  { name: "St. Clement", city: "Boonville", state: "IN", zip: "47601", deanery: "South", lat: 38.0490, lng: -87.2744, address: "422 E. Sycamore St., Boonville, IN 47601", phone: "812-897-4653", website: "https://stclementparish.weconnect.com/", pastor: "Rev. Ron Kreilein", churches: [
    { name: "St. Clement", address: "422 E. Sycamore St.", city: "Boonville", state: "IN", zip: "47601" },
    { name: "St. Rupert", address: "1244 W. Red Brush Rd.", city: "Newburgh", state: "IN", zip: "47630" },
  ]},
  { name: "St. John the Evangelist", city: "Daylight", state: "IN", zip: "47725", deanery: "South", lat: 38.0380, lng: -87.5130, address: "5301 Daylight Dr., Evansville, IN 47725", phone: "812-867-3718", website: "http://www.catholicdaylight.org", pastor: "Rev. Chris Forler" },
  { name: "St. John the Baptist", city: "Newburgh", state: "IN", zip: "47630", deanery: "South", lat: 37.9444, lng: -87.4053, address: "625 Frame Rd., Newburgh, IN 47630", phone: "812-490-1000", website: "http://www.sjbnewburgh.org", pastor: "Rev. Claude Burns" },
  { name: "St. Joseph - Vanderburgh Co.", city: "Evansville", state: "IN", zip: "47720", deanery: "South", lat: 37.9800, lng: -87.6050, address: "6202 W. St. Joseph Rd., Evansville, IN 47720", phone: "812-963-3273", website: "http://www.stjoeco.org", pastor: "Rev. Eugene Schroeder" },

  // ─── NORTH DEANERY ───
  { name: "St. Francis Xavier", city: "Vincennes", state: "IN", zip: "47591", deanery: "North", lat: 38.6773, lng: -87.5286, address: "205 Church St., Vincennes, IN 47591", phone: "812-882-5638", website: "http://www.stfrancisxaviervincennes.com", pastor: "Rev. Tony Ernst", churches: [
    { name: "Basilica of St. Francis Xavier", address: "205 Church St.", city: "Vincennes", state: "IN", zip: "47591" },
    { name: "Sacred Heart", address: "2004 N. Second St.", city: "Vincennes", state: "IN", zip: "47591" },
    { name: "St. John the Baptist", address: "803 Main St.", city: "Vincennes", state: "IN", zip: "47591" },
    { name: "St. Thomas", address: "6268 S. St. Thomas Rd.", city: "Vincennes", state: "IN", zip: "47591" },
    { name: "St. Vincent de Paul", address: "1837 S Hart Street Rd.", city: "Vincennes", state: "IN", zip: "47591" },
  ]},
  { name: "St. Philip Neri", city: "Bicknell", state: "IN", zip: "47512", deanery: "North", lat: 38.7742, lng: -87.3078, address: "605 W. Fourth St., Bicknell, IN 47512", phone: "812-735-4069", website: "https://www.stphilipneribicknell.org/", pastor: "Rev. Tony Ernst" },
  { name: "Holy Name", city: "Bloomfield", state: "IN", zip: "47424", deanery: "North", lat: 39.0270, lng: -86.9375, address: "700 Lincoln Drive, Bloomfield, IN 47424", phone: "812-847-7821", pastor: "Rev. Simon Natha" },
  { name: "St. Joan of Arc", city: "Jasonville", state: "IN", zip: "47438", deanery: "North", lat: 39.1612, lng: -87.1986, address: "327 W McKinley St., Jasonville, IN 47438", phone: "812-268-4088", website: "https://www.stmary-sullivan.com/", pastor: "Rev. Suresh Bakka" },
  { name: "St. Peter", city: "Linton", state: "IN", zip: "47441", deanery: "North", lat: 39.0348, lng: -87.1667, address: "489 E Street NE, Linton, IN 47441", phone: "812-847-7821", pastor: "Rev. Srinivasa Malaka" },
  { name: "St. John the Evangelist", city: "Loogootee", state: "IN", zip: "47553", deanery: "North", lat: 38.6767, lng: -86.9142, address: "408 Church St., Loogootee, IN 47553", phone: "812-295-2225", website: "http://www.stjohnloogootee.com", pastor: "Very Rev. Kenneth Walker", churches: [
    { name: "St. John", address: "408 Church St.", city: "Loogootee", state: "IN", zip: "47553" },
    { name: "St. Martin", address: "520 Whitfield Rd.", city: "Loogootee", state: "IN", zip: "47553" },
    { name: "St. Mary", address: "128 High St.", city: "Shoals", state: "IN", zip: "" },
  ]},
  { name: "St. Peter", city: "Montgomery", state: "IN", zip: "47558", deanery: "North", lat: 38.6616, lng: -87.0428, address: "305 N. Second St., Montgomery, IN 47558", phone: "812-486-3149", website: "https://stpetermontgomery.org/", pastor: "Rev. Stephen McGinnis", churches: [
    { name: "St. Peter", address: "305 N. Second St.", city: "Montgomery", state: "IN", zip: "47558" },
    { name: "All Saints", address: "100 W. Third St.", city: "Cannelburg", state: "IN", zip: "47519" },
  ]},
  { name: "St. Mary", city: "Sullivan", state: "IN", zip: "47882", deanery: "North", lat: 39.0953, lng: -87.4050, address: "105 E. Jackson St., Sullivan, IN 47882", phone: "812-268-4088", website: "https://stmary-sullivan.com/", pastor: "Rev. Suresh Bakka" },
  { name: "Our Lady of Hope", city: "Washington", state: "IN", zip: "47501", deanery: "North", lat: 38.6593, lng: -87.1728, address: "315 NE Third St., Washington, IN 47501", phone: "812-254-2883", website: "http://www.ccwash.org", pastor: "Very Rev. Paul Ferguson" },

  // ─── EAST DEANERY ───
  { name: "St. Joseph", city: "Jasper", state: "IN", zip: "47546", deanery: "East", lat: 38.3914, lng: -86.9311, address: "1029 Kundek St., Jasper, IN 47546", phone: "812-482-1805", website: "http://www.saintjosephjasper.org", pastor: "Very Rev. John Brosmer" },
  { name: "Holy Family", city: "Jasper", state: "IN", zip: "47546", deanery: "East", lat: 38.3970, lng: -86.9370, address: "950 E. Church Ave., Jasper, IN 47546", phone: "812-482-3076", website: "http://www.holyfamilyjasper.com", pastor: "Rev. Jeff Read" },
  { name: "Precious Blood", city: "Jasper", state: "IN", zip: "47546", deanery: "East", lat: 38.3880, lng: -86.9400, address: "1385 W. Sixth St., Jasper, IN 47546", phone: "812-482-4461", website: "http://www.preciousbloodjasperin.org", pastor: "Rev. Brian Emmick" },
  { name: "St. Isidore the Farmer", city: "Celestine", state: "IN", zip: "47521", deanery: "East", lat: 38.3910, lng: -86.7590, address: "6864 E. State Rd. 164, Celestine, IN 47521", phone: "812-634-1875", website: "http://www.saintisidoreparish.com", pastor: "Rev. Simon Natha", churches: [
    { name: "St. Peter Celestine", address: "6864 E. State Rd. 164", city: "Celestine", state: "IN", zip: "47521" },
    { name: "St. Raphael", address: "5564 E. St. Raphael St.", city: "Dubois", state: "IN", zip: "47527" },
  ]},
  { name: "St. Martin", city: "Chrisney", state: "IN", zip: "47611", deanery: "East", lat: 38.0140, lng: -87.0290, address: "58 S. Church St., Chrisney, IN 47611", phone: "812-649-4811", website: "https://stbernardrockport.org/", pastor: "Rev. Jaison Kuzhiyil" },
  { name: "St. Francis of Assisi", city: "Dale", state: "IN", zip: "47523", deanery: "East", lat: 38.1690, lng: -86.9900, address: "8 E. Maple St., Dale, IN 47523", phone: "812-937-2200", website: "https://sfrancisofassisi.org/", pastor: "Rev. Crispine Adongo", churches: [
    { name: "Mary, Help of Christians", address: "6827 E 1930 N", city: "Dale", state: "IN", zip: "47523" },
    { name: "St. Joseph", address: "8 E. Maple St.", city: "Dale", state: "IN", zip: "47523" },
    { name: "St. Nicholas", address: "180 N. Holiday Blvd.", city: "Santa Claus", state: "IN", zip: "47579" },
  ]},
  { name: "Christ the King", city: "Ferdinand", state: "IN", zip: "47532", deanery: "East", lat: 38.2240, lng: -86.8620, address: "341 E. 10th St., Ferdinand, IN 47532", phone: "812-367-1212", website: "http://www.christthekingdc.org/", pastor: "Rev. Riji George", churches: [
    { name: "St. Ferdinand", address: "341 E. 10th St.", city: "Ferdinand", state: "IN", zip: "47532" },
    { name: "St. Henry", address: "1311 W 1100 S", city: "Ferdinand", state: "IN", zip: "47532" },
  ]},
  { name: "St. Mary", city: "Huntingburg", state: "IN", zip: "47542", deanery: "East", lat: 38.2990, lng: -86.9550, address: "317 N. Washington St., Huntingburg, IN 47542", phone: "812-683-2372", website: "https://www.stmaryshuntingburg.org/", pastor: "Rev. Biju Thomas" },
  { name: "St. Mary", city: "Ireland", state: "IN", zip: "47546", deanery: "East", lat: 38.4130, lng: -86.8190, address: "2831 N 500 W, Jasper, IN 47546", phone: "812-482-7041", website: "http://stmaryireland.com", pastor: "Rev. Bill Nicholas" },
  { name: "St. Bernard", city: "Rockport", state: "IN", zip: "47635", deanery: "East", lat: 37.8833, lng: -87.0492, address: "547 Elm St., Rockport, IN 47635", phone: "812-649-4811", website: "http://www.stbernardrockport.org", pastor: "Rev. Jaison Kuzhiyil" },
  { name: "Divine Mercy", city: "St. Anthony", state: "IN", zip: "47575", deanery: "East", lat: 38.3410, lng: -86.8200, address: "4444 Ohio St., St. Anthony, IN 47575", phone: "812-326-2777", website: "https://www.divinemercyduco.org/", pastor: "Rev. Jose Thomas", churches: [
    { name: "Sacred Heart", address: "2504 Walnut St.", city: "Schnellville", state: "IN", zip: "47580" },
    { name: "St. Anthony", address: "4444 Ohio St.", city: "St. Anthony", state: "IN", zip: "47575" },
  ]},

  // ─── WEST DEANERY ───
  { name: "St. Joseph", city: "Princeton", state: "IN", zip: "47670", deanery: "West", lat: 38.3553, lng: -87.5675, address: "410 S. Race St., Princeton, IN 47670", phone: "812-385-2617", website: "https://www.stjosephprinceton.org", pastor: "Rev. Gary Kaiser" },
  { name: "Corpus Christi", city: "Evansville", state: "IN", zip: "47712", deanery: "West", lat: 37.9620, lng: -87.6100, address: "5528 Hogue Road, Evansville, IN 47712", phone: "812-422-2027", website: "http://www.corpuschristievansville.org", pastor: "Rev. Luke Hassler" },
  { name: "Holy Cross", city: "Fort Branch", state: "IN", zip: "47648", deanery: "West", lat: 38.2512, lng: -87.5814, address: "305 E. Walnut St., Fort Branch, IN 47648", phone: "812-753-3548", website: "http://www.holycrossparish.info", pastor: "Rev. Gary Kaiser" },
  { name: "Ss. Peter & Paul", city: "Haubstadt", state: "IN", zip: "47639", deanery: "West", lat: 38.2048, lng: -87.5730, address: "211 N. Vine St., Haubstadt, IN 47639", phone: "812-768-6457", website: "https://www.stsppchurch.com/", pastor: "Very Rev. Andrew Thomas" },
  { name: "St. Matthew", city: "Mt. Vernon", state: "IN", zip: "47620", deanery: "West", lat: 37.9322, lng: -87.8950, address: "421 Mulberry St., Mt. Vernon, IN 47620", phone: "812-838-2535", website: "https://www.stmatthewparish.us/", pastor: "Rev. Darnis Selvanayakam" },
  { name: "Blessed Sacrament", city: "Oakland City", state: "IN", zip: "47660", deanery: "West", lat: 38.3385, lng: -87.3450, address: "11092 E. Lincoln Heights Rd., Oakland City, IN 47660", phone: "812-749-4474", pastor: "Rev. Vargheese Kalapurakudi" },
  { name: "Ss. Peter & Paul", city: "Petersburg", state: "IN", zip: "47567", deanery: "West", lat: 38.4920, lng: -87.2786, address: "711 Walnut St., Petersburg, IN 47567", phone: "812-354-6942", pastor: "Rev. Vargheese Kalapurakudi" },
  { name: "St. Francis Xavier", city: "Poseyville", state: "IN", zip: "47633", deanery: "West", lat: 38.1700, lng: -87.7830, address: "10 N. St. Francis Ave., Poseyville, IN 47633", phone: "812-874-2220", website: "http://www.saintwendelschool.org/parish-info.html", pastor: "Very Rev. Edward Schnur", churches: [
    { name: "Holy Angels", address: "805 Main St.", city: "New Harmony", state: "IN", zip: "47631" },
    { name: "St. Francis Xavier", address: "10 N. St. Francis Ave.", city: "Poseyville", state: "IN", zip: "47633" },
  ]},
  { name: "St. James", city: "Haubstadt", state: "IN", zip: "47639", deanery: "West", lat: 38.2100, lng: -87.5650, address: "12300 S 50 W, Haubstadt, IN 47639", phone: "812-867-5175", website: "http://www.stjameshaubstadt.com", pastor: "Rev. Andrew Thomas" },
  { name: "St. Philip the Apostle", city: "Mt. Vernon", state: "IN", zip: "47620", deanery: "West", lat: 37.9400, lng: -87.8800, address: "3500 St. Philip Rd. S, Mt. Vernon, IN 47620", phone: "812-985-2275", website: "https://saintphilipchurch.net/", pastor: "Rev. Ryan Hilderbrand" },
  { name: "St. Wendel", city: "Evansville", state: "IN", zip: "47720", deanery: "West", lat: 38.0780, lng: -87.5640, address: "10542 W. Boonville New Harmony Rd., Evansville, IN 47720", phone: "812-963-3733", website: "http://www.saintwendelschool.org/parish-info.html", pastor: "Rev. Edward Schnur" },
  { name: "St. Bernard", city: "Fort Branch", state: "IN", zip: "47648", deanery: "West", lat: 38.1200, lng: -87.6300, address: "5342 E. State Road 168, Fort Branch, IN 47648", phone: "812-615-0201", website: "http://www.stbernardsnakerun.org", pastor: "Rev. Chris Forler" },
];

export const deaneryColors: Record<string, string> = {
  South: "#005CBA",
  North: "#004E73",
  East: "#C0442F",
  West: "#D09000",
};
