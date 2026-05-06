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
  { church: "Basilica of St. Francis Xavier", parish: "St. Francis Xavier", address: "205 Church Street", city: "Vincennes", state: "IN", zip: "47591", phone: "812-882-5638", lat: 38.678900, lng: -87.534224, saturday: [], sunday: ["8:00am (Spanish)", "5:30pm"] },
  { church: "Blessed Sacrament Church", parish: "", address: "11092 E. Lincoln Heights Rd.", city: "Oakland City", state: "IN", zip: "47660", phone: "812-749-4474", lat: 38.338077, lng: -87.361010, saturday: [], sunday: ["8:00am"] },
  { church: "Christ the King Church", parish: "Annunciation of the Lord", address: "3010 E. Chandler Ave.", city: "Evansville", state: "IN", zip: "47714", phone: "812-476-3061", lat: 37.965271, lng: -87.513299, saturday: [], sunday: ["7:30am", "11:00am"] },
  { church: "Corpus Christi Church", parish: "", address: "5528 Hogue Rd", city: "Evansville", state: "IN", zip: "47712", phone: "812-422-2027", lat: 37.982833, lng: -87.641878, saturday: ["4:00pm"], sunday: ["7:30am", "10:00am"] },
  { church: "Good Shepherd Church", parish: "Good Shepherd", address: "2301 N Stockwell Rd.", city: "Evansville", state: "IN", zip: "47715", phone: "812-477-5405", lat: 38.000581, lng: -87.501571, saturday: ["4:30pm"], sunday: ["7:30am", "10:30am"] },
  { church: "Holy Cross Church", parish: "", address: "302 E Walnut Street", city: "Fort Branch", state: "IN", zip: "47648", phone: "812-753-3548", lat: 38.246525, lng: -87.576117, saturday: ["4:30pm (Apr-Sept)"], sunday: ["8:30am"] },
  { church: "Holy Family Church", parish: "", address: "950 Church Ave", city: "Jasper", state: "IN", zip: "47546", phone: "812-482-3076", lat: 38.375802, lng: -86.917974, saturday: ["5:00pm"], sunday: ["8:30am", "10:30am"] },
  { church: "Holy Name Church", parish: "", address: "700 Lincoln Dr.", city: "Bloomfield", state: "IN", zip: "47424", phone: "812-847-7821", lat: 39.031728, lng: -86.942881, saturday: [], sunday: ["9:00am"] },
  { church: "Holy Redeemer Church", parish: "", address: "918 W. Mill Rd", city: "Evansville", state: "IN", zip: "47710", phone: "812-424-8344", lat: 38.020931, lng: -87.576866, saturday: ["5:00pm"], sunday: ["9:00am"] },
  { church: "Holy Rosary Church", parish: "Holy Rosary", address: "1301 S Green River Rd", city: "Evansville", state: "IN", zip: "47715", phone: "812-477-8923", lat: 37.959368, lng: -87.493268, saturday: ["4:30pm"], sunday: ["7:30am", "9:00am", "11:00am", "12:30pm (Spanish)"] },
  { church: "Holy Spirit Church", parish: "Annunciation of the Lord", address: "1800 Lodge Ave", city: "Evansville", state: "IN", zip: "47714", phone: "812-477-1738", lat: 37.951246, lng: -87.538786, saturday: ["4:00pm"], sunday: ["9:00am"] },
  { church: "Mary, Help of Christians Church", parish: "St. Francis of Assisi", address: "6827 E 1930 N", city: "Dale", state: "IN", zip: "47523", phone: "812-937-4326", lat: 38.166042, lng: -86.926491, saturday: [], sunday: ["7:00am"] },
  { church: "Our Lady of Hope Church", parish: "Our Lady of Hope", address: "315 NE Third St", city: "Washington", state: "IN", zip: "47501", phone: "812-254-2883", lat: 38.659704, lng: -87.172336, saturday: ["4:00pm"], sunday: ["7:00am", "9:00am", "11:15am (Spanish)"] },
  { church: "Precious Blood Church", parish: "", address: "1385 W. Sixth St.", city: "Jasper", state: "IN", zip: "47546", phone: "812-482-4461", lat: 38.394597, lng: -86.955696, saturday: ["4:00pm"], sunday: ["8:00am", "10:30am"] },
  { church: "Resurrection Church", parish: "", address: "5301 New Harmony Rd.", city: "Evansville", state: "IN", zip: "47720", phone: "812-963-3121", lat: 38.016775, lng: -87.637861, saturday: ["5:00pm"], sunday: ["8:00am", "10:30am"] },
  { church: "Sacred Heart Church", parish: "St. Boniface", address: "2701 West Franklin", city: "Evansville", state: "IN", zip: "47712", phone: "812-423-1721", lat: 37.981277, lng: -87.605698, saturday: ["7:30am"], sunday: ["12:00pm (Latin)"] },
  { church: "Sacred Heart Church", parish: "Divine Mercy", address: "2504 Walnut Street", city: "Schnellville", state: "IN", zip: "47580", phone: "812-326-2777", lat: 38.341186, lng: -86.754391, saturday: ["4:30pm (Apr-Sept)"], sunday: ["8:00am"] },
  { church: "Sacred Heart Church", parish: "St. Francis Xavier", address: "2004 N Second St", city: "Vincennes", state: "IN", zip: "47591", phone: "812-882-5638", lat: 38.689358, lng: -87.511556, saturday: [], sunday: ["9:30am"] },
  { church: "St. Agnes Church", parish: "St. Boniface", address: "1600 Glendale", city: "Evansville", state: "IN", zip: "47712", phone: "812-423-1721", lat: 37.959210, lng: -87.616013, saturday: ["4:30pm"], sunday: [] },
  { church: "St. Anthony Church", parish: "All Saints", address: "704 First Avenue", city: "Evansville", state: "IN", zip: "47710", phone: "812-423-5209", lat: 37.984125, lng: -87.574927, saturday: [], sunday: ["10:30am", "5:00pm"] },
  { church: "St. Anthony Church", parish: "Divine Mercy", address: "4444 Ohio St.", city: "St. Anthony", state: "IN", zip: "47575", phone: "812-326-2777", lat: 38.315430, lng: -86.826422, saturday: ["4:30pm (Oct-Mar)"], sunday: ["10:00am"] },
  { church: "St. Benedict Cathedral", parish: "", address: "1328 Lincoln Avenue", city: "Evansville", state: "IN", zip: "47714", phone: "812-425-3369", lat: 37.970323, lng: -87.540707, saturday: ["4:30pm"], sunday: ["8:00am", "10:30am"] },
  { church: "St. Bernard Church (Snake Run)", parish: "", address: "5342 E. State Rd. 168", city: "Fort Branch", state: "IN", zip: "47648", phone: "812-753-4568", lat: 38.252941, lng: -87.465424, saturday: ["5:30pm"], sunday: [] },
  { church: "St. Bernard Church", parish: "", address: "547 Elm Street", city: "Rockport", state: "IN", zip: "47635", phone: "812-649-4811", lat: 37.884408, lng: -87.051462, saturday: ["5:00pm"], sunday: ["7:30am", "10:30am"] },
  { church: "St. Boniface Church", parish: "St. Boniface", address: "418 N Wabash Ave.", city: "Evansville", state: "IN", zip: "47712", phone: "812-423-1721", lat: 37.981978, lng: -87.594408, saturday: [], sunday: ["10:00am"] },
  { church: "St. Clement Church", parish: "St. Clement", address: "422 E. Sycamore", city: "Boonville", state: "IN", zip: "47601", phone: "812-897-4653", lat: 38.050980, lng: -87.270077, saturday: ["5:00pm"], sunday: ["10:30am"] },
  { church: "St. Ferdinand Church", parish: "Christ the King", address: "341 E 10th St", city: "Ferdinand", state: "IN", zip: "47532", phone: "812-367-1212", lat: 38.224283, lng: -86.859783, saturday: ["5:00pm"], sunday: ["10:00am"] },
  { church: "St. Francis Xavier Church", parish: "", address: "10 N. St. Francis Ave.", city: "Poseyville", state: "IN", zip: "47633", phone: "812-874-2220", lat: 38.170364, lng: -87.780418, saturday: [], sunday: ["7:00am", "10:00am"] },
  { church: "St. Henry Church", parish: "Christ the King", address: "1311 W 1100 South", city: "Ferdinand", state: "IN", zip: "47532", phone: "812-367-2731", lat: 38.219267, lng: -86.902667, saturday: [], sunday: ["7:30am"] },
  { church: "St. James Church", parish: "", address: "12300S 50 W", city: "Haubstadt", state: "IN", zip: "47639", phone: "812-867-5175", lat: 38.171543, lng: -87.574295, saturday: ["5:00pm"], sunday: ["7:00am", "9:00am"] },
  { church: "St. Joan of Arc Church", parish: "", address: "327 W. McKinley St.", city: "Jasonville", state: "IN", zip: "47438", phone: "812-268-4088", lat: 39.161022, lng: -87.203866, saturday: [], sunday: ["5:00pm"] },
  { church: "St. John Church", parish: "St. John the Evangelist", address: "408 Church St.", city: "Loogootee", state: "IN", zip: "47553", phone: "812-295-2225", lat: 38.677598, lng: -86.910284, saturday: ["5:00pm"], sunday: ["8:00am", "10:00am", "4:00pm"] },
  { church: "St. John the Baptist Church", parish: "", address: "625 Frame Road", city: "Newburgh", state: "IN", zip: "47630", phone: "812-490-1000", lat: 37.950174, lng: -87.414223, saturday: ["5:00pm"], sunday: ["7:00am", "8:45am", "11:00am"] },
  { church: "St. John the Baptist Church", parish: "St. Francis Xavier", address: "803 Main St.", city: "Vincennes", state: "IN", zip: "47591", phone: "812-882-5638", lat: 38.675113, lng: -87.527781, saturday: ["5:00pm"], sunday: ["7:30am", "11:00am"] },
  { church: "St. John the Evangelist Church", parish: "", address: "5301 Daylight Drive", city: "Evansville", state: "IN", zip: "47725", phone: "812-867-3718", lat: 38.090737, lng: -87.485461, saturday: ["4:00pm"], sunday: ["7:15am", "10:00am"] },
  { church: "St. Joseph Church", parish: "St. Francis of Assisi", address: "8 E. Maple St.", city: "Dale", state: "IN", zip: "47523", phone: "812-937-2200", lat: 38.165159, lng: -86.988738, saturday: [], sunday: ["9:00am", "11:00am (Spanish)"] },
  { church: "St. Joseph Church", parish: "All Saints", address: "618 E. Virginia St.", city: "Evansville", state: "IN", zip: "47711", phone: "812-422-5668", lat: 37.981932, lng: -87.556246, saturday: ["4:00pm"], sunday: [] },
  { church: "St. Joseph Church", parish: "", address: "6202 W. St. Joseph Rd.", city: "Evansville", state: "IN", zip: "47720", phone: "812-963-3273", lat: 38.065709, lng: -87.648048, saturday: ["5:00pm"], sunday: ["8:00am", "10:30am"] },
  { church: "St. Joseph Church", parish: "", address: "1029 Kundek St.", city: "Jasper", state: "IN", zip: "47546", phone: "812-482-1805", lat: 38.396502, lng: -86.933130, saturday: ["4:30pm"], sunday: ["6:00am", "7:30am", "9:00am", "10:30pm (Spanish)", "6:00pm"] },
  { church: "St. Joseph Church", parish: "", address: "410 S. Race St.", city: "Princeton", state: "IN", zip: "47670", phone: "812-385-2617", lat: 38.351685, lng: -87.562553, saturday: ["4:30pm (Oct-Mar)"], sunday: ["10:30am"] },
  { church: "St. Martin Church", parish: "St. Martin", address: "58 S. Church St.", city: "Chrisney", state: "IN", zip: "47611", phone: "812-649-4811", lat: 38.014448, lng: -87.033319, saturday: [], sunday: ["9:00am"] },
  { church: "St. Mary Church", parish: "Sts. Mary & John", address: "613 Cherry Street", city: "Evansville", state: "IN", zip: "47713", phone: "812-425-1577", lat: 37.969254, lng: -87.565667, saturday: ["4:00pm"], sunday: ["10:00am", "4:00pm"] },
  { church: "St. Mary Church", parish: "", address: "313 Washington St", city: "Huntingburg", state: "IN", zip: "47542", phone: "812-683-2372", lat: 38.295424, lng: -86.949739, saturday: ["4:30pm"], sunday: ["7:30am", "10:00am", "12:00pm (Spanish)"] },
  { church: "St. Mary Church", parish: "", address: "2829 N. 500 W", city: "Jasper", state: "IN", zip: "47546", phone: "812-482-7041", lat: 38.420072, lng: -86.997897, saturday: ["4:30pm"], sunday: ["7:00am", "10:00am"] },
  { church: "St. Mary Church", parish: "", address: "105 E. Jackson St.", city: "Sullivan", state: "IN", zip: "47882", phone: "812-268-4088", lat: 39.094248, lng: -87.405702, saturday: ["4:30pm"], sunday: ["9:00am"] },
  { church: "St. Matthew Church", parish: "", address: "421 Mulberry St.", city: "Mt. Vernon", state: "IN", zip: "47620", phone: "812-838-2535", lat: 37.933024, lng: -87.893436, saturday: ["4:30pm"], sunday: ["9:00am"] },
  { church: "St. Nicholas Church", parish: "St. Francis of Assisi", address: "180 N Holiday Blvd.", city: "Santa Claus", state: "IN", zip: "47579", phone: "812-937-2385", lat: 38.122572, lng: -86.925334, saturday: ["5:00pm"], sunday: [] },
  { church: "St. Peter Celestine Church", parish: "St. Isidore the Farmer", address: "6864 E. Hwy 164", city: "Celestine", state: "IN", zip: "47521", phone: "812-634-1875", lat: 38.383475, lng: -86.775749, saturday: ["4:30pm (Apr-Sept)"], sunday: ["8:00am"] },
  { church: "St. Peter Church", parish: "", address: "489 E Street NE", city: "Linton", state: "IN", zip: "47441", phone: "812-847-7821", lat: 39.038462, lng: -87.160875, saturday: ["5:00pm"], sunday: ["11:00am"] },
  { church: "St. Peter Church", parish: "St. Peter", address: "305 N. Second St.", city: "Montgomery", state: "IN", zip: "47558", phone: "812-486-3149", lat: 38.664436, lng: -87.046867, saturday: ["5:30pm"], sunday: ["7:45am", "9:30am"] },
  { church: "St. Philip Church", parish: "", address: "3500 St. Philip Rd S", city: "Mt. Vernon", state: "IN", zip: "47620", phone: "812-985-2275", lat: 37.982838, lng: -87.716858, saturday: ["4:00pm"], sunday: ["9:30am"] },
  { church: "St. Philip Neri Church", parish: "", address: "605 W Fourth Street", city: "Bicknell", state: "IN", zip: "47512", phone: "812-735-4069", lat: 38.773708, lng: -87.312965, saturday: [], sunday: ["9:00am"] },
  { church: "St. Raphael Church", parish: "St. Isidore the Farmer", address: "5564 E St. Raphael St", city: "Dubois", state: "IN", zip: "47527", phone: "812-678-2011", lat: 38.364432, lng: -86.887028, saturday: ["4:30pm (Oct-Mar)"], sunday: ["10:00am"] },
  { church: "St. Rupert Church", parish: "St. Clement", address: "1244 W Red Brush Rd.", city: "Newburgh", state: "IN", zip: "47630", phone: "812-853-3040", lat: 37.939050, lng: -87.272113, saturday: [], sunday: ["7:30am"] },
  { church: "St. Wendel Church", parish: "", address: "10542 W Boonville-New Harmony", city: "Evansville", state: "IN", zip: "47720", phone: "812-963-3733", lat: 38.106477, lng: -87.696638, saturday: ["4:30pm"], sunday: ["8:30am"] },
  { church: "Sts. Peter and Paul Church", parish: "", address: "211 N. Vine St.", city: "Haubstadt", state: "IN", zip: "47639", phone: "812-768-6457", lat: 38.206530, lng: -87.576714, saturday: ["5:00pm"], sunday: ["7:00am", "10:00am"] },
  { church: "Sts. Peter and Paul Church", parish: "", address: "711 Walnut Street", city: "Petersburg", state: "IN", zip: "47567", phone: "812-354-6942", lat: 38.490521, lng: -87.279334, saturday: ["4:30pm"], sunday: ["11:00am"] },
];
