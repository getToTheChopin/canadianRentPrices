/*
To-do:
Checkbox for inflation adjustment??
*/

//https://www.seabreezecomputers.com/excel2array/
//https://www.convertcsv.com/csv-to-json.htm

var geoLabels = [
    "Québec",
    "Montréal",
    "Ottawa-Gatineau",
    "Toronto",
    "Winnipeg",
    "Calgary",
    "Edmonton",
    "Vancouver",
];

var bachelorRentArray = [
	[349.00, 348.00, 342.00, 350.00, 346.00, 346.00, 350.00, 364.00, 368.00, 380.00, 388.00, 405.00, 419.00, 434.00, 452.00, 455.00, 452.00, 472.00, 492.00, 523.00, 510.00, 513.00, 534.00, 546.00, 555.00, 549.00, 567.00, 595.00, 607.00, 640.00, 681.00], 
	[347.00, 351.00, 349.00, 350.00, 356.00, 359.00, 365.00, 372.00, 380.00, 404.00, 423.00, 441.00, 459.00, 466.00, 481.00, 490.00, 500.00, 514.00, 526.00, 549.00, 539.00, 555.00, 569.00, 573.00, 586.00, 598.00, 641.00, 655.00, 702.00, 712.00, 785.00], 
	[447.00, 453.00, 468.00, 475.00, 470.00, 466.00, 479.00, 498.00, 551.00, 596.00, 595.00, 606.00, 607.00, 600.00, 609.00, 623.00, 645.00, 662.00, 691.00, 700.00, 727.00, 737.00, 749.00, 768.00, 781.00, 799.00, 825.00, 879.00, 946.00, 1007.00, 1088.00], 
	[493.00, 510.00, 516.00, 531.00, 541.00, 555.00, 589.00, 628.00, 683.00, 695.00, 729.00, 731.00, 727.00, 724.00, 740.00, 740.00, 764.00, 758.00, 777.00, 819.00, 837.00, 873.00, 896.00, 937.00, 957.00, 1013.00, 1081.00, 1142.00, 1204.00, 1217.00, 1305.00], 
	[324.00, 326.00, 328.00, 334.00, 328.00, 331.00, 338.00, 337.00, 339.00, 356.00, 378.00, 378.00, 387.00, 404.00, 419.00, 451.00, 462.00, 446.00, 487.00, 522.00, 526.00, 577.00, 585.00, 613.00, 634.00, 656.00, 697.00, 734.00, 757.00, 786.00, 789.00], 
	[371.00, 358.00, 352.00, 355.00, 367.00, 387.00, 431.00, 453.00, 474.00, 492.00, 513.00, 508.00, 515.00, 523.00, 617.00, 688.00, 774.00, 705.00, 709.00, 705.00, 776.00, 871.00, 905.00, 900.00, 857.00, 824.00, 877.00, 898.00, 881.00, 919.00, 972.00], 
	[365.00, 371.00, 365.00, 353.00, 355.00, 359.00, 389.00, 402.00, 421.00, 458.00, 490.00, 503.00, 504.00, 513.00, 562.00, 660.00, 708.00, 705.00, 709.00, 714.00, 743.00, 784.00, 843.00, 871.00, 850.00, 839.00, 862.00, 877.00, 881.00, 879.00, 904.00], 
	[480.00, 494.00, 513.00, 538.00, 556.00, 564.00, 590.00, 585.00, 598.00, 621.00, 638.00, 654.00, 668.00, 678.00, 701.00, 735.00, 755.00, 804.00, 811.00, 841.00, 866.00, 878.00, 903.00, 938.00, 1015.00, 1062.00, 1151.00, 1227.00, 1259.00, 1302.00, 1378.00]
];

var oneBedroomRentArray = [
	[439.00, 439.00, 436.00, 438.00, 438.00, 440.00, 445.00, 450.00, 459.00, 473.00, 489.00, 506.00, 523.00, 536.00, 558.00, 547.00, 558.00, 582.00, 600.00, 609.00, 618.00, 634.00, 648.00, 666.00, 684.00, 699.00, 720.00, 745.00, 778.00, 819.00, 864.00], 
	[428.00, 428.00, 425.00, 433.00, 435.00, 431.00, 438.00, 452.00, 458.00, 476.00, 505.00, 528.00, 539.00, 562.00, 574.00, 581.00, 594.00, 604.00, 627.00, 641.00, 637.00, 651.00, 655.00, 668.00, 679.00, 698.00, 720.00, 754.00, 810.00, 821.00, 912.00], 
	[553.00, 570.00, 576.00, 581.00, 576.00, 580.00, 590.00, 611.00, 681.00, 720.00, 724.00, 732.00, 738.00, 732.00, 740.00, 760.00, 789.00, 812.00, 836.00, 854.00, 877.00, 884.00, 892.00, 925.00, 930.00, 968.00, 1025.00, 1109.00, 1165.00, 1204.00, 1285.00], 
	[610.00, 627.00, 641.00, 661.00, 675.00, 685.00, 729.00, 770.00, 830.00, 866.00, 891.00, 884.00, 886.00, 888.00, 896.00, 900.00, 927.00, 926.00, 949.00, 977.00, 1007.00, 1032.00, 1067.00, 1103.00, 1132.00, 1194.00, 1261.00, 1361.00, 1421.00, 1439.00, 1526.00], 
	[436.00, 436.00, 442.00, 445.00, 441.00, 446.00, 453.00, 456.00, 473.00, 476.00, 490.00, 508.00, 519.00, 538.00, 556.00, 578.00, 602.00, 615.00, 649.00, 677.00, 704.00, 750.00, 782.00, 813.00, 836.00, 880.00, 920.00, 958.00, 991.00, 1030.00, 1056.00], 
	[477.00, 470.00, 466.00, 464.00, 473.00, 511.00, 574.00, 599.00, 610.00, 649.00, 656.00, 661.00, 655.00, 666.00, 780.00, 897.00, 950.00, 913.00, 894.00, 899.00, 957.00, 1039.00, 1133.00, 1121.00, 1049.00, 1024.00, 1049.00, 1079.00, 1086.00, 1111.00, 1222.00], 
	[443.00, 441.00, 432.00, 423.00, 421.00, 429.00, 450.00, 467.00, 489.00, 537.00, 575.00, 588.00, 597.00, 608.00, 666.00, 783.00, 847.00, 842.00, 844.00, 857.00, 882.00, 934.00, 1001.00, 1029.00, 1000.00, 990.00, 1017.00, 1028.00, 1031.00, 1038.00, 1070.00], 
	[594.00, 611.00, 623.00, 640.00, 660.00, 672.00, 675.00, 683.00, 695.00, 726.00, 743.00, 759.00, 774.00, 787.00, 816.00, 846.00, 880.00, 919.00, 940.00, 964.00, 982.00, 1005.00, 1038.00, 1079.00, 1159.00, 1223.00, 1306.00, 1382.00, 1415.00, 1434.00, 1543.00]
];

var twoBedroomRentArray = [
	[501.00, 502.00, 501.00, 513.00, 511.00, 513.00, 513.00, 511.00, 518.00, 538.00, 550.00, 567.00, 596.00, 621.00, 636.00, 641.00, 653.00, 676.00, 692.00, 718.00, 741.00, 757.00, 775.00, 788.00, 808.00, 820.00, 839.00, 862.00, 900.00, 945.00, 976.00], 
	[488.00, 484.00, 484.00, 494.00, 491.00, 491.00, 499.00, 506.00, 509.00, 529.00, 552.00, 575.00, 594.00, 616.00, 636.00, 647.00, 659.00, 669.00, 701.00, 719.00, 711.00, 730.00, 739.00, 760.00, 791.00, 782.00, 809.00, 856.00, 903.00, 932.00, 1022.00], 
	[649.00, 669.00, 680.00, 680.00, 682.00, 673.00, 690.00, 710.00, 786.00, 817.00, 838.00, 847.00, 860.00, 843.00, 857.00, 871.00, 900.00, 930.00, 947.00, 977.00, 992.00, 1009.00, 1015.00, 1044.00, 1062.00, 1086.00, 1138.00, 1244.00, 1315.00, 1379.00, 1499.00], 
	[755.00, 773.00, 785.00, 805.00, 819.00, 822.00, 881.00, 916.00, 979.00, 1027.00, 1047.00, 1040.00, 1052.00, 1052.00, 1067.00, 1061.00, 1095.00, 1096.00, 1123.00, 1148.00, 1183.00, 1211.00, 1251.00, 1286.00, 1326.00, 1403.00, 1468.00, 1563.00, 1637.00, 1680.00, 1779.00], 
	[553.00, 557.00, 558.00, 561.00, 566.00, 567.00, 573.00, 581.00, 588.00, 605.00, 621.00, 644.00, 663.00, 682.00, 708.00, 739.00, 767.00, 808.00, 836.00, 874.00, 909.00, 967.00, 1015.00, 1043.00, 1066.00, 1107.00, 1180.00, 1224.00, 1264.00, 1318.00, 1352.00], 
	[599.00, 585.00, 584.00, 584.00, 595.00, 636.00, 710.00, 737.00, 740.00, 783.00, 802.00, 801.00, 802.00, 805.00, 952.00, 1082.00, 1140.00, 1089.00, 1064.00, 1078.00, 1144.00, 1217.00, 1311.00, 1319.00, 1242.00, 1235.00, 1262.00, 1295.00, 1320.00, 1350.00, 1463.00], 
	[547.00, 547.00, 527.00, 521.00, 520.00, 527.00, 555.00, 579.00, 603.00, 657.00, 710.00, 723.00, 729.00, 732.00, 810.00, 964.00, 1037.00, 1016.00, 1020.00, 1037.00, 1074.00, 1144.00, 1230.00, 1261.00, 1232.00, 1216.00, 1246.00, 1258.00, 1270.00, 1271.00, 1303.00], 
	[772.00, 791.00, 815.00, 828.00, 846.00, 855.00, 872.00, 866.00, 893.00, 922.00, 955.00, 968.00, 988.00, 1006.00, 1048.00, 1090.00, 1131.00, 1175.00, 1202.00, 1243.00, 1267.00, 1287.00, 1317.00, 1375.00, 1459.00, 1558.00, 1652.00, 1752.00, 1799.00, 1830.00, 2009.00]
];

var threeBedroomRentArray = [
	[581.00, 579.00, 575.00, 585.00, 580.00, 590.00, 595.00, 598.00, 599.00, 632.00, 653.00, 672.00, 706.00, 724.00, 749.00, 754.00, 771.00, 795.00, 824.00, 850.00, 873.00, 886.00, 899.00, 931.00, 955.00, 978.00, 999.00, 1013.00, 1069.00, 1108.00, 1150.00], 
	[583.00, 576.00, 584.00, 600.00, 583.00, 593.00, 597.00, 614.00, 631.00, 652.00, 688.00, 713.00, 729.00, 744.00, 777.00, 808.00, 801.00, 815.00, 863.00, 868.00, 876.00, 879.00, 898.00, 953.00, 958.00, 966.00, 1009.00, 1072.00, 1113.00, 1146.00, 1232.00], 
	[776.00, 798.00, 808.00, 808.00, 813.00, 813.00, 824.00, 850.00, 952.00, 960.00, 995.00, 1020.00, 1000.00, 1022.00, 1015.00, 1035.00, 1064.00, 1105.00, 1116.00, 1150.00, 1176.00, 1192.00, 1183.00, 1203.00, 1235.00, 1282.00, 1302.00, 1401.00, 1519.00, 1546.00, 1628.00], 
	[905.00, 930.00, 946.00, 965.00, 988.00, 989.00, 1053.00, 1086.00, 1170.00, 1218.00, 1257.00, 1223.00, 1245.00, 1248.00, 1271.00, 1261.00, 1293.00, 1299.00, 1329.00, 1356.00, 1411.00, 1461.00, 1466.00, 1516.00, 1525.00, 1589.00, 1647.00, 1730.00, 1854.00, 1918.00, 2015.00], 
	[642.00, 649.00, 640.00, 649.00, 643.00, 645.00, 657.00, 660.00, 692.00, 679.00, 704.00, 729.00, 754.00, 775.00, 808.00, 852.00, 897.00, 923.00, 1008.00, 1023.00, 1069.00, 1179.00, 1188.00, 1231.00, 1280.00, 1350.00, 1420.00, 1506.00, 1565.00, 1618.00, 1684.00], 
	[643.00, 629.00, 617.00, 628.00, 631.00, 662.00, 736.00, 754.00, 762.00, 804.00, 821.00, 822.00, 802.00, 809.00, 927.00, 1097.00, 1140.00, 1129.00, 1111.00, 1116.00, 1150.00, 1212.00, 1300.00, 1331.00, 1296.00, 1305.00, 1317.00, 1343.00, 1392.00, 1431.00, 1579.00], 
	[625.00, 625.00, 606.00, 593.00, 595.00, 602.00, 634.00, 657.00, 676.00, 733.00, 785.00, 793.00, 795.00, 800.00, 904.00, 1105.00, 1176.00, 1139.00, 1167.00, 1183.00, 1212.00, 1288.00, 1383.00, 1401.00, 1388.00, 1375.00, 1385.00, 1396.00, 1390.00, 1408.00, 1449.00], 
	[910.00, 939.00, 952.00, 987.00, 986.00, 1043.00, 1012.00, 1020.00, 1045.00, 1082.00, 1140.00, 1154.00, 1177.00, 1196.00, 1233.00, 1286.00, 1359.00, 1381.00, 1410.00, 1445.00, 1471.00, 1514.00, 1530.00, 1605.00, 1656.00, 1756.00, 1845.00, 1990.00, 2078.00, 2211.00, 2441.00]
];

var monthlyIncomeArray = [
	[1389.12, 1460.92, 1462.63, 1541.45, 1501.55, 1548.16, 1558.20, 1656.59, 1729.24, 1841.81, 1983.29, 2050.92, 2212.06, 2222.87, 2343.54, 2441.03, 2531.53, 2807.49, 2715.04, 2871.90, 2786.09, 2955.81, 2799.91, 2972.78, 3052.82, 3161.77, 3273.76, 3545.67, 3668.49, 3583.33, 3733.83], 
	[1448.45, 1370.24, 1417.24, 1422.88, 1501.55, 1510.92, 1595.82, 1683.92, 1807.84, 1962.68, 2042.14, 2069.07, 2162.76, 2153.60, 2215.13, 2316.35, 2377.08, 2383.33, 2413.37, 2512.03, 2607.04, 2645.06, 2814.64, 2689.65, 2848.80, 2946.89, 3085.35, 3209.51, 3394.36, 3550.00, 3699.10], 
	[1750.00, 1778.30, 1719.85, 1747.67, 1752.68, 1808.85, 1971.93, 2044.76, 2195.23, 2365.57, 2489.41, 2480.46, 2618.73, 2613.29, 2664.58, 2900.36, 2941.14, 3043.13, 3201.83, 3196.49, 3294.61, 3396.66, 3256.73, 3412.36, 3536.44, 3622.22, 3917.53, 3745.76, 4095.81, 4133.33, 4306.93], 
	[1695.62, 1697.69, 1704.72, 1773.45, 1773.61, 1819.49, 1993.43, 2148.64, 2273.83, 2405.86, 2324.62, 2395.76, 2470.85, 2474.75, 2439.85, 2578.83, 2685.97, 2693.03, 2708.19, 2681.38, 2872.04, 2840.18, 2947.27, 3002.58, 3113.28, 3253.86, 3289.47, 3345.57, 3612.05, 3708.33, 3864.08], 
	[1483.05, 1465.96, 1518.11, 1551.77, 1569.56, 1569.44, 1746.26, 1738.59, 1835.91, 1962.68, 2006.83, 2026.72, 2113.47, 2178.79, 2285.76, 2454.15, 2571.82, 2558.38, 2564.21, 2660.21, 2635.69, 2760.69, 2858.85, 2898.27, 2879.03, 3023.63, 3085.35, 3073.45, 3370.17, 3383.33, 3525.43], 
	[1680.79, 1617.09, 1694.63, 1763.14, 1778.84, 1925.89, 2106.26, 2044.76, 2273.83, 2405.86, 2389.36, 2462.31, 2637.22, 2758.12, 2953.51, 3261.27, 3236.59, 3285.50, 3338.95, 3626.92, 3903.40, 3801.37, 4258.80, 3911.55, 3551.55, 3806.40, 3846.87, 4033.90, 3950.68, 4058.33, 4228.78], 
	[1601.69, 1662.43, 1583.67, 1593.01, 1653.27, 1745.01, 1799.99, 1891.68, 2004.34, 2210.17, 2159.84, 2286.86, 2409.23, 2613.29, 2741.63, 3018.48, 3048.58, 3002.73, 3105.84, 3231.77, 3394.88, 3512.29, 3463.04, 3814.69, 3528.88, 3721.99, 3752.66, 3617.70, 3765.24, 4041.67, 4211.42], 
	[1631.36, 1607.02, 1608.89, 1680.65, 1642.81, 1713.09, 1810.74, 1815.14, 1847.14, 1985.70, 2112.76, 2129.57, 2205.90, 2285.84, 2401.33, 2552.58, 2665.83, 2592.04, 2591.63, 2751.94, 2771.77, 2890.77, 2954.64, 2942.97, 2992.37, 3246.19, 3320.87, 3529.66, 3644.30, 3783.33, 3942.23]
];

var rentPercentOfIncomeArray = [
	[0.316, 0.300, 0.298, 0.284, 0.292, 0.284, 0.286, 0.272, 0.265, 0.257, 0.247, 0.247, 0.236, 0.241, 0.238, 0.224, 0.220, 0.207, 0.221, 0.212, 0.222, 0.214, 0.231, 0.224, 0.224, 0.221, 0.220, 0.210, 0.212, 0.229, 0.231], 
	[0.295, 0.312, 0.300, 0.304, 0.290, 0.285, 0.274, 0.268, 0.253, 0.243, 0.247, 0.255, 0.249, 0.261, 0.259, 0.251, 0.250, 0.253, 0.260, 0.255, 0.244, 0.246, 0.233, 0.248, 0.238, 0.237, 0.233, 0.235, 0.239, 0.231, 0.247], 
	[0.316, 0.321, 0.335, 0.332, 0.329, 0.321, 0.299, 0.299, 0.310, 0.304, 0.291, 0.295, 0.282, 0.280, 0.278, 0.262, 0.268, 0.267, 0.261, 0.267, 0.266, 0.260, 0.274, 0.271, 0.263, 0.267, 0.262, 0.296, 0.284, 0.291, 0.298], 
	[0.360, 0.369, 0.376, 0.373, 0.381, 0.376, 0.366, 0.358, 0.365, 0.360, 0.383, 0.369, 0.359, 0.359, 0.367, 0.349, 0.345, 0.344, 0.350, 0.364, 0.351, 0.363, 0.362, 0.367, 0.364, 0.367, 0.383, 0.407, 0.393, 0.388, 0.395], 
	[0.294, 0.297, 0.291, 0.287, 0.281, 0.284, 0.259, 0.262, 0.258, 0.243, 0.244, 0.251, 0.246, 0.247, 0.243, 0.236, 0.234, 0.240, 0.253, 0.254, 0.267, 0.272, 0.274, 0.281, 0.290, 0.291, 0.298, 0.312, 0.294, 0.304, 0.300], 
	[0.284, 0.291, 0.275, 0.263, 0.266, 0.265, 0.273, 0.293, 0.268, 0.270, 0.275, 0.268, 0.248, 0.241, 0.264, 0.275, 0.294, 0.278, 0.268, 0.248, 0.245, 0.273, 0.266, 0.287, 0.295, 0.269, 0.273, 0.267, 0.275, 0.274, 0.289], 
	[0.277, 0.265, 0.273, 0.266, 0.255, 0.246, 0.250, 0.247, 0.244, 0.243, 0.266, 0.257, 0.248, 0.233, 0.243, 0.259, 0.278, 0.280, 0.272, 0.265, 0.260, 0.266, 0.289, 0.270, 0.283, 0.266, 0.271, 0.284, 0.274, 0.257, 0.254], 
	[0.364, 0.380, 0.387, 0.381, 0.402, 0.392, 0.373, 0.376, 0.376, 0.366, 0.352, 0.356, 0.351, 0.344, 0.340, 0.331, 0.330, 0.355, 0.363, 0.350, 0.354, 0.348, 0.351, 0.367, 0.387, 0.377, 0.393, 0.392, 0.388, 0.379, 0.391]
];

var leftoverIncomeArray = [
	[950.12, 1021.92, 1026.63, 1103.45, 1063.55, 1108.16, 1113.20, 1206.59, 1270.24, 1368.81, 1494.29, 1544.92, 1689.06, 1686.87, 1785.54, 1894.03, 1973.53, 2225.49, 2115.04, 2262.90, 2168.09, 2321.81, 2151.91, 2306.78, 2368.82, 2462.77, 2553.76, 2800.67, 2890.49, 2764.33, 2869.83], 
	[1020.45, 942.24, 992.24, 989.88, 1066.55, 1079.92, 1157.82, 1231.92, 1349.84, 1486.68, 1537.14, 1541.07, 1623.76, 1591.60, 1641.13, 1735.35, 1783.08, 1779.33, 1786.37, 1871.03, 1970.04, 1994.06, 2159.64, 2021.65, 2169.80, 2248.89, 2365.35, 2455.51, 2584.36, 2729.00, 2787.10], 
	[1197.00, 1208.30, 1143.85, 1166.67, 1176.68, 1228.85, 1381.93, 1433.76, 1514.23, 1645.57, 1765.41, 1748.46, 1880.73, 1881.29, 1924.58, 2140.36, 2152.14, 2231.13, 2365.83, 2342.49, 2417.61, 2512.66, 2364.73, 2487.36, 2606.44, 2654.22, 2892.53, 2636.76, 2930.81, 2929.33, 3021.93], 
	[1085.62, 1070.69, 1063.72, 1112.45, 1098.61, 1134.49, 1264.43, 1378.64, 1443.83, 1539.86, 1433.62, 1511.76, 1584.85, 1586.75, 1543.85, 1678.83, 1758.97, 1767.03, 1759.19, 1704.38, 1865.04, 1808.18, 1880.27, 1899.58, 1981.28, 2059.86, 2028.47, 1984.57, 2191.05, 2269.33, 2338.08], 
	[1047.05, 1029.96, 1076.11, 1106.77, 1128.56, 1123.44, 1293.26, 1282.59, 1362.91, 1486.68, 1516.83, 1518.72, 1594.47, 1640.79, 1729.76, 1876.15, 1969.82, 1943.38, 1915.21, 1983.21, 1931.69, 2010.69, 2076.85, 2085.27, 2043.03, 2143.63, 2165.35, 2115.45, 2379.17, 2353.33, 2469.43], 
	[1203.79, 1147.09, 1228.63, 1299.14, 1305.84, 1414.89, 1532.26, 1445.76, 1663.83, 1756.86, 1733.36, 1801.31, 1982.22, 2092.12, 2173.51, 2364.27, 2286.59, 2372.50, 2444.95, 2727.92, 2946.40, 2762.37, 3125.80, 2790.55, 2502.55, 2782.40, 2797.87, 2954.90, 2864.68, 2947.33, 3006.78], 
	[1158.69, 1221.43, 1151.67, 1170.01, 1232.27, 1316.01, 1349.99, 1424.68, 1515.34, 1673.17, 1584.84, 1698.86, 1812.23, 2005.29, 2075.63, 2235.48, 2201.58, 2160.73, 2261.84, 2374.77, 2512.88, 2578.29, 2462.04, 2785.69, 2528.88, 2731.99, 2735.66, 2589.70, 2734.24, 3003.67, 3141.42], 
	[1037.36, 996.02, 985.89, 1040.65, 982.81, 1041.09, 1135.74, 1132.14, 1152.14, 1259.70, 1369.76, 1370.57, 1431.90, 1498.84, 1585.33, 1706.58, 1785.83, 1673.04, 1651.63, 1787.94, 1789.77, 1885.77, 1916.64, 1863.97, 1833.37, 2023.19, 2014.87, 2147.66, 2229.30, 2349.33, 2399.23]
];

var oneBedroomChangeArray = [
	[0.000, -0.007, 0.005, 0.000, 0.005, 0.011, 0.011, 0.020, 0.031, 0.034, 0.035, 0.034, 0.025, 0.041, -0.020, 0.020, 0.043, 0.031, 0.015, 0.015, 0.026, 0.022, 0.028, 0.027, 0.022, 0.030, 0.035, 0.044, 0.053, 0.055], 
	[0.000, -0.007, 0.019, 0.005, -0.009, 0.016, 0.032, 0.013, 0.039, 0.061, 0.046, 0.021, 0.043, 0.021, 0.012, 0.022, 0.017, 0.038, 0.022, -0.006, 0.022, 0.006, 0.020, 0.016, 0.028, 0.032, 0.047, 0.074, 0.014, 0.111], 
	[0.031, 0.011, 0.009, -0.009, 0.007, 0.017, 0.036, 0.115, 0.057, 0.006, 0.011, 0.008, -0.008, 0.011, 0.027, 0.038, 0.029, 0.030, 0.022, 0.027, 0.008, 0.009, 0.037, 0.005, 0.041, 0.059, 0.082, 0.050, 0.033, 0.067], 
	[0.028, 0.022, 0.031, 0.021, 0.015, 0.064, 0.056, 0.078, 0.043, 0.029, -0.008, 0.002, 0.002, 0.009, 0.004, 0.030, -0.001, 0.025, 0.030, 0.031, 0.025, 0.034, 0.034, 0.026, 0.055, 0.056, 0.079, 0.044, 0.013, 0.060], 
	[0.000, 0.014, 0.007, -0.009, 0.011, 0.016, 0.007, 0.037, 0.006, 0.029, 0.037, 0.022, 0.037, 0.033, 0.040, 0.042, 0.022, 0.055, 0.043, 0.040, 0.065, 0.043, 0.040, 0.028, 0.053, 0.045, 0.041, 0.034, 0.039, 0.025], 
	[-0.015, -0.009, -0.004, 0.019, 0.080, 0.123, 0.044, 0.018, 0.064, 0.011, 0.008, -0.009, 0.017, 0.171, 0.150, 0.059, -0.039, -0.021, 0.006, 0.065, 0.086, 0.090, -0.011, -0.064, -0.024, 0.024, 0.029, 0.006, 0.023, 0.100], 
	[-0.005, -0.020, -0.021, -0.005, 0.019, 0.049, 0.038, 0.047, 0.098, 0.071, 0.023, 0.015, 0.018, 0.095, 0.176, 0.082, -0.006, 0.002, 0.015, 0.029, 0.059, 0.072, 0.028, -0.028, -0.010, 0.027, 0.011, 0.003, 0.007, 0.031], 
	[0.029, 0.020, 0.027, 0.031, 0.018, 0.004, 0.012, 0.018, 0.045, 0.023, 0.022, 0.020, 0.017, 0.037, 0.037, 0.040, 0.044, 0.023, 0.026, 0.019, 0.023, 0.033, 0.039, 0.074, 0.055, 0.068, 0.058, 0.024, 0.013, 0.076]
];

var rentTenureLabels = ["Toronto", "Vancouver", "Ottawa–Gatineau", "Calgary", "Edmonton", "Winnipeg", "Montréal", "Québec"];

var rentTenureDataArray = [
	[2180, 1960, 1520, 1410, 1340, 1310, 1100, 930], 
	[1460, 1480, 1200, 1320, 1300, 1220, 890, 850], 
	[0.493, 0.324, 0.267, 0.068, 0.031, 0.074, 0.236, 0.094]
];

var years = ["1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"];
var yearsReverse = years.slice().reverse();

var dateLabels = ["1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"];

var numYears = Number(years.length);
var numGeos = Number(geoLabels.length);

var inflationCheckbox = document.getElementById("inflationCheckbox");

// http://vrl.cs.brown.edu/color
var colourArray = ["#C70039", "#3ECCB5", "#A476FF", "#F92DAE", "#FF5733", "#148fae", "#0E6E33", "#FF9898", "#39f27a","#ffd700","#003041","#218841","#FFB69F"];

// #56ebd3

var rankArray = [];
var rankedLabelArray = [];
var rankedReturnsArray = [];

var city1Selection = document.getElementById("city1Selection");
var city1SelectionID;
var city1SelectionName;

var city2Selection = document.getElementById("city2Selection");
var city2SelectionID;
var city2SelectionName;

var city3Selection = document.getElementById("city3Selection");
var city3SelectionID;
var city3SelectionName;

var indicatorSelection = document.getElementById("indicatorSelection");
var indicatorSelectionID;

var rankIndicatorSelection = document.getElementById("rankIndicatorSelection");
var rankIndicatorSelectionID;

var singleCitySelection = document.getElementById("singleCitySelection");
var singleCitySelectionID;
var singleCitySelectionName;

var chart;
var chart2;
var chart3;
var chart4;
var chart5;
var chart6;
var chart7;
var chart8;

var tickSpacing = 1;
var annualTickSpacing = 2;

//dataLabels plugin for Chart.js
Chart.register(ChartDataLabels);

//main method
getUserInputs();
addInputEventListeners();
runCharts();
runCharts2();
runCharts3();
runRentTenureCharts();

function getUserInputs(){
    city1SelectionID = Number(city1Selection.value);
    city1SelectionName = geoLabels[city1SelectionID];
    console.log("City 1 name: "+city1SelectionName);

    city2SelectionID = Number(city2Selection.value);
    city2SelectionName = geoLabels[city2SelectionID];
    console.log("City 2 name: "+city2SelectionName);

    city3SelectionID = Number(city3Selection.value);
    city3SelectionName = geoLabels[city3SelectionID];
    console.log("City 3 name: "+city3SelectionName);

    indicatorSelectionID = Number(indicatorSelection.value);
    
    toggleMultiCityCharts();

    rankIndicatorSelectionID = Number(rankIndicatorSelection.value);
    console.log("rank selection ID: "+rankIndicatorSelectionID);

    singleCitySelectionID = Number(singleCitySelection.value);
    singleCitySelectionName = geoLabels[singleCitySelectionID];
    console.log("Single city name: "+singleCitySelectionName);

    /*
    //disable checkbox for ratio and percent indicators
    if(selectedIndicatorID == 2 || selectedIndicatorID == 4){
        inflationCheckbox.disabled = true;
    } else {
        inflationCheckbox.disabled = false;
    }
    */

}

function toggleMultiCityCharts(){

    if(indicatorSelectionID == 0){
        document.getElementById("multiCityRentChartDiv").classList.remove("hide");
        document.getElementById("multiCityIncomeChartDiv").classList.add("hide");
        document.getElementById("multiCityRentRatioChartDiv").classList.add("hide");
        document.getElementById("multiCityLeftoverIncomeChartDiv").classList.add("hide");
    } else if(indicatorSelectionID == 1){
        document.getElementById("multiCityRentChartDiv").classList.add("hide");
        document.getElementById("multiCityIncomeChartDiv").classList.remove("hide");
        document.getElementById("multiCityRentRatioChartDiv").classList.add("hide");
        document.getElementById("multiCityLeftoverIncomeChartDiv").classList.add("hide");
    } else if(indicatorSelectionID == 2){
        document.getElementById("multiCityRentChartDiv").classList.add("hide");
        document.getElementById("multiCityIncomeChartDiv").classList.add("hide");
        document.getElementById("multiCityRentRatioChartDiv").classList.remove("hide");
        document.getElementById("multiCityLeftoverIncomeChartDiv").classList.add("hide");
    } else {
        document.getElementById("multiCityRentChartDiv").classList.add("hide");
        document.getElementById("multiCityIncomeChartDiv").classList.add("hide");
        document.getElementById("multiCityRentRatioChartDiv").classList.add("hide");
        document.getElementById("multiCityLeftoverIncomeChartDiv").classList.remove("hide");
    }

}

function addInputEventListeners() {
    var inputsArray = document.getElementsByClassName("userInput");
    console.log("# of event listeners: "+inputsArray.length);

    for(i=0;i<inputsArray.length;i++) {
        inputsArray[i].addEventListener('change',refreshAnalysis, false);
    }

    var inputsArray2 = document.getElementsByClassName("userInput2");
    console.log("# of event listeners: "+inputsArray2.length);

    for(i=0;i<inputsArray2.length;i++) {
        inputsArray2[i].addEventListener('change',refreshAnalysis2, false);
    }

    var inputsArray3 = document.getElementsByClassName("userInput3");
    console.log("# of event listeners: "+inputsArray3.length);

    for(i=0;i<inputsArray3.length;i++) {
        inputsArray3[i].addEventListener('change',refreshAnalysis3, false);
    }
}

function refreshAnalysis(){
    console.log("refresh analysis");
    
    chart.destroy();
    chart2.destroy();
    chart3.destroy();
    chart4.destroy();

    getUserInputs();
    runCharts();
}

function refreshAnalysis2(){
    console.log("refresh analysis 2");
    chart5.destroy();
    
    getUserInputs();
    runCharts2();
}

function refreshAnalysis3(){
    console.log("refresh analysis 3");
    chart6.destroy();
    chart7.destroy();
    
    getUserInputs();
    runCharts3();
}

function runCharts(){
    runMultiCityRentChart();
    runMultiCityIncomeChart();
    runMultiCityRentRatioChart();
    runMultiCityLeftoverIncomeChart();
}

function runCharts2(){
    runRankChart();
}

function runCharts3(){
    runSingleCityRentChart();
    runSingleCityPercentChangeChart();    
}

function runMultiCityRentChart(){

    var ctx = document.getElementById('multiCityRentChart').getContext('2d');

    var selectedChartDataArray = [];
    var chartTitle = "1 Bedroom Unit, Avg. Monthly Rent Price";
    var chartSubtitle = "1992 to 2022, selected Canadian cities";

    var lineWidth = 2;
    var markerSize = 3;
    var markerHoverSize = 5;

    //Get one bedroom rent price for the 3 selected cities
    selectedChartDataArray[0] = oneBedroomRentArray[city1SelectionID];
    selectedChartDataArray[1] = oneBedroomRentArray[city2SelectionID];
    selectedChartDataArray[2] = oneBedroomRentArray[city3SelectionID];

    chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: dateLabels,
            datasets: [
                {
                    label: city1SelectionName,
                    data: selectedChartDataArray[0],
                    fill: false,
                    borderColor: colourArray[0],
                    borderWidth: lineWidth,
                    pointBorderColor: colourArray[0],
                    pointBackgroundColor: colourArray[0],
                    backgroundColor: colourArray[0],
                    pointBorderWidth: 1,
                    pointRadius: markerSize,
                    pointHoverRadius: markerHoverSize,
                    pointHitRadius: markerHoverSize,
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        color: colourArray[0],
                    },
                },
                {
                    label: city2SelectionName,
                    data: selectedChartDataArray[1],
                    fill: false,
                    borderColor: colourArray[1],
                    borderWidth: lineWidth,
                    pointBorderColor: colourArray[1],
                    pointBackgroundColor: colourArray[1],
                    backgroundColor: colourArray[1],
                    pointBorderWidth: 1,
                    pointRadius: markerSize,
                    pointHoverRadius: markerHoverSize,
                    pointHitRadius: markerHoverSize,
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        color: colourArray[1],
                    },
                },
                {
                    label: city3SelectionName,
                    data: selectedChartDataArray[2],
                    fill: false,
                    borderColor: colourArray[2],
                    borderWidth: lineWidth,
                    pointBorderColor: colourArray[2],
                    pointBackgroundColor: colourArray[2],
                    backgroundColor: colourArray[2],
                    pointBorderWidth: 1,
                    pointRadius: markerSize,
                    pointHoverRadius: markerHoverSize,
                    pointHitRadius: markerHoverSize,
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        color: colourArray[2],
                    },
                },
                
            ]
        },

        // Configuration options go here

        options: {

            maintainAspectRatio: false,
        
            scales: {
                y: {
                    ticks: {
                        // Include a dollar sign in the ticks and add comma formatting
                        callback: function(value, index, values) {
                            return "$"+(Math.round(value)).toLocaleString()+" ";
                        },

                        fontColor: "rgb(56,56,56)",
                        font: {
                            size: 14,
                            weight: "bold",
                        }
                    },

                    title: {
                        display: true,
                        text: "Avg. rent price (monthly $)",
                        color: "rgb(56,56,56)",
                        fontStyle: "bold",
                        font: {
                            size: 14,
                        }
                    },

                    grid: {
                        drawTicks: false,
                        color: function(context) {
                            if (context.tick.value == 0) {
                                return "#000000";
                            } else {
                                return "#E9E9E9";
                            }
                        }
                    },
                },

                x: {
                    ticks: {
                        callback: function(val, index) {
                            if (!(index % annualTickSpacing)) return this.getLabelForValue(val)+" ";
                        },
                        autoSkip: false,
                        fontColor: "rgb(56,56,56)",

                        maxRotation: 90,
                        minRotation: 90, 
                    },

                    title: {
                        display: true,
                        text: "Year",
                        color: "rgb(56,56,56)",
                        font: {
                            size: 15,
                            weight: "bold",
                        }
                    },

                    grid: {
                        drawTicks: false,

                        color: function(context) {
                            if (context.tick.value == 0) {
                                return "#000000";
                            } else {
                                return "#E9E9E9";
                            }
                        }
                    },
                },    
            },

            plugins: {

                title: {
                    display: true,
                    text: chartTitle,
                    color: "rgb(56,56,56)",
                    padding: 2,
                    font: {
                        size: 20,
                        weight: "bold",
                    }
                },

                subtitle: {
                    display: true,
                    text: chartSubtitle,
                    color: "rgb(56,56,56)",
                    font: {
                        size: 14,
                    }
                },

                legend: {
                    display: true,
                    labels: {
                        fontColor: "rgb(56,56,56)",
                        boxWidth: 13,
                        padding: 10,
                        font: {
                            size: 15,
                        }                    
                    },
                },

                tooltip: {
                
                    // Include a dollar sign in the ticks and add comma formatting
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';

                            if (label) {
                                label += ': ';
                            }
                            
                            //change formatting depending on indicator selection 
                            label += "$"+Math.round(context.parsed.y).toLocaleString();
                            
                            return label;
                        }
                    },
                },

                datalabels: {
                    formatter: function(value, context) {
                        if (context.dataIndex === context.dataset.data.length - 1)
                        {
                            return dollarFormatting(value);
                        }
                        return "";
                    },
                },
            },

        }
    });

}


function runMultiCityIncomeChart(){

    var ctx2 = document.getElementById('multiCityIncomeChart').getContext('2d');

    var selectedChartDataArray = [];
    var chartTitle = "Average Income (Monthly, After-Tax)";
    var chartSubtitle = "1992 to 2022, selected Canadian cities";

    var lineWidth = 2;
    var markerSize = 3;
    var markerHoverSize = 5;

    //Get one bedroom rent price for the 3 selected cities
    selectedChartDataArray[0] = monthlyIncomeArray[city1SelectionID];
    selectedChartDataArray[1] = monthlyIncomeArray[city2SelectionID];
    selectedChartDataArray[2] = monthlyIncomeArray[city3SelectionID];

    chart2 = new Chart(ctx2, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: dateLabels,
            datasets: [
                {
                    label: city1SelectionName,
                    data: selectedChartDataArray[0],
                    fill: false,
                    borderColor: colourArray[0],
                    borderWidth: lineWidth,
                    pointBorderColor: colourArray[0],
                    pointBackgroundColor: colourArray[0],
                    backgroundColor: colourArray[0],
                    pointBorderWidth: 1,
                    pointRadius: markerSize,
                    pointHoverRadius: markerHoverSize,
                    pointHitRadius: markerHoverSize,
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        color: colourArray[0],
                    },
                },
                {
                    label: city2SelectionName,
                    data: selectedChartDataArray[1],
                    fill: false,
                    borderColor: colourArray[1],
                    borderWidth: lineWidth,
                    pointBorderColor: colourArray[1],
                    pointBackgroundColor: colourArray[1],
                    backgroundColor: colourArray[1],
                    pointBorderWidth: 1,
                    pointRadius: markerSize,
                    pointHoverRadius: markerHoverSize,
                    pointHitRadius: markerHoverSize,
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        color: colourArray[1],
                    },
                },
                {
                    label: city3SelectionName,
                    data: selectedChartDataArray[2],
                    fill: false,
                    borderColor: colourArray[2],
                    borderWidth: lineWidth,
                    pointBorderColor: colourArray[2],
                    pointBackgroundColor: colourArray[2],
                    backgroundColor: colourArray[2],
                    pointBorderWidth: 1,
                    pointRadius: markerSize,
                    pointHoverRadius: markerHoverSize,
                    pointHitRadius: markerHoverSize,
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        color: colourArray[2],
                    },
                },
                
            ]
        },

        // Configuration options go here

        options: {

            maintainAspectRatio: false,
        
            scales: {
                y: {
                    ticks: {
                        // Include a dollar sign in the ticks and add comma formatting
                        callback: function(value, index, values) {
                            return "$"+(Math.round(value)).toLocaleString()+" ";
                        },

                        fontColor: "rgb(56,56,56)",
                        font: {
                            size: 14,
                            weight: "bold",
                        }
                    },

                    title: {
                        display: true,
                        text: "Avg. Income (monthly after-tax $)",
                        color: "rgb(56,56,56)",
                        fontStyle: "bold",
                        font: {
                            size: 14,
                        }
                    },

                    grid: {
                        drawTicks: false,
                        color: function(context) {
                            if (context.tick.value == 0) {
                                return "#000000";
                            } else {
                                return "#E9E9E9";
                            }
                        }
                    },
                },

                x: {
                    ticks: {
                        callback: function(val, index) {
                            if (!(index % annualTickSpacing)) return this.getLabelForValue(val)+" ";
                        },
                        autoSkip: false,
                        fontColor: "rgb(56,56,56)",

                        maxRotation: 90,
                        minRotation: 90, 
                    },

                    title: {
                        display: true,
                        text: "Year",
                        color: "rgb(56,56,56)",
                        font: {
                            size: 15,
                            weight: "bold",
                        }
                    },

                    grid: {
                        drawTicks: false,

                        color: function(context) {
                            if (context.tick.value == 0) {
                                return "#000000";
                            } else {
                                return "#E9E9E9";
                            }
                        }
                    },
                },    
            },

            plugins: {

                title: {
                    display: true,
                    text: chartTitle,
                    color: "rgb(56,56,56)",
                    padding: 2,
                    font: {
                        size: 20,
                        weight: "bold",
                    }
                },

                subtitle: {
                    display: true,
                    text: chartSubtitle,
                    color: "rgb(56,56,56)",
                    font: {
                        size: 14,
                    }
                },

                legend: {
                    display: true,
                    labels: {
                        fontColor: "rgb(56,56,56)",
                        boxWidth: 13,
                        padding: 10,
                        font: {
                            size: 15,
                        }                    
                    },
                },

                tooltip: {
                
                    // Include a dollar sign in the ticks and add comma formatting
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';

                            if (label) {
                                label += ': ';
                            }
                            
                            //change formatting depending on indicator selection 
                            label += "$"+Math.round(context.parsed.y).toLocaleString();
                            
                            return label;
                        }
                    },
                },

                datalabels: {
                    formatter: function(value, context) {
                        if (context.dataIndex === context.dataset.data.length - 1)
                        {
                            return dollarFormatting(value);
                        }
                        return "";
                    },
                },
            },


        }
    });

}


function runMultiCityRentRatioChart(){

    var ctx3 = document.getElementById('multiCityRentRatioChart').getContext('2d');

    var selectedChartDataArray = [];
    var chartTitle = "1 Bedroom Rent as a % of Avg. After-Tax Income";
    var chartSubtitle = "1992 to 2022, selected Canadian cities";

    var lineWidth = 2;
    var markerSize = 3;
    var markerHoverSize = 5;

    //Get one bedroom rent price for the 3 selected cities
    selectedChartDataArray[0] = rentPercentOfIncomeArray[city1SelectionID];
    selectedChartDataArray[1] = rentPercentOfIncomeArray[city2SelectionID];
    selectedChartDataArray[2] = rentPercentOfIncomeArray[city3SelectionID];

    chart3 = new Chart(ctx3, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: dateLabels,
            datasets: [
                {
                    label: city1SelectionName,
                    data: selectedChartDataArray[0],
                    fill: false,
                    borderColor: colourArray[0],
                    borderWidth: lineWidth,
                    pointBorderColor: colourArray[0],
                    pointBackgroundColor: colourArray[0],
                    backgroundColor: colourArray[0],
                    pointBorderWidth: 1,
                    pointRadius: markerSize,
                    pointHoverRadius: markerHoverSize,
                    pointHitRadius: markerHoverSize,
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        color: colourArray[0],
                    },
                },
                {
                    label: city2SelectionName,
                    data: selectedChartDataArray[1],
                    fill: false,
                    borderColor: colourArray[1],
                    borderWidth: lineWidth,
                    pointBorderColor: colourArray[1],
                    pointBackgroundColor: colourArray[1],
                    backgroundColor: colourArray[1],
                    pointBorderWidth: 1,
                    pointRadius: markerSize,
                    pointHoverRadius: markerHoverSize,
                    pointHitRadius: markerHoverSize,
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        color: colourArray[1],
                    },
                },
                {
                    label: city3SelectionName,
                    data: selectedChartDataArray[2],
                    fill: false,
                    borderColor: colourArray[2],
                    borderWidth: lineWidth,
                    pointBorderColor: colourArray[2],
                    pointBackgroundColor: colourArray[2],
                    backgroundColor: colourArray[2],
                    pointBorderWidth: 1,
                    pointRadius: markerSize,
                    pointHoverRadius: markerHoverSize,
                    pointHitRadius: markerHoverSize,
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        color: colourArray[2],
                    },
                },
                
            ]
        },

        // Configuration options go here

        options: {

            maintainAspectRatio: false,
        
            scales: {
                y: {
                    ticks: {
                        // Include a dollar sign in the ticks and add comma formatting
                        callback: function(value, index, values) {
                            return percentFormatting(value)+" ";
                        },

                        fontColor: "rgb(56,56,56)",
                        font: {
                            size: 14,
                            weight: "bold",
                        }
                    },

                    title: {
                        display: true,
                        text: "Avg. 1 Bedroom Rent as a % of After-Tax Income",
                        color: "rgb(56,56,56)",
                        fontStyle: "bold",
                        font: {
                            size: 14,
                        }
                    },

                    grid: {
                        drawTicks: false,
                        color: function(context) {
                            if (context.tick.value == 0) {
                                return "#000000";
                            } else {
                                return "#E9E9E9";
                            }
                        }
                    },
                },

                x: {
                    ticks: {
                        callback: function(val, index) {
                            if (!(index % annualTickSpacing)) return this.getLabelForValue(val)+" ";
                        },
                        autoSkip: false,
                        fontColor: "rgb(56,56,56)",

                        maxRotation: 90,
                        minRotation: 90, 
                    },

                    title: {
                        display: true,
                        text: "Year",
                        color: "rgb(56,56,56)",
                        font: {
                            size: 15,
                            weight: "bold",
                        }
                    },

                    grid: {
                        drawTicks: false,

                        color: function(context) {
                            if (context.tick.value == 0) {
                                return "#000000";
                            } else {
                                return "#E9E9E9";
                            }
                        }
                    },
                },    
            },

            plugins: {

                title: {
                    display: true,
                    text: chartTitle,
                    color: "rgb(56,56,56)",
                    padding: 2,
                    font: {
                        size: 20,
                        weight: "bold",
                    }
                },

                subtitle: {
                    display: true,
                    text: chartSubtitle,
                    color: "rgb(56,56,56)",
                    font: {
                        size: 14,
                    }
                },

                legend: {
                    display: true,
                    labels: {
                        fontColor: "rgb(56,56,56)",
                        boxWidth: 13,
                        padding: 10,
                        font: {
                            size: 15,
                        }                    
                    },
                },

                tooltip: {
                
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';

                            if (label) {
                                label += ': ';
                            }
                            
                            label += percentFormatting(context.parsed.y);
                            
                            return label;
                        }
                    },
                },

                datalabels: {
                    formatter: function(value, context) {
                        if (context.dataIndex === context.dataset.data.length - 1)
                        {
                            return percentFormatting(value);
                        }
                        return "";
                    },
                },
            },


        }
    });

}


function runMultiCityLeftoverIncomeChart(){

    var ctx4 = document.getElementById('multiCityLeftoverIncomeChart').getContext('2d');

    var selectedChartDataArray = [];
    var chartTitle = "Leftover Income After Cost of 1 Bedroom Rent";
    var chartSubtitle = "1992 to 2022, selected Canadian cities";

    var lineWidth = 2;
    var markerSize = 3;
    var markerHoverSize = 5;

    //Get one bedroom rent price for the 3 selected cities
    selectedChartDataArray[0] = leftoverIncomeArray[city1SelectionID];
    selectedChartDataArray[1] = leftoverIncomeArray[city2SelectionID];
    selectedChartDataArray[2] = leftoverIncomeArray[city3SelectionID];

    chart4 = new Chart(ctx4, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: dateLabels,
            datasets: [
                {
                    label: city1SelectionName,
                    data: selectedChartDataArray[0],
                    fill: false,
                    borderColor: colourArray[0],
                    borderWidth: lineWidth,
                    pointBorderColor: colourArray[0],
                    pointBackgroundColor: colourArray[0],
                    backgroundColor: colourArray[0],
                    pointBorderWidth: 1,
                    pointRadius: markerSize,
                    pointHoverRadius: markerHoverSize,
                    pointHitRadius: markerHoverSize,
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        color: colourArray[0],
                    },
                },
                {
                    label: city2SelectionName,
                    data: selectedChartDataArray[1],
                    fill: false,
                    borderColor: colourArray[1],
                    borderWidth: lineWidth,
                    pointBorderColor: colourArray[1],
                    pointBackgroundColor: colourArray[1],
                    backgroundColor: colourArray[1],
                    pointBorderWidth: 1,
                    pointRadius: markerSize,
                    pointHoverRadius: markerHoverSize,
                    pointHitRadius: markerHoverSize,
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        color: colourArray[1],
                    },
                },
                {
                    label: city3SelectionName,
                    data: selectedChartDataArray[2],
                    fill: false,
                    borderColor: colourArray[2],
                    borderWidth: lineWidth,
                    pointBorderColor: colourArray[2],
                    pointBackgroundColor: colourArray[2],
                    backgroundColor: colourArray[2],
                    pointBorderWidth: 1,
                    pointRadius: markerSize,
                    pointHoverRadius: markerHoverSize,
                    pointHitRadius: markerHoverSize,
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        color: colourArray[2],
                    },
                },
                
            ]
        },

        // Configuration options go here

        options: {

            maintainAspectRatio: false,
        
            scales: {
                y: {
                    ticks: {
                        // Include a dollar sign in the ticks and add comma formatting
                        callback: function(value, index, values) {
                            return dollarFormatting(value)+" ";
                        },

                        fontColor: "rgb(56,56,56)",
                        font: {
                            size: 14,
                            weight: "bold",
                        }
                    },

                    title: {
                        display: true,
                        text: "Avg. after-tax income minus avg. 1 bedroom rent ($)",
                        color: "rgb(56,56,56)",
                        fontStyle: "bold",
                        font: {
                            size: 14,
                        }
                    },

                    grid: {
                        drawTicks: false,
                        color: function(context) {
                            if (context.tick.value == 0) {
                                return "#000000";
                            } else {
                                return "#E9E9E9";
                            }
                        }
                    },
                },

                x: {
                    ticks: {
                        callback: function(val, index) {
                            if (!(index % annualTickSpacing)) return this.getLabelForValue(val)+" ";
                        },
                        autoSkip: false,
                        fontColor: "rgb(56,56,56)",

                        maxRotation: 90,
                        minRotation: 90, 
                    },

                    title: {
                        display: true,
                        text: "Year",
                        color: "rgb(56,56,56)",
                        font: {
                            size: 15,
                            weight: "bold",
                        }
                    },

                    grid: {
                        drawTicks: false,

                        color: function(context) {
                            if (context.tick.value == 0) {
                                return "#000000";
                            } else {
                                return "#E9E9E9";
                            }
                        }
                    },
                },    
            },

            plugins: {

                title: {
                    display: true,
                    text: chartTitle,
                    color: "rgb(56,56,56)",
                    padding: 2,
                    font: {
                        size: 20,
                        weight: "bold",
                    }
                },

                subtitle: {
                    display: true,
                    text: chartSubtitle,
                    color: "rgb(56,56,56)",
                    font: {
                        size: 14,
                    }
                },

                legend: {
                    display: true,
                    labels: {
                        fontColor: "rgb(56,56,56)",
                        boxWidth: 13,
                        padding: 10,
                        font: {
                            size: 15,
                        }                    
                    },
                },

                tooltip: {
                
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';

                            if (label) {
                                label += ': ';
                            }
                            
                            label += dollarFormatting(context.parsed.y);
                            
                            return label;
                        }
                    },
                },

                datalabels: {
                    formatter: function(value, context) {
                        if (context.dataIndex === context.dataset.data.length - 1)
                        {
                            return dollarFormatting(value);
                        }
                        return "";
                    },
                },
            },


        }
    });

}

function runRankChart(){

    var rankArray = [];
    var rankedLabelArray = [];
    var selectedDataArray = [];
    var rankedValueArray = [];
    var selectedPosition = bachelorRentArray[0].length-1;

    //get the latest year data for each city, for the chosen metric
    for(var i=0; i<geoLabels.length; i++){
        if(rankIndicatorSelectionID==0){
            selectedDataArray[i] = Number(bachelorRentArray[i][selectedPosition]);
        } else if(rankIndicatorSelectionID==1){
            selectedDataArray[i] = Number(oneBedroomRentArray[i][selectedPosition]);
        } else if(rankIndicatorSelectionID==2){
            selectedDataArray[i] = Number(twoBedroomRentArray[i][selectedPosition]);
        } else if(rankIndicatorSelectionID==3){
            selectedDataArray[i] = Number(threeBedroomRentArray[i][selectedPosition]);
        } else if(rankIndicatorSelectionID==4){
            selectedDataArray[i] = Number(monthlyIncomeArray[i][selectedPosition]);
        } else if(rankIndicatorSelectionID==5){
            selectedDataArray[i] = Number(rentPercentOfIncomeArray[i][selectedPosition]);
        } else {
            selectedDataArray[i] = Number(leftoverIncomeArray[i][selectedPosition]);
        }
    }    

    //rank and reorder the selected data
    console.log("selected data array: "+selectedDataArray);

    rankArray = rankings(selectedDataArray);
    console.log(rankArray);

    rankedLabelArray = reorderArray(geoLabels, rankArray);
    console.log(rankedLabelArray);

    rankedValueArray = reorderArray(selectedDataArray, rankArray);
    console.log(rankedValueArray);

    //dynamic chart formatting

    var chartTitle = "";
    var chartSubtitle = "";
    var yAxisLabel = "";

    if(rankIndicatorSelectionID==0){
        chartTitle = "Avg. Rent for Studio Unit";
        chartSubtitle = "2022 ranking of Canadian cities"
        yAxisLabel = "Avg. Monthly Rent ($)";
    } else if(rankIndicatorSelectionID==1){
        chartTitle = "Avg. Rent for 1 Bedroom Unit";
        chartSubtitle = "2022 ranking of Canadian cities";
        yAxisLabel = "Avg. Monthly Rent ($)";
    } else if(rankIndicatorSelectionID==2){
        chartTitle = "Avg. Rent for 2 Bedroom Unit";
        chartSubtitle = "2022 ranking of Canadian cities";
        yAxisLabel = "Avg. Monthly Rent ($)";
    } else if(rankIndicatorSelectionID==3){
        chartTitle = "Avg. Rent for 3 Bedroom Unit";
        chartSubtitle = "2022 ranking of Canadian cities";
        yAxisLabel = "Avg. Monthly Rent ($)";
    } else if(rankIndicatorSelectionID==4){
        chartTitle = "Avg. Monthly After-Tax Income";
        chartSubtitle = "2022 ranking of Canadian cities";
        yAxisLabel = "Avg. Monthly After-Tax Income ($)";
    } else if(rankIndicatorSelectionID==5){
        chartTitle = "Avg. 1 Bedroom Rent as a % of Income";
        chartSubtitle = "2022 ranking of Canadian cities";
        yAxisLabel = "Avg. 1 Bedroom Rent as a % of Income";
    } else {
        chartTitle = "Avg. Leftover Income After 1 Bedroom Rent (Monthly)";
        chartSubtitle = "2022 ranking of Canadian cities";
        yAxisLabel = "Avg. after-tax income minus avg. 1 bedroom rent (monthly $)";
    }

    //draw ranked bar chart
    
    //draw annual return chart with chart.js

    var ctx5 = document.getElementById('rankChart').getContext('2d');

    chart5 = new Chart(ctx5, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: rankedLabelArray,
            datasets: [
                {
                    data: rankedValueArray,
                    backgroundColor: colourArray[rankIndicatorSelectionID], 
                    datalabels: {
                        align: 'start',
                        anchor: 'end',
                        color: "white",
                        font: {
                            size: 10,
                        }
                    },
                },                
            ]
        },

        //options for annual returns chart.js bar chart
        options: annualReturnsBarChartOptions = {

            plugin_one_attribute: 1,
            maintainAspectRatio: false,
            
            scales: {
                y: {

                    title: {
                        display: true,
                        text: yAxisLabel,
                        color: "rgb(56,56,56)",
                        font: {
                            size: 14,
                        }
                    },

                    ticks: {
                        callback: function(value, index, values) {
                            
                            if(rankIndicatorSelectionID==5){
                                return percentFormatting(value);
                            } else {
                                return dollarFormatting(value);
                            }
                        },

                        color: "rgb(56,56,56)",
                        font: {
                            size: 14,
                            weight: "bold",
                        },

                        suggestedMin: 0,
                        suggestedMax: 1600,
                    },

                    grid: {
                        drawTicks: false,

                        color: function(context) {
                            if (context.tick.value == 0) {
                                return "#000000";
                            } else {
                                return "#E9E9E9";
                            }
                        }
                    },
                },

                x: {
                    
                    ticks: {

                        callback: function(val, index) {
                            return this.getLabelForValue(val)+" ";
                        },
                        autoSkip: false,

                        color: "rgb(56,56,56)",
                        font: {
                            size: 14,
                            weight: "bold",
                        },

                        maxRotation:90,
                        minRotation:90,
                    },

                    title: {
                        display: true,
                        text: "City",
                        color: "rgb(56,56,56)",
                        font: {
                            size: 14,
                        }
                    },

                },    
            },

            plugins: {

                title: {
                    display: true,
                    text: chartTitle,
                    color: "rgb(56,56,56)",
                    padding: 2,
                    font: {
                        size: 20,
                        weight: "bold",
                    }
                },

                subtitle: {
                    display: true,
                    text: chartSubtitle,
                    color: "rgb(56,56,56)",
                    font: {
                        size: 14,
                    }
                },

                legend: {
                    display: false,
                    labels: {
                        fontColor: "rgb(56,56,56)",
                        boxWidth: 13,
                        padding: 10,
                        font: {
                            size: 15,
                        }                    
                    },
                },

                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';

                            if (label) {
                                label += ': ';
                            }

                            if(rankIndicatorSelectionID==5){
                                label += percentFormatting(context.parsed.y);
                            } else {
                                label += dollarFormatting(context.parsed.y);
                            }

                            return label;
                        }
                    },
                },

                datalabels: {
                    formatter: function(value, context) {
                        
                        if(rankIndicatorSelectionID==5){
                            return percentFormatting(value);
                        } else {
                            return dollarFormatting(value);
                        }
                    },
                },
            },
        }
    });

}

function runSingleCityRentChart(){

    var ctx6 = document.getElementById('singleCityRentChart').getContext('2d');

    var selectedChartDataArray = [];
    var chartTitle = singleCitySelectionName+" - Average Rent Prices";
    var chartSubtitle = "1992 to 2022, various unit sizes";

    var lineWidth = 2;
    var markerSize = 3;
    var markerHoverSize = 5;

    //Get one bedroom rent price for the 3 selected cities
    selectedChartDataArray[0] = bachelorRentArray[singleCitySelectionID];
    selectedChartDataArray[1] = oneBedroomRentArray[singleCitySelectionID];
    selectedChartDataArray[2] = twoBedroomRentArray[singleCitySelectionID];
    selectedChartDataArray[3] = threeBedroomRentArray[singleCitySelectionID];

    chart6 = new Chart(ctx6, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: dateLabels,
            datasets: [
                {
                    label: "Studio unit",
                    data: selectedChartDataArray[0],
                    fill: false,
                    borderColor: colourArray[0],
                    borderWidth: lineWidth,
                    pointBorderColor: colourArray[0],
                    pointBackgroundColor: colourArray[0],
                    backgroundColor: colourArray[0],
                    pointBorderWidth: 1,
                    pointRadius: markerSize,
                    pointHoverRadius: markerHoverSize,
                    pointHitRadius: markerHoverSize,
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        color: colourArray[0],
                    },
                },
                {
                    label: "One bedroom",
                    data: selectedChartDataArray[1],
                    fill: false,
                    borderColor: colourArray[1],
                    borderWidth: lineWidth,
                    pointBorderColor: colourArray[1],
                    pointBackgroundColor: colourArray[1],
                    backgroundColor: colourArray[1],
                    pointBorderWidth: 1,
                    pointRadius: markerSize,
                    pointHoverRadius: markerHoverSize,
                    pointHitRadius: markerHoverSize,
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        color: colourArray[1],
                    },
                },
                {
                    label: "Two Bedroom",
                    data: selectedChartDataArray[2],
                    fill: false,
                    borderColor: colourArray[2],
                    borderWidth: lineWidth,
                    pointBorderColor: colourArray[2],
                    pointBackgroundColor: colourArray[2],
                    backgroundColor: colourArray[2],
                    pointBorderWidth: 1,
                    pointRadius: markerSize,
                    pointHoverRadius: markerHoverSize,
                    pointHitRadius: markerHoverSize,
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        color: colourArray[2],
                    },
                },
                {
                    label: "Three Bedroom",
                    data: selectedChartDataArray[3],
                    fill: false,
                    borderColor: colourArray[3],
                    borderWidth: lineWidth,
                    pointBorderColor: colourArray[3],
                    pointBackgroundColor: colourArray[3],
                    backgroundColor: colourArray[3],
                    pointBorderWidth: 1,
                    pointRadius: markerSize,
                    pointHoverRadius: markerHoverSize,
                    pointHitRadius: markerHoverSize,
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        color: colourArray[3],
                    },
                },
                
            ]
        },

        // Configuration options go here

        options: {

            maintainAspectRatio: false,
        
            scales: {
                y: {
                    ticks: {
                        // Include a dollar sign in the ticks and add comma formatting
                        callback: function(value, index, values) {
                            return dollarFormatting(value)+" ";
                        },

                        fontColor: "rgb(56,56,56)",
                        font: {
                            size: 14,
                            weight: "bold",
                        }
                    },

                    title: {
                        display: true,
                        text: "Avg. Rent Price (Monthly $)",
                        color: "rgb(56,56,56)",
                        font: {
                            size: 14,
                        }
                    },

                    grid: {
                        drawTicks: false,
                        color: function(context) {
                            if (context.tick.value == 0) {
                                return "#000000";
                            } else {
                                return "#E9E9E9";
                            }
                        }
                    },
                },

                x: {
                    ticks: {
                        callback: function(val, index) {
                            if (!(index % annualTickSpacing)) return this.getLabelForValue(val)+" ";
                        },
                        autoSkip: false,
                        fontColor: "rgb(56,56,56)",
                        font: {
                            size: 13,
                        },

                        maxRotation: 90,
                        minRotation: 90, 
                    },

                    title: {
                        display: true,
                        text: "Year",
                        color: "rgb(56,56,56)",
                        font: {
                            size: 14,
                        }
                    },

                    grid: {
                        drawTicks: false,

                        color: function(context) {
                            if (context.tick.value == 0) {
                                return "#000000";
                            } else {
                                return "#E9E9E9";
                            }
                        }
                    },
                },    
            },

            plugins: {

                title: {
                    display: true,
                    text: chartTitle,
                    color: "rgb(56,56,56)",
                    padding: 2,
                    font: {
                        size: 20,
                        weight: "bold",
                    }
                },

                subtitle: {
                    display: true,
                    text: chartSubtitle,
                    color: "rgb(56,56,56)",
                    font: {
                        size: 14,
                    }
                },

                legend: {
                    display: true,
                    labels: {
                        fontColor: "rgb(56,56,56)",
                        boxWidth: 13,
                        padding: 10,
                        font: {
                            size: 15,
                        }                    
                    },
                },

                tooltip: {
                
                    // Include a dollar sign in the ticks and add comma formatting
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';

                            if (label) {
                                label += ': ';
                            }
                            
                            label += dollarFormatting(context.parsed.y);
                            
                            return label;
                        }
                    },
                },

                datalabels: {
                    formatter: function(value, context) {
                        if (context.dataIndex === context.dataset.data.length - 1)
                        {
                            return dollarFormatting(value);
                        }
                        return "";
                    },
                },
            },


        }
    });

}

function runSingleCityPercentChangeChart(){

    var selectedDataArray = oneBedroomChangeArray[singleCitySelectionID];
    console.log("selected data array: "+selectedDataArray);

    //chart formatting

    var chartTitle = singleCitySelectionName+" - % Change in 1 Bedroom Rent Price";
    var chartSubtitle = "Annual % change, 1993 to 2022";
    var yAxisLabel = "Year-over-year % change in rent price";

    var percentChangeLabels = years.slice(1);
    
    //draw annual return chart with chart.js

    var ctx7 = document.getElementById('singleCityPercentChangeChart').getContext('2d');

    chart7 = new Chart(ctx7, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: percentChangeLabels,
            datasets: [
                {
                    data: selectedDataArray,
                    backgroundColor: colourArray[1], 
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        color: colourArray[1],
                        font: {
                            size: 10,
                            weight: "bold",
                        },
                    },
                },                
            ]
        },

        //options for annual returns chart.js bar chart
        options: annualReturnsBarChartOptions = {

            plugin_one_attribute: 1,
            maintainAspectRatio: false,
            
            scales: {
                y: {

                    title: {
                        display: true,
                        text: yAxisLabel,
                        color: "rgb(56,56,56)",
                        font: {
                            size: 14,
                        }
                    },

                    ticks: {
                        callback: function(value, index, values) {
                            
                            return percentFormatting(value);
                            
                        },

                        color: "rgb(56,56,56)",
                        font: {
                            size: 14,
                            weight: "bold",
                        },

                        //suggestedMin: 0,
                        //suggestedMax: 1600,
                    },

                    grid: {
                        drawTicks: false,

                        color: function(context) {
                            if (context.tick.value == 0) {
                                return "#000000";
                            } else {
                                return "#E9E9E9";
                            }
                        }
                    },
                },

                x: {
                    
                    ticks: {

                        callback: function(val, index) {
                            return this.getLabelForValue(val)+" ";
                        },
                        autoSkip: false,

                        color: "rgb(56,56,56)",
                        font: {
                            size: 13,
                        },

                        maxRotation:90,
                        minRotation:90,
                    },

                    title: {
                        display: true,
                        text: "Year",
                        color: "rgb(56,56,56)",
                        font: {
                            size: 14,
                        }
                    },

                },    
            },

            plugins: {

                title: {
                    display: true,
                    text: chartTitle,
                    color: "rgb(56,56,56)",
                    padding: 2,
                    font: {
                        size: 20,
                        weight: "bold",
                    }
                },

                subtitle: {
                    display: true,
                    text: chartSubtitle,
                    color: "rgb(56,56,56)",
                    font: {
                        size: 14,
                    }
                },

                legend: {
                    display: false,
                    labels: {
                        fontColor: "rgb(56,56,56)",
                        boxWidth: 13,
                        padding: 10,
                        font: {
                            size: 15,
                        }                    
                    },
                },

                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';

                            if (label) {
                                label += ': ';
                            }

                            label += percentFormatting(context.parsed.y);
                            
                            return label;
                        }
                    },
                },

                datalabels: {
                    formatter: function(value, context) {
                        return percentFormatting(value);
                    },

                    formatter: function(value, context) {
                        if (context.dataIndex % 2 != 0){
                            return percentFormatting(value);
                        }
                        return "";
                    },
                },

                
            },
        }
    });

}

function runRentTenureCharts(){
    
    //chart formatting
    var chartTitle = "Avg. Rent Price for Recent Renters vs. Existing Renters";
    var chartSubtitle = "2021, major Canadian cities";
    var yAxisLabel = "Avg. Rent Price (monthly $)";
    
    var barChartData = {
        labels: rentTenureLabels,
        datasets: [
          {
            label: "Recent Renters",
            backgroundColor: "#D196EE",
            borderColor: "#581845",
            borderWidth: 1,
            data: rentTenureDataArray[0],
            datalabels: {
                align: 'end',
                anchor: 'end',
                color: "#581845",
                font: {
                    size: 10,
                },
            },
          },
          {
            label: "Existing Renters",
            backgroundColor: "#FFDF7C",
            borderColor: "#E8B200",
            borderWidth: 1,
            data: rentTenureDataArray[1],
            datalabels: {
                align: 'end',
                anchor: 'end',
                color: "#E8B200",
                font: {
                    size: 10,
                },
            },
          },
        ]
    };

    //create grouped bar chart
    var ctx8 = document.getElementById('rentTenureChart').getContext('2d');

    chart8 = new Chart(ctx8, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: barChartData,

        //options for annual returns chart.js bar chart
        options: annualReturnsBarChartOptions = {

            plugin_one_attribute: 1,
            maintainAspectRatio: false,
            
            scales: {
                y: {

                    title: {
                        display: true,
                        text: yAxisLabel,
                        color: "rgb(56,56,56)",
                        font: {
                            size: 14,
                        }
                    },

                    ticks: {
                        callback: function(value, index, values) {
                            
                            return dollarFormatting(value);
                            
                        },

                        color: "rgb(56,56,56)",
                        font: {
                            size: 14,
                            weight: "bold",
                        },

                        //suggestedMin: 0,
                        //suggestedMax: 1600,
                    },

                    grid: {
                        drawTicks: false,

                        color: function(context) {
                            if (context.tick.value == 0) {
                                return "#000000";
                            } else {
                                return "#E9E9E9";
                            }
                        }
                    },
                },

                x: {
                    
                    ticks: {

                        callback: function(val, index) {
                            return this.getLabelForValue(val)+" ";
                        },
                        autoSkip: false,

                        color: "rgb(56,56,56)",
                        font: {
                            size: 14,
                            weight: "bold",
                        },

                        maxRotation:90,
                        minRotation:90,
                    },

                    title: {
                        display: true,
                        text: "City",
                        color: "rgb(56,56,56)",
                        font: {
                            size: 13,
                        }
                    },

                },    
            },

            plugins: {

                title: {
                    display: true,
                    text: chartTitle,
                    color: "rgb(56,56,56)",
                    padding: 2,
                    font: {
                        size: 20,
                        weight: "bold",
                    }
                },

                subtitle: {
                    display: true,
                    text: chartSubtitle,
                    color: "rgb(56,56,56)",
                    font: {
                        size: 14,
                    }
                },

                legend: {
                    display: true,
                    labels: {
                        fontColor: "rgb(56,56,56)",
                        boxWidth: 13,
                        padding: 10,
                        font: {
                            size: 15,
                        }                    
                    },
                },

                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';

                            if (label) {
                                label += ': ';
                            }

                            label += dollarFormatting(context.parsed.y);
                            
                            return label;
                        }
                    },
                },

                datalabels: {
                    formatter: function(value, context) {
                        return dollarFormatting(value);
                    },
                },
            },
        }
    });

    // Chart for % premium paid by recent renters

    //chart formatting
    var chartTitle = "% Premium Paid by Recent Renters vs. Existing Renters";
    var chartSubtitle = "2021, major Canadian cities";
    var yAxisLabel = "% Premium Paid by Recent Renters";
    
    var barChartData = {
        labels: rentTenureLabels,
        datasets: [
          {
            label: "% premium for recent renters",
            backgroundColor: "#D196EE",
            borderColor: "#581845",
            borderWidth: 1,
            data: rentTenureDataArray[2],
            datalabels: {
                align: 'start',
                anchor: 'end',
                color: "white",
                font: {
                    size: 10,
                }
            },
          },
        ]
    };

    var ctx9 = document.getElementById('rentTenurePremiumChart').getContext('2d');

    chart9 = new Chart(ctx9, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: barChartData,

        //options for annual returns chart.js bar chart
        options: annualReturnsBarChartOptions = {

            plugin_one_attribute: 1,
            maintainAspectRatio: false,
            
            scales: {
                y: {

                    title: {
                        display: true,
                        text: yAxisLabel,
                        color: "rgb(56,56,56)",
                        font: {
                            size: 14,
                        }
                    },

                    ticks: {
                        callback: function(value, index, values) {
                            
                            return percentFormatting(value);
                            
                        },

                        color: "rgb(56,56,56)",
                        font: {
                            size: 14,
                            weight: "bold",
                        },

                        suggestedMin: 0,
                        suggestedMax: 0.6,
                    },

                    grid: {
                        drawTicks: false,

                        color: function(context) {
                            if (context.tick.value == 0) {
                                return "#000000";
                            } else {
                                return "#E9E9E9";
                            }
                        }
                    },
                },

                x: {
                    
                    ticks: {

                        callback: function(val, index) {
                            return this.getLabelForValue(val)+" ";
                        },
                        autoSkip: false,

                        color: "rgb(56,56,56)",
                        font: {
                            size: 14,
                            weight: "bold",
                        },

                        maxRotation:90,
                        minRotation:90,
                    },

                    title: {
                        display: true,
                        text: "City",
                        color: "rgb(56,56,56)",
                        font: {
                            size: 13,
                        }
                    },

                },    
            },

            plugins: {

                title: {
                    display: true,
                    text: chartTitle,
                    color: "rgb(56,56,56)",
                    padding: 2,
                    font: {
                        size: 20,
                        weight: "bold",
                    }
                },

                subtitle: {
                    display: true,
                    text: chartSubtitle,
                    color: "rgb(56,56,56)",
                    font: {
                        size: 14,
                    }
                },

                legend: {
                    display: false,
                    labels: {
                        fontColor: "rgb(56,56,56)",
                        boxWidth: 13,
                        padding: 10,
                        font: {
                            size: 15,
                        }                    
                    },
                },

                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';

                            if (label) {
                                label += ': ';
                            }

                            label += percentFormatting(context.parsed.y);
                            
                            return label;
                        }
                    },
                },

                datalabels: {
                    formatter: function(value, context) {
                        return percentFormatting(value);
                    },
                },
            },
        }
    });
      
}


function inflationAdjustment(){
    for(i=0; i<homePriceDataArray.length; i++){
        realHomePriceDataArray[i] = [];
        for(j=0; j<homePriceDataArray[i].length; j++){
            realHomePriceDataArray[i][j] = homePriceDataArray[i][j] * (CPIDataArray[CPIDataArray.length-1] / CPIDataArray[j]);
        }
    }

    for(i=0; i<householdIncomeDataArray.length; i++){
        realHouseholdIncomeDataArray[i] = [];
        for(j=0; j<householdIncomeDataArray[i].length; j++){
            realHouseholdIncomeDataArray[i][j] = householdIncomeDataArray[i][j] * (CPIDataArray[CPIDataArray.length-1] / CPIDataArray[j]);
        }
    }

    for(i=0; i<impliedMortgagePaymentDataArray.length; i++){
        realImpliedMortgagePaymentDataArray[i] = [];
        for(j=0; j<impliedMortgagePaymentDataArray[i].length; j++){
            realImpliedMortgagePaymentDataArray[i][j] = impliedMortgagePaymentDataArray[i][j] * (CPIDataArray[CPIDataArray.length-1] / CPIDataArray[j]);
        }
    }

    for(i=0; i<qualifyingIncomeDataArray.length; i++){
        realQualifyingIncomeDataArray[i] = [];
        for(j=0; j<qualifyingIncomeDataArray[i].length; j++){
            realQualifyingIncomeDataArray[i][j] = qualifyingIncomeDataArray[i][j] * (CPIDataArray[CPIDataArray.length-1] / CPIDataArray[j]);
        }
    }

}


function dollarFormatting(val){
    return "$"+(Math.round(val).toLocaleString());
}

function dollarDeltaFormatting(val){
    if(val>0){
        return "+$"+(Math.round(val).toLocaleString());
    } else if(val==0){
        return "n/a";
    } else {
        return "-$"+(Math.abs(Math.round(val)).toLocaleString());
    }
}

function percentFormatting(val){
    return (Math.round(val*1000)/10).toLocaleString()+"%";
}

function percentDeltaFormatting(val){
    if(val>0){
        return "+"+(Math.round(val*1000)/10).toLocaleString()+"%";
    } else if(val==0){
        return "n/a";
    } else {
        return (Math.round(val*1000)/10).toLocaleString()+"%";
    }
}

function ratioFormatting(val){
    return (Math.round(val*10)/10).toFixed(1).toLocaleString()+"x";
}

function ratioDeltaFormatting(val){
    if(val>0){
        return "+"+(Math.round(val*10)/10).toFixed(1).toLocaleString()+"x";
    } else if(val==0){
        return "n/a";
    } else {
        return (Math.round(val*10)/10).toFixed(1).toLocaleString()+"x";
    }
}

function rankings(arr) {
    const sorted = [...arr].sort((a, b) => b - a);
    return arr.map((x) => sorted.indexOf(x) + 1);
};

function reorderArray(originalArray, rankArray){
    var newArray = [];
    for(i=0; i<originalArray.length; i++){
        var currentValue = originalArray[i];
        var currentRank = rankArray[i];
        newArray[currentRank-1] = currentValue;
    }
    return newArray;
}