"use strict";
// tslint:disable-next-line: variable-name
var Europa = 4965.7 + 4616.4 + 4705.8 + 4615.2 + 4541.5 + 4436.9 + 4202 + 4191.6 + 4247.3 + 4278.7 + 4209.3;
// tslint:disable-next-line: variable-name
var NorthAmerica = 6600.4 + 6139.9 + 6375.8 + 6262.8 + 5998.9 + 6176 + 6268.9 + 6048.7 + 5938.3 + 5920.5 + 6035.6;
// tslint:disable-next-line: variable-name
var SouthAmerica = 1132.6 + 1093.1 + 1164.2 + 1215.5 + 1262 + 1308.9 + 1331.3 + 1321.7 + 1294.7 + 1279.2 + 1261.5;
// tslint:disable-next-line: variable-name
var Africa = 1028 + 1041.9 + 1072.1 + 1073.7 + 1107.1 + 1134.4 + 1167.1 + 1174.5 + 1192.1 + 1207 + 1235.5;
// tslint:disable-next-line: variable-name
var Asia = 12954.7 + 13246.6 + 13986.8 + 14860.1 + 15308.8 + 15660.2 + 15787.7 + 15877 + 15984 + 16274.3 + 16274.1;
// tslint:disable-next-line: variable-name
var Australia = 1993 + 1875.7 + 1939.1 + 2035.2 + 2063.2 + 2014.7 + 2027.6 + 1986.8 + 1997.4 + 2001.4 + 2100.5;
var euDif = 4209.3 - 4965.7;
var naDif = 6035.6 - 6600.4;
var asDif = 16274.1 - 12954.7;
var saDif = 1261.5 - 1132.6;
var afDif = 1235.5 - 1028;
var auDif = 2100.5 - 1993;
// tslint:disable-next-line: variable-name
var Welt = Europa + NorthAmerica + Asia + SouthAmerica + Africa + Australia;
var euWorld = (Europa / Welt) * 100;
var naWorld = (NorthAmerica / Welt) * 100;
var asWorld = (Asia / Welt) * 100;
var saWorld = (SouthAmerica / Welt) * 100;
var afWorld = (Africa / Welt) * 100;
var auWorld = (Australia / Welt) * 100;
var euRate = (euDif / Europa) * 100;
var naRate = (naDif / NorthAmerica) * 100;
var asRate = (asDif / Asia) * 100;
var saRate = (saDif / SouthAmerica) * 100;
var afRate = (afDif / Africa) * 100;
var auRate = (auDif / Australia) * 100;
console.log(`Die Emission von Europa (2008-2018) ist: ${Europa} kg CO2`);
console.log(`Relativ zur Gesamtemission der Welt (2008-2018) verursacht Europa damit ${euWorld} %`);
console.log(`Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ${euRate}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${euDif} kg CO2`);
console.log(`Die Emission von Nordamerika (2008-2018) ist: ${NorthAmerica} kg CO2`);
console.log(`Relativ zur Gesamtemission der Welt (2008-2018) verursacht Nordamerika damit ${naWorld}%`);
console.log(`Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ${naRate}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${naDif} kg CO2`);
console.log(`Die Emission von Asien (2008-2018) ist: ${Asia} kg CO2`);
console.log(`Relativ zur Gesamtemission der Welt (2008-2018) verursacht Asien damit ${asWorld}%`);
console.log(`Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ${asRate}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${asDif} kg CO2`);
console.log(`Die Emission von Südamerika (2008-2018) ist: ${SouthAmerica} kg CO2`);
console.log(`Relativ zur Gesamtemission der Welt (2008-2018) verursacht Südamerika damit ${saWorld}%`);
console.log(`Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ${saRate}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${saDif} kg CO2`);
console.log(`Die Emission von Afrika (2008-2018) ist: ${Africa} kg CO2`);
console.log(`Relativ zur Gesamtemission der Welt (2008-2018) verursacht Afrika damit ${afWorld}%`);
console.log(`Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ${afRate}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${afDif} kg CO2`);
console.log(`Die Emission von Australien (2008-2018) ist: ${Australia} kg CO2`);
console.log(`Relativ zur Gesamtemission der Welt (2008-2018) verursacht Australien damit ${auWorld}%`);
console.log(`Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ${auRate}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${auDif} kg CO2`);
//# sourceMappingURL=script.js.map