(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('海东', {"type":"FeatureCollection","features":[{"type":"Feature","id":"630202","properties":{"name":"乐都区","cp":[102.401724,36.482058],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@CA@@A@@BA@@BC@@@@BAA@@@@@@A@@A@@@A@@@@@@@@A@@@@A@A@A@A@@@@AA@@A@@@@BAAA@@@@@AAA@@ECA@@A@AAA@AAA@A@@AC@AA@@AAA@A@@@@@@@@@@@A@A@@@AA@@AB@BAB@BA@A@A@@BA@A@A@@@@@ABA@A@A@@@@@AA@@AA@A@A@A@AA@@@@BA@@@@BA@@@A@@@@A@@AA@@A@@@@A@@@@A@@@@@@A@AA@@E@@@A@@@A@@@@@AA@@A@@@AA@@C@C@@@AA@@@@@AA@@A@@@AAA@@@AA@@AA@@@@A@@@@@@@A@@A@@@A@@A@AA@@@@@@AA@@A@@@A@@@A@A@@BA@@@@@@@A@@@AB@@A@@@AAA@@BA@@@@@@BA@@@A@A@@AA@AA@@A@@CA@@@@@@A@@AA@AA@@@A@AAA@@AA@@@AAA@@@AB@@@@@@A@ABA@C@@@@@@AA@@A@A@@AAAA@AA@@@@A@@AA@A@A@A@AA@@A@AAA@AAC@A@C@@@AB@@A@@@CAA@@@C@@BAAAB@AABA@A@AB@@AAA@C@@AA@@A@@A@A@A@@@CBA@CDA@A@@@@@A@@@A@@@AD@@AB@@@@@BA@@@A@A@@@A@A@AAA@ABA@AAABABAB@@A@CB@@@BC@@@ABA@@@A@A@@BEBA@@@@B@@ABA@@@@@A@@@@@CB@@AAA@ABA@@@ABAB@B@B@@@@ABCBAB@BA@@@A@@BA@A@A@@@@@@@A@@@@@ABA@A@@B@@CBCB@@@B@@@@A@@@A@AAAACAAAAAA@@@AA@@@@A@@@C@AAA@A@A@A@A@CB@BA@@@C@A@A@A@A@AB@BAB@@@B@@A@ABABIFABC@@BAB@@ABA@CFABCD@@@BAB@@@@A@ABA@A@A@ABA@@@AA@@A@C@@@A@@@ABEA@@A@@A@@C@@@@A@@@AA@@@@A@@@AACAAA@AAAAAA@@@AA@@@A@A@@@A@E@A@A@@@AA@AAAAA@AA@C@A@AB@@A@CBA@@@ADABC@A@AB@@A@@BA@C@@@@@AAA@@@AAAAA@@@A@C@A@C@C@C@@BC@A@AB@@AA@@AAA@ABADABAB@@@B@BAB@@A@C@@@A@A@@@AAAA@AAAAA@AA@AAC@@@A@ABABCDA@@@@@ACAAEAA@A@@@AACC@@@@@A@A@@@@AA@@AAA@A@AA@@A@C@@@A@@@@B@@@@A@A@CB@B@@ABA@@@A@A@A@@B@@ABABA@@@AB@@A@ABCAA@G@A@@@@@A@C@@@C@AA@@A@@@@@@@@D@@A@A@CB@@@BBBA@@@@@ABA@@BA@AB@@@BA@@@ABA@A@@@@@@@@B@@@B@@@@AB@@ABABA@BB@@@AB@BBBB@@AB@B@@@B@B@@@BBB@@@B@@A@@BA@@@@B@@@BA@@BA@A@@BA@@@CBABA@@B@BA@ABA@@B@B@BABA@@B@@@B@BBBBB@B@@AB@B@B@B@B@BBBBD@DAB@B@BBB@BBBB@B@BB@B@B@B@@A@CDAB@@@@C@ABA@ABAD@@@@C@CAA@EBCBGD@@A@A@@@C@@@AB@@CDADADCB@@C@A@CBA@@B@@AFAB@B@BBBDB@@BDBB@B@BBBDDBDBB@BA@@@ADABAB@B@B@DA@@B@B@@@BABEB@@@@A@@@@@@B@DAD@BABAB@@A@@F@B@B@@ABA@@@ADADADABAB@B@@AD@D@BA@@@ABA@AB@B@@@@@@@BFBBBB@BBDBDBB@D@@B@@@@ABA@C@A@@B@@@BDDBBBBBBFDFDDB@@@@@BH@B@@@@B@B@@@F@@@@B@B@B@BBB@@BB@@B@@@D@@@@B@@@B@@BBB@@DDDDDDDDBDBBBDDBBD@B@BBBBBBDB@AB@@@B@@D@@@BFD@@@DBBB@B@@@B@BBBBDB@@B@DBB@@BBB@@@@B@D@BBB@@BBBDDD@@@@@@@B@B@@@DAB@D@@@BA@@DAB@B@@@BBBBB@B@D@@BDBB@BBB@@A@@@BB@@BB@@@D@@B@@DA@@BBB@@@@BBDB@@BB@@@@@@BB@@@@@@@@@@@@@B@@@BA@@@@BB@@@BB@BA@@@@B@BABA@ABAB@B@B@B@@@D@@BB@@@BBB@@BBB@@BB@@@@@BB@B@BABAB@D@B@B@DBDBB@B@@@BBBBB@B@B@@BB@B@@@B@@@B@@BBD@@@BBB@@B@@BA@@@@@@@AB@@@@@@B@B@@BA@@@@@@@A@@B@B@@@AB@B@@@B@@@@AB@@B@@@@@@@@@B@@@B@@@@@ABD@@@@B@@@@ABA@BB@@A@@@A@@@BB@@B@@AB@@@@@B@AB@B@@@@BB@@B@@@@B@@@B@DBF@B@@B@@B@DB@@@@@@B@@B@AB@@ABA@@@AD@B@BBD@B@D@BBB@B@@@@A@B@ABB@@@@B@@@@@B@@@@@D@@BBBB@BBD@@@D@@AD@B@@@D@B@B@@ABAD@@@D@BBB@D@@@B@BBB@@@@@B@B@@@@@B@@@@@@@@@@@@@BB@@B@B@D@@@B@@@B@@@@@@@@@B@@@B@@@@AB@@BB@@AB@@B@@@@B@@@B@@@B@@@B@@@@@@@DAB@@@@@@@@@@@BA@@@@@@BA@@@@@@B@@@BA@@@@@@B@@@B@@@B@@BB@@@@BB@A@@@BB@@@@BA@@@@@@@B@@B@@@@@B@@@@@@@BBB@@A@B@@B@@@@@@@@BB@@B@@@B@B@@@B@B@D@D@D@@@B@@ADA@@@@BABA@A@@@@@A@AB@AAB@@@@A@@BAB@@@@A@AB@@@@C@@@A@@B@BA@@@A@@@@@ADC@@@AB@@@@BBBB@@@BBB@@@DB@@@BBD@@@D@@@BAB@B@@@@AB@@@B@@BB@B@@AB@@@B@BDD@BB@BBBBBBBBBBBBBB@B@BBD@@@@BBBBB@D@B@@@B@DBB@DB@@BB@@@B@B@@DBB@DB@@BBD@DBB@@@BBBB@BBDBDDFFDDBDB@BB@@@BBBB@B@@@B@DAF@BD@@BB@DBD@B@BAD@DAD@B@@AB@@@DADA@@B@BD@@@B@@@B@D@B@@B@BBBB@B@B@@BBBB@@@BBB@B@BAB@B@BBBBD@BD@@@B@B@@@@@B@DBB@@@B@B@B@D@B@BBBBB@B@BBB@BBBB@@BC@@@AB@FA@@@@BA@A@A@@DC@@@CB@BA@@B@@BB@A@@B@@@F@@@B@@@D@BB@@BBBB@@B@@BBDBBBBB@B@@AB@B@@@B@@@@BAB@@AB@B@@@BBBDB@@@B@B@@@BA@@B@@@B@B@B@@@B@BC@@B@B@@A@@B@@@@@BBA@@BB@@@@BB@AB@@@B@@@@@B@@@@@B@@@B@@@BB@@B@DB@@@ABB@@@BB@@@BA@@@@@@BAB@@A@AA@B@@@@@B@@CBABA@@B@@B@BB@@@@A@@B@@A@@@@B@@BBD@@@@B@@BB@@@@@@@B@@@B@@@B@B@@@@@B@@@BB@@@BBAB@@@@BB@@@B@@BBA@@@AB@@@B@@BB@@@@@@@BBB@@@BA@@BA@@B@@@B@B@D@@BB@@BB@B@@@B@BBB@@BB@@@@@B@@@@@D@B@@@@BB@@@@@@@@BBA@@B@BA@@@@B@@@B@@@B@D@@@BA@AD@@@B@@@BBDA@@B@@@B@@@B@B@@AB@BAD@@@D@B@BCB@@AB@@@B@@A@@@AB@@A@@@@@AB@@AB@BAD@@@B@B@@@B@@ADAB@B@@@BABA@ABABCB@@AB@B@@A@@B@BABA@@BAB@B@@ADA@AB@D@B@@@BCD@@@DBDBBDDBB@@DBBBBB@@BB@@B@@@B@DAB@B@B@@AB@@A@@B@B@FAB@@@BA@ABABA@@@A@@@@BABA@AB@@ADBB@B@B@B@B@HC@@B@@@DBB@@@B@DA@@D@BA@@B@BB@@D@B@@@B@BA@@@A@A@C@@BABA@@@@B@B@D@B@B@B@@@BAB@BA@@BC@C@A@@BA@@DB@AB@B@D@@@BABADABABAB@@@B@B@BABCB@@A@A@AAA@A@@B@BC@AB@BABA@A@@BA@@B@B@B@@@DADA@@@@@AB@@@BA@A@@@A@A@@AA@@AA@@@A@AAA@A@@@C@A@@B@@@B@DBB@@@BAB@@ABADABABA@@B@B@DAD@BA@@B@BADA@A@@DAD@BAFA@@@C@A@@@@@@EA@@@@AAAE@@AA@AAC@AA@AA@@A@@@@@@A@A@A@A@A@A@@AA@@@ADADCD@BEBCB@B@B@B@B@B@BB@@B@@@BA@AAA@@@@DA@@FEB@B@JBD@DBD@B@B@BABA@@B@BA@@B@DAB@B@DABADADAF@F@BAB@B@B@F@BAB@@@BA@@@C@A@@@ABC@A@A@@BCDCB@@AB@@BB@D@B@DABAB@@@B@B@DA@@DA@@B@B@BBBBB@@ABAFC@@B@@@B@@@@@B@B@@ABAB@B@DAD@B@BBB@B@B@B@DBB@@@D@B@D@B@BBD@B@BADADABAB@D@DAD@DA@A@@B@@@@@BABABA@AB@@ABC@@B@@A@@ACAA@@ACAC@A@A@A@@D@@A@@BE@A@@BCAA@A@A@ABA@ABABABAFADADA@@B@@A@@B@@A@A@A@A@@@@BA@@@A@@B@@AB@@AB@@@BA@@@AB@@A@@@A@@@@@@@@@A@@@@@@@AB@@@@A@@B@@A@@@@@@BA@A@@@ABA@AB@@@@@@A@@@@B@B@@A@@B@@AD@B@B@BA@@B@@@BA@@@@@@@ABA@@@@B@@AB@B@BA@@B@@@BA@@BAD@DADA@ABAB@@@B@@AB@FA@@B@@@@A@@B@@@B@B@B@@@BABA@@BA@@B@@AB@B@@@BAB@@@@A@@BA@@@@B@@AB@@@BABA@@@@BA@A@@B@@AB@BADA@@@AD@BAB@B@@@B@B@B@BAD@F@B@B@@@@@@@B@F@D@F@D@B@B@@@B@B@BAB@B@B@BA@@B@@@D@B@@@B@@@@@@A@@A@@AAAAEACACAE@@CA@@CA@AB@@@DAB@DADAFEFAFADADADADCBADADCB@@@D@@@D@@@B@B@B@@@B@DB@@@@BA@@BA@AB@@AB@BAB@@AB@@@B@@@DC@@@AA@@A@@@C@AAA@A@@A@@@A@@@@@A@@@A@@@A@@@@@A@AAA@@@A@@@C@@@@AA@A@@@A@@BA@@BA@@AA@A@ABC@@BC@AB@@A@@@@@@@@@AC@A@A@A@ACC@@@A@@B@@@DAB@BA@@@@BA@A@A@A@C@@@@@A@@BA@@BA@@F@DC@@@@AAC@ACAA@A@ABCBE@@BADCBADC@A@ABABC@A@@BADADAD@D@FAHAH@BAB@@AHE@C@CBC@M@C@@B@B@@@BBBBBBBDB@@@@@@@BA@@DCBADCDC@A@AA@EE@A@A@AB@@CBC@AAA@AAA@AAA@@@AC@@A@@A@EAC@A@GCECAACCCGAE@@DADCDC@ABCAA@ABA@@DAHADAB@DABADA@ABC@@BG@CAC@ABABABEBE@ABAB@@@@CA@A@@@@@A@ABA@CBA@A@@@A@@AA@A@@@A@A@A@@@AA@@@@@AA@@AA@AAAA@AA@AAA@@A@A@A@A@AB@@AA@@@A@@AA@@@@@A@A@A@A@@@@@A@@BA@@@@@@@A@@B@@A@A@@@A@@@@@A@@@A@@@@AA@@@@@A@@@@@CAAA@@@@A@@@@@A@@A@@@@@@AAA@@@@@AAAAA@@@ABCD@BABA@ABA@AB@@@@@B@@AB@B@@@@@BB@@BB@@@BB@@B@@BDFBB@BBD@@BFB@@BD@@@@@BBB@B@@BB@BB@@@BB@@B@@AB@@@@@@AB@BA@A@@B@@C@A@@@AB@@AAA@@@@@A@ABA@@@A@@@@@A@@@@AA@@@A@A@@@A@@@@@A@@@A@ABAA@@A@@@C@@@@@A@@@@@@@@ABC@AA@@A@@CAA@@@@@AA@A@@A@@A@A@A@@@A@@@@@@@C@@@A@@@AA@@AB@AA@A@@@AA@@@@A@@@A@A@@BA@@@AB@BA@@@@@@B@B@@@@@DA@@@@A@@C@A@@@A@@BA@@B@BAD@@@@AB@@A@@@@@@@A@@A@BA@@A@@@@A@@@@AA@@@A@@A@@@@AA@@@@A@@A@@A@@A@@A@@@@@AA@@A@@A@@A@@A@@@AAA@@AA@@AA@AA@@@@@A@@@@@AA@@@@@AA@@@A@@@@@A@@@@@@@A@@@@@@C@@AA@@@AA@@@A@@@@AA@A@@@@@A@@@A@@BA@@BA@@@@@@BA@A@@A@@@@@@A@@@@A@@@@@@@@A@A@@A@@BA@@A@@@@@A@@@@@@@AABA@@AA@CA@@@AA@@@@@A@AAA@@@@@A@C@A@AAC@EBA@@@@@A@@@@@ABABA@@@A@@@@AA@@@@@@@A@@@@@@@AA@B@@@@@@@@A@@@ABAAAA@@@@@@@AA@@@A@@@A@@@A@@@@B@@@@ABAB@@A@@@@@@@B@@B@@A@@@@@@@A@@B@@@@A@ABAA@B@@AA@@@@@@A@@BA@@A@@A@@@A@@@@A@@@@@AA@@A@@A@AB@@A@AB@@@B@@A@@@A@@@A@@@@A@@A@@@@@@A@A@@@@@@A@AA@@@@@AA@@@@@A@@AB@@@@@AA@BA@@AB@@@A@@AA@@@@A@@A@@@AA@@@AA@@@@BA@@@@@@A@@A@@@A@@B@@@@A@@@@@@A@@A@A@@@@@A@@@@BA@@A@@AB@@@@@A@@@@@@A@@AAB@@@@A@A@@@@@@A@@@@A@@@@@A@@@@@@@A@A@@@A@@@@@@@@@@@AAAB@@@@A@A@@@@A@@A@@B@@A@@AA@@@@@@@A@@@@A@@@@@@AB@A@@A@@@@@A@@@A@@@@@@@@A@@A@@@A@@@@BA@@AAB@@@@@@@AA@@@A@AA@@@@@@A@@@B@A@@@A@@@A@@@@@BA@@@@@@AB@@@@@A@@@@@@A@@@@AABA@A@@@@@@AA@@BA@@@@@@AC@A@@@@@@A@@A@@B@@C@AA@@A@AB@@A@@@A@A@@A@@A@@@B@A@@@@@@@AB@@@@@@@A@@@@A@@B@@A@@AA@@@A@@AA@@@@@@@@@@@@@AAAB@AAB@AA@@@@@@@B@@A@@A@@@@@@@@BA@@@@@@AA@A@@@@AAB@@@@BA@A@@@@@@@@@@@@A@@@@@A@@@@@@@A@@@@@@@A@@@@A@BA@@@@@A@@@A@@@@@A@@@AA@@@@@@@@A@A@@@AA@@A@@A@@@@@@AA@@@@AB@@@A@@@@@@A@@@A@@AB@@@@@A@@@@A@@@@@@A@@@AAA@A@C@C@@@@@A@@@@@CA@@A@A@@A@@@@@@A@A@@A@@@@@@AA@AAC@A@A@@AAAA@A@AA@@@AA@@CAA@A@@@@@@AA@A@@A@AAA@@@@@A@@@ABA@C@@AA@@@@@A@@@A@@@A@@@A@@A@@AAA@@A@A@@AAA@@@@@@@AA@@@A@AABA@A"],"encodeOffsets":[[104988,37176]]}},{"type":"Feature","id":"630203","properties":{"name":"平安区","cp":[102.108834,36.500563],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@A@@@AAA@@A@@AA@@@@A@A@AAA@C@@@A@AA@@A@AB@B@BAB@@@B@@AB@BA@@B@@@BA@@BA@@B@@@@@B@B@B@@@B@@@@@@AB@@@B@@@@@@AB@@@@AB@@@@@@@B@B@B@B@B@@@B@@@B@@@@@B@@@@@@@@A@@B@@@@AB@BA@@@@@@BA@@@@B@@@@@B@@ABA@ABA@@@A@AB@@C@A@AA@@A@A@A@ABA@A@@@A@@B@@C@AA@@A@@BA@A@@@A@C@A@@@A@@@@A@AA@A@AAC@A@AAA@A@A@AA@@@@AAA@@@A@@@A@AA@@A@@AA@@@@AA@@@A@A@A@@@ABA@@@AA@@@@AC@@@@BAA@AAA@@@A@@A@@@@CB@@C@@@AAA@A@@@A@@@AB@@A@A@A@ABAA@@CBA@AAA@@@C@CAA@@AA@AB@@C@@BA@ABA@A@@@AA@@A@@@AA@@@@A@A@@@AA@@@BA@@@A@@AA@A@@@AAA@@@A@A@A@@BAB@BABA@@@@BA@A@@@A@C@@@A@@@CBA@@@A@A@ABA@@B@@A@@@A@CB@BC@A@@@ABA@ABA@@@A@@@AAA@A@ABA@ABC@ABA@@@A@AAAAA@C@A@@@A@AB@@@@A@@AAAAA@A@@AAA@A@@@AA@@@@AA@BA@@B@@C@@@@B@@BBAB@@@@@@AB@@@BA@AAAFED@B@DFDHDDDBFBFBJAF@H@B@BBBBBDHFHDFFHJJDFBBHLDF@BDHFJDH@@DHBD@DCFA@ADEHCFAF@DCDCD@F@@@F@D@F@B@H@B@F@H@BBH@F@HBH@B@@BFDDDBFFBB@@BBD@DAHDBBBD@B@HAFAB@BAD@BDDDBHFBBDBFHFFBDBBDDFB@BFDFD@D@FAFABCHAFCF@FBDBF@@@BCFABGFEFJ@H@B@@@DFDDB@FDHFHFFDBF@@@F@D@DBBBB@D@@D@B@B@DAHA@@DABADADAFABAH@H@B@B@BA@@B@@@B@@@@BBB@B@BB@@BB@@@@@B@@@BADCBA@@@C@AAEAA@A@@@A@@BABADCBABCBAB@@@BAB@D@F@B@D@DBB@@@JAB@HCBABAB@BAB@D@B@@ABABA@@@ABA@@DE@@B@F@B@F@@@B@BA@@BABAD@BA@@BADA@ABADC@A@@DADAFCDC@@BA@@B@BAB@BBDBHB@@B@@B@B@@@F@@@BB@@@B@DAH@H@D@B@BA@@HAB@D@DBD@FAB@B@@BB@BBB@HA@@BBBBBB@@BBB@B@D@@@B@B@DADAB@H@B@B@DAB@DBB@@@B@HDBBB@B@B@@@B@@@@BBB@@@B@BFBDDJHHBHFFBHD@BD@DB@@BB@@@B@B@@BB@BB@DBBB@BBBBBAB@B@B@BBB@@@B@BB@BDB@BDBBB@B@@BBB@@@@@BBB@BB@@@B@HA@@B@B@@ABAB@@@@AFCD@BAB@@@BABCB@FAB@B@@AB@@A@@@@@A@@@@AC@@A@@@@A@@@E@@BA@A@@BAFA@@@AB@DAAA@@C@AA@@@A@@@A@@@AAA@@@A@AAAAA@A@@@AAAAC@C@A@A@CBABA@A@AAA@@@@A@@AA@AA@@AA@A@@AA@@@C@@@A@A@ABABAB@BA@A@A@@B@@AAA@@A@@A@@B@@A@@@A@@@@@@@@@@@@AA@@@@@@AA@@CAAA@@@@AA@AB@@CA@@@@C@@AA@@AA@@B@@@AA@AAAAC@@@C@AAAAA@A@@@ABA@CB@@A@@@CBA@C@@@A@A@@@@@@CCACAA@@AA@A@C@A@@A@AA@@AA@C@AA@ACAA@A@A@@@AAACA@@C@AE@@C@@@@A@@BAA@ACAAAA@A@AACCAACAAACCCCCCCCC@@AA@AA@@@A@@@@@@C@@@AA@@AA@AAA@A@A@@@@@@E@@@A@A@@A@G@@A@@@@CAECECAAAAAACC@A@@@AB@D@B@BA@@@@@AC@A@CACAAAA@AAEA@A@@@@@@@ABAB@BA@@B@@A@CBC@@@ABABABCBCBC@@B@BA@@@A@A@EB@@@BABA@ABC@C@A@@@@B@@@@@FABA@A@@@A@AB@@C@A@ABABABC@@B@@AAAACCCAA@A@AAAAC@@CAAA@A@ABABE@@@AB@DAB@D@@@DABCBCDC@@BA@@D@@@B@B@@@HCDAFAB@DBD@@@@@BCBAB@BAD@@@@@BADCB@@@@A@A@AAAA@A@AA@AAA@A@ABA@CACAA@A@A@A@A@ABA@@@AAAAA@A@A@@@AB@BA@A@A@AB@BAB@@AA@@@@AAA@@@AA@@@E@A@@@@A@@AA@@@@@AA@@BA@@@C@ABA@ABA@@@A@A@A@C@@AC@A@A@A@ABC@@BC@A@C@A@A@A@A@A@@@AAA@@@A@A@@@C@@@A@A@A@CA@@A@AAA@A@@AA@@@@@AAAAE@C@G@A@A@A@@@A@@@C@@@A@ABA@A@@@@@AA@@@@A@A@AA@@A@A@A@A@@B@B@B@@A@A@@@AB@@AAC@@@@@AB@@CB@@A@@@C@@@A@@A@AA@@A@@CA@AA@A@A@@AAB@B@@A@AH@BAB@@@B@B@B@B@B@BA@@BABA@@@@B@@A@@BA@@BA@@B@@@@@B@B@@@B@@@B@@@BBB@@ABBHAB@B@B@@DBBBB@@B@@B@B@B@@B@B@@@BA@@BABA@@BAB@BABA@EB@@@@A@A@@@A@@@@@CBCA@B@AA@@BCA@BAA@@@@AA@@@@@A@@BA@ABA@A@@@A@@@A@@@@@A@@@A@@@A@@@@@@BA@@@@@AAA@A@@@@@AB@@A@AB@@ABA@@@C@A@C@A@A@@@@AC@A@A@@AA@A@@@AAA@@@AA@@A@AAA@@A@A@@@A@@@ABA@A@@@@BAAA@@AA@@A@@AB@@A@@@A@A@ABA@A@@BABA@@@A@@@AB@B@@C@@BAAA@@@AB@@A@"],"encodeOffsets":[[104457,37138]]}},{"type":"Feature","id":"630223","properties":{"name":"互助土族自治县","cp":[101.959271,36.844248],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@C@A@A@AA@@AAAAAA@@GBA@AAA@@AA@A@EBC@CAC@A@GB@@ABA@C@G@G@CBA@@@A@@A@@@E@@@A@AA@@@GACAAAA@ABA@@@AB@@CDEDCBCB@@@BCDAB@BCBAB@@ABC@ABAB@@ABA@@@E@A@E@A@@@CF@@AB@B@@ABAB@BA@C@A@ABA@ABABGDA@IB@@A@CAC@A@E@C@A@AB@@A@ABADABCDABAB@@@B@@@BBBBF@B@D@@ABCDAB@@A@@@@@A@@AA@@A@AAA@A@@A@@@A@@@ABA@A@G@G@ABEBCBCBABCB@@GBCBA@A@C@@B@FENEHEHABADCFEHADGJABCDCFABABE@CBAB@FAB@DABCBCBEFEFABGDGBC@GBEBCDAF@BDJBHBD@DCDC@EAEECAA@EBCBCFCDABABOBCBC@KAGEEAA@AB@@CFBJBJFD@D@BCFCBC@CCAACEGEAA@@ABEDIHGHCF@B@@@BBDFHBDBB@JDJBFDDDBBDBD@HCFCHA@ADB@DDBBBD@@ADE@E@ABABAF@B@BDDHHB@DFBFBF@FAH@F@D@BDFBD@D@B@F@BBDFDFD@DADADBFBHBF@B@DCFCBEDCDAB@DBFDBBBFBBB@DDFFD@@BBBFBF@D@FAFAFCBAB@B@FAF@FBDDFDD@F@F@@@D@@@H@J@@DH@F@F@F@FDHB@BD@DAFEJCFBFBBD@DDDBBB@DBB@DDF@BCB@BDDHDLFHBH@F@@@@FAFBDBBFD@B@F@FBBDDDBFH@HAHADA@EDABAHEF@@@@EDGDCFBF@BDHFFDDFF@@@HAD@DBB@BBBBFBBBDB@FDBB@@B@DDDDBBBB@DBDCD@@@B@BB@BBB@DBFBBBBBDBDDBBBBBDDB@@D@B@DAB@D@@@B@@@B@BB@@@B@DBD@D@B@DBDBDBF@B@BBFBFBFBDBH@H@F@DADCFADADADAFAH@BAD@H@D@F@D@FBBBDBB@BBBBDBBB@DBDBB@B@B@DAB@FADADA@@B@@@BB@B@B@B@D@D@FBBBD@BBBBB@BBBB@D@D@@@HCFCHCBADCFCJELEJCLCHCJCJCHGHEBAHEFCHEHCHEHAJBJBHCLAFAL@H@J@FAF@FCDCFCFC@AHCJC@AJCJCHAHCLCJAJAJCHEHCDEFAD@BAHBHAJ@N@F@H@HAFCHAHAHAHDHDFB@@FFBBDFHHJHJFB@JDJBLBNBL@D@D@F@NBJBHBHBH@H@JBF@F@H@N@N@JAFAVBNBLDLDLBLDJDLDJBJBJDJBJDJ@HBJBF@D@B@DAB@DADAH@FAF@B@H@DAD@HADAB@DADADCDAD@@@D@HADADCDAFAJBBAD@FAD@FAB@H@FAFCFAFCFAFAFAD@@@@@@@BA@ABAB@@A@A@A@AACBA@A@C@A@A@ABABA@@B@BA@@B@@@DA@AB@@@@A@@@@AA@CAC@CAACE@E@A@A@@BABA@@@AB@@A@@DCBCBA@AAA@A@AB@@A@@DABABC@@@A@@BA@C@AA@@@ECC@@AA@AAAAA@A@A@AACACEACECACGE@@CAEAGECC@@AAACAC@@@CBE@EAE@AAACCGCIACAC@AA@@@AFADCDABA@@@AB@@A@ADCDABADABAB@B@B@BBBBBBB@@@B@B@BA@@B@@@BAB@@@BABAB@@@FBD@@@BAB@B@DBB@@BBB@B@@B@@@DA@@B@@ABA@A@E@C@@AA@A@A@ABA@@BAB@FAD@DABABAB@@@F@B@BBD@BBB@@@D@BAB@@ABCAC@A@ABC@CBAD@BAD@D@F@B@D@D@BADCB@BAD@H@BAD@DCBAB@D@B@B@@CDEBA@A@A@AACCA@@@@@AAA@@@C@A@ABA@@BAB@@AB@DADA@A@@@CBA@A@@@@@A@@BA@C@ABC@@BABABCBABA@@D@@@B@B@BAB@BABC@ABA@ABABC@@BAB@B@@@BBBBBBB@B@@@@@BA@@BA@@@ADABAB@B@B@B@B@BAD@BAD@B@@@B@@@BA@@BA@@@A@@BAB@@AD@D@D@D@BAB@@A@A@A@@@A@@@C@A@@@AB@BAB@B@BBB@DBBBBB@@B@BABABABCBA@CBA@ADC@@BADADA@A@@@A@@A@A@@AA@@A@@BA@AB@B@BAB@B@DABADABA@@BA@@AA@@@AAA@@@AB@@AB@B@LDB@B@BA@@@@AAAA@A@@@ABCDAFCBABA@ABA@CBA@AB@@@BAB@BB@@B@BBBBBB@@B@@ABA@A@C@ABA@@JC@@B@BC@ADADCBADAD@BA@A@@@AAA@@@A@@BABC@@BA@@@ABABABABADABAB@BA@ABADG@@BA@@B@B@@@@@@A@@AA@@@@EAC@ABEBEBEBEDEBEBC@C@A@EAIEGKEEACIAGCAAGGGGCAE@C@A@@CACACACAA@A@@@A@@@ACCA@A@AAC@A@E@EBIDEBCBEBCB@BA@@@A@@AA@@AC@@@AA@A@A@ACCAAAAAA@A@A@CAAAC@CAACA@@AA@@@@@@AA@ABAAA@A@AB@@@@A@AA@@@@A@@@@@BCBC@CBC@A@ABCBCBABA@C@AAA@C@A@C@@@A@CAA@A@A@A@AAA@C@CBA@A@AB@BA@A@@@@@A@@@A@@@EDAB@BA@AAAAA@A@@@CB@@CBA@A@@@A@ABCBA@C@A@@AA@@BA@CDAD@@@B@BAD@B@@@B@D@@AB@@A@ABE@A@A@A@ABE@E@CBCBABCBA@A@CBA@@@ABA@@@ABABA@A@C@CAC@IAA@A@EF@@CB@@@@BB@BAB@@A@@@AAA@A@A@A@A@A@ADAFC@CDCB@B@@BB@@@B@B@B@B@B@B@@@@B@@@BBB@@BBD@BBB@@BFBB@@@@FB@@@@@@@B@D@@EBABC@CB@@@BCBABA@@@ABC@CBA@A@@@ABABCBAB@BA@AB@@A@CAA@@@A@@@@B@D@@@BBB@B@B@@BB@@BB@@@B@B@@@BAB@@A@@B@@@@CBCB@@A@A@A@@@AB@@@BABABA@@BADA@@@@BBB@B@B@BA@ADABA@A@@@A@ABABCBABAB@@C@A@A@@BCA@@AB@@@B@DAD@@ABA@AB@@A@A@A@C@A@A@@@@@ABAB@@@D@B@B@@ABA@@@A@C@@@AAA@@@ABC@@@CBA@@@A@CA@@A@@@GDA@A@A@A@A@CA@BA@@BABAB@@@@@B@@ABAB@BAB@@A@EBA@A@@@@BA@@BA@A@A@CBA@@@A@@@AA@@AAAACA@@AACCAAAC@C@@DC@A@@@A@CBAB@BC@@@ABA@AB@BA@A@AB@@@@ABA@@DABABAB@BA@A@@@ABABC@@@A@@@A@A@@BC@ABA@@BA@@@@B@@@BA@@B@@@@A@@BA@@DA@A@A@C@@BC@ABA@@@A@A@@@A@@@AB@AC@A@@@A@@BCB@@A@@@C@A@@@A@@@A@@B@@A@AB@AA@@@@@@@@AA@@@@@A@C@@@@@A@@@@AA@@AA@A@A@@@AAA@@AA@@@C@A@A@@@AB@@AB@@A@@AA@A@@@@@@AA@@@A@@BA@@B@AA@@@A@@AA@@@@BAAA@@A@@A@@@A@@@@@A@A@@@A@@@A@@@@@@AA@@@A@@C@AA@@@A@@B@@@@AB@@@@@AAA@@@@AB@BADA@@@A@@@@@ABBB@@@BA@A@@@@B@@A@@AA@@A@BA@@A@@C@AA@@A@@@A@@@A@@@@@A@@@@@A@@BAA@@A@@A@@AB@AA@@@@A@@@@BA@A@@@ADA@@@A@A@A@@@A@@@AB@@A@A@@@A@ACAA@@A@A@@BA@AB@@@@@A@@@ABA@@@AAAAACAAA@@@AA@AA@AA@@A@C@@@A@@@E@@@AB@A@@AA@@@ABA@@D@@CD@@@B@BAB@@@@EBA@@B@@AD@@AAAAA@AAA@A@AAAAA@C@A@A@A@@@A@CAA@@@@@A@A@@@C@@AACAA@A@ABA@A@AAA@A@@AAAA@@@A@AAAAAA@@@@A@C@A@@@A@@ACA@@@CBCB@@A@@BA@C@CBC@ABA@C@CAA@@AC@@ABE@C@A@@@AAAAA@@A@@ACACAECCEACAC@AAAAA@@A@CAC@AA@@CAA@CA@@@A@A@@AA@@CAA@CAA@@@A@C@A@AAAA@@@@AC@A@AAAAAAAAAAAAAAAA@@ACC@A@A@@BA@@@AAA@@@A@@BA@@@@@ABA@A@@@C@@AC@A@@CA@@A@AA@@A@AA@A@@A@@B@@CD@B@@@@@B@@ABA@@@@B@@@D@@A@@B@B@@A@AB@@@B@@A@BBA@@B@B@@@@@BABAB@@@@CB@BA@@@C@C@C@A@A@@@A@A@@@A@@@AA@@@@@@@@@AA@B@@@AA@A@@@@@@@A@@@@@AA@@@@@@@B@@A@@A@@A@@@BAA@@@@AA@@@A@@@A@@@A@@@@B@@A@@@A@@@@B@@A@@@@B@@A@@@@@@@@@@BA@C@@@@@@@A@@@A@@@A@@@A@@A@@@BA@@AA@@BA@@@@@A@@@A@@@@@@@@@A@@@A@@@C@A@AA@@A@@@@@@@@@@@@@A@@@@@A@A@@@@AA@A@A@@@CAA@A@C@@BCBA@@@A@A@C@@@ABC@@@C@@AC@AAAAA@@@C@@@@@A@@@@@A@@A@BAA@B@@@@@@AAA@A@C@AAC@A@ABC@@B@BA@@BAA@@@@A@@@@A@@C@AA@@@@AAE@C@A@@@A@@A@@@AA@@@@@ABAA@@@@@A@@BA@@@AA@@B@@@B@@@AAB@BA@@@@@A@@C@BA@@@@A@@@A@@@@@@@@@A@@@BA@@@@@A@@@ABA@@A@A@@@@B@@@@@@AB@@@A@A@@@@A@@B@@@@@@AB@@@AA@CBA@@B@@EBAB@@@BAB@@@F@@@B@@B@@@BD@@@@@B@@@@@BA@@BA@A@EBA@ADAB@@A@ABC@ED@B@@A@AB@BA@A@@@GBA@@@A@@AAA@A@@@@AA@AA@A@AAACA@ACA@@A@A@@AA@A@A@ABAAAAA@AAACAA@@AAA@@@A@A@@AA@@CAC@@AGCEAGEGAIGCCEA@A@A@@AA@A@@A@@@A@A@A@AAGCA@@@A@CAA@CBA@A@G@A@CBCBA@A@"],"encodeOffsets":[[104534,37393]]}},{"type":"Feature","id":"630222","properties":{"name":"民和回族土族自治县","cp":[102.830892,36.320321],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@B@BBB@@AB@B@@BB@@BB@@BBB@BA@@DA@@B@B@B@BAB@BC@@@A@A@AAA@A@AAA@C@@@@@@@@B@@@@@B@@@@@B@@@BB@@B@B@@@@A@AA@@@@@@@@@AA@@@@@A@@@@@@A@@@@A@@@@A@A@A@@@@@@A@@@@@@@@BA@@DA@A@@@A@E@@@@@@@@A@@@@@@@@@@@A@@@AB@@A@@@@@@@@@AB@@A@@@@@@@@@@BABAB@@@B@@@@@B@@B@@@B@@@@@B@@@@BBBA@A@EB@@@@@@@@@@@BA@@B@@ABA@ABAB@B@D"],["@@AA@@A@@A@@AA@@AAC@A@@@G@E@CAEACAA@CAEBCBEAA@ABEBE@E@CBA@ABE@CBA@EAA@EAE@AAAACCACCAAAAAA@A@A@A@A@E@C@A@C@AA@ABA@A@A@@AAAAC@AAA@@A@@@A@@@AB@@AB@@@@A@@CCEEAA@A@A@CA@@AA@C@AAA@AA@CAA@AAABC@C@@AA@@@A@@AA@CCEA@@@A@A@A@@@A@@@@@AAA@A@@@C@E@A@AB@@A@A@@@AA@@@A@@@ABCBC@@DEBA@C@@AACCAAA@AAA@AA@@@A@ABA@C@CAGAC@AAEAEAA@E@A@CAA@AAA@@AAA@@@A@@@AA@@@AA@@@A@@@@@A@@@A@@@A@AAAACAC@EAEACAAACE@AC@AACAA@AA@@C@ABE@CBABCBABA@A@A@A@A@AAA@A@A@AAA@@@AAAA@A@CAA@A@A@@@ADCBA@AB@B@B@D@B@D@@@BA@AAA@AB@@A@AB@@A@A@A@@@C@AB@@@B@D@F@B@@@@DBB@BBBF@B@B@@@@ABA@C@@@AB@B@F@D@B@@ABA@@@ABA@@@AB@B@B@@@B@@@@A@@@@BABABCBA@@@CBABA@@BABA@AB@@@B@@@HBLDB@B@BA@@BC@A@@@@B@B@@@BAFA@@B@B@B@D@FAL@B@B@@AB@@CB@@ADA@ABAB@@@@AB@@AA@@A@@A@@@A@AAA@ABA@A@CBA@A@AA@@A@@@AA@@@@AC@@CC@@AACCCAAC@@AA@ABE@CBABCBAFED@BAB@BA@@BCBA@ABC@C@ABCBABAB@D@AEAAAAACAA@AACAAAAECCEACAAACACCCAACC@AAC@C@ABA@@@C@A@A@CACAACCAAAC@C@@@C@C@CAC@CAE@AAC@ABA@@DCBADCBA@C@CAA@C@@@CBAB@@C@ABA@@@@AAAA@A@@@A@A@A@A@@BC@@@AB@@AAA@AAA@C@@AA@@@A@@@A@@@A@C@A@@BA@A@AB@@C@C@@BAACB@@ABC@ABABA@@BA@@@C@@BA@@BC@A@@AA@AAA@AA@AA@@@AAA@AA@AAAA@A@@@@@A@AAC@@@ABC@A@@@A@@@A@@BABG@@@AA@A@@AAA@AAAAAAAA@A@CB@@CBABABABC@A@C@CAA@AA@@A@A@A@A@ABADCHCBAFCDC@A@GAE@E@CBA@GBKFC@A@E@C@CACACAAAC@@BA@C@EBA@@@A@C@CBAAA@C@A@AAABA@@@AB@BA@@B@D@BA@ABABEBE@ABE@E@C@@@G@CACAAAAACCCAA@A@A@@BCBEDA@CBC@CB@@C@CBE@CBABEBGDCBA@C@ECCA@@GCAAAAA@@IAAAACAAAEGCA@AA@AAA@@@A@@@AACA@AAA@CA@@AA@A@EC@@ECAAACAAACACAAC@A@@@C@G@C@CCCA@@A@AAC@C@A@GACDABABA@ADABA@AD@@@D@@@BBB@@@B@@AB@@ABC@ABAB@@@BAD@B@B@@AB@BA@@@A@A@ED@@CB@@ABEBABA@A@A@AAAACB@AAB@@@@ABA@@B@@A@@BA@A@@@@@A@@B@@@BA@@B@B@B@@BBBB@BB@@@BB@@@@B@@B@@@@@@@@BB@@@@@B@@B@@@@@@B@@@@BB@@@BBBB@@@@@BD@@AB@@B@@B@@BB@@BB@@@@@B@B@@@@A@@BA@@@BBA@A@@@@B@@@@ABA@@BAB@AA@@@A@A@@BA@@@AB@@A@@@@@A@@B@@A@A@A@A@@@@BA@A@@@CACB@AA@BBBBBB@@@@@B@@B@@@@BB@BB@@BB@@BB@@@@@BB@@B@@@B@@AD@B@B@@BB@@@@@BB@B@@@B@@@B@@@BB@AB@@B@AB@B@@BB@@@B@@@B@@@@@@B@@@ABB@@B@@@B@@@@@B@B@@@@@@@B@@@B@@@@@B@@@B@@@@AB@@A@@@A@@@@@@@AA@@A@@B@B@@@@@@@B@BBB@@@@@@B@@B@@@B@B@B@@B@@A@@@@@A@@@A@@@ABA@@@BBAB@BAB@@@@@@ABA@@AA@@@A@@@@@AA@@AB@@A@@@@BA@@B@B@@@@@B@@@@@@@B@@@@@B@@@B@@@@@@@@@B@@@@A@@B@BAB@BA@A@@@ABA@@BC@@@@BA@@@@@@B@@A@@@@B@@@@AB@@@@A@A@@@@BA@A@A@AB@@@@AB@@@BA@@B@@A@@@@B@@AB@@@@@@@@@B@@AB@@@B@BB@A@@B@@AB@@ABBB@@@@@@@B@@@@@@BBAB@@@B@@@@AB@@@B@@@B@@@@@B@@B@@BA@@@@@@@@B@@@@@B@@@@A@@B@@@@@B@@@@@B@@@@@@@@@BA@@@@B@@@@@B@@@@B@@@B@@@B@@@BB@@B@BB@@BB@@@@A@ADAB@@@B@@A@@@@@BB@@B@@@B@@@@@@@B@@@B@@B@@@@B@@@@@@@@@B@@B@@B@@@@@@B@@BA@@@B@@@@@B@@@B@@@@@B@@@@@B@@@@@@@B@@B@B@BB@@@@@B@@@@@B@@@@@@@B@@B@@@@B@@B@@@@BB@@@@B@@B@BBB@@@@B@@@@@BB@@BB@B@@BB@@@@BBB@@B@B@@@B@@@@@@@BB@@@@B@@@@@@B@@@@@@@@ABB@@@@BB@@@@@@@@@@@B@@@B@@@B@ABB@@@BB@@@@@@AB@@@@B@@BB@@@@@BB@@B@@@@B@BA@B@@B@BAB@@@@BD@BBB@BBBB@@B@@@B@B@@AB@BABAB@@ABA@@@@@A@@@@@@@A@@BA@@@A@@B@@A@@B@@@@@@ABB@AB@@@B@@@BABA@@@@BA@@@@B@B@B@@AD@BA@@@ABA@@@ABCD@BA@@@@@@BAB@@@@AB@@@@@@@BA@@B@B@@@@@@A@A@@B@@@@@@AB@@@@AB@B@D@BA@@@@@A@@@A@ABA@AAA@@BA@@@ABA@@BA@@@A@@@@@@BA@@@CB@@A@@B@@AB@@AB@@@@@@A@AB@@A@@@ABA@@BABAB@@@@A@A@@BA@AB@@@@@BAB@B@@@@BBBB@@BBBBBB@@@B@@BBA@@@@BA@@@A@@@@@@@AB@@@@@@@@@@@@AB@FA@@@@BAB@@@@@@ABA@B@@B@@@@ABAB@B@@@@@B@B@@BB@B@B@@@DBB@B@@@@@B@@@@AB@@@@@B@@@B@@B@@B@B@B@@@@@B@@@B@@@BB@@@@@@@@B@@@D@@@@B@@@AB@B@@@B@@@@@@@B@@@B@@@BABBB@D@@@@@B@BA@@B@@@B@@@B@@@@A@@DA@@B@@ABAAA@AB@@A@@@A@@BA@@@A@@AC@@@@@A@@@@@@@A@@A@@@@@A@@@@A@@AAA@@AA@@A@@A@@@@@@@@@@AA@@A@@A@@A@@@@@@@A@@@@@A@@@AB@@@BA@@@A@@BA@@@A@@@@BA@@@@B@@A@@BA@AB@@@@A@@@A@@@A@@@A@@B@@@@@@@@CB@@@B@@@@@@@BA@@@AB@@@B@@@@AB@@BB@@@@A@@@@@@B@@@@@@A@@@@@A@@@@@@B@@@B@@BBB@@@@BBB@@A@@BA@@@AB@@ABAB@@@@@@@@A@A@AAA@A@@BA@@@@@A@@@A@A@@@A@@@@BA@@@@B@@A@@@@BA@A@@@@B@@@@A@A@@@AB@@@@A@A@C@@@AA@@AB@@AB@BA@A@A@@@@@A@@B@B@@@@AB@B@@@BA@@@@@CB@@@B@@@@AB@@@BA@@@@@@B@@A@@@@B@@A@A@@@@@@@A@@@@B@@A@@@A@@@@BAB@@@B@B@@AB@@A@@@AB@B@BA@@@A@@@A@@@AAC@A@A@@AA@A@@@A@C@@@@@A@@@@@CAABA@@@AB@@@BA@ABA@@D@@@BAB@@@@@B@@@BA@@@@@@B@B@@@@@@CBA@@@A@A@@BC@A@A@CBA@@@AAA@@@@@A@C@A@@@@@A@CA@@A@@@@AA@@@A@A@A@@@@@A@@@A@@@AA@@AAA@@AA@@@@@AAA@@@A@@B@@A@AB@@@B@@A@@B@@@BA@@@@@@@ABA@A@@@A@A@@AA@@@A@A@@@@BA@@@A@A@@@@@@@A@@@A@A@@BC@@BA@AB@BABA@@@@B@@A@@A@@AB@@A@@@@AA@A@ABA@@@C@A@CA@@C@A@@A@@A@C@A@@@@@ABB@B@BBBB@@@BB@@@AB@DABAB@B@B@@AB@@AB@@@B@@@@@@@B@@@B@@AB@BA@@BB@@B@B@B@@ED@BA@BBAB@BBAB@B@BA@BBABB@AD@@@B@DB@@B@@@BA@@D@B@D@BBB@BBB@@@BBB@B@B@B@@BB@@@@@BBB@BB@BB@B@@@BB@@@@@@@DAB@B@B@@@@A@@B@@BB@B@@BB@@BB@B@B@@BBB@@BB@@@@@@@DB@@@BB@@BBB@@@B@B@@AB@@@@@@AB@@BB@B@@@BA@@B@@@B@@@@@@AB@@@B@B@@@B@@@BB@@B@@@@B@@B@BB@@@B@@@@B@@@@@@@B@@B@@BB@@B@@BB@B@@@BB@@B@@@@BB@@D@D@@@BB@@B@@@BB@@@@B@@@B@@@F@@@BBB@@@@@@@@B@@B@@@@@@BB@@BB@@@@@@B@@AB@@@@AB@@@@BBB@B@B@B@@BB@@B@@@@@B@BAB@B@@@@@B@BAB@@@B@BABA@ABA@@BB@@B@@@B@B@@@@@@@@@@@BBB@BB@@BBD@@@BBB@BBB@B@BB@FD@@BB@B@@@@BBAB@@@@@BB@@B@@B@B@B@B@@@@@@B@@@@@@B@@@B@@@@B@@@@B@AB@@@@AD@@AB@@@BB@@DB@@BABBBB@@@B@@B@@@@@@BB@BB@B@@@BB@BB@@@@B@@@B@@@B@@@B@@@@BB@@@DAB@B@@@B@@@@BB@B@BB@B@@B@@@@B@B@DB@@BB@@B@@B@BBBBB@@@B@BBD@BBB@@@@@@@BB@B@@@@@@@@BB@B@@@DB@@@@B@@@@@D@D@B@B@BB@@B@@@@@@@@B@@B@@@@@A@@BB@@@B@@@@@@@@B@@BA@@@@BB@@@@@@@BB@@@BB@@B@B@@@@@@@@@BB@@B@@@@@B@@@B@@@@@B@@A@B@@B@@@@@@@B@@@@@@@B@@@@@B@@@@@@@@@@@@@@BAB@@@@BA@B@@B@B@@B@@@@B@@A@@@@@@B@@@@BA@@@@@@@B@@BBA@BBABB@@@@@@@@@@@@B@@BB@@@B@@BB@@@@AB@@@@@@B@@@@@@BA@@@@@@B@A@@@B@@@@BB@B@@@B@@@BAB@@@BBD@@@@AB@@@@B@@@@B@D@@B@@@@B@@AB@@B@@@@B@B@BA@B@@B@@@@@@@@B@@@@BA@@@@@@AB@@@@B@@@B@@@B@A@@@B@@@@@@@BBB@@@B@@B@@@@@@BA@BB@@A@@B@@@B@@@@B@@@@@@B@@@B@@@@@B@@@@BBA@@@@@@@B@@B@@@@@@@B@@BB@@@@AB@@@@B@@B@B@@@@@BABB@@@@@@@@@@B@@@B@B@@@@@@@B@@@@@B@@@@@@B@@@@B@B@@@@@BA@BB@@@@@@@@B@@@@BA@@@BB@@A@@B@@@@@B@B@@@@B@@@@B@@@@@@AB@@@B@@@@B@@@@B@@A@@B@@B@@BB@@B@@@@B@@B@@BB@@@A@@BB@@ABB@@@@A@@BB@@@@@B@@B@@@@BBB@@@@@@@@B@B@@@@B@@@@B@@B@@@B@@@B@@@@A@@BAB@@@BAB@@@@BB@@B@@@@@B@@B@@@B@@@@BB@@AB@@@@@@@BB@@@ABBBAB@@@@@@AB@@@@@@@B@@@@AA@@@@@@@B@@@BABA@@@@@A@@B@@@B@@@B@@@B@@B@@@@@@BBBBBA@@B@@@@@@@@@@ABB@@@@@@B@@@@@@@B@@B@@B@@@B@BABA@@@@B@@@@@B@FAD@BBB@D@B@@@@@B@BBB@@@@@B@@B@@DBB@@BB@BA@B@@@@@@@B@@@@@BB@@AB@@@@B@B@@@@@@B@@@@@@B@@@@B@@@@BAB@@@@@@AB@@AB@@@B@@@B@@@@@BBB@@@@@B@@BB@@B@@BD@@@@@@@@B@@@@@@@B@@@@@B@@BB@@@@B@@B@@@@@B@@@@BBB@@BB@@BB@BB@@B@@@@BB@@@@BB@@B@@@@@BB@@@@BB@@@@B@@B@@B@@B@@@@B@@BB@@@@@B@@B@@@ABB@@@@B@@@@@@@BA@@B@@C@ABA@@@AB@@@B@@@B@DB@@@@@CB@@@@A@A@@@@@@@ABA@@B@@AB@@@B@B@@@B@@B@@B@@@BBBA@@BB@@B@@@B@@@D@@@@@@@B@@@B@B@BB@@@@BBB@@@@B@DB@@@BB@@BAD@B@@@@@@B@@@@@D@@@B@@@BBBAB@@@B@@@@@B@@@B@B@@@B@@B@@B@@@@@B@@@B@BAB@@@@@B@BB@@BA@@B@D@@@@AB@B@@ABA@@@@@@BA@@@AA@@A@@AAA@@AA@A@AA@@@@C@@AA@AE@@AC@AAACE@AA@@@AA@@A@@AA@@A@@@@@ABA@@@A@@@@BAB@BAB@BA@ADCBA@@B@BBBB@@@@B@BB@@@@@@@BB@@@@@B@@@@@BBDB@@@@B@@@@@B@@B@@B@@@B@@@@@B@@@B@B@@@@AB@@@@@@@B@@AB@@@@@B@B@B@B@@@@@B@@BB@@@B@@BA@@B@B@B@B@BB@BBB@@BBBBBB@@BB@@B@@@@BB@@B@B@B@@@B@B@@BB@@@B@B@DAB@BAB@@@@@B@B@@D@@BAD@NEFABAB@@C@A@@AC@A@@BA@AAA@A@A@ABABA@@D@D@B@F@F@D@D@B@B@@CAAAAACCE@@AE@CAAAACACAAAAAB@B@JEB@BA@A@ABABC@@BCDCDCFCB@BA@A@@@@@@AA@@@@A@@@AA@@AA@@@A@@@A@AB@@A@@@AA@@A@A@@@CBA@ABA@@DEDC@A@C@CB@@A@@BA@ABC@@@AB@@AB@@@BAB@BA@AB@@ABCBA@@B@@@@B@B@@BB@@BB@@B@BAB@B@B@B@@@B@BABA@ABA@@@@B@B@BB@@B@BB@@F@B@@@B@BABAB@BB@@B@@B@@@@@B@BBBB@@@B@D@@@DAB@B@@AB@BABAB@B@D@B@B@D@B@D@B@@@BABABABA@CBABABCB@DADAHCBABABABA@CDEBCBC@A@ABA@CBABA@@@AB@DAHAHAHEFABABAB@H@DAF@D@@@HCD@BCB@BAD@DBD@B@B@BAB@BCBG@AB@BA@@B@FAD@DADCDC@ABCBABABAD@B@FAD@F@D@F@F@@@BA@@BC@AB@DAD@B@D@B@B@B@@@BA@@BA@A@A@@BA@C@A@C@ACG@CCGACAA@ABAB@B@DBB@F@BB@@DADABAFABAB@BAD@DAB@B@BA@@B@@CBCBABABA@@DA@@B@@@DBDBDAD@BADC@@BCBCBA@E@AB@@A"]],"encodeOffsets":[[[105300,37234]],[[105545,37076]]]}},{"type":"Feature","id":"630225","properties":{"name":"循化撒拉族自治县","cp":[102.489135,35.851152],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@AB@@A@@@@@@@AA@@@@@@A@A@@BA@A@@B@@A@@@@@@A@@A@@@@@A@@@@@A@@@@@A@@@A@@A@@A@A@A@ABA@@@A@AAA@@@A@@@@BA@A@A@@@A@A@@@@AAEAAAAGCGAOCKCCEI@ACA@@A@ABA@A@A@ACA@CAGACAEAA@AA@ADADA@C@A@AAIAMCGAIAECA@A@@@@@@A@@@A@@B@@@@AB@@@@@@@@@@AB@@@@A@@@@@@@@@A@@@@@@@@B@@A@@@@@@B@@@@@@@@A@@@@@@@@@CCAA@CBC@C@AAAE@C@AA@CACCK@A@AB@@@@A@AB@B@@@@A@A@AB@@@@@@B@@BABA@B@@BAB@F@B@B@@AAAI@IFCBGBQJEDCDODONCJDHHF\\RBDBFAD@FAFCF@J@FBF@D@DHZDHADCFCBIAGCICCBAJDJ@B@BCFKDWLOL[ZKJKJADAJER@FGDIDKDOFEBG@IDIDEBGBK@G@I@I@GAK@G@CBEBIFGDCDEFGBGJGDEDIFGFEFCFAFCFBJBHBJBFAJAFAJAHCFABAFEHADEBMBKAKGMKIGA@OEM@CBCDALKLCJBHNHDDJFFBBB@DEBMBQ@cBSHA@CFDFFDXDHD@FEHMLEPIJCDQRULSRINAB@@@BABCDADAD@BBBFN^PJCBABA@A@A@AAC@A@ABABA@@B@@@B@BBB@BDBDBFBHB@@BBBB@BBB@D@D@D@DABAB@@AB@@AB@@ABBB@B@@BDBBBBBBBB@FBFBD@F@H@LBF@BBB@BBB@@BBB@@AH@B@B@B@@BBBBBBDBFBFD@@BBDB@@BBB@D@F@FBB@HBLB@BD@BBB@BBBB@BBD@@@BB@@BD@B@B@DAD@B@@@BBBBB@BDFDDDBBFDFBDBD@FBH@B@H@D@BAB@DABAB@@@FAHABAF@DAFAB@BAB@@@@ABAB@FABAB@B@BBB@BBB@BDBF@@BB@@B@B@F@BAB@@@BADC@@BA@@B@@AB@B@FBBAH@FAB@BAD@BAB@BAFC@@BAD@B@B@BB@@BBB@DDHHBBBBDBBB@@BB@BDB@@B@B@B@D@BA@@B@BABAB@@ABCBA@@B@BAD@B@@@DB@@B@BB@BBB@D@B@B@BBBB@B@B@DABAB@@ABADEBA@@B@BAD@BA@@DABAD@D@B@BBD@BBHFBBB@@B@BBB@@DBFD@BAH@@@B@@@@@@AB@@@B@@@@@B@@@B@@@B@@@B@@B@@B@@B@@@@B@@@@@@@B@@@@BB@@A@@@@@@@@B@@@@@BBB@@@@@B@@@@@BBD@@@B@B@BBBBB@B@@@@@@@B@@@@@@@@B@@B@@@@A@@@@B@@DB@@@@B@B@@@B@@@@@BA@@B@D@@AB@@@B@@@@A@@B@B@@@B@@ABB@AB@B@B@@@@@BB@@B@@@@@@A@@@@@A@@@A@@B@@@@A@@@@@A@@@@BAA@B@@A@A@A@@@A@@@@@@@@A@@AB@DAB@B@B@DABBB@BBB@BBBB@BB@@BB@B@@@B@@@B@BBB@@@B@@@B@B@@B@@BB@@D@@@BB@@B@@@@@@@BBDBB@B@@@B@B@@@@@@@B@@B@@B@@BBA@B@@@@BA@@BA@@B@@@@@@@BA@@@C@@@AB@BA@AB@BBB@@@BBF@DBB@@@@@@@BB@@@@B@B@@@@BB@@@@B@@B@@B@@B@@@B@@BB@@@@@B@@BB@@@@@B@BB@@B@BB@@B@B@@@@@@A@@@@@A@@@A@ABAB@@@@A@@B@@@BAB@@@@@B@@@DA@@@A@@@@@A@@@A@@@A@@A@@ABA@@B@@@@A@A@A@A@@@@@AB@@@A@@@A@@@AA@@BA@A@@@@@AA@@A@@@@@@@AA@@@@@A@@A@AA@A@@@@AA@@@@@@@A@@@@A@@@@@@@A@@AA@@@@@C@@@AB@@@@A@@@A@@@A@A@A@A@@BB@@BBDBHJDB@B@@B@@@B@@@B@@@B@@@B@@@B@@@@@B@A@BB@@B@@@B@@@B@@A@@BAB@@ABAB@B@B@B@@@@@B@B@@@BAB@@@@@@@B@@@@@@@B@@AB@B@@@B@@@@@B@@@BAB@@@@@B@@@BABABA@@@AB@@@@@@AB@@B@@@BB@@@@@@BB@@AB@B@@@@A@@B@@A@@@@@@BA@@@@BA@@BA@@B@@@@@B@B@@@@A@@@@@AA@@@B@@A@@@@@@@@BABB@@B@B@@BBBBB@@D@@@BB@@BB@@@B@@@@@BB@@B@B@@B@@B@BB@@@@B@@AB@B@@@@BBA@BBA@@B@BA@@@@B@@@@AB@@@BAD@BB@BD@@@@AB@@@@@B@@@B@@@@AB@@@@BB@@@B@@@@@@@@BB@@@@B@@BA@@@@B@@@@@@BBB@@@B@@@B@BBBB@@B@@@@@@BB@@@@@B@@BB@@@@@@@BB@@B@@@@@B@B@@@@@B@BBB@@BB@@@B@@@B@@B@@B@@B@@@@BB@@@@B@@BB@@@@@B@@@@BBB@@@BB@@@@BB@B@B@@B@@@AB@@@B@@BB@@@B@BB@@BA@@B@DAB@@@@AB@@@@AB@B@@@@@B@BA@@@@BABA@@@AB@@A@A@@D@@@@@B@B@BA@@@@BA@@@@@A@@@@@A@@BA@@@@@@BA@@B@@@@A@@B@@@B@@@BA@@@@B@@@@@AA@@@@@A@AA@@A@@BA@A@ABA@A@@@AB@AA@@BA@@A@BA@@@A@@@A@@@@@AB@@@@@@AB@@A@@BB@@B@@BB@@B@@@@@B@@@@@@@@B@@@@@@@B@@@@BB@@@@@B@B@B@@B@@BB@@@@BABBB@@@@@B@B@@A@@B@@@@@BADA@@@A@@@@@AA@@A@A@AB@@@@A@@BA@AB@@@BA@@B@B@@A@@B@B@@@BABB@@BB@@B@@BDADB@@B@B@@A@@B@B@B@B@@@@AB@@@@@B@@@BA@@B@@AB@B@@@B@@BBA@AB@BA@@@@@A@@B@B@AA@@B@@AB@@@@@@A@A@@@@AA@@AA@@@AA@@@BA@@AC@@@@A@AA@A@@AA@@@@@A@@@@A@@@@A@@@@AA@@@@@@@@@AA@@@@@AA@@A@@AAAAA@@@A@A@AB@@A@@@AB@@@@@B@B@@AB@@@@AB@BA@@@@BA@BDABBBBB@B@B@BAFABA@@DA@@FCB@B@@@B@@ABA@@@A@ABC@A@@BABAD@BA@@BA@@@A@@AA@A@@@C@@BCB@BABCB@BABADCHBEAAEACAKCAIGCCQCAIDQAEMGCGBM@AN[DC@ABE@IBI@A@CBQDKBABELQPMNGHEL_DGDABE@CDCDGDCHAHAB@JANAFCBG@GBGCIEQCEBEDABC@@@AEC@A@CLGBCB@@C@AAABC@C@AFELMZMRKLMDOACEAE@KDC@C@CAIKCCCACBE@G@UGQ@A@E@EAAACACGIEA@KEA@CC@@@ABCBA@C@A@A@@DAD@HAD@D@B@DBBBBBDHHBnJ@@@@@@BBB@B@B@B@B@@A@A@@B@@@@@B@@@@@@A@@@A@@@@@@@A@@@@@@BA@A@@@A@@AAAA@@AAA@@@AA@@@C@@@AAA@@A@A@A@A@@@EACCA@@AA@@AA@@@@A@@AA@@AAA@A@AAA@AACA@A@A@AAA@@@@AEAAEEIGA@@@A@AB@@A@AFEDC@EDGDEFEDGDIFA@IJABMJIHKBEBC@EAG@KBA@WBQBMBQBA@ABABBH@@A@C@C@E@ABC@CAC@AAAAC@A@E@ABE@EBC@EAE@EBCBC@C@ABGF@@@@A@A@ABG@EBCBABABCFADABCDCD@@EDA@A@@@A@@CAAA@A@CBEDEFAJA@CDCB@@EBC@A@AB@D@B@D@BC@A@GAA@E@A@@@CBEDGHADE@CACA@A@ABAJEJK@C@C@AAAC@C@GDEDC@A@A@@@@A@@@@A@@@"],"encodeOffsets":[[104958,36426]]}},{"type":"Feature","id":"630224","properties":{"name":"化隆回族自治县","cp":[102.264143,36.094908],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@AA@A@AA@AAGEAAC@AAA@C@C@ABCB@@ABC@ABA@@@ABCFAB@BA@ABCBA@A@A@AA@A@A@A@CAA@AAAA@@@CA@@A@C@ABA@@@ABAD@BA@ABABA@@@ABC@A@A@A@@@CA@AAA@@AACAAAAAGGCCA@AA@@AAA@A@C@AB@@EDABA@ABC@ABA@EBG@ABEAA@A@@BA@@@AB@@CDAB@@A@ABE@A@A@@@AA@@AEACA@AAA@AAA@A@ABEBA@AB@B@@A@ABA@EBCBE@ABGBEB@@A@ABCBA@ABC@G@A@G@EAC@CAEAECAACCECACA@AAAA@@A@C@CBA@A@C@@AA@@A@@AC@AAAAAA@AAC@@AKAGAA@EAE@C@A@AA@@CAAA@@ECEACAAAAAAA@@@A@A@ABG@@AA@AA@AAA@AAE@KAG@E@C@EAEAA@AAAAAACA@AA@A@AA@BA@@BA@@BA@ABCBC@C@C@A@AAA@AA@AA@AGAEACACA@AAA@@@A@@@ABAB@B@BBD@B@B@BABABIDAB@@@@AH]JILAN@@BB@D@FAFBBDDPB\\AH@DBHDDH@NBDBLAPGP@BCHMLGDIJABA@AAEEEEOIC@C@CBC@ABC@C@IE@@@BA@C@AACAA@@BCHABABA@CBADEHAFAD@BDBDBB@HFDB@BB@DDJ@RD\\HFD@DADIB[DC@MFIBM@A@ABA@GJEF@BCZ@BY\\A@AB@BQBABIBC@@@@@IH@@@@IDQFCJCFAHCRADCBA@E@[CCNCDOT@@FFJHHVCDOAK@I@EBCDMFA@GDKFA@OBO@@D@DVVUFQJCJFLBBCBSDQBEBKHOLABG@KGGEKBW@C@@@QAG@I@QHITAZ@BCHGJKBGDCAKEGGC@CBABAD@@@DDDFDBFAJCDCBCAEACC@C@I@GAGCCGAE@C@CDCDAP@D@BBD@DCBC@CCCCACA@C@EDC@A@I@O@CAIBOCCBGBOAC@AAEA@H@FDLDL@BCB@D@D@@@L@FAFAFBFBBDDDDBBDDBB@BCH@DAD@D@BDD@BADKFH@FBDDBBFFHDDBDBDBFDFBJDJF@@BDDFBHBBBFDDDD@D@BBD@FAH@@HAB@N@J@HBDD@HADBJBDBD@F@@@BFDDAHAFEHCHCFCHAJAD@HDFBDBB@H@J@N@J@L@J@H@DBBB@@BBB@@A@@BA@@@@@@BAAA@@@A@@D@@@@AB@@ABB@@@@BB@@B@B@BB@@@BBBBB@BB@@@@@BAB@@@B@D@B@BBBBB@@@B@BAD@BAB@BAB@B@BB@@B@@@B@BAB@BA@@B@D@@ADAB@@@B@@@@AB@BAB@B@@@B@DA@@B@@@D@B@@@B@B@@A@@B@BA@ABA@AB@B@B@@@B@BB@@B@B@@BB@@@B@@A@@BB@@B@B@@@@@BB@@B@@@BB@@B@B@BAB@@AD@@@BAB@@BB@DBD@@@B@BBB@DA@@BBBAB@B@B@@@BA@@B@@@B@B@BB@@D@@@DA@@@@@BB@@@B@BBB@AB@@@@BD@@@@BB@@B@BA@@B@B@B@@@B@@B@@B@@BB@@@BBB@@@B@@@B@BB@@@@BBB@B@B@BBB@D@BBB@B@@B@B@@B@@@B@D@B@@@B@B@@AB@@@BBD@@@@AB@@@B@B@BAB@B@B@@@BBB@D@@@BAB@@@B@BAB@BA@@@A@@@@@A@@B@@A@@@@B@@ABA@@@@@AB@@@@@@@@@@A@@@@@A@@@A@@@A@A@A@A@A@@@@@@BA@@@@BA@@@@@@@A@@BA@@@@@@@A@@@A@A@A@@@@@AB@@AB@@A@@@AB@@ABA@@@A@@BA@A@ABAB@@@BBB@@@D@B@BBB@B@@@@@BB@@@BB@BB@@B@@@B@@@BA@@B@BB@AD@@@@ABA@@B@@@B@BA@AB@B@BAB@B@@@B@@@BA@@@BB@@BB@BB@A@@B@B@BA@@B@@@B@B@@@BB@B@BB@@B@@BB@B@@@BBB@@@B@BBD@@@@@B@B@D@B@D@@AB@BA@@B@BA@@B@@@@@BBB@B@@@@AB@@@@@@@B@@@B@@@B@@@@@B@@@B@@@BAB@BAB@@@B@@@@BB@@@@BB@ADB@AB@@B@ADBDA@@@@B@@@B@B@@@@@FAB@BA@ABA@AB@BA@AB@@A@@@A@AA@A@A@@@@AA@AACA@@@A@ABAAGBA@@AA@A@@@A@@@A@@@A@A@@@@@AB@@AB@@AB@@@@A@@B@BA@AB@@A@A@A@A@A@A@@BA@ABGB@@@@ABA@BB@B@B@@BDB@@@BB@@B@BB@@@D@@@B@@@DA@@BA@@@@D@BB@@BA@@B@B@@@@A@A@AB@B@B@B@@@BBB@B@@@@@BB@@@@B@B@BAB@@@D@@@B@@@B@B@B@H@D@F@BBBB@@@@B@@BB@B@BBB@@@DBB@B@B@@@D@@@B@B@@@B@BB@@B@B@B@B@B@D@B@D@@AD@BAB@B@B@D@@BD@B@B@B@@@B@BAB@BAD@@@B@@AB@@B@@@@BB@@@B@@B@F@@@B@@B@@BB@B@@B@@B@A@AB@BADA@@B@@AB@B@@AB@@A@@@A@@B@@AB@@@@A@@AA@A@@@A@A@@@ABA@@AAAAA@@B@@AAB@BABA@@BA@@@@@A@@@A@@@@@@B@B@BA@@B@@A@@BAB@@AB@BA@@@@B@AA@A@@DAB@B@@@@C@@@@@@B@@@BBD@@@D@B@@@@@B@H@B@DBBAB@@@BA@@B@BABA@@@AB@B@B@@@B@BA@@@ADAB@B@@@@@@A@@B@@@D@B@@@BBB@B@BB@@BB@@@@@B@B@@@@DDBB@@B@B@FBBBBD@@@@B@DCBABAB@@@D@BBB@@BBBBB@BBBBB@@B@B@@@D@B@@@BA@A@A@@BABABCBAB@BB@@BB@@BAB@D@@AD@D@D@B@D@B@@@B@BBBB@@B@BB@@@@D@B@@AB@@@BAB@D@BABC@@B@DAB@@@BAB@D@B@@BBBBB@BBB@@B@B@F@B@@@B@B@@@B@@B@@BBBBBBB@BBBD@B@@@B@@B@@B@@@B@@D@@@@BB@@@FBBA@@B@@@D@B@@@BB@@B@BAB@B@B@BAB@@@@@BA@A@@DCBADEB@BA@@BA@AD@BAJEBABAB@@@@A@@BA@ABAB@B@B@B@D@@@B@@ADAB@B@B@B@B@BBD@@@B@@@@@BB@@B@BBBBDBBBBBB@@@B@@@@@@A@@DADA@@@AB@B@BA@@@@B@@@@@@@B@B@B@@AB@@@B@@ABADABA@@@@@A@ABABA@@B@BAB@BB@@DA@@@@B@@@@@B@BA@@@A@@B@FA@AB@B@@@B@BA@@D@@A@@DAB@@@BABABABBB@BAB@BBB@B@@@B@B@@@B@@A@@@@BA@@BC@@B@@@B@@@@@B@B@DCB@DA@@B@B@B@@@@BB@@BD@B@BB@@@ABAAAB@@AFC@@@A@A@AA@@AB@@ABA@@@A@@@A@@@@@@@A@@BA@@BA@@@A@ABABA@CBA@@A@@A@@AAAAA@A@BA@@@@B@D@B@@@@BB@D@@@DBB@D@@@B@BAB@B@@B@@B@@@BA@@@BB@@@@A@@B@BA@ABAB@@AD@@AB@B@@@B@@@@@@@B@B@@@B@@A@@B@B@@@B@@BB@B@@@B@B@BA@@@@@@B@@A@@@AB@@@@A@@BAB@@@@AB@@@B@BB@@@@B@@BB@BB@@BB@@B@@@B@@@@@B@B@B@@@B@@B@@B@@@DBB@@@@@B@D@B@@@@@B@BB@@B@DAB@B@D@@AB@B@@@B@DA@@@@@@@A@A@@@@B@@A@@@A@@@@BA@A@@@CB@BAB@@A@@BA@@B@BADB@@@@B@@@@@D@B@@@B@B@@BB@B@D@BB@@B@@@B@@@B@@A@ABA@@B@@@BA@@@A@A@@BA@A@@B@@@B@@@@A@@B@@@@@@@B@B@@@@A@@B@@@@A@@@@B@@A@@BA@@@@@A@@DA@@@@B@@A@@@ABA@@@@@A@AB@@@@@B@B@B@@ABA@@BA@@BB@@D@B@B@@@@@BA@@B@B@@@@@@A@@B@B@@A@@B@@@@A@@B@@A@@B@@@B@B@@@B@@@@@B@@AB@B@BBB@B@@@@@@@@@BABA@@BA@@B@@AB@@@AA@A@@A@AA@@@A@@@A@@@@B@@@@@B@@@@@@@@A@@@@B@@@@@AA@@BA@@@@@A@@BA@@B@@A@@@@@@@A@@DA@@@@@@@@@AB@@@B@@@B@@@B@@@@@BAB@@AB@@@@A@@B@@A@@B@@@B@@AB@@@B@@A@@BA@@B@@@@@B@@@@@@@B@@@@BB@@@BB@@@@@@@@@@@BB@@@BB@@BB@BB@@@@@@B@@@@@BB@@@@@@@B@@@@@D@@BB@@@B@@AB@@@B@@@BAB@BBBA@@@AB@@CB@@@@@@A@@@A@@@AB@@A@A@@@@@CAABA@A@@@A@@@A@@@@@@@A@@@ABA@@A@@@@@@C@@@A@@@@@@A@@A@@@A@@@A@@@@@A@A@AA@@@@A@@@A@@@@BA@@@@@A@@@@@AAA@C@@@A@AAA@@@A@A@@@@@ABABA@@@@@AA@B@BA@@@@@@BA@A@@B@@EBA@@@@@@@@@@@@BA@@@@@@B@@@B@@A@@B@AA@@@A@@AAAAAA@@AAAA@@@@@ABA@A@@@@BAB@@AB@B@@@@@BABA@AB@BA@@B@@@BAB@@@@@@@BA@@BA@@@AB@@@DA@@B@@A@@@@B@@@B@@AB@BA@@B@@AB@BBB@BAB@@@B@@@@@B@@A@C@ABA@@@@BA@@@@@@@AB@B@@@@@@@@A@AB@@A@@@@@@BA@@@@BA@A@@@@B@@ADCBA@@B@BA@@B@@ABC@@@A@A@A@@B@@A@@B@BA@A@@@A@@BAA@BA@@@@@@@AB@@@@AB@@@B@@AB@@@@@@@B@@@@@B@BA@@BABA@ABA@@@A@A@@@AA@AA@AAA@AAC@@@@BA@A@AA@B@@A@A@@A@@@AA@@@@A@@AA@@@@@BA@@@@@@AA@@A@BAA@@@A@@@A@@@@@@@@@@@A@@A@@A@BA@@@@@@@@@A@@@@A@@@@@AA@@@@@@A@@@A@A@@@AA@A@@A@@AA@A@@AA@@A@@@@@A@@A@AAA@@@@A@@A@@A@@A@@@@A@@A@@@@A@@@@@@@A@@@@@A@@@@AAA@A@@@@A@@@@@@@A@@@@@A@@@@@A@@@A@@@@@A@@AB@@@A@@@@A@@@@AA@@@@@@@@@A@@@@@@AA@@@A@@@@@@@A@@@A@@@AA@@@@B@@@@A@@BABCB@@@@@AA@@AAA@@@AA@@A@@@A@@@A@@@@@@A@@@@@A@@B@@A@@@@@@@@@A@@@@@A@@@@@AB@@@@@@A@@@@@A@@@@@@B@@AA@@@@A@@@@@A@@@A@@BA@@@@@A@@BAAA@@@@@@@A@@@@@@AABA@@BA@@@AB@A@@A@A@@BA@@@A@@@@@@@@BA@@@A@@B@@@@AB@@A@@BA@@@@BAB@B@B@@A@@B@B@@@@@BA@@@@@A@@B@@@@A@@@@B@@A@@D@@AB@BA@@B@B@@ABA@A@AB@@@@@@A@@@@@@@@@A@@@A@@@@@A@@@@@@@A@@@@@A@AB@@A@@B@@@BA@@BB@@@@B@@@B@@BB@BA@@@@@@BA@ABAAA@@B@BA@@B@@@B@@@@@B@@@@AA@A@A@@@A@@@@A@@@@A@AAA@@@@@@@A@A@@@@BB@@B@@@@@@@B@@@BA@@B@@A@@@A@@@@@A@@@A@@@@@@@A@A@@@@@A@@@A@@@AA@B@@@A@@@@A@@@A@@@A@@AA@A@@B@AA@@BAA@@A@@@A@@@A@A@@A@@@@AA@@@A@ABC@@@A@@@AA@@A@@@@AA@@AA@@AAA@@A@@A@@@@A@@@@AAAAAA@@AA@@AAAB@@A@A@@@@BA@A@@@AB@@A@@BAB@@@B@@A@@B@B@BB@@B@@@@@B@@CBAB@@@@A@@@@BA@A@@@@@A@AAAB@@@@AA@@@AA@A@A@@@@@A@@A@@A@@@@@@@A@@@@@@@@@@A@@@@@AA@@AA@@@AA@@@BA@@B@@@@A@@B@@@@@B@@@B@@ABB@@@AB@@BBA@@B@@@BAB@B@BAB@@@BB@@B@B@@@@BB@@@@A@@@@@AB@@A@@@A@@@@B@@A@@@AB@@@@@@AB@@@B@@@@@B@@@@AB@@@@ABA@A@@@@@C@@@@B@BA@@B@@ABAB@@@@ABA@@@@@A@A@@B@@A@@B@@A@CBA@@@AB@@AAA@@@A@@AA@@@A@@B@@@AA@A@A@@A@@A@@A@@AA@A@@A@@@@@A@@AA@@@@@AA@@@@@AA@@@@AA@@@A@@@A@@AA@AAA@@@@@A@A@@@@@A@@@AA@@@@@@A@@AA@@@@@A@@A@@@@A@@@AAAAA@@@A@@@A@AA@@@@@@@A@@B@@AA@@@@@AA@@@@@@@@@A@@AA@@@@BA@@@@@A@@@A@@@@BA@@@@ACA@@ABC@A@@BA@@@@@A@@B@@A@AB@AAB@AA@@@@@ABA@@@A@@A@@A@AA@@@@A@AA@@A@@@@@A@@AA@@AA@@C@@@AAAA@AA@A@@@AAAB@@@@@@@@@BA@@@B@@B@@@@@B@@A@A@@@@@A@@@AB@@AB@@@@AB@@@@@@@BA@@@@B@@A@A@@BA@@A@@@@A@@A@@@AA@@B@@@@A@@B@@ABABAB@@A@@@@@A@AB@@A@@@@@A@@@A@A@@BA@@@@@@@A@@@@@@@A@AB@@A@A@@@@@A@A@A@A@AB@BA@AB@@@BA@@@A@@@A@@@AAB@A@@@@@A@@@A@@@A@@@A@@@A@@@A@@@@ACAGICAAA@@AA@@@B@B@B@B@@@B@@@B@@A@@B@@@D@@@@BB@@@B@@@@@@@B@@B@@@@@@@B@@B@@B@B@@B@BB@@@@@B@@B@@@@@@@BB@@B@@@@@BAB@@BB@@B@@@B@@@A@@B@@@@@B@B@B@B@@A@@@AB@BB@@@@B@@@B@@@B@@@@@B@@CB@@A@@@@@A@AB@@A@@@@B@@A@AB@B@B@@@B@@@@@B@@@@A@A@@@AAA@@@AAA@@@@@A@@AA@@@@@A@@AA@@@A@@@@AA@@@@A@@A@@A@@A@A@@@@@AA@@@@@@A@CAE@AA@@A@AAA@@BABA@@B@@@D@@AB@@@@@@A@@@AB@@AB@@@@@AAB@AA@@@@AA@@@@@@@A@A@@@A@A@CAAA@@@@@@A@@@AA@@C@@@AA@@@AA@A@@@A@@@A@AAA@@@A@@@A@A@@AA@@AAAAAA@AAA@AACBA@A@A@CBA@@BB@@@@@@@@@@B@@@B@B@BA@B@AB@@@@@B@@@@@B@@A@@@@B@@@B@@@@@B@@@@A@@@AA@@@@A@A@A@@BAA@BA@@@A@A@@@@B@@A@@@A@@BC@A@@@AB@@@@A@@@A@A@@@@@CA@@@A@@B@@@@@@AA@@@@@@@@@@A@@@@@@@AAAAA@A@A@A@@AC@A@@@@@A@@@@AA@A@@@@@A@@@@@@B@@@AA@@@@@A@@@@@@@A@@A@@@@AA@@@@A@@@A@@@A@@@A@@@@@A@@BA@@@@@@@A@@BG@AECCA"],"encodeOffsets":[[104863,36739]]}}],"UTF8Encoding":true});}));