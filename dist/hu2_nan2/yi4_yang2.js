(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('益阳', {"type":"FeatureCollection","features":[{"type":"Feature","id":"430902","properties":{"name":"资阳区","cp":[112.324272,28.59111],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CFYV@@CBGF@@IBC@GAIGCCEIIQACAAAAA@@@A@ABABA@@@C@@@A@A@EBABA@A@AAE@AAGAA@A@ABABA@I@C@@BEF@BEBCBA@A@CAACAEAAA@A@E@@@AAAA@@AAA@A@GFMF@BAB@HAHAFEJAB@DBB@BHRBBHFFD@B@B@DADEDABCBADABABC@AAA@A@@@A@AB@BA@@DAF@D@F@AB@D@B@DBDFBDBBBDBBB@B@D@F@J@JADAP@LAF@FBDBBBDBBDBB@BC@CBCBCB@B@BBBB@D@D@DBB@@@BBBD@BBBBB@@BAB@@CB@BBBDBB@DBD@BBBBBBBBBB@B@DABCDADABCB@FCDCD@B@DBD@D@BBDBBB@@D@B@D@BDBB@FBB@DBDDBBDDH@BDBD@D@DBBBDB@DBBB@FBDDBBBBDBDDBDBBCD@BBBB@BBD@DBDBD@HA@@B@DBD@BBD@DBB@FBF@DBB@DBDBB@BBDBB@DADEDAB@FEDCFEJEFCBCB@BA@@FFFJBBDBJAFAHGDAB@JBRFPBBBLDLHDBFFDDJDFBJDFDFDJHBBHHBDBF@D@B@@ABAB@BBBDBBBBB@BBBAB@BAB@BBBD@BBF@F@B@@@@BADCN@D@@@BB@LAHAB@DCBCBABAD@FAFBBABABAB@B@D@DFB@@@DBHANBJADA@@HCDAH@BA@@BAB@D@B@B@DDDDD@@B@BB@DFDBBDDDBDDB@BFBD@@BD@B@FB@@BBB@F@B@B@HC@@@ANCDALCDABBB@B@DB@@@@@@BBDDDBFD@B@@@@@@A@@@@@@BDD@BFH@BB@@B@DBB@BB@DF@BBD@BB@@B@B@B@B@B@H@BA@@BBBBDBDB@@@H@DDB@BBBB@@B@B@F@DABADCBADA@ANKLIJCLALCDADEDC@ABC@AB@B@B@DBBBB@@ABA@QB@@C@AAAC@@E@EAEGGCC@@GGCCCG@G@GBGAAA@A@ADCBA@A@AACAE@@@CAA@AAA@@@@@A@A@@@A@A@CAAACACACAACA@ECAAEAA@A@ABA@CBAAA@CAA@C@@AAAB@@CDCBEBCA@@A@@AAACA@GEA@@@EAIAIAKE@ACECQ@C@EBK@CAECQ@@CGAACEGEGG@ACAEGGEC@O@A@C@M@KAG@C@E@I@EBC@A@A@KBGDKBMBIAGEAAA@GECECIISGIIGAACAGASKA@OKA@AACACC@@A@AA@@CAAAA@ECCAEA@AA@ECA@A@GA@@@@A@C@@@KAA@@@GAC@A@E@A@A@E@CBA@ABABCB@DAJADC\\AFCDEBGBCAC@A@ICQMKG@@CCQOEEECCC[OGCAAE@IFG@@BC@A@"],"encodeOffsets":[[114919,29268]]}},{"type":"Feature","id":"430903","properties":{"name":"赫山区","cp":[112.374145,28.579494],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AAGGGGEGGGCAC@I@A@E@@A@E@AA@@A@EAIAQ@@AAKSCGEI@AA@@A@@A@@AGCEAEACACAAA@@AA@AAG@EACECGAC@ACAC@KACAE@AAE@C@A@CBC@A@C@A@AA@AAAAAAAA@A@C@C@E@C@EAA@A@AAA@ACAAACAECC@CA@ABC@CBC@A@A@C@A@@BA@@DADADCBABA@AAAA@CDE@A@A@@@A@A@CACE@@AAAAAAAAC@A@ABEBABA@ABC@A@CBA@A@A@AB@@@BDBBBBB@B@B@B@@A@ABA@A@AACACACCA@@ACAA@@@EA@@E@E@ECEACAC@A@@@@BADCFCB@@A@@A@ADEBEBC@C@CCC@@CBC@E@C@CACCCAC@ABCBABGBABADAB@@AB@@A@A@@AA@@ACC@@@@A@AAEBCBC@@AC@ABA@ABA@ABABC@C@CAA@A@AA@AAA@AAACAA@C@AB@DBDADAB@@AAACCEACCAC@ABAB@BCBAA@@@C@ABCBA@C@AAACAEACACCCCACA@A@AB@FA@A@A@AAAC@AC@A@C@AA@AAAAACAE@C@C@CBAD@DABA@AAA@@C@ECAACCAEAC@ABCBABC@CBGBGDE@A@C@AAAA@ABAB@BCBA@@AA@A@@BA@@B@F@FBFB@A@@@A@AAEA@@ACAA@CAC@E@A@ABCBABABABEDCBEDE@EAE@CBC@C@AA@BA@@D@F@D@BAB@B@B@BBBBDBB@BCF@@@BA@@B@@ABCHIN@B@BBDBDBBAB@BABAJ@BBDABABQHABGBIB@@AB@BADADCBIBABA@ADAB@D@BBBLDDD@B@BABA@AFABA@AAAAA@G@EBCBA@AB@BBD@@@BABA@EDED@@ED@DABCFCDCBA@CBAAA@@@CG@CEEA@A@A@A@ADABCFCDAB@B@B@D@BAB@@A@EAAACA@A@C@CAAAAA@ABCBCBABC@C@A@A@AB@B@B@F@BBDBFDDDDBBBBDD@@@B@BQFABAB@BAD@B@BAB@BEDAD@@@B@BBJBBDBDBLFJDBBBBBBBDBFBD@B@DAD@B@BBFBHDF@BBDAB@@A@A@A@A@@@@B@B@@@BDD@B@DBB@BBBBHDDDFDBBDBDBF@DBDBDBBBB@B@F@DBF@DBB@J@B@BFDBBBFDBB@B@B@B@B@BBDB@B@B@BCH@@BDDD@B@B@D@@AD@B@B@BBBFD@@@B@B@D@B@DBB@B@D@B@BBBDB@@@B@F@JAHAFDDFDFFRPDD@@LHRNJDB@D@DBHAFADCBED[BCBI@CDABABAB@DAF@B@B@F@B@D@HB@@B@LB@@D@B@@@@@HBB@B@FDB@@BFBDBFDB@BBDB@@BBB@@@DDDBBBB@PLB@TLHBDBBBJHHJJTDJDFHFB@BBHFJBNALAHCLAB@B@D@FAJ@F@D@H@LBN@D@B@P@D@HFFHDB@BHCB@FA@@FEFABAD@BA@A@C@@BAD@B@B@BCB@F@B@DAH@FBDBDDBBB@B@B@@CBCHG@@B@BABC@CBCBA@@B@BA@@@@DADADA@@BAD@@@BBBBBFB@BBDBDAF@B@BA@@AAACAC@CAC@G@@@A@ADCBA@A@@@@@@@ACCAA@A@@BAB@DABA@A@@AA@ACA@@@AAC@@A@A@AA@@@A@A@AAA@AA@EACAACA@AAACEEEGACCEACAC@C@A@@DAHC@@FAHAJADAB@DABADCBABA@ABC@CBABE@@BADAD@D@FADBF@F@FBHBDBFBHBHDDBDDBD@DBD@B@B@BBBD@FBB@BDBBB@D@B@B@DFHPBBBDDFBBB@DBFBDBB@BAFABAB@B@B@BBBHHL@D@BBBB@B@D@D@F@DBD@DDB@DBB@B@D@BAB@B@BABCDAD@D@DBB@B@@A@A@@@C@C@A@@A@AAC@A@A@@@@A@CDIBABAB@DBJD@@B@BAFEDCBC@CBADC@A@@@A@AC@@AA@AA@AAACCAACCAAC@EAC@A@ABA@A@CACC@AA@A@A@C@C@C@A@CC@AA@CAEAGCAAAEA@@C@A@CBA@@@CB@@ACEAE@A@AC@A@@@A@@@@@AACECACAA@ACCGGKEI@AEIACAEAE@AAAAA"],"encodeOffsets":[[115360,29170]]}},{"type":"Feature","id":"430921","properties":{"name":"南县","cp":[112.396337,29.362275],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@CDI@E@A@@AQ@EA@@@ECCA@@AAA@CC@@@@AAACDC@@BA@@CCBCBCB@@@@AC@CCCCAICI@CAAAAI@GB@@M@E@@@CAEAECGCIEKGA@KEGAA@@@I@AAK@GAKBI@A@ED@@AF@DDBJFHJBFAF@BCBGDIBC@EBMBA@CBA@CBGA@C@AE@AAEAAAA@E@I@A@@@EBCDEBA@CIEKACCCCCEEWSCCAAIG_YOKIIAAC@EBGHCDEDODG@@@@@G@C@O@GAEEEEAAEGACC@@@E@E@GBIBMBA@@@@BABCDADCFEDCF@@AD@BAFAH@FBH@DBF@HBF@FAD@BBDBB@BBB@DA@@BCB@@CBABCF@@AFADA@@@A@@@A@A@A@A@@@AB@@@BA@@@A@@@@@ABA@@@@@AB@@A@@@@@AA@@A@@@@@@@AA@@A@@@@AA@@@A@AA@@ABA@CBABED@DABBB@FAB@@A@A@@@AB@@A@ABA@A@AB@@A@@@A@@@AB@@A@A@@@AB@@A@A@A@ABCB@B@BBF@D@@@B@B@B@@BBBBB@DBB@B@BAB@D@B@CHET@H@F@D@@DHDHBBBDLNBBPPLFDBBBJJJNDDCBCBC@EB@B@B@FAJADBHBF@J@DBH@F@FAFCHCHAJ@B@D@F@H@H@F@DAB@BEBEDADA@AD@DB@DBDAFAFA@@B@DBD@FB@BBBB@D@DCDCDAH@DAB@@@B@B@DAD@FBB@DBBBBDBB@BB@ABABCF@@AD@@ABADCFABABAD@DADAD@DAD@D@D@D@D@DBD@D@BBF@B@D@DBD@D@BBBBDFNBDBB@DBB@DBD@DBB@BBB@BBBBDDDBDHHDB@@@BDBFD@@@BB@@@BBBBBB@B@BBFBB@BB@@BB@DBB@B@F@B@BB@D@BAB@B@D@BA@@B@B@D@D@DBD@@@@@B@D@BBD@FBB@DBD@BBB@D@BBBBD@B@B@BAB@@AB@@AB@@ABA@@BAB@BAB@B@B@B@@@F@D@BAD@D@B@F@B@BAB@DAFAB@DABADAD@BA@@B@@ABAF@B@@BB@B@@@@@@@BBD@D@BBF@D@@@BBBBB@BBB@B@BBB@BB@BB@@D@BAD@@@B@FBDBB@BBD@DBDBDBB@BBB@@A@CDCBCBAFAHCFCB@BA@@@CAECMAEAG@C@CAA@CAE@CAA@C@EBGBC@CBG@C@C@EBE@ABC@@DADAFCBAD@DADBBB@DBBFDBBBBD@DBBBDBDBDBD@BBB@B@B@@@BE@A@I@E@E@A@CBA@ABAFAVMBAFCBC@@BEBA@@@@AGAIAI@CBC@ABEHGB@LIBALIB@DEDC@@B@DA@@B@@AB@FEBAB@BADCJE@@@@@A@@LEFCDA@AB@B@F@@@FALCJCHABADAHABA@@PEBAHCBAFADCBADE@ABA@E@GBABCBCBEBGDCBA@@FCDAD@D@B@DBD@@@D@J@HAF@LCJC@AFA@@JED@DAB@BBFDB@B@BBB@DAB@B@HAJA@@@@D@D@D@FBDDDFDHJLDBDDPLLHBBFDJDLBL@H@D@FCHCHEFCDEBADCDIDGFIBEDCBCBAB@B@B@DDBBBBB@BD@@B@@ABABABC@CBABCDABADADB@BB@@@B@@@B@B@BCHEBCD@BAB@@AAAA@CEACAAEAGCA@CAAAAEBC@CBCBABAD@DCBADABABA@AAEACGCCCEAECCA@@@A@AAA@E@AD@B@DA@A@@@CAC@CCACAACAA@C@CBABABCBABC@CACAAACAC@C@A@CBA@C@CBABABABABBH@B@D@F@FA@AB@BAB@DAB@DABAB@BA@@B@B@BAD@DBBBD@FCBADABCBA@C@AB@B@B@B@BAB@DA@AB@@A@CHAD@B@@@@@@@BA@@@AB@@@@@B@@@B@@@B@@@B@B@B@B@B@FB@@D@BBB@B@B@B@BBB@JDJBJDFHHHBAB@FFFFFDD@H@VKFC@E@CMMIMEICCCACAAAA@CDC@C@CACAG@GBCACAIGC@UCC@CAIAI@CACCCECOIQEGIIKIGAAA@A@AAAA@QECAOGECAAAASKAAGGIIABMJEBGAE@CAE@A@I@_@AN[CSC@BCJSCC@ICECCCABA@ABEDGJEJ@@AJLL@BLABDBHBLF`DXBTCFKL@@GBAACACAA@@@CAGCICAAE@AA"],"encodeOffsets":[[115245,29857]]}},{"type":"Feature","id":"430922","properties":{"name":"桃江县","cp":[112.155822,28.518084],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AAC@A@A@ACCE@A@AAECCGCCEAA@CAA@ACACAAB@BAB@@@BABA@ABA@A@CB@@@DCD@D@HABAD@DABABCBEB@@A@CB@BA@ABE@@@GBAAA@GE@@CAAACAC@CBABCAC@GBC@EBCBEHADADCBGBC@CBCBGBEDEDGBADAB@D@BAB@@@DCBCDCBC@GAG@C@C@CBABEFABC@C@GCGAA@A@A@ABC@A@AAACAACAA@C@C@CBCBCBAA@@@A@C@C@AA@CCCACAA@AACAC@C@C@AAAAA@CBC@A@C@AAACC@@@A@CBCBCAAAC@EBGAC@C@C@CACAAAAAA@C@CAC@CAEACAA@ACCCAE@A@A@CBCDA@ABA@AAACACAE@G@K@G@C@AA@B@BBB@BDD@F@F@BABCDCDEBABADEHA@ABADCBABA@C@A@ABA@@BAB@BBD@BABABAB@B@B@@BBBHBD@D@BBBBBBBB@@B@BAB@D@B@F@F@BBFBDBB@B@D@F@BBD@BFFDF@BBDBBAD@DADABC@ABA@@BABAFAFABA@A@A@IGAAA@ABC@GD@B@@BD@BBB@BAB@BCD@B@HAB@@ABA@C@E@G@CACAIEC@AAC@E@C@C@KCA@A@A@@BABAJABABCBCBADAD@B@B@BB@BBDD@B@B@BAB@FAD@@ABABCBCBCB@@CDADAFCJCBABA@E@AAGCIAKCKAIBC@CAC@A@A@CDC@C@IBCAC@ACCCCCEEKE@@A@A@AB@@@@AB@B@@@BBD@B@@@B@@@B@BBBBB@@@@@BA@GAA@A@@B@@A@@B@B@BBBDJDH@B@B@BADCF@BABA@@BAA@@AAACAA@AAAA@C@A@A@CAA@A@C@C@C@E@AACA@@AAA@AAC@@AAAAAAE@AAA@AA@A@C@A@AAA@@ACCA@GEMGCAIAI@IAI@A@A@A@ABED@@ABA@CAE@GCC@CAC@CAA@ABA@AAAAEACAGAA@C@A@C@A@EDA@C@ABAAA@CAAAA@A@C@EACAA@A@E@A@AB@@@@@BDDBD@@@B@B@DAD@D@@@B@BBBBDBDDFDFBD@B@B@B@B@BAB@@A@C@CAIAA@@@A@AB@@@B@BAB@D@@@@ABA@AAEGCCA@@@A@@@A@@@ABAB@BA@E@C@C@KDGBE@IB@@@BADABABADABA@@B@B@B@B@@BDBF@@@B@@@BCDCD@@@B@BB@@BBBD@DBBBBBBBBBBDBDBFBJ@@B@F@X@JAD@HBF@F@JAL@HAB@@@@B@@@B@@AB@@B@@BBB@@B@@B@@AB@@ABA@CD@@AB@@CBIBABABABABA@ABA@ABABABA@@@K@@@A@AB@BABBD@BB@BBD@LBF@D@BBB@BD@B@@@B@BABAD@BBB@D@BBB@@BBHB@@B@@B@@@BA@ABABABC@GDAB@BAF@DAB@D@D@FB@BBBB@@DAD@BADCDAB@B@D@FBDBDB@BBBBDBF@FAL@D@L@F@H@DADAF@B@B@BBDBBFBDDBBBB@F@B@BCD@@AB@BABCD@BA@@DAFCHAF@B@DBDDD@@B@B@D@F@DAB@FAD@F@DBDBDBDDDDBDBBB@BABCDABAD@BBBBBD@FBBDDDDBBDBDDBD@D@BBDABADCDAB@D@F@FA@@DADBDBBDDFBDBBB@B@BA@C@C@AB@BDDBBDDHBDBF@HAD@B@B@DBBBBDDBDB@@B@BADADADABEBCBEFEBCDCHEDADAB@D@BBBDBF@B@DBDBDBBDBB@BABABCBCBAB@D@FBD@DADAD@B@D@D@BABA@@@A@EBEBEBEDCDCFABADABABCBAB@D@D@B@BAD@B@D@DBDB@BBF@@BBBHBFBHBBFFDBB@D@DAD@FCBADADADADBB@DBHBDBFDFBD@D@D@DADAB@D@@BBBBF@DBBDBD@BAD@BBBB@BBDBBDDBFBDAB@FABADABE@CB@BABBFBDBBDBDBHBDBDBBAD@FA@@FAD@F@B@HBBAD@B@F@D@B@BABCBD@@B@DCFAB@B@HCF@D@FAHAFADABAB@AACAAAAC@A@C@ABC@AB@D@BBFDDBDDD@BABADOBA@@D@DAD@DAFAFCDADAF@DAB@D@F@D@F@B@DB@@BB@D@@@DBDDHBD@BBD@D@BCBA@C@CBCBCDEFAD@B@BDBBBBBD@D@DAD@DAD@DBB@B@DAD@DBD@DA@AB@BAD@B@B@BBBBDBD@D@D@BABABABC@C@C@A@CBCBABCBAB@D@D@BABAB@BABABCBCBCBABA@E@CBE@CB@@ABAB@@@B@B@BBD@BABABCDABAFCBC@C@A@AECGEAAGQ@AAA@CBAFIBEBG@GBA@ANEHEB@B@BB@@BBBB@@F@B@B@BBBFBDDBB@B@DAFA@AFE@AD@J@B@BABAB@B@HBBBF@BBB@B@BAFAB@B@@@D@@@B@BABAB@@@B@BBBBBDJRFJDDJHHBD@JA@@HEDA@@ZUDEB@D@@AH@JEF@BBHD\\PBEBG@I@E@A@@CAAA@A@A@C@AAA@C@A@C@A@A@@ECAA@A@A@ABC@@@C@A@ACCAC@@DG@A@A@ACAAAA@A@A@A@A@CAAEAAEC@A@A@IAA@CAE@C@E@AAAAAACAC@CAEACACCACECCAGAA@AAA@C@ACC@A@@@A@A@@B@B@B@B@@@BAAC@ACEAGAE@A@ABC@C@AACAEACAAAAAAICKECACAAAAI@A@A@@BCFC@ABA@A@ABC@ABABARE@A@A@@CCAAAACCCCAEAC@A@E@A@ABAB@B@D@D@BADADABAB@BBBB@D@D@BDBBBFBB@@@BA@A@C@A@ABADCDEBABCB@B@B@B@FF@DDH@@B@BBDAB@DADCDEBA@CFC@@FCFCB@BA@A@@AC@ABAB@DAFAH@B@BBBBB@BABEB@BA@A@ACCKCAA@A@CBABCB@BAJADABCBC@ABA@@JAHABARGBABAAC@ABIBA@ABAAAACAC@A@AJMDGBA@@@AB@@A@@DE@AAAACAA@A@A@ABA@A@C@E@CB@@A@@@ABC@ABIDC@ABABE@E@CAAC@C@A@C@I@A@GAAACC@@AC@A@CAAA@GIA@A@ABCF@BCDC@CB@ACAA@AAAA@C@AB@@@AAA@C@A@AAACAAAAA@CA@A@ACA@AAAAAA@A@A@A@AA@@"],"encodeOffsets":[[114955,28913]]}},{"type":"Feature","id":"430981","properties":{"name":"沅江市","cp":[112.355954,28.847045],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@CDMBC@A@@A@E@E@AAC@AA@ABA@ABAAA@AAAAACAAA@ABABA@@@A@CAEACGGAAIGECECICEAICCCEECAKGKCAAOAQEIAA@CBGHEBIBCAAAEIEE@@ABA@ADEDIFEFCDEFA@CBCFCBFDDDBBD@B@B@@DAB@F@F@DBFAH@B@F@D@FBF@FAH@F@DAD@FDFDBDBD@DBB@DBDBDBBDDFBDBFDFBD@F@FAF@D@@@D@FBF@D@DADABSNEDIFSLGJILCDMJCH@ZBb@D@PBDFJATAFADArAj@DCHGDCBABADADBV@B@HDDBD@@@B@B@B@B@B@B@D@B@B@BB@AB@BADBBABB@@@@B@@@F@B@@@B@D@@@B@B@BBB@B@B@B@@@D@B@B@@@B@BBB@B@B@D@@@BB@@B@@@DBDB@NAJAHAF@F@@@D@BDFHBBFFFFHBP@D@H@@@@@H@PCFCDCHGFAD@BBJJPL`ZJHBBDDXTFFDDDDBDFLDJB@FADCFA@@B@J@F@B@BBFBBBF@@B@DHBDAB@DAB@NAFAD@JAHCDA@ABEAEGIIECA@CBE@@FCB@J@LAHBL@BBJ@@@B@HBLFB@LHJFHDFDFBDB@@F@N@@@HAJ@BBBB@DDJBJDDDDD@@B@@A@ADADDD@@AB@@CDBDBB@@@@DDB@BB@@DBFD@@B@@FBR@@@B@FCJ@DBBF@BBJDHDDB@@B@DBDBBBHA@@LKDEASCWE_AKAGACKB@AKKBI@@FIHIFCBAB@BADDFDJDD@TDDI@ATD\\DBM`@J@B@F@DBF@HBFANIBAJJHHBBTLBBBBFDPHDBRFB@BB@B@BBBHBLJJJFHJRDPDFDDDBJ@JBDBD@VDD@JHDBDBHAH@DBDBD@D@DCB@BBDBDBDDFCD@BEHAJA¼RPBHAFCNCHCDAXEVCB@BA@@@A@E@E@@BI@G@GBQ@M@IBGDOL[DKBI@MBCBAFAD@HAKSIMIMK]IGEC_O[SUUGICSCUOUWSIOSKYGKAA@MEICGCGCAAAAA@A@A@A@A@GAIAEAEACCAAAAAC@AEAECAAC@CAEAC@EAA@CACAA@CAAACAAACACAAAEAA@CAC@AAC@GAC@E@C@C@A@IAIAIAG@C@I@EAAAGGAACCAC@AAC@@CEAAAA@AAA@AAA@AAG@C@AEEEEEE@E@C@CDCDE@C@EBC@CBADAFCDC@CBC@E@C@A@AAA@AAA@ABA@@BAD@@A@@@@@CACAAA@AACA@@OCC@CDCBC@EAACC@GBC@CAAAA@AAEAGAAAACCAGAA@@B@DA@@RAB@BA@AACAA@A@A@@BAD@BCDCFCBKDKBIDKJML@BCBABCDABCBE@A@A@@@AAAAA@CCG@@@A@ACACAA@AB@@A@G@A@A@A@A@AA@@AAC@ACEA@@AAA@C@AA@@AEG@ACC@A@@@@B@@@@@@@@AECCACCAA@@@@@@CAA@A@AACBKDCBMD@B@@GDA@A@E@A@AA@@EAA@C@@AC@EA@ACAACCCACCACEA@@A@AC@CCCCA@A@C@A@AB@@ABG@CBGD@@CBIBMAGBCA@@A@CEC@A@A@ABABABEAEBC@ABABADCDA@GBKBA@@A@@"],"encodeOffsets":[[115102,29466]]}},{"type":"Feature","id":"430923","properties":{"name":"安化县","cp":[111.212846,28.374107],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@CACACEE@@CAECKEA@@A@@BABC@A@CAG@C@ABCDCBE@A@AACECE@C@C@C@@AGGAAC@C@CACBA@ABEJABCDADADCDEFCBEBC@CD@BABEDCBCBADCFAHADCBC@C@AAECCCA@CACACBGB@@A@@DBFHHBDFB@@@@@BA@@@IBKDCBOFEDCFCBC@A@CAI@M@E@CB@@AB@B@D@J@FAB@@A@A@AAECAA@A@A@CAA@AC@AAC@EBA@A@@AAA@@BABADA@A@AAAIIMK@@AA@E@AAAACAA@C@@@C@A@A@A@CAC@A@@A@@@CBEBIBC@@@@CB@BABA@@AA@@CAC@A@@A@@@ABIBCBA@@@AA@A@@@EDCBA@@@AABAJI@@AAAA@@A@A@ABGAC@C@A@A@C@CBA@A@A@CAA@C@A@ABA@ABC@AB@@@@EHEFIJA@A@A@CAAAA@C@A@ABABAB@B@BBF@D@B@@@BAB@BBBBFJPBBBBPPBD@DBBBBDBDBBBD@DBBBBB@BADKNY\\CBC@A@GGAAC@EAC@A@A@A@EBULEBGDEBE@C@C@CAAB@@@BBDNTHJPTBB@BABADA@A@IAC@@@ABBBBF@B@BA@ABC@ABABCFCDGDCF@@@DBBDDPRDDFDDDBBJLDDHHBD@B@B@D@BBDDF@DBHBF@@DDBDFFBB@DBD@BABA@ABEAC@E@C@ABCB@B@DB@BD@B@BABEBC@A@AAEEAAAAC@C@C@A@C@@AACAC@AA@@@CBABABC@C@A@@BCBCDABEBEBABAB@DAFAD@BOJEBABAB@BBDHHRRDFDBBB@B@B@BCFADBB@B@DCBCFEFGLEDEBC@CAEAECECC@A@ABABA@A@EAABC@GDQHA@E@G@CBCBEBADCB@DADEDMRFJFFFBFBDDDB@D@B@B@DDDDHFDNHBBBD@HB@HFDBNBDBDBZJXHdR\\RJJDH@F@HBFDHFDJBFDD@F@BADBD@BDBBDF@@@@BBBBB@DBF@FAF@D@D@DBBBDADABAD@BAB@FDDBDBFBF@DBD@B@FDFBFDFBDBB@FBD@FDDBB@F@D@D@B@DB@DFDDBBBF@D@D@F@FBF@DBD@DBFDFDDFDDB@DBF@F@F@DBF@BAD@DAB@BBBBBBBB@@BBBBD@@@B@B@B@B@D@F@D@D@DBBB@@FFFDB@DBBBDBB@D@FDDBDBD@DAB@DAJGFCB@B@B@DAD@BBFBJDD@DAD@B@JBFBBBB@HNDDBBD@JDD@DAFA@@BADAD@DBBDFDDBDBD@DBDBFBDBBAF@D@B@@F@B@B@BBBBFBDAB@B@BBDB@BBDF@@@BDB@B@HABADAD@DBDAF@BBBB@J@D@D@FDBBB@BAFA@@DCD@B@B@D@BBBBBBBBDBD@B@D@D@DBDDBBB@@B@BBBBBDBHDDBBBB@DBDDDDB@B@BABABAB@@A@A@C@A@@@ADABABADCDAD@DBBBBBB@NDFBDBDBDBBBB@D@@ADCBC@@D@FBBAB@BCBA@AB@B@D@BBB@BANIFAB@F@FBFDDBF@H@F@@@B@F@D@DB@BBBB@BBBA@@DA@@BABADCB@D@BBD@D@B@B@B@B@BBBFFHD@FBB@B@D@DBBBDFBBDBFBFBDD@BDDFHDFB@DD@BB@FAHAD@BAFCHE@@BCJC@@D@@@DBFBFFB@BBHDH@H@LAJ@@@@@FBDBBB@BBB@B@BDDHBB@B@J@D@H@F@H@J@DBDBFBFBBDDFDB@BHDB@DBDBBB@BBB@HBFB@B@F@FBFBFDB@TTHFHD@@DFDBB@FFJFDFJJFFFFBBDFDDFDB@JLBDD@B@F@D@HAPELELGDAJEVEFC@@B@JAFBDBDJBBDBDBB@D@D@BABCDCD@F@FBDBFBFADA@@BCBA@GBE@CCE@CBEBCBEBCBEBADCDA@@CCAC@C@ABEDGBE@CB@@ADCBA@ABA@@DC@A@A@EAAAACCEAAAAC@A@A@ABEBC@C@G@E@K@CBK@EAEACAA@ACACAEAC@A@A@CBCDABC@CB@@AAAAA@@E@C@CBA@CBE@ABAHCD@BABABAB@@A@@@AA@@@GAAA@@AA@A@CAA@ABCBA@A@A@@@AACA@AAC@E@KAC@AAA@@AACBA@ABAB@@@L@@@B@BABABAB@BAB@BABABABAJADA@@BA@@DCB@BA@@BA@@@AA@@@AA@AA@@@BA@@@A@@@A@@A@GBK@IBE@E@GAC@IBW@E@A@@@AIAEACACAAAAAAAACAC@AA@AA@@A@A@@DCDC@A@@@A@@AEAC@@@A@A@A@AB@BABCBABABC@A@@JAF@HALCD@D@F@B@@ABABA@@B@@@B@@@B@DDFHBBB@BA@@@@@CBA@A@A@@BAB@@@B@JBDBD@B@@@BA@A@A@A@A@AACCECEACACAA@A@A@@@CBC@C@A@A@@ACCC@A@@@@BAB@F@B@B@DBFBD@B@B@BBDBB@BBBAD@B@FCB@D@B@D@B@HBDBFBBBBBB@BAB@DBD@DBD@HDF@DBB@BA@@FCBAB@B@B@J@JBJ@JBDBNHHFB@DD@BB@BBB@D@B@B@@BBB@BBFBBBB@BD@BBB@BB@@DBBBF@D@D@D@B@B@DBB@B@D@B@BB@BBBBDBB@@BB@AB@BA@ADEBC@A@A@ACGCIAA@A@A@AB@@@@AB@B@HBB@@A@@@@AAAA@A@A@@@A@@@AAC@A@@@ABA@@@@BAB@B@@@LFFFDDDDBDD@DBJAD@D@DCB@B@D@DBD@JALBLDJBHDBBF@B@BADADIBEBCDC@@DADADABABA@@BC@EBA@A@A@ACCAAA@@A@A@ABCBCDADABABABIBA@AB@B@B@LDD@D@F@D@BBD@JFDBDBH@F@D@B@BA@@BA@G@ADC@ABA@AAA@AAC@@@AHCD@BAB@BBJHB@B@B@BABEBEBA@AB@BAD@BABC@CBCAAAC@ACEEE@AAC@A@E@C@AAAACAE@A@E@E@A@CBA@A@AA@AAAAAA@A@CACAGAA@@@A@ABABABA@AAC@ABA@AB@BAB@D@B@BADABCBAB@FGBCBAFADCDCBA@A@E@ECC@AAA@A@A@ACAGACAA@@A@C@@AACA@A@@AACAE@CACCAEACBI@A@@A@@ACAACAAAAABC@A@A@AAACAACCA@C@E@A@@@@A@@@A@AB@BABAB@BABA@AAEACACCAAAC@C@AAAA@CBE@E@C@CAE@ACA@A@C@CDG@A@C@A@C@CAA@ACCCCCACCCAECECECECCC@@CECICG@A@@@AECA@@A@ADCBC@AHCFCBAFEFE@AAAA@BABADA@A@A@A@ABABABCBADAD@B@BA@AA@CACACAAAACACAACACCCC@A@CACCE@A@C@A@A@CBABABCBAB@@ABC@A@AAACACAA@A@CACC@@@@EBCB@@GDCBCBE@CAE@A@G@E@C@A@A@C@AB@BA@AAA@ABGDA@A@A@AAC@A@@@A@C@A@AAGIKG@@A@CBKDEBEAAACGECIAECCCGCKAAAAC@QBE@@@A@@@@AAAACAGBGBEBEFAB@HBH@FEDEBE@SIA@@@EAC@GBA@EC@@GQ@@AAEA@@A@@@@@AAA@ACCC@@C@C@@AEEAAA@@@A@ABCBKRA@A@A@GEA@A@@@C@CFA@A@ABC@CAECEAA@A@A@ABAD@B@RDBHHB@ADCBIDAB@F@RDVBFAB@@A@CAECA@A@ABCAA@@AACCG@AAAEEAAACBCAGCE@@A@A@CBA@C@C@CB@BAD@BBBBBB@D@FADAB@B@@BBB@BADABEBG@EACAGEOIGAAAA@@@GHA@A@IEA@ABCFCD@@CDGDABCBELABA@@@AAACECCAEAA@A@AAACAA@CBABCBCDAF@D@DABC@A@A@CAAC@EACAACEEIMACCACAC@A@AACACACAA@A@CCECA@AACCKIA@A@A@ABEBCBCBCBCDCBA@AB@@AA@@A@@@@BC@@BAB@@BBBBFFFDDBBBB@DAD@DCD@D@@@B@@@DFBFDHBBBB@B@B@BAD@B@@@BDDFFDFB@BBB@D@D@DAB@DB@@@@@B@BAHAHAB@@A@A@@@A@ADAB@@A@A@@@CCAAA@CAC@CAA@CAEEECAA@AC@@@A@@BCH@BAJ@JBD@BBBBBBBBB@B@@@DCDEFEDCB@BA@A@@@AAEEAA@@A@ABCDCHAF@BCFCBABA@A@C@AACAACACACAC@ABA@@BAD@DAHADAFEBCBA@CBCAC@EAAB@BCBA@@@A@@A@CAABC@ABCDCDEDGFABCBC@@@ICECAFCF@BBBDD@D@FCP@HAF@D@BBFBDDDJJLJFFDB@B@@ABE@GAC@ABAD@@@BBJ@@ABADADEFABABABKLEHAB@B@FBF@DABAD@B@D@DDFHHDDBBBF@D@DABCBABAD@B@BFHBF@D@D@B@FBDB@DBBB@B@F@DBF@B@BCBKLAFAFA@ABA@KIMGKCKCIEGCA@C@AB@DABBFDLBFADABEBMDA@A@ECKKCC[UIEKGCAEAGCEBABAD@B@L@FAF@BABABWBI@ABC@G@KBCAUKE@C@C@CB@D@FBB@BDDBBBB@BAJ@BA@CBABAD@DAFABABABCFABCBC@CBEHCB@@C@GEWKCAIGEGACAEAE@K@CCKEGGGUWGE@@ACAC@@AAOKAAC@AACAKGCAC@C@C@A@@BABAB@BAB@B@BABCBA@A@A@CCCA@@A@@@C@A@A@E@C@A@ABC@C@C@A@EAA@@BA@CBA@A@C@@@AA@@DABC@@@CBAAAEGMOEGIEGECCAAAAAGCCAAC@A@EBC@A@A@@CAGCIAA@@@AAAACEG@@@C@AAIACAA@A@@BC@AACSUAACCACACCAAAEAGC@@@A@A@CFIDE@A@AAAE@A@A@AAAA@AAI"],"encodeOffsets":[[113777,28715]]}}],"UTF8Encoding":true});}));