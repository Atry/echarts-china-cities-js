(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('亳州', {"type":"FeatureCollection","features":[{"type":"Feature","id":"341602","properties":{"name":"谯城区","cp":[115.779025,33.876235],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FBD@B@DEFAFADBFBHHHFDBD@B@B@JAF@FBB@D@FADA@EBA@@HBBBFBBBBB@DDBD@FDFBFBJHDBB@NGHC@@NELAD@D@H@DBDBJFBDB@@@B@BAD@@A@@@@BA@@BABABADAB@@@B@BAB@BABA@ABA@@DAL@JAH@BABA@ADEBADCDEDADCDCFAHGDAFCFCDA@AFABC@C@C@EAE@C@E@CBCDGDCFABBF@F@D@HABBF@D@HAD@@D@B@BAF@D@B@P@H@D@DBB@@@@DBFDD@B@D@FCFADA@@BC@@BEBEBG@CDEDADAFAH@DBHBD@HCFAB@FAD@D@F@F@F@FAF@HBF@@@D@FAFC@@DADADCDCBA@@HEDADC@@DCBABADCDEFGFCBCDEDCBE@@BC@CAEAEAC@AAEAGAECA@E@@AAAGAEAECEAG@@CEAIAE@A@CDEBCDC@CB@D@D@B@B@BBD@F@F@DAHAD@BABCBA@A@A@E@E@EF@J@FAJADAHC@A@A@A@A@A@@@CDBDBD@B@B@BABABCB@@ADA@A@ABA@@@AB@BAD@B@BGD@D@@@@CAECE@A@AB@HCBAD@BABAAKAC@EAA@CACBABC@AA@@ACAEBABI@@HA@E@CC@CAE@AF@HAL@BID@@AB@@AAEACAAE@@AAEHCFAFABA@@@C@A@AB@JCD@BA@A@AACCC@C@A@AB@ECCAME@ABABCB@DC@ABEBEBABC@@DE@A@I@ABABEBEBA@A@CFIBC@CAA@ACAICAAA@E@CBCAAADC@A@@C@G@GBC@AA@@AAAAG@AA@@CBA@CBABA@CAEA@@@A@AA@A@GBBEC@AAAACAECAAAA@A@A@CAC@AAA@AAAAEEIACACACAAAACACCACCCCGCE@AAAAEBCDEHIDC@@BAD@F@DABAB@@E@CBCB@BAD@BBFBFBB@B@B@BA@ABEBC@@A@A@AAA@@@@CAABE@@AA@A@@AA@A@A@A@AAA@C@@AAACAA@AAAAA@@AA@A@AAA@A@A@A@C@C@A@A@A@@@CBE@@@@BC@@BA@A@ABABA@CBABEBA@@@CBABA@A@@CAA@A@@@A@@@A@@@A@@AAA@@@BA@AAA@@@AA@A@@A@@BA@A@@@A@A@A@ABC@A@@@A@CAA@@@AA@BA@E@@BABA@A@ABCBABA@CBA@AB@@C@C@A@AAGACAA@A@@BGDCBGDCBCB@BAACBC@E@ABC@ABABABGDKHcTGDEDCEAECEAEACAAAECE@E@A@C@EBE@C@CAC@CAGAEAA@EAC@EBE@CBGDCDGFGBEDEBCDEDCBCBCDCDCDCBCDEBEBCBC@C@A@E@E@E@C@@ACAE@E@ABGCE@A@AACEECCCCECCA@AA@A@IAGA@@AA@A@A@C@EAGAG@ECM@C@AAA@A@A@I@IBCBA@A@A@A@AAAABABCBCBA@AB@@C@@@@@A@@B@B@BA@ADABABCDABABCBABABCD@BA@@BABABABABAB@@CDCDABA@AB@@@BABAD@BABCDAB@@A@C@ABA@A@C@C@ABA@@@A@@@AAA@A@@@@@A@A@A@@@ABA@CD@BA@A@@BA@@BA@AB@@CBABA@A@@BA@@@ABABAB@@ABE@CDI@A@CBE@A@@B@B@@CB@B@@AB@@ABCDABABAD@B@@KDABC@A@E@ABABCB@BAF@@EBA@ABCBC@@BAACBA@C@CBA@@@AB@DAB@@ABC@A@ABABA@CBABGBA@@@ABKDKDABA@A@CAE@A@CA@@GAC@@@A@CBA@C@A@A@A@ECA@EAE@E@C@AAA@ABA@@BCBEJCDGLILEJEJADCDCF@@AB@D@@AB@DAF@FA@A@AB@@@BAB@BB@@BB@@BADADEVCN@FAB@DAB@DADAHCHCJAJENAD@@ADAF@BA@@BA@GHADA@@BABAB@@ADABEHADABABADADAD@@ABCJAB@B@BBD@D@JBF@@A@ABABADAF@@@HBD@D@BFBH@B@A@@BAB@@ABA@@B@@@B@BA@@BA@CBADCD@B@F@FBDFHBBBF@BADADCF@BAB@DADADCDABABCDCFADADCDCBCBCBEDCDADCJ@B@B@B@BABIJA@@B@@@BBDBB@D@DBB@@H@D@BBDB@B@DBB@@BBBB@@D@B@B@B@BAB@BADADABAD@BAF@DADAFAD@DADADADAB@FF@DDNBH@@@DBBBD@DAD@BAFBD@DBDBBBBCBABCBABABAB@BBBBB@@@@B@LBBB@BBH@D@F@H@@DBHDHDB@@B@D@FADADAB@BAB@@@FAD@FAFDB@@@DCDCDA@C@A@ABADA@CD@@@AA@@@AA@AAA@AA@A@A@A@A@A@A@@@AAAAA@CCAA@@A@@@ABA@@@A@A@A@A@A@ABA@A@A@A@@@A@@@CB@@A@@BA@@@@BCB@B@@ABA@CDA@ABA@A@AAA@A@E@@@A@AAECAAA@@AA@@@A@E@A@@BA@@B@D@BA@@@ABC@AA@@C@CAA@A@@@A@@@@@@BAD@DBP@BBBB@@@B@HADABBDDBD@D@BABEBAB@BBDDDDBF@DBFABB@BBF@@A@EDCBED@@@BBABBABB@AB@@@@@D@FDJBDBBFBDB@B@D@D@D@@@DAD@@@B@DBBDDD@BBB@D@BB@DCH@B@B@HBL@D@D@@BB@BPDB@BB@D@FBBBBBB@B@@@@CBGBABAB@D@DBBBBD@@@BD@DDH@F@@DF@BR@HBB@BD@BABADAFABAB@@AB@BBDB@@BB@@BHFJDDBD@@@B@BA@A@@BADAFDFBN@JAFBPF@B@BABAJ@FBBBBBDDBBDBDAJ"],"encodeOffsets":[[118430,34878]]}},{"type":"Feature","id":"341621","properties":{"name":"涡阳县","cp":[116.215665,33.492921],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@ADADAB@D@DBFB@@H@B@J@H@B@B@@@DE@A@@@A@@CAAA@A@ABCBABEBC@CBADCDCBAB@BAD@@@DAD@DAB@D@B@BAHAFAB@DA@A@@BABABA@ABC@ABABABABADAAE@ABABE@EDGDEDE@A@ADCDEDCD@HAB@B@@BBAD@B@F@FBB@FBFDDDFDBDBB@@DBHD@BFBDBFBHBHAHBF@HBLDJBJ@F@B@F@HCH@N@HBF@DBBBDBDDBFBB@BDDFDDFDD@@HDHBHBHBHBHBDBDB@BB@@BDD@@DFBD@BBD@BBB@@B@DADABABA@@B@D@@@B@B@@AB@@@@BBD@DBD@BDBB@LDJBD@FB@AFAF@J@BABBB@DB@BJAFDH@BAD@B@DB@BBDB@B@BAB@BB@@L@BA@A@CB@JAB@B@BABEB@BA@@BA@C@EAA@C@C@@D@H@F@DAL@B@D@@@B@B@B@D@BBD@D@@E@A@G@CAC@GAC@CAERADAB@D@BAJAB@DAB@B@B@BAB@BEB@@ABG@MB@FCD@DABADC@ABEHA@E@OF@D@BA@E@EDAF@@A@C@CBEB@BA@@AE@C@AEM@A@CAI@G@EBC@CBE@@@ADCDEFGBCB@BCFEDEDEFAHCJ@FAB@L@JAHAFADADABG@CAEBCAE@A@A@A@AHAHA@OI@E@C@A@@A@E@CBED@@GFAB@@ABA@EA@CAA@E@EACAIA@AACC@@A@C@AAA@CAA@CAC@A@A@A@ABABABA@EAAAA@E@ECA@CBAB@DCBADABAD@@C@C@A@AFEBCBAAI@EAACCCIAMFSRUO@EAGCGCGCCACAC@GCGCA@@@CACCCCACCACAA@CAE@GAE@EBG@E@G@@@ABE@GBIBGBEBGDCDCBCDEDCDE@EBGCCCCCCC@AACDE@A@A@E@CAEECGCCEAACCCCCGEICEAACMGECGAECE@@@AEECG@@@@@@CEACCCCAEAEA@@CBE@GDEDA@@BC@G@C@CAC@G@GBE@CA@AAE@@@AC@A@CAC@C@E@A@A@AB@B@B@F@BC@A@CBE@A@E@A@A@A@CACAIGAA@@MEC@@@EEICIEGEE@GDCBCDCBCBCBE@E@G@@@C@EAG@GCA@@AACACAAACAA@@E@K@IAG@E@A@A@A@CBA@AA@AACAAEAAAA@A@@A@@CAA@AAC@AB@B@@EB@BA@A@@FAD@B@BA@CB@@MCEB@@A@ABABA@ABABABADABABEDABA@G@I@AA@@AA@AAC@@CAC@A@A@A@G@CAC@EAGAA@AAAAA@A@@BAB@DA@CBA@@B@FBD@BA@CBCACCAA@@ECA@C@A@M@I@A@AABK@EAAAAECC@CAC@CBA@A@ABA@ABIBC@E@@EAA@C@CAAAA@AA@@A@AACAA@@A@@@A@CBC@EBCBE@G@CBA@IBA@A@C@@B@D@DBH@DBH@B@BA@C@GBC@A@ABAD@@AB@@ABEBE@A@AA@CAECE@@AAC@EBA@A@IA@A@A@CAA@@@@G@U@@C@ADI@@BE@AAAA@CAC@A@A@GDIFEDMHC@CBCB@AAAAAAA@@@AE@A@@AAA@ACAECEAAAGAC@E@A@@@ABAB@BABCBABABABABAD@BABAB@B@B@B@BAD@B@B@BABBB@D@BBB@B@B@B@B@D@BA@@B@B@BCB@B@BBDBBBB@BBB@FAB@BBB@BAB@BADABABA@CB@B@B@D@BBB@B@B@B@BABAD@J@J@B@BBB@B@DDN@FBHBH@F@D@B@BBB@@HBJBB@B@@BDBFDDDDDFFBD@B@BDFAH@B@FBFBD@@@D@F@F@F@B@DADADAFCFADCDCDCDADADCDCFADCFAFEHCHCDAH@DAF@FBD@FBBBFBH@DBD@D@DAF@F@D@B@FDFBFBBBDBFDFBFDFFCHCdSLGHCBABABAD@BAF@D@DABB@ADADAHCDAHC@AB@B@DBHBBBB@D@D@@@BAB@DAB@BADABAB@B@BA@AF@B@@ABB@@B@DBB@@@B@D@BAB@B@B@@@B@B@@AB@@@@BBB@@B@BBB@@A@@BB@BB@@@B@@@B@@@B@B@DB@@@BABAB@D@@ABAFAB@DABAB@B@BAB@@AD@@@@AF@D@@@B@B@B@D@D@B@B@BBB@B@BBB@@BBBB@BBBBDBB@@@DBB@B@B@B@BBB@@@BBB@@AFBB@D@@B@BBB@B@@@ADAF@BABA@A@A@EAEAAAC@ABA@AD@D@FA@ABCBE@C@AB@@CDGJCFADBFBB@BDFDHDDBDDDDBBBBBBDBDBDFJBFBB@BBB@BBD@D@B@BBBBBFDDBBBBBD@AFHAB@B@@B@B@@FBDBB@BADAB@DA@@BBH@BBBB@@BBD@HAH@D@@@@BCDBBDBDAF@B@BBJDDB@BBB@DADEJ@D@BABAFAFAB@B@J@BCF@@ADABAFAF@BCDA@ADAB@BNFDBFD"],"encodeOffsets":[[118859,34595]]}},{"type":"Feature","id":"341623","properties":{"name":"利辛县","cp":[116.208564,33.144515],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AAA@CAGAECEAEAG@EBA@A@GBEBCDC@EBEDA@ADCBEDIBGBCF@D@FAD@FEDCBEBE@CBIAE@E@E@E@G@@@G@EBEBGD@B@DAFAD@@ABAD@DADAD@B@@AB@B@BABIFABCDEBADCBABAD@@@@@BAB@@A@BD@@A@@BADEF@B@B@@@@AB@BA@A@AB@@BB@B@@BB@@@@AB@@@B@DBB@@@@@B@B@BA@@BA@@@@B@@BB@@@B@@@@AD@@A@BB@@@@BBB@@B@@@BB@@@BB@@@B@BA@@BAB@@@@A@@@A@@B@@@B@@CBA@A@ABCBA@ABABA@@B@@A@@@A@@@A@AA@@@@E@@@G@EBA@E@G@GBG@GBIDIB@@G@KBGBEBEBCBG@EDE@C@EBEBG@C@C@EBG@ABC@CDAFFFJJ@LAH@D@DI@ED@DFTBHAD@@CFAJCDMDGAUCE@GAIEE@EDBHFFBBH@@FADIDKBEBC@EBEDCBEDIBA@CBEFIDA@KBID@@CBKDGBIBGB@@IBGBGBA@IBEBC@ABIBI@A@@@CDAB@BA@C@C@ABA@@@A@C@@@A@CBC@AAA@E@E@E@A@EBE@K@A@@L@D@@JBBJB@@FBD@BF@@J@HC@A@M@ABADC@C@K@G@M@A@A@AB@@@H@BABA@AB@B@B@@@@NBH@BJ@R@@@B@@AFEBGBE@SBKKAF@DAD@FAF@F@D@DBDBDDDDDDDHDFBBB@@D@FDBDBFBF@DADCDCFAFAB@@ADAFAD@F@@@BCFAFADAFAH@B@@@D@F@F@F@FDH@D@FBBDDFB@@BD@BBBFAB@FANCHCBADADCDABA@@DAB@B@HADAB@D@BABAFAHEBADABC@@BADCBADCPMDADCHGBAFCBA@@@BBFBD@BB@FB@B@BB@BBBB@@B@@BAB@B@@ABCDAB@BAD@DABAB@B@BA@MD@BA@@BAHBB@F@@@BC@AB@@@D@BBBBD@@FFBB@BAB@BABA@@B@D@BB@@B@BB@@BDBDDB@@F@JAB@BABABA@@B@D@@BBB@B@LDHBBBDAAB@BAF@BCBBB@BBD@B@BABCBC@CB@@BDBB@BAD@B@B@BBB@@AB@BABABABC@A@AB@DBB@@AB@BCB@@@BAH@DABB@F@D@HBBBFBFDDB@BBB@BB@F@@B@@BBBBBB@BDADAD@NGFCJEHCB@B@D@DBB@BB@BAF@@CJ@B@DV@H@@@@@BB@D@B@BJBB@B@FAD@BB@@DFBF@DBBB@F@FABA@@BA@@BCBAB@D@HAD@B@@A@AAG@CAG@C@C@AD@B@B@JAB@DAH@F@DAFAD@DAB@@@B@@@BBBD@B@BB@@BBBBB@D@DBB@FF@D@JABAB@BAB@B@DAD@DBD@FDBBBB@FALBBB@J@N@B@D@B@FD@@BBDDDBDAB@@AAC@E@AB@DAB@@CBA@AB@B@BBBBB@HBFBD@DBH@B@B@B@D@DB@@BD@BBB@@BBJ@H@B@BAFCBABABCBABABAB@BABAB@@@FAND@@DAB@@A@ABC@EB@B@@AFA@@@ABAD@BBB@DB@@@BB@B@BBFBBBBD@BBBB@DAB@B@B@F@H@JBL@F@@@BBBDBBBDBD@BB@HDH@FBD@@@H@F@F@DADADADCDAHC@ABCBEDE@EBA@@@@D@B@D@BABAB@BABA@AB@@A@@DABA@@BADA@C@@AA@A@@A@I@BE@E@AAE@CC@@CBABBD@D@DABAB@B@B@FADADAB@@ADC@ABABC@ABA@@@CB@D@FABABA@A@E@AFAB@BA@@@G@C@A@C@CB@B@F@J@BAJ@BAB@BA@AB@LAF@@G@AB@D@BAD@B@BAD@NADAFADCB@BCB@@@FAD@BBFBB@B@L@F@JADAD@B@FCB@@A@A@A@A@CAIAE@CBG@ABCDCDC@AVHPFB@B@B@D@B@@GACACBGAC@EA@CA@AAA@A@A@CCE@C@CAC@AB@FAD@@@FBJFDBD@B@D@F@BA@ABCBC@EAC@C@O@G@A@CA@C@G@A@@ABADEJEBCBA@@@A@AABIAA@@AAG@E@A@@@A@@BA@@BABA@E@AAAAA@@AAA@E@C@C@A@@AAA@ABC@C@ABADA@@BA@A@A@AAA@AA@ICAAA@@A@AAG@C@CAA@AAAA@A@A@GD@BC@MBQDC@A@GDA@BBEBMF@BCBABE@@@A@A@AA@A@A@A@G@CBA@C@CBE@G@C@AAC@A@C@EAC@A@A@@EAKBA@AAAA@A@A@AE@I@GAC@EAA@AA@@@A@A@CGAC@AA@@AA@A@@BADCJCHCDCBCDCBABGBCDCDGBEDGBC@ABC@G@CBGDC@EDEFKFEFCBADE@K@A@A@@@E@ABA@C@AAC@AACACCACE@A@ABE@CBCACAABC@AAE@C@GBA@AAACACC@AA@@CAEAC@A@CCEAE@@ACAA@CBGRQDA@@JIBCFEDC@ABADE@@FEBA@@@A@AAG@E@C@CDG@A@C@@ADABABABCBCBSBA@CBA@C@A@AAAACE@@EA@@CCEEECAACGCCECGCGAKC@@@@IAICE@GCEAGAEAAAA@"],"encodeOffsets":[[119098,33654]]}},{"type":"Feature","id":"341622","properties":{"name":"蒙城县","cp":[116.564247,33.26583],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@E@EBCBI@GBCBG@C@C@AAEBCBEBC@E@EBC@ABCBEDIDEBABCBEBCDEB@BCDCBCBCBGBEAGAE@C@EACAACEACCECCAEAAAC@A@@@@AG@C@CACBG@EAE@EAE@A@@@@@CACACACACCDCDEFED@@GHABABEECACEEEGKACMFCCAACACEAA@@ECCCACCCACACBC@CBABEBCDADEDEBGBC@E@C@ABAAC@EBC@GACAEAACCEEEEECCEAAAEAC@EBE@GBCDABE@CXIJEB@XIbMB@FAPI@@JKBQCW@CAACEA@@@A@EBA@AD@@CDA@A@AAA@BA@CBAAAC@A@C@A@A@ABA@C@CDC@A@AAA@A@A@C@@@A@@BABB@@B@BBB@B@BABA@C@AECAA@A@AB@BBB@DABA@C@AAAAAAA@EAE@AA@A@C@@@ABAAAACBE@@@C@AEEAAACCEACACAC@AAE@@CG@A@AAG@A@A@ABGBA@A@A@CAE@A@AAA@ACG@AAA@@AE@AAA@CCBC@EBMDQFODQBYBSBQ@S@A@@B_@SBC@GBIBIBQDYF@@gJEBmJMDQDIBYFODOFIBQDKBWFA@@@QDMDA@EBWHIBSHQDCBCBKBUHIBCBC@BD@B@DAB@B@F@@@B@B@LCFABEDEFELCF@FCDAH@D@HAD@BADCHAFCHCDADAHABCDADCDGDIDCDAB@@@BBB@@BBD@HB@D@B@B@@BBB@FBD@HBJ@F@@B@B@BBBBBB@LAFB@@@B@BBD@F@D@BBD@B@D@HAF@D@DAB@D@H@B@B@BBBB@B@@@F@BADA@ANEFAAAB@HCB@D@RCNAD@@AHCB@B@B@BB@BBB@D@DBH@B@BB@BBJDB@@BBB@B@B@BAB@@CBAB@B@DAD@BBB@BB@D@D@F@B@BB@@BBBB@B@FABAB@@AB@@@B@@@B@FBH@BB@JBBA@B@B@@ABADIFCFAB@BB@H@D@B@@D@B@H@P@DBD@FADAD@BABE@C@A@C@CAIEEA@@C@EBA@@BBD@D@DDF@D@B@BBB@BDBB@@FBDAHBDBD@HA@C@A@A@A@OEUG@BCDCDAD@BAH@DBFBJ@D@B@B@B@BA@EDA@C@CBIBE@K@A@A@EAAAC@EB@@A@ADA@CDEBCBMBC@ABA@C@ABC@A@@B@HE@KBA@@BABA@ABI@ABI@E@A@A@@D@D@B@D@H@@ABA@EB@B@F@BABABEBC@A@@D@@AB@BADAB@BCD@BA@CBCBEBA@A@A@ABCBC@C@AAAB@DD@@DBF@B@FAFJ@B@@@@BBB@@@DCBAB@@ABCB@@@BA@@BABABA@ABABC@A@C@@@@@AB@FCFAFAD@BF@HFJFJDFF@@D@NF@@BBJHDBDBB@B@B@F@B@F@DAB@D@@A@E@A@ABAB@B@F@D@D@DBB@D@@B@@BF@BDBF@HAH@D@DBD@H@D@@AB@FCHCF@DA@@FBFBDBDDBDDF@@@@@@DHFF@B@@DFBFDHHFDNBBDFFJDHDDDDBBDFHDFDBF@D@F@B@BCFBD@BDDDDDDHDFAF@DCFCDCDADCHCFAHAJAHAF@BA@@H@F@H@FAF@HBF@DBB@DBDBBDDDDDDB@@B@HDHDD@DBDBHDHDHDFBP@FCFCF@F@F@J@H@HBHBHDFBBDFFF@HHF@B@B@^DDBRFJAP@LMNAJAJAN@lFZGFCBAHEDCBEDEDEDCBCFCDAD@D@J@HBFAH@HCFCDABADEFGDAHCJCFAHAJAFAJCHA@@D@DAB@FAB@DAF@JAH@EAE@AAC@CCEAACB@BCBA@AAC@AAE@CEA@CBABG@G@ABABC@ABA@A@AACAAAE@CACAEAAACACACCI@ABAFA@A@AAA@@CKAAE@@AAE@A@CBADGBA@CCK@E@EBABC@A@A@@BABADCBABAFCFC"],"encodeOffsets":[[119606,34106]]}}],"UTF8Encoding":true});}));
