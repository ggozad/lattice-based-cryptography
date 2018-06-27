	var INVN = 12277;	// 1024 * 12277 = 1 mod q
	var bitRev_psi_12289_1024 = [
		1, 1479, 8246, 5146, 4134, 6553, 11567, 1305, 5860, 3195, 1212, 10643, 3621, 9744, 8785, 3542, 4978, 1351, 3328, 6512, 7266, 5828, 6561, 7698, 9283, 2744, 11726, 2975, 9664, 949, 7468, 9650, 1853, 140, 4611, 11563, 4255, 1177, 1635, 9521, 7393, 9326, 9238, 9923, 12208, 3091, 7969, 1000, 7484, 8736, 9995, 11227, 7443, 9542, 3712, 9154, 9088, 9275, 1326, 7203, 2319, 1170, 790, 955, 9893, 7837, 3296, 8340, 12159, 4354, 9452, 6915, 5767, 827, 8541, 11336, 118, 2476, 2197, 5067, 5331, 7300, 1673, 4278, 4177, 8705, 9764, 1381, 1022, 12280, 9447, 11809, 9821, 11950, 11745, 6498, 8830, 8652, 12144, 6747, 4890, 6378, 2731, 8357, 7110, 8595, 10530, 3707, 9741, 4231, 3382, 355, 10276, 9000, 3241, 729, 10200, 7197, 3284, 2881, 1260, 7901, 5755, 7657, 10593, 10861, 11955, 9863, 243, 3016, 671, 9289, 9153, 7098, 8889, 9890, 10745, 2178, 11869, 5559, 7384, 8304, 8758, 476, 5332, 8779, 9919, 9424, 8311, 2969, 9042, 2686, 6882, 3186, 10659, 10163, 1153, 9405, 8241, 10040, 7875, 9442, 2174, 7917, 1689, 3364, 4057, 3271, 2305, 5042, 8236, 2645, 4895, 1484, 7094, 9509, 12129, 9140, 7852, 3, 2166, 8374, 4919, 113, 8653, 4938, 2704, 5291, 10512, 1663, 7635, 10863, 7644, 11885, 2143, 11224, 5277, 1168, 11082, 9041, 435, 4337, 10911, 1912, 4096, 11796, 5444, 2381, 5088, 4284, 1002, 7278, 7313, 1607, 875, 3780, 2566, 10102, 9867, 6250, 2437, 3646, 2987, 6022, 7404, 1017, 1632, 5084, 8526, 1440, 27, 3066, 7270, 11744, 2678, 3704, 7575, 8146, 10752, 242, 2401, 11847, 1067, 5101, 8511, 3833, 11516, 11899, 11244, 2859, 9808, 5012, 5698, 9377, 4861, 354, 400, 1728, 4948, 6137, 6874, 3643, 6136, 5862, 9090, 12233, 5529, 5206, 10587, 1987, 11635, 3565, 382, 11973, 3988, 11821, 6196, 8579, 6843, 6950, 1922, 3879, 8291, 10256, 6854, 10930, 973, 1254, 3860, 6844, 1050, 4536, 6118, 3818, 2683, 11099, 7840, 6833, 8500, 12142, 4467, 7500, 4749, 6752, 7373, 4324, 4075, 5315, 3262, 7210, 10120, 11767, 9945, 11011, 1973, 5574, 5925, 1018, 8775, 1041, 142, 1105, 3477, 5681, 9445, 8851, 8077, 975, 8757, 11286, 58, 12048, 10333, 7280, 6281, 11404, 6403, 7507, 5594, 3029, 11785, 4213, 9987, 11684, 3263, 8689, 6077, 4624, 8209, 11868, 3602, 6221, 5057, 7591, 3445, 7509, 2049, 7377, 10968, 192, 5241, 9369, 9162, 8120, 787, 8807, 1010, 6821, 5874, 11612, 6055, 8953, 52, 3174, 10966, 9523, 151, 2127, 3957, 2839, 9784, 6383, 1579, 431, 11177, 2078, 10331, 4322, 11367, 441, 4079, 11231, 9139, 10970, 4046, 11580, 4240, 3570, 835, 6065, 6803, 9235, 10542, 9166, 6370, 7856, 3834, 5257, 64, 8633, 11606, 9830, 6507, 1566, 2948, 9786, 4016, 4077, 9370, 8527, 11994, 6099, 652, 5766, 325, 1404, 948, 1146, 4049, 3728, 11130, 6299, 9734, 6167, 7105, 1200, 6170, 6992, 1360, 8333, 7991, 8960, 168, 2692, 1962, 1594, 6328, 7183, 9928, 10446, 9259, 4115, 9381, 218, 8760, 3434, 1954, 2051, 1805, 2882, 3963, 11713, 2447, 6147, 7515, 5429, 7552, 10996, 418, 3772, 5908, 453, 6413, 10008, 2031, 5333, 3969, 8298, 2767, 156, 12240, 1263, 1483, 5915, 6347, 10706, 10800, 9789, 7796, 3202, 2057, 6920, 6906, 1815, 11939, 10777, 1858, 7535, 8974, 426, 347, 9364, 10314, 3757, 12115, 723, 3009, 1693, 5735, 2655, 2738, 6421, 20, 5002, 5163, 4608, 8946, 8170, 10138, 1522, 6599, 2455, 11951, 3947, 10975, 10545, 3654, 9395, 1248, 2442, 5115, 7350, 10141, 5959, 8330, 6492, 1325, 5724, 1029, 10344, 8945, 6691, 1892, 8665, 193, 2800, 6197, 10058, 11366, 11251, 8122, 6085, 392, 2185, 425, 1836, 10669, 375, 11912, 7711, 2212, 2674, 3276, 3338, 1392, 6505, 506, 11034, 9714, 1165, 1942, 8881, 9513, 11111, 3511, 6811, 1236, 9272, 4475, 7043, 9689, 1057, 4705, 3121, 4739, 4251, 11063, 5518, 2360, 364, 7073, 3028, 8308, 10821, 8882, 11826, 9806, 2054, 10945, 3042, 8151, 12109, 4605, 2689, 12085, 5509, 1409, 7070, 4554, 994, 9389, 12050, 11777, 4670, 5464, 7383, 7021, 12143, 1687, 406, 10485, 10886, 6195, 7100, 8896, 7954, 3375, 2291, 7376, 8761, 4235, 8464, 622, 10552, 4499, 5672, 2947, 8307, 5609, 636, 4860, 11164, 1131, 1445, 11014, 6781, 5734, 1176, 5987, 6693, 3889, 579, 212, 6323, 3114, 9520, 8328, 3534, 1756, 4145, 6463, 10224, 8794, 4564, 2461, 2275, 4267, 6636, 10771, 3765, 5063, 4176, 10032, 4505, 6613, 10872, 9202, 5835, 7406, 3975, 9233, 2528, 4963, 3744, 11877, 5102, 6701, 5845, 9089, 10754, 9572, 60, 6453, 7723, 68, 2260, 1014, 448, 4924, 7508, 1327, 8682, 5232, 8347, 5412, 4209, 5993, 3278, 7228, 11071, 438, 8774, 8700, 717, 9307, 1373, 8186, 2429, 10568, 10753, 3448, 11946, 7751, 10381, 11081, 7562, 5211, 1866, 2164, 5416, 716, 2110, 11873, 11475, 10584, 9839, 612, 8051, 8062, 3368, 10763, 4222, 540, 12164, 10221, 1389, 4404, 346, 4032, 3163, 6127, 4840, 11153, 3449, 9051, 3708, 10463, 2926, 9118, 4489, 3678, 8024, 11825, 1928, 3359, 3205, 11197, 7080, 8000, 9982, 648, 12139, 2301, 11415, 12119, 6639, 9754, 11169, 12268, 5808, 2827, 2873, 11498, 9855, 7640, 5969, 6026, 2929, 1030, 11823, 1681, 3821, 1573, 3846, 6063, 8496, 1901, 9687, 7171, 502, 3466, 1701, 8711, 4697, 11759, 2626, 4504, 778, 9332, 1481, 10243, 9349, 3317, 2532, 8957, 12150, 12281, 457, 7766, 7988, 3795, 9021, 5776, 1849, 2276, 11307, 2593, 879, 7899, 8071, 3454, 8531, 2840, 9811, 8095, 3019, 4565, 4974, 1783, 7211, 3094, 4518, 1160, 7469, 10036, 10421, 2730, 6878, 5170, 2672, 1279, 11424, 2209, 10526, 3116, 189, 3815, 1734, 10939, 6457, 4423, 3869, 10595, 1530, 2828, 4352, 7455, 2712, 4113, 72, 10447, 3840, 6508, 3045, 11194, 2643, 3451, 4094, 7911, 1241, 6879, 11038, 10499, 7014, 1040, 2035, 10407, 6125, 3020, 5673, 5406, 7624, 11345, 4770, 7002, 8620, 2338, 4693, 9996, 417, 6138, 8820, 7846, 3418, 10734, 10487, 7186, 10398, 11066, 9955, 4411, 10699, 881, 365, 1927, 11274, 4510, 9652, 2946, 6828, 1280, 614, 10918, 12265, 7250, 6742, 9804, 11385, 6586, 7806, 3065, 10783, 6389, 11379, 751, 4719, 6500, 3502, 6671, 10631, 7246, 826, 1398, 3090, 10345, 450, 6921, 11711, 510, 4661, 2622, 6903, 63, 7154, 3360, 4684, 2373, 7302, 3670, 8481, 1936, 7, 845, 8566, 3285, 4360, 3154, 7235, 2213, 4153, 11522, 8484, 5526, 769, 12073, 50, 2832, 10268, 3572, 11007, 8360, 1706, 7559, 9060, 5370, 3536, 3753, 8348, 5646, 6203, 6184, 3120, 11309, 682, 5082, 7699, 4050, 5207, 7087, 11445, 8452, 2595, 4273, 3221, 2941, 11722, 5289, 6627, 293, 3232, 7434, 8520, 6940, 2945, 9656, 1406, 8809, 2171, 11024, 9282, 4099, 3944, 5604, 5530
	];
	
	var bitRev_psiInv_12289_1024 = [
		1, 10810, 7143, 4043, 10984, 722, 5736, 8155, 8747, 3504, 2545, 8668, 1646, 11077, 9094, 6429, 2639, 4821, 11340, 2625, 9314, 563, 9545, 3006, 4591, 5728, 6461, 5023, 5777, 8961, 10938, 7311, 11334, 11499, 11119, 9970, 5086, 10963, 3014, 3201, 3135, 8577, 2747, 4846, 1062, 2294, 3553, 4805, 11289, 4320, 9198, 81, 2366, 3051, 2963, 4896, 2768, 10654, 11112, 8034, 726, 7678, 12149, 10436, 2426, 334, 1428, 1696, 4632, 6534, 4388, 11029, 9408, 9005, 5092, 2089, 11560, 9048, 3289, 2013, 11934, 8907, 8058, 2548, 8582, 1759, 3694, 5179, 3932, 9558, 5911, 7399, 5542, 145, 3637, 3459, 5791, 544, 339, 2468, 480, 2842, 9, 11267, 10908, 2525, 3584, 8112, 8011, 10616, 4989, 6958, 7222, 10092, 9813, 12171, 953, 3748, 11462, 6522, 5374, 2837, 7935, 130, 3949, 8993, 4452, 2396, 11935, 7428, 2912, 6591, 7277, 2481, 9430, 1045, 390, 773, 8456, 3778, 7188, 11222, 442, 9888, 12047, 1537, 4143, 4714, 8585, 9611, 545, 5019, 9223, 12262, 10849, 3763, 7205, 10657, 11272, 4885, 6267, 9302, 8643, 9852, 6039, 2422, 2187, 9723, 8509, 11414, 10682, 4976, 5011, 11287, 8005, 7201, 9908, 6845, 493, 8193, 10377, 1378, 7952, 11854, 3248, 1207, 11121, 7012, 1065, 10146, 404, 4645, 1426, 4654, 10626, 1777, 6998, 9585, 7351, 3636, 12176, 7370, 3915, 10123, 12286, 4437, 3149, 160, 2780, 5195, 10805, 7394, 9644, 4053, 7247, 9984, 9018, 8232, 8925, 10600, 4372, 10115, 2847, 4414, 2249, 4048, 2884, 11136, 2126, 1630, 9103, 5407, 9603, 3247, 9320, 3978, 2865, 2370, 3510, 6957, 11813, 3531, 3985, 4905, 6730, 420, 10111, 1544, 2399, 3400, 5191, 3136, 3000, 11618, 9273, 12046, 5868, 9551, 9634, 6554, 10596, 9280, 11566, 174, 8532, 1975, 2925, 11942, 11863, 3315, 4754, 10431, 1512, 350, 10474, 5383, 5369, 10232, 9087, 4493, 2500, 1489, 1583, 5942, 6374, 10806, 11026, 49, 12133, 9522, 3991, 8320, 6956, 10258, 2281, 5876, 11836, 6381, 8517, 11871, 1293, 4737, 6860, 4774, 6142, 9842, 576, 8326, 9407, 10484, 10238, 10335, 8855, 3529, 12071, 2908, 8174, 3030, 1843, 2361, 5106, 5961, 10695, 10327, 9597, 12121, 3329, 4298, 3956, 10929, 5297, 6119, 11089, 5184, 6122, 2555, 5990, 1159, 8561, 8240, 11143, 11341, 10885, 11964, 6523, 11637, 6190, 295, 3762, 2919, 8212, 8273, 2503, 9341, 10723, 5782, 2459, 683, 3656, 12225, 7032, 8455, 4433, 5919, 3123, 1747, 3054, 5486, 6224, 11454, 8719, 8049, 709, 8243, 1319, 3150, 1058, 8210, 11848, 922, 7967, 1958, 10211, 1112, 11858, 10710, 5906, 2505, 9450, 8332, 10162, 12138, 2766, 1323, 9115, 12237, 3336, 6234, 677, 6415, 5468, 11279, 3482, 11502, 4169, 3127, 2920, 7048, 12097, 1321, 4912, 10240, 4780, 8844, 4698, 7232, 6068, 8687, 421, 4080, 7665, 6212, 3600, 9026, 605, 2302, 8076, 504, 9260, 6695, 4782, 5886, 885, 6008, 5009, 1956, 241, 12231, 1003, 3532, 11314, 4212, 3438, 2844, 6608, 8812, 11184, 12147, 11248, 3514, 11271, 6364, 6715, 10316, 1278, 2344, 522, 2169, 5079, 9027, 6974, 8214, 7965, 4916, 5537, 7540, 4789, 7822, 147, 3789, 5456, 4449, 1190, 9606, 8471, 6171, 7753, 11239, 5445, 8429, 11035, 11316, 1359, 5435, 2033, 3998, 8410, 10367, 5339, 5446, 3710, 6093, 468, 8301, 316, 11907, 8724, 654, 10302, 1702, 7083, 6760, 56, 3199, 6427, 6153, 8646, 5415, 6152, 7341, 10561, 11889, 6759, 6685, 8345, 8190, 3007, 1265, 10118, 3480, 10883, 2633, 9344, 5349, 3769, 4855, 9057, 11996, 5662, 7000, 567, 9348, 9068, 8016, 9694, 3837, 844, 5202, 7082, 8239, 4590, 7207, 11607, 980, 9169, 6105, 6086, 6643, 3941, 8536, 8753, 6919, 3229, 4730, 10583, 3929, 1282, 8717, 2021, 9457, 12239, 216, 11520, 6763, 3805, 767, 8136, 10076, 5054, 9135, 7929, 9004, 3723, 11444, 12282, 10353, 3808, 8619, 4987, 9916, 7605, 8929, 5135, 12226, 5386, 9667, 7628, 11779, 578, 5368, 11839, 1944, 9199, 10891, 11463, 5043, 1658, 5618, 8787, 5789, 7570, 11538, 910, 5900, 1506, 9224, 4483, 5703, 904, 2485, 5547, 5039, 24, 1371, 11675, 11009, 5461, 9343, 2637, 7779, 1015, 10362, 11924, 11408, 1590, 7878, 2334, 1223, 1891, 5103, 1802, 1555, 8871, 4443, 3469, 6151, 11872, 2293, 7596, 9951, 3669, 5287, 7519, 944, 4665, 6883, 6616, 9269, 6164, 1882, 10254, 11249, 5275, 1790, 1251, 5410, 11048, 4378, 8195, 8838, 9646, 1095, 9244, 5781, 8449, 1842, 12217, 8176, 9577, 4834, 7937, 9461, 10759, 1694, 8420, 7866, 5832, 1350, 10555, 8474, 12100, 9173, 1763, 10080, 865, 11010, 9617, 7119, 5411, 9559, 1868, 2253, 4820, 11129, 7771, 9195, 5078, 10506, 7315, 7724, 9270, 4194, 2478, 9449, 3758, 8835, 4218, 4390, 11410, 9696, 982, 10013, 10440, 6513, 3268, 8494, 4301, 4523, 11832, 8, 139, 3332, 9757, 8972, 2940, 2046, 10808, 2957, 11511, 7785, 9663, 530, 7592, 3578, 10588, 8823, 11787, 5118, 2602, 10388, 3793, 6226, 8443, 10716, 8468, 10608, 466, 11259, 9360, 6263, 6320, 4649, 2434, 791, 9416, 9462, 6481, 21, 1120, 2535, 5650, 170, 874, 9988, 150, 11641, 2307, 4289, 5209, 1092, 9084, 8930, 10361, 464, 4265, 8611, 7800, 3171, 9363, 1826, 8581, 3238, 8840, 1136, 7449, 6162, 9126, 8257, 11943, 7885, 10900, 2068, 125, 11749, 8067, 1526, 8921, 4227, 4238, 11677, 2450, 1705, 814, 416, 10179, 11573, 6873, 10125, 10423, 7078, 4727, 1208, 1908, 4538, 343, 8841, 1536, 1721, 9860, 4103, 10916, 2982, 11572, 3589, 3515, 11851, 1218, 5061, 9011, 6296, 8080, 6877, 3942, 7057, 3607, 10962, 4781, 7365, 11841, 11275, 10029, 12221, 4566, 5836, 12229, 2717, 1535, 3200, 6444, 5588, 7187, 412, 8545, 7326, 9761, 3056, 8314, 4883, 6454, 3087, 1417, 5676, 7784, 2257, 8113, 7226, 8524, 1518, 5653, 8022, 10014, 9828, 7725, 3495, 2065, 5826, 8144, 10533, 8755, 3961, 2769, 9175, 5966, 12077, 11710, 8400, 5596, 6302, 11113, 6555, 5508, 1275, 10844, 11158, 1125, 7429, 11653, 6680, 3982, 9342, 6617, 7790, 1737, 11667, 3825, 8054, 3528, 4913, 9998, 8914, 4335, 3393, 5189, 6094, 1403, 1804, 11883, 10602, 146, 5268, 4906, 6825, 7619, 512, 239, 2900, 11295, 7735, 5219, 10880, 6780, 204, 9600, 7684, 180, 4138, 9247, 1344, 10235, 2483, 463, 3407, 1468, 3981, 9261, 5216, 11925, 9929, 6771, 1226, 8038, 7550, 9168, 7584, 11232, 2600, 5246, 7814, 3017, 11053, 5478, 8778, 1178, 2776, 3408, 10347, 11124, 2575, 1255, 11783, 5784, 10897, 8951, 9013, 9615, 10077, 4578, 377, 11914, 1620, 10453, 11864, 10104, 11897, 6204, 4167, 1038, 923, 2231, 6092, 9489, 12096, 3624, 10397, 5598, 3344, 1945, 11260, 6565, 10964, 5797, 3959, 6330, 2148, 4939, 7174, 9847, 11041, 2894, 8635, 1744, 1314, 8342, 338, 9834, 5690, 10767, 2151, 4119, 3343, 7681, 7126, 7287, 12269
	];
	//-----------------------------------Global variables-----------------------------------
	var ntt_a;
	var ntt_b = new Array(n);
	var ntt_s;
	var ntt_e;
	
	var ntt_s1;
	var ntt_e1;
	var u = new Array(n);
	var ntt_v = new Array(n);
	var v;
	var r;
	
	var ntt_v1 = new Array(n);
	var v1;
	var ka;
	var kb;
	
	var Bmatrix;
	//--------------------------------------------------------------------------------------
	function NTT(A, n) {
		var NTT_A_COEFF = copyOf(A.slice(), n);
		var t = n;
		for (var m = 1; m < n; m<<=1) {
			t>>=1;
			for (var i = 0; i < m; i++) {
				var j1 = (i<<1) * t;
				var j2 = j1 + t - 1;
				var S = bitRev_psi_12289_1024[m+i];
				for (var j = j1; j <= j2; j++) {
					var U = NTT_A_COEFF[j];
					var V = NTT_A_COEFF[j+t] * S;
					NTT_A_COEFF[j] = (U + V) % q;
					NTT_A_COEFF[j+t] = (U - V) % q;
					if(NTT_A_COEFF[j+t] < 0) {
						NTT_A_COEFF[j+t] = NTT_A_COEFF[j+t] + q;
					}
				}// end for
			}// end for
		}// end for
		return NTT_A_COEFF;
	}
	
	function INTT(A, n) {
		var NTT_A_COEFF = copyOf(A.slice(), n);
		var t = 1;
		for (var m = n; m > 1; m>>=1)	{
			var j1 = 0;
			var h = (m>>1);
			for (var i = 0; i < h; i++) {
				var j2 = j1 + t - 1;
				var S = bitRev_psiInv_12289_1024[h+i];
				for (var j = j1; j <= j2; j++) {
					var U = NTT_A_COEFF[j];
					var V = NTT_A_COEFF[j+t];
					NTT_A_COEFF[j] = (U + V) % q;
					var temp = U - V;
					if(temp < 0) {
						temp += q;
					}
					NTT_A_COEFF[j+t] = (temp * S) % q;
					
				}// end for
				// j1 = j1 + 2t
				j1 = j1 + (t<<1);
			}// end for
			t<<=1;
		}// end for
		
		for (var j = 0; j < n; j++) {
			NTT_A_COEFF[j] = (NTT_A_COEFF[j] * INVN) % q;
		}// end for
		return NTT_A_COEFF;
	}
	
	function nextInt(q) {
	    return Math.floor(random() * q);	//prng.js -> random()
	}
	
	function getBit (decimal_a, index) {
		return (decimal_a >> index) & 1;
	}
	
	//return a copy of the original array, truncated or padded with zeros to obtain the specified length
	function copyOf(arr1, length) {
		var arr2 = new Array(length);
		for (var i = 0; i < length; i++) {
			if (i >= arr1.length) {
				arr2[i] = 0;
			} else {
				arr2[i] = arr1[i];
			}
		}
		return arr2;
	}
	
	function testBinomialSample (value) {
		var sum = 0;
		sum = (getBit(value, 0) - getBit(value, 16)) +
			(getBit(value, 1) - getBit(value, 17)) +
			(getBit(value, 2) - getBit(value, 18)) +
			(getBit(value, 3) - getBit(value, 19)) +
			(getBit(value, 4) - getBit(value, 20)) +
			(getBit(value, 5) - getBit(value, 21)) +
			(getBit(value, 6) - getBit(value, 22)) +
			(getBit(value, 7) - getBit(value, 23)) +
			(getBit(value, 8) - getBit(value, 24)) +
			(getBit(value, 9) - getBit(value, 25)) +
			(getBit(value, 10) - getBit(value, 26)) +
			(getBit(value, 11) - getBit(value, 27)) +
			(getBit(value, 12) - getBit(value, 28)) +
			(getBit(value, 13) - getBit(value, 29)) +
			(getBit(value, 14) - getBit(value, 30)) +
			(getBit(value, 15) - getBit(value, 31));
		//return sum;
		return parseInt(Math.abs(sum));
	}
	
	function norm1(x0, x1, x2, x3){
		//var sum = 0;
		var sum = Math.abs(x0) + Math.abs(x1) + Math.abs(x2) + Math.abs(x3);
		return sum;
	}
	
	function mod(x, modulus) {
		var remainder = 0;
		if (modulus == 4) {
			remainder = x & 3;
		} else if (modulus == 2048) {
			remainder = x & 2047;
		} else {
			remainder %= modulus;
			while (remainder < 0) {
				remainder += modulus;
			}
		}
		return remainder;
	}
	
	function helpRec(v, bit){
		var r = new Array(v.length);
		for (var i = 0; i < v.length; i++) {
			r[i] = (v[i] + bit * 0.5) * 4.0 / q;
		}
		cvp(r);
		return r;
	}
	
	function cvp(v_coeffs) {
		for (var i = 0; i < v_coeffs.length / 4; i++) {
			var x_0 = v_coeffs[i];
			var x_1 = v_coeffs[i+ v_coeffs.length/4];
			var x_2 = v_coeffs[i+ v_coeffs.length/2];
			var x_3 = v_coeffs[i+ v_coeffs.length - v_coeffs.length/4];
			
			var v0_0 = Math.round(x_0);
			var v0_1 = Math.round(x_1);
			var v0_2 = Math.round(x_2);
			var v0_3 = Math.round(x_3);
			
			var v1_0 = Math.round(x_0 - 0.5);
			var v1_1 = Math.round(x_1 - 0.5);
			var v1_2 = Math.round(x_2 - 0.5);
			var v1_3 = Math.round(x_3 - 0.5);
			
			var vk_0 = 0, vk_1 = 0, vk_2 = 0, vk_3 = 0, k = 0;
			if (norm1(x_0 - v0_0, x_1 - v0_1, x_2 - v0_2, x_3 - v0_3) < 1) {
				vk_0 = v0_0;
				vk_1 = v0_1;
				vk_2 = v0_2;
				vk_3 = v0_3;
				k = 0;
			} else {
				vk_0 = v1_0;
				vk_1 = v1_1;
				vk_2 = v1_2;
				vk_3 = v1_3;
				k = 1;
			}
			vk_0 = vk_0 + (-1.0 * vk_3);
			vk_1 = vk_1 + (-1.0 * vk_3);
			vk_2 = vk_2 + (-1.0 * vk_3);
			vk_3 = k + (2.0 * vk_3);
			
			v_coeffs[i] = mod(vk_0, 4);
			v_coeffs[i+ v_coeffs.length/4] = mod(vk_1, 4);
			v_coeffs[i+ v_coeffs.length/2] = mod(vk_2, 4);
			v_coeffs[i+ v_coeffs.length - v_coeffs.length/4] = mod(vk_3, 4);
		}
	}
	
	function rec(v_coeffs, r_coeffs, Bmatrix) {
		var k = new Array(r_coeffs.length/4);
		for (var i = 0; i < v_coeffs.length/4; i++) {
			var v_0 = v_coeffs[i] * 1.0 / q;
			var v_1 = v_coeffs[i+ v_coeffs.length/4] * 1.0 / q;
			var v_2 = v_coeffs[i+ v_coeffs.length/2] * 1.0 / q;
			var v_3 = v_coeffs[i+ v_coeffs.length - v_coeffs.length/4] * 1.0 / q;
			
			var r_0 = r_coeffs[i];
			var r_1 = r_coeffs[i+ r_coeffs.length/4];
			var r_2 = r_coeffs[i+ r_coeffs.length/2];
			var r_3 = r_coeffs[i+ r_coeffs.length - r_coeffs.length/4];
			
			var rvector = [r_0, r_1, r_2, r_3];
			var rTBT = vector_multiply_matrix(rvector, Bmatrix, Bmatrix[0].length);
			
			k[i] = decode(v_0 - rTBT[0]/4.0, v_1 - rTBT[1]/4.0, v_2 - rTBT[2]/4.0, v_3 - rTBT[3]/4.0);
		}
		return k;
	}
	
	function decode(x_0, x_1, x_2, x_3) {	
		var v_0 = x_0 - Math.round(x_0);
		var v_1 = x_1 - Math.round(x_1);
		var v_2 = x_2 - Math.round(x_2);
		var v_3 = x_3 - Math.round(x_3);
		
		var k = 0;
		if (norm1(v_0, v_1, v_2, v_3) <= 1) {
			k = 0;
		} else {
			k = 1;
		}
		return k;
	}
	
	//Multiply a matrix B by a vevtor a, c = a * B
	function vector_multiply_matrix(a, B, Bcol) {
	//Matrix inner dimensions must agree
		var c = new Array(Bcol);
		for (var j = 0; j < Bcol; j++) {
			c[j] = 0;
		}
		
		for (var i = 0; i < a.length; i++) {
			var Browi = B[i];
			for (var j = 0; j < Bcol; j++) {
				c[j] += Browi[j]*a[i];
			}
		}
		return c;
	}
	//------------------------------------- alice0 -------------------------------------
	function alice0() {
		var arr_s = new Array(n);		// secret key s
		var arr_e = new Array(n);
		
		for (var i = 0; i < n; i++) {
			arr_s[i] = testBinomialSample(nextInt(MO));
			arr_e[i] = testBinomialSample(nextInt(MO));
		}
		
		ntt_s = NTT(arr_s, arr_s.length);
		ntt_e = NTT(arr_e, arr_e.length);

		//public key b
		for (var i = 0; i < n; i++) {
			ntt_b[i] = (ntt_a[i] * ntt_s[i] + ntt_e[i]) % q;  // Component multiply
		}
	}
	//------------------------------------- bob -------------------------------------
	function bob() {
		var arr_s1 = new Array(n);
		var arr_e1 = new Array(n);
		var arr_e2 = new Array(n);
		
		for (var i = 0; i < n; i++) {
			arr_s1[i] = testBinomialSample(nextInt(MO));
			arr_e1[i] = testBinomialSample(nextInt(MO));
			arr_e2[i] = testBinomialSample(nextInt(MO));
		}
			
		ntt_s1 = NTT(arr_s1, arr_s1.length);
		ntt_e1 = NTT(arr_e1, arr_e1.length);
		
		for (var i = 0; i < n; i++) {
			u[i] = (ntt_a[i] * ntt_s1[i] + ntt_e1[i]) % q;  	// Component multiply
			ntt_v[i] = (ntt_b[i] * ntt_s1[i]);
		}
		
		v = INTT(ntt_v, ntt_v.length);
		
		for (var i = 0; i < n; i++) {
			v[i] = (v[i] + arr_e2[i]) % q;
			if(v[i] < 0) {
				v[i] += q;
			}
		}
		
		var bit = nextInt(2);
		// g = (0.5, 0.5, 0.5, 0.5)
		//-------- HelpRec --------
		r = helpRec(v, bit);
		//-------- Rec --------
		kb = rec(v, r, Bmatrix);
	}
	//------------------------------------- alice1 -------------------------------------
	function alice1() {
		for (var i = 0; i < n; i++) {
			ntt_v1[i] = (u[i] * ntt_s[i]) % q;  // Component multiply
		}
		v1 = INTT(ntt_v1, ntt_v1.length);
		//-------- Rec --------
		ka = rec(v1, r, Bmatrix);
	}
	//------------------------------------------- start newhope -------------------------------------------
	var n = 1024;
	var q = 12289;
	var k = 16;
	var MO = 4294967296;	//var MO = Math.pow(2,32);
	
	function testnewhope() {
		print("Test NewHope:");
		print("Input:");
		print("n = " + n);
		print("q = " + q);
		print("k = " + k);
		
		var arr_a = new Array(n);	// public key a
		for (var j = 0; j < n; j++) {
			arr_a[j] = nextInt(q);
		}
		ntt_a = NTT(arr_a, arr_a.length);
		
		// g = (0.5, 0.5, 0.5, 0.5)
		//var b_arr = [[1,0,0,0.5],[0,1,0,0.5],[0,0,1,0.5],[0,0,0,0.5]];
		Bmatrix = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0.5,0.5,0.5,0.5]];
		
		alice0();
		bob();
		alice1();
		
		print("Output:");
		print("ka: " + ka.toString());
		print("kb: " + kb.toString());
		
		if(ka.toString() == kb.toString()) {
			print("Success!");
		} else {
			print("Failed");
		}
		print("");
	}
	//***********************************************************
	function print(message) {
		//WScript.Echo(message);	//for WSH
		console.log(message);
	}
	testnewhope();
