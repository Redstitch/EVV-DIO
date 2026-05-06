export interface MassLocation {
  church: string;
  parish: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  lat: number;
  lng: number;
  saturday: string[];
  sunday: string[];
}

export const massLocations: MassLocation[] = [
  { church: "Basilica of St. Francis Xavier", parish: "St. Francis Xavier", address: "205 Church Street", city: "Vincennes", state: "IN", zip: "47591", phone: "812-882-5638", lat: 38.6773, lng: -87.5286, saturday: [], sunday: ["8:00am (Spanish)", "5:30pm"] },
  { church: "Blessed Sacrament Church", parish: "", address: "11092 E. Lincoln Heights Rd.", city: "Oakland City", state: "IN", zip: "47660", phone: "812-749-4474", lat: 38.3385, lng: -87.3450, saturday: [], sunday: ["8:00am"] },
  { church: "Christ the King Church", parish: "Annunciation of the Lord", address: "3010 E. Chandler Ave.", city: "Evansville", state: "IN", zip: "47714", phone: "812-476-3061", lat: 37.9890, lng: -87.5280, saturday: [], sunday: ["7:30am", "11:00am"] },
  { church: "Corpus Christi Church", parish: "", address: "5528 Hogue Rd", city: "Evansville", state: "IN", zip: "47712", phone: "812-422-2027", lat: 37.9620, lng: -87.6100, saturday: ["4:00pm"], sunday: ["7:30am", "10:00am"] },
  { church: "Good Shepherd Church", parish: "Good Shepherd", address: "2301 N Stockwell Rd.", city: "Evansville", state: "IN", zip: "47715", phone: "812-477-5405", lat: 38.0010, lng: -87.5100, saturday: ["4:30pm"], sunday: ["7:30am", "10:30am"] },
  { church: "Holy Cross Church", parish: "", address: "302 E Walnut Street", city: "Fort Branch", state: "IN", zip: "47648", phone: "812-753-3548", lat: 38.2512, lng: -87.5814, saturday: ["4:30pm (Apr-Sept)"], sunday: ["8:30am"] },
  { church: "Holy Family Church", parish: "", address: "950 Church Ave", city: "Jasper", state: "IN", zip: "47546", phone: "812-482-3076", lat: 38.3970, lng: -86.9370, saturday: ["5:00pm"], sunday: ["8:30am", "10:30am"] },
  { church: "Holy Name Church", parish: "", address: "700 Lincoln Dr.", city: "Bloomfield", state: "IN", zip: "47424", phone: "812-847-7821", lat: 39.0270, lng: -86.9375, saturday: [], sunday: ["9:00am"] },
  { church: "Holy Redeemer Church", parish: "", address: "918 W. Mill Rd", city: "Evansville", state: "IN", zip: "47710", phone: "812-424-8344", lat: 37.9940, lng: -87.5980, saturday: ["5:00pm"], sunday: ["9:00am"] },
  { church: "Holy Rosary Church", parish: "Holy Rosary", address: "1301 S Green River Rd", city: "Evansville", state: "IN", zip: "47715", phone: "812-477-8923", lat: 37.9750, lng: -87.5050, saturday: ["4:30pm"], sunday: ["7:30am", "9:00am", "11:00am", "12:30pm (Spanish)"] },
  { church: "Holy Spirit Church", parish: "Annunciation of the Lord", address: "1800 Lodge Ave", city: "Evansville", state: "IN", zip: "47714", phone: "812-477-1738", lat: 37.9840, lng: -87.5240, saturday: ["4:00pm"], sunday: ["9:00am"] },
  { church: "Mary, Help of Christians Church", parish: "St. Francis of Assisi", address: "6827 E 1930 N", city: "Dale", state: "IN", zip: "47523", phone: "812-937-4326", lat: 38.1800, lng: -86.9600, saturday: [], sunday: ["7:00am"] },
  { church: "Our Lady of Hope Church", parish: "Our Lady of Hope", address: "315 NE Third St", city: "Washington", state: "IN", zip: "47501", phone: "812-254-2883", lat: 38.6593, lng: -87.1728, saturday: ["4:00pm"], sunday: ["7:00am", "9:00am", "11:15am (Spanish)"] },
  { church: "Precious Blood Church", parish: "", address: "1385 W. Sixth St.", city: "Jasper", state: "IN", zip: "47546", phone: "812-482-4461", lat: 38.3880, lng: -86.9400, saturday: ["4:00pm"], sunday: ["8:00am", "10:30am"] },
  { church: "Resurrection Church", parish: "", address: "5301 New Harmony Rd.", city: "Evansville", state: "IN", zip: "47720", phone: "812-963-3121", lat: 37.9700, lng: -87.6200, saturday: ["5:00pm"], sunday: ["8:00am", "10:30am"] },
  { church: "Sacred Heart Church", parish: "St. Boniface", address: "2701 West Franklin", city: "Evansville", state: "IN", zip: "47712", phone: "812-423-1721", lat: 37.9780, lng: -87.6000, saturday: ["7:30am"], sunday: ["12:00pm (Latin)"] },
  { church: "Sacred Heart Church", parish: "Divine Mercy", address: "2504 Walnut Street", city: "Schnellville", state: "IN", zip: "47580", phone: "812-326-2777", lat: 38.3500, lng: -86.8400, saturday: ["4:30pm (Apr-Sept)"], sunday: ["8:00am"] },
  { church: "Sacred Heart Church", parish: "St. Francis Xavier", address: "2004 N Second St", city: "Vincennes", state: "IN", zip: "47591", phone: "812-882-5638", lat: 38.6850, lng: -87.5260, saturday: [], sunday: ["9:30am"] },
  { church: "St. Agnes Church", parish: "St. Boniface", address: "1600 Glendale", city: "Evansville", state: "IN", zip: "47712", phone: "812-423-1721", lat: 37.9820, lng: -87.5920, saturday: ["4:30pm"], sunday: [] },
  { church: "St. Anthony Church", parish: "All Saints", address: "704 First Avenue", city: "Evansville", state: "IN", zip: "47710", phone: "812-423-5209", lat: 37.9716, lng: -87.5711, saturday: [], sunday: ["10:30am", "5:00pm"] },
  { church: "St. Anthony Church", parish: "Divine Mercy", address: "4444 Ohio St.", city: "St. Anthony", state: "IN", zip: "47575", phone: "812-326-2777", lat: 38.3410, lng: -86.8200, saturday: ["4:30pm (Oct-Mar)"], sunday: ["10:00am"] },
  { church: "St. Benedict Cathedral", parish: "", address: "1328 Lincoln Avenue", city: "Evansville", state: "IN", zip: "47714", phone: "812-425-3369", lat: 37.9680, lng: -87.5580, saturday: ["4:30pm"], sunday: ["8:00am", "10:30am"] },
  { church: "St. Bernard Church (Snake Run)", parish: "", address: "5342 E. State Rd. 168", city: "Fort Branch", state: "IN", zip: "47648", phone: "812-753-4568", lat: 38.1200, lng: -87.6300, saturday: ["5:30pm"], sunday: [] },
  { church: "St. Bernard Church", parish: "", address: "547 Elm Street", city: "Rockport", state: "IN", zip: "47635", phone: "812-649-4811", lat: 37.8833, lng: -87.0492, saturday: ["5:00pm"], sunday: ["7:30am", "10:30am"] },
  { church: "St. Boniface Church", parish: "St. Boniface", address: "418 N Wabash Ave.", city: "Evansville", state: "IN", zip: "47712", phone: "812-423-1721", lat: 37.9740, lng: -87.5850, saturday: [], sunday: ["10:00am"] },
  { church: "St. Clement Church", parish: "St. Clement", address: "422 E. Sycamore", city: "Boonville", state: "IN", zip: "47601", phone: "812-897-4653", lat: 38.0490, lng: -87.2744, saturday: ["5:00pm"], sunday: ["10:30am"] },
  { church: "St. Ferdinand Church", parish: "Christ the King", address: "341 E 10th St", city: "Ferdinand", state: "IN", zip: "47532", phone: "812-367-1212", lat: 38.2240, lng: -86.8620, saturday: ["5:00pm"], sunday: ["10:00am"] },
  { church: "St. Francis Xavier Church", parish: "", address: "10 N. St. Francis Ave.", city: "Poseyville", state: "IN", zip: "47633", phone: "812-874-2220", lat: 38.1700, lng: -87.7830, saturday: [], sunday: ["7:00am", "10:00am"] },
  { church: "St. Henry Church", parish: "Christ the King", address: "1311 W 1100 South", city: "Ferdinand", state: "IN", zip: "47532", phone: "812-367-2731", lat: 38.2100, lng: -86.8400, saturday: [], sunday: ["7:30am"] },
  { church: "St. James Church", parish: "", address: "12300S 50 W", city: "Haubstadt", state: "IN", zip: "47639", phone: "812-867-5175", lat: 38.2100, lng: -87.5650, saturday: ["5:00pm"], sunday: ["7:00am", "9:00am"] },
  { church: "St. Joan of Arc Church", parish: "", address: "327 W. McKinley St.", city: "Jasonville", state: "IN", zip: "47438", phone: "812-268-4088", lat: 39.1612, lng: -87.1986, saturday: [], sunday: ["5:00pm"] },
  { church: "St. John Church", parish: "St. John the Evangelist", address: "408 Church St.", city: "Loogootee", state: "IN", zip: "47553", phone: "812-295-2225", lat: 38.6767, lng: -86.9142, saturday: ["5:00pm"], sunday: ["8:00am", "10:00am", "4:00pm"] },
  { church: "St. John the Baptist Church", parish: "", address: "625 Frame Road", city: "Newburgh", state: "IN", zip: "47630", phone: "812-490-1000", lat: 37.9444, lng: -87.4053, saturday: ["5:00pm"], sunday: ["7:00am", "8:45am", "11:00am"] },
  { church: "St. John the Baptist Church", parish: "St. Francis Xavier", address: "803 Main St.", city: "Vincennes", state: "IN", zip: "47591", phone: "812-882-5638", lat: 38.6780, lng: -87.5310, saturday: ["5:00pm"], sunday: ["7:30am", "11:00am"] },
  { church: "St. John the Evangelist Church", parish: "", address: "5301 Daylight Drive", city: "Evansville", state: "IN", zip: "47725", phone: "812-867-3718", lat: 38.0380, lng: -87.5130, saturday: ["4:00pm"], sunday: ["7:15am", "10:00am"] },
  { church: "St. Joseph Church", parish: "St. Francis of Assisi", address: "8 E. Maple St.", city: "Dale", state: "IN", zip: "47523", phone: "812-937-2200", lat: 38.1690, lng: -86.9900, saturday: [], sunday: ["9:00am", "11:00am (Spanish)"] },
  { church: "St. Joseph Church", parish: "All Saints", address: "618 E. Virginia St.", city: "Evansville", state: "IN", zip: "47711", phone: "812-422-5668", lat: 37.9750, lng: -87.5650, saturday: ["4:00pm"], sunday: [] },
  { church: "St. Joseph Church", parish: "", address: "6202 W. St. Joseph Rd.", city: "Evansville", state: "IN", zip: "47720", phone: "812-963-3273", lat: 37.9800, lng: -87.6050, saturday: ["5:00pm"], sunday: ["8:00am", "10:30am"] },
  { church: "St. Joseph Church", parish: "", address: "1029 Kundek St.", city: "Jasper", state: "IN", zip: "47546", phone: "812-482-1805", lat: 38.3914, lng: -86.9311, saturday: ["4:30pm"], sunday: ["6:00am", "7:30am", "9:00am", "10:30pm (Spanish)", "6:00pm"] },
  { church: "St. Joseph Church", parish: "", address: "410 S. Race St.", city: "Princeton", state: "IN", zip: "47670", phone: "812-385-2617", lat: 38.3553, lng: -87.5675, saturday: ["4:30pm (Oct-Mar)"], sunday: ["10:30am"] },
  { church: "St. Martin Church", parish: "St. Martin", address: "58 S. Church St.", city: "Chrisney", state: "IN", zip: "47611", phone: "812-649-4811", lat: 38.0140, lng: -87.0290, saturday: [], sunday: ["9:00am"] },
  { church: "St. Mary Church", parish: "Sts. Mary & John", address: "613 Cherry Street", city: "Evansville", state: "IN", zip: "47713", phone: "812-425-1577", lat: 37.9660, lng: -87.5620, saturday: ["4:00pm"], sunday: ["10:00am", "4:00pm"] },
  { church: "St. Mary Church", parish: "", address: "313 Washington St", city: "Huntingburg", state: "IN", zip: "47542", phone: "812-683-2372", lat: 38.2990, lng: -86.9550, saturday: ["4:30pm"], sunday: ["7:30am", "10:00am", "12:00pm (Spanish)"] },
  { church: "St. Mary Church", parish: "", address: "2829 N. 500 W", city: "Jasper", state: "IN", zip: "47546", phone: "812-482-7041", lat: 38.4130, lng: -86.8190, saturday: ["4:30pm"], sunday: ["7:00am", "10:00am"] },
  { church: "St. Mary Church", parish: "", address: "105 E. Jackson St.", city: "Sullivan", state: "IN", zip: "47882", phone: "812-268-4088", lat: 39.0953, lng: -87.4050, saturday: ["4:30pm"], sunday: ["9:00am"] },
  { church: "St. Matthew Church", parish: "", address: "421 Mulberry St.", city: "Mt. Vernon", state: "IN", zip: "47620", phone: "812-838-2535", lat: 37.9322, lng: -87.8950, saturday: ["4:30pm"], sunday: ["9:00am"] },
  { church: "St. Nicholas Church", parish: "St. Francis of Assisi", address: "180 N Holiday Blvd.", city: "Santa Claus", state: "IN", zip: "47579", phone: "812-937-2385", lat: 38.1200, lng: -86.9140, saturday: ["5:00pm"], sunday: [] },
  { church: "St. Peter Celestine Church", parish: "St. Isidore the Farmer", address: "6864 E. Hwy 164", city: "Celestine", state: "IN", zip: "47521", phone: "812-634-1875", lat: 38.3910, lng: -86.7590, saturday: ["4:30pm (Apr-Sept)"], sunday: ["8:00am"] },
  { church: "St. Peter Church", parish: "", address: "489 E Street NE", city: "Linton", state: "IN", zip: "47441", phone: "812-847-7821", lat: 39.0348, lng: -87.1667, saturday: ["5:00pm"], sunday: ["11:00am"] },
  { church: "St. Peter Church", parish: "St. Peter", address: "305 N. Second St.", city: "Montgomery", state: "IN", zip: "47558", phone: "812-486-3149", lat: 38.6616, lng: -87.0428, saturday: ["5:30pm"], sunday: ["7:45am", "9:30am"] },
  { church: "St. Philip Church", parish: "", address: "3500 St. Philip Rd S", city: "Mt. Vernon", state: "IN", zip: "47620", phone: "812-985-2275", lat: 37.9400, lng: -87.8800, saturday: ["4:00pm"], sunday: ["9:30am"] },
  { church: "St. Philip Neri Church", parish: "", address: "605 W Fourth Street", city: "Bicknell", state: "IN", zip: "47512", phone: "812-735-4069", lat: 38.7742, lng: -87.3078, saturday: [], sunday: ["9:00am"] },
  { church: "St. Raphael Church", parish: "St. Isidore the Farmer", address: "5564 E St. Raphael St", city: "Dubois", state: "IN", zip: "47527", phone: "812-678-2011", lat: 38.3700, lng: -86.7800, saturday: ["4:30pm (Oct-Mar)"], sunday: ["10:00am"] },
  { church: "St. Rupert Church", parish: "St. Clement", address: "1244 W Red Brush Rd.", city: "Newburgh", state: "IN", zip: "47630", phone: "812-853-3040", lat: 38.0300, lng: -87.3200, saturday: [], sunday: ["7:30am"] },
  { church: "St. Wendel Church", parish: "", address: "10542 W Boonville-New Harmony", city: "Evansville", state: "IN", zip: "47720", phone: "812-963-3733", lat: 38.0780, lng: -87.5640, saturday: ["4:30pm"], sunday: ["8:30am"] },
  { church: "Sts. Peter and Paul Church", parish: "", address: "211 N. Vine St.", city: "Haubstadt", state: "IN", zip: "47639", phone: "812-768-6457", lat: 38.2048, lng: -87.5730, saturday: ["5:00pm"], sunday: ["7:00am", "10:00am"] },
  { church: "Sts. Peter and Paul Church", parish: "", address: "711 Walnut Street", city: "Petersburg", state: "IN", zip: "47567", phone: "812-354-6942", lat: 38.4920, lng: -87.2786, saturday: ["4:30pm"], sunday: ["11:00am"] },
];
