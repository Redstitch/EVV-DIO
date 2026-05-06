export interface ClergyMember {
  name: string;
  slug: string; // used for headshot image path: /images/clergy/{slug}.jpg
  ordained: string;
  assignment: string;
  type: "priest" | "deacon" | "transitional-deacon";
}

/* ─── ACTIVE PRIESTS (alphabetical by last name) ─── */

export const activePriests: ClergyMember[] = [
  { name: "Rev. Crispine Adongo", slug: "crispine-adongo", ordained: "May 26, 2012", assignment: "Pastor, St. Francis of Assisi Parish, Dale", type: "priest" },
  { name: "Rev. Kenneth R. Betz", slug: "kenneth-r-betz", ordained: "May 27, 1965", assignment: "Senior Parochial Vicar, St. James Parish, Haubstadt", type: "priest" },
  { name: "Rev. Nick Biever", slug: "nick-biever", ordained: "June 14, 2025", assignment: "Parochial Vicar, St. Philip Parish, Posey County", type: "priest" },
  { name: "Rev. Garrett Braun", slug: "garrett-braun", ordained: "June 5, 2021", assignment: "Chaplain, United States Air Force", type: "priest" },
  { name: "Very Rev. John G. Brosmer", slug: "john-g-brosmer", ordained: "June 4, 2005", assignment: "Pastor, St. Joseph Parish, Jasper; Dean, East Deanery", type: "priest" },
  { name: "Rev. Claude T. Burns, M.S.", slug: "claude-t-burns", ordained: "May 25, 2002", assignment: "Pastor, St. John the Baptist Parish, Newburgh", type: "priest" },
  { name: "Rev. Benny Alikandayil Chacko", slug: "benny-alikandayil-chacko", ordained: "April 29, 1998", assignment: "Pastor, Annunciation of the Lord Parish, Evansville", type: "priest" },
  { name: "Rev. Christopher Droste", slug: "christopher-droste", ordained: "June 8, 2013", assignment: "Pastor, St. Boniface Parish, Evansville", type: "priest" },
  { name: "Rev. Brian Emmick", slug: "brian-emmick", ordained: "June 2, 2012", assignment: "Pastor, Precious Blood Parish, Jasper", type: "priest" },
  { name: "Rev. Anthony R. Ernst", slug: "anthony-r-ernst", ordained: "May 9, 1998", assignment: "Pastor, St. Francis Xavier Parish, Vincennes; St. Philip Neri Parish, Bicknell", type: "priest" },
  { name: "Rev. Martin Estrada", slug: "martin-estrada", ordained: "May 25, 2019", assignment: "Parochial Vicar, Holy Rosary Parish, Evansville", type: "priest" },
  { name: "Rev. Bernard T. Etienne, S.T.B.", slug: "bernard-t-etienne", ordained: "June 5, 1993", assignment: "Pastor, Holy Rosary Parish, Evansville", type: "priest" },
  { name: "Very Rev. Zachary J. Etienne", slug: "zachary-j-etienne", ordained: "June 5, 2004", assignment: "Pastor, Good Shepherd Parish; Moderator, All Saints Parish; Dean, South Deanery", type: "priest" },
  { name: "Very Rev. Paul A. Ferguson, S.T.B.", slug: "paul-a-ferguson", ordained: "May 25, 2002", assignment: "Pastor, Our Lady of Hope Parish, Washington; Dean, North Deanery", type: "priest" },
  { name: "Rev. Christopher Forler", slug: "christopher-forler", ordained: "May 31, 2008", assignment: "Pastor, St. John the Evangelist Parish, Daylight; St. Bernard Parish, Snake Run", type: "priest" },
  { name: "Rev. Riji George", slug: "riji-george", ordained: "April 29, 1997", assignment: "Administrator, Christ the King Parish, Ferdinand", type: "priest" },
  { name: "Very Rev. Jason B. Gries, J.C.L.", slug: "jason-b-gries", ordained: "June 5, 2004", assignment: "Pastor, Holy Redeemer Parish, Evansville", type: "priest" },
  { name: "Rev. Keith Hart", slug: "keith-hart", ordained: "June 14, 2025", assignment: "Parochial Vicar, St. Joseph Parish, Jasper", type: "priest" },
  { name: "Rev. Luke Hassler", slug: "luke-hassler", ordained: "May 25, 2019", assignment: "Pastor, Corpus Christi Parish, Evansville", type: "priest" },
  { name: "Rev. Aaron Herrenbruck", slug: "aaron-herrenbruck", ordained: "June 14, 2025", assignment: "Parochial Vicar, St. John the Evangelist Parish, Daylight; St. Bernard Parish, Snake Run", type: "priest" },
  { name: "Rev. Ryan Hilderbrand, S.T.L.", slug: "ryan-hilderbrand", ordained: "June 6, 2009", assignment: "Pastor, St. Philip Parish, Posey County", type: "priest" },
  { name: "Rev. Clint Johnson", slug: "clint-johnson", ordained: "June 14, 2025", assignment: "Parochial Vicar, St. Francis Xavier Parish, Vincennes; St. Philip Neri Parish, Bicknell", type: "priest" },
  { name: "Rev. Gary Kaiser", slug: "gary-kaiser", ordained: "June 3, 2006", assignment: "Pastor, St. Joseph Parish, Princeton; Holy Cross Parish, Fort Branch", type: "priest" },
  { name: "Rev. Vargheese Kalapurakudi", slug: "vargheese-kalapurakudi", ordained: "May 5, 2005", assignment: "Administrator, Sts. Peter and Paul Parish, Petersburg; Blessed Sacrament Parish, Oakland City", type: "priest" },
  { name: "Rev. Ronald Kreilein", slug: "ronald-kreilein", ordained: "June 2, 2007", assignment: "Temporary Administrator, St. Clement Parish, Boonville", type: "priest" },
  { name: "Rev. Jaison Kuzhiyil", slug: "jaison-kuzhiyil", ordained: "December 27, 2004", assignment: "Administrator, St. Bernard Parish, Rockport; St. Martin I, Chrisney", type: "priest" },
  { name: "Rev. Stephen McGinnis", slug: "stephen-mcginnis", ordained: "June 3, 2023", assignment: "Pastor, St. Peter Parish, Montgomery", type: "priest" },
  { name: "Rev. Simon Natha", slug: "simon-natha", ordained: "January 29, 2009", assignment: "Pastor, St. Isidore the Farmer Parish, Celestine", type: "priest" },
  { name: "Rev. William Nicholas", slug: "william-nicholas", ordained: "June 23, 2001", assignment: "Administrator, St. Mary Parish, Ireland", type: "priest" },
  { name: "Rev. John Pfister", slug: "john-pfister", ordained: "June 3, 2017", assignment: "Parochial Vicar, Annunciation of the Lord Parish, Evansville", type: "priest" },
  { name: "Rev. Jerry Pratt Jr.", slug: "jerry-pratt-jr", ordained: "June 3, 2017", assignment: "Pastor, Resurrection Parish, Evansville", type: "priest" },
  { name: "Rev. Juan Ramirez", slug: "juan-ramirez", ordained: "May 25, 2019", assignment: "Parochial Vicar, Our Lady of Hope Parish, Washington", type: "priest" },
  { name: "Rev. Jeffrey W. Read", slug: "jeffrey-w-read", ordained: "June 2, 2012", assignment: "Pastor, Holy Family Parish, Jasper", type: "priest" },
  { name: "Rev. Homero Rodriguez", slug: "homero-rodriguez", ordained: "December 12, 2016", assignment: "Part-time Parochial Vicar, St. Joseph Parish, Jasper; St. Mary Parish, Huntingburg", type: "priest" },
  { name: "Rev. Phillip Rogier", slug: "phillip-rogier", ordained: "June 22, 2024", assignment: "Parochial Vicar, St. James Parish, Haubstadt; Sts. Peter and Paul Parish, Haubstadt", type: "priest" },
  { name: "Rev. Caleb Scherzinger", slug: "caleb-scherzinger", ordained: "June 22, 2024", assignment: "Parochial Vicar, St. Francis Xavier Parish, Vincennes; St. Philip Neri Parish, Bicknell", type: "priest" },
  { name: "Rev. Eugene R. Schmitt", slug: "eugene-r-schmitt", ordained: "June 3, 2000", assignment: "Pastor, Sts. Mary and John Parish, Evansville", type: "priest" },
  { name: "Rev. Edward C. Schnur", slug: "edward-c-schnur", ordained: "June 1, 1991", assignment: "Pastor, St. Francis Xavier Parish, Poseyville; St. Wendel Parish", type: "priest" },
  { name: "Rev. Eugene A. Schroeder", slug: "eugene-a-schroeder", ordained: "April 27, 1979", assignment: "Pastor, St. Joseph Parish, Vanderburgh County", type: "priest" },
  { name: "Rev. Darnis Selvanayakam", slug: "darnis-selvanayakam", ordained: "December 29, 2003", assignment: "Administrator, St. Matthew Parish, Mount Vernon", type: "priest" },
  { name: "Rev. Tyler R. Tenbarge", slug: "tyler-r-tenbarge", ordained: "June 11, 2016", assignment: "Director of Vocations, Diocese of Evansville", type: "priest" },
  { name: "Very Rev. Andrew Thomas", slug: "andrew-thomas", ordained: "May 25, 2019", assignment: "Pastor, St. James Parish, Haubstadt; Sts. Peter and Paul Parish, Haubstadt; Dean, West Deanery", type: "priest" },
  { name: "Rev. Biju Thomas, S.T.B.", slug: "biju-thomas", ordained: "May 3, 2000", assignment: "Pastor, St. Mary Parish, Huntingburg", type: "priest" },
  { name: "Rev. Jose Thomas", slug: "jose-thomas", ordained: "April 22, 2002", assignment: "Pastor, Divine Mercy Parish, St. Anthony", type: "priest" },
  { name: "Rev. Tyler Underhill", slug: "tyler-underhill", ordained: "June 22, 2024", assignment: "Parochial Vicar, St. Benedict Cathedral, Evansville", type: "priest" },
  { name: "Very Rev. J. Kenneth Walker, M.C.L., J.C.L.", slug: "j-kenneth-walker", ordained: "May 29, 1981", assignment: "Judicial Vicar; Pastor, St. John the Evangelist Parish, Loogootee", type: "priest" },
  { name: "Rev. Ambrose M. Wanyonyi", slug: "ambrose-m-wanyonyi", ordained: "June 11, 2016", assignment: "Minister, Ascension St. Vincent Hospital, Evansville", type: "priest" },
  { name: "Very Rev. Alex Zenthoefer, D. Min.", slug: "alex-zenthoefer", ordained: "June 4, 2005", assignment: "Vicar General; Rector, St. Benedict Cathedral", type: "priest" },
  // Religious Order Priests
  { name: "Rev. Christian Rabb, O.S.B.", slug: "christian-rabb", ordained: "June 7, 2009", assignment: "Parochial Vicar, St. Joseph Parish, Jasper", type: "priest" },
  { name: "Rev. Suresh Bakka, H.G.N.", slug: "suresh-bakka", ordained: "December 29, 2003", assignment: "Administrator, St. Mary Parish, Sullivan; St. Joan of Arc Parish, Jasonville", type: "priest" },
  { name: "Rev. Srinivasa Malaka, H.G.N.", slug: "srinivasa-malaka", ordained: "December 28, 2001", assignment: "Administrator, St. Peter Parish, Linton; Holy Name Parish, Bloomfield", type: "priest" },
  { name: "Rev. Raymond Van Dorpe, C.M.", slug: "raymond-van-dorpe", ordained: "June 5, 1982", assignment: "Chaplain, Daughters of Charity Seton Residence, Evansville", type: "priest" },
  { name: "Rev. Jeffery Jambon, L.C.", slug: "jeffery-jambon", ordained: "December 22, 2001", assignment: "Chaplain, Benedictines of Mary, Queen of Apostles", type: "priest" },
];

/* ─── SENIOR (RETIRED) PRIESTS ─── */

export const seniorPriests: ClergyMember[] = [
  { name: "Rev. Donald K. Ackerman", slug: "donald-k-ackerman", ordained: "March 18, 1961", assignment: "Senior Priest", type: "priest" },
  { name: "Very Rev. John L. Boeglin", slug: "john-l-boeglin", ordained: "September 1, 1978", assignment: "Senior Priest; Vicar for Senior Priests", type: "priest" },
  { name: "Very Rev. Raymond A. Brenner", slug: "raymond-a-brenner", ordained: "May 17, 1969", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. John W. Davidson, M.S.", slug: "john-w-davidson", ordained: "March 14, 1964", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. Donald C. Dilger, M.A.", slug: "donald-c-dilger", ordained: "March 15, 1959", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. Jack J. Durchholz", slug: "jack-j-durchholz", ordained: "March 18, 1995", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. Joseph F. Erbacher", slug: "joseph-f-erbacher", ordained: "March 25, 1972", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. Joseph E. Kane", slug: "joseph-e-kane", ordained: "March 11, 1967", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. Thomas J. Kessler", slug: "thomas-j-kessler", ordained: "June 7, 1975", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. Anthony B. Kissel, Ph.D., S.T.D.", slug: "anthony-b-kissel", ordained: "September 1, 1973", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. James E. Koressel", slug: "james-e-koressel", ordained: "May 17, 1969", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. Stephen P. Lintzenich, M.S.", slug: "stephen-p-lintzenich", ordained: "June 22, 1974", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. Bernard A. Lutz, M.S.", slug: "bernard-a-lutz", ordained: "March 30, 1963", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. David A. Martin", slug: "david-a-martin", ordained: "May 14, 1976", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. David H. Nunning", slug: "david-h-nunning", ordained: "August 3, 1969", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. Frank G. Renner", slug: "frank-g-renner", ordained: "May 22, 1981", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. Earl R. Rohleder", slug: "earl-r-rohleder", ordained: "March 30, 1963", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. James E. Sauer", slug: "james-e-sauer", ordained: "March 25, 1977", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. Ralph H. Schipp", slug: "ralph-h-schipp", ordained: "May 27, 1965", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. Theodore G. Tempel", slug: "theodore-g-tempel", ordained: "May 23, 1964", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. Timothy A. Tenbarge", slug: "timothy-a-tenbarge", ordained: "May 26, 1973", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. William A. Traylor, S.T.B.", slug: "william-a-traylor", ordained: "April 30, 1976", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. Lowell C. Will", slug: "lowell-c-will", ordained: "March 2, 1968", assignment: "Senior Priest", type: "priest" },
  { name: "Rev. Ronald S. Zgunda", slug: "ronald-s-zgunda", ordained: "May 6, 1977", assignment: "Senior Priest", type: "priest" },
];

/* ─── TRANSITIONAL DEACONS ─── */

export const transitionalDeacons: ClergyMember[] = [
  { name: "Deacon Chase Riecker", slug: "chase-riecker", ordained: "April 18, 2026", assignment: "Transitional Deacon", type: "transitional-deacon" },
  { name: "Deacon Nathan Folz", slug: "nathan-folz", ordained: "April 18, 2026", assignment: "Transitional Deacon", type: "transitional-deacon" },
];

/* ─── PERMANENT DEACONS (active, alphabetical) ─── */

export const permanentDeacons: ClergyMember[] = [
  { name: "Deacon Kevin Bach", slug: "kevin-bach", ordained: "August 15, 2009", assignment: "Holy Redeemer Parish, Evansville", type: "deacon" },
  { name: "Deacon Vincent Bernardin", slug: "vincent-bernardin", ordained: "July 9, 2005", assignment: "St. John the Evangelist Parish, Daylight; St. Bernard Parish, Snake Run", type: "deacon" },
  { name: "Deacon Christian Borowiecki", slug: "christian-borowiecki", ordained: "August 15, 2009", assignment: "Holy Rosary Parish, Evansville", type: "deacon" },
  { name: "Deacon William Brandle", slug: "william-brandle", ordained: "July 9, 2005", assignment: "Sts. Peter and Paul Parish, Haubstadt", type: "deacon" },
  { name: "Deacon Reynaldo Carandang", slug: "reynaldo-carandang", ordained: "August 5, 2017", assignment: "St. Francis Xavier Parish, Vincennes", type: "deacon" },
  { name: "Deacon Ronald Cardinal", slug: "ronald-cardinal", ordained: "August 13, 2022", assignment: "St. Francis Xavier Parish, Vincennes", type: "deacon" },
  { name: "Deacon Thomas Cervone", slug: "thomas-cervone", ordained: "August 5, 2017", assignment: "Holy Redeemer Parish, Evansville", type: "deacon" },
  { name: "Deacon William Consley", slug: "william-consley", ordained: "August 3, 2013", assignment: "St. John the Evangelist Parish, Loogootee", type: "deacon" },
  { name: "Deacon Lonny Davis", slug: "lonny-davis", ordained: "August 13, 2022", assignment: "St. John the Evangelist Parish, Daylight; St. Bernard Parish, Snake Run", type: "deacon" },
  { name: "Deacon Dan DeCastra", slug: "dan-decastra", ordained: "August 3, 2013", assignment: "Good Shepherd Parish, Evansville", type: "deacon" },
  { name: "Deacon Thomas Evans", slug: "thomas-evans", ordained: "August 15, 2009", assignment: "Director of the Permanent Diaconate; St. Matthew Parish, Mount Vernon", type: "deacon" },
  { name: "Deacon Albert Frabutt", slug: "albert-frabutt", ordained: "August 5, 2017", assignment: "St. Peter Parish, Linton; Holy Name Parish, Bloomfield", type: "deacon" },
  { name: "Deacon Jose Garrido", slug: "jose-garrido", ordained: "August 3, 2013", assignment: "Holy Rosary Parish, Evansville", type: "deacon" },
  { name: "Deacon Thomas Goebel", slug: "thomas-goebel", ordained: "July 9, 2005", assignment: "Corpus Christi Parish, Evansville", type: "deacon" },
  { name: "Deacon Pat Herman", slug: "pat-herman", ordained: "August 13, 2002", assignment: "St. Francis Xavier Parish, Vincennes", type: "deacon" },
  { name: "Deacon Dennis Hilderbrand", slug: "dennis-hilderbrand", ordained: "July 9, 2005", assignment: "Our Lady of Hope Parish, Washington", type: "deacon" },
  { name: "Deacon Wayne Hoy", slug: "wayne-hoy", ordained: "May 24, 1980", assignment: "St. Boniface Parish, Evansville", type: "deacon" },
  { name: "Deacon Charles Johnson", slug: "charles-johnson", ordained: "August 5, 2017", assignment: "Divine Mercy Parish, St. Anthony", type: "deacon" },
  { name: "Deacon Michael Jones", slug: "michael-jones", ordained: "August 30, 2003", assignment: "Precious Blood Parish, Jasper", type: "deacon" },
  { name: "Deacon Gary Keepes", slug: "gary-keepes", ordained: "August 13, 2022", assignment: "Sts. Peter and Paul Parish, Petersburg; Blessed Sacrament Parish, Oakland City", type: "deacon" },
  { name: "Deacon Kevin Kilmer", slug: "kevin-kilmer", ordained: "August 13, 2022", assignment: "St. Francis Xavier Parish, Vincennes", type: "deacon" },
  { name: "Deacon James King", slug: "james-king", ordained: "August 15, 2009", assignment: "Christ the King Parish, Ferdinand", type: "deacon" },
  { name: "Deacon Charles Koressel", slug: "charles-koressel", ordained: "July 9, 2005", assignment: "St. Philip Parish, Posey County", type: "deacon" },
  { name: "Deacon Thomas Lambert", slug: "thomas-lambert", ordained: "December 12, 1992", assignment: "St. Clement Parish, Boonville", type: "deacon" },
  { name: "Deacon Robert Martin", slug: "robert-martin", ordained: "August 13, 2022", assignment: "St. Philip Parish, Posey County", type: "deacon" },
  { name: "Deacon Robert Mattingly", slug: "robert-mattingly", ordained: "August 5, 2017", assignment: "St. Boniface Parish, Evansville", type: "deacon" },
  { name: "Deacon Brian McCammon", slug: "brian-mccammon", ordained: "August 13, 2022", assignment: "St. Mary Parish, Sullivan; St. Joan of Arc Parish, Jasonville", type: "deacon" },
  { name: "Deacon David McDaniel", slug: "david-mcdaniel", ordained: "November 18, 2006", assignment: "Holy Family Parish, Jasper", type: "deacon" },
  { name: "Deacon Mark McDonald", slug: "mark-mcdonald", ordained: "August 15, 2009", assignment: "St. Francis Xavier Parish, Poseyville; St. Wendel Parish", type: "deacon" },
  { name: "Deacon John McMullen", slug: "john-mcmullen", ordained: "August 15, 2009", assignment: "Asst. Director of the Permanent Diaconate; Annunciation of the Lord Parish", type: "deacon" },
  { name: "Deacon Jorge Melendres", slug: "jorge-melendres", ordained: "August 13, 2022", assignment: "Holy Rosary Parish, Evansville", type: "deacon" },
  { name: "Deacon Daniel Niemeier", slug: "daniel-niemeier", ordained: "August 13, 2022", assignment: "Resurrection Parish, Evansville", type: "deacon" },
  { name: "Deacon David Rice", slug: "david-rice", ordained: "July 9, 2005", assignment: "Clergy Personnel Director; St. Benedict Cathedral Parish", type: "deacon" },
  { name: "Deacon Dennis Russell", slug: "dennis-russell", ordained: "August 15, 2009", assignment: "Sts. Mary and John Parish, Evansville", type: "deacon" },
  { name: "Deacon Anthony Schapker", slug: "anthony-schapker", ordained: "August 15, 2009", assignment: "St. John the Baptist Parish, Newburgh", type: "deacon" },
  { name: "Deacon David Seibert", slug: "david-seibert", ordained: "July 9, 2005", assignment: "St. Clement Parish, Boonville", type: "deacon" },
  { name: "Deacon Michael Seibert", slug: "michael-seibert", ordained: "July 9, 2005", assignment: "Special Discipleship Ministry", type: "deacon" },
  { name: "Deacon Joseph Siewers", slug: "joseph-siewers", ordained: "August 3, 2013", assignment: "Holy Cross Parish, Fort Branch; St. Joseph Parish, Princeton", type: "deacon" },
  { name: "Deacon Mark Thieman", slug: "mark-thieman", ordained: "August 13, 2022", assignment: "St. John the Baptist Parish, Newburgh", type: "deacon" },
  { name: "Deacon Paul Vonderwell", slug: "paul-vonderwell", ordained: "August 5, 2017", assignment: "St. Francis Xavier Parish, Vincennes", type: "deacon" },
  { name: "Deacon Edward Walker", slug: "edward-walker", ordained: "August 13, 2022", assignment: "Resurrection Parish, Evansville", type: "deacon" },
  { name: "Deacon Michael Waninger", slug: "michael-waninger", ordained: "July 9, 2005", assignment: "St. Bernard Parish, Rockport; St. Martin I Parish, Chrisney", type: "deacon" },
  { name: "Deacon Danny Wheeler", slug: "danny-wheeler", ordained: "August 13, 2022", assignment: "Corpus Christi Parish, Evansville", type: "deacon" },
  { name: "Deacon James Woebkenberg", slug: "james-woebkenberg", ordained: "July 9, 2005", assignment: "St. Francis of Assisi Parish, Dale", type: "deacon" },
  { name: "Deacon Cletus Yochum Jr.", slug: "cletus-yochum", ordained: "August 3, 2013", assignment: "St. Francis Xavier Parish, Vincennes", type: "deacon" },
];

/* ─── RETIRED PERMANENT DEACONS ─── */

export const retiredDeacons: ClergyMember[] = [
  { name: "Deacon Emil Altmeyer", slug: "emil-altmeyer", ordained: "August 15, 2009", assignment: "Retired", type: "deacon" },
  { name: "Deacon David Franklin", slug: "david-franklin", ordained: "May 15, 1977", assignment: "Retired", type: "deacon" },
  { name: "Deacon Richard Leibundguth", slug: "richard-leibundguth", ordained: "August 3, 2013", assignment: "Retired", type: "deacon" },
  { name: "Deacon Russell Maples", slug: "russell-maples", ordained: "August 3, 2013", assignment: "Retired", type: "deacon" },
  { name: "Deacon Earl Ruppel", slug: "earl-ruppel", ordained: "July 9, 2005", assignment: "Retired", type: "deacon" },
  { name: "Deacon Mark Wade", slug: "mark-wade", ordained: "August 15, 2009", assignment: "Retired", type: "deacon" },
  { name: "Deacon Edward Wilkerson", slug: "edward-wilkerson", ordained: "October 4, 1985", assignment: "Retired", type: "deacon" },
  { name: "Deacon Cyril Will", slug: "cyril-will", ordained: "February 10, 1990", assignment: "Retired", type: "deacon" },
  { name: "Deacon Donald Yochum", slug: "donald-yochum", ordained: "July 9, 2005", assignment: "Retired", type: "deacon" },
];
