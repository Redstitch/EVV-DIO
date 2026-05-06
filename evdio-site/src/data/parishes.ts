export interface Church {
  name: string;
  address: string;
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
  phone?: string;
  website?: string;
  pastor?: string;
  churches?: Church[];
}

export const parishes: Parish[] = [
  // ─── SOUTH DEANERY ───
  { name: "All Saints Parish", city: "Evansville", state: "IN", zip: "47710", deanery: "South", lat: 37.9770, lng: -87.5710, address: "704 N 1st Ave, Evansville, IN 47710", website: "https://allsaintsevansville.org", pastor: "Very Rev. Zachary Etienne" },
  { name: "Annunciation of the Lord Parish", city: "Evansville", state: "IN", zip: "47714", deanery: "South", lat: 37.9890, lng: -87.5280, address: "3010 E Chandler Ave, Evansville, IN 47714", website: "https://www.annunciationevv.org/", pastor: "Fr. Benny Chacko", churches: [
    { name: "Christ the King Church", address: "3010 E Chandler Ave, Evansville, IN 47714" },
    { name: "Holy Spirit Church", address: "1800 Lodge Ave, Evansville, IN 47714" },
  ]},
  { name: "Good Shepherd Parish", city: "Evansville", state: "IN", zip: "47715", deanery: "South", lat: 38.0010, lng: -87.5100, address: "2301 N Stockwell Rd, Evansville, IN 47715", website: "https://gsparish.org", pastor: "Very Rev. Zachary Etienne" },
  { name: "Holy Redeemer Parish", city: "Evansville", state: "IN", zip: "47710", deanery: "South", lat: 37.9940, lng: -87.5980, address: "918 W Mill Rd, Evansville, IN 47710", website: "https://holyredeemerchurch.org", pastor: "Very Rev. Jason Gries" },
  { name: "Holy Rosary Parish", city: "Evansville", state: "IN", zip: "47715", deanery: "South", lat: 37.9750, lng: -87.5050, address: "1301 S Green River Rd, Evansville, IN 47715", website: "https://hrparish.org", pastor: "Fr. Bernie Etienne" },
  { name: "Resurrection Parish", city: "Evansville", state: "IN", zip: "47720", deanery: "South", lat: 37.9700, lng: -87.6200, address: "5301 New Harmony Rd, Evansville, IN 47720", website: "https://resurrectionevv.com", pastor: "Fr. Jerry Pratt" },
  { name: "St. Benedict Cathedral Parish", city: "Evansville", state: "IN", zip: "47714", deanery: "South", lat: 37.9716, lng: -87.5711, address: "1328 Lincoln Ave, Evansville, IN 47714", website: "https://saintbenedictcathedral.org", pastor: "Very Rev. Alex Zenthoefer" },
  { name: "St. Boniface Parish", city: "Evansville", state: "IN", zip: "47712", deanery: "South", lat: 37.9740, lng: -87.5850, address: "418 N Wabash Ave, Evansville, IN 47712", website: "https://saintbonifaceparish.org", pastor: "Fr. Christopher Droste" },
  { name: "Sts. Mary and John Parish", city: "Evansville", state: "IN", zip: "47713", deanery: "South", lat: 37.9660, lng: -87.5620, address: "613 Cherry St, Evansville, IN 47713", website: "https://stsmaryandjohnparish.org", pastor: "Fr. Eugene Schmitt" },
  { name: "St. Clement Parish", city: "Boonville", state: "IN", zip: "47601", deanery: "South", lat: 38.0490, lng: -87.2744, address: "422 E Sycamore St, Boonville, IN 47601", website: "https://stclementparish.weconnect.com", pastor: "Fr. Jack Durchholz" },
  { name: "St. John the Evangelist Parish", city: "Daylight", state: "IN", zip: "47725", deanery: "South", lat: 38.0380, lng: -87.5130, address: "5301 Daylight Dr, Evansville, IN 47725", website: "https://catholicdaylight.org", pastor: "Fr. Chris Forler" },
  { name: "St. John the Baptist Parish", city: "Newburgh", state: "IN", zip: "47630", deanery: "South", lat: 37.9444, lng: -87.4053, address: "625 Frame Rd, Newburgh, IN 47630", website: "https://sjbnewburgh.org", pastor: "Fr. Claude Burns" },

  // ─── NORTH DEANERY ───
  { name: "St. Francis Xavier Parish", city: "Vincennes", state: "IN", zip: "47591", deanery: "North", lat: 38.6773, lng: -87.5286, address: "106 S 3rd St, Vincennes, IN 47591", website: "https://stfrancisxaviervincennes.com", pastor: "Fr. Tony Ernst" },
  { name: "St. Philip Neri Parish", city: "Bicknell", state: "IN", zip: "47512", deanery: "North", lat: 38.7742, lng: -87.3078, address: "605 W 4th St, Bicknell, IN 47512", website: "https://stphilipneribicknell.org", pastor: "Fr. Tony Ernst" },
  { name: "Holy Name of Jesus Parish", city: "Bloomfield", state: "IN", zip: "47424", deanery: "North", lat: 39.0270, lng: -86.9375, address: "700 Lincoln Dr, Bloomfield, IN 47424", pastor: "Fr. Srinivasa Malaka, HGN" },
  { name: "St. Joan of Arc Parish", city: "Jasonville", state: "IN", zip: "47438", deanery: "North", lat: 39.1612, lng: -87.1986, address: "327 W McKinley St, Jasonville, IN 47438", pastor: "Fr. Suresh Bakka" },
  { name: "St. Peter Parish", city: "Linton", state: "IN", zip: "47441", deanery: "North", lat: 39.0348, lng: -87.1667, address: "489 E St NE, Linton, IN 47441", pastor: "Fr. Srinivasa Malaka, HGN" },
  { name: "St. John the Evangelist Parish", city: "Loogootee", state: "IN", zip: "47553", deanery: "North", lat: 38.6767, lng: -86.9142, address: "408 Church St, Loogootee, IN 47553", website: "https://stjohnloogootee.com", pastor: "Very Rev. Kenneth Walker" },
  { name: "St. Peter Parish", city: "Montgomery", state: "IN", zip: "47558", deanery: "North", lat: 38.6616, lng: -87.0428, address: "305 N 2nd St, Montgomery, IN 47558", website: "https://stpetermontgomery.org", pastor: "Fr. Steven McGinnis" },
  { name: "St. Mary Parish", city: "Sullivan", state: "IN", zip: "47882", deanery: "North", lat: 39.0953, lng: -87.4050, address: "105 E Jackson St, Sullivan, IN 47882", website: "https://stmary-sullivan.com", pastor: "Fr. Suresh Bakka" },
  { name: "Our Lady of Hope Parish", city: "Washington", state: "IN", zip: "47501", deanery: "North", lat: 38.6593, lng: -87.1728, address: "315 NE 3rd St, Washington, IN 47501", website: "https://ccwash.org", pastor: "Very Rev. Paul Ferguson" },

  // ─── EAST DEANERY ───
  { name: "St. Joseph Parish", city: "Jasper", state: "IN", zip: "47546", deanery: "East", lat: 38.3914, lng: -86.9311, address: "1029 Kundek St, Jasper, IN 47546", website: "https://saintjosephjasper.org", pastor: "Fr. John Brosmer" },
  { name: "Holy Family Parish", city: "Jasper", state: "IN", zip: "47546", deanery: "East", lat: 38.3970, lng: -86.9370, address: "950 Church Ave, Jasper, IN 47546", website: "https://www.holyfamilyjasper.com", pastor: "Fr. Jeff Read" },
  { name: "Precious Blood Parish", city: "Jasper", state: "IN", zip: "47546", deanery: "East", lat: 38.3880, lng: -86.9400, address: "1385 W Sixth St, Jasper, IN 47546", website: "https://preciousbloodjasperin.org", pastor: "Fr. Brian Emmick" },
  { name: "St. Isidore the Farmer Parish", city: "Celestine", state: "IN", zip: "47521", deanery: "East", lat: 38.3910, lng: -86.7590, address: "6864 E State Road 164, Celestine, IN 47521", website: "https://www.saintisidoreparish.com", pastor: "Fr. Simon Natha", churches: [
    { name: "St. Peter Celestine Church", address: "6864 E State Road 164, Celestine, IN 47521" },
    { name: "St. Raphael Church", address: "5564 E St. Raphael St, Dubois, IN 47527" },
  ]},
  { name: "St. Martin Parish", city: "Chrisney", state: "IN", zip: "47611", deanery: "East", lat: 38.0140, lng: -87.0290, address: "58 S Church St, Chrisney, IN 47611", website: "https://stbernardrockport.org", pastor: "Fr. Jeff Read" },
  { name: "St. Francis of Assisi Parish", city: "Dale", state: "IN", zip: "47523", deanery: "East", lat: 38.1690, lng: -86.9900, address: "8 E Maple St, Dale, IN 47523", website: "https://sfrancisofassisi.org", pastor: "Fr. Crispine Adongo", churches: [
    { name: "St. Joseph Church", address: "8 E Maple St, Dale, IN 47523" },
    { name: "Mary, Help of Christians Church", address: "6827 County Rd 675 N, Mariah Hill, IN 47556" },
    { name: "St. Nicholas Church", address: "180 N Holiday Blvd, Santa Claus, IN 47579" },
  ]},
  { name: "Christ the King Parish", city: "Ferdinand", state: "IN", zip: "47532", deanery: "East", lat: 38.2240, lng: -86.8620, address: "840 Maryland St, Ferdinand, IN 47532", website: "https://www.christthekingdc.org", pastor: "Fr. Anthony Govind", churches: [
    { name: "St. Ferdinand Church", address: "840 Maryland St, Ferdinand, IN 47532" },
    { name: "St. Henry Church", address: "1311 W 1100 S, Ferdinand, IN 47532" },
  ]},
  { name: "St. Mary Parish", city: "Huntingburg", state: "IN", zip: "47542", deanery: "East", lat: 38.2990, lng: -86.9550, address: "313 N Washington St, Huntingburg, IN 47542", website: "https://www.stmaryshuntingburg.org", pastor: "Fr. Biju Thomas" },
  { name: "St. Mary of the Annunciation Parish", city: "Ireland", state: "IN", zip: "47546", deanery: "East", lat: 38.4130, lng: -86.8190, address: "2831 N 500 W, Jasper, IN 47546", website: "https://www.stmaryireland.com", pastor: "Fr. Joseph Erbacher" },
  { name: "St. Bernard Parish", city: "Rockport", state: "IN", zip: "47635", deanery: "East", lat: 37.8833, lng: -87.0492, address: "547 Elm St, Rockport, IN 47635", website: "https://stbernardrockport.org", pastor: "Fr. Jeff Read" },
  { name: "Divine Mercy Parish", city: "St. Anthony", state: "IN", zip: "47575", deanery: "East", lat: 38.3410, lng: -86.8200, address: "4444 S Ohio St, St. Anthony, IN 47575", website: "https://www.divinemercyduco.org", pastor: "Fr. Jose Thomas", churches: [
    { name: "St. Anthony of Padua Church", address: "4444 S Ohio St, St. Anthony, IN 47575" },
    { name: "Sacred Heart Church", address: "2500 S Schnellville Walnut St, Schnellville, IN 47580" },
  ]},

  // ─── WEST DEANERY ───
  { name: "St. Joseph Parish", city: "Princeton", state: "IN", zip: "47670", deanery: "West", lat: 38.3553, lng: -87.5675, address: "410 S Race St, Princeton, IN 47670", website: "https://www.stjosephprinceton.org", pastor: "Fr. Gary Kaiser" },
  { name: "Corpus Christi Parish", city: "Evansville", state: "IN", zip: "47712", deanery: "West", lat: 37.9620, lng: -87.6100, address: "5528 Hogue Rd, Evansville, IN 47712", website: "https://corpuschristievansville.org", pastor: "Fr. Luke Hassler" },
  { name: "Holy Cross Parish", city: "Fort Branch", state: "IN", zip: "47648", deanery: "West", lat: 38.2512, lng: -87.5814, address: "305 E Walnut St, Fort Branch, IN 47648", website: "https://www.holycrossparish.info", pastor: "Fr. Gary Kaiser" },
  { name: "Ss. Peter and Paul Parish", city: "Haubstadt", state: "IN", zip: "47639", deanery: "West", lat: 38.2048, lng: -87.5730, address: "211 N Vine St, Haubstadt, IN 47639", website: "https://www.stsppchurch.com", pastor: "Fr. Andrew Thomas" },
  { name: "St. Matthew Parish", city: "Mount Vernon", state: "IN", zip: "47620", deanery: "West", lat: 37.9322, lng: -87.8950, address: "421 Mulberry St, Mount Vernon, IN 47620", website: "https://www.stmatthewparish.us", pastor: "Fr. Darnis Selvanayakam" },
  { name: "Blessed Sacrament Parish", city: "Oakland City", state: "IN", zip: "47660", deanery: "West", lat: 38.3385, lng: -87.3450, address: "11092 E Lincoln Heights Rd, Oakland City, IN 47660", pastor: "Fr. Vargheese Kalaparakudi" },
  { name: "Ss. Peter and Paul Parish", city: "Petersburg", state: "IN", zip: "47567", deanery: "West", lat: 38.4920, lng: -87.2786, address: "711 Walnut St, Petersburg, IN 47567", pastor: "Fr. Vargheese Kalaparakudi" },
  { name: "St. Francis Xavier Parish", city: "Poseyville", state: "IN", zip: "47633", deanery: "West", lat: 38.1700, lng: -87.7830, address: "10 N St. Francis Ave, Poseyville, IN 47633", pastor: "Fr. Ed Schnur" },
  { name: "St. James Parish", city: "Haubstadt", state: "IN", zip: "47639", deanery: "West", lat: 38.2100, lng: -87.5650, address: "12300 S 50 W, Haubstadt, IN 47639", website: "https://www.stjameshaubstadt.com", pastor: "Fr. Andrew Thomas" },
  { name: "St. Philip the Apostle Parish", city: "Mount Vernon", state: "IN", zip: "47620", deanery: "West", lat: 37.9400, lng: -87.8800, address: "3500 St. Philip Rd S, Mount Vernon, IN 47620", website: "https://saintphilipchurch.net", pastor: "Fr. Ryan Pineda" },
  { name: "St. Wendel Parish", city: "Wadesville", state: "IN", zip: "47720", deanery: "West", lat: 38.0780, lng: -87.5640, address: "10542 W Boonville-New Harmony Rd, Evansville, IN 47720", pastor: "Fr. Ed Schnur" },
  { name: "St. Bernard Parish", city: "Snake Run", state: "IN", zip: "47648", deanery: "West", lat: 38.1200, lng: -87.6300, address: "5342 E SR 168, Fort Branch, IN 47648", website: "https://www.stbernardsnakerun.org", pastor: "Fr. Chris Forler" },
];

export const deaneryColors: Record<string, string> = {
  South: "#005CBA",
  North: "#004E73",
  East: "#C0442F",
  West: "#D09000",
};
