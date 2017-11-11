import React from 'react'

export const slug = 'cat'

export default class Cat extends React.Component {
  /**
   * shouldComponentUpdate
   * @param  {object} nextProps next props
   * @param  {object} nextState next state
   * @return {boolean}          should component update
   */
  shouldComponentUpdate() {
    return false
  }

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    return (
      <div style={ { position: 'relative' } }>
        <svg
          width={ '500px' }
          viewBox={ '0 0 1291 1330' }
          version={ '1.1' }
          xmlns={ 'http://www.w3.org/2000/svg' }
          xmlnsXlink={ 'http://www.w3.org/1999/xlink' }
        >
          <title>{'cat'}</title>
          <g stroke={ 'none' } strokeWidth={ 1 } fill={ 'none' } fillRule={ 'evenodd' }>
            <g>
              <path
                d={ `M1096.31974,406.166501
                C1099.18201,402.71438
                1102.20399,399.177942
                1105.3987,395.548529
                C1114.09541,388.359339
                1122.08231,381.294097
                1129.41302,374.358931
                C1136.79555,367.374738
                1143.51259,360.522466
                1149.61888,353.808377
                C1158.41464,344.137133
                1165.94319,334.752598
                1172.36821,325.673481
                C1217.90831,261.321312
                1208.00814,212.313017
                1200.94791,185.31072
                C1191.5134,149.22786
                1176.68888,144.541093
                1175.95438,128.119243
                C1175.21987,111.697394
                1182.67087,95.1581653
                1224.8881,1.48264905
                C1225.08708,-2.24619396
                1167.77655,1.48264905
                1085.99699,105.764618
                C1016.05592,95.4449909
                1013.47173,94.5054961
                951.906669,113.089644
                C911.56889,26.1251781
                840.6569,3.49599712
                832.245002,1.48264905
                C828.130501,33.7977165
                839.090459,88.3019734
                860.066023,134.108367
                C839.090459,173.093517
                799.821833,203.05878
                799.75632,203.081905
                C799.690807,203.10503
                332.071987,431.202538
                251.467466,510.532613
                C236.073195,525.683483
                161.326044,610.246726
                74.1373912,740.096271
                C-13.0512617,869.945815
                -9.33614636,927.853738
                20.1484636,1030.95206
                C49.6330735,1134.05038
                115.254616,1183.23997
                154.480646,1211.41438
                C193.706675,1239.58878
                330.755903,1330.42314
                553.137142,1325.08502
                C775.51838,1319.74691
                931.181358,1240.34101
                955.476003,1122.91853
                C979.770647,1005.49606
                979.979589,1001.31373
                961.730665,921.798604
                C943.481741,842.28348
                875.019551,824.311654
                883.040762,916.221934
                C891.061973,1008.13221
                890.013477,1085.09603
                853.220566,1138.04564
                C832.287972,1168.17026
                787.309661,1178.62362
                750.854982,1191.25207
                C747.29497,1192.48531
                718.134885,1199.84529
                712.398439,1196.97707
                C711.944716,1196.75021
                767.267639,1165.65389
                799.75632,1110.59409
                C832.245002,1055.53428
                806.003698,902.048675
                825.644284,851.916428
                C843.103591,807.351855
                854.563818,785.430318
                867.09876,772.565659
                C867.223634,772.495704
                867.349231,772.424662
                867.475544,772.352561
                C877.911636,766.395519
                900.448428,751.241946
                901.025398,750.615327
                C902.506251,749.007041
                928.445532,720.729642
                933.664686,719.313531
                C938.88384,717.89742
                939.326666,725.314903
                942.095351,723.11647
                C947.654431,718.702364
                953.294433,703.290633
                956.598234,702.412077
                C965.672226,699.999098
                960.757837,691.633854
                968.317229,680.373164
                C968.317229,680.373164
                972.625859,691.633854
                982.035951,691.633854
                C991.446043,691.633854
                986.431759,680.373164
                986.431759,680.373164
                C986.431759,668.225755
                999.513815,684.860816
                1000.83107,682.749473
                C1007.15757,672.609147
                1004.06819,660.579361
                1004.35837,649.681938
                C1004.47556,645.281093
                1012.20137,648.312032
                1012.63166,647.420545
                C1016.92827,638.518655
                1016.19785,620.775243
                1018.76325,611.801516
                C1019.25608,610.077607
                1027.53793,606.640438
                1028.43587,604.87128
                C1031.1621,599.499916
                1033.17984,579.444167
                1036.30465,575.233073
                C1038.13492,572.766541
                1046.04421,577.075182
                1046.73109,575.233073
                C1049.11339,568.844089
                1037.24994,509.897226
                1050.38067,528.789875
                C1063.51141,547.682524
                1059.26808,515.878145
                1059.40062,514.95129
                C1060.55205,506.89927
                1058.23624,498.335892
                1060.32321,490.516871
                C1061.5857,485.786828
                1069.6968,500.393411
                1070.71631,494.793131
                C1074.03429,476.566997
                1070.87014,460.899802
                1076.8097,443.416375
                C1077.203,442.258673
                1078.57298,445.080033
                1079.65901,445.379093
                C1079.65901,445.379093
                1094.89679,487.02885
                1093.57941,436.897685
                C1093.33696,427.671392
                1094.0409,420.813429
                1094.89679,412.833053
                C1095.14018,410.563633
                1095.72378,408.363802
                1096.31974,406.166501
                Z` }
                fill={ '#EFECEC' }
              />
              <path
                d={ `M
                  957.049385,906.977547
                  C959.317793,912.938919
                  961.288843,919.399401
                  962.878751,926.327027
                  C973.848507,974.124996
                  978.148646,994.702002
                  974.556747,1029.01791
                  C970.020699,1024.94685
                  965.893282,1020.47077
                  962.380239,1015.70562
                  C945.935091,993.399174
                  917.955313,988.807483
                  909.491072,951.419574
                  C907.007648,940.44989
                  913.977619,905.403998
                  929.625282,904.179994
                  C941.283782,903.268034
                  948.469966,906.072521
                  957.049385,906.977547
                  Z` }
                fill={ '#4A4A4A' }
              />
              <path
                d={ `
                  M1033.50079,100.726816
                  C1046.38806,101.739747
                  1062.06082,104.111976
                  1084.94356,107.488266
                  C1086.96576,104.909646
                  1088.97299,102.392509
                  1090.96476,99.9354468
                  C1093.49214,101.183258
                  1095.90787,102.516513
                  1098.17727,103.940871
                  C1128.46143,122.948314
                  1128.58289,123.401314
                  1165.25614,132.082053
                  C1168.97988,132.945171
                  1172.48546,134.089564
                  1175.78507,135.48581
                  C1179.22445,147.90701
                  1191.62832,155.419904
                  1199.89448,187.034368
                  C1206.10334,210.780532
                  1214.50851,251.545404
                  1185.47313,304.798015
                  C1171.20624,304.855453
                  1156.83412,299.792723
                  1147.30455,290.71825
                  C1126.18744,270.609609
                  1132.86932,251.992814
                  1126.66982,226.322538
                  C1124.4044,216.942107
                  1115.815,184.849287
                  1107.45119,171.019738
                  C1102.49563,162.825727
                  1091.37933,151.103798
                  1083.98423,145.572358
                  C1078.87692,141.752151
                  1076.26478,137.248717
                  1033.50079,100.726816
                  Z` }
                fill={ '#4A4A4A' }
              />
              <path
                d={ `
                  M796.894916,1117.16726
                  C764.225463,1170.57455
                  710.682263,1200.67816
                  711.128659,1200.90136
                  C716.865105,1203.76958
                  746.02519,1196.4096
                  749.585202,1195.17636
                  C786.039881,1182.54791
                  831.018192,1172.09455
                  851.950786,1141.96992
                  C860.206647,1130.08871
                  866.66279,1116.99838
                  871.62058,1102.80139
                  C902.079242,1118.38331
                  925.28281,1138.91778
                  942.805797,1161.40734
                  C897.602818,1259.63129
                  751.661963,1324.21337
                  551.867362,1329.00931
                  C329.486123,1334.34743
                  192.436895,1243.51307
                  153.210866,1215.33866
                  C113.984836,1187.16426
                  48.3632935,1137.97466
                  18.8786836,1034.87634
                  C-10.6059264,931.778026
                  -14.3210417,873.870104
                  72.8676112,744.020559
                  C160.056264,614.171014
                  234.803415,529.607771
                  250.197686,514.456901
                  C312.66163,452.980581
                  413.04022,381.459017
                  604.080968,301.000029
                  L603.616566,309.880184
                  C600.576976,360.819517
                  596.43702,409.952815
                  608.418561,460.243321
                  C614.665301,486.462958
                  631.801212,504.867149
                  640.169225,529.653978
                  C650.919661,561.497762
                  656.688038,640.421858
                  647.579843,673.362466
                  C643.09375,689.586825
                  553.714612,753.518719
                  505.340702,815.058588
                  C456.966791,876.598456
                  460.933531,888.548185
                  454.807529,901.70922
                  C429.947353,955.118549
                  430.484188,958.370001
                  368.84053,960.321602
                  C342.012534,961.17096
                  331.168819,952.383789
                  311.663781,933.617824
                  C273.718066,897.109922
                  237.606935,882.466448
                  232.532012,886.268661
                  C230.910566,887.483476
                  237.048882,904.286979
                  253.422288,919.392845
                  C269.795695,934.498711
                  285.248982,928.355463
                  299.174335,942.774622
                  C313.099687,957.19378
                  314.995038,958.989375
                  326.112356,969.286745
                  C337.229675,979.584116
                  359.829178,979.719157
                  368.691466,982.659929
                  C391.403076,990.196322
                  412.409852,1002.01576
                  458.875277,1024.3553
                  C505.340702,1046.69484
                  572.652075,1072.59021
                  622.121708,1072.59021
                  C676.061501,1072.59021
                  763.412995,1104.22436
                  796.894916,1117.16726
                  Z` }
                fill={ '#4A4A4A' }
              />
              <path
                d={
                  'M1054.26017,260.129999 C1064.79921,260.129999 1069.57,246.809069 1069.57,239.747817 C1069.57,232.686565 1046.16651,230.846729 1039.92509,235.758868 C1033.68368,240.671006 1043.72112,260.129999 1054.26017,260.129999 Z'
                }
                fill={ '#DFB2B2' }
                transform={
                  'translate(1053.785000, 246.565000) rotate(7.000000) translate(-1053.785000, -246.565000) '
                }
              />
              <path
                d={
                  'M969.991961,290.139851 C1044.97474,301.698578 1048.59881,279.742412 1052.62558,259.88173 C1048.59881,279.742412 1049.92742,301.63231 1118.18608,289.849429'
                }
                stroke={ '#D0CFD1' }
                strokeWidth={ '3' }
                strokeLinecap={ 'round' }
                strokeLinejoin={ 'bevel' }
                transform={
                  'translate(1044.089021, 276.612488) rotate(2.000000) translate(-1044.089021, -276.612488) '
                }
              />
              <path
                d={
                  'M874.640075,387.079707 C876.188118,354.932232 882.469984,336.332936 863.023718,310.812099 C845.697313,288.07332 761.947955,239.020929 755.70198,287.977692 C753.548533,304.856695 755.272858,352.650946 755.70198,362.229505 C758.609373,427.126155 760.827942,428.250385 787.728043,472.056689 C787.728043,472.056689 821.282004,497.612609 847.443318,479.836903 C865.227803,467.752962 873.945855,401.496221 874.640075,387.079707 Z'
                }
                fill={ '#4A4A4A' }
              />
              <path
                d={
                  'M421.272416,628.122778 C410.480808,606.154411 361.172965,628.944133 317.096094,643.319107 C284.346788,653.999776 278.121102,678.390854 281.970192,708.162013 C283.703865,721.571271 278.621262,729.348379 280.373076,744.789204 C282.142429,760.384618 317.410222,766.127259 328.286553,763.262511 C365.356288,753.498608 368.968701,725.375627 390.687636,708.162013 C415.990864,688.107623 432.064023,650.091145 421.272416,628.122778 Z'
                }
                fill={ '#AF7618' }
              />
              <path
                d={
                  'M670.704062,278.741732 C777.368414,231.100171 737.394158,341.689763 743.30895,374.334441 C744.782329,382.466254 744.893607,390.804636 746.34347,398.940674 C750.6009,422.831615 763.144024,450.858315 745.459733,472.589011 C726.224115,496.225999 700.929359,514.89158 686.993294,509.322398 C631.071422,486.974689 589.943091,410.079554 615.645211,321.591598 C619.984359,306.652662 625.134119,299.095515 670.704062,278.741732 Z'
                }
                fill={ '#AF7618' }
              />
              <path
                d={
                  'M1116.73206,226.466119 C1140.52479,226.466119 1163.43314,215.164063 1164.06752,207.949217 C1164.70189,200.73437 1145.93733,178.627429 1120.6714,175.453061 C1095.40548,172.278693 1073,182.161906 1073,195.055562 C1073,207.949217 1092.93933,226.466119 1116.73206,226.466119 Z'
                }
                fill={ '#FFFCD1' }
                transform={
                  'translate(1118.541567, 200.660479) scale(-1, 1) translate(-1118.541567, -200.660479) '
                }
              />
              <path
                d={
                  'M1120.26801,224.862161 C1126.7468,224.862161 1131.9989,217.971584 1131.9989,195.695291 C1131.9989,188.486468 1132.10699,182.208327 1130.17928,180.106802 C1126.41216,176 1119.70938,176 1115.32718,176 C1108.84839,176 1108.53712,179.586874 1108.53712,195.695291 C1108.53712,211.803709 1113.78922,224.862161 1120.26801,224.862161 Z'
                }
                fill={ '#68421F' }
                transform={
                  'translate(1120.268560, 200.431081) scale(-1, 1) translate(-1120.268560, -200.431081) '
                }
              />
              <path
                d={
                  'M1120.26801,215.01042 C1126.7468,215.01042 1131.9989,209.509143 1131.9989,191.724265 C1131.9989,185.968907 1132.10699,180.956585 1130.17928,179.278776 C1126.41216,176 1119.70938,176 1115.32718,176 C1108.84839,176 1108.53712,178.863677 1108.53712,191.724265 C1108.53712,204.584854 1113.78922,215.01042 1120.26801,215.01042 Z'
                }
                fill={ '#412913' }
                transform={
                  'translate(1120.268560, 195.505210) scale(-1, 1) translate(-1120.268560, -195.505210) '
                }
              />
              <g
                transform={
                  'translate(976.000000, 199.000000) scale(-1, 1) translate(-976.000000, -199.000000) translate(930.000000, 172.000000)'
                }
              >
                <path
                  d={
                    'M43.7320552,53.4560462 C67.5247853,53.4560462 90.4331444,41.9407434 91.0675185,34.5897679 C91.7018927,27.2387924 72.9373285,4.71473899 47.6714018,1.48047729 C22.4054751,-1.7537844 1.47082346e-12,8.31590469 3.97903932e-13,21.4528363 C-6.76347867e-13,34.5897679 19.9393252,53.4560462 43.7320552,53.4560462 Z'
                  }
                  fill={ '#FFFCD2' }
                  transform={
                    'translate(45.541567, 27.163507) scale(-1, 1) translate(-45.541567, -27.163507) '
                  }
                />
                <path
                  d={
                    'M46.4999895,51.8203794 C52.8512641,51.8203794 57.9999895,38.3231384 57.9999895,21.6734478 C57.9999895,15.8926341 58.0229592,8.4352318 55.922123,6.36199367 C50.8093217,1.31635758 45.8025056,1.31635758 41.6564092,1.31635758 C35.3051345,1.31635758 34.9999895,5.02375719 34.9999895,21.6734478 C34.9999895,38.3231384 40.1487149,51.8203794 46.4999895,51.8203794 Z'
                  }
                  fill={ '#8B572A' }
                  transform={
                    'translate(46.499995, 26.568368) scale(-1, 1) translate(-46.499995, -26.568368) '
                  }
                />
                <path
                  d={
                    'M46.4999895,43.8485552 C52.8512641,43.8485552 57.9999895,32.4685284 57.9999895,18.430554 C57.9999895,13.5565346 58.0229592,7.26892093 55.922123,5.52089662 C50.8093217,1.26673286 45.8025056,1.26673286 41.6564092,1.26673286 C35.3051345,1.26673286 34.9999895,4.39257959 34.9999895,18.430554 C34.9999895,32.4685284 40.1487149,43.8485552 46.4999895,43.8485552 Z'
                  }
                  fill={ '#523319' }
                  transform={
                    'translate(46.499995, 22.557644) scale(-1, 1) translate(-46.499995, -22.557644) '
                  }
                />
              </g>
              <ellipse
                fillOpacity={ '0.667402627' }
                fill={ '#EFEBEB' }
                cx={ 972 }
                cy={ 188.5 }
                rx={ 4 }
                ry={ 4.5 }
              />
              <ellipse
                fillOpacity={ '0.667402627' }
                fill={ '#EFEBEB' }
                cx={ 1115 }
                cy={ 192.5 }
                rx={ 4 }
                ry={ 4.5 }
              />
              <path
                d={
                  'M844.818537,17.6267395 C844.818537,17.6267395 847.318625,77.0409669 866.92996,119.565188 C873.728074,126.006213 921.174439,101.32296 922,94.2348171 C911.084719,50.6320665 844.818537,17.6267395 844.818537,17.6267395 Z'
                }
                fill={ '#E9C6C6' }
              />
              <path
                d={
                  'M1207.57359,11.978397 C1207.57359,11.978397 1123.54713,57.9203754 1118.89071,94.3763296 C1121.2469,104.780326 1145.21956,115.356409 1160.23301,112.270783 C1179.37128,87.5517992 1207.57359,11.978397 1207.57359,11.978397 Z'
                }
                fill={ '#E8C6C6' }
              />
              <path
                d={
                  'M953,49.0137172 C953,49.0137172 991.989121,121.92405 978.992748,166.70185 C991.989121,121.92405 1000.34554,70.5647231 989.669145,46'
                }
                stroke={ '#D9D9D9' }
                strokeLinecap={ 'round' }
                strokeLinejoin={ 'round' }
              />
              <path
                d={
                  'M1178.72836,175.840834 C1178.72836,175.840834 1217.71748,286.38256 1204.72111,354.271639 C1217.71748,286.38256 1226.0739,208.515015 1215.39751,171.271639'
                }
                stroke={ '#ECECEC' }
                strokeLinecap={ 'round' }
                strokeLinejoin={ 'round' }
                transform={ `
                  translate(1199.500000, 262.771639)
                  rotate(90.000000)
                  translate(-1199.500000, -262.771639)
                  ` }
              />
              <path
                d={
                  'M892.728361,175.211858 C892.728361,175.211858 931.717482,285.753583 918.721108,353.642663 C931.717482,285.753583 940.073902,207.886038 929.397505,170.642663'
                }
                stroke={ '#DADADA' }
                strokeLinecap={ 'round' }
                strokeLinejoin={ 'round' }
                transform={ `
                  translate(913.500000, 262.142663)
                  scale(-1, 1)
                  rotate(90.000000)
                  translate(-913.500000, -262.142663)
                  ` }
              />
              <path
                d={
                  'M1076.09375,46.0135713 C1076.09375,46.0135713 1115.08287,118.923904 1102.0865,163.701705 C1115.08287,118.923904 1123.43929,67.5645773 1112.7629,42.9998542'
                }
                stroke={ '#ECECEC' }
                strokeLinecap={ 'round' }
                strokeLinejoin={ 'round' }
                transform={ `
                  translate(1096.865392, 103.350779)
                  rotate(-12.000000)
                  translate(-1096.865392, -103.350779)
                  ` }
              />
            </g>
          </g>
        </svg>
      </div>
    )
  }
}
