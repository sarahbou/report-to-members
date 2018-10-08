// JavaScript Document

// Initiate the chart
Highcharts.mapChart('chapter-map', {

    title: {
        text: ''
    },
    
    navigation: {
        buttonOptions: {
            enabled: false
        }
    },

    mapNavigation: {
        enabled: true,
        enableMouseWheelZoom: false
    },

    tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.name}</b>'
    },
    legend: {
    	enabled: false
    },

    series: [{
        // Use the gb-all map with no data as a basemap
        mapData: Highcharts.maps['custom/world-continents'],
        name: 'Basemap',
        borderColor: '#dadada',
        nullColor: '#e7e7e7',
        showInLegend: false,
    }, {
        name: 'Separators',
        type: 'mapline',
        data: Highcharts.geojson(Highcharts.maps['custom/world-continents'], 'mapline'),
        color: '#A4D176',
        showInLegend: false,
        enableMouseTracking: false,
        
    }, {
        // Specify points using lat/lon
        type: 'mappoint',
        dataLabels: {
        	enabled: false
        },
        color: '#A4D176',
        data: [
       {
            name: 'Austin Area',
            lat: 30.2672,
            lon: -97.7431
        }, {
            name: 'Colorado',
            lat: 39.7392,
            lon: -104.9903
        },{
            name: 'Dallas Area',
            lat: 32.7767,
            lon: -96.7970
        },{
            name: 'Houston Area',
            lat: 29.7604,
            lon: -95.3698
        },{
            name: 'Central Virginia',
            lat: 37.5407,
            lon: -77.4360
        },{
            name: 'Alabama Area',
            lat: 33.5207,
            lon: -86.8025
        },{
            name: 'Georgia Area',
            lat: 33.7490,
            lon: -84.3880
        },{
            name: 'New Jersey Area',
            lat: 40.876235,
            lon: -74.218886
        },{
            name: 'Arizona',
            lat: 33.4484,
            lon: -112.0740
        },{
            name: 'South Florida',
            lat: 25.7617,
            lon: -80.1918
        },{
            name: 'SF Bay Area',
            lat: 37.948056,
            lon: -122.0525
        },{
            name: 'NE Ohio',
            lat: 41.4993,
            lon: -81.6944
        },{
            name: 'New York',
            lat: 40.7128,
            lon: -74.0060
        },{
            name: 'Greater Boston Area',
            lat: 42.3601,
            lon: -71.0589
        },{
            name: 'Tallahassee Area',
            lat: 30.4383,
            lon: -84.2807
        },{
            name: 'Utah Area',
            lat: 40.7608,
            lon: -111.8910
        },{
            name: 'San Antonio',
            lat: 29.4241,
            lon: -98.4936
        },{
            name: 'Los Angeles Area',
            lat: 34.0522,
            lon: -118.2437
        },{
            name: 'Maryland',
            lat: 39.2904,
            lon: -76.6122
        },{
            name: 'DC Metro Area',
            lat: 38.9072,
            lon: -77.0369
        },{
            name: 'Toronto',
            lat: 43.6532,
            lon: -79.3832
        },{
            name: 'Philadelphia Area',
            lat: 40.0131,
            lon: -75.2304
        },{
            name: 'Central Carolina',
            lat: 35.7796,
            lon: -78.6382
       	},{
            name: 'Hawaii',
            lat: 21.3069,
            lon: -157.8583
       	},{
            name: 'Middle Tennessee',
            lat: 36.1627,
            lon: -86.7816
       	},{
            name: 'Charlotte Area',
            lat: 35.2271,
            lon: -80.8431
       	},{
            name: 'Connecticut Area',
            lat: 41.4570,
            lon: -72.8231
       	},{
            name: 'San Diego Area',
            lat: 32.7157,
            lon: -117.1611
       	},{
            name: 'Tampa Bay',
            lat: 27.9506,
            lon: -82.4572
       	},{
            name: 'Rhode Island',
            lat: 41.8240,
            lon: -71.4128
       	},{
            name: 'Greater Chicago',
            lat: 41.8240,
            lon: -87.8231
       	},{
            name: 'Hampton Roads',
            lat: 36.7682,
            lon: -76.2875
       	},{
            name: 'Southeast Michigan Area',
            lat: 42.6064,
            lon: -83.1498
       	},{
            name: 'Mid-South',
            lat: 35.1495,
            lon: -90.0490
       	},{
            name: 'Central Ohio',
            lat: 39.9612,
            lon: -82.9988
       	},{
            name: 'Ottawa',
            lat: 45.4215,
            lon: -75.6972
       	},{
            name: 'Central Florida',
            lat: 28.5383,
            lon: -81.3792
       	},{
            name: 'Gulf Coast',
            lat: 30.6954,
            lon: -88.0399
       	},{
            name: 'Long Island',
            lat: 40.7443,
            lon: -73.4821
       	},{
            name: 'Orange County',
            lat: 33.6846,
            lon: -117.8265
       	},{
            name: 'Pacific Northwest',
            lat: 47.6062,
            lon: -122.3321
       	},{
            name: 'Southwest Ohio',
            lat: 39.1031,
            lon: -84.5120
       	},{
            name: 'Twin Cities',
            lat: 44.9537,
            lon: -93.0900
       	},{
            name: 'Upstate New York',
            lat: 43.0481,
            lon: -76.1474
       	},{
            name: 'New Mexico',
            lat: 35.0853,
            lon: -106.6056
       	},{
            name: 'Central Indiana',
            lat: 39.7684,
            lon: -86.1581
       	},{
            name: 'New Hampshire',
            lat: 42.9956,
            lon: -71.4548
       	},{
            name: 'Greater KC Area',
            lat: 39.0997,
            lon: -94.5786
       	},{
            name: 'New Hampshire',
            lat: 42.9956,
            lon: -71.4548
       	},{
            name: 'South Western Ontario',
            lat: 43.4503,
            lon: -80.4832
       	},{
            name: 'New Zealand',
            lat: -41.2865,
            lon: 174.7762
       	},{
            name: 'Puerto Rico',
            lat: 18.4655,
            lon: -66.1057
       	},{
            name: 'Oregon Area',
            lat: 45.5231,
            lon: -122.6765
       	},{
            name: 'Edmonton',
            lat: 53.5444,
            lon: -113.4909
       	},{
            name: 'Kentucky',
            lat: 38.2527,
            lon: -85.7585
       	},{
            name: 'Calgary',
            lat: 51.0486,
            lon: -114.0708
       	},{
            name: 'Vancouver',
            lat: 49.2827,
            lon: -123.1207
       	},{
            name: 'Ark La Tex',
            lat: 32.5252,
            lon: -93.7502
       	},{
            name: 'Central Mississippi',
            lat: 32.2988,
            lon: -90.1848
       	},{
            name: 'Oklahoma City',
            lat: 35.4676,
            lon: -97.5164
       	},{
            name: 'Brisbane',
            lat: -27.4698,
            lon: 153.0251
       	},{
            name: 'Tulsa Area',
            lat: 36.1540,
            lon: -95.9928
       	},{
            name: 'Albany Area',
            lat: 42.6526,
            lon: -73.7562
       	},{
            name: 'Greater Pittsburgh',
            lat: 40.4406,
            lon: -79.9959
       	},{
            name: 'Saskatchewan',
            lat: 50.4452,
            lon: -104.6189
       	},{
            name: 'Jacksonville Area',
            lat: 30.3322,
            lon: -81.6557
       	},{
            name: 'Northern Indiana',
            lat: 41.6764,
            lon: -86.2520
       	},{
            name: 'UK',
            lat: 51.5074,
            lon: -0.1278
       	},{
            name: 'Las Vegas',
            lat: 36.1699,
            lon: -115.1398
       	},{
            name: 'New Orleans',
            lat: 29.9511,
            lon: -90.0715
       	},{
            name: 'Arkansas',
            lat: 34.7465,
            lon: -92.2896
       	},{
            name: 'The Heartland',
            lat: 41.2524,
            lon: -95.9980
       	},{
            name: 'Saudi Arabia',
            lat: 26.2361,
            lon: 50.0393
       	},{
            name: 'Western New York',
            lat: 42.8864,
            lon: -78.8784
       	},{
            name: 'Melbourne',
            lat: -37.8136,
            lon: 144.9631
       	},{
            name: 'Ft. Worth',
            lat: 32.7555,
            lon: -97.3308
       	},{
            name: 'South Africa',
            lat: -25.7479,
            lon: 28.2293
       	},{
            name: 'Golden State',
            lat: 38.5816,
            lon: -121.4944
       	},{
            name: 'Hong Kong',
            lat: 22.2760,
            lon: 114.1751
       	},{
            name: 'India',
            lat: 28.6139,
            lon: 77.2090
       	},{
            name: 'Philippines',
            lat: 14.5547,
            lon: 121.0244
       	},{
            name: 'Northwest Florida',
            lat: 30.4213,
            lon: -87.2169
       	},{
            name: 'UAE',
            lat: 25.2048,
            lon: 55.2708
       	},{
            name: 'Singapore',
            lat: 1.3521,
            lon: 103.8198
       	},{
            name: 'Korea',
            lat: 37.5665,
            lon: 126.9780
       	},{
            name: 'Lehigh Valley',
            lat: 40.6259,
            lon: -75.3705
       	},{
            name: 'Greater St. Louis Area',
            lat: 38.6270,
            lon: -90.1994
       	},{
            name: 'Palmetto',
            lat: 27.5214,
            lon: -82.5723
       	},{
            name: 'Big Sky',
            lat: 46.5884,
            lon: -112.0245
       	},{
            name: 'Central Pennsylvania',
            lat: 40.2732,
            lon: -76.8867
       	},{
            name: 'Baton Rouge',
            lat: 30.4583,
            lon: -91.1403
       	},{
            name: 'Indonesia',
            lat: -6.1751,
            lon: 106.8650
       	},{
            name: 'Malaysia',
            lat: 3.1390,
            lon: 101.6869
       	},{
            name: 'Italy',
            lat: 45.4642,
            lon: 9.1900
       	},{
            name: 'Maine',
            lat: 43.6615,
            lon: -70.2553
       	},{
            name: 'Central Texas',
            lat: 31.1171,
            lon: -97.7278
       	},{
            name: 'Maine',
            lat: 43.6615,
            lon: -70.2553
       	},{
            name: 'Des Moines',
            lat: 41.6005,
            lon: -93.6091
       	},{
            name: 'Spokane',
            lat: 47.6588,
            lon: -117.4260
       	},{
            name: 'Boise',
            lat: 43.6187,
            lon: -116.2146
       	},{
            name: 'Germany',
            lat: 50.1109,
            lon: 8.6821
       	},{
            name: 'Turkey',
            lat: 41.0082,
            lon: 28.9784
       	},{
            name: 'The Netherlands',
            lat: 52.2132,
            lon: 5.2864
       	},{
            name: 'Belgium',
            lat: 50.8503,
            lon: 4.3517
       	},{
            name: 'Zimbabwe',
            lat: -17.8252,
            lon: 31.0335
       	},{
            name: 'Chattanooga Area',
            lat: 35.0456,
            lon: -85.3097
       	},{
            name: 'Northwest Arkansas',
            lat: 36.3729,
            lon: -94.2088
       	},{
            name: 'France',
            lat: 48.8566,
            lon: 2.3522
       	},{
            name: 'Colorado Springs',
            lat: 38.8339,
            lon: -104.8214
       	},{
            name: 'Kenya',
            lat: 1.2921,
            lon: 36.8219
       	},{
            name: 'Port Louis',
            lat: -20.1609,
            lon: 57.5012
       	},{
            name: 'Russia',
            lat: 55.7558,
            lon: 37.6173
       	},{
            name: 'Knoxville',
            lat: 35.9606,
            lon: -83.9207
       	},{
            name: 'Shanghai',
            lat: 31.2304,
            lon: 121.4737
       	},{
            name: 'Mexico City',
            lat: 19.4326,
            lon: -99.1332
       	},{
            name: 'Greece',
            lat: 37.9838,
            lon: 23.7275
       	},{
            name: 'Lansing',
            lat: 42.7325,
            lon: -84.5555
       	},{
            name: 'Uganda',
            lat: 0.3476,
            lon: 32.5825
       	},{
            name: 'Czech Republic',
            lat: 50.0755,
            lon: 14.4378
       	},{
            name: 'Anchorage',
            lat: 61.2181,
            lon: -149.9003
       	},{
            name: 'Pakistan',
            lat: 25.0700,
            lon: 67.2848
       	},{
            name: 'Inland Empire',
            lat: 34.0633,
            lon: -117.6509
       	},{
            name: 'Rio Grande Valley',
            lat: 26.2034,
            lon: -98.2300
       	},{
            name: 'Ghana',
            lat: 5.6037,
            lon: -0.1870
       	},{
            name: 'Bahamas',
            lat: 25.0480,
            lon: -77.3554
       	},{
            name: 'Ventura County',
            lat: 34.2746,
            lon: -119.2290
       	},{
            name: 'Bangalore',
            lat: 12.9716,
            lon: 77.5946
       	},{
            name: 'Bulgaria',
            lat: 42.6977,
            lon: 23.3219
       	},{
            name: 'Mumbai',
            lat: 19.0760,
            lon: 72.8777
       	},{
            name: 'Brazil',
            lat: -23.5505,
            lon: -46.6333
       	},{
            name: 'Switzerland',
            lat: 46.8182,
            lon: 8.2275
       	},{
            name: 'Beijing',
            lat: 39.9042,
            lon: 116.4074
       	},{
            name: 'Islamabad',
            lat: 33.6600,
            lon: 73.2294
       	},{
            name: 'Romania',
            lat: 44.4268,
            lon: 26.1025
       	},{
            name: 'Milwaukee',
            lat: 43.0389,
            lon: -87.9065
       	},{
            name: 'Tanzania',
            lat: -6.7924,
            lon: 39.2083
       	},{
            name: 'Perth',
            lat: -31.9505,
            lon: 115.8605
       	},{
            name: 'Reno',
            lat: 39.5296,
            lon: -119.8138
       	},{
            name: 'Montgomery',
            lat: 32.3668,
            lon: -86.3000
       	},{
            name: 'Charleston',
            lat: 38.3498,
            lon: -81.6326
       	},{
            name: 'Chennai',
            lat: 13.0827,
            lon: 80.2707
       	},{
            name: 'Lebanon',
            lat: 33.8553,
            lon: 35.5359
       	},{
            name: 'Spain',
            lat: 40.4168,
            lon: -3.7038
       	},{
            name: 'Shenzhen',
            lat: 22.5431,
            lon: 114.0579
       	},{
            name: 'Abuja',
            lat: 9.0765,
            lon: 7.3986
       	},{
            name: 'Lima',
            lat: -12.0464,
            lon: -77.0428
       	},{
            name: 'Rajasthan',
            lat: 26.9124,
            lon: 75.7873
       	},{
            name: 'Trinidad and Tobago',
            lat: 10.6549,
            lon: -61.5019
       	},{
            name: 'Poland',
            lat: 52.2297,
            lon: 21.0122
       	},{
            name: 'Norway',
            lat: 59.9139,
            lon: 10.7522
       	},{
            name: 'Sydney',
            lat: -33.8688,
            lon: 151.2093
       	},{
            name: 'Trinidad and Tobago',
            lat: 10.6549,
            lon: -61.5019
       	},{
            name: 'Port Harcourt',
            lat: 4.8156,
            lon: 7.0498
       	},{
            name: 'Southern Arizona',
            lat: 32.2217,
            lon: -110.9265
       	},{
            name: 'Zambia',
            lat: -15.3875,
            lon: 28.3228
       	},{
            name: 'Slovenia',
            lat: 46.1512,
            lon: 14.9955
       	},{
            name: 'Central Valley',
            lat: 36.7468,
            lon: -119.7726
       	},{
            name: 'El Paso Area',
            lat: 31.7619,
            lon: -106.4850
       	},{
            name: 'Triad NC Area',
            lat: 36.0726,
            lon: -79.7920
       	},{
            name: 'NE Indiana/NW Ohio',
            lat: 41.0793,
            lon: -85.1394
       	},{
            name: 'Taiwan',
            lat: 25.0330,
            lon: 121.5654
       	},{
            name: 'Bahrain',
            lat: 26.2130,
            lon: 50.6029
       	},{
            name: 'Liberia',
            lat: 6.2907,
            lon: -10.7605
       	},{
            name: 'Oman',
            lat: 23.5975,
            lon: 58.5401
       	},{
            name: 'Cameroon',
            lat: 4.0511,
            lon: 9.7679
       	},{
            name: 'Lagos',
            lat: 6.5352,
            lon: 3.3490
       	},{
            name: 'Ireland',
            lat: 53.3498,
            lon: 6.2603
       	},{
            name: 'Montreal',
            lat: 45.5017,
            lon: -73.5673
       	},{
            name: 'Guangzhou',
            lat: 23.1291,
            lon: 113.2644
       	},{
            name: 'Côte d’Ivoire',
            lat: 5.3600,
            lon: -4.0083
       	},{
            name: 'Colombia',
            lat: 4.7110,
            lon: -74.0721
       	},{
            name: 'Canberra',
            lat: -35.2809,
            lon: 149.1300
       	},{
            name: 'Chile',
            lat: -33.4489,
            lon: -70.6693
       	},{
            name: 'Cyprus',
            lat: 35.1856,
            lon: 33.3823
       	},{
            name: 'Brooklyn',
            lat: 40.6782,
            lon: -73.9442
       	},{
            name: 'Kuwait',
            lat: 29.3759,
            lon: 47.9774
       	},{
            name: 'Denmark',
            lat: 55.6761,
            lon: 12.5683
       	},{
            name: 'Central Italy',
            lat: 41.9028,
            lon: 12.4964
       	},{
            name: 'Egypt',
            lat: 30.0444,
            lon: 31.2357
       	},{
            name: 'Doha',
            lat: 25.2854,
            lon: 51.5310
       	},{
            name: 'Jordan',
            lat: 31.9454,
            lon: 35.9284
       	},{
            name: 'Botswana',
            lat: -24.6282,
            lon: 25.9231
       	},{
            name: 'Argentina',
            lat: -38.4161,
            lon: -63.6167
       	}]
    }]
});