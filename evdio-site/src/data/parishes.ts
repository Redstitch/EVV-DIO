export interface Parish {
  name: string;
  city: string;
  state: string;
  deanery: "South" | "North" | "East" | "West";
  lat: number;
  lng: number;
  address?: string;
  phone?: string;
  website?: string;
}

export const parishes: Parish[] = [
  // ─── SOUTH DEANERY (12 parishes) ───
  { name: "St. Benedict Parish", city: "Evansville", state: "IN", deanery: "South", lat: 37.9716, lng: -87.5711 },
  { name: "Resurrection Parish", city: "Evansville", state: "IN", deanery: "South", lat: 37.9950, lng: -87.5350 },
  { name: "Holy Redeemer Parish", city: "Evansville", state: "IN", deanery: "South", lat: 37.9770, lng: -87.5980 },
  { name: "All Saints Parish", city: "Evansville", state: "IN", deanery: "South", lat: 37.9680, lng: -87.5550 },
  { name: "Annunciation of the Lord Parish", city: "Evansville", state: "IN", deanery: "South", lat: 37.9890, lng: -87.5440 },
  { name: "Good Shepherd Parish", city: "Evansville", state: "IN", deanery: "South", lat: 38.0010, lng: -87.5280 },
  { name: "Holy Rosary Parish", city: "Evansville", state: "IN", deanery: "South", lat: 37.9750, lng: -87.5850 },
  { name: "St. Boniface Parish", city: "Evansville", state: "IN", deanery: "South", lat: 37.9660, lng: -87.5700 },
  { name: "Sts. Mary and John Parish", city: "Evansville", state: "IN", deanery: "South", lat: 37.9730, lng: -87.5620 },
  { name: "St. Clement Parish", city: "Boonville", state: "IN", deanery: "South", lat: 38.0490, lng: -87.2744 },
  { name: "St. John the Evangelist Parish", city: "Daylight", state: "IN", deanery: "South", lat: 38.0380, lng: -87.5130 },
  { name: "St. John the Baptist Parish", city: "Newburgh", state: "IN", deanery: "South", lat: 37.9444, lng: -87.4053 },

  // ─── NORTH DEANERY (9 parishes) ───
  { name: "St. Francis Xavier Parish", city: "Vincennes", state: "IN", deanery: "North", lat: 38.6773, lng: -87.5286 },
  { name: "St. Philip Neri Parish", city: "Bicknell", state: "IN", deanery: "North", lat: 38.7742, lng: -87.3078 },
  { name: "Holy Name of Jesus Parish", city: "Bloomfield", state: "IN", deanery: "North", lat: 39.0270, lng: -86.9375 },
  { name: "St. Joan of Arc Parish", city: "Jasonville", state: "IN", deanery: "North", lat: 39.1612, lng: -87.1986 },
  { name: "St. Peter Parish", city: "Linton", state: "IN", deanery: "North", lat: 39.0348, lng: -87.1667 },
  { name: "St. John the Evangelist Parish", city: "Loogootee", state: "IN", deanery: "North", lat: 38.6767, lng: -86.9142 },
  { name: "St. Peter Parish", city: "Montgomery", state: "IN", deanery: "North", lat: 38.6616, lng: -87.0428 },
  { name: "St. Mary Parish", city: "Sullivan", state: "IN", deanery: "North", lat: 39.0953, lng: -87.4050 },
  { name: "Our Lady of Hope Parish", city: "Washington", state: "IN", deanery: "North", lat: 38.6593, lng: -87.1728 },

  // ─── EAST DEANERY (12 parishes) ───
  { name: "St. Joseph Parish", city: "Jasper", state: "IN", deanery: "East", lat: 38.3914, lng: -86.9311 },
  { name: "Holy Family Parish", city: "Jasper", state: "IN", deanery: "East", lat: 38.3970, lng: -86.9370 },
  { name: "Precious Blood Parish", city: "Jasper", state: "IN", deanery: "East", lat: 38.3880, lng: -86.9250 },
  { name: "St. Peter Celestine Parish", city: "Celestine", state: "IN", deanery: "East", lat: 38.3910, lng: -86.7590 },
  { name: "St. Martin Parish", city: "Chrisney", state: "IN", deanery: "East", lat: 38.0140, lng: -87.0290 },
  { name: "St. Francis of Assisi Parish", city: "Dale", state: "IN", deanery: "East", lat: 38.1690, lng: -86.9900 },
  { name: "St. Ferdinand Parish", city: "Ferdinand", state: "IN", deanery: "East", lat: 38.2240, lng: -86.8620 },
  { name: "St. Mary Parish", city: "Huntingburg", state: "IN", deanery: "East", lat: 38.2990, lng: -86.9550 },
  { name: "Annunciation Parish", city: "Ireland", state: "IN", deanery: "East", lat: 38.4130, lng: -86.8190 },
  { name: "St. Bernard Parish", city: "Rockport", state: "IN", deanery: "East", lat: 37.8833, lng: -87.0492 },
  { name: "Divine Mercy Parish", city: "St. Anthony", state: "IN", deanery: "East", lat: 38.3410, lng: -86.8200 },
  { name: "St. Henry Parish", city: "St. Henry", state: "IN", deanery: "East", lat: 38.2340, lng: -86.7360 },

  // ─── WEST DEANERY (13 parishes) ───
  { name: "St. Joseph Parish", city: "Princeton", state: "IN", deanery: "West", lat: 38.3553, lng: -87.5675 },
  { name: "Corpus Christi Parish", city: "Evansville", state: "IN", deanery: "West", lat: 37.9620, lng: -87.6100 },
  { name: "Holy Cross Parish", city: "Fort Branch", state: "IN", deanery: "West", lat: 38.2512, lng: -87.5814 },
  { name: "Ss. Peter and Paul Parish", city: "Haubstadt", state: "IN", deanery: "West", lat: 38.2048, lng: -87.5730 },
  { name: "St. Matthew Parish", city: "Mount Vernon", state: "IN", deanery: "West", lat: 37.9322, lng: -87.8950 },
  { name: "Blessed Sacrament Parish", city: "Oakland City", state: "IN", deanery: "West", lat: 38.3385, lng: -87.3450 },
  { name: "Ss. Peter and Paul Parish", city: "Petersburg", state: "IN", deanery: "West", lat: 38.4920, lng: -87.2786 },
  { name: "St. Francis Xavier Parish", city: "Poseyville", state: "IN", deanery: "West", lat: 38.1700, lng: -87.7830 },
  { name: "St. James Parish", city: "Haubstadt", state: "IN", deanery: "West", lat: 38.2100, lng: -87.5700 },
  { name: "St. Joseph Parish", city: "Dale", state: "IN", deanery: "West", lat: 38.1690, lng: -87.0000 },
  { name: "St. Philip the Apostle Parish", city: "Mount Vernon", state: "IN", deanery: "West", lat: 37.9400, lng: -87.8800 },
  { name: "St. Wendel Parish", city: "Wadesville", state: "IN", deanery: "West", lat: 38.0780, lng: -87.5640 },
  { name: "St. Bernard Parish", city: "Snake Run", state: "IN", deanery: "West", lat: 38.1200, lng: -87.6500 },
];

export const deaneryColors: Record<string, string> = {
  South: "#005CBA",
  North: "#004E73",
  East: "#C0442F",
  West: "#D09000",
};
