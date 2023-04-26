import styles from "./styles.module.scss";
const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="600.000000pt"
        height="600.000000pt"
        viewBox="0 0 600.000000 600.000000"
        preserveAspectRatio="xMidYMid meet"
        className={styles.loader_icon}
      >
        <g
          transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M2760 5989 c-447 -39 -901 -184 -1278 -407 -1115 -662 -1678 -1930
-1417 -3197 179 -868 748 -1622 1539 -2041 291 -153 629 -263 976 -315 120
-19 191 -23 405 -23 275 -1 374 7 595 50 801 156 1509 643 1956 1347 70 110
213 393 264 520 135 344 212 798 196 1163 -24 566 -179 1064 -476 1532 -123
194 -231 326 -414 507 -256 254 -476 411 -791 565 -309 151 -614 243 -946 285
-153 19 -469 27 -609 14z m502 -221 l-22 -22 -22 22 -22 22 44 0 44 0 -22 -22z
m-212 -88 c0 -5 -8 -10 -18 -10 -18 0 -42 -18 -42 -31 0 -4 23 -20 50 -35 28
-15 50 -33 50 -40 0 -18 52 -44 88 -44 16 0 66 11 112 25 46 14 96 25 111 25
22 0 27 4 22 16 -7 18 -4 18 160 -19 59 -13 97 -26 97 -34 0 -23 -44 -41 -114
-46 -68 -5 -105 -24 -92 -46 4 -6 35 -27 69 -47 123 -71 149 -122 82 -158 -53
-29 -78 -76 -73 -135 3 -26 12 -59 21 -72 63 -91 147 -220 161 -247 10 -19 21
-30 28 -26 7 4 8 3 4 -4 -4 -7 1 -23 11 -37 20 -27 38 -33 29 -9 -3 9 -2 12 5
9 6 -4 8 -13 5 -21 -3 -7 -1 -16 5 -20 6 -3 24 -24 40 -46 33 -47 36 -83 13
-154 -12 -34 -18 -92 -20 -184 -1 -74 -3 -151 -4 -170 -2 -30 -3 -32 -7 -8 -3
18 -9 25 -19 21 -8 -3 -14 -11 -14 -19 0 -18 -42 -28 -90 -21 -49 6 -121 74
-141 132 -7 22 -20 46 -28 53 -8 6 -16 18 -17 25 -1 6 -11 39 -23 72 -11 33
-23 72 -26 86 -5 26 -41 47 -47 28 -2 -5 -32 18 -66 52 -68 66 -168 119 -224
119 -40 0 -82 20 -86 41 -1 8 7 25 18 37 l21 22 -27 0 -27 0 22 24 22 24 -22
16 c-45 31 -94 16 -84 -26 4 -16 1 -29 -9 -37 -8 -7 -17 -24 -21 -39 -5 -26
-8 -27 -68 -27 -49 0 -62 -3 -65 -16 -2 -12 6 -18 30 -22 75 -13 98 -20 98
-28 0 -30 -175 10 -185 41 -9 29 2 40 40 40 24 0 38 6 45 20 9 17 14 18 31 9
26 -14 59 13 59 48 0 13 12 35 26 48 30 28 23 30 -49 18 -28 -4 -37 -10 -32
-20 3 -9 -3 -17 -15 -20 -11 -3 -20 -12 -20 -19 0 -21 -21 -17 -27 6 -7 24 -5
24 -53 0 -22 -11 -40 -27 -40 -34 0 -8 -10 -16 -23 -20 -22 -5 -47 -52 -47
-87 0 -9 -11 -26 -24 -38 -19 -18 -31 -22 -51 -17 -18 5 -25 3 -20 -4 4 -7 -2
-20 -14 -31 -14 -14 -21 -32 -21 -58 0 -23 -8 -48 -20 -63 -34 -44 6 -60 94
-36 40 11 47 10 66 -7 27 -25 27 -106 -1 -176 -15 -39 -22 -85 -25 -173 -8
-180 -42 -281 -102 -304 -37 -15 -92 -25 -92 -18 0 4 27 53 59 109 33 56 63
114 66 128 15 59 -55 129 -128 129 -54 0 -92 -22 -172 -100 -80 -79 -138 -106
-244 -116 -87 -8 -152 1 -180 27 -18 17 -21 31 -21 90 0 52 -3 70 -12 67 -7
-3 -14 -15 -16 -29 -7 -60 -12 -69 -39 -69 -21 0 -93 34 -93 45 0 1 -7 40 -16
86 -22 119 -6 218 47 290 33 43 37 53 28 76 -8 22 -5 33 18 66 15 22 42 56 59
74 l32 33 98 -1 c55 0 131 4 169 10 86 13 95 13 95 2 0 -5 -21 -14 -47 -21
-47 -11 -73 -26 -73 -40 0 -4 12 -19 26 -34 l27 -26 -78 0 c-71 0 -83 -3 -127
-31 -55 -36 -65 -50 -77 -115 -12 -62 5 -128 60 -234 51 -99 64 -105 140 -64
62 34 84 65 93 128 12 93 61 172 154 248 28 23 31 31 22 47 -5 11 -10 27 -10
35 0 25 30 18 40 -9 11 -28 27 -32 54 -12 18 13 18 15 1 40 -19 29 -34 34 -53
15 -19 -19 -27 20 -8 41 23 26 20 30 -19 24 -30 -5 -36 -2 -46 20 -10 21 -24
29 -81 42 -128 29 -184 69 -245 172 l-27 46 12 132 c6 72 16 143 21 158 6 15
33 57 61 95 27 37 61 82 74 100 24 32 87 85 132 110 26 14 33 35 9 25 -13 -5
-14 -2 -4 21 7 14 18 26 25 26 7 0 14 12 16 28 l3 27 90 2 c50 1 171 3 270 6
177 4 220 -1 302 -33 23 -9 35 0 39 28 5 32 15 42 44 42 16 0 30 -4 30 -10z
m-1005 -132 c-38 -36 -61 -104 -31 -92 26 10 21 -48 -6 -73 -44 -38 -112 -71
-139 -66 -22 4 -29 -1 -42 -30 -10 -21 -17 -60 -17 -96 0 -34 -7 -91 -16 -127
l-17 -65 27 -50 c14 -28 26 -64 26 -79 0 -33 -96 -200 -115 -200 -17 0 -30 18
-44 62 -16 49 -31 56 -106 50 -96 -7 -101 30 -9 73 62 29 73 45 53 81 -17 33
-46 38 -125 25 -37 -7 -68 -10 -71 -7 -3 2 23 19 56 38 33 18 61 36 61 39 0 4
-30 20 -67 36 l-67 30 50 29 c68 40 163 116 163 132 1 8 11 22 23 32 18 14 20
20 10 33 -15 18 -8 38 18 55 18 11 21 9 30 -13 19 -51 12 -91 -25 -135 -50
-59 -45 -76 13 -46 40 20 59 46 72 94 14 55 87 158 120 171 56 22 70 23 64 7
-14 -36 18 -13 44 31 33 58 66 93 86 93 10 0 3 -12 -19 -32z m1783 -180 c49
-23 52 -35 16 -69 -32 -30 -29 -76 9 -133 15 -21 29 -54 33 -73 6 -31 2 -39
-32 -74 -21 -21 -42 -39 -46 -39 -4 0 -8 17 -8 39 0 56 -11 101 -25 101 -6 0
-22 -11 -35 -24 -12 -14 -36 -28 -51 -31 -42 -9 -109 4 -109 21 0 8 36 49 81
92 l80 79 -27 55 c-36 73 -29 92 29 83 23 -4 61 -16 85 -27z m338 -96 c72 -49
95 -59 156 -67 35 -4 62 -17 98 -46 52 -41 57 -55 39 -108 -21 -59 29 -128
111 -152 34 -10 43 -9 75 10 20 11 42 21 49 21 15 0 44 -30 61 -63 9 -17 19
-21 43 -19 32 2 32 2 33 -45 2 -78 10 -96 51 -106 31 -7 37 -14 42 -43 8 -41
-10 -117 -27 -111 -7 2 -14 28 -17 58 -6 61 -19 70 -69 45 -54 -28 -64 -23
-56 32 l6 49 -48 40 c-47 40 -131 83 -160 83 -28 0 4 -26 47 -39 53 -16 70
-43 70 -112 0 -43 -4 -58 -16 -63 -25 -10 -36 3 -29 36 11 46 -17 70 -71 62
-39 -5 -44 -4 -60 22 -31 51 -68 85 -115 109 -52 27 -109 79 -109 100 0 26
-49 71 -109 99 -58 28 -74 47 -51 61 19 12 10 38 -30 81 -31 34 -40 51 -40 80
0 36 1 37 34 31 19 -3 60 -23 92 -45z m-117 -246 c21 -22 31 -41 28 -50 -12
-30 -97 -13 -97 19 0 18 21 65 30 65 3 0 21 -15 39 -34z m104 -93 c8 -10 25
-43 36 -73 12 -30 35 -75 51 -99 42 -61 40 -101 -6 -147 -19 -20 -33 -41 -31
-47 2 -7 23 -25 46 -41 71 -48 93 -135 46 -181 -27 -28 -54 -31 -120 -13 -62
17 -68 8 -71 -102 -3 -89 -2 -91 18 -84 30 9 110 6 121 -5 20 -20 -6 -53 -60
-78 l-56 -26 26 -16 c62 -37 35 -71 -55 -71 -32 0 -58 -4 -58 -8 0 -4 21 -18
46 -30 32 -16 44 -28 42 -40 -3 -14 -16 -18 -69 -20 l-66 -3 -33 -69 c-37 -76
-55 -87 -64 -40 -3 17 -9 43 -12 60 -9 47 -21 45 -49 -10 -28 -56 -61 -76
-131 -82 -33 -3 -39 0 -39 17 0 12 17 31 43 48 35 23 43 34 40 55 -2 14 -15
34 -29 44 -25 19 -28 19 -57 4 -18 -10 -61 -16 -111 -17 -89 -3 -121 13 -121
56 0 44 19 48 230 51 l200 3 40 31 c33 26 40 40 50 88 6 31 15 71 21 88 14 46
11 65 -16 116 -14 26 -25 56 -25 66 0 23 25 47 64 62 28 10 29 12 21 63 -4 28
-7 69 -6 89 2 40 -5 48 -69 91 -41 27 -47 52 -26 114 9 26 16 61 16 78 0 17 7
41 16 54 15 21 22 22 68 17 36 -4 59 -1 76 9 33 19 44 18 63 -2z m-2874 -190
c10 -8 -26 -32 -72 -47 -53 -18 -91 -21 -82 -7 39 64 -299 -92 -369 -170 -18
-20 -41 -58 -51 -85 -9 -27 -21 -58 -27 -70 -15 -33 -121 -161 -115 -139 4 11
13 47 20 80 18 76 43 117 95 155 23 16 50 47 61 68 24 48 36 58 92 77 24 9 74
34 111 55 37 22 89 46 116 53 29 7 47 17 45 24 -6 18 156 24 176 6z m1755 -57
c19 -8 37 -23 40 -34 4 -10 17 -24 31 -30 13 -6 29 -20 34 -31 9 -16 7 -24
-11 -40 -42 -40 -75 -35 -90 11 -2 5 -17 2 -33 -6 -24 -13 -32 -13 -42 -3 -21
21 9 145 35 147 1 0 18 -6 36 -14z m836 -4 c0 -4 -10 -9 -22 -9 -18 -2 -20 0
-8 7 18 12 30 13 30 2z m1195 -92 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2
10 4 10 3 0 8 -4 11 -10z m139 -29 c30 -52 6 -61 -38 -14 -43 46 -44 55 -9 50
19 -2 34 -15 47 -36z m-2540 -6 c6 -16 -18 -45 -37 -45 -7 0 -19 4 -27 10 -12
7 -12 12 4 29 22 24 51 27 60 6z m176 9 c0 -3 -4 -14 -10 -24 -8 -16 -5 -20
28 -31 20 -7 47 -18 59 -26 30 -20 66 -13 73 14 5 19 7 18 29 -17 13 -22 27
-38 30 -38 31 6 121 -38 121 -59 0 -15 -2 -15 -18 0 -24 22 -33 12 -21 -20 7
-20 6 -31 -8 -47 -10 -12 -11 -16 -4 -9 11 10 19 8 39 -7 16 -13 40 -20 67
-20 26 0 48 -6 55 -15 17 -21 12 -24 -46 -28 -47 -3 -49 -4 -58 -39 -7 -28 -6
-41 4 -53 13 -16 15 -16 26 0 11 15 13 15 23 -4 19 -34 14 -53 -11 -46 -16 6
-26 1 -40 -16 l-18 -24 -20 25 -20 25 -20 -25 c-11 -14 -20 -28 -20 -32 0 -14
-148 -80 -171 -76 -34 4 -40 55 -8 60 33 5 33 22 0 35 -24 9 -34 7 -58 -8 -35
-23 -71 -24 -95 -2 -22 20 -23 42 -2 71 21 30 50 28 127 -11 l65 -33 4 28 c6
38 -12 51 -78 56 -30 2 -56 8 -59 12 -3 4 4 34 15 65 11 32 20 59 20 61 0 1
-16 22 -36 46 -40 47 -69 107 -80 163 -7 39 -6 39 29 26 20 -8 29 -6 43 10 16
18 44 26 44 13z m1918 -63 c19 -33 38 -49 92 -76 37 -19 70 -42 74 -51 3 -9 1
-32 -6 -51 -12 -34 -12 -35 33 -76 73 -67 78 -147 8 -127 -33 10 -36 3 -14
-41 14 -27 14 -34 -1 -77 -24 -69 -23 -131 2 -167 41 -57 40 -72 -5 -113 -47
-43 -49 -58 -20 -136 12 -31 19 -60 15 -63 -4 -4 -29 5 -57 20 -45 26 -50 27
-55 10 -17 -53 -25 -62 -73 -78 -28 -9 -58 -26 -66 -38 -14 -20 -12 -23 20
-50 21 -17 35 -37 35 -50 0 -23 -101 -137 -121 -137 -6 0 -24 11 -41 25 -16
14 -35 25 -42 25 -17 0 -42 -29 -51 -58 -12 -40 -55 -82 -84 -82 -40 0 -43 9
-16 42 23 27 33 76 19 90 -3 4 -19 -1 -35 -10 -26 -15 -31 -16 -56 -2 -36 20
-43 64 -13 80 46 25 77 111 45 124 -8 3 -15 10 -15 16 0 6 5 8 12 4 15 -9 37
-13 97 -15 57 -3 83 24 74 78 l-6 36 39 -7 c21 -4 53 -8 69 -9 30 -2 30 -2 30
52 l0 54 50 13 c79 21 93 59 55 154 -29 74 -27 99 9 106 17 4 38 15 48 26 17
19 16 22 -6 84 l-23 65 27 39 c43 62 34 86 -55 145 -60 40 -75 55 -75 75 0 21
5 26 33 28 18 2 35 9 38 17 3 7 -13 37 -35 65 -42 54 -49 78 -29 98 17 17 48
-5 76 -57z m-3617 30 c-8 -5 -46 -21 -85 -37 -39 -15 -89 -41 -111 -58 l-40
-30 26 34 c33 43 77 70 143 86 65 16 87 17 67 5z m1783 -5 c-10 -8 -21 -12
-24 -10 -5 6 21 24 34 24 6 0 1 -6 -10 -14z m-1554 -43 c42 -17 77 -48 97 -87
14 -27 14 -31 -3 -43 -10 -7 -32 -13 -48 -13 -24 0 -39 -10 -63 -39 -44 -53
-76 -108 -69 -120 13 -20 35 -206 26 -215 -5 -5 -26 -12 -47 -16 -25 -4 -37
-11 -35 -20 15 -66 15 -68 -17 -84 -17 -9 -35 -25 -41 -36 -9 -17 -6 -25 22
-51 18 -17 71 -50 118 -72 47 -22 101 -55 121 -72 19 -17 61 -42 92 -55 32
-13 56 -28 54 -34 -2 -5 -34 -20 -72 -33 -52 -17 -91 -23 -159 -23 -80 0 -110
4 -203 25 -12 3 -49 28 -83 56 -47 39 -62 47 -66 35 -9 -24 31 -80 93 -127
l56 -44 102 -3 c100 -4 102 -4 118 22 21 31 43 36 27 5 -11 -20 -10 -20 52
-13 82 9 105 18 113 44 6 18 12 21 37 16 44 -9 106 11 152 49 87 70 220 122
275 108 47 -12 48 -24 4 -48 -46 -25 -52 -42 -19 -55 34 -12 64 -1 115 45 46
42 75 50 93 27 11 -15 11 -15 -3 -4 -15 11 -18 7 -28 -32 -17 -69 -45 -93
-126 -112 -38 -9 -94 -25 -123 -36 -42 -16 -66 -19 -115 -14 -65 7 -75 3 -92
-28 -7 -12 -50 -32 -118 -54 -91 -31 -104 -38 -85 -45 13 -5 48 -9 79 -10 45
-1 61 3 87 23 17 14 34 35 38 47 3 12 12 27 20 34 11 9 17 5 31 -20 13 -23 29
-35 60 -42 23 -6 49 -19 58 -28 14 -16 13 -20 -7 -46 -16 -20 -19 -32 -11 -43
16 -26 31 -25 47 5 l14 28 11 -28 c15 -39 14 -70 -6 -119 -34 -86 -16 -191 35
-201 21 -4 32 1 49 21 l21 27 24 -22 c29 -28 50 -29 71 -5 19 21 39 95 31 115
-3 8 -30 25 -60 38 -95 38 -101 73 -29 185 35 54 37 60 30 113 -4 31 -12 60
-19 64 -7 6 -6 7 3 5 16 -5 41 -107 31 -129 -3 -8 -17 -32 -32 -54 -15 -22
-34 -57 -43 -78 -15 -36 -15 -38 8 -61 13 -13 42 -27 65 -31 56 -9 76 -40 67
-104 -7 -52 8 -77 39 -65 19 7 21 24 3 24 -8 0 -13 17 -15 49 -2 62 14 79 64
63 32 -10 34 -9 29 9 -4 12 -2 19 6 19 6 0 -3 10 -22 23 -26 18 -34 30 -32 51
3 35 17 53 65 77 48 25 47 47 -4 72 -35 17 -36 20 -25 44 11 24 11 25 20 5 16
-36 40 -36 70 0 26 31 32 33 90 33 75 0 83 -19 22 -51 -27 -13 -40 -27 -40
-41 0 -11 -6 -27 -13 -36 -18 -21 -6 -43 14 -26 8 6 14 18 14 26 0 8 4 12 9 8
5 -3 12 -1 16 5 3 5 18 10 31 10 17 0 37 12 57 35 17 19 34 35 37 35 4 0 14
-17 22 -37 17 -44 60 -72 81 -55 10 9 13 27 9 60 -4 41 0 52 23 81 28 32 28
33 12 67 -28 58 -16 93 13 39 14 -27 26 -30 50 -15 12 7 12 12 2 22 -22 22
-13 38 28 44 33 5 40 11 40 29 0 14 7 25 18 27 18 5 62 84 62 112 0 19 72 30
156 23 82 -6 158 -43 225 -108 28 -27 55 -47 60 -43 5 3 17 22 27 42 20 44 45
51 82 24 27 -20 27 -20 56 -1 43 28 88 25 103 -7 10 -23 8 -32 -16 -73 -55
-90 -55 -90 62 -115 43 -9 105 -28 136 -42 55 -25 60 -26 127 -14 53 10 78 10
102 1 18 -6 51 -11 74 -11 51 0 91 -20 91 -44 0 -10 -22 -33 -55 -54 -57 -39
-65 -59 -45 -119 10 -31 -23 -59 -78 -67 -26 -4 -49 -11 -52 -17 -11 -17 -71
-9 -127 15 -77 34 -133 48 -164 40 -15 -4 -54 -31 -86 -61 -32 -29 -64 -53
-71 -53 -21 0 -175 -133 -239 -206 -24 -27 -36 -32 -88 -36 -99 -7 -144 -54
-186 -197 -49 -166 -52 -171 -110 -157 l-25 7 37 33 c32 29 36 40 41 94 l6 62
-34 2 c-19 1 -47 1 -62 0 -60 -4 -61 8 -7 93 27 44 50 82 50 86 0 4 -7 10 -16
13 -23 9 -61 -21 -68 -55 -4 -22 -15 -34 -41 -45 -19 -8 -35 -21 -35 -29 0
-21 -15 -26 -44 -15 -24 9 -25 12 -14 32 7 13 21 29 31 36 21 16 22 42 2 42
-9 0 -32 -7 -53 -16 -43 -18 -165 -26 -200 -13 -20 8 -27 5 -44 -16 -11 -14
-25 -25 -33 -25 -14 0 -45 68 -45 99 0 10 -2 20 -5 23 -9 9 -55 -16 -55 -29 0
-13 -46 -27 -122 -38 -30 -4 -48 -11 -48 -19 0 -21 -39 -26 -84 -11 -22 7 -52
15 -66 18 -24 4 -24 4 3 6 17 0 27 7 27 16 0 19 -19 19 -43 0 -27 -19 -47 -8
-47 26 0 27 -2 29 -21 18 -17 -9 -20 -17 -16 -45 3 -20 0 -49 -8 -68 -13 -30
-12 -36 7 -67 27 -43 58 -127 58 -156 0 -12 7 -28 15 -36 8 -8 11 -17 8 -20
-3 -3 -3 -21 1 -40 10 -51 37 -61 131 -49 87 12 129 3 123 -26 -3 -15 -14 -17
-80 -14 -81 4 -90 1 -170 -61 -31 -23 -38 -35 -38 -62 0 -19 -9 -58 -21 -87
-18 -44 -20 -66 -16 -133 3 -44 11 -93 17 -110 11 -28 10 -29 -8 -12 -18 17
-20 16 -37 -30 -24 -65 -29 -69 -61 -48 l-27 17 5 -25 5 -26 -36 19 c-37 18
-58 37 -89 78 -9 13 -28 24 -42 24 -28 2 -40 14 -40 41 0 10 -14 38 -30 62
l-30 44 32 3 c32 3 33 4 42 66 8 55 6 70 -12 115 -12 29 -22 64 -22 78 0 17
-8 30 -25 39 -42 23 -58 73 -51 159 7 87 -4 119 -48 139 -15 8 -29 12 -32 9
-2 -2 7 -34 21 -71 28 -75 32 -123 10 -152 -14 -18 -14 -18 -15 9 0 16 -14 54
-31 85 -18 32 -38 68 -45 82 -8 14 -14 45 -14 70 0 34 -5 48 -20 58 -34 21
-36 -27 -6 -109 18 -49 26 -90 26 -135 0 -44 6 -77 19 -102 11 -21 22 -55 26
-75 6 -32 5 -36 -9 -31 -8 3 -25 21 -36 39 -11 18 -27 36 -35 39 -10 4 -13 14
-9 36 5 24 -1 41 -30 85 -20 30 -36 57 -36 60 0 3 9 5 20 5 26 0 27 41 1 84
-15 25 -20 57 -25 160 -5 126 -5 129 -35 160 -40 41 -51 75 -51 150 0 89 9
129 26 116 9 -9 15 -6 23 9 17 30 14 38 -21 51 -76 30 -235 115 -266 141 -18
16 -45 35 -60 43 -15 8 -43 36 -63 63 -31 41 -38 59 -44 118 -7 72 13 194 36
221 8 10 4 35 -15 91 -14 43 -26 89 -26 103 0 29 19 61 26 44 3 -6 15 -25 28
-43 21 -28 23 -40 19 -94 l-6 -62 42 55 c22 30 41 58 41 62 0 4 -13 22 -29 40
-30 34 -52 120 -34 131 6 4 24 -14 41 -38 17 -25 37 -45 43 -45 12 0 11 9 -16
100 -9 31 -14 72 -11 95 6 48 45 155 57 155 4 0 5 -22 2 -49 -5 -41 -2 -52 16
-70 11 -11 28 -21 36 -21 14 0 35 56 35 95 0 11 27 49 59 84 l59 63 74 -7 c40
-4 89 -14 108 -22z m2023 -98 c63 -84 67 -108 32 -162 -26 -39 -42 -28 -49 33
-4 36 -21 84 -47 135 -22 43 -38 83 -34 89 10 16 30 -3 98 -95z m-192 61 c4
-16 16 -37 25 -47 16 -18 16 -21 2 -35 -14 -15 -17 -13 -33 14 -10 16 -31 37
-46 46 -36 21 -36 29 -1 43 37 15 45 11 53 -21z m270 7 c13 -16 12 -17 -3 -4
-17 13 -22 21 -14 21 2 0 10 -8 17 -17z m-2586 -109 c-7 -21 -17 -56 -20 -77
-7 -41 -28 -46 -33 -8 -3 19 56 136 65 127 1 -1 -4 -20 -12 -42z m2592 -41
c-3 -10 -5 -4 -5 12 0 17 2 24 5 18 2 -7 2 -21 0 -30z m34 -90 c13 -16 12 -17
-3 -4 -10 7 -18 15 -18 17 0 8 8 3 21 -13z m1987 -5 c42 -22 44 -23 57 -4 14
18 15 18 26 -10 8 -21 8 -37 1 -57 -7 -19 -8 -37 -1 -53 31 -84 -8 -51 -71 59
-25 42 -49 76 -54 77 -4 0 -5 -8 0 -17 17 -38 10 -159 -7 -131 -6 9 -9 7 -9
-9 0 -12 -3 -29 -7 -39 -4 -11 -2 -15 4 -11 7 4 6 -16 -3 -56 -9 -43 -9 -64
-2 -68 6 -4 8 -15 4 -24 -3 -9 -8 -69 -11 -134 -6 -126 -22 -217 -24 -132 -1
25 -6 59 -13 76 -9 28 -8 39 12 80 23 47 23 49 7 117 -15 61 -15 73 -2 103 7
19 17 74 20 122 7 102 12 133 23 133 4 0 26 -10 50 -22z m-4050 -58 c17 -26
22 -45 20 -80 -3 -44 -4 -45 -38 -45 l-35 0 -7 60 c-7 61 5 109 26 102 6 -2
21 -19 34 -37z m2251 -75 c20 -10 43 -14 60 -11 19 5 22 4 11 -4 -8 -5 -24
-10 -35 -9 -27 0 -106 56 -141 99 -23 29 -19 27 22 -11 27 -26 64 -54 83 -64z
m-2933 53 c-4 -13 -9 -62 -13 -111 -5 -72 -3 -94 12 -128 16 -35 17 -44 5 -62
-40 -63 -41 -70 -29 -198 l12 -124 86 -88 c47 -48 100 -97 118 -108 18 -11 48
-42 68 -69 36 -50 60 -64 105 -65 21 0 25 -4 22 -25 -4 -37 -29 -50 -93 -50
-46 0 -70 7 -121 33 -35 19 -87 42 -117 52 -67 22 -133 80 -161 143 -12 26
-34 72 -50 103 -16 30 -36 83 -44 118 -13 56 -13 67 4 127 10 35 28 79 39 97
11 18 27 62 35 97 30 135 58 215 82 238 13 13 24 27 24 32 0 6 5 10 11 10 7 0
9 -9 5 -22z m3060 -59 c4 -8 9 -7 15 2 7 11 9 10 9 -3 0 -22 -1 -22 -36 -3
-18 9 -23 15 -12 15 9 0 20 -5 24 -11z m824 -81 c25 -42 27 -91 3 -86 -9 2
-20 14 -24 28 -8 30 -11 90 -4 90 3 0 14 -15 25 -32z m-1800 18 c0 -2 -7 -6
-15 -10 -8 -3 -15 -1 -15 4 0 6 7 10 15 10 8 0 15 -2 15 -4z m-1312 -82 c26
-42 30 -102 6 -111 -16 -6 -37 15 -28 28 2 4 -3 26 -11 50 -26 72 -5 92 33 33z
m212 6 c11 -11 20 -32 20 -47 1 -16 3 -58 6 -94 6 -72 -7 -99 -49 -99 -11 0
-31 -9 -43 -21 -46 -43 -59 16 -24 109 11 29 20 65 20 81 0 16 3 43 6 60 8 37
34 41 64 11z m-1309 -119 c22 -28 24 -59 5 -121 -12 -43 -13 -43 -25 -22 -9
17 -10 36 -2 70 7 36 6 52 -6 75 -8 16 -11 36 -7 45 6 15 8 15 12 -3 2 -11 13
-31 23 -44z m4167 -26 c23 -51 16 -70 -47 -114 -33 -22 -64 -41 -69 -41 -19 0
-53 54 -50 79 3 21 11 26 55 36 56 13 83 29 83 51 0 23 16 16 28 -11z m978
-94 c8 -29 13 -55 11 -58 -3 -2 -1 -21 4 -41 23 -96 28 -178 14 -232 -8 -30
-12 -64 -9 -76 3 -12 -1 -50 -10 -85 -8 -35 -17 -80 -19 -99 -2 -19 -3 60 -1
175 1 116 5 224 9 241 5 24 0 43 -25 88 -28 48 -32 64 -27 101 9 60 11 68 22
81 7 9 11 5 13 -15 2 -14 10 -50 18 -80z m-3285 -48 c10 -11 10 -14 2 -9 -17
9 -16 6 3 -33 17 -34 7 -61 -22 -61 -16 0 -73 49 -58 50 7 0 14 -7 18 -15 3
-8 17 -15 32 -15 23 0 26 3 20 26 -4 15 -9 37 -12 50 -7 28 -2 30 17 7z
m-1811 -173 c1 -19 5 -44 10 -55 l9 -20 1 20 c1 17 7 13 36 -20 55 -62 94
-121 110 -170 13 -37 22 -46 52 -56 20 -7 65 -27 100 -46 l64 -33 -54 0 c-59
0 -122 25 -171 66 -26 22 -32 24 -37 10 -5 -15 -7 -15 -27 -1 -23 16 -43 70
-43 116 0 14 -9 34 -20 44 -11 10 -20 25 -20 34 0 8 -11 27 -25 41 -23 24 -25
30 -14 53 13 29 0 57 -28 57 -10 0 -11 4 -3 19 5 11 10 41 11 68 l0 48 24 -70
c13 -38 25 -86 25 -105z m1291 147 c-10 -9 -11 -8 -5 6 3 10 9 15 12 12 3 -3
0 -11 -7 -18z m662 -129 c8 -60 -5 -79 -53 -76 -22 2 -40 5 -40 6 0 2 14 23
31 47 22 31 29 49 24 65 -6 19 -5 20 13 11 13 -7 21 -25 25 -53z m2687 56 c0
-3 -12 -21 -27 -41 -27 -35 -183 -157 -191 -149 -12 13 107 172 138 185 28 10
80 14 80 5z m300 -89 c7 -8 21 -15 32 -15 13 0 25 -14 39 -46 17 -38 20 -66
20 -177 0 -73 4 -148 8 -167 9 -34 9 -34 10 -6 1 24 3 27 16 16 8 -7 15 -19
15 -26 0 -8 4 -14 9 -14 12 0 35 -86 28 -104 -4 -9 -13 -13 -21 -10 -12 4 -11
-1 2 -29 14 -29 19 -33 31 -22 7 7 17 28 22 46 6 23 7 3 3 -59 -5 -77 -11
-103 -35 -148 -16 -31 -29 -63 -30 -73 0 -9 -8 4 -17 29 -29 77 -62 130 -87
142 -25 11 -25 13 -27 147 -1 75 -2 159 -1 186 4 118 11 212 18 237 7 27 -8
49 -49 73 -12 7 -19 26 -22 60 l-5 50 14 -38 c8 -20 20 -44 27 -52z m-5114
-212 c18 -3 48 -18 68 -34 33 -28 35 -33 29 -75 -4 -34 -2 -49 11 -63 23 -25
56 -34 56 -15 0 10 12 14 43 14 l42 -1 -40 -35 c-34 -30 -40 -33 -45 -18 -6
15 -9 14 -23 -7 -9 -13 -17 -33 -17 -46 0 -27 30 -60 40 -43 4 6 13 8 21 6 62
-22 71 -28 63 -36 -5 -4 -26 -12 -46 -15 -31 -6 -38 -4 -38 9 0 9 -7 16 -14
16 -8 0 -27 15 -41 34 -18 23 -39 37 -69 45 -24 6 -49 18 -57 27 -8 10 -19 51
-25 93 -7 42 -15 96 -19 120 -8 41 -7 44 11 36 10 -4 33 -10 50 -12z m3791
-303 c17 -35 29 -68 27 -72 -7 -10 -49 12 -98 51 -21 17 -43 31 -47 31 -14 0
-10 -57 5 -95 8 -19 11 -37 7 -40 -5 -2 -28 8 -52 24 -46 31 -59 30 -93 -8
-11 -12 -31 -21 -47 -21 -16 0 -43 -9 -61 -20 -39 -24 -76 -26 -85 -4 -7 18
23 87 46 107 9 8 36 22 61 31 25 10 59 29 77 42 49 37 72 43 153 41 l75 -2 32
-65z m329 -27 c-4 -42 -9 -80 -12 -84 -6 -11 -111 -49 -135 -49 -11 0 -24 10
-30 24 -10 21 -6 29 42 80 53 55 115 105 133 106 5 0 6 -33 2 -77z m-3746
-145 c38 -29 70 -58 70 -64 0 -6 -9 -19 -20 -29 -11 -10 -20 -24 -20 -30 0 -7
23 -43 50 -80 28 -38 48 -70 46 -73 -15 -15 -236 157 -250 195 -9 23 24 133
40 133 8 0 46 -24 84 -52z m1678 -50 c-5 -15 -48 -24 -48 -10 0 14 12 22 33
22 10 0 17 -5 15 -12z m223 -40 c17 27 76 31 86 6 4 -11 13 -14 29 -10 13 4
24 2 24 -3 0 -19 -78 -32 -145 -25 -36 4 -65 9 -65 11 0 2 5 13 11 24 10 19
10 19 28 -3 l18 -22 14 22z m-133 -70 c11 -23 10 -32 -8 -65 -11 -21 -23 -52
-26 -71 -4 -19 -15 -37 -28 -44 -11 -6 -24 -16 -28 -22 -6 -8 -8 -8 -8 0 0 6
9 19 19 28 11 10 27 50 37 93 l18 76 -24 19 -24 20 29 -4 c21 -2 34 -11 43
-30z m1755 -5 c91 -5 107 -9 107 -23 0 -39 -31 -50 -131 -47 -112 2 -231 -27
-304 -75 -79 -53 -119 -152 -105 -263 l6 -50 7 70 c17 151 86 235 195 235 21
0 92 -16 157 -35 93 -27 126 -42 152 -67 75 -73 63 -169 -37 -284 -33 -38 -77
-92 -99 -120 -22 -28 -54 -57 -73 -65 -42 -17 -269 -20 -275 -3 -6 17 21 24
120 35 48 5 103 16 123 24 54 23 146 121 184 197 41 84 39 144 -5 187 -23 22
-26 23 -20 6 4 -11 10 -46 13 -77 5 -70 -19 -126 -81 -188 -48 -49 -144 -100
-185 -100 -37 0 -138 65 -180 116 -41 50 -66 124 -66 199 -1 49 6 74 37 140
39 81 71 125 92 125 7 0 48 18 91 40 68 35 85 40 124 35 25 -3 93 -8 153 -12z
m-1489 -17 c5 -1 -16 -17 -48 -34 -60 -35 -72 -34 -86 4 -11 29 -22 30 -42 7
-32 -37 -30 -58 7 -103 40 -47 40 -55 4 -83 -30 -22 -187 -39 -175 -19 4 7 31
12 62 12 52 0 114 21 114 39 0 4 -11 18 -24 30 -24 22 -26 31 -25 76 1 71 2
74 23 77 21 3 173 -1 190 -6z m-459 -35 c-21 -43 -29 -39 -8 4 9 19 18 33 21
31 2 -2 -4 -18 -13 -35z m2213 2 c48 -23 39 -33 -28 -32 -67 2 -92 18 -69 45
14 17 41 13 97 -13z m-3885 -81 c23 -21 21 -57 -5 -82 -26 -24 -38 -18 -15 8
24 27 21 39 -13 51 -23 7 -30 16 -30 36 0 23 2 25 23 14 12 -6 30 -18 40 -27z
m4087 24 c0 -28 -24 -36 -58 -19 -24 12 -30 18 -20 24 22 14 78 11 78 -5z
m-3721 -91 c45 -23 79 -71 87 -121 5 -34 12 -48 30 -56 20 -9 32 -6 74 20 l50
31 -15 -28 c-58 -113 -151 -132 -192 -38 -43 99 -61 132 -62 112 -2 -39 -21 8
-21 53 0 46 7 49 49 27z m518 -77 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2
-19 0 -25z m32 -65 c12 -24 19 -43 16 -43 -5 0 -45 75 -45 86 0 11 6 2 29 -43z
m-810 8 c15 -16 35 -48 46 -71 20 -44 13 -59 -27 -60 -15 0 -16 4 -8 26 17 44
14 47 -40 40 -53 -7 -54 -6 -50 44 4 56 38 65 79 21z m4071 -25 c0 -25 -12
-46 -26 -46 -14 0 -20 41 -7 53 12 12 33 7 33 -7z m-94 -51 c6 -15 -11 -45
-26 -45 -12 0 -20 28 -14 45 8 19 33 19 40 0z m-98 -81 c4 -26 -23 -55 -43
-48 -15 6 -21 55 -8 68 14 14 48 1 51 -20z m-2968 -40 c0 -24 -6 -37 -21 -45
-20 -10 -21 -9 -16 12 4 13 7 39 7 58 0 29 2 32 15 21 8 -7 15 -27 15 -46z
m3060 25 c0 -33 -67 -129 -90 -129 -32 0 -33 19 -3 54 15 18 36 47 45 65 20
36 48 42 48 10z m750 -33 c0 -19 -4 -38 -10 -41 -12 -7 -24 39 -16 60 10 27
26 16 26 -19z m-4632 -8 c7 -7 12 -22 12 -35 0 -20 -4 -23 -27 -17 -39 9 -47
19 -34 43 13 24 31 27 49 9z m199 -23 c23 -49 5 -68 -31 -32 -32 32 -35 67 -6
67 13 0 26 -12 37 -35z m-102 -96 c3 -14 1 -38 -4 -52 -8 -21 -17 -27 -40 -27
-30 0 -41 14 -41 55 0 53 74 74 85 24z m2599 16 c26 -11 42 -28 61 -64 23 -47
26 -49 77 -56 29 -4 67 -16 84 -26 26 -16 51 -19 157 -19 119 0 126 -1 132
-21 13 -39 -8 -44 -159 -43 -143 2 -143 2 -216 38 -41 20 -87 36 -102 36 -22
0 -33 7 -46 31 -9 18 -27 41 -39 52 -27 24 -28 35 -7 65 18 26 13 26 58 7z
m236 -22 c27 -11 32 -16 20 -23 -34 -22 -100 3 -100 36 0 17 14 14 80 -13z
m-2650 -82 c13 -26 13 -31 -5 -31 -20 0 -85 32 -85 42 0 4 18 8 40 8 29 0 42
-5 50 -19z m1334 -57 c4 -10 -4 -28 -20 -47 -17 -21 -24 -37 -20 -53 4 -15 -2
-32 -19 -52 -44 -53 -32 -88 45 -128 28 -15 58 -19 147 -19 76 0 116 -4 124
-12 27 -27 66 -14 122 37 57 52 81 61 91 34 29 -77 -57 -160 -202 -194 -30 -7
-56 -19 -59 -27 -9 -22 45 -71 116 -105 l65 -31 -23 -18 c-15 -12 -39 -19 -67
-19 -50 0 -66 13 -118 95 -30 48 -35 51 -131 85 -55 20 -106 39 -113 44 -8 5
-27 37 -42 71 -24 54 -33 65 -65 75 -21 7 -56 10 -78 7 -54 -7 -90 12 -121 66
-14 23 -41 57 -61 76 -19 19 -35 41 -35 50 0 58 73 74 179 41 68 -21 73 -21
118 -5 27 8 59 22 73 30 34 20 86 19 94 -1z m1987 -17 c-5 -14 -17 -22 -32
-22 -32 0 -31 26 0 42 32 15 42 8 32 -20z m-3205 -1 c7 -31 -10 -56 -64 -96
-61 -44 -84 -140 -39 -161 62 -28 137 35 137 115 0 59 11 72 47 57 43 -18 75
-49 71 -68 -2 -11 -24 -26 -53 -38 -112 -45 -111 -58 3 -63 85 -4 102 -12 81
-38 -10 -13 -25 -15 -65 -11 -61 6 -80 -2 -66 -29 24 -44 44 -52 144 -56 100
-3 120 -10 99 -31 -8 -8 -47 -12 -119 -12 l-107 0 -122 54 c-67 29 -128 60
-134 68 -7 8 -30 23 -51 34 -41 21 -51 34 -16 24 17 -6 20 -4 14 10 -5 15 -2
16 28 11 48 -9 71 15 80 85 7 49 5 56 -17 74 -13 11 -38 28 -56 37 -31 17 -42
38 -18 38 6 0 38 -16 71 -36 32 -19 66 -34 75 -32 9 2 25 22 36 45 23 49 32
53 41 19z m-302 -58 c20 -28 21 -58 2 -58 -18 0 -46 38 -46 62 0 25 26 22 44
-4z m4299 -106 c-4 -23 -14 -37 -34 -47 -32 -17 -72 -20 -67 -5 3 9 100 89
104 86 1 -1 -1 -16 -3 -34z m-82 -9 c-6 -10 -19 -29 -30 -43 l-21 -25 0 23 c0
12 9 31 20 42 25 25 45 27 31 3z m-3557 -25 c18 -25 21 -68 6 -68 -16 0 -108
48 -115 60 -12 19 6 30 50 30 34 0 47 -5 59 -22z m3456 -113 c-11 -13 -9 -15
10 -13 17 2 25 -4 33 -25 6 -18 6 -32 0 -38 -14 -14 -63 7 -63 26 0 8 -5 14
-12 13 -23 -5 -20 32 4 41 34 14 42 13 28 -4z m-83 -104 c-13 -16 -27 -48 -31
-70 -7 -44 -13 -49 -30 -26 -9 13 -21 14 -66 6 -30 -5 -76 -12 -102 -16 -41
-5 -48 -9 -48 -28 0 -12 7 -31 15 -41 8 -11 15 -28 15 -38 0 -15 -9 -18 -57
-18 -128 0 -164 74 -70 139 43 29 113 52 286 91 46 11 86 22 89 25 3 3 9 5 15
5 5 0 -2 -13 -16 -29z m-3169 -37 c29 -19 29 -58 0 -78 -28 -20 -121 -21 -137
-2 -9 10 -8 25 1 61 l13 47 50 -7 c27 -3 60 -13 73 -21z m1872 -25 c0 -6 -10
-33 -21 -60 -12 -27 -19 -52 -16 -56 4 -3 34 6 67 21 116 50 121 27 14 -60
-17 -14 -14 -15 46 -9 61 5 67 9 101 47 l36 42 22 -50 c27 -64 36 -79 47 -79
13 0 33 64 34 110 1 52 13 73 33 56 8 -6 18 -24 22 -39 3 -15 13 -38 22 -51
14 -22 19 -23 84 -17 85 9 92 -7 24 -54 -25 -17 -45 -35 -45 -41 0 -14 38 -29
106 -42 l59 -12 11 -51 c6 -28 14 -56 18 -62 4 -7 -11 -22 -34 -37 -22 -14
-40 -32 -40 -39 0 -14 -63 -52 -182 -112 -27 -13 -62 -24 -79 -24 -25 0 -43
-11 -81 -50 -27 -27 -53 -50 -58 -50 -5 0 -35 12 -65 27 l-56 28 -64 -23 c-35
-12 -74 -22 -87 -22 -13 0 -43 -9 -67 -20 -24 -11 -56 -20 -71 -20 -41 0 -178
-53 -232 -89 -66 -44 -72 -54 -64 -107 l6 -45 -26 30 c-13 16 -33 33 -44 36
-32 10 -87 -20 -107 -60 l-19 -36 -90 66 c-101 76 -125 89 -202 116 -80 28
-137 25 -169 -7 -47 -47 -12 -117 74 -150 45 -17 43 -35 -3 -26 -14 2 -24 0
-24 -7 0 -16 -30 -13 -36 4 -4 8 -12 15 -20 15 -8 0 -25 24 -38 53 -30 69 -69
93 -185 117 -99 20 -111 25 -111 44 0 21 61 62 103 70 26 5 35 11 30 19 -4 7
-6 22 -5 34 2 12 -4 36 -13 54 l-17 32 39 -9 c21 -5 87 -9 148 -9 99 0 110 2
113 19 2 11 -11 33 -33 56 -30 31 -34 38 -20 44 27 10 46 7 92 -15 24 -12 47
-18 51 -14 4 3 12 29 17 57 6 28 15 53 22 55 6 2 25 -8 41 -24 31 -28 31 -28
20 -91 -8 -44 -8 -66 0 -74 18 -18 51 2 78 48 14 24 29 44 34 44 4 0 37 -14
73 -31 93 -43 101 -37 132 93 9 35 13 38 127 83 78 30 104 36 134 30 37 -6 37
-6 23 15 -8 13 -31 32 -51 44 l-36 21 -96 -25 c-52 -13 -99 -20 -103 -16 -4 4
33 47 82 95 50 48 96 95 103 104 11 14 32 17 123 17 106 0 110 1 120 24 17 37
56 52 142 55 20 0 37 -4 37 -10z m1165 -79 c-16 -16 -30 -28 -32 -26 -8 8 10
34 30 44 33 16 33 15 2 -18z m-2802 -1 c32 -8 37 -14 37 -38 0 -80 -88 -108
-156 -49 -43 38 -60 74 -43 94 12 15 87 11 162 -7z m-183 -97 c0 -10 -7 -12
-22 -8 -13 3 -26 6 -29 6 -10 0 -20 31 -13 41 7 13 64 -22 64 -39z m399 -46
l24 -26 -27 0 c-15 0 -36 5 -47 11 -21 11 -40 48 -32 61 6 11 54 -16 82 -46z
m81 40 c0 -8 -3 -22 -6 -30 -5 -13 -9 -14 -20 -5 -21 18 -17 49 6 49 11 0 20
-6 20 -14z m-183 -32 c4 -12 -35 -26 -48 -18 -5 2 -6 11 -2 20 6 17 44 15 50
-2z m421 4 c18 -18 15 -28 -8 -28 -13 0 -20 7 -20 20 0 23 10 26 28 8z m130
-25 c10 -20 5 -44 -12 -55 -16 -11 -71 -10 -103 3 l-28 11 24 16 c26 18 78 40
98 41 7 1 16 -7 21 -16z m-234 -19 c18 -48 -6 -57 -61 -23 -26 16 -31 24 -21
30 23 15 75 10 82 -7z m364 -32 c3 -17 -2 -22 -17 -22 -14 0 -21 6 -21 18 0
38 33 41 38 4z m-738 -337 c14 -8 21 -14 15 -14 -5 0 -21 6 -35 14 -14 8 -20
14 -15 14 6 0 21 -6 35 -14z"
          />
          <path
            d="M3000 4416 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21
13z"
          />
          <path
            d="M2947 4372 c-8 -11 20 -84 35 -93 7 -5 18 -9 24 -9 6 0 26 -3 44 -7
25 -5 32 -3 28 8 -3 8 -18 16 -33 19 -23 4 -31 12 -36 36 -3 17 -9 36 -13 42
-8 13 -42 16 -49 4z"
          />
          <path
            d="M3179 4260 c24 -11 46 -20 50 -20 12 1 -64 39 -79 39 -8 0 5 -8 29
-19z"
          />
          <path
            d="M838 3823 c-3 -11 -2 -42 3 -69 4 -27 5 -72 2 -100 -4 -42 -1 -59 22
-104 37 -73 73 -118 115 -141 19 -11 50 -31 69 -45 40 -28 142 -62 209 -68 26
-2 55 -8 65 -12 16 -6 18 -3 15 17 -3 22 -7 24 -48 21 -30 -2 -77 7 -141 27
-81 26 -107 40 -164 88 -38 32 -80 79 -94 105 -24 43 -25 49 -12 80 26 64 25
101 -7 163 -23 46 -30 54 -34 38z"
          />
          <path
            d="M2842 3243 c-16 -18 -29 -24 -46 -19 -19 5 -25 1 -30 -16 -7 -28 0
-34 46 -41 42 -6 61 10 32 26 -18 10 -17 11 6 17 14 3 26 14 28 24 6 31 -12
36 -36 9z"
          />
          <path
            d="M1290 3245 c0 -8 4 -15 9 -15 5 0 14 7 21 15 10 13 9 15 -9 15 -12 0
-21 -6 -21 -15z"
          />
          <path
            d="M1596 3245 c-19 -19 -22 -90 -4 -101 27 -17 51 69 29 104 -6 11 -11
10 -25 -3z"
          />
          <path
            d="M1435 3060 c-4 -12 -2 -27 5 -35 12 -15 87 -31 97 -21 10 10 -59 76
-78 76 -10 0 -21 -9 -24 -20z"
          />
          <path
            d="M3411 3040 c-8 -26 -8 -30 7 -30 10 0 28 7 41 17 23 15 23 17 6 30
-29 20 -42 16 -54 -17z"
          />
          <path
            d="M2492 2991 c-8 -4 -12 -19 -10 -32 2 -18 8 -23 23 -21 25 5 24 2 18
35 -6 29 -10 32 -31 18z"
          />
          <path
            d="M2354 2961 c-10 -11 -2 -52 11 -57 26 -10 61 5 73 31 7 14 12 27 12
28 0 4 -92 2 -96 -2z"
          />
          <path
            d="M2255 2888 c-12 -35 -11 -41 5 -43 12 -2 15 5 12 31 -5 40 -7 42 -17
12z"
          />
          <path
            d="M1510 2835 c0 -8 21 -39 48 -69 48 -55 87 -71 99 -41 7 19 -18 48
-72 84 -54 37 -75 44 -75 26z"
          />
          <path
            d="M2123 2773 c-24 -9 -13 -23 17 -23 20 0 30 5 30 15 0 15 -22 19 -47
8z"
          />
          <path
            d="M1780 2366 c-13 -17 -10 -58 5 -63 13 -4 47 56 39 68 -8 14 -30 11
-44 -5z"
          />
          <path
            d="M1832 2192 c-6 -18 -6 -50 0 -87 10 -69 0 -105 -32 -105 -44 0 -10
-38 64 -71 61 -27 74 -16 47 38 -17 32 -20 54 -18 125 2 73 -1 89 -17 107 -25
28 -32 27 -44 -7z"
          />
          <path
            d="M1650 1965 c-9 -11 -6 -22 17 -56 15 -23 40 -51 55 -62 27 -20 28
-20 48 -2 30 27 25 42 -22 57 -32 10 -47 23 -58 46 -17 36 -22 38 -40 17z"
          />
          <path d="M5541 2994 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
          <path d="M3985 2221 c-8 -15 3 -31 21 -31 9 0 14 7 12 17 -4 20 -24 28 -33 14z" />
        </g>
      </svg>
    </div>
  );
};

export default Loader;
