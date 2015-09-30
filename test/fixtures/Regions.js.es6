// A list of provinces and states in the world from geonames.org
const Regions = {
  AL: [
    {
      id: 865730,
      name: 'Qarku i Beratit',
      asciiName: 'Qarku i Beratit'
    },
    {
      id: 865731,
      name: 'Qarku i Dibrës',
      asciiName: 'Qarku i Dibres'
    },
    {
      id: 865732,
      name: 'Qarku i Elbasanit',
      asciiName: 'Qarku i Elbasanit'
    },
    {
      id: 865733,
      name: 'Qarku i Gjirokastrës',
      asciiName: 'Qarku i Gjirokastres'
    },
    {
      id: 865734,
      name: 'Qarku i Korçës',
      asciiName: 'Qarku i Korces'
    },
    {
      id: 865735,
      name: 'Qarku i Kukësit',
      asciiName: 'Qarku i Kukesit'
    },
    {
      id: 3344947,
      name: 'Qarku i Durrësit',
      asciiName: 'Qarku i Durresit'
    },
    {
      id: 3344948,
      name: 'Qarku i Fierit',
      asciiName: 'Qarku i Fierit'
    },
    {
      id: 3344949,
      name: 'Qarku i Lezhës',
      asciiName: 'Qarku i Lezhes'
    },
    {
      id: 3344950,
      name: 'Qarku i Shkodrës',
      asciiName: 'Qarku i Shkodres'
    },
    {
      id: 3344951,
      name: 'Qarku i Tiranës',
      asciiName: 'Qarku i Tiranes'
    },
    {
      id: 3344952,
      name: 'Qarku i Vlorës',
      asciiName: 'Qarku i Vlores'
    }
  ],
  DZ: [
    {
      id: 2475683,
      name: 'Wilaya de Tlemcen',
      asciiName: 'Wilaya de Tlemcen'
    },
    {
      id: 2475741,
      name: 'Wilaya de Tizi Ouzou',
      asciiName: 'Wilaya de Tizi Ouzou'
    },
    {
      id: 2475858,
      name: 'Wilaya de Tissemsilt',
      asciiName: 'Wilaya de Tissemsilt'
    },
    {
      id: 2476027,
      name: 'Wilaya de Tipaza',
      asciiName: 'Wilaya de Tipaza'
    },
    {
      id: 2476302,
      name: 'Wilaya de Tindouf',
      asciiName: 'Wilaya de Tindouf'
    },
    {
      id: 2476893,
      name: 'Wilaya de Tiaret',
      asciiName: 'Wilaya de Tiaret'
    },
    {
      id: 2477457,
      name: 'Wilaya de Tébessa',
      asciiName: 'Wilaya de Tebessa'
    },
    {
      id: 2478217,
      name: 'Wilaya de Tamanrasset',
      asciiName: 'Wilaya de Tamanrasset'
    },
    {
      id: 2479213,
      name: 'Wilaya de Souk Ahras',
      asciiName: 'Wilaya de Souk Ahras'
    },
    {
      id: 2479532,
      name: 'Wilaya de Skikda',
      asciiName: 'Wilaya de Skikda'
    },
    {
      id: 2481001,
      name: 'Wilaya de Sidi Bel Abbès',
      asciiName: 'Wilaya de Sidi Bel Abbes'
    },
    {
      id: 2481696,
      name: 'Wilaya de Sétif',
      asciiName: 'Wilaya de Setif'
    },
    {
      id: 2482557,
      name: 'Wilaya de Saïda',
      asciiName: 'Wilaya de Saida'
    },
    {
      id: 2483666,
      name: 'Wilaya de Relizane',
      asciiName: 'Wilaya de Relizane'
    },
    {
      id: 2484618,
      name: 'Oum el Bouaghi',
      asciiName: 'Oum el Bouaghi'
    },
    {
      id: 2485794,
      name: 'Wilaya de Ouargla',
      asciiName: 'Wilaya de Ouargla'
    },
    {
      id: 2485920,
      name: 'Oran',
      asciiName: 'Oran'
    },
    {
      id: 2486512,
      name: 'Wilaya de Naama',
      asciiName: 'Wilaya de Naama'
    },
    {
      id: 2486682,
      name: 'Wilaya de M’Sila',
      asciiName: 'Wilaya de M\'Sila'
    },
    {
      id: 2487130,
      name: 'Wilaya de Mostaganem',
      asciiName: 'Wilaya de Mostaganem'
    },
    {
      id: 2487449,
      name: 'Wilaya de Mila',
      asciiName: 'Wilaya de Mila'
    },
    {
      id: 2488831,
      name: 'Wilaya de Médéa',
      asciiName: 'Wilaya de Medea'
    },
    {
      id: 2490095,
      name: 'Wilaya de Mascara',
      asciiName: 'Wilaya de Mascara'
    },
    {
      id: 2491188,
      name: 'Wilaya de Laghouat',
      asciiName: 'Wilaya de Laghouat'
    },
    {
      id: 2491887,
      name: 'Wilaya de Khenchela',
      asciiName: 'Wilaya de Khenchela'
    },
    {
      id: 2492910,
      name: 'Wilaya de Jijel',
      asciiName: 'Wilaya de Jijel'
    },
    {
      id: 2493455,
      name: 'Illizi',
      asciiName: 'Illizi'
    },
    {
      id: 2495659,
      name: 'Wilaya de Guelma',
      asciiName: 'Wilaya de Guelma'
    },
    {
      id: 2496045,
      name: 'Wilaya de Ghardaïa',
      asciiName: 'Wilaya de Ghardaia'
    },
    {
      id: 2497322,
      name: 'El Tarf',
      asciiName: 'El Tarf'
    },
    {
      id: 2497406,
      name: 'El Oued',
      asciiName: 'El Oued'
    },
    {
      id: 2498541,
      name: 'El Bayadh',
      asciiName: 'El Bayadh'
    },
    {
      id: 2500013,
      name: 'Wilaya de Djelfa',
      asciiName: 'Wilaya de Djelfa'
    },
    {
      id: 2501147,
      name: 'Wilaya de Constantine',
      asciiName: 'Wilaya de Constantine'
    },
    {
      id: 2501296,
      name: 'Wilaya de Chlef',
      asciiName: 'Wilaya de Chlef'
    },
    {
      id: 2502638,
      name: 'Wilaya de Boumerdes',
      asciiName: 'Wilaya de Boumerdes'
    },
    {
      id: 2502951,
      name: 'Wilaya de Bouira',
      asciiName: 'Wilaya de Bouira'
    },
    {
      id: 2503699,
      name: 'Wilaya de Bordj Bou Arréridj',
      asciiName: 'Wilaya de Bordj Bou Arreridj'
    },
    {
      id: 2503765,
      name: 'Wilaya de Blida',
      asciiName: 'Wilaya de Blida'
    },
    {
      id: 2503822,
      name: 'Wilaya de Biskra',
      asciiName: 'Wilaya de Biskra'
    },
    {
      id: 2505325,
      name: 'Wilaya de Bejaïa',
      asciiName: 'Wilaya de Bejaia'
    },
    {
      id: 2505525,
      name: 'Wilaya de Béchar',
      asciiName: 'Wilaya de Bechar'
    },
    {
      id: 2505569,
      name: 'Wilaya de Batna',
      asciiName: 'Wilaya de Batna'
    },
    {
      id: 2506994,
      name: 'Annaba',
      asciiName: 'Annaba'
    },
    {
      id: 2507475,
      name: 'Wilaya d’ Alger',
      asciiName: 'Wilaya d\' Alger'
    },
    {
      id: 2507899,
      name: 'Wilaya de Aïn Temouchent',
      asciiName: 'Wilaya de Ain Temouchent'
    },
    {
      id: 2508226,
      name: 'Wilaya de Aïn Defla',
      asciiName: 'Wilaya de Ain Defla'
    },
    {
      id: 2508807,
      name: 'Adrar',
      asciiName: 'Adrar'
    }
  ],
  AO: [
    {
      id: 145701,
      name: 'Lunda Sul',
      asciiName: 'Lunda Sul'
    },
    {
      id: 145702,
      name: 'Lunda Norte Province',
      asciiName: 'Lunda Norte Province'
    },
    {
      id: 875996,
      name: 'Moxico',
      asciiName: 'Moxico'
    },
    {
      id: 876337,
      name: 'Kuando Kubango',
      asciiName: 'Kuando Kubango'
    },
    {
      id: 2236355,
      name: 'Zaire',
      asciiName: 'Zaire'
    },
    {
      id: 2236566,
      name: 'Província do Uíge',
      asciiName: 'Provincia do Uige'
    },
    {
      id: 2239858,
      name: 'Malanje Province',
      asciiName: 'Malanje Province'
    },
    {
      id: 2240444,
      name: 'Luanda Province',
      asciiName: 'Luanda Province'
    },
    {
      id: 2241660,
      name: 'Cuanza Norte Province',
      asciiName: 'Cuanza Norte Province'
    },
    {
      id: 2243266,
      name: 'Cabinda',
      asciiName: 'Cabinda'
    },
    {
      id: 2243598,
      name: 'Bengo Province',
      asciiName: 'Bengo Province'
    },
    {
      id: 3347016,
      name: 'Namibe Province',
      asciiName: 'Namibe Province'
    },
    {
      id: 3348303,
      name: 'Huila Province',
      asciiName: 'Huila Province'
    },
    {
      id: 3348310,
      name: 'Huambo',
      asciiName: 'Huambo'
    },
    {
      id: 3349096,
      name: 'Cunene Province',
      asciiName: 'Cunene Province'
    },
    {
      id: 3349234,
      name: 'Kwanza Sul',
      asciiName: 'Kwanza Sul'
    },
    {
      id: 3351640,
      name: 'Província do Bié',
      asciiName: 'Provincia do Bie'
    },
    {
      id: 3351660,
      name: 'Benguela',
      asciiName: 'Benguela'
    }
  ],
  AR: [
    {
      id: 3430657,
      name: 'Provincia de Misiones',
      asciiName: 'Provincia de Misiones'
    },
    {
      id: 3433896,
      name: 'Provincia de Formosa',
      asciiName: 'Provincia de Formosa'
    },
    {
      id: 3433955,
      name: 'Ciudad Autónoma de Buenos Aires',
      asciiName: 'Ciudad Autonoma de Buenos Aires'
    },
    {
      id: 3434137,
      name: 'Provincia de Entre Ríos',
      asciiName: 'Provincia de Entre Rios'
    },
    {
      id: 3435214,
      name: 'Provincia de Corrientes',
      asciiName: 'Provincia de Corrientes'
    },
    {
      id: 3435907,
      name: 'Provincia de Buenos Aires',
      asciiName: 'Provincia de Buenos Aires'
    },
    {
      id: 3833578,
      name: 'Provincia de Tucumán',
      asciiName: 'Provincia de Tucuman'
    },
    {
      id: 3834450,
      name: 'Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur',
      asciiName: 'Provincia de Tierra del Fuego, Antartida e Islas del Atlantico Sur'
    },
    {
      id: 3835868,
      name: 'Provincia de Santiago del Estero',
      asciiName: 'Provincia de Santiago del Estero'
    },
    {
      id: 3836276,
      name: 'Provincia de Santa Fe',
      asciiName: 'Provincia de Santa Fe'
    },
    {
      id: 3836350,
      name: 'Provincia de Santa Cruz',
      asciiName: 'Provincia de Santa Cruz'
    },
    {
      id: 3837029,
      name: 'Provincia de San Luis',
      asciiName: 'Provincia de San Luis'
    },
    {
      id: 3837152,
      name: 'Provincia de San Juan',
      asciiName: 'Provincia de San Juan'
    },
    {
      id: 3838231,
      name: 'Provincia de Salta',
      asciiName: 'Provincia de Salta'
    },
    {
      id: 3838830,
      name: 'Provincia de Río Negro',
      asciiName: 'Provincia de Rio Negro'
    },
    {
      id: 3843122,
      name: 'Provincia del Neuquén',
      asciiName: 'Provincia del Neuquen'
    },
    {
      id: 3844419,
      name: 'Provincia de Mendoza',
      asciiName: 'Provincia de Mendoza'
    },
    {
      id: 3848949,
      name: 'Provincia de La Rioja',
      asciiName: 'Provincia de La Rioja'
    },
    {
      id: 3849574,
      name: 'Provincia de La Pampa',
      asciiName: 'Provincia de La Pampa'
    },
    {
      id: 3853404,
      name: 'Provincia de Jujuy',
      asciiName: 'Provincia de Jujuy'
    },
    {
      id: 3860255,
      name: 'Provincia de Córdoba',
      asciiName: 'Provincia de Cordoba'
    },
    {
      id: 3861244,
      name: 'Provincia del Chubut',
      asciiName: 'Provincia del Chubut'
    },
    {
      id: 3861887,
      name: 'Provincia del Chaco',
      asciiName: 'Provincia del Chaco'
    },
    {
      id: 3862286,
      name: 'Provincia de Catamarca',
      asciiName: 'Provincia de Catamarca'
    }
  ],
  AU: [
    {
      id: 2058645,
      name: 'State of Western Australia',
      asciiName: 'State of Western Australia'
    },
    {
      id: 2061327,
      name: 'State of South Australia',
      asciiName: 'State of South Australia'
    },
    {
      id: 2064513,
      name: 'Northern Territory',
      asciiName: 'Northern Territory'
    },
    {
      id: 2145234,
      name: 'State of Victoria',
      asciiName: 'State of Victoria'
    },
    {
      id: 2147291,
      name: 'State of Tasmania',
      asciiName: 'State of Tasmania'
    },
    {
      id: 2152274,
      name: 'State of Queensland',
      asciiName: 'State of Queensland'
    },
    {
      id: 2155400,
      name: 'State of New South Wales',
      asciiName: 'State of New South Wales'
    },
    {
      id: 2177478,
      name: 'Australian Capital Territory',
      asciiName: 'Australian Capital Territory'
    }
  ],
  BZ: [
    {
      id: 3580913,
      name: 'Toledo District',
      asciiName: 'Toledo District'
    },
    {
      id: 3580975,
      name: 'Stann Creek District',
      asciiName: 'Stann Creek District'
    },
    {
      id: 3581511,
      name: 'Orange Walk District',
      asciiName: 'Orange Walk District'
    },
    {
      id: 3582302,
      name: 'Corozal District',
      asciiName: 'Corozal District'
    },
    {
      id: 3582429,
      name: 'Cayo District',
      asciiName: 'Cayo District'
    },
    {
      id: 3582676,
      name: 'Belize District',
      asciiName: 'Belize District'
    }
  ],
  BJ: [
    {
      id: 2390719,
      name: 'Zou Department',
      asciiName: 'Zou Department'
    },
    {
      id: 2392325,
      name: 'Département de l’Ouémé',
      asciiName: 'Departement de l\'Oueme'
    },
    {
      id: 2392716,
      name: 'Mono',
      asciiName: 'Mono'
    },
    {
      id: 2394992,
      name: 'Borgou Department',
      asciiName: 'Borgou Department'
    },
    {
      id: 2395504,
      name: 'Atlantique Department',
      asciiName: 'Atlantique Department'
    },
    {
      id: 2395524,
      name: 'Atakora Department',
      asciiName: 'Atakora Department'
    },
    {
      id: 2597271,
      name: 'Alibori',
      asciiName: 'Alibori'
    },
    {
      id: 2597272,
      name: 'Collines Department',
      asciiName: 'Collines Department'
    },
    {
      id: 2597273,
      name: 'Kouffo Department',
      asciiName: 'Kouffo Department'
    },
    {
      id: 2597274,
      name: 'Donga',
      asciiName: 'Donga'
    },
    {
      id: 2597275,
      name: 'Littoral',
      asciiName: 'Littoral'
    },
    {
      id: 2597277,
      name: 'Plateau Department',
      asciiName: 'Plateau Department'
    }
  ],
  BW: [
    {
      id: 933043,
      name: 'Southern District',
      asciiName: 'Southern District'
    },
    {
      id: 933044,
      name: 'South East District',
      asciiName: 'South East District'
    },
    {
      id: 933210,
      name: 'North East District',
      asciiName: 'North East District'
    },
    {
      id: 933230,
      name: 'North West District',
      asciiName: 'North West District'
    },
    {
      id: 933562,
      name: 'Kweneng District',
      asciiName: 'Kweneng District'
    },
    {
      id: 933654,
      name: 'Kgatleng District',
      asciiName: 'Kgatleng District'
    },
    {
      id: 933657,
      name: 'Kgalagadi District',
      asciiName: 'Kgalagadi District'
    },
    {
      id: 933758,
      name: 'Ghanzi District',
      asciiName: 'Ghanzi District'
    },
    {
      id: 933851,
      name: 'Central District',
      asciiName: 'Central District'
    }
  ],
  BN: [
    {
      id: 1820068,
      name: 'Tutong District',
      asciiName: 'Tutong District'
    },
    {
      id: 1820106,
      name: 'Temburong District',
      asciiName: 'Temburong District'
    },
    {
      id: 1820818,
      name: 'Brunei and Muara District',
      asciiName: 'Brunei and Muara District'
    },
    {
      id: 1820869,
      name: 'Belait District',
      asciiName: 'Belait District'
    }
  ],
  BG: [
    {
      id: 453751,
      name: 'Oblast Razgrad',
      asciiName: 'Oblast Razgrad'
    },
    {
      id: 453753,
      name: 'Oblast Montana',
      asciiName: 'Oblast Montana'
    },
    {
      id: 725713,
      name: 'Oblast Vratsa',
      asciiName: 'Oblast Vratsa'
    },
    {
      id: 726051,
      name: 'Varna',
      asciiName: 'Varna'
    },
    {
      id: 726419,
      name: 'Oblast Dobrich',
      asciiName: 'Oblast Dobrich'
    },
    {
      id: 727012,
      name: 'Sofiya',
      asciiName: 'Sofiya'
    },
    {
      id: 727524,
      name: 'Oblast Ruse',
      asciiName: 'Oblast Ruse'
    },
    {
      id: 728194,
      name: 'Plovdiv',
      asciiName: 'Plovdiv'
    },
    {
      id: 728204,
      name: 'Oblast Pleven',
      asciiName: 'Oblast Pleven'
    },
    {
      id: 728331,
      name: 'Pernik',
      asciiName: 'Pernik'
    },
    {
      id: 728379,
      name: 'Pazardzhik',
      asciiName: 'Pazardzhik'
    },
    {
      id: 729560,
      name: 'Lovech',
      asciiName: 'Lovech'
    },
    {
      id: 730436,
      name: 'Oblast Khaskovo',
      asciiName: 'Oblast Khaskovo'
    },
    {
      id: 731061,
      name: 'Sofiya-Grad',
      asciiName: 'Sofiya-Grad'
    },
    {
      id: 732771,
      name: 'Burgas',
      asciiName: 'Burgas'
    },
    {
      id: 733192,
      name: 'Blagoevgrad',
      asciiName: 'Blagoevgrad'
    },
    {
      id: 864552,
      name: 'Gabrovo',
      asciiName: 'Gabrovo'
    },
    {
      id: 864553,
      name: 'Oblast Kŭrdzhali',
      asciiName: 'Oblast Kurdzhali'
    },
    {
      id: 864554,
      name: 'Oblast Kyustendil',
      asciiName: 'Oblast Kyustendil'
    },
    {
      id: 864555,
      name: 'Oblast Shumen',
      asciiName: 'Oblast Shumen'
    },
    {
      id: 864556,
      name: 'Oblast Silistra',
      asciiName: 'Oblast Silistra'
    },
    {
      id: 864557,
      name: 'Oblast Sliven',
      asciiName: 'Oblast Sliven'
    },
    {
      id: 864558,
      name: 'Oblast Smolyan',
      asciiName: 'Oblast Smolyan'
    },
    {
      id: 864559,
      name: 'Oblast Stara Zagora',
      asciiName: 'Oblast Stara Zagora'
    },
    {
      id: 864560,
      name: 'Oblast Tŭrgovishte',
      asciiName: 'Oblast Turgovishte'
    },
    {
      id: 864561,
      name: 'Oblast Veliko Tŭrnovo',
      asciiName: 'Oblast Veliko Turnovo'
    },
    {
      id: 864562,
      name: 'Oblast Vidin',
      asciiName: 'Oblast Vidin'
    },
    {
      id: 864563,
      name: 'Oblast Yambol',
      asciiName: 'Oblast Yambol'
    }
  ],
  BF: [
    {
      id: 6930701,
      name: 'Boucle du Mouhoun Region',
      asciiName: 'Boucle du Mouhoun Region'
    },
    {
      id: 6930703,
      name: 'Cascades Region',
      asciiName: 'Cascades Region'
    },
    {
      id: 6930704,
      name: 'Centre',
      asciiName: 'Centre'
    },
    {
      id: 6930705,
      name: 'Centre-Est',
      asciiName: 'Centre-Est'
    },
    {
      id: 6930706,
      name: 'Centre-Nord',
      asciiName: 'Centre-Nord'
    },
    {
      id: 6930707,
      name: 'Centre-Ouest',
      asciiName: 'Centre-Ouest'
    },
    {
      id: 6930708,
      name: 'Centre-Sud',
      asciiName: 'Centre-Sud'
    },
    {
      id: 6930709,
      name: 'Est',
      asciiName: 'Est'
    },
    {
      id: 6930710,
      name: 'High-Basins Region',
      asciiName: 'High-Basins Region'
    },
    {
      id: 6930711,
      name: 'Nord',
      asciiName: 'Nord'
    },
    {
      id: 6930712,
      name: 'Plateau-Central',
      asciiName: 'Plateau-Central'
    },
    {
      id: 6930713,
      name: 'Sahel',
      asciiName: 'Sahel'
    },
    {
      id: 6930714,
      name: 'Southwest Region',
      asciiName: 'Southwest Region'
    }
  ],
  BI: [
    {
      id: 422233,
      name: 'Makamba Province',
      asciiName: 'Makamba Province'
    },
    {
      id: 423327,
      name: 'Bururi Province',
      asciiName: 'Bururi Province'
    },
    {
      id: 425550,
      name: 'Muramvya Province',
      asciiName: 'Muramvya Province'
    },
    {
      id: 426271,
      name: 'Gitega Province',
      asciiName: 'Gitega Province'
    },
    {
      id: 426699,
      name: 'Ruyigi Province',
      asciiName: 'Ruyigi Province'
    },
    {
      id: 427700,
      name: 'Cankuzo Province',
      asciiName: 'Cankuzo Province'
    },
    {
      id: 428218,
      name: 'Karuzi Province',
      asciiName: 'Karuzi Province'
    },
    {
      id: 428514,
      name: 'Bubanza Province',
      asciiName: 'Bubanza Province'
    },
    {
      id: 430020,
      name: 'Cibitoke Province',
      asciiName: 'Cibitoke Province'
    },
    {
      id: 430567,
      name: 'Ngozi Province',
      asciiName: 'Ngozi Province'
    },
    {
      id: 430951,
      name: 'Kayanza Province',
      asciiName: 'Kayanza Province'
    },
    {
      id: 431747,
      name: 'Muyinga Province',
      asciiName: 'Muyinga Province'
    },
    {
      id: 432455,
      name: 'Kirundo Province',
      asciiName: 'Kirundo Province'
    },
    {
      id: 434147,
      name: 'Rutana Province',
      asciiName: 'Rutana Province'
    },
    {
      id: 434386,
      name: 'Province de Mwaro',
      asciiName: 'Province de Mwaro'
    },
    {
      id: 7303939,
      name: 'Bujumbura Mairie Province',
      asciiName: 'Bujumbura Mairie Province'
    },
    {
      id: 7303940,
      name: 'Bujumbura Rural Province',
      asciiName: 'Bujumbura Rural Province'
    }
  ],
  KH: [
    {
      id: 1821301,
      name: 'Pursat',
      asciiName: 'Pursat'
    },
    {
      id: 1821310,
      name: 'Battambang',
      asciiName: 'Battambang'
    },
    {
      id: 1821939,
      name: 'Takeo',
      asciiName: 'Takeo'
    },
    {
      id: 1821992,
      name: 'Svay Rieng',
      asciiName: 'Svay Rieng'
    },
    {
      id: 1822028,
      name: 'Stung Treng',
      asciiName: 'Stung Treng'
    },
    {
      id: 1822210,
      name: 'Ŏtâr Méanchey',
      asciiName: 'Otar Meanchey'
    },
    {
      id: 1822213,
      name: 'Siem Reap',
      asciiName: 'Siem Reap'
    },
    {
      id: 1822449,
      name: 'Ratanakiri',
      asciiName: 'Ratanakiri'
    },
    {
      id: 1822609,
      name: 'Prey Veng',
      asciiName: 'Prey Veng'
    },
    {
      id: 1822676,
      name: 'Preah Vihear',
      asciiName: 'Preah Vihear'
    },
    {
      id: 1830103,
      name: 'Phnom Penh',
      asciiName: 'Phnom Penh'
    },
    {
      id: 1830206,
      name: 'Pailin',
      asciiName: 'Pailin'
    },
    {
      id: 1830306,
      name: 'Mondolkiri',
      asciiName: 'Mondolkiri'
    },
    {
      id: 1830563,
      name: 'Kratie',
      asciiName: 'Kratie'
    },
    {
      id: 1830937,
      name: 'Kep',
      asciiName: 'Kep'
    },
    {
      id: 1831037,
      name: 'Koh Kong',
      asciiName: 'Koh Kong'
    },
    {
      id: 1831095,
      name: 'Kandal',
      asciiName: 'Kandal'
    },
    {
      id: 1831111,
      name: 'Kampot',
      asciiName: 'Kampot'
    },
    {
      id: 1831124,
      name: 'Kampong Thom',
      asciiName: 'Kampong Thom'
    },
    {
      id: 1831132,
      name: 'Kampong Speu',
      asciiName: 'Kampong Speu'
    },
    {
      id: 1831166,
      name: 'Kampong Chhnang',
      asciiName: 'Kampong Chhnang'
    },
    {
      id: 1831172,
      name: 'Kampong Cham',
      asciiName: 'Kampong Cham'
    },
    {
      id: 1899262,
      name: 'Sihanoukville',
      asciiName: 'Sihanoukville'
    },
    {
      id: 1899273,
      name: 'Banteay Meanchey',
      asciiName: 'Banteay Meanchey'
    }
  ],
  CM: [
    {
      id: 2221788,
      name: 'South-West Region',
      asciiName: 'South-West Region'
    },
    {
      id: 2221789,
      name: 'South Region',
      asciiName: 'South Region'
    },
    {
      id: 2222934,
      name: 'West Region',
      asciiName: 'West Region'
    },
    {
      id: 2223602,
      name: 'North-West Region',
      asciiName: 'North-West Region'
    },
    {
      id: 2223603,
      name: 'North Region',
      asciiName: 'North Region'
    },
    {
      id: 2229336,
      name: 'Littoral Region',
      asciiName: 'Littoral Region'
    },
    {
      id: 2231755,
      name: 'Far North Region',
      asciiName: 'Far North Region'
    },
    {
      id: 2231835,
      name: 'East Region',
      asciiName: 'East Region'
    },
    {
      id: 2233376,
      name: 'Centre Region',
      asciiName: 'Centre Region'
    },
    {
      id: 2236015,
      name: 'Adamaoua Region',
      asciiName: 'Adamaoua Region'
    }
  ],
  CA: [
    {
      id: 5883102,
      name: 'Alberta',
      asciiName: 'Alberta'
    },
    {
      id: 5909050,
      name: 'British Columbia',
      asciiName: 'British Columbia'
    },
    {
      id: 6065171,
      name: 'Manitoba',
      asciiName: 'Manitoba'
    },
    {
      id: 6087430,
      name: 'New Brunswick',
      asciiName: 'New Brunswick'
    },
    {
      id: 6091069,
      name: 'Northwest Territories',
      asciiName: 'Northwest Territories'
    },
    {
      id: 6091530,
      name: 'Nova Scotia',
      asciiName: 'Nova Scotia'
    },
    {
      id: 6091732,
      name: 'Nunavut',
      asciiName: 'Nunavut'
    },
    {
      id: 6093943,
      name: 'Ontario',
      asciiName: 'Ontario'
    },
    {
      id: 6113358,
      name: 'Prince Edward Island',
      asciiName: 'Prince Edward Island'
    },
    {
      id: 6115047,
      name: 'Québec',
      asciiName: 'Quebec'
    },
    {
      id: 6141242,
      name: 'Saskatchewan',
      asciiName: 'Saskatchewan'
    },
    {
      id: 6185811,
      name: 'Yukon',
      asciiName: 'Yukon'
    },
    {
      id: 6354959,
      name: 'Newfoundland and Labrador',
      asciiName: 'Newfoundland and Labrador'
    }
  ],
  CV: [
    {
      id: 3374161,
      name: 'Concelho do Tarrafal',
      asciiName: 'Concelho do Tarrafal'
    },
    {
      id: 3374198,
      name: 'Concelho de São Vicente',
      asciiName: 'Concelho de Sao Vicente'
    },
    {
      id: 3374226,
      name: 'Concelho de Santa Catarina',
      asciiName: 'Concelho de Santa Catarina'
    },
    {
      id: 3374249,
      name: 'Sal Municipality',
      asciiName: 'Sal Municipality'
    },
    {
      id: 3374274,
      name: 'Concelho da Ribeira Grande',
      asciiName: 'Concelho da Ribeira Grande'
    },
    {
      id: 3374332,
      name: 'Concelho da Praia',
      asciiName: 'Concelho da Praia'
    },
    {
      id: 3374391,
      name: 'Concelho do Paul',
      asciiName: 'Concelho do Paul'
    },
    {
      id: 3374487,
      name: 'Concelho do Maio',
      asciiName: 'Concelho do Maio'
    },
    {
      id: 3374832,
      name: 'Concelho da Brava',
      asciiName: 'Concelho da Brava'
    },
    {
      id: 3374855,
      name: 'Concelho da Boa Vista',
      asciiName: 'Concelho da Boa Vista'
    },
    {
      id: 3411924,
      name: 'Concelho dos Mosteiros',
      asciiName: 'Concelho dos Mosteiros'
    },
    {
      id: 3411925,
      name: 'Concelho de Santa Cruz',
      asciiName: 'Concelho de Santa Cruz'
    },
    {
      id: 3411926,
      name: 'Concelho de São Domingos',
      asciiName: 'Concelho de Sao Domingos'
    },
    {
      id: 3411927,
      name: 'Concelho do São Filipe',
      asciiName: 'Concelho do Sao Filipe'
    },
    {
      id: 3411928,
      name: 'Concelho de São Miguel',
      asciiName: 'Concelho de Sao Miguel'
    },
    {
      id: 7602868,
      name: 'Concelho do Porto Novo',
      asciiName: 'Concelho do Porto Novo'
    },
    {
      id: 7602869,
      name: 'Concelho da Ribeira Brava',
      asciiName: 'Concelho da Ribeira Brava'
    },
    {
      id: 7602870,
      name: 'Concelho de Santa Catarina do Fogo',
      asciiName: 'Concelho de Santa Catarina do Fogo'
    },
    {
      id: 7602871,
      name: 'Concelho de São Salvador do Mundo',
      asciiName: 'Concelho de Sao Salvador do Mundo'
    },
    {
      id: 7602872,
      name: 'Concelho do Tarrafal de São Nicolau',
      asciiName: 'Concelho do Tarrafal de Sao Nicolau'
    },
    {
      id: 7602873,
      name: 'São Lourenço dos Órgãos',
      asciiName: 'Sao Lourenco dos Orgaos'
    },
    {
      id: 7603281,
      name: 'Concelho de Ribeira Grande de Santiago',
      asciiName: 'Concelho de Ribeira Grande de Santiago'
    }
  ],
  CF: [
    {
      id: 236178,
      name: 'Vakaga',
      asciiName: 'Vakaga'
    },
    {
      id: 236887,
      name: 'Ouaka',
      asciiName: 'Ouaka'
    },
    {
      id: 237556,
      name: 'Mbomou',
      asciiName: 'Mbomou'
    },
    {
      id: 238639,
      name: 'Haut-Mbomou',
      asciiName: 'Haut-Mbomou'
    },
    {
      id: 238640,
      name: 'Haute-Kotto',
      asciiName: 'Haute-Kotto'
    },
    {
      id: 240396,
      name: 'Basse-Kotto',
      asciiName: 'Basse-Kotto'
    },
    {
      id: 240591,
      name: 'Bamingui-Bangoran',
      asciiName: 'Bamingui-Bangoran'
    },
    {
      id: 2383204,
      name: 'Préfecture de la Sangha-Mbaéré',
      asciiName: 'Prefecture de la Sangha-Mbaere'
    },
    {
      id: 2383650,
      name: 'Préfecture de l’Ouham-Pendé',
      asciiName: 'Prefecture de l\'Ouham-Pende'
    },
    {
      id: 2383653,
      name: 'Ouham',
      asciiName: 'Ouham'
    },
    {
      id: 2383765,
      name: 'Ombella-Mpoko',
      asciiName: 'Ombella-Mpoko'
    },
    {
      id: 2384205,
      name: 'Préfecture de la Nana-Mambéré',
      asciiName: 'Prefecture de la Nana-Mambere'
    },
    {
      id: 2385105,
      name: 'Lobaye',
      asciiName: 'Lobaye'
    },
    {
      id: 2385836,
      name: 'Préfecture de la Kémo',
      asciiName: 'Prefecture de la Kemo'
    },
    {
      id: 2386161,
      name: 'Mambéré-Kadéï',
      asciiName: 'Mambere-Kadei'
    },
    {
      id: 2386243,
      name: 'Préfecture de la Nana-Grébizi',
      asciiName: 'Prefecture de la Nana-Grebizi'
    },
    {
      id: 2596686,
      name: 'Commune de Bangui',
      asciiName: 'Commune de Bangui'
    }
  ],
  TD: [
    {
      id: 242048,
      name: 'Salamat Region',
      asciiName: 'Salamat Region'
    },
    {
      id: 242246,
      name: 'Ouaddai Region',
      asciiName: 'Ouaddai Region'
    },
    {
      id: 244877,
      name: 'Wadi Fira Region',
      asciiName: 'Wadi Fira Region'
    },
    {
      id: 2425287,
      name: 'Tandjile Region',
      asciiName: 'Tandjile Region'
    },
    {
      id: 2427315,
      name: 'Moyen-Chari Region',
      asciiName: 'Moyen-Chari Region'
    },
    {
      id: 2428132,
      name: 'Mayo-Kebbi East Region',
      asciiName: 'Mayo-Kebbi East Region'
    },
    {
      id: 2429058,
      name: 'Logone Oriental Region',
      asciiName: 'Logone Oriental Region'
    },
    {
      id: 2429060,
      name: 'Logone Occidental Region',
      asciiName: 'Logone Occidental Region'
    },
    {
      id: 2429323,
      name: 'Lac Region',
      asciiName: 'Lac Region'
    },
    {
      id: 2430873,
      name: 'Kanem Region',
      asciiName: 'Kanem Region'
    },
    {
      id: 2431555,
      name: 'Guera Region',
      asciiName: 'Guera Region'
    },
    {
      id: 2434478,
      name: 'Chari-Baguirmi Region',
      asciiName: 'Chari-Baguirmi Region'
    },
    {
      id: 2435899,
      name: 'Batha Region',
      asciiName: 'Batha Region'
    },
    {
      id: 7602866,
      name: 'Borkou Region',
      asciiName: 'Borkou Region'
    },
    {
      id: 7603251,
      name: 'Hadjer-Lamis',
      asciiName: 'Hadjer-Lamis'
    },
    {
      id: 7603252,
      name: 'Mandoul',
      asciiName: 'Mandoul'
    },
    {
      id: 7603253,
      name: 'Mayo-Kebbi West Region',
      asciiName: 'Mayo-Kebbi West Region'
    },
    {
      id: 7603254,
      name: 'Région de la Ville de N’Djaména',
      asciiName: 'Region de la Ville de N\'Djamena'
    },
    {
      id: 7603255,
      name: 'Barh el Gazel',
      asciiName: 'Barh el Gazel'
    },
    {
      id: 7603257,
      name: 'Sila',
      asciiName: 'Sila'
    },
    {
      id: 7603258,
      name: 'Tibesti Region',
      asciiName: 'Tibesti Region'
    },
    {
      id: 8604857,
      name: 'Ennedi-Ouest',
      asciiName: 'Ennedi-Ouest'
    },
    {
      id: 8604858,
      name: 'Ennedi-Est',
      asciiName: 'Ennedi-Est'
    }
  ],
  CL: [
    {
      id: 3868621,
      name: 'Región de Valparaíso',
      asciiName: 'Region de Valparaiso'
    },
    {
      id: 3870116,
      name: 'Región de Tarapacá',
      asciiName: 'Region de Tarapaca'
    },
    {
      id: 3873544,
      name: 'Región Metropolitana de Santiago',
      asciiName: 'Region Metropolitana de Santiago'
    },
    {
      id: 3880306,
      name: 'Maule',
      asciiName: 'Maule'
    },
    {
      id: 3881974,
      name: 'Los Lagos',
      asciiName: 'Los Lagos'
    },
    {
      id: 3883281,
      name: 'Región del Libertador General Bernardo O’Higgins',
      asciiName: 'Region del Libertador General Bernardo O\'Higgins'
    },
    {
      id: 3893623,
      name: 'Coquimbo',
      asciiName: 'Coquimbo'
    },
    {
      id: 3898380,
      name: 'Región del Biobío',
      asciiName: 'Region del Biobio'
    },
    {
      id: 3899191,
      name: 'Atacama',
      asciiName: 'Atacama'
    },
    {
      id: 3899463,
      name: 'Región de la Araucanía',
      asciiName: 'Region de la Araucania'
    },
    {
      id: 3899537,
      name: 'Antofagasta',
      asciiName: 'Antofagasta'
    },
    {
      id: 3900333,
      name: 'Aysén',
      asciiName: 'Aysen'
    },
    {
      id: 4036650,
      name: 'Región de Magallanes y de la Antártica Chilena',
      asciiName: 'Region de Magallanes y de la Antartica Chilena'
    },
    {
      id: 6693562,
      name: 'Región de Arica y Parinacota',
      asciiName: 'Region de Arica y Parinacota'
    },
    {
      id: 6693563,
      name: 'Región de Los Ríos',
      asciiName: 'Region de Los Rios'
    }
  ],
  CN: [
    {
      id: 1279685,
      name: 'Tibet Autonomous Region',
      asciiName: 'Tibet Autonomous Region'
    },
    {
      id: 1280239,
      name: 'Qinghai Sheng',
      asciiName: 'Qinghai Sheng'
    },
    {
      id: 1529047,
      name: 'Xinjiang Uygur Zizhiqu',
      asciiName: 'Xinjiang Uygur Zizhiqu'
    },
    {
      id: 1784764,
      name: 'Zhejiang Sheng',
      asciiName: 'Zhejiang Sheng'
    },
    {
      id: 1785694,
      name: 'Yunnan Sheng',
      asciiName: 'Yunnan Sheng'
    },
    {
      id: 1792943,
      name: 'Tianjin Shi',
      asciiName: 'Tianjin Shi'
    },
    {
      id: 1794299,
      name: 'Sichuan Sheng',
      asciiName: 'Sichuan Sheng'
    },
    {
      id: 1795912,
      name: 'Shanxi Sheng',
      asciiName: 'Shanxi Sheng'
    },
    {
      id: 1796231,
      name: 'Shanghai Shi',
      asciiName: 'Shanghai Shi'
    },
    {
      id: 1796328,
      name: 'Shandong Sheng',
      asciiName: 'Shandong Sheng'
    },
    {
      id: 1796480,
      name: 'Shaanxi',
      asciiName: 'Shaanxi'
    },
    {
      id: 1799355,
      name: 'Ningxia Huizu Zizhiqu',
      asciiName: 'Ningxia Huizu Zizhiqu'
    },
    {
      id: 1806222,
      name: 'Jiangxi Sheng',
      asciiName: 'Jiangxi Sheng'
    },
    {
      id: 1806260,
      name: 'Jiangsu Sheng',
      asciiName: 'Jiangsu Sheng'
    },
    {
      id: 1806691,
      name: 'Hunan Sheng',
      asciiName: 'Hunan Sheng'
    },
    {
      id: 1806949,
      name: 'Hubei Sheng',
      asciiName: 'Hubei Sheng'
    },
    {
      id: 1808520,
      name: 'Henan Sheng',
      asciiName: 'Henan Sheng'
    },
    {
      id: 1808773,
      name: 'Hebei Sheng',
      asciiName: 'Hebei Sheng'
    },
    {
      id: 1809054,
      name: 'Hainan Sheng',
      asciiName: 'Hainan Sheng'
    },
    {
      id: 1809445,
      name: 'Guizhou Sheng',
      asciiName: 'Guizhou Sheng'
    },
    {
      id: 1809867,
      name: 'Guangxi Zhuangzu Zizhiqu',
      asciiName: 'Guangxi Zhuangzu Zizhiqu'
    },
    {
      id: 1809935,
      name: 'Guangdong Sheng',
      asciiName: 'Guangdong Sheng'
    },
    {
      id: 1810676,
      name: 'Gansu Sheng',
      asciiName: 'Gansu Sheng'
    },
    {
      id: 1811017,
      name: 'Fujian Sheng',
      asciiName: 'Fujian Sheng'
    },
    {
      id: 1814905,
      name: 'Chongqing Shi',
      asciiName: 'Chongqing Shi'
    },
    {
      id: 1818058,
      name: 'Anhui Sheng',
      asciiName: 'Anhui Sheng'
    },
    {
      id: 2035607,
      name: 'Inner Mongolia Autonomous Region',
      asciiName: 'Inner Mongolia Autonomous Region'
    },
    {
      id: 2036115,
      name: 'Liaoning Sheng',
      asciiName: 'Liaoning Sheng'
    },
    {
      id: 2036500,
      name: 'Jilin Sheng',
      asciiName: 'Jilin Sheng'
    },
    {
      id: 2036965,
      name: 'Heilongjiang Sheng',
      asciiName: 'Heilongjiang Sheng'
    },
    {
      id: 2038349,
      name: 'Beijing Shi',
      asciiName: 'Beijing Shi'
    }
  ],
  CO: [
    {
      id: 3666082,
      name: 'Departamento del Vichada',
      asciiName: 'Departamento del Vichada'
    },
    {
      id: 3666254,
      name: 'Departamento del Vaupés',
      asciiName: 'Departamento del Vaupes'
    },
    {
      id: 3666313,
      name: 'Departamento del Valle del Cauca',
      asciiName: 'Departamento del Valle del Cauca'
    },
    {
      id: 3666951,
      name: 'Departamento de Tolima',
      asciiName: 'Departamento de Tolima'
    },
    {
      id: 3667725,
      name: 'Departamento de Sucre',
      asciiName: 'Departamento de Sucre'
    },
    {
      id: 3668578,
      name: 'Departamento de Santander',
      asciiName: 'Departamento de Santander'
    },
    {
      id: 3670205,
      name: 'Providencia y Santa Catalina, Departamento de Archipiélago de San Andrés',
      asciiName: 'Providencia y Santa Catalina, Departamento de Archipielago de San Andres'
    },
    {
      id: 3670698,
      name: 'Departamento de Risaralda',
      asciiName: 'Departamento de Risaralda'
    },
    {
      id: 3671087,
      name: 'Quindío Department',
      asciiName: 'Quindio Department'
    },
    {
      id: 3671178,
      name: 'Departamento del Putumayo',
      asciiName: 'Departamento del Putumayo'
    },
    {
      id: 3673798,
      name: 'Departamento de Norte de Santander',
      asciiName: 'Departamento de Norte de Santander'
    },
    {
      id: 3674021,
      name: 'Departamento de Nariño',
      asciiName: 'Departamento de Narino'
    },
    {
      id: 3674810,
      name: 'Departamento del Meta',
      asciiName: 'Departamento del Meta'
    },
    {
      id: 3675686,
      name: 'Departamento del Magdalena',
      asciiName: 'Departamento del Magdalena'
    },
    {
      id: 3678847,
      name: 'Departamento de La Guajira',
      asciiName: 'Departamento de La Guajira'
    },
    {
      id: 3680692,
      name: 'Departamento del Huila',
      asciiName: 'Departamento del Huila'
    },
    {
      id: 3681344,
      name: 'Departamento del Guaviare',
      asciiName: 'Departamento del Guaviare'
    },
    {
      id: 3681652,
      name: 'Departamento del Guainía',
      asciiName: 'Departamento del Guainia'
    },
    {
      id: 3685413,
      name: 'Departamento de Cundinamarca',
      asciiName: 'Departamento de Cundinamarca'
    },
    {
      id: 3685889,
      name: 'Departamento de Córdoba',
      asciiName: 'Departamento de Cordoba'
    },
    {
      id: 3686431,
      name: 'Departamento del Chocó',
      asciiName: 'Departamento del Choco'
    },
    {
      id: 3686880,
      name: 'Departamento del Cesar',
      asciiName: 'Departamento del Cesar'
    },
    {
      id: 3687029,
      name: 'Departamento del Cauca',
      asciiName: 'Departamento del Cauca'
    },
    {
      id: 3687173,
      name: 'Departamento de Casanare',
      asciiName: 'Departamento de Casanare'
    },
    {
      id: 3687479,
      name: 'Departamento del Caquetá',
      asciiName: 'Departamento del Caqueta'
    },
    {
      id: 3687951,
      name: 'Departamento de Caldas',
      asciiName: 'Departamento de Caldas'
    },
    {
      id: 3688536,
      name: 'Departamento de Boyacá',
      asciiName: 'Departamento de Boyaca'
    },
    {
      id: 3688650,
      name: 'Departamento de Bolívar',
      asciiName: 'Departamento de Bolivar'
    },
    {
      id: 3688685,
      name: 'Distrito Capital de Bogotá',
      asciiName: 'Distrito Capital de Bogota'
    },
    {
      id: 3689436,
      name: 'Departamento del Atlántico',
      asciiName: 'Departamento del Atlantico'
    },
    {
      id: 3689717,
      name: 'Departamento de Arauca',
      asciiName: 'Departamento de Arauca'
    },
    {
      id: 3689815,
      name: 'Departamento de Antioquia',
      asciiName: 'Departamento de Antioquia'
    },
    {
      id: 3689982,
      name: 'Departamento del Amazonas',
      asciiName: 'Departamento del Amazonas'
    }
  ],
  KM: [
    {
      id: 921780,
      name: 'Mwali',
      asciiName: 'Mwali'
    },
    {
      id: 921882,
      name: 'Grande Comore',
      asciiName: 'Grande Comore'
    },
    {
      id: 922001,
      name: 'Ndzuwani',
      asciiName: 'Ndzuwani'
    }
  ],
  DO: [
    {
      id: 3492112,
      name: 'Provincia de Valverde',
      asciiName: 'Provincia de Valverde'
    },
    {
      id: 3492912,
      name: 'Provincia de Santiago Rodríguez',
      asciiName: 'Provincia de Santiago Rodriguez'
    },
    {
      id: 3492918,
      name: 'Provincia de Santiago',
      asciiName: 'Provincia de Santiago'
    },
    {
      id: 3493031,
      name: 'Provincia de San Pedro de Macorís',
      asciiName: 'Provincia de San Pedro de Macoris'
    },
    {
      id: 3493091,
      name: 'Provincia de San Juan',
      asciiName: 'Provincia de San Juan'
    },
    {
      id: 3493186,
      name: 'Provincia de San Cristóbal',
      asciiName: 'Provincia de San Cristobal'
    },
    {
      id: 3493192,
      name: 'Provincia Sánchez Ramírez',
      asciiName: 'Provincia Sanchez Ramirez'
    },
    {
      id: 3493232,
      name: 'Samaná Province',
      asciiName: 'Samana Province'
    },
    {
      id: 3493282,
      name: 'Provincia de Hermanas Mirabal',
      asciiName: 'Provincia de Hermanas Mirabal'
    },
    {
      id: 3494267,
      name: 'Provincia de Puerto Plata',
      asciiName: 'Provincia de Puerto Plata'
    },
    {
      id: 3495015,
      name: 'Provincia de Peravia',
      asciiName: 'Provincia de Peravia'
    },
    {
      id: 3495136,
      name: 'Provincia de Pedernales',
      asciiName: 'Provincia de Pedernales'
    },
    {
      id: 3496024,
      name: 'Distrito Nacional',
      asciiName: 'Distrito Nacional'
    },
    {
      id: 3496132,
      name: 'Provincia de Monte Plata',
      asciiName: 'Provincia de Monte Plata'
    },
    {
      id: 3496200,
      name: 'Provincia de Monte Cristi',
      asciiName: 'Provincia de Monte Cristi'
    },
    {
      id: 3496274,
      name: 'Provincia de Monseñor Nouel',
      asciiName: 'Provincia de Monsenor Nouel'
    },
    {
      id: 3496772,
      name: 'Provincia María Trinidad Sánchez',
      asciiName: 'Provincia Maria Trinidad Sanchez'
    },
    {
      id: 3499977,
      name: 'Provincia de La Vega',
      asciiName: 'Provincia de La Vega'
    },
    {
      id: 3500955,
      name: 'Provincia de La Romana',
      asciiName: 'Provincia de La Romana'
    },
    {
      id: 3503706,
      name: 'Provincia de La Altagracia',
      asciiName: 'Provincia de La Altagracia'
    },
    {
      id: 3504326,
      name: 'Provincia de Independencia',
      asciiName: 'Provincia de Independencia'
    },
    {
      id: 3504766,
      name: 'Provincia de Hato Mayor',
      asciiName: 'Provincia de Hato Mayor'
    },
    {
      id: 3505867,
      name: 'Provincia Espaillat',
      asciiName: 'Provincia Espaillat'
    },
    {
      id: 3506189,
      name: 'Provincia de El Seibo',
      asciiName: 'Provincia de El Seibo'
    },
    {
      id: 3507269,
      name: 'Provincia de Elías Piña',
      asciiName: 'Provincia de Elias Pina'
    },
    {
      id: 3508718,
      name: 'Provincia Duarte',
      asciiName: 'Provincia Duarte'
    },
    {
      id: 3508951,
      name: 'Provincia de Dajabón',
      asciiName: 'Provincia de Dajabon'
    },
    {
      id: 3512042,
      name: 'Provincia de Barahona',
      asciiName: 'Provincia de Barahona'
    },
    {
      id: 3512050,
      name: 'Provincia de Baoruco',
      asciiName: 'Provincia de Baoruco'
    },
    {
      id: 3512209,
      name: 'Provincia de Azua',
      asciiName: 'Provincia de Azua'
    },
    {
      id: 6201372,
      name: 'Provincia de San José de Ocoa',
      asciiName: 'Provincia de San Jose de Ocoa'
    },
    {
      id: 6201373,
      name: 'Provincia de Santo Domingo',
      asciiName: 'Provincia de Santo Domingo'
    }
  ],
  CG: [
    {
      id: 2255329,
      name: 'Sangha',
      asciiName: 'Sangha'
    },
    {
      id: 2255404,
      name: 'Pool',
      asciiName: 'Pool'
    },
    {
      id: 2255422,
      name: 'Plateaux',
      asciiName: 'Plateaux'
    },
    {
      id: 2256175,
      name: 'Région du Niari',
      asciiName: 'Region du Niari'
    },
    {
      id: 2258431,
      name: 'Likouala',
      asciiName: 'Likouala'
    },
    {
      id: 2258534,
      name: 'Lékoumou',
      asciiName: 'Lekoumou'
    },
    {
      id: 2258738,
      name: 'Région du Kouilou',
      asciiName: 'Region du Kouilou'
    },
    {
      id: 2260487,
      name: 'Cuvette',
      asciiName: 'Cuvette'
    },
    {
      id: 2260668,
      name: 'Région de la Bouenza',
      asciiName: 'Region de la Bouenza'
    },
    {
      id: 2572183,
      name: 'Commune de Brazzaville',
      asciiName: 'Commune de Brazzaville'
    },
    {
      id: 2593118,
      name: 'Cuvette-Ouest',
      asciiName: 'Cuvette-Ouest'
    },
    {
      id: 7280295,
      name: 'Pointe-Noire',
      asciiName: 'Pointe-Noire'
    }
  ],
  CR: [
    {
      id: 3621837,
      name: 'Provincia de San José',
      asciiName: 'Provincia de San Jose'
    },
    {
      id: 3622226,
      name: 'Provincia de Puntarenas',
      asciiName: 'Provincia de Puntarenas'
    },
    {
      id: 3623064,
      name: 'Provincia de Limón',
      asciiName: 'Provincia de Limon'
    },
    {
      id: 3623484,
      name: 'Provincia de Heredia',
      asciiName: 'Provincia de Heredia'
    },
    {
      id: 3623582,
      name: 'Provincia de Guanacaste',
      asciiName: 'Provincia de Guanacaste'
    },
    {
      id: 3624368,
      name: 'Provincia de Cartago',
      asciiName: 'Provincia de Cartago'
    },
    {
      id: 3624953,
      name: 'Provincia de Alajuela',
      asciiName: 'Provincia de Alajuela'
    }
  ],
  HR: [
    {
      id: 3337511,
      name: 'Bjelovarsko-Bilogorska Županija',
      asciiName: 'Bjelovarsko-Bilogorska Zupanija'
    },
    {
      id: 3337512,
      name: 'Brodsko-Posavska Županija',
      asciiName: 'Brodsko-Posavska Zupanija'
    },
    {
      id: 3337513,
      name: 'Dubrovačko-Neretvanska Županija',
      asciiName: 'Dubrovacko-Neretvanska Zupanija'
    },
    {
      id: 3337514,
      name: 'Istarska Županija',
      asciiName: 'Istarska Zupanija'
    },
    {
      id: 3337515,
      name: 'Karlovačka Županija',
      asciiName: 'Karlovacka Zupanija'
    },
    {
      id: 3337518,
      name: 'Koprivničko-Križevačka Županija',
      asciiName: 'Koprivnicko-Krizevacka Zupanija'
    },
    {
      id: 3337519,
      name: 'Krapinsko-Zagorska Županija',
      asciiName: 'Krapinsko-Zagorska Zupanija'
    },
    {
      id: 3337520,
      name: 'Ličko-Senjska Županija',
      asciiName: 'Licko-Senjska Zupanija'
    },
    {
      id: 3337521,
      name: 'Međimurska Županija',
      asciiName: 'Megimurska Zupanija'
    },
    {
      id: 3337522,
      name: 'Osječko-Baranjska Županija',
      asciiName: 'Osjecko-Baranjska Zupanija'
    },
    {
      id: 3337523,
      name: 'Požeško-Slavonska Županija',
      asciiName: 'Pozesko-Slavonska Zupanija'
    },
    {
      id: 3337524,
      name: 'Primorsko-Goranska Županija',
      asciiName: 'Primorsko-Goranska Zupanija'
    },
    {
      id: 3337525,
      name: 'Šibensko-Kninska Županija',
      asciiName: 'Sibensko-Kninska Zupanija'
    },
    {
      id: 3337526,
      name: 'Sisačko-Moslavačka Županija',
      asciiName: 'Sisacko-Moslavacka Zupanija'
    },
    {
      id: 3337527,
      name: 'Splitsko-Dalmatinska Županija',
      asciiName: 'Splitsko-Dalmatinska Zupanija'
    },
    {
      id: 3337528,
      name: 'Varaždinska Županija',
      asciiName: 'Varazdinska Zupanija'
    },
    {
      id: 3337529,
      name: 'Vukovarsko-Srijemska Županija',
      asciiName: 'Vukovarsko-Srijemska Zupanija'
    },
    {
      id: 3337530,
      name: 'Zadarska Županija',
      asciiName: 'Zadarska Zupanija'
    },
    {
      id: 3337531,
      name: 'Zagreb County',
      asciiName: 'Zagreb County'
    },
    {
      id: 3337532,
      name: 'Grad Zagreb',
      asciiName: 'Grad Zagreb'
    },
    {
      id: 3337533,
      name: 'Virovitičko-Podravska Županija',
      asciiName: 'Viroviticko-Podravska Zupanija'
    }
  ],
  CZ: [
    {
      id: 3067695,
      name: 'Hlavní město Praha',
      asciiName: 'Hlavni mesto Praha'
    },
    {
      id: 3339536,
      name: 'Jihomoravský kraj',
      asciiName: 'Jihomoravsky kraj'
    },
    {
      id: 3339537,
      name: 'Jihočeský kraj',
      asciiName: 'Jihocesky kraj'
    },
    {
      id: 3339538,
      name: 'Kraj Vysočina',
      asciiName: 'Kraj Vysocina'
    },
    {
      id: 3339539,
      name: 'Karlovarský kraj',
      asciiName: 'Karlovarsky kraj'
    },
    {
      id: 3339540,
      name: 'Královéhradecký kraj',
      asciiName: 'Kralovehradecky kraj'
    },
    {
      id: 3339541,
      name: 'Liberecký kraj',
      asciiName: 'Liberecky kraj'
    },
    {
      id: 3339542,
      name: 'Olomoucký kraj',
      asciiName: 'Olomoucky kraj'
    },
    {
      id: 3339573,
      name: 'Moravskoslezský kraj',
      asciiName: 'Moravskoslezsky kraj'
    },
    {
      id: 3339574,
      name: 'Pardubický kraj',
      asciiName: 'Pardubicky kraj'
    },
    {
      id: 3339575,
      name: 'Plzeňský kraj',
      asciiName: 'Plzensky kraj'
    },
    {
      id: 3339576,
      name: 'Středočeský kraj',
      asciiName: 'Stredocesky kraj'
    },
    {
      id: 3339577,
      name: 'Ústecký kraj',
      asciiName: 'Ustecky kraj'
    },
    {
      id: 3339578,
      name: 'Zlínský kraj',
      asciiName: 'Zlinsky kraj'
    }
  ],
  DJ: [
    {
      id: 220781,
      name: 'Tadjourah',
      asciiName: 'Tadjourah'
    },
    {
      id: 221525,
      name: 'Obock',
      asciiName: 'Obock'
    },
    {
      id: 223818,
      name: 'Djibouti Region',
      asciiName: 'Djibouti Region'
    },
    {
      id: 223889,
      name: 'Dikhil',
      asciiName: 'Dikhil'
    },
    {
      id: 225282,
      name: 'Ali Sabieh Region',
      asciiName: 'Ali Sabieh Region'
    },
    {
      id: 449265,
      name: 'Arta Region',
      asciiName: 'Arta Region'
    }
  ],
  TL: [
    {
      id: 1622470,
      name: 'Viqueque',
      asciiName: 'Viqueque'
    },
    {
      id: 1636309,
      name: 'Manufahi',
      asciiName: 'Manufahi'
    },
    {
      id: 1636525,
      name: 'Manatuto',
      asciiName: 'Manatuto'
    },
    {
      id: 1637729,
      name: 'Liquiçá',
      asciiName: 'Liquica'
    },
    {
      id: 1638294,
      name: 'Lautém',
      asciiName: 'Lautem'
    },
    {
      id: 1639462,
      name: 'Cova Lima',
      asciiName: 'Cova Lima'
    },
    {
      id: 1644865,
      name: 'Ermera',
      asciiName: 'Ermera'
    },
    {
      id: 1645456,
      name: 'Díli',
      asciiName: 'Dili'
    },
    {
      id: 1648513,
      name: 'Bobonaro',
      asciiName: 'Bobonaro'
    },
    {
      id: 1649538,
      name: 'Baucau',
      asciiName: 'Baucau'
    },
    {
      id: 1651539,
      name: 'Oecusse District',
      asciiName: 'Oecusse District'
    },
    {
      id: 1651809,
      name: 'Ainaro',
      asciiName: 'Ainaro'
    },
    {
      id: 1651815,
      name: 'Aileu',
      asciiName: 'Aileu'
    }
  ],
  EC: [
    {
      id: 3649953,
      name: 'Provincia de Zamora-Chinchipe',
      asciiName: 'Provincia de Zamora-Chinchipe'
    },
    {
      id: 3650445,
      name: 'Provincia del Tungurahua',
      asciiName: 'Provincia del Tungurahua'
    },
    {
      id: 3653224,
      name: 'Provincia de Pichincha',
      asciiName: 'Provincia de Pichincha'
    },
    {
      id: 3653392,
      name: 'Provincia del Pastaza',
      asciiName: 'Provincia del Pastaza'
    },
    {
      id: 3653890,
      name: 'Provincia de Napo',
      asciiName: 'Provincia de Napo'
    },
    {
      id: 3654005,
      name: 'Provincia de Morona-Santiago',
      asciiName: 'Provincia de Morona-Santiago'
    },
    {
      id: 3654451,
      name: 'Provincia de Manabí',
      asciiName: 'Provincia de Manabi'
    },
    {
      id: 3654592,
      name: 'Provincia de Los Ríos',
      asciiName: 'Provincia de Los Rios'
    },
    {
      id: 3654665,
      name: 'Provincia de Loja',
      asciiName: 'Provincia de Loja'
    },
    {
      id: 3655635,
      name: 'Provincia de Imbabura',
      asciiName: 'Provincia de Imbabura'
    },
    {
      id: 3657505,
      name: 'Provincia del Guayas',
      asciiName: 'Provincia del Guayas'
    },
    {
      id: 3657879,
      name: 'Provincia de Galápagos',
      asciiName: 'Provincia de Galapagos'
    },
    {
      id: 3657986,
      name: 'Provincia de Esmeraldas',
      asciiName: 'Provincia de Esmeraldas'
    },
    {
      id: 3658195,
      name: 'Provincia de El Oro',
      asciiName: 'Provincia de El Oro'
    },
    {
      id: 3658766,
      name: 'Provincia de Cotopaxi',
      asciiName: 'Provincia de Cotopaxi'
    },
    {
      id: 3659237,
      name: 'Provincia del Chimborazo',
      asciiName: 'Provincia del Chimborazo'
    },
    {
      id: 3659718,
      name: 'Provincia del Carchi',
      asciiName: 'Provincia del Carchi'
    },
    {
      id: 3659849,
      name: 'Provincia del Cañar',
      asciiName: 'Provincia del Canar'
    },
    {
      id: 3660130,
      name: 'Provincia de Bolívar',
      asciiName: 'Provincia de Bolivar'
    },
    {
      id: 3660431,
      name: 'Provincia del Azuay',
      asciiName: 'Provincia del Azuay'
    },
    {
      id: 3830305,
      name: 'Provincia de Sucumbíos',
      asciiName: 'Provincia de Sucumbios'
    },
    {
      id: 3830306,
      name: 'Provincia de Francisco de Orellana',
      asciiName: 'Provincia de Francisco de Orellana'
    },
    {
      id: 7062136,
      name: 'Provincia de Santo Domingo de los Tsáchilas',
      asciiName: 'Provincia de Santo Domingo de los Tsachilas'
    },
    {
      id: 7062138,
      name: 'Provincia de Santa Elena',
      asciiName: 'Provincia de Santa Elena'
    }
  ],
  EG: [
    {
      id: 347794,
      name: 'Muḩāfaz̧at Sūhāj',
      asciiName: 'Muhafazat Suhaj'
    },
    {
      id: 349401,
      name: 'Muḩāfaz̧at Shamāl Sīnā’',
      asciiName: 'Muhafazat Shamal Sina\''
    },
    {
      id: 350546,
      name: 'Muḩāfaz̧at Qinā',
      asciiName: 'Muhafazat Qina'
    },
    {
      id: 352603,
      name: 'Muḩāfaz̧at Maţrūḩ',
      asciiName: 'Muhafazat Matruh'
    },
    {
      id: 354500,
      name: 'Kafr ash Shaykh',
      asciiName: 'Kafr ash Shaykh'
    },
    {
      id: 355182,
      name: 'South Sinai Governorate',
      asciiName: 'South Sinai Governorate'
    },
    {
      id: 358044,
      name: 'Muḩāfaz̧at Dumyāţ',
      asciiName: 'Muhafazat Dumyat'
    },
    {
      id: 358617,
      name: 'Muḩāfaz̧at Būr Sa‘īd',
      asciiName: 'Muhafazat Bur Sa`id'
    },
    {
      id: 359171,
      name: 'Muḩāfaz̧at Banī Suwayf',
      asciiName: 'Muhafazat Bani Suwayf'
    },
    {
      id: 359781,
      name: 'Muḩāfaz̧at Asyūţ',
      asciiName: 'Muhafazat Asyut'
    },
    {
      id: 359787,
      name: 'Muḩāfaz̧at Aswān',
      asciiName: 'Muhafazat Aswan'
    },
    {
      id: 359797,
      name: 'As Suways',
      asciiName: 'As Suways'
    },
    {
      id: 360016,
      name: 'Muḩāfaz̧at ash Sharqīyah',
      asciiName: 'Muhafazat ash Sharqiyah'
    },
    {
      id: 360483,
      name: 'Muḩāfaz̧at al Wādī al Jadīd',
      asciiName: 'Muhafazat al Wadi al Jadid'
    },
    {
      id: 360621,
      name: 'Muḩāfaz̧at al Qalyūbīyah',
      asciiName: 'Muhafazat al Qalyubiyah'
    },
    {
      id: 360631,
      name: 'Muḩāfaz̧at al Qāhirah',
      asciiName: 'Muhafazat al Qahirah'
    },
    {
      id: 360688,
      name: 'Muḩāfaz̧at al Minyā',
      asciiName: 'Muhafazat al Minya'
    },
    {
      id: 360689,
      name: 'Muḩāfaz̧at al Minūfīyah',
      asciiName: 'Muhafazat al Minufiyah'
    },
    {
      id: 360997,
      name: 'Muḩāfaz̧at al Jīzah',
      asciiName: 'Muhafazat al Jizah'
    },
    {
      id: 361056,
      name: 'Ismailia Governorate',
      asciiName: 'Ismailia Governorate'
    },
    {
      id: 361059,
      name: 'Muḩāfaz̧at al Iskandarīyah',
      asciiName: 'Muhafazat al Iskandariyah'
    },
    {
      id: 361294,
      name: 'Muḩāfaz̧at al Gharbīyah',
      asciiName: 'Muhafazat al Gharbiyah'
    },
    {
      id: 361323,
      name: 'Muḩāfaz̧at al Fayyūm',
      asciiName: 'Muhafazat al Fayyum'
    },
    {
      id: 361370,
      name: 'Beheira Governorate',
      asciiName: 'Beheira Governorate'
    },
    {
      id: 361468,
      name: 'Red Sea Governorate',
      asciiName: 'Red Sea Governorate'
    },
    {
      id: 361849,
      name: 'Muḩāfaz̧at ad Daqahlīyah',
      asciiName: 'Muhafazat ad Daqahliyah'
    },
    {
      id: 7603259,
      name: 'Muḩāfaz̧at al Uqşur',
      asciiName: 'Muhafazat al Uqsur'
    }
  ],
  GQ: [
    {
      id: 2310307,
      name: 'Provincia de Annobón',
      asciiName: 'Provincia de Annobon'
    },
    {
      id: 2566978,
      name: 'Provincia de Bioko Norte',
      asciiName: 'Provincia de Bioko Norte'
    },
    {
      id: 2566979,
      name: 'Provincia de Bioko Sur',
      asciiName: 'Provincia de Bioko Sur'
    },
    {
      id: 2566980,
      name: 'Provincia de Centro Sur',
      asciiName: 'Provincia de Centro Sur'
    },
    {
      id: 2566981,
      name: 'Provincia de Kié-Ntem',
      asciiName: 'Provincia de Kie-Ntem'
    },
    {
      id: 2566982,
      name: 'Provincia de Litoral',
      asciiName: 'Provincia de Litoral'
    },
    {
      id: 2566983,
      name: 'Provincia de Wele-Nzas',
      asciiName: 'Provincia de Wele-Nzas'
    }
  ],
  ER: [
    {
      id: 448497,
      name: 'Anseba Region',
      asciiName: 'Anseba Region'
    },
    {
      id: 448498,
      name: 'Debub Region',
      asciiName: 'Debub Region'
    },
    {
      id: 448499,
      name: 'Southern Red Sea Region',
      asciiName: 'Southern Red Sea Region'
    },
    {
      id: 448500,
      name: 'Gash-Barka Region',
      asciiName: 'Gash-Barka Region'
    },
    {
      id: 448501,
      name: 'Maekel Region',
      asciiName: 'Maekel Region'
    },
    {
      id: 448502,
      name: 'Northern Red Sea Region',
      asciiName: 'Northern Red Sea Region'
    }
  ],
  SV: [
    {
      id: 3582882,
      name: 'Departamento de Usulután',
      asciiName: 'Departamento de Usulutan'
    },
    {
      id: 3583101,
      name: 'Departamento de Sonsonate',
      asciiName: 'Departamento de Sonsonate'
    },
    {
      id: 3583176,
      name: 'Departamento de San Vicente',
      asciiName: 'Departamento de San Vicente'
    },
    {
      id: 3583332,
      name: 'Departamento de Santa Ana',
      asciiName: 'Departamento de Santa Ana'
    },
    {
      id: 3583360,
      name: 'Departamento de San Salvador',
      asciiName: 'Departamento de San Salvador'
    },
    {
      id: 3583462,
      name: 'Departamento de San Miguel',
      asciiName: 'Departamento de San Miguel'
    },
    {
      id: 3584317,
      name: 'Departamento de Morazán',
      asciiName: 'Departamento de Morazan'
    },
    {
      id: 3584767,
      name: 'Departamento de La Unión',
      asciiName: 'Departamento de La Union'
    },
    {
      id: 3585087,
      name: 'Departamento de La Paz',
      asciiName: 'Departamento de La Paz'
    },
    {
      id: 3585155,
      name: 'Departamento de La Libertad',
      asciiName: 'Departamento de La Libertad'
    },
    {
      id: 3586831,
      name: 'Departamento de Cuscatlán',
      asciiName: 'Departamento de Cuscatlan'
    },
    {
      id: 3587090,
      name: 'Departamento de Chalatenango',
      asciiName: 'Departamento de Chalatenango'
    },
    {
      id: 3587217,
      name: 'Departamento de Cabañas',
      asciiName: 'Departamento de Cabanas'
    },
    {
      id: 3587425,
      name: 'Departamento de Ahuachapán',
      asciiName: 'Departamento de Ahuachapan'
    }
  ],
  EE: [
    {
      id: 587448,
      name: 'Võrumaa',
      asciiName: 'Vorumaa'
    },
    {
      id: 587590,
      name: 'Viljandimaa',
      asciiName: 'Viljandimaa'
    },
    {
      id: 587875,
      name: 'Valgamaa',
      asciiName: 'Valgamaa'
    },
    {
      id: 588334,
      name: 'Tartumaa',
      asciiName: 'Tartumaa'
    },
    {
      id: 588879,
      name: 'Saaremaa',
      asciiName: 'Saaremaa'
    },
    {
      id: 589115,
      name: 'Raplamaa',
      asciiName: 'Raplamaa'
    },
    {
      id: 589373,
      name: 'Põlvamaa',
      asciiName: 'Polvamaa'
    },
    {
      id: 589576,
      name: 'Pärnumaa',
      asciiName: 'Paernumaa'
    },
    {
      id: 590854,
      name: 'Lääne-Virumaa',
      asciiName: 'Laane-Virumaa'
    },
    {
      id: 590856,
      name: 'Läänemaa',
      asciiName: 'Laeaenemaa'
    },
    {
      id: 591901,
      name: 'Jõgevamaa',
      asciiName: 'Jogevamaa'
    },
    {
      id: 591961,
      name: 'Järvamaa',
      asciiName: 'Jarvamaa'
    },
    {
      id: 592075,
      name: 'Ida-Virumaa',
      asciiName: 'Ida-Virumaa'
    },
    {
      id: 592133,
      name: 'Hiiumaa',
      asciiName: 'Hiiumaa'
    },
    {
      id: 592170,
      name: 'Harjumaa',
      asciiName: 'Harjumaa'
    }
  ],
  ET: [
    {
      id: 444178,
      name: 'Ādīs Ābeba Āstedader',
      asciiName: 'Adis Abeba Astedader'
    },
    {
      id: 444179,
      name: 'Afar Region',
      asciiName: 'Afar Region'
    },
    {
      id: 444180,
      name: 'Amhara Region',
      asciiName: 'Amhara Region'
    },
    {
      id: 444181,
      name: 'Benishangul-Gumuz Region',
      asciiName: 'Benishangul-Gumuz Region'
    },
    {
      id: 444182,
      name: 'Dire Dawa Region',
      asciiName: 'Dire Dawa Region'
    },
    {
      id: 444183,
      name: 'Gambela Region',
      asciiName: 'Gambela Region'
    },
    {
      id: 444184,
      name: 'Harari Region',
      asciiName: 'Harari Region'
    },
    {
      id: 444185,
      name: 'Oromiya Region',
      asciiName: 'Oromiya Region'
    },
    {
      id: 444186,
      name: 'Somali Region',
      asciiName: 'Somali Region'
    },
    {
      id: 444187,
      name: 'Tigray Region',
      asciiName: 'Tigray Region'
    },
    {
      id: 444188,
      name: 'Southern Nations, Nationalities, and People\'s Region',
      asciiName: 'Southern Nations, Nationalities, and People\'s Region'
    }
  ],
  GF: [
    {
      id: 6690605,
      name: 'Guyane',
      asciiName: 'Guyane'
    }
  ],
  GA: [
    {
      id: 2396076,
      name: 'Province du Woleu-Ntem',
      asciiName: 'Province du Woleu-Ntem'
    },
    {
      id: 2396924,
      name: 'Province de l’Ogooué-Maritime',
      asciiName: 'Province de l\'Ogooue-Maritime'
    },
    {
      id: 2396925,
      name: 'Province de l’Ogooué-Lolo',
      asciiName: 'Province de l\'Ogooue-Lolo'
    },
    {
      id: 2396926,
      name: 'Province de l’Ogooué-Ivindo',
      asciiName: 'Province de l\'Ogooue-Ivindo'
    },
    {
      id: 2397141,
      name: 'Province de la Nyanga',
      asciiName: 'Province de la Nyanga'
    },
    {
      id: 2397466,
      name: 'Province de la Ngounié',
      asciiName: 'Province de la Ngounie'
    },
    {
      id: 2397842,
      name: 'Province du Moyen-Ogooué',
      asciiName: 'Province du Moyen-Ogooue'
    },
    {
      id: 2400454,
      name: 'Province du Haut-Ogooué',
      asciiName: 'Province du Haut-Ogooue'
    },
    {
      id: 2400682,
      name: 'Estuaire',
      asciiName: 'Estuaire'
    }
  ],
  GM: [
    {
      id: 2411683,
      name: 'Western Division',
      asciiName: 'Western Division'
    },
    {
      id: 2411711,
      name: 'Upper River Division',
      asciiName: 'Upper River Division'
    },
    {
      id: 2412353,
      name: 'North Bank Division',
      asciiName: 'North Bank Division'
    },
    {
      id: 2412707,
      name: 'Central River Division',
      asciiName: 'Central River Division'
    },
    {
      id: 2412716,
      name: 'Lower River Division',
      asciiName: 'Lower River Division'
    },
    {
      id: 2413875,
      name: 'City of Banjul',
      asciiName: 'City of Banjul'
    }
  ],
  GH: [
    {
      id: 2294076,
      name: 'Western Region',
      asciiName: 'Western Region'
    },
    {
      id: 2294234,
      name: 'Volta Region',
      asciiName: 'Volta Region'
    },
    {
      id: 2294286,
      name: 'Upper West Region',
      asciiName: 'Upper West Region'
    },
    {
      id: 2294291,
      name: 'Upper East Region',
      asciiName: 'Upper East Region'
    },
    {
      id: 2297169,
      name: 'Northern Region',
      asciiName: 'Northern Region'
    },
    {
      id: 2300569,
      name: 'Greater Accra Region',
      asciiName: 'Greater Accra Region'
    },
    {
      id: 2301360,
      name: 'Eastern Region',
      asciiName: 'Eastern Region'
    },
    {
      id: 2302353,
      name: 'Central Region',
      asciiName: 'Central Region'
    },
    {
      id: 2302547,
      name: 'Brong-Ahafo Region',
      asciiName: 'Brong-Ahafo Region'
    },
    {
      id: 2304116,
      name: 'Ashanti Region',
      asciiName: 'Ashanti Region'
    }
  ],
  GT: [
    {
      id: 3587586,
      name: 'Departamento de Zacapa',
      asciiName: 'Departamento de Zacapa'
    },
    {
      id: 3588257,
      name: 'Departamento de Totonicapán',
      asciiName: 'Departamento de Totonicapan'
    },
    {
      id: 3588668,
      name: 'Departamento de Suchitepéquez',
      asciiName: 'Departamento de Suchitepequez'
    },
    {
      id: 3588697,
      name: 'Departamento de Sololá',
      asciiName: 'Departamento de Solola'
    },
    {
      id: 3589172,
      name: 'Departamento de Santa Rosa',
      asciiName: 'Departamento de Santa Rosa'
    },
    {
      id: 3589801,
      name: 'Departamento de San Marcos',
      asciiName: 'Departamento de San Marcos'
    },
    {
      id: 3590686,
      name: 'Departamento de Sacatepéquez',
      asciiName: 'Departamento de Sacatepequez'
    },
    {
      id: 3590857,
      name: 'Departamento de Retalhuleu',
      asciiName: 'Departamento de Retalhuleu'
    },
    {
      id: 3590964,
      name: 'Departamento del Quiché',
      asciiName: 'Departamento del Quiche'
    },
    {
      id: 3590978,
      name: 'Departamento de Quetzaltenango',
      asciiName: 'Departamento de Quetzaltenango'
    },
    {
      id: 3591410,
      name: 'Departamento del Petén',
      asciiName: 'Departamento del Peten'
    },
    {
      id: 3595067,
      name: 'Departamento de Jutiapa',
      asciiName: 'Departamento de Jutiapa'
    },
    {
      id: 3595236,
      name: 'Departamento de Jalapa',
      asciiName: 'Departamento de Jalapa'
    },
    {
      id: 3595259,
      name: 'Departamento de Izabal',
      asciiName: 'Departamento de Izabal'
    },
    {
      id: 3595415,
      name: 'Departamento de Huehuetenango',
      asciiName: 'Departamento de Huehuetenango'
    },
    {
      id: 3595530,
      name: 'Departamento de Guatemala',
      asciiName: 'Departamento de Guatemala'
    },
    {
      id: 3595802,
      name: 'Departamento de Escuintla',
      asciiName: 'Departamento de Escuintla'
    },
    {
      id: 3596416,
      name: 'Departamento de El Progreso',
      asciiName: 'Departamento de El Progreso'
    },
    {
      id: 3598464,
      name: 'Departamento de Chiquimula',
      asciiName: 'Departamento de Chiquimula'
    },
    {
      id: 3598571,
      name: 'Departamento de Chimaltenango',
      asciiName: 'Departamento de Chimaltenango'
    },
    {
      id: 3599602,
      name: 'Departamento de Baja Verapaz',
      asciiName: 'Departamento de Baja Verapaz'
    },
    {
      id: 3599773,
      name: 'Departamento de Alta Verapaz',
      asciiName: 'Departamento de Alta Verapaz'
    }
  ],
  GN: [
    {
      id: 2422464,
      name: 'Conakry Region',
      asciiName: 'Conakry Region'
    },
    {
      id: 8335085,
      name: 'Boke Region',
      asciiName: 'Boke Region'
    },
    {
      id: 8335086,
      name: 'Faranah Region',
      asciiName: 'Faranah Region'
    },
    {
      id: 8335087,
      name: 'Kankan Region',
      asciiName: 'Kankan Region'
    },
    {
      id: 8335088,
      name: 'Kindia Region',
      asciiName: 'Kindia Region'
    },
    {
      id: 8335089,
      name: 'Labé Region',
      asciiName: 'Labe Region'
    },
    {
      id: 8335090,
      name: 'Mamou Region',
      asciiName: 'Mamou Region'
    },
    {
      id: 8335091,
      name: 'Nzerekore Region',
      asciiName: 'Nzerekore Region'
    }
  ],
  GW: [
    {
      id: 2368955,
      name: 'Tombali',
      asciiName: 'Tombali'
    },
    {
      id: 2370360,
      name: 'Quinara',
      asciiName: 'Quinara'
    },
    {
      id: 2371071,
      name: 'Oio Region',
      asciiName: 'Oio Region'
    },
    {
      id: 2372533,
      name: 'Gabú',
      asciiName: 'Gabu'
    },
    {
      id: 2374312,
      name: 'Cacheu Region',
      asciiName: 'Cacheu Region'
    },
    {
      id: 2374689,
      name: 'Bolama',
      asciiName: 'Bolama'
    },
    {
      id: 2374776,
      name: 'Bissau Region',
      asciiName: 'Bissau Region'
    },
    {
      id: 2374820,
      name: 'Biombo',
      asciiName: 'Biombo'
    },
    {
      id: 2375255,
      name: 'Bafatá',
      asciiName: 'Bafata'
    }
  ],
  GY: [
    {
      id: 3375463,
      name: 'Upper Takutu-Upper Essequibo Region',
      asciiName: 'Upper Takutu-Upper Essequibo Region'
    },
    {
      id: 3375469,
      name: 'Upper Demerara-Berbice Region',
      asciiName: 'Upper Demerara-Berbice Region'
    },
    {
      id: 3376386,
      name: 'Potaro-Siparuni Region',
      asciiName: 'Potaro-Siparuni Region'
    },
    {
      id: 3376407,
      name: 'Pomeroon-Supenaam Region',
      asciiName: 'Pomeroon-Supenaam Region'
    },
    {
      id: 3377274,
      name: 'Mahaica-Berbice Region',
      asciiName: 'Mahaica-Berbice Region'
    },
    {
      id: 3378741,
      name: 'Essequibo Islands-West Demerara Region',
      asciiName: 'Essequibo Islands-West Demerara Region'
    },
    {
      id: 3378840,
      name: 'East Berbice-Corentyne Region',
      asciiName: 'East Berbice-Corentyne Region'
    },
    {
      id: 3378950,
      name: 'Demerara-Mahaica Region',
      asciiName: 'Demerara-Mahaica Region'
    },
    {
      id: 3379023,
      name: 'Cuyuni-Mazaruni Region',
      asciiName: 'Cuyuni-Mazaruni Region'
    },
    {
      id: 3379515,
      name: 'Barima-Waini Region',
      asciiName: 'Barima-Waini Region'
    }
  ],
  HN: [
    {
      id: 3600193,
      name: 'Departamento de Yoro',
      asciiName: 'Departamento de Yoro'
    },
    {
      id: 3600456,
      name: 'Departamento de Valle',
      asciiName: 'Departamento de Valle'
    },
    {
      id: 3601689,
      name: 'Departamento de Santa Bárbara',
      asciiName: 'Departamento de Santa Barbara'
    },
    {
      id: 3604249,
      name: 'Departamento de Olancho',
      asciiName: 'Departamento de Olancho'
    },
    {
      id: 3604318,
      name: 'Departamento de Ocotepeque',
      asciiName: 'Departamento de Ocotepeque'
    },
    {
      id: 3606066,
      name: 'Departamento de Lempira',
      asciiName: 'Departamento de Lempira'
    },
    {
      id: 3607251,
      name: 'Departamento de La Paz',
      asciiName: 'Departamento de La Paz'
    },
    {
      id: 3608814,
      name: 'Departamento de Islas de la Bahía',
      asciiName: 'Departamento de Islas de la Bahia'
    },
    {
      id: 3608833,
      name: 'Departamento de Intibucá',
      asciiName: 'Departamento de Intibuca'
    },
    {
      id: 3609583,
      name: 'Departamento de Gracias a Dios',
      asciiName: 'Departamento de Gracias a Dios'
    },
    {
      id: 3609672,
      name: 'Departamento de Francisco Morazán',
      asciiName: 'Departamento de Francisco Morazan'
    },
    {
      id: 3610942,
      name: 'Departamento de El Paraíso',
      asciiName: 'Departamento de El Paraiso'
    },
    {
      id: 3613140,
      name: 'Departamento de Cortés',
      asciiName: 'Departamento de Cortes'
    },
    {
      id: 3613229,
      name: 'Departamento de Copán',
      asciiName: 'Departamento de Copan'
    },
    {
      id: 3613319,
      name: 'Departamento de Comayagua',
      asciiName: 'Departamento de Comayagua'
    },
    {
      id: 3613358,
      name: 'Departamento de Colón',
      asciiName: 'Departamento de Colon'
    },
    {
      id: 3613527,
      name: 'Departamento de Choluteca',
      asciiName: 'Departamento de Choluteca'
    },
    {
      id: 3615027,
      name: 'Departamento de Atlántida',
      asciiName: 'Departamento de Atlantida'
    }
  ],
  HU: [
    {
      id: 715593,
      name: 'Szabolcs-Szatmár-Bereg',
      asciiName: 'Szabolcs-Szatmar-Bereg'
    },
    {
      id: 719637,
      name: 'Jász-Nagykun-Szolnok',
      asciiName: 'Jasz-Nagykun-Szolnok'
    },
    {
      id: 720002,
      name: 'Heves megye',
      asciiName: 'Heves megye'
    },
    {
      id: 720293,
      name: 'Hajdú-Bihar',
      asciiName: 'Hajdu-Bihar'
    },
    {
      id: 721589,
      name: 'Csongrád megye',
      asciiName: 'Csongrad megye'
    },
    {
      id: 722064,
      name: 'Borsod-Abauj Zemplen county',
      asciiName: 'Borsod-Abauj Zemplen county'
    },
    {
      id: 722433,
      name: 'Bekes County',
      asciiName: 'Bekes County'
    },
    {
      id: 3042613,
      name: 'Zala megye',
      asciiName: 'Zala megye'
    },
    {
      id: 3042925,
      name: 'Veszprém megye',
      asciiName: 'Veszprem megye'
    },
    {
      id: 3043047,
      name: 'Vas megye',
      asciiName: 'Vas megye'
    },
    {
      id: 3043845,
      name: 'Tolna megye',
      asciiName: 'Tolna megye'
    },
    {
      id: 3045226,
      name: 'Somogy megye',
      asciiName: 'Somogy megye'
    },
    {
      id: 3046431,
      name: 'Pest megye',
      asciiName: 'Pest megye'
    },
    {
      id: 3047348,
      name: 'Nógrád megye',
      asciiName: 'Nograd megye'
    },
    {
      id: 3049518,
      name: 'Komárom-Esztergom',
      asciiName: 'Komarom-Esztergom'
    },
    {
      id: 3051977,
      name: 'Győr-Moson-Sopron megye',
      asciiName: 'Gyor-Moson-Sopron megye'
    },
    {
      id: 3053028,
      name: 'Fejér megye',
      asciiName: 'Fejer megye'
    },
    {
      id: 3054638,
      name: 'Budapest főváros',
      asciiName: 'Budapest fovaros'
    },
    {
      id: 3055399,
      name: 'Baranya county',
      asciiName: 'Baranya county'
    },
    {
      id: 3055744,
      name: 'Bács-Kiskun county',
      asciiName: 'Bacs-Kiskun county'
    }
  ],
  IN: [
    {
      id: 1252881,
      name: 'West Bengal',
      asciiName: 'West Bengal'
    },
    {
      id: 1253626,
      name: 'Uttar Pradesh',
      asciiName: 'Uttar Pradesh'
    },
    {
      id: 1254169,
      name: 'Tripura',
      asciiName: 'Tripura'
    },
    {
      id: 1254788,
      name: 'Telangana',
      asciiName: 'Telangana'
    },
    {
      id: 1255053,
      name: 'State of Tamil Nādu',
      asciiName: 'State of Tamil Nadu'
    },
    {
      id: 1256312,
      name: 'Sikkim',
      asciiName: 'Sikkim'
    },
    {
      id: 1258899,
      name: 'State of Rājasthān',
      asciiName: 'State of Rajasthan'
    },
    {
      id: 1259223,
      name: 'State of Punjab',
      asciiName: 'State of Punjab'
    },
    {
      id: 1259424,
      name: 'Union Territory of Puducherry',
      asciiName: 'Union Territory of Puducherry'
    },
    {
      id: 1261029,
      name: 'State of Odisha',
      asciiName: 'State of Odisha'
    },
    {
      id: 1262271,
      name: 'State of Nāgāland',
      asciiName: 'State of Nagaland'
    },
    {
      id: 1262963,
      name: 'Mizoram',
      asciiName: 'Mizoram'
    },
    {
      id: 1263207,
      name: 'Meghālaya',
      asciiName: 'Meghalaya'
    },
    {
      id: 1263706,
      name: 'Manipur',
      asciiName: 'Manipur'
    },
    {
      id: 1264418,
      name: 'State of Mahārāshtra',
      asciiName: 'State of Maharashtra'
    },
    {
      id: 1264542,
      name: 'Madhya Pradesh',
      asciiName: 'Madhya Pradesh'
    },
    {
      id: 1265206,
      name: 'Union Territory of Lakshadweep',
      asciiName: 'Union Territory of Lakshadweep'
    },
    {
      id: 1267254,
      name: 'State of Kerala',
      asciiName: 'State of Kerala'
    },
    {
      id: 1267701,
      name: 'State of Karnātaka',
      asciiName: 'State of Karnataka'
    },
    {
      id: 1269320,
      name: 'State of Jammu and Kashmīr',
      asciiName: 'State of Jammu and Kashmir'
    },
    {
      id: 1270101,
      name: 'State of Himāchal Pradesh',
      asciiName: 'State of Himachal Pradesh'
    },
    {
      id: 1270260,
      name: 'State of Haryāna',
      asciiName: 'State of Haryana'
    },
    {
      id: 1270770,
      name: 'State of Gujarāt',
      asciiName: 'State of Gujarat'
    },
    {
      id: 1271155,
      name: 'Union Territory of Damān and Diu',
      asciiName: 'Union Territory of Daman and Diu'
    },
    {
      id: 1271157,
      name: 'Goa',
      asciiName: 'Goa'
    },
    {
      id: 1273293,
      name: 'National Capital Territory of Delhi',
      asciiName: 'National Capital Territory of Delhi'
    },
    {
      id: 1273726,
      name: 'Union Territory of Dādra and Nagar Haveli',
      asciiName: 'Union Territory of Dadra and Nagar Haveli'
    },
    {
      id: 1274744,
      name: 'Union Territory of Chandīgarh',
      asciiName: 'Union Territory of Chandigarh'
    },
    {
      id: 1275715,
      name: 'State of Bihār',
      asciiName: 'State of Bihar'
    },
    {
      id: 1278253,
      name: 'Assam',
      asciiName: 'Assam'
    },
    {
      id: 1278341,
      name: 'State of Arunāchal Pradesh',
      asciiName: 'State of Arunachal Pradesh'
    },
    {
      id: 1278629,
      name: 'State of Andhra Pradesh',
      asciiName: 'State of Andhra Pradesh'
    },
    {
      id: 1278647,
      name: 'Union Territory of Andaman and Nicobar Islands',
      asciiName: 'Union Territory of Andaman and Nicobar Islands'
    },
    {
      id: 1444364,
      name: 'State of Chhattīsgarh',
      asciiName: 'State of Chhattisgarh'
    },
    {
      id: 1444365,
      name: 'State of Jharkhand',
      asciiName: 'State of Jharkhand'
    },
    {
      id: 1444366,
      name: 'State of Uttarakhand',
      asciiName: 'State of Uttarakhand'
    }
  ],
  ID: [
    {
      id: 1213642,
      name: 'Sumatera Utara',
      asciiName: 'Sumatera Utara'
    },
    {
      id: 1215638,
      name: 'Nanggroe Aceh Darussalam Province',
      asciiName: 'Nanggroe Aceh Darussalam Province'
    },
    {
      id: 1621176,
      name: 'Daerah Istimewa Yogyakarta',
      asciiName: 'Daerah Istimewa Yogyakarta'
    },
    {
      id: 1626196,
      name: 'Sumatera Selatan',
      asciiName: 'Sumatera Selatan'
    },
    {
      id: 1626197,
      name: 'Provinsi Sumatera Barat',
      asciiName: 'Provinsi Sumatera Barat'
    },
    {
      id: 1626229,
      name: 'Sulawesi Utara',
      asciiName: 'Sulawesi Utara'
    },
    {
      id: 1626230,
      name: 'Sulawesi Tenggara',
      asciiName: 'Sulawesi Tenggara'
    },
    {
      id: 1626231,
      name: 'Sulawesi Tengah',
      asciiName: 'Sulawesi Tengah'
    },
    {
      id: 1626232,
      name: 'Provinsi Sulawesi Selatan',
      asciiName: 'Provinsi Sulawesi Selatan'
    },
    {
      id: 1629652,
      name: 'Provinsi Riau',
      asciiName: 'Provinsi Riau'
    },
    {
      id: 1633791,
      name: 'Provinsi Nusa Tenggara Timur',
      asciiName: 'Provinsi Nusa Tenggara Timur'
    },
    {
      id: 1633792,
      name: 'West Nusa Tenggara',
      asciiName: 'West Nusa Tenggara'
    },
    {
      id: 1636627,
      name: 'Provinsi Maluku',
      asciiName: 'Provinsi Maluku'
    },
    {
      id: 1638535,
      name: 'Provinsi Lampung',
      asciiName: 'Provinsi Lampung'
    },
    {
      id: 1641897,
      name: 'Provinsi Kalimantan Timur',
      asciiName: 'Provinsi Kalimantan Timur'
    },
    {
      id: 1641898,
      name: 'Provinsi Kalimantan Tengah',
      asciiName: 'Provinsi Kalimantan Tengah'
    },
    {
      id: 1641899,
      name: 'Provinsi Kalimantan Selatan',
      asciiName: 'Provinsi Kalimantan Selatan'
    },
    {
      id: 1641900,
      name: 'Provinsi Kalimantan Barat',
      asciiName: 'Provinsi Kalimantan Barat'
    },
    {
      id: 1642668,
      name: 'Jawa Timur',
      asciiName: 'Jawa Timur'
    },
    {
      id: 1642669,
      name: 'Provinsi Jawa Tengah',
      asciiName: 'Provinsi Jawa Tengah'
    },
    {
      id: 1642672,
      name: 'Jawa Barat',
      asciiName: 'Jawa Barat'
    },
    {
      id: 1642856,
      name: 'Provinsi Jambi',
      asciiName: 'Provinsi Jambi'
    },
    {
      id: 1642907,
      name: 'Daerah Khusus Ibukota Jakarta',
      asciiName: 'Daerah Khusus Ibukota Jakarta'
    },
    {
      id: 1643012,
      name: 'Provinsi Papua',
      asciiName: 'Provinsi Papua'
    },
    {
      id: 1649147,
      name: 'Propinsi Bengkulu',
      asciiName: 'Propinsi Bengkulu'
    },
    {
      id: 1650535,
      name: 'Provinsi Bali',
      asciiName: 'Provinsi Bali'
    },
    {
      id: 1923045,
      name: 'Banten',
      asciiName: 'Banten'
    },
    {
      id: 1923046,
      name: 'Provinsi Gorontalo',
      asciiName: 'Provinsi Gorontalo'
    },
    {
      id: 1923047,
      name: 'Kepulauan Bangka Belitung',
      asciiName: 'Kepulauan Bangka Belitung'
    },
    {
      id: 1958070,
      name: 'Provinsi Maluku Utara',
      asciiName: 'Provinsi Maluku Utara'
    },
    {
      id: 1996549,
      name: 'Provinsi Papua Barat',
      asciiName: 'Provinsi Papua Barat'
    },
    {
      id: 1996550,
      name: 'Provinsi Sulawesi Barat',
      asciiName: 'Provinsi Sulawesi Barat'
    },
    {
      id: 1996551,
      name: 'Provinsi Kepulauan Riau',
      asciiName: 'Provinsi Kepulauan Riau'
    },
    {
      id: 8604684,
      name: 'North Kalimantan',
      asciiName: 'North Kalimantan'
    }
  ],
  IE: [
    {
      id: 7521313,
      name: 'Connaught',
      asciiName: 'Connaught'
    },
    {
      id: 7521314,
      name: 'Leinster',
      asciiName: 'Leinster'
    },
    {
      id: 7521315,
      name: 'Munster',
      asciiName: 'Munster'
    },
    {
      id: 7521316,
      name: 'Ulster',
      asciiName: 'Ulster'
    }
  ],
  CI: [
    {
      id: 2597316,
      name: 'Lagunes',
      asciiName: 'Lagunes'
    },
    {
      id: 2597317,
      name: 'Région du Sud-Comoé',
      asciiName: 'Region du Sud-Comoe'
    },
    {
      id: 2597318,
      name: 'Agnéby',
      asciiName: 'Agneby'
    },
    {
      id: 2597319,
      name: 'Haut-Sassandra',
      asciiName: 'Haut-Sassandra'
    },
    {
      id: 2597320,
      name: 'Savanes',
      asciiName: 'Savanes'
    },
    {
      id: 2597321,
      name: 'Vallée du Bandama',
      asciiName: 'Vallee du Bandama'
    },
    {
      id: 2597322,
      name: 'Moyen-Comoé',
      asciiName: 'Moyen-Comoe'
    },
    {
      id: 2597323,
      name: 'District des Montagnes',
      asciiName: 'District des Montagnes'
    },
    {
      id: 2597324,
      name: 'Lacs',
      asciiName: 'Lacs'
    },
    {
      id: 2597325,
      name: 'Zanzan',
      asciiName: 'Zanzan'
    },
    {
      id: 2597326,
      name: 'Bas-Sassandra',
      asciiName: 'Bas-Sassandra'
    },
    {
      id: 2597327,
      name: 'Worodougou',
      asciiName: 'Worodougou'
    },
    {
      id: 2597328,
      name: 'Denguélé',
      asciiName: 'Denguele'
    },
    {
      id: 2597329,
      name: 'Sud-Bandama',
      asciiName: 'Sud-Bandama'
    },
    {
      id: 2597330,
      name: 'Fromager',
      asciiName: 'Fromager'
    },
    {
      id: 2597331,
      name: 'N’zi-Comoé',
      asciiName: 'N\'zi-Comoe'
    },
    {
      id: 2597332,
      name: 'Marahoué',
      asciiName: 'Marahoue'
    },
    {
      id: 2597333,
      name: 'Moyen-Cavally',
      asciiName: 'Moyen-Cavally'
    },
    {
      id: 2597334,
      name: 'Bafing',
      asciiName: 'Bafing'
    }
  ],
  JP: [
    {
      id: 1848649,
      name: 'Yamanashi-ken',
      asciiName: 'Yamanashi-ken'
    },
    {
      id: 1848681,
      name: 'Yamaguchi-ken',
      asciiName: 'Yamaguchi-ken'
    },
    {
      id: 1848938,
      name: 'Wakayama-ken',
      asciiName: 'Wakayama-ken'
    },
    {
      id: 1849872,
      name: 'Toyama-ken',
      asciiName: 'Toyama-ken'
    },
    {
      id: 1849890,
      name: 'Tottori-ken',
      asciiName: 'Tottori-ken'
    },
    {
      id: 1850144,
      name: 'Tōkyō-to',
      asciiName: 'Tokyo-to'
    },
    {
      id: 1850157,
      name: 'Tokushima-ken',
      asciiName: 'Tokushima-ken'
    },
    {
      id: 1850310,
      name: 'Tochigi-ken',
      asciiName: 'Tochigi-ken'
    },
    {
      id: 1851715,
      name: 'Shizuoka-ken',
      asciiName: 'Shizuoka-ken'
    },
    {
      id: 1852442,
      name: 'Shimane-ken',
      asciiName: 'Shimane-ken'
    },
    {
      id: 1852553,
      name: 'Shiga-ken',
      asciiName: 'Shiga-ken'
    },
    {
      id: 1853226,
      name: 'Saitama-ken',
      asciiName: 'Saitama-ken'
    },
    {
      id: 1853299,
      name: 'Saga-ken',
      asciiName: 'Saga-ken'
    },
    {
      id: 1853904,
      name: 'Ōsaka-fu',
      asciiName: 'Osaka-fu'
    },
    {
      id: 1854345,
      name: 'Okinawa-ken',
      asciiName: 'Okinawa-ken'
    },
    {
      id: 1854381,
      name: 'Okayama-ken',
      asciiName: 'Okayama-ken'
    },
    {
      id: 1854484,
      name: 'Ōita-ken',
      asciiName: 'Oita-ken'
    },
    {
      id: 1855429,
      name: 'Niigata-ken',
      asciiName: 'Niigata-ken'
    },
    {
      id: 1855608,
      name: 'Nara-ken',
      asciiName: 'Nara-ken'
    },
    {
      id: 1856156,
      name: 'Nagasaki',
      asciiName: 'Nagasaki'
    },
    {
      id: 1856210,
      name: 'Nagano-ken',
      asciiName: 'Nagano-ken'
    },
    {
      id: 1856710,
      name: 'Miyazaki-ken',
      asciiName: 'Miyazaki-ken'
    },
    {
      id: 1857352,
      name: 'Mie-ken',
      asciiName: 'Mie-ken'
    },
    {
      id: 1857907,
      name: 'Kyōto-fu',
      asciiName: 'Kyoto-fu'
    },
    {
      id: 1858419,
      name: 'Kumamoto-ken',
      asciiName: 'Kumamoto-ken'
    },
    {
      id: 1859133,
      name: 'Kōchi-ken',
      asciiName: 'Kochi-ken'
    },
    {
      id: 1860291,
      name: 'Kanagawa-ken',
      asciiName: 'Kanagawa-ken'
    },
    {
      id: 1860825,
      name: 'Kagoshima-ken',
      asciiName: 'Kagoshima-ken'
    },
    {
      id: 1860834,
      name: 'Kagawa-ken',
      asciiName: 'Kagawa-ken'
    },
    {
      id: 1861387,
      name: 'Ishikawa-ken',
      asciiName: 'Ishikawa-ken'
    },
    {
      id: 1862047,
      name: 'Hyōgo-ken',
      asciiName: 'Hyogo-ken'
    },
    {
      id: 1862413,
      name: 'Hiroshima-ken',
      asciiName: 'Hiroshima-ken'
    },
    {
      id: 1863501,
      name: 'Gunma-ken',
      asciiName: 'Gunma-ken'
    },
    {
      id: 1863640,
      name: 'Gifu-ken',
      asciiName: 'Gifu-ken'
    },
    {
      id: 1863958,
      name: 'Fukuoka-ken',
      asciiName: 'Fukuoka-ken'
    },
    {
      id: 1863983,
      name: 'Fukui-ken',
      asciiName: 'Fukui-ken'
    },
    {
      id: 1864226,
      name: 'Ehime-ken',
      asciiName: 'Ehime-ken'
    },
    {
      id: 1865694,
      name: 'Aichi-ken',
      asciiName: 'Aichi-ken'
    },
    {
      id: 2110554,
      name: 'Yamagata-ken',
      asciiName: 'Yamagata-ken'
    },
    {
      id: 2111888,
      name: 'Miyagi-ken',
      asciiName: 'Miyagi-ken'
    },
    {
      id: 2112518,
      name: 'Iwate-ken',
      asciiName: 'Iwate-ken'
    },
    {
      id: 2112669,
      name: 'Ibaraki-ken',
      asciiName: 'Ibaraki-ken'
    },
    {
      id: 2112922,
      name: 'Fukushima-ken',
      asciiName: 'Fukushima-ken'
    },
    {
      id: 2113014,
      name: 'Chiba-ken',
      asciiName: 'Chiba-ken'
    },
    {
      id: 2113124,
      name: 'Akita-ken',
      asciiName: 'Akita-ken'
    },
    {
      id: 2130037,
      name: 'Hokkaidō',
      asciiName: 'Hokkaido'
    },
    {
      id: 2130656,
      name: 'Aomori-ken',
      asciiName: 'Aomori-ken'
    }
  ],
  KE: [
    {
      id: 178145,
      name: 'West Pokot',
      asciiName: 'West Pokot District'
    },
    {
      id: 178440,
      name: 'Wajir',
      asciiName: 'Wajir District'
    },
    {
      id: 178837,
      name: 'Uasin Gishu',
      asciiName: 'Uasin Gishu'
    },
    {
      id: 178914,
      name: 'Turkana',
      asciiName: 'Turkana District'
    },
    {
      id: 179068,
      name: 'Trans Nzoia',
      asciiName: 'Trans Nzoia District'
    },
    {
      id: 179380,
      name: 'Tharaka - Nithi',
      asciiName: 'Tharaka District'
    },
    {
      id: 179585,
      name: 'Tana River',
      asciiName: 'Tana River District'
    },
    {
      id: 180320,
      name: 'Siaya',
      asciiName: 'Siaya District'
    },
    {
      id: 180782,
      name: 'Samburu',
      asciiName: 'Samburu District'
    },
    {
      id: 184742,
      name: 'Nairobi',
      asciiName: 'Nairobi Province'
    },
    {
      id: 185578,
      name: 'Murang\'A',
      asciiName: 'Murang\'a District'
    },
    {
      id: 186298,
      name: 'Mombasa',
      asciiName: 'Mombasa District'
    },
    {
      id: 186824,
      name: 'Meru',
      asciiName: 'Meru Central District'
    },
    {
      id: 187583,
      name: 'Marsabit',
      asciiName: 'Marsabit District'
    },
    {
      id: 187895,
      name: 'Mandera',
      asciiName: 'Mandera District'
    },
    {
      id: 189794,
      name: 'Laikipia',
      asciiName: 'Laikipia District'
    },
    {
      id: 190106,
      name: 'Kwale',
      asciiName: 'Kwale District'
    },
    {
      id: 191037,
      name: 'Kitui',
      asciiName: 'Kitui District'
    },
    {
      id: 191242,
      name: 'Kisumu',
      asciiName: 'Kisumu'
    },
    {
      id: 191298,
      name: 'Kisii',
      asciiName: 'Kisii District'
    },
    {
      id: 191420,
      name: 'Kirinyaga',
      asciiName: 'Kirinyaga District'
    },
    {
      id: 192064,
      name: 'Kilifi',
      asciiName: 'Kilifi District'
    },
    {
      id: 192709,
      name: 'Kiambu',
      asciiName: 'Kiambu District'
    },
    {
      id: 192898,
      name: 'Kericho',
      asciiName: 'Kericho District'
    },
    {
      id: 195271,
      name: 'Kakamega',
      asciiName: 'Kakamega District'
    },
    {
      id: 196228,
      name: 'Isiolo',
      asciiName: 'Isiolo District'
    },
    {
      id: 197744,
      name: 'Garissa',
      asciiName: 'Garissa District'
    },
    {
      id: 198474,
      name: 'Embu',
      asciiName: 'Embu District'
    },
    {
      id: 199987,
      name: 'Busia',
      asciiName: 'Busia District'
    },
    {
      id: 200066,
      name: 'Bungoma',
      asciiName: 'Bungoma District'
    },
    {
      id: 200573,
      name: 'Baringo',
      asciiName: 'Baringo District'
    },
    {
      id: 7603036,
      name: 'Nyandarua',
      asciiName: 'Nyandarua District'
    },
    {
      id: 7667638,
      name: 'Vihiga',
      asciiName: 'Vihiga District'
    },
    {
      id: 7667643,
      name: 'Lamu',
      asciiName: 'Lamu'
    },
    {
      id: 7667644,
      name: 'Machakos',
      asciiName: 'Machakos District'
    },
    {
      id: 7667645,
      name: 'Makueni',
      asciiName: 'Makueni District'
    },
    {
      id: 7667646,
      name: 'Elegeyo-Marakwet',
      asciiName: 'Marakwet District'
    },
    {
      id: 7667652,
      name: 'Taita Taveta',
      asciiName: 'Taita Taveta District'
    },
    {
      id: 7667657,
      name: 'Kajiado',
      asciiName: 'Kajiado District'
    },
    {
      id: 7667661,
      name: 'Nyeri',
      asciiName: 'Nyeri District'
    },
    {
      id: 7667665,
      name: 'Homa Bay',
      asciiName: 'Homa Bay District'
    },
    {
      id: 7667666,
      name: 'Bomet',
      asciiName: 'Bomet District'
    },
    {
      id: 7667678,
      name: 'Migori',
      asciiName: 'Migori District'
    },
    {
      id: 7668902,
      name: 'Nakuru',
      asciiName: 'Nakuru District'
    },
    {
      id: 7668904,
      name: 'Narok',
      asciiName: 'Narok District'
    },
    {
      id: 7806857,
      name: 'Nyamira',
      asciiName: 'Nyamira District'
    },
    {
      id: 8051212,
      name: 'Nandi',
      asciiName: 'Nandi South District'
    }
  ],
  LA: [
    {
      id: 1652077,
      name: 'Xiangkhouang',
      asciiName: 'Xiangkhouang'
    },
    {
      id: 1652210,
      name: 'Xaignabouli',
      asciiName: 'Xaignabouli'
    },
    {
      id: 1652238,
      name: 'Vientiane Province',
      asciiName: 'Vientiane Province'
    },
    {
      id: 1653315,
      name: 'Khouèng Savannakhét',
      asciiName: 'Khoueng Savannakhet'
    },
    {
      id: 1653333,
      name: 'Salavan',
      asciiName: 'Salavan'
    },
    {
      id: 1653893,
      name: 'Khouèng Phôngsali',
      asciiName: 'Khoueng Phongsali'
    },
    {
      id: 1654491,
      name: 'Khouèng Oudômxai',
      asciiName: 'Khoueng Oudomxai'
    },
    {
      id: 1655558,
      name: 'Luang Prabang Province',
      asciiName: 'Luang Prabang Province'
    },
    {
      id: 1655561,
      name: 'Louangnamtha',
      asciiName: 'Louangnamtha'
    },
    {
      id: 1656538,
      name: 'Khammouan',
      asciiName: 'Khammouan'
    },
    {
      id: 1657114,
      name: 'Houaphan',
      asciiName: 'Houaphan'
    },
    {
      id: 1657818,
      name: 'Champasak',
      asciiName: 'Champasak'
    },
    {
      id: 1665045,
      name: 'Attapu',
      asciiName: 'Attapu'
    },
    {
      id: 1904615,
      name: 'Khouèng Xékong',
      asciiName: 'Khoueng Xekong'
    },
    {
      id: 1904616,
      name: 'Khouèng Bokèo',
      asciiName: 'Khoueng Bokeo'
    },
    {
      id: 1904617,
      name: 'Bolikhamxai',
      asciiName: 'Bolikhamxai'
    },
    {
      id: 1904618,
      name: 'Vientiane Prefecture',
      asciiName: 'Vientiane Prefecture'
    }
  ],
  LV: [
    {
      id: 454307,
      name: 'Ventspils Municipality',
      asciiName: 'Ventspils Municipality'
    },
    {
      id: 454311,
      name: 'Ventspils',
      asciiName: 'Ventspils'
    },
    {
      id: 454564,
      name: 'Valmiera District',
      asciiName: 'Valmiera District'
    },
    {
      id: 454571,
      name: 'Valka Municipality',
      asciiName: 'Valka Municipality'
    },
    {
      id: 454771,
      name: 'Tukuma Rajons',
      asciiName: 'Tukuma Rajons'
    },
    {
      id: 454968,
      name: 'Talsi Municipality',
      asciiName: 'Talsi Municipality'
    },
    {
      id: 455888,
      name: 'Saldus Municipality',
      asciiName: 'Saldus Municipality'
    },
    {
      id: 456173,
      name: 'Rīga',
      asciiName: 'Riga'
    },
    {
      id: 456197,
      name: 'Rēzeknes Novads',
      asciiName: 'Rezeknes Novads'
    },
    {
      id: 456203,
      name: 'Rēzekne',
      asciiName: 'Rezekne'
    },
    {
      id: 456528,
      name: 'Preiļi Municipality',
      asciiName: 'Preili Municipality'
    },
    {
      id: 457061,
      name: 'Ogres novads',
      asciiName: 'Ogres novads'
    },
    {
      id: 457712,
      name: 'Madona Municipality',
      asciiName: 'Madona Municipality'
    },
    {
      id: 457773,
      name: 'Ludzas Rajons',
      asciiName: 'Ludzas Rajons'
    },
    {
      id: 457889,
      name: 'Limbažu Rajons',
      asciiName: 'Limbazu Rajons'
    },
    {
      id: 457955,
      name: 'Liepāja',
      asciiName: 'Liepaja'
    },
    {
      id: 458459,
      name: 'Kuldīgas Rajons',
      asciiName: 'Kuldigas Rajons'
    },
    {
      id: 458621,
      name: 'Krāslavas Rajons',
      asciiName: 'Kraslavas Rajons'
    },
    {
      id: 459202,
      name: 'Jūrmala',
      asciiName: 'Jurmala'
    },
    {
      id: 459278,
      name: 'Jelgavas Rajons',
      asciiName: 'Jelgavas Rajons'
    },
    {
      id: 459281,
      name: 'Jelgava',
      asciiName: 'Jelgava'
    },
    {
      id: 459282,
      name: 'Jēkabpils Municipality',
      asciiName: 'Jekabpils Municipality'
    },
    {
      id: 459664,
      name: 'Gulbenes Rajons',
      asciiName: 'Gulbenes Rajons'
    },
    {
      id: 460311,
      name: 'Dobeles Rajons',
      asciiName: 'Dobeles Rajons'
    },
    {
      id: 460410,
      name: 'Daugavpils municipality',
      asciiName: 'Daugavpils municipality'
    },
    {
      id: 460414,
      name: 'Daugavpils',
      asciiName: 'Daugavpils'
    },
    {
      id: 460569,
      name: 'Cēsu Novads',
      asciiName: 'Cesu Novads'
    },
    {
      id: 461112,
      name: 'Bauskas Novads',
      asciiName: 'Bauskas Novads'
    },
    {
      id: 461160,
      name: 'Balvu Novads',
      asciiName: 'Balvu Novads'
    },
    {
      id: 461525,
      name: 'Alūksnes Rajons',
      asciiName: 'Aluksnes Rajons'
    },
    {
      id: 461613,
      name: 'Aizkraukles Rajons',
      asciiName: 'Aizkraukles Rajons'
    },
    {
      id: 7628298,
      name: 'Dundagas Novads',
      asciiName: 'Dundagas Novads'
    },
    {
      id: 7628299,
      name: 'Alsungas Novads',
      asciiName: 'Alsungas Novads'
    },
    {
      id: 7628300,
      name: 'Pāvilostas Novads',
      asciiName: 'Pavilostas Novads'
    },
    {
      id: 7628301,
      name: 'Nīcas Novads',
      asciiName: 'Nicas Novads'
    },
    {
      id: 7628302,
      name: 'Rucavas Novads',
      asciiName: 'Rucavas Novads'
    },
    {
      id: 7628303,
      name: 'Grobiņas Novads',
      asciiName: 'Grobinas Novads'
    },
    {
      id: 7628304,
      name: 'Durbes Novads',
      asciiName: 'Durbes Novads'
    },
    {
      id: 7628305,
      name: 'Aizputes Novads',
      asciiName: 'Aizputes Novads'
    },
    {
      id: 7628306,
      name: 'Priekules Novads',
      asciiName: 'Priekules Novads'
    },
    {
      id: 7628307,
      name: 'Vaiņodes Novads',
      asciiName: 'Vainodes Novads'
    },
    {
      id: 7628308,
      name: 'Skrundas Novads',
      asciiName: 'Skrundas Novads'
    },
    {
      id: 7628309,
      name: 'Brocēnu Novads',
      asciiName: 'Brocenu Novads'
    },
    {
      id: 7628310,
      name: 'Rojas Novads',
      asciiName: 'Rojas Novads'
    },
    {
      id: 7628311,
      name: 'Kandavas Novads',
      asciiName: 'Kandavas Novads'
    },
    {
      id: 7628312,
      name: 'Auces Novads',
      asciiName: 'Auces Novads'
    },
    {
      id: 7628313,
      name: 'Jaunpils Novads',
      asciiName: 'Jaunpils Novads'
    },
    {
      id: 7628314,
      name: 'Engures Novads',
      asciiName: 'Engures Novads'
    },
    {
      id: 7628315,
      name: 'Tērvetes Novads',
      asciiName: 'Tervetes Novads'
    },
    {
      id: 7628316,
      name: 'Ozolnieku Novads',
      asciiName: 'Ozolnieku Novads'
    },
    {
      id: 7628317,
      name: 'Rundāles Novads',
      asciiName: 'Rundales Novads'
    },
    {
      id: 7628318,
      name: 'Babītes Novads',
      asciiName: 'Babites Novads'
    },
    {
      id: 7628319,
      name: 'Mārupes Novads',
      asciiName: 'Marupes Novads'
    },
    {
      id: 7628320,
      name: 'Olaines Novads',
      asciiName: 'Olaines Novads'
    },
    {
      id: 7628321,
      name: 'Iecavas Novads',
      asciiName: 'Iecavas Novads'
    },
    {
      id: 7628322,
      name: 'Ķekavas Novads',
      asciiName: 'Kekavas Novads'
    },
    {
      id: 7628323,
      name: 'Salaspils Novads',
      asciiName: 'Salaspils Novads'
    },
    {
      id: 7628324,
      name: 'Baldones Novads',
      asciiName: 'Baldones Novads'
    },
    {
      id: 7628325,
      name: 'Stopiņu Novads',
      asciiName: 'Stopinu Novads'
    },
    {
      id: 7628326,
      name: 'Carnikavas Novads',
      asciiName: 'Carnikavas Novads'
    },
    {
      id: 7628327,
      name: 'Ādažu Novads',
      asciiName: 'Adazu Novads'
    },
    {
      id: 7628328,
      name: 'Garkalne Municipality',
      asciiName: 'Garkalne Municipality'
    },
    {
      id: 7628329,
      name: 'Vecumnieku Novads',
      asciiName: 'Vecumnieku Novads'
    },
    {
      id: 7628330,
      name: 'Ķeguma Novads',
      asciiName: 'Keguma Novads'
    },
    {
      id: 7628331,
      name: 'Lielvārdes Novads',
      asciiName: 'Lielvardes Novads'
    },
    {
      id: 7628332,
      name: 'Skrīveru Novads',
      asciiName: 'Skriveru Novads'
    },
    {
      id: 7628333,
      name: 'Jaunjelgavas Novads',
      asciiName: 'Jaunjelgavas Novads'
    },
    {
      id: 7628334,
      name: 'Neretas Novads',
      asciiName: 'Neretas Novads'
    },
    {
      id: 7628335,
      name: 'Viesītes Novads',
      asciiName: 'Viesites Novads'
    },
    {
      id: 7628336,
      name: 'Salas Novads',
      asciiName: 'Salas Novads'
    },
    {
      id: 7628337,
      name: 'Jēkabpils',
      asciiName: 'Jekabpils'
    },
    {
      id: 7628338,
      name: 'Aknīstes Novads',
      asciiName: 'Aknistes Novads'
    },
    {
      id: 7628339,
      name: 'Ilūkstes Novads',
      asciiName: 'Ilukstes Novads'
    },
    {
      id: 7628340,
      name: 'Vārkavas Novads',
      asciiName: 'Varkavas Novads'
    },
    {
      id: 7628341,
      name: 'Līvānu Novads',
      asciiName: 'Livanu Novads'
    },
    {
      id: 7628342,
      name: 'Varakļānu Novads',
      asciiName: 'Varaklanu Novads'
    },
    {
      id: 7628343,
      name: 'Viļānu Novads',
      asciiName: 'Vilanu Novads'
    },
    {
      id: 7628344,
      name: 'Riebiņu Novads',
      asciiName: 'Riebinu Novads'
    },
    {
      id: 7628345,
      name: 'Aglonas Novads',
      asciiName: 'Aglonas Novads'
    },
    {
      id: 7628346,
      name: 'Ciblas Novads',
      asciiName: 'Ciblas Novads'
    },
    {
      id: 7628347,
      name: 'Zilupes Novads',
      asciiName: 'Zilupes Novads'
    },
    {
      id: 7628348,
      name: 'Viļakas Novads',
      asciiName: 'Vilakas Novads'
    },
    {
      id: 7628349,
      name: 'Baltinavas Novads',
      asciiName: 'Baltinavas Novads'
    },
    {
      id: 7628350,
      name: 'Dagdas Novads',
      asciiName: 'Dagdas Novads'
    },
    {
      id: 7628351,
      name: 'Kārsavas Novads',
      asciiName: 'Karsavas Novads'
    },
    {
      id: 7628352,
      name: 'Rugāju Novads',
      asciiName: 'Rugaju Novads'
    },
    {
      id: 7628353,
      name: 'Cesvaines Novads',
      asciiName: 'Cesvaines Novads'
    },
    {
      id: 7628354,
      name: 'Lubānas Novads',
      asciiName: 'Lubanas Novads'
    },
    {
      id: 7628355,
      name: 'Krustpils Novads',
      asciiName: 'Krustpils Novads'
    },
    {
      id: 7628356,
      name: 'Pļaviņu Novads',
      asciiName: 'Plavinu Novads'
    },
    {
      id: 7628357,
      name: 'Kokneses Novads',
      asciiName: 'Kokneses Novads'
    },
    {
      id: 7628358,
      name: 'Ikšķiles Novads',
      asciiName: 'Ikskiles Novads'
    },
    {
      id: 7628359,
      name: 'Ropažu Novads',
      asciiName: 'Ropazu Novads'
    },
    {
      id: 7628360,
      name: 'Inčukalna Novads',
      asciiName: 'Incukalna Novads'
    },
    {
      id: 7628361,
      name: 'Krimuldas Novads',
      asciiName: 'Krimuldas Novads'
    },
    {
      id: 7628362,
      name: 'Siguldas Novads',
      asciiName: 'Siguldas Novads'
    },
    {
      id: 7628363,
      name: 'Līgatnes Novads',
      asciiName: 'Ligatnes Novads'
    },
    {
      id: 7628364,
      name: 'Mālpils Novads',
      asciiName: 'Malpils Novads'
    },
    {
      id: 7628365,
      name: 'Sējas Novads',
      asciiName: 'Sejas Novads'
    },
    {
      id: 7628366,
      name: 'Saulkrastu Novads',
      asciiName: 'Saulkrastu Novads'
    },
    {
      id: 7628367,
      name: 'Salacgrīvas Novads',
      asciiName: 'Salacgrivas Novads'
    },
    {
      id: 7628368,
      name: 'Alojas Novads',
      asciiName: 'Alojas Novads'
    },
    {
      id: 7628369,
      name: 'Naukšēnu Novads',
      asciiName: 'Nauksenu Novads'
    },
    {
      id: 7628370,
      name: 'Rūjienas Novads',
      asciiName: 'Rujienas Novads'
    },
    {
      id: 7628371,
      name: 'Mazsalacas Novads',
      asciiName: 'Mazsalacas Novads'
    },
    {
      id: 7628372,
      name: 'Burtnieku Novads',
      asciiName: 'Burtnieku Novads'
    },
    {
      id: 7628373,
      name: 'Pārgaujas Novads',
      asciiName: 'Pargaujas Novads'
    },
    {
      id: 7628374,
      name: 'Kocēnu Novads',
      asciiName: 'Kocenu Novads'
    },
    {
      id: 7628375,
      name: 'Amatas Novads',
      asciiName: 'Amatas Novads'
    },
    {
      id: 7628376,
      name: 'Priekuļi Municipality',
      asciiName: 'Priekuli Municipality'
    },
    {
      id: 7628377,
      name: 'Raunas Novads',
      asciiName: 'Raunas Novads'
    },
    {
      id: 7628378,
      name: 'Strenču Novads',
      asciiName: 'Strencu Novads'
    },
    {
      id: 7628379,
      name: 'Beverīnas Novads',
      asciiName: 'Beverinas Novads'
    },
    {
      id: 7628380,
      name: 'Smiltenes Novads',
      asciiName: 'Smiltenes Novads'
    },
    {
      id: 7628381,
      name: 'Jaunpiebalgas Novads',
      asciiName: 'Jaunpiebalgas Novads'
    },
    {
      id: 7628382,
      name: 'Ērgļu Novads',
      asciiName: 'Erglu Novads'
    },
    {
      id: 7628383,
      name: 'Vecpiebalgas Novads',
      asciiName: 'Vecpiebalgas Novads'
    },
    {
      id: 7628384,
      name: 'Apes Novads',
      asciiName: 'Apes Novads'
    },
    {
      id: 8299767,
      name: 'Mērsraga Novads',
      asciiName: 'Mersraga Novads'
    }
  ],
  LS: [
    {
      id: 932011,
      name: 'Thaba-Tseka',
      asciiName: 'Thaba-Tseka'
    },
    {
      id: 932184,
      name: 'Quthing',
      asciiName: 'Quthing'
    },
    {
      id: 932219,
      name: 'Qacha’s Nek',
      asciiName: 'Qacha\'s Nek'
    },
    {
      id: 932418,
      name: 'Mokhotlong',
      asciiName: 'Mokhotlong'
    },
    {
      id: 932439,
      name: 'Mohale’s Hoek District',
      asciiName: 'Mohale\'s Hoek District'
    },
    {
      id: 932506,
      name: 'Maseru',
      asciiName: 'Maseru'
    },
    {
      id: 932615,
      name: 'Mafeteng District',
      asciiName: 'Mafeteng District'
    },
    {
      id: 932700,
      name: 'Leribe District',
      asciiName: 'Leribe District'
    },
    {
      id: 932888,
      name: 'Butha-Buthe',
      asciiName: 'Butha-Buthe'
    },
    {
      id: 932932,
      name: 'Berea',
      asciiName: 'Berea'
    }
  ],
  LR: [
    {
      id: 2273898,
      name: 'Sinoe County',
      asciiName: 'Sinoe County'
    },
    {
      id: 2274688,
      name: 'Nimba County',
      asciiName: 'Nimba County'
    },
    {
      id: 2274890,
      name: 'Montserrado County',
      asciiName: 'Montserrado County'
    },
    {
      id: 2275099,
      name: 'Maryland County',
      asciiName: 'Maryland County'
    },
    {
      id: 2275344,
      name: 'Lofa County',
      asciiName: 'Lofa County'
    },
    {
      id: 2276622,
      name: 'Grand Gedeh County',
      asciiName: 'Grand Gedeh County'
    },
    {
      id: 2276627,
      name: 'Grand Cape Mount County',
      asciiName: 'Grand Cape Mount County'
    },
    {
      id: 2276630,
      name: 'Grand Bassa County',
      asciiName: 'Grand Bassa County'
    },
    {
      id: 2278292,
      name: 'Bong County',
      asciiName: 'Bong County'
    },
    {
      id: 2278324,
      name: 'Bomi County',
      asciiName: 'Bomi County'
    },
    {
      id: 2588490,
      name: 'Grand Kru County',
      asciiName: 'Grand Kru County'
    },
    {
      id: 2588491,
      name: 'Margibi County',
      asciiName: 'Margibi County'
    },
    {
      id: 2588492,
      name: 'River Cess County',
      asciiName: 'River Cess County'
    },
    {
      id: 2593119,
      name: 'Gbarpolu County',
      asciiName: 'Gbarpolu County'
    },
    {
      id: 2593120,
      name: 'River Gee County',
      asciiName: 'River Gee County'
    }
  ],
  LY: [
    {
      id: 87204,
      name: 'Darnah',
      asciiName: 'Darnah'
    },
    {
      id: 88318,
      name: 'Sha‘bīyat Banghāzī',
      asciiName: 'Sha\'biyat Banghazi'
    },
    {
      id: 88904,
      name: 'Al Marj',
      asciiName: 'Al Marj'
    },
    {
      id: 88932,
      name: 'Al Kufrah',
      asciiName: 'Al Kufrah'
    },
    {
      id: 443289,
      name: 'Sha‘bīyat al Jabal al Akhḑar',
      asciiName: 'Sha\'biyat al Jabal al Akhdar'
    },
    {
      id: 2210245,
      name: 'Tripoli',
      asciiName: 'Tripoli'
    },
    {
      id: 2210553,
      name: 'Surt',
      asciiName: 'Surt'
    },
    {
      id: 2212774,
      name: 'Sha‘bīyat Sabhā',
      asciiName: 'Sha\'biyat Sabha'
    },
    {
      id: 2214432,
      name: 'Sha‘bīyat Nālūt',
      asciiName: 'Sha`biyat Nalut'
    },
    {
      id: 2214602,
      name: 'Murzuq',
      asciiName: 'Murzuq'
    },
    {
      id: 2214845,
      name: 'Sha‘bīyat Mişrātah',
      asciiName: 'Sha\'biyat Misratah'
    },
    {
      id: 2217350,
      name: 'Sha‘bīyat Ghāt',
      asciiName: 'Sha\'biyat Ghat'
    },
    {
      id: 2218972,
      name: 'Sha‘bīyat az Zāwiyah',
      asciiName: 'Sha\'biyat az Zawiyah'
    },
    {
      id: 2219413,
      name: 'Sha‘bīyat Wādī ash Shāţi’',
      asciiName: 'Sha\'biyat Wadi ash Shati\''
    },
    {
      id: 2219944,
      name: 'Al Jufrah',
      asciiName: 'Al Jufrah'
    },
    {
      id: 2593778,
      name: 'Sha‘bīyat an Nuqāţ al Khams',
      asciiName: 'Sha\'biyat an Nuqat al Khams'
    },
    {
      id: 7602688,
      name: 'Sha‘bīyat al Buţnān',
      asciiName: 'Sha\'biyat al Butnan'
    },
    {
      id: 7602689,
      name: 'Sha‘bīyat al Jabal al Gharbī',
      asciiName: 'Sha\'biyat al Jabal al Gharbi'
    },
    {
      id: 7602690,
      name: 'Sha‘bīyat al Jafārah',
      asciiName: 'Sha\'biyat al Jafarah'
    },
    {
      id: 7602691,
      name: 'Al Marqab',
      asciiName: 'Al Marqab'
    },
    {
      id: 7602692,
      name: 'Sha‘bīyat al Wāḩāt',
      asciiName: 'Sha\'biyat al Wahat'
    },
    {
      id: 7602693,
      name: 'Sha‘bīyat Wādī al Ḩayāt',
      asciiName: 'Sha\'biyat Wadi al Hayat'
    }
  ],
  LT: [
    {
      id: 864389,
      name: 'Alytaus apskritis',
      asciiName: 'Alytaus apskritis'
    },
    {
      id: 864477,
      name: 'Kauno apskritis',
      asciiName: 'Kauno apskritis'
    },
    {
      id: 864478,
      name: 'Klaipėdos apskritis',
      asciiName: 'Klaipedos apskritis'
    },
    {
      id: 864479,
      name: 'Marijampolės apskritis',
      asciiName: 'Marijampoles apskritis'
    },
    {
      id: 864480,
      name: 'Panevėžys',
      asciiName: 'Panevezys'
    },
    {
      id: 864481,
      name: 'Šiaulių apskritis',
      asciiName: 'Siauliu apskritis'
    },
    {
      id: 864482,
      name: 'Tauragės apskritis',
      asciiName: 'Taurages apskritis'
    },
    {
      id: 864483,
      name: 'Telšių apskritis',
      asciiName: 'Telsiu apskritis'
    },
    {
      id: 864484,
      name: 'Utenos apskritis',
      asciiName: 'Utenos apskritis'
    },
    {
      id: 864485,
      name: 'Vilniaus apskritis',
      asciiName: 'Vilniaus apskritis'
    }
  ],
  MG: [
    {
      id: 7670842,
      name: 'Diana Region',
      asciiName: 'Diana Region'
    },
    {
      id: 7670846,
      name: 'Sava Region',
      asciiName: 'Sava Region'
    },
    {
      id: 7670847,
      name: 'Sofia Region',
      asciiName: 'Sofia Region'
    },
    {
      id: 7670848,
      name: 'Analanjirofo Region',
      asciiName: 'Analanjirofo Region'
    },
    {
      id: 7670849,
      name: 'Boeny Region',
      asciiName: 'Boeny Region'
    },
    {
      id: 7670850,
      name: 'Betsiboka Region',
      asciiName: 'Betsiboka Region'
    },
    {
      id: 7670851,
      name: 'Alaotra Mangoro Region',
      asciiName: 'Alaotra Mangoro Region'
    },
    {
      id: 7670852,
      name: 'Melaky Region',
      asciiName: 'Melaky Region'
    },
    {
      id: 7670853,
      name: 'Bongolava Region',
      asciiName: 'Bongolava Region'
    },
    {
      id: 7670854,
      name: 'Vakinankaratra Region',
      asciiName: 'Vakinankaratra Region'
    },
    {
      id: 7670855,
      name: 'Itasy Region',
      asciiName: 'Itasy Region'
    },
    {
      id: 7670856,
      name: 'Analamanga Region',
      asciiName: 'Analamanga Region'
    },
    {
      id: 7670857,
      name: 'Atsinanana Region',
      asciiName: 'Atsinanana Region'
    },
    {
      id: 7670902,
      name: 'Menabe Region',
      asciiName: 'Menabe Region'
    },
    {
      id: 7670904,
      name: 'Amoron\'i Mania Region',
      asciiName: 'Amoron\'i Mania Region'
    },
    {
      id: 7670905,
      name: 'Haute Matsiatra Region',
      asciiName: 'Haute Matsiatra Region'
    },
    {
      id: 7670906,
      name: 'Vatovavy Fitovinany Region',
      asciiName: 'Vatovavy Fitovinany Region'
    },
    {
      id: 7670907,
      name: 'Ihorombe Region',
      asciiName: 'Ihorombe Region'
    },
    {
      id: 7670908,
      name: 'Atsimo-Atsinanana Region',
      asciiName: 'Atsimo-Atsinanana Region'
    },
    {
      id: 7670910,
      name: 'Anosy Region',
      asciiName: 'Anosy Region'
    },
    {
      id: 7670911,
      name: 'Androy Region',
      asciiName: 'Androy Region'
    },
    {
      id: 7670913,
      name: 'Atsimo-Andrefana Region',
      asciiName: 'Atsimo-Andrefana Region'
    }
  ],
  MY: [
    {
      id: 1733035,
      name: 'Melaka',
      asciiName: 'Melaka'
    },
    {
      id: 1733036,
      name: 'Terengganu',
      asciiName: 'Terengganu'
    },
    {
      id: 1733037,
      name: 'Selangor',
      asciiName: 'Selangor'
    },
    {
      id: 1733038,
      name: 'Sarawak',
      asciiName: 'Sarawak'
    },
    {
      id: 1733039,
      name: 'Sabah',
      asciiName: 'Sabah'
    },
    {
      id: 1733040,
      name: 'Perlis',
      asciiName: 'Perlis'
    },
    {
      id: 1733041,
      name: 'Perak',
      asciiName: 'Perak'
    },
    {
      id: 1733042,
      name: 'Pahang',
      asciiName: 'Pahang'
    },
    {
      id: 1733043,
      name: 'Negeri Sembilan',
      asciiName: 'Negeri Sembilan'
    },
    {
      id: 1733044,
      name: 'Kelantan',
      asciiName: 'Kelantan'
    },
    {
      id: 1733046,
      name: 'Kuala Lumpur',
      asciiName: 'Kuala Lumpur'
    },
    {
      id: 1733047,
      name: 'Pulau Pinang',
      asciiName: 'Pulau Pinang'
    },
    {
      id: 1733048,
      name: 'Kedah',
      asciiName: 'Kedah'
    },
    {
      id: 1733049,
      name: 'Johor',
      asciiName: 'Johor'
    },
    {
      id: 1734240,
      name: 'Labuan',
      asciiName: 'Labuan'
    },
    {
      id: 1996552,
      name: 'Putrajaya',
      asciiName: 'Putrajaya'
    }
  ],
  MW: [
    {
      id: 923817,
      name: 'Southern Region',
      asciiName: 'Southern Region'
    },
    {
      id: 924591,
      name: 'Northern Region',
      asciiName: 'Northern Region'
    },
    {
      id: 931597,
      name: 'Central Region',
      asciiName: 'Central Region'
    }
  ],
  ML: [
    {
      id: 2449066,
      name: 'Tombouctou Region',
      asciiName: 'Tombouctou Region'
    },
    {
      id: 2451184,
      name: 'Sikasso Region',
      asciiName: 'Sikasso Region'
    },
    {
      id: 2451477,
      name: 'Ségou Region',
      asciiName: 'Segou Region'
    },
    {
      id: 2453347,
      name: 'Mopti Region',
      asciiName: 'Mopti Region'
    },
    {
      id: 2454532,
      name: 'Koulikoro Region',
      asciiName: 'Koulikoro Region'
    },
    {
      id: 2455517,
      name: 'Kayes Region',
      asciiName: 'Kayes Region'
    },
    {
      id: 2457161,
      name: 'Gao Region',
      asciiName: 'Gao Region'
    },
    {
      id: 2460594,
      name: 'Bamako Region',
      asciiName: 'Bamako Region'
    },
    {
      id: 2597449,
      name: 'Kidal Region',
      asciiName: 'Kidal Region'
    }
  ],
  MR: [
    {
      id: 2375742,
      name: 'Wilaya du Trarza',
      asciiName: 'Wilaya du Trarza'
    },
    {
      id: 2375989,
      name: 'Tiris Zemmour',
      asciiName: 'Tiris Zemmour'
    },
    {
      id: 2376551,
      name: 'Tagant',
      asciiName: 'Tagant'
    },
    {
      id: 2377449,
      name: 'District de Nouakchott',
      asciiName: 'District de Nouakchott'
    },
    {
      id: 2378903,
      name: 'Inchiri',
      asciiName: 'Inchiri'
    },
    {
      id: 2379024,
      name: 'Hodh el Gharbi',
      asciiName: 'Hodh el Gharbi'
    },
    {
      id: 2379025,
      name: 'Hodh ech Chargui',
      asciiName: 'Hodh ech Chargui'
    },
    {
      id: 2379216,
      name: 'Guidimaka',
      asciiName: 'Guidimaka'
    },
    {
      id: 2379384,
      name: 'Gorgol',
      asciiName: 'Gorgol'
    },
    {
      id: 2380426,
      name: 'Dakhlet Nouadhibou',
      asciiName: 'Dakhlet Nouadhibou'
    },
    {
      id: 2380635,
      name: 'Brakna',
      asciiName: 'Brakna'
    },
    {
      id: 2381344,
      name: 'Assaba',
      asciiName: 'Assaba'
    },
    {
      id: 2381972,
      name: 'Adrar',
      asciiName: 'Adrar'
    }
  ],
  MU: [
    {
      id: 448254,
      name: 'Agalega Islands',
      asciiName: 'Agalega Islands'
    },
    {
      id: 934017,
      name: 'Savanne District',
      asciiName: 'Savanne District'
    },
    {
      id: 934090,
      name: 'Rivière du Rempart District',
      asciiName: 'Riviere du Rempart District'
    },
    {
      id: 934153,
      name: 'Port Louis District',
      asciiName: 'Port Louis District'
    },
    {
      id: 934166,
      name: 'Plaines Wilhems District',
      asciiName: 'Plaines Wilhems District'
    },
    {
      id: 934212,
      name: 'Pamplemousses District',
      asciiName: 'Pamplemousses District'
    },
    {
      id: 934275,
      name: 'Moka District',
      asciiName: 'Moka District'
    },
    {
      id: 934466,
      name: 'Grand Port District',
      asciiName: 'Grand Port District'
    },
    {
      id: 934522,
      name: 'Flacq District',
      asciiName: 'Flacq District'
    },
    {
      id: 934718,
      name: 'Black River District',
      asciiName: 'Black River District'
    },
    {
      id: 1106583,
      name: 'Cargados Carajos',
      asciiName: 'Cargados Carajos'
    },
    {
      id: 1547449,
      name: 'Rodrigues',
      asciiName: 'Rodrigues'
    }
  ],
  MX: [
    {
      id: 3514211,
      name: 'Estado de Yucatán',
      asciiName: 'Estado de Yucatan'
    },
    {
      id: 3514780,
      name: 'Estado de Veracruz-Llave',
      asciiName: 'Estado de Veracruz-Llave'
    },
    {
      id: 3515359,
      name: 'Estado de Tlaxcala',
      asciiName: 'Estado de Tlaxcala'
    },
    {
      id: 3516391,
      name: 'Estado de Tamaulipas',
      asciiName: 'Estado de Tamaulipas'
    },
    {
      id: 3516458,
      name: 'Estado de Tabasco',
      asciiName: 'Estado de Tabasco'
    },
    {
      id: 3520887,
      name: 'Estado de Quintana Roo',
      asciiName: 'Estado de Quintana Roo'
    },
    {
      id: 3520914,
      name: 'Estado de Querétaro',
      asciiName: 'Estado de Queretaro'
    },
    {
      id: 3521082,
      name: 'Estado de Puebla',
      asciiName: 'Estado de Puebla'
    },
    {
      id: 3522509,
      name: 'Estado de Oaxaca',
      asciiName: 'Estado de Oaxaca'
    },
    {
      id: 3522542,
      name: 'Estado de Nuevo León',
      asciiName: 'Estado de Nuevo Leon'
    },
    {
      id: 3522961,
      name: 'Estado de Morelos',
      asciiName: 'Estado de Morelos'
    },
    {
      id: 3523272,
      name: 'Estado de México',
      asciiName: 'Estado de Mexico'
    },
    {
      id: 3527115,
      name: 'Estado de Hidalgo',
      asciiName: 'Estado de Hidalgo'
    },
    {
      id: 3527213,
      name: 'Estado de Guerrero',
      asciiName: 'Estado de Guerrero'
    },
    {
      id: 3527646,
      name: 'Distrito Federal',
      asciiName: 'Distrito Federal'
    },
    {
      id: 3531011,
      name: 'Estado de Chiapas',
      asciiName: 'Estado de Chiapas'
    },
    {
      id: 3531730,
      name: 'Estado de Campeche',
      asciiName: 'Estado de Campeche'
    },
    {
      id: 3979840,
      name: 'Estado de Zacatecas',
      asciiName: 'Estado de Zacatecas'
    },
    {
      id: 3982846,
      name: 'Estado de Sonora',
      asciiName: 'Estado de Sonora'
    },
    {
      id: 3983035,
      name: 'Estado de Sinaloa',
      asciiName: 'Estado de Sinaloa'
    },
    {
      id: 3985605,
      name: 'Estado de San Luis Potosí',
      asciiName: 'Estado de San Luis Potosi'
    },
    {
      id: 3995012,
      name: 'Estado de Nayarit',
      asciiName: 'Estado de Nayarit'
    },
    {
      id: 3995955,
      name: 'Estado de Michoacán de Ocampo',
      asciiName: 'Estado de Michoacan de Ocampo'
    },
    {
      id: 4004156,
      name: 'Estado de Jalisco',
      asciiName: 'Estado de Jalisco'
    },
    {
      id: 4005267,
      name: 'Estado de Guanajuato',
      asciiName: 'Estado de Guanajuato'
    },
    {
      id: 4011741,
      name: 'Estado de Durango',
      asciiName: 'Estado de Durango'
    },
    {
      id: 4013513,
      name: 'Estado de Colima',
      asciiName: 'Estado de Colima'
    },
    {
      id: 4013674,
      name: 'Estado de Coahuila de Zaragoza',
      asciiName: 'Estado de Coahuila de Zaragoza'
    },
    {
      id: 4014336,
      name: 'Estado de Chihuahua',
      asciiName: 'Estado de Chihuahua'
    },
    {
      id: 4017698,
      name: 'Estado de Baja California Sur',
      asciiName: 'Estado de Baja California Sur'
    },
    {
      id: 4017700,
      name: 'Estado de Baja California',
      asciiName: 'Estado de Baja California'
    },
    {
      id: 4019231,
      name: 'Estado de Aguascalientes',
      asciiName: 'Estado de Aguascalientes'
    }
  ],
  MA: [
    {
      id: 2538470,
      name: 'Région de Rabat-Salé-Zemmour-Zaër',
      asciiName: 'Region de Rabat-Sale-Zemmour-Zaer'
    },
    {
      id: 2542710,
      name: 'Région de Meknès-Tafilalet',
      asciiName: 'Region de Meknes-Tafilalet'
    },
    {
      id: 2542995,
      name: 'Marrakech-Tensift-Al Haouz',
      asciiName: 'Marrakech-Tensift-Al Haouz'
    },
    {
      id: 2548882,
      name: 'Région de Fès-Boulemane',
      asciiName: 'Region de Fes-Boulemane'
    },
    {
      id: 2553603,
      name: 'Région du Grand Casablanca',
      asciiName: 'Region du Grand Casablanca'
    },
    {
      id: 2597548,
      name: 'Chaouia-Ouardigha',
      asciiName: 'Chaouia-Ouardigha'
    },
    {
      id: 2597549,
      name: 'Doukkala-Abda',
      asciiName: 'Doukkala-Abda'
    },
    {
      id: 2597550,
      name: 'Gharb-Chrarda-Beni Hssen',
      asciiName: 'Gharb-Chrarda-Beni Hssen'
    },
    {
      id: 2597551,
      name: 'Guelmim-Es Semara',
      asciiName: 'Guelmim-Es Semara'
    },
    {
      id: 2597553,
      name: 'Oriental Region',
      asciiName: 'Oriental Region'
    },
    {
      id: 2597554,
      name: 'Région de Souss-Massa-Drâa',
      asciiName: 'Region de Souss-Massa-Draa'
    },
    {
      id: 2597555,
      name: 'Tadla-Azilal',
      asciiName: 'Tadla-Azilal'
    },
    {
      id: 2597556,
      name: 'Région de Tanger-Tétouan',
      asciiName: 'Region de Tanger-Tetouan'
    },
    {
      id: 2597557,
      name: 'Taza-Al Hoceima-Taounate',
      asciiName: 'Taza-Al Hoceima-Taounate'
    },
    {
      id: 6545402,
      name: 'Laâyoune-Boujdour-Sakia El Hamra',
      asciiName: 'Laayoune-Boujdour-Sakia El Hamra'
    },
    {
      id: 7627603,
      name: 'Oued ed Dahab-Lagouira',
      asciiName: 'Oued ed Dahab-Lagouira'
    }
  ],
  MZ: [
    {
      id: 1024312,
      name: 'Província de Zambézia',
      asciiName: 'Provincia de Zambezia'
    },
    {
      id: 1026010,
      name: 'Tete',
      asciiName: 'Tete'
    },
    {
      id: 1026804,
      name: 'Sofala Province',
      asciiName: 'Sofala Province'
    },
    {
      id: 1030006,
      name: 'Niassa Province',
      asciiName: 'Niassa Province'
    },
    {
      id: 1033354,
      name: 'Nampula',
      asciiName: 'Nampula'
    },
    {
      id: 1040649,
      name: 'Maputo Province',
      asciiName: 'Maputo Province'
    },
    {
      id: 1040947,
      name: 'Manica Province',
      asciiName: 'Manica Province'
    },
    {
      id: 1045110,
      name: 'Inhambane Province',
      asciiName: 'Inhambane Province'
    },
    {
      id: 1046058,
      name: 'Gaza Province',
      asciiName: 'Gaza Province'
    },
    {
      id: 1051823,
      name: 'Cabo Delgado Province',
      asciiName: 'Cabo Delgado Province'
    },
    {
      id: 1105845,
      name: 'Cidade de Maputo',
      asciiName: 'Cidade de Maputo'
    }
  ],
  NA: [
    {
      id: 1090052,
      name: 'Zambezi Region',
      asciiName: 'Zambezi Region'
    },
    {
      id: 3352137,
      name: 'Khomas',
      asciiName: 'Khomas'
    },
    {
      id: 3371199,
      name: 'Erongo',
      asciiName: 'Erongo'
    },
    {
      id: 3371200,
      name: 'Hardap',
      asciiName: 'Hardap'
    },
    {
      id: 3371201,
      name: 'Karas',
      asciiName: 'Karas'
    },
    {
      id: 3371202,
      name: 'Kunene',
      asciiName: 'Kunene'
    },
    {
      id: 3371203,
      name: 'Ohangwena',
      asciiName: 'Ohangwena'
    },
    {
      id: 3371205,
      name: 'Omaheke',
      asciiName: 'Omaheke'
    },
    {
      id: 3371206,
      name: 'Omusati',
      asciiName: 'Omusati'
    },
    {
      id: 3371207,
      name: 'Oshana',
      asciiName: 'Oshana'
    },
    {
      id: 3371208,
      name: 'Oshikoto',
      asciiName: 'Oshikoto'
    },
    {
      id: 3371209,
      name: 'Otjozondjupa',
      asciiName: 'Otjozondjupa'
    },
    {
      id: 8693188,
      name: 'Kavango East Region',
      asciiName: 'Kavango East Region'
    },
    {
      id: 8693189,
      name: 'Kavango West Region',
      asciiName: 'Kavango West Region'
    }
  ],
  NZ: [
    {
      id: 2179538,
      name: 'Wellington',
      asciiName: 'Wellington'
    },
    {
      id: 2179671,
      name: 'Manawatu-Wanganui',
      asciiName: 'Manawatu-Wanganui'
    },
    {
      id: 2180293,
      name: 'Waikato',
      asciiName: 'Waikato'
    },
    {
      id: 2181818,
      name: 'Tasman',
      asciiName: 'Tasman'
    },
    {
      id: 2181872,
      name: 'Taranaki',
      asciiName: 'Taranaki'
    },
    {
      id: 2182501,
      name: 'Southland',
      asciiName: 'Southland'
    },
    {
      id: 2182560,
      name: 'Bay of Plenty',
      asciiName: 'Bay of Plenty'
    },
    {
      id: 2185978,
      name: 'Northland',
      asciiName: 'Northland'
    },
    {
      id: 2187304,
      name: 'Marlborough',
      asciiName: 'Marlborough'
    },
    {
      id: 2190146,
      name: 'Hawke\'s Bay',
      asciiName: 'Hawke\'s Bay'
    },
    {
      id: 2190767,
      name: 'Gisborne',
      asciiName: 'Gisborne'
    },
    {
      id: 2192628,
      name: 'Canterbury',
      asciiName: 'Canterbury'
    },
    {
      id: 2193734,
      name: 'Auckland',
      asciiName: 'Auckland'
    },
    {
      id: 4033013,
      name: 'Chatham Islands',
      asciiName: 'Chatham Islands'
    },
    {
      id: 6612108,
      name: 'Nelson',
      asciiName: 'Nelson'
    },
    {
      id: 6612109,
      name: 'Otago',
      asciiName: 'Otago'
    },
    {
      id: 6612113,
      name: 'West Coast',
      asciiName: 'West Coast'
    }
  ],
  NI: [
    {
      id: 3617051,
      name: 'Departamento de Rivas',
      asciiName: 'Departamento de Rivas'
    },
    {
      id: 3617056,
      name: 'Departamento de Río San Juan',
      asciiName: 'Departamento de Rio San Juan'
    },
    {
      id: 3617458,
      name: 'Departamento de Nueva Segovia',
      asciiName: 'Departamento de Nueva Segovia'
    },
    {
      id: 3617707,
      name: 'Departamento de Matagalpa',
      asciiName: 'Departamento de Matagalpa'
    },
    {
      id: 3617722,
      name: 'Departamento de Masaya',
      asciiName: 'Departamento de Masaya'
    },
    {
      id: 3617762,
      name: 'Departamento de Managua',
      asciiName: 'Departamento de Managua'
    },
    {
      id: 3617796,
      name: 'Departamento de Madriz',
      asciiName: 'Departamento de Madriz'
    },
    {
      id: 3618029,
      name: 'Departamento de León',
      asciiName: 'Departamento de Leon'
    },
    {
      id: 3618928,
      name: 'Departamento de Jinotega',
      asciiName: 'Departamento de Jinotega'
    },
    {
      id: 3619135,
      name: 'Departamento de Granada',
      asciiName: 'Departamento de Granada'
    },
    {
      id: 3619193,
      name: 'Departamento de Estelí',
      asciiName: 'Departamento de Esteli'
    },
    {
      id: 3620368,
      name: 'Departamento de Chontales',
      asciiName: 'Departamento de Chontales'
    },
    {
      id: 3620380,
      name: 'Departamento de Chinandega',
      asciiName: 'Departamento de Chinandega'
    },
    {
      id: 3620481,
      name: 'Departamento de Carazo',
      asciiName: 'Departamento de Carazo'
    },
    {
      id: 3620673,
      name: 'Departamento de Boaco',
      asciiName: 'Departamento de Boaco'
    },
    {
      id: 3830307,
      name: 'North Atlantic Autonomous Region (RAAN)',
      asciiName: 'North Atlantic Autonomous Region (RAAN)'
    },
    {
      id: 3830308,
      name: 'Región Autónoma Atlántico Sur',
      asciiName: 'Region Autonoma Atlantico Sur'
    }
  ],
  NE: [
    {
      id: 2437797,
      name: 'Zinder',
      asciiName: 'Zinder'
    },
    {
      id: 2439374,
      name: 'Tahoua',
      asciiName: 'Tahoua'
    },
    {
      id: 2441289,
      name: 'Maradi',
      asciiName: 'Maradi'
    },
    {
      id: 2445486,
      name: 'Dosso Region',
      asciiName: 'Dosso Region'
    },
    {
      id: 2445702,
      name: 'Diffa',
      asciiName: 'Diffa'
    },
    {
      id: 2448083,
      name: 'Agadez',
      asciiName: 'Agadez'
    },
    {
      id: 2595293,
      name: 'Tillaberi Region',
      asciiName: 'Tillaberi Region'
    },
    {
      id: 2595294,
      name: 'Niamey',
      asciiName: 'Niamey'
    }
  ],
  NG: [
    {
      id: 2322907,
      name: 'Sokoto State',
      asciiName: 'Sokoto State'
    },
    {
      id: 2324433,
      name: 'Rivers State',
      asciiName: 'Rivers State'
    },
    {
      id: 2324828,
      name: 'Plateau State',
      asciiName: 'Plateau State'
    },
    {
      id: 2325190,
      name: 'Oyo State',
      asciiName: 'Oyo State'
    },
    {
      id: 2326168,
      name: 'Ondo State',
      asciiName: 'Ondo State'
    },
    {
      id: 2327546,
      name: 'Ogun State',
      asciiName: 'Ogun State'
    },
    {
      id: 2328925,
      name: 'Niger State',
      asciiName: 'Niger State'
    },
    {
      id: 2332453,
      name: 'Lagos State',
      asciiName: 'Lagos State'
    },
    {
      id: 2332785,
      name: 'Kwara State',
      asciiName: 'Kwara State'
    },
    {
      id: 2334797,
      name: 'Katsina State',
      asciiName: 'Katsina State'
    },
    {
      id: 2335196,
      name: 'Kano State',
      asciiName: 'Kano State'
    },
    {
      id: 2335722,
      name: 'Kaduna State',
      asciiName: 'Kaduna State'
    },
    {
      id: 2337542,
      name: 'Imo State',
      asciiName: 'Imo State'
    },
    {
      id: 2345891,
      name: 'Cross River State',
      asciiName: 'Cross River State'
    },
    {
      id: 2346794,
      name: 'Borno State',
      asciiName: 'Borno State'
    },
    {
      id: 2347266,
      name: 'Benue State',
      asciiName: 'Benue State'
    },
    {
      id: 2347468,
      name: 'Bauchi State',
      asciiName: 'Bauchi State'
    },
    {
      id: 2349961,
      name: 'Anambra State',
      asciiName: 'Anambra State'
    },
    {
      id: 2350813,
      name: 'Akwa Ibom State',
      asciiName: 'Akwa Ibom State'
    },
    {
      id: 2352776,
      name: 'Federal Capital Territory',
      asciiName: 'Federal Capital Territory'
    },
    {
      id: 2565340,
      name: 'Abia State',
      asciiName: 'Abia State'
    },
    {
      id: 2565341,
      name: 'Delta State',
      asciiName: 'Delta State'
    },
    {
      id: 2565342,
      name: 'Adamawa State',
      asciiName: 'Adamawa State'
    },
    {
      id: 2565343,
      name: 'Edo',
      asciiName: 'Edo'
    },
    {
      id: 2565344,
      name: 'Enugu State',
      asciiName: 'Enugu State'
    },
    {
      id: 2565345,
      name: 'Jigawa State',
      asciiName: 'Jigawa State'
    },
    {
      id: 2595344,
      name: 'Bayelsa State',
      asciiName: 'Bayelsa State'
    },
    {
      id: 2595345,
      name: 'Ebonyi State',
      asciiName: 'Ebonyi State'
    },
    {
      id: 2595346,
      name: 'Ekiti State',
      asciiName: 'Ekiti State'
    },
    {
      id: 2595347,
      name: 'Gombe State',
      asciiName: 'Gombe State'
    },
    {
      id: 2595348,
      name: 'Nasarawa State',
      asciiName: 'Nasarawa State'
    },
    {
      id: 2595349,
      name: 'Zamfara State',
      asciiName: 'Zamfara State'
    },
    {
      id: 2597363,
      name: 'Kebbi State',
      asciiName: 'Kebbi State'
    },
    {
      id: 2597364,
      name: 'Kogi State',
      asciiName: 'Kogi State'
    },
    {
      id: 2597365,
      name: 'Osun State',
      asciiName: 'Osun State'
    },
    {
      id: 2597366,
      name: 'Taraba State',
      asciiName: 'Taraba State'
    },
    {
      id: 2597367,
      name: 'Yobe State',
      asciiName: 'Yobe State'
    }
  ],
  PA: [
    {
      id: 3700159,
      name: 'Provincia de Veraguas',
      asciiName: 'Provincia de Veraguas'
    },
    {
      id: 3701537,
      name: 'Guna Yala',
      asciiName: 'Guna Yala'
    },
    {
      id: 3703433,
      name: 'Provincia de Panamá',
      asciiName: 'Provincia de Panama'
    },
    {
      id: 3704961,
      name: 'Provincia de Los Santos',
      asciiName: 'Provincia de Los Santos'
    },
    {
      id: 3708710,
      name: 'Provincia de Herrera',
      asciiName: 'Provincia de Herrera'
    },
    {
      id: 3711671,
      name: 'Provincia del Darién',
      asciiName: 'Provincia del Darien'
    },
    {
      id: 3712073,
      name: 'Provincia de Colón',
      asciiName: 'Provincia de Colon'
    },
    {
      id: 3712162,
      name: 'Provincia de Coclé',
      asciiName: 'Provincia de Cocle'
    },
    {
      id: 3712410,
      name: 'Provincia de Chiriquí',
      asciiName: 'Provincia de Chiriqui'
    },
    {
      id: 3713954,
      name: 'Provincia de Bocas del Toro',
      asciiName: 'Provincia de Bocas del Toro'
    },
    {
      id: 7303686,
      name: 'Emberá-Wounaan',
      asciiName: 'Embera-Wounaan'
    },
    {
      id: 7303688,
      name: 'Ngöbe-Buglé',
      asciiName: 'Ngoebe-Bugle'
    }
  ],
  PY: [
    {
      id: 3437027,
      name: 'Departamento de San Pedro',
      asciiName: 'Departamento de San Pedro'
    },
    {
      id: 3437443,
      name: 'Departamento de Presidente Hayes',
      asciiName: 'Departamento de Presidente Hayes'
    },
    {
      id: 3437599,
      name: 'Departamento de Paraguarí',
      asciiName: 'Departamento de Paraguari'
    },
    {
      id: 3437677,
      name: 'Departamento de Ñeembucú',
      asciiName: 'Departamento de Neembucu'
    },
    {
      id: 3437727,
      name: 'Departamento de Misiones',
      asciiName: 'Departamento de Misiones'
    },
    {
      id: 3437923,
      name: 'Departamento de Itapúa',
      asciiName: 'Departamento de Itapua'
    },
    {
      id: 3438049,
      name: 'Departamento del Guairá',
      asciiName: 'Departamento del Guaira'
    },
    {
      id: 3438827,
      name: 'Departamento de la Cordillera',
      asciiName: 'Departamento de la Cordillera'
    },
    {
      id: 3438833,
      name: 'Departamento de Concepción',
      asciiName: 'Departamento de Concepcion'
    },
    {
      id: 3439137,
      name: 'Departamento Central',
      asciiName: 'Departamento Central'
    },
    {
      id: 3439216,
      name: 'Departamento de Canindeyú',
      asciiName: 'Departamento de Canindeyu'
    },
    {
      id: 3439296,
      name: 'Departamento de Caazapá',
      asciiName: 'Departamento de Caazapa'
    },
    {
      id: 3439312,
      name: 'Departamento de Caaguazú',
      asciiName: 'Departamento de Caaguazu'
    },
    {
      id: 3439433,
      name: 'Departamento del Amambay',
      asciiName: 'Departamento del Amambay'
    },
    {
      id: 3439440,
      name: 'Departamento del Alto Paraná',
      asciiName: 'Departamento del Alto Parana'
    },
    {
      id: 3439441,
      name: 'Departamento de Alto Paraguay',
      asciiName: 'Departamento de Alto Paraguay'
    },
    {
      id: 3474570,
      name: 'Asunción',
      asciiName: 'Asuncion'
    },
    {
      id: 3867442,
      name: 'Departamento de Boquerón',
      asciiName: 'Departamento de Boqueron'
    }
  ],
  PE: [
    {
      id: 3691099,
      name: 'Ucayali',
      asciiName: 'Ucayali'
    },
    {
      id: 3691146,
      name: 'Tumbes',
      asciiName: 'Tumbes'
    },
    {
      id: 3692385,
      name: 'Región de San Martín',
      asciiName: 'Region de San Martin'
    },
    {
      id: 3693525,
      name: 'Piura',
      asciiName: 'Piura'
    },
    {
      id: 3695238,
      name: 'Loreto',
      asciiName: 'Loreto'
    },
    {
      id: 3695753,
      name: 'Lambayeque',
      asciiName: 'Lambayeque'
    },
    {
      id: 3695781,
      name: 'La Libertad',
      asciiName: 'La Libertad'
    },
    {
      id: 3696416,
      name: 'Región de Huánuco',
      asciiName: 'Region de Huanuco'
    },
    {
      id: 3699087,
      name: 'Cajamarca',
      asciiName: 'Cajamarca'
    },
    {
      id: 3699674,
      name: 'Ancash',
      asciiName: 'Ancash'
    },
    {
      id: 3699699,
      name: 'Amazonas',
      asciiName: 'Amazonas'
    },
    {
      id: 3928127,
      name: 'Tacna',
      asciiName: 'Tacna'
    },
    {
      id: 3931275,
      name: 'Puno',
      asciiName: 'Puno'
    },
    {
      id: 3932834,
      name: 'Pasco',
      asciiName: 'Pasco'
    },
    {
      id: 3934607,
      name: 'Departamento de Moquegua',
      asciiName: 'Departamento de Moquegua'
    },
    {
      id: 3935619,
      name: 'Madre de Dios',
      asciiName: 'Madre de Dios'
    },
    {
      id: 3936451,
      name: 'Provincia de Lima',
      asciiName: 'Provincia de Lima'
    },
    {
      id: 3936452,
      name: 'Lima',
      asciiName: 'Lima'
    },
    {
      id: 3937485,
      name: 'Junín',
      asciiName: 'Junin'
    },
    {
      id: 3938526,
      name: 'Ica',
      asciiName: 'Ica'
    },
    {
      id: 3939467,
      name: 'Huancavelica',
      asciiName: 'Huancavelica'
    },
    {
      id: 3941583,
      name: 'Cusco',
      asciiName: 'Cusco'
    },
    {
      id: 3946080,
      name: 'Callao',
      asciiName: 'Callao'
    },
    {
      id: 3947018,
      name: 'Ayacucho',
      asciiName: 'Ayacucho'
    },
    {
      id: 3947319,
      name: 'Arequipa',
      asciiName: 'Arequipa'
    },
    {
      id: 3947421,
      name: 'Apurimac',
      asciiName: 'Apurimac'
    }
  ],
  PH: [
    {
      id: 7115989,
      name: 'Autonomous Region in Muslim Mindanao',
      asciiName: 'Autonomous Region in Muslim Mindanao'
    },
    {
      id: 7521295,
      name: 'Northern Mindanao',
      asciiName: 'Northern Mindanao'
    },
    {
      id: 7521296,
      name: 'Mimaropa',
      asciiName: 'Mimaropa'
    },
    {
      id: 7521297,
      name: 'Cagayan Valley',
      asciiName: 'Cagayan Valley'
    },
    {
      id: 7521298,
      name: 'Soccsksargen',
      asciiName: 'Soccsksargen'
    },
    {
      id: 7521299,
      name: 'Caraga',
      asciiName: 'Caraga'
    },
    {
      id: 7521300,
      name: 'Cordillera Administrative Region',
      asciiName: 'Cordillera Administrative Region'
    },
    {
      id: 7521301,
      name: 'Ilocos',
      asciiName: 'Ilocos'
    },
    {
      id: 7521303,
      name: 'Calabarzon',
      asciiName: 'Calabarzon'
    },
    {
      id: 7521304,
      name: 'Western Visayas',
      asciiName: 'Western Visayas'
    },
    {
      id: 7521305,
      name: 'Central Luzon',
      asciiName: 'Central Luzon'
    },
    {
      id: 7521306,
      name: 'Central Visayas',
      asciiName: 'Central Visayas'
    },
    {
      id: 7521307,
      name: 'Eastern Visayas',
      asciiName: 'Eastern Visayas'
    },
    {
      id: 7521308,
      name: 'Zamboanga Peninsula',
      asciiName: 'Zamboanga Peninsula'
    },
    {
      id: 7521309,
      name: 'Davao',
      asciiName: 'Davao'
    },
    {
      id: 7521310,
      name: 'Bicol',
      asciiName: 'Bicol'
    },
    {
      id: 7521311,
      name: 'National Capital Region',
      asciiName: 'National Capital Region'
    }
  ],
  RO: [
    {
      id: 662447,
      name: 'Vrancea',
      asciiName: 'Vrancea'
    },
    {
      id: 662892,
      name: 'Judeţul Vâlcea',
      asciiName: 'Judetul Valcea'
    },
    {
      id: 663116,
      name: 'Vaslui',
      asciiName: 'Vaslui'
    },
    {
      id: 664517,
      name: 'Tulcea',
      asciiName: 'Tulcea'
    },
    {
      id: 665091,
      name: 'Judeţul Timiş',
      asciiName: 'Judetul Timis'
    },
    {
      id: 665283,
      name: 'Teleorman',
      asciiName: 'Teleorman'
    },
    {
      id: 665849,
      name: 'Suceava',
      asciiName: 'Suceava'
    },
    {
      id: 667267,
      name: 'Judeţul Sibiu',
      asciiName: 'Judetul Sibiu'
    },
    {
      id: 667869,
      name: 'Satu Mare',
      asciiName: 'Satu Mare'
    },
    {
      id: 668248,
      name: 'Judeţul Sălaj',
      asciiName: 'Judetul Salaj'
    },
    {
      id: 669737,
      name: 'Prahova',
      asciiName: 'Prahova'
    },
    {
      id: 671857,
      name: 'Olt',
      asciiName: 'Olt'
    },
    {
      id: 672460,
      name: 'Judeţul Neamţ',
      asciiName: 'Judetul Neamt'
    },
    {
      id: 672628,
      name: 'Judeţul Mureş',
      asciiName: 'Judetul Mures'
    },
    {
      id: 673612,
      name: 'Judeţul Mehedinţi',
      asciiName: 'Judetul Mehedinti'
    },
    {
      id: 673887,
      name: 'Judeţul Maramureş',
      asciiName: 'Judetul Maramures'
    },
    {
      id: 675809,
      name: 'Judeţul Iaşi',
      asciiName: 'Judetul Iasi'
    },
    {
      id: 675848,
      name: 'Judeţul Ialomiţa',
      asciiName: 'Judetul Ialomita'
    },
    {
      id: 675917,
      name: 'Hunedoara',
      asciiName: 'Hunedoara'
    },
    {
      id: 676309,
      name: 'Harghita',
      asciiName: 'Harghita'
    },
    {
      id: 676898,
      name: 'Gorj',
      asciiName: 'Gorj'
    },
    {
      id: 677104,
      name: 'Giurgiu',
      asciiName: 'Giurgiu'
    },
    {
      id: 677692,
      name: 'Judeţul Galaţi',
      asciiName: 'Judetul Galati'
    },
    {
      id: 679134,
      name: 'Dolj',
      asciiName: 'Dolj'
    },
    {
      id: 679385,
      name: 'Judeţul Dâmboviţa',
      asciiName: 'Judetul Dambovita'
    },
    {
      id: 680428,
      name: 'Covasna',
      asciiName: 'Covasna'
    },
    {
      id: 680962,
      name: 'Constanța',
      asciiName: 'Constanta'
    },
    {
      id: 681291,
      name: 'Judeţul Cluj',
      asciiName: 'Judetul Cluj'
    },
    {
      id: 682714,
      name: 'Judeţul Caraş-Severin',
      asciiName: 'Judetul Caras-Severin'
    },
    {
      id: 683016,
      name: 'Judeţul Călăraşi',
      asciiName: 'Judetul Calarasi'
    },
    {
      id: 683121,
      name: 'Judeţul Buzău',
      asciiName: 'Judetul Buzau'
    },
    {
      id: 683504,
      name: 'București',
      asciiName: 'Bucuresti'
    },
    {
      id: 683843,
      name: 'Judeţul Braşov',
      asciiName: 'Judetul Brasov'
    },
    {
      id: 683901,
      name: 'Judeţul Brăila',
      asciiName: 'Judetul Braila'
    },
    {
      id: 684038,
      name: 'Judeţul Botoşani',
      asciiName: 'Judetul Botosani'
    },
    {
      id: 684647,
      name: 'Judeţul Bistriţa-Năsăud',
      asciiName: 'Judetul Bistrita-Nasaud'
    },
    {
      id: 684878,
      name: 'Bihor',
      asciiName: 'Bihor'
    },
    {
      id: 685947,
      name: 'Judeţul Bacău',
      asciiName: 'Judetul Bacau'
    },
    {
      id: 686192,
      name: 'Judeţul Argeş',
      asciiName: 'Judetul Arges'
    },
    {
      id: 686253,
      name: 'Arad',
      asciiName: 'Arad'
    },
    {
      id: 686581,
      name: 'Judeţul Alba',
      asciiName: 'Judetul Alba'
    },
    {
      id: 865518,
      name: 'Ilfov',
      asciiName: 'Ilfov'
    }
  ],
  RW: [
    {
      id: 6413337,
      name: 'Eastern Province',
      asciiName: 'Eastern Province'
    },
    {
      id: 6413338,
      name: 'Kigali Province',
      asciiName: 'Kigali Province'
    },
    {
      id: 6413339,
      name: 'Northern Province',
      asciiName: 'Northern Province'
    },
    {
      id: 6413340,
      name: 'Western Province',
      asciiName: 'Western Province'
    },
    {
      id: 6413341,
      name: 'Southern Province',
      asciiName: 'Southern Province'
    }
  ],
  ST: [
    {
      id: 2410764,
      name: 'São Tomé',
      asciiName: 'Sao Tome'
    },
    {
      id: 2410878,
      name: 'Príncipe',
      asciiName: 'Principe'
    }
  ],
  SG: [
    {
      id: 7535954,
      name: 'Central Singapore Community Development Council',
      asciiName: 'Central Singapore Community Development Council'
    },
    {
      id: 7535955,
      name: 'North East Community Development Region',
      asciiName: 'North East Community Development Region'
    },
    {
      id: 7535956,
      name: 'South East Community Development Council',
      asciiName: 'South East Community Development Council'
    },
    {
      id: 7535957,
      name: 'South West Community Development Council',
      asciiName: 'South West Community Development Council'
    },
    {
      id: 7535958,
      name: 'North West Community Development Council',
      asciiName: 'North West Community Development Council'
    }
  ],
  SN: [
    {
      id: 2243939,
      name: 'Ziguinchor',
      asciiName: 'Ziguinchor'
    },
    {
      id: 2244800,
      name: 'Région de Thiès',
      asciiName: 'Region de Thies'
    },
    {
      id: 2244990,
      name: 'Tambacounda',
      asciiName: 'Tambacounda'
    },
    {
      id: 2246451,
      name: 'Saint-Louis',
      asciiName: 'Saint-Louis'
    },
    {
      id: 2248753,
      name: 'Matam',
      asciiName: 'Matam'
    },
    {
      id: 2249221,
      name: 'Louga',
      asciiName: 'Louga'
    },
    {
      id: 2249781,
      name: 'Kolda',
      asciiName: 'Kolda'
    },
    {
      id: 2250804,
      name: 'Kaolack',
      asciiName: 'Kaolack'
    },
    {
      id: 2251910,
      name: 'Fatick',
      asciiName: 'Fatick'
    },
    {
      id: 2252308,
      name: 'Diourbel',
      asciiName: 'Diourbel'
    },
    {
      id: 2253350,
      name: 'Dakar',
      asciiName: 'Dakar'
    },
    {
      id: 7303935,
      name: 'Région de Kaffrine',
      asciiName: 'Region de Kaffrine'
    },
    {
      id: 7303936,
      name: 'Région de Kédougou',
      asciiName: 'Region de Kedougou'
    },
    {
      id: 7303937,
      name: 'Région de Sédhiou',
      asciiName: 'Region de Sedhiou'
    }
  ],
  SC: [
    {
      id: 241151,
      name: 'Takamaka',
      asciiName: 'Takamaka'
    },
    {
      id: 241181,
      name: 'Saint Louis',
      asciiName: 'Saint Louis'
    },
    {
      id: 241215,
      name: 'Port Glaud',
      asciiName: 'Port Glaud'
    },
    {
      id: 241221,
      name: 'Pointe Larue',
      asciiName: 'Pointe Larue'
    },
    {
      id: 241224,
      name: 'Plaisance',
      asciiName: 'Plaisance'
    },
    {
      id: 241251,
      name: 'Mont Fleuri',
      asciiName: 'Mont Fleuri'
    },
    {
      id: 241252,
      name: 'Mont Buxton',
      asciiName: 'Mont Buxton'
    },
    {
      id: 241302,
      name: 'English River',
      asciiName: 'English River'
    },
    {
      id: 241311,
      name: 'Inner Islands',
      asciiName: 'Inner Islands'
    },
    {
      id: 241330,
      name: 'Grand Anse Mahe',
      asciiName: 'Grand Anse Mahe'
    },
    {
      id: 241331,
      name: 'Grand Anse Praslin',
      asciiName: 'Grand Anse Praslin'
    },
    {
      id: 241336,
      name: 'Glacis',
      asciiName: 'Glacis'
    },
    {
      id: 241396,
      name: 'Cascade',
      asciiName: 'Cascade'
    },
    {
      id: 241424,
      name: 'Bel Ombre',
      asciiName: 'Bel Ombre'
    },
    {
      id: 241426,
      name: 'Bel Air',
      asciiName: 'Bel Air'
    },
    {
      id: 241428,
      name: 'Beau Vallon',
      asciiName: 'Beau Vallon'
    },
    {
      id: 241438,
      name: 'Baie Sainte Anne',
      asciiName: 'Baie Sainte Anne'
    },
    {
      id: 241439,
      name: 'Baie Lazare',
      asciiName: 'Baie Lazare'
    },
    {
      id: 241444,
      name: 'Anse Royale',
      asciiName: 'Anse Royale'
    },
    {
      id: 241447,
      name: 'Anse Etoile',
      asciiName: 'Anse Etoile'
    },
    {
      id: 241449,
      name: 'Anse Boileau',
      asciiName: 'Anse Boileau'
    },
    {
      id: 241450,
      name: 'Anse aux Pins',
      asciiName: 'Anse aux Pins'
    },
    {
      id: 448408,
      name: 'Les Mamelles',
      asciiName: 'Les Mamelles'
    },
    {
      id: 448409,
      name: 'Roche Caiman',
      asciiName: 'Roche Caiman'
    },
    {
      id: 448410,
      name: 'Au Cap',
      asciiName: 'Au Cap'
    }
  ],
  SL: [
    {
      id: 2403068,
      name: 'Western Area',
      asciiName: 'Western Area'
    },
    {
      id: 2403745,
      name: 'Southern Province',
      asciiName: 'Southern Province'
    },
    {
      id: 2404798,
      name: 'Northern Province',
      asciiName: 'Northern Province'
    },
    {
      id: 2409543,
      name: 'Eastern Province',
      asciiName: 'Eastern Province'
    }
  ],
  SK: [
    {
      id: 865084,
      name: 'Košický kraj',
      asciiName: 'Kosicky kraj'
    },
    {
      id: 865085,
      name: 'Prešovský kraj',
      asciiName: 'Presovsky kraj'
    },
    {
      id: 3056506,
      name: 'Žilinský kraj',
      asciiName: 'Zilinsky kraj'
    },
    {
      id: 3343954,
      name: 'Banskobystrický kraj',
      asciiName: 'Banskobystricky kraj'
    },
    {
      id: 3343955,
      name: 'Bratislavský kraj',
      asciiName: 'Bratislavsky kraj'
    },
    {
      id: 3343956,
      name: 'Nitriansky kraj',
      asciiName: 'Nitriansky kraj'
    },
    {
      id: 3343957,
      name: 'Trenčiansky kraj',
      asciiName: 'Trenciansky kraj'
    },
    {
      id: 3343958,
      name: 'Trnavský kraj',
      asciiName: 'Trnavsky kraj'
    }
  ],
  SI: [
    {
      id: 3186843,
      name: 'Občina Žalec',
      asciiName: 'Obcina Zalec'
    },
    {
      id: 3186905,
      name: 'Zagorje ob Savi',
      asciiName: 'Zagorje ob Savi'
    },
    {
      id: 3187213,
      name: 'Vrhnika',
      asciiName: 'Vrhnika'
    },
    {
      id: 3188687,
      name: 'Občina Tržič',
      asciiName: 'Obcina Trzic'
    },
    {
      id: 3188885,
      name: 'Trebnje',
      asciiName: 'Trebnje'
    },
    {
      id: 3188914,
      name: 'Trbovlje',
      asciiName: 'Trbovlje'
    },
    {
      id: 3189037,
      name: 'Občina Tolmin',
      asciiName: 'Obcina Tolmin'
    },
    {
      id: 3189074,
      name: 'Velenje',
      asciiName: 'Velenje'
    },
    {
      id: 3190509,
      name: 'Občina Šmarje pri Jelšah',
      asciiName: 'Obcina Smarje pri Jelsah'
    },
    {
      id: 3190529,
      name: 'Slovenske Konjice',
      asciiName: 'Slovenske Konjice'
    },
    {
      id: 3190533,
      name: 'Slovenska Bistrica',
      asciiName: 'Slovenska Bistrica'
    },
    {
      id: 3190535,
      name: 'Slovenj Gradec',
      asciiName: 'Slovenj Gradec'
    },
    {
      id: 3190716,
      name: 'Občina Škofja Loka',
      asciiName: 'Obcina Skofja Loka'
    },
    {
      id: 3190944,
      name: 'Občina Sežana',
      asciiName: 'Obcina Sezana'
    },
    {
      id: 3190949,
      name: 'Sevnica',
      asciiName: 'Sevnica'
    },
    {
      id: 3191028,
      name: 'Občina Šentjur',
      asciiName: 'Obcina Sentjur'
    },
    {
      id: 3191679,
      name: 'Ribnica',
      asciiName: 'Ribnica'
    },
    {
      id: 3192062,
      name: 'Radovljica',
      asciiName: 'Radovljica'
    },
    {
      id: 3192120,
      name: 'Radlje ob Dravi',
      asciiName: 'Radlje ob Dravi'
    },
    {
      id: 3192240,
      name: 'Ptuj',
      asciiName: 'Ptuj'
    },
    {
      id: 3192672,
      name: 'Postojna',
      asciiName: 'Postojna'
    },
    {
      id: 3193340,
      name: 'Piran',
      asciiName: 'Piran'
    },
    {
      id: 3193964,
      name: 'Občina Ormož',
      asciiName: 'Obcina Ormoz'
    },
    {
      id: 3194350,
      name: 'Mestna Občina Novo mesto',
      asciiName: 'Mestna Obcina Novo mesto'
    },
    {
      id: 3194451,
      name: 'Nova Gorica',
      asciiName: 'Nova Gorica'
    },
    {
      id: 3194647,
      name: 'Murska Sobota',
      asciiName: 'Murska Sobota'
    },
    {
      id: 3194791,
      name: 'Mozirje',
      asciiName: 'Mozirje'
    },
    {
      id: 3195213,
      name: 'Metlika',
      asciiName: 'Metlika'
    },
    {
      id: 3195505,
      name: 'Maribor',
      asciiName: 'Maribor'
    },
    {
      id: 3196288,
      name: 'Logatec',
      asciiName: 'Logatec'
    },
    {
      id: 3196306,
      name: 'Ljutomer',
      asciiName: 'Ljutomer'
    },
    {
      id: 3196424,
      name: 'Litija',
      asciiName: 'Litija'
    },
    {
      id: 3196684,
      name: 'Lenart',
      asciiName: 'Lenart'
    },
    {
      id: 3196759,
      name: 'Občina Laško',
      asciiName: 'Obcina Lasko'
    },
    {
      id: 3197146,
      name: 'Občina Krško',
      asciiName: 'Obcina Krsko'
    },
    {
      id: 3197377,
      name: 'Kranj',
      asciiName: 'Kranj'
    },
    {
      id: 3197752,
      name: 'Koper',
      asciiName: 'Koper'
    },
    {
      id: 3197942,
      name: 'Občina Kočevje',
      asciiName: 'Obcina Kocevje'
    },
    {
      id: 3198364,
      name: 'Kamnik',
      asciiName: 'Kamnik'
    },
    {
      id: 3198646,
      name: 'Jesenice',
      asciiName: 'Jesenice'
    },
    {
      id: 3199016,
      name: 'Izola',
      asciiName: 'Izola'
    },
    {
      id: 3199130,
      name: 'Ilirska Bistrica',
      asciiName: 'Ilirska Bistrica'
    },
    {
      id: 3199169,
      name: 'Idrija',
      asciiName: 'Idrija'
    },
    {
      id: 3199296,
      name: 'Hrastnik',
      asciiName: 'Hrastnik'
    },
    {
      id: 3199522,
      name: 'Grosuplje',
      asciiName: 'Grosuplje'
    },
    {
      id: 3200196,
      name: 'Gornja Radgona',
      asciiName: 'Gornja Radgona'
    },
    {
      id: 3201252,
      name: 'Dravograd',
      asciiName: 'Dravograd'
    },
    {
      id: 3201729,
      name: 'Občina Domžale',
      asciiName: 'Obcina Domzale'
    },
    {
      id: 3202332,
      name: 'Občina Črnomelj',
      asciiName: 'Obcina Crnomelj'
    },
    {
      id: 3202707,
      name: 'Cerknica',
      asciiName: 'Cerknica'
    },
    {
      id: 3202780,
      name: 'Celje',
      asciiName: 'Celje'
    },
    {
      id: 3203411,
      name: 'Občina Brežice',
      asciiName: 'Obcina Brezice'
    },
    {
      id: 3204853,
      name: 'Občina Ajdovščina',
      asciiName: 'Obcina Ajdovscina'
    },
    {
      id: 3239050,
      name: 'Hrpelje-Kozina',
      asciiName: 'Hrpelje-Kozina'
    },
    {
      id: 3239051,
      name: 'Občina Divača',
      asciiName: 'Obcina Divaca'
    },
    {
      id: 3239054,
      name: 'Pivka',
      asciiName: 'Pivka'
    },
    {
      id: 3239056,
      name: 'Občina Loška Dolina',
      asciiName: 'Obcina Loska Dolina'
    },
    {
      id: 3239059,
      name: 'Občina Loški Potok',
      asciiName: 'Obcina Loski Potok'
    },
    {
      id: 3239061,
      name: 'Osilnica',
      asciiName: 'Osilnica'
    },
    {
      id: 3239062,
      name: 'Občina Velike Lašče',
      asciiName: 'Obcina Velike Lasce'
    },
    {
      id: 3239066,
      name: 'Občina Škofljica',
      asciiName: 'Obcina Skofljica'
    },
    {
      id: 3239069,
      name: 'Ig',
      asciiName: 'Ig'
    },
    {
      id: 3239071,
      name: 'Brezovica',
      asciiName: 'Brezovica'
    },
    {
      id: 3239073,
      name: 'Borovnica',
      asciiName: 'Borovnica'
    },
    {
      id: 3239075,
      name: 'Vipava',
      asciiName: 'Vipava'
    },
    {
      id: 3239078,
      name: 'Komen',
      asciiName: 'Komen'
    },
    {
      id: 3239080,
      name: 'Miren-Kostanjevica',
      asciiName: 'Miren-Kostanjevica'
    },
    {
      id: 3239083,
      name: 'Brda',
      asciiName: 'Brda'
    },
    {
      id: 3239086,
      name: 'Kanal',
      asciiName: 'Kanal'
    },
    {
      id: 3239087,
      name: 'Občina Žiri',
      asciiName: 'Obcina Ziri'
    },
    {
      id: 3239091,
      name: 'Cerkno',
      asciiName: 'Cerkno'
    },
    {
      id: 3239093,
      name: 'Občina Železniki',
      asciiName: 'Obcina Zelezniki'
    },
    {
      id: 3239095,
      name: 'Gorenja Vas-Poljane',
      asciiName: 'Gorenja Vas-Poljane'
    },
    {
      id: 3239096,
      name: 'Dobrova-Polhov Gradec',
      asciiName: 'Dobrova-Polhov Gradec'
    },
    {
      id: 3239098,
      name: 'Občina Kobarid',
      asciiName: 'Obcina Kobarid'
    },
    {
      id: 3239100,
      name: 'Občina Bovec',
      asciiName: 'Obcina Bovec'
    },
    {
      id: 3239101,
      name: 'Bohinj',
      asciiName: 'Bohinj'
    },
    {
      id: 3239103,
      name: 'Občina Bled',
      asciiName: 'Obcina Bled'
    },
    {
      id: 3239104,
      name: 'Naklo',
      asciiName: 'Naklo'
    },
    {
      id: 3239105,
      name: 'Kranjska Gora',
      asciiName: 'Kranjska Gora'
    },
    {
      id: 3239107,
      name: 'Preddvor',
      asciiName: 'Preddvor'
    },
    {
      id: 3239110,
      name: 'Cerklje na Gorenjskem',
      asciiName: 'Cerklje na Gorenjskem'
    },
    {
      id: 3239111,
      name: 'Občina Šenčur',
      asciiName: 'Obcina Sencur'
    },
    {
      id: 3239112,
      name: 'Vodice',
      asciiName: 'Vodice'
    },
    {
      id: 3239113,
      name: 'Medvode',
      asciiName: 'Medvode'
    },
    {
      id: 3239114,
      name: 'Občina Mengeš',
      asciiName: 'Obcina Menges'
    },
    {
      id: 3239115,
      name: 'Dol pri Ljubljani',
      asciiName: 'Dol pri Ljubljani'
    },
    {
      id: 3239132,
      name: 'Občina Moravče',
      asciiName: 'Obcina Moravce'
    },
    {
      id: 3239133,
      name: 'Gornji Grad',
      asciiName: 'Gornji Grad'
    },
    {
      id: 3239134,
      name: 'Občina Luče',
      asciiName: 'Obcina Luce'
    },
    {
      id: 3239175,
      name: 'Občina Ravne na Koroškem',
      asciiName: 'Obcina Ravne na Koroskem'
    },
    {
      id: 3239177,
      name: 'Občina Mežica',
      asciiName: 'Obcina Mezica'
    },
    {
      id: 3239179,
      name: 'Muta',
      asciiName: 'Muta'
    },
    {
      id: 3239180,
      name: 'Vuzenica',
      asciiName: 'Vuzenica'
    },
    {
      id: 3239181,
      name: 'Občina Črna na Koroškem',
      asciiName: 'Obcina Crna na Koroskem'
    },
    {
      id: 3239184,
      name: 'Ljubno',
      asciiName: 'Ljubno'
    },
    {
      id: 3239185,
      name: 'Občina Šoštanj',
      asciiName: 'Obcina Sostanj'
    },
    {
      id: 3239187,
      name: 'Občina Šmartno ob Paki',
      asciiName: 'Obcina Smartno ob Paki'
    },
    {
      id: 3239188,
      name: 'Lukovica',
      asciiName: 'Lukovica'
    },
    {
      id: 3239189,
      name: 'Občina Radeče',
      asciiName: 'Obcina Radece'
    },
    {
      id: 3239191,
      name: 'Občina Ivančna Gorica',
      asciiName: 'Obcina Ivancna Gorica'
    },
    {
      id: 3239193,
      name: 'Dobrepolje',
      asciiName: 'Dobrepolje'
    },
    {
      id: 3239195,
      name: 'Občina Semič',
      asciiName: 'Obcina Semic'
    },
    {
      id: 3239197,
      name: 'Občina Šentjernej',
      asciiName: 'Obcina Sentjernej'
    },
    {
      id: 3239199,
      name: 'Občina Škocjan',
      asciiName: 'Obcina Skocjan'
    },
    {
      id: 3239200,
      name: 'Občina Štore',
      asciiName: 'Obcina Store'
    },
    {
      id: 3239202,
      name: 'Vojnik',
      asciiName: 'Vojnik'
    },
    {
      id: 3239204,
      name: 'Vitanje',
      asciiName: 'Vitanje'
    },
    {
      id: 3239205,
      name: 'Občina Zreče',
      asciiName: 'Obcina Zrece'
    },
    {
      id: 3239207,
      name: 'Mislinja',
      asciiName: 'Mislinja'
    },
    {
      id: 3239211,
      name: 'Občina Ruše',
      asciiName: 'Obcina Ruse'
    },
    {
      id: 3239213,
      name: 'Kungota',
      asciiName: 'Kungota'
    },
    {
      id: 3239214,
      name: 'Občina Šentilj',
      asciiName: 'Obcina Sentilj'
    },
    {
      id: 3239215,
      name: 'Pesnica',
      asciiName: 'Pesnica'
    },
    {
      id: 3239216,
      name: 'Duplek',
      asciiName: 'Duplek'
    },
    {
      id: 3239224,
      name: 'Občina Rače-Fram',
      asciiName: 'Obcina Race-Fram'
    },
    {
      id: 3239226,
      name: 'Občina Starše',
      asciiName: 'Obcina Starse'
    },
    {
      id: 3239227,
      name: 'Občina Kidričevo',
      asciiName: 'Obcina Kidricevo'
    },
    {
      id: 3239229,
      name: 'Občina Majšperk',
      asciiName: 'Obcina Majsperk'
    },
    {
      id: 3239231,
      name: 'Videm',
      asciiName: 'Videm'
    },
    {
      id: 3239234,
      name: 'Občina Rogaška Slatina',
      asciiName: 'Obcina Rogaska Slatina'
    },
    {
      id: 3239237,
      name: 'Rogatec',
      asciiName: 'Rogatec'
    },
    {
      id: 3239241,
      name: 'Občina Podčetrtek',
      asciiName: 'Obcina Podcetrtek'
    },
    {
      id: 3239243,
      name: 'Kozje',
      asciiName: 'Kozje'
    },
    {
      id: 3239245,
      name: 'Občina Gorišnica',
      asciiName: 'Obcina Gorisnica'
    },
    {
      id: 3239247,
      name: 'Občina Zavrč',
      asciiName: 'Obcina Zavrc'
    },
    {
      id: 3239248,
      name: 'Dornava',
      asciiName: 'Dornava'
    },
    {
      id: 3239251,
      name: 'Občina Juršinci',
      asciiName: 'Obcina Jursinci'
    },
    {
      id: 3239259,
      name: 'Občina Sveti Jurij ob Ščavnici',
      asciiName: 'Obcina Sveti Jurij ob Scavnici'
    },
    {
      id: 3239262,
      name: 'Radenci',
      asciiName: 'Radenci'
    },
    {
      id: 3239268,
      name: 'Puconci',
      asciiName: 'Puconci'
    },
    {
      id: 3239270,
      name: 'Občina Rogašovci',
      asciiName: 'Obcina Rogasovci'
    },
    {
      id: 3239272,
      name: 'Kuzma',
      asciiName: 'Kuzma'
    },
    {
      id: 3239275,
      name: 'Gornji Petrovci',
      asciiName: 'Gornji Petrovci'
    },
    {
      id: 3239279,
      name: 'Moravske Toplice',
      asciiName: 'Moravske Toplice'
    },
    {
      id: 3239280,
      name: 'Kobilje',
      asciiName: 'Kobilje'
    },
    {
      id: 3239282,
      name: 'Beltinci',
      asciiName: 'Beltinci'
    },
    {
      id: 3239283,
      name: 'Občina Turnišče',
      asciiName: 'Obcina Turnisce'
    },
    {
      id: 3239285,
      name: 'Odranci',
      asciiName: 'Odranci'
    },
    {
      id: 3239286,
      name: 'Občina Črenšovci',
      asciiName: 'Obcina Crensovci'
    },
    {
      id: 3239294,
      name: 'Nazarje',
      asciiName: 'Nazarje'
    },
    {
      id: 3239318,
      name: 'Mestna Občina Ljubljana',
      asciiName: 'Mestna Obcina Ljubljana'
    },
    {
      id: 3344893,
      name: 'Občina Žirovnica',
      asciiName: 'Obcina Zirovnica'
    },
    {
      id: 3344894,
      name: 'Jezersko',
      asciiName: 'Jezersko'
    },
    {
      id: 3344895,
      name: 'Občina Solčava',
      asciiName: 'Obcina Solcava'
    },
    {
      id: 3344896,
      name: 'Komenda',
      asciiName: 'Komenda'
    },
    {
      id: 3344897,
      name: 'Horjul',
      asciiName: 'Horjul'
    },
    {
      id: 3344898,
      name: 'Občina Šempeter-Vrtojba',
      asciiName: 'Obcina Sempeter-Vrtojba'
    },
    {
      id: 3344899,
      name: 'Bloke',
      asciiName: 'Bloke'
    },
    {
      id: 3344900,
      name: 'Občina Sodražica',
      asciiName: 'Obcina Sodrazica'
    },
    {
      id: 3344901,
      name: 'Trzin',
      asciiName: 'Trzin'
    },
    {
      id: 3344902,
      name: 'Prevalje',
      asciiName: 'Prevalje'
    },
    {
      id: 3344903,
      name: 'Vransko',
      asciiName: 'Vransko'
    },
    {
      id: 3344904,
      name: 'Tabor',
      asciiName: 'Tabor'
    },
    {
      id: 3344905,
      name: 'Občina Braslovče',
      asciiName: 'Obcina Braslovce'
    },
    {
      id: 3344906,
      name: 'Polzela',
      asciiName: 'Polzela'
    },
    {
      id: 3344907,
      name: 'Prebold',
      asciiName: 'Prebold'
    },
    {
      id: 3344908,
      name: 'Kostel',
      asciiName: 'Kostel'
    },
    {
      id: 3344909,
      name: 'Občina Žužemberk',
      asciiName: 'Obcina Zuzemberk'
    },
    {
      id: 3344910,
      name: 'Dolenjske Toplice',
      asciiName: 'Dolenjske Toplice'
    },
    {
      id: 3344911,
      name: 'Občina Mirna Peč',
      asciiName: 'Obcina Mirna Pec'
    },
    {
      id: 3344912,
      name: 'Bistrica ob Sotli',
      asciiName: 'Bistrica ob Sotli'
    },
    {
      id: 3344913,
      name: 'Dobje',
      asciiName: 'Dobje'
    },
    {
      id: 3344914,
      name: 'Dobrna',
      asciiName: 'Dobrna'
    },
    {
      id: 3344915,
      name: 'Oplotnica',
      asciiName: 'Oplotnica'
    },
    {
      id: 3344916,
      name: 'Podvelka',
      asciiName: 'Podvelka'
    },
    {
      id: 3344917,
      name: 'Ribnica na Pohorju',
      asciiName: 'Ribnica na Pohorju'
    },
    {
      id: 3344918,
      name: 'Lovrenc na Pohorju',
      asciiName: 'Lovrenc na Pohorju'
    },
    {
      id: 3344919,
      name: 'Selnica ob Dravi',
      asciiName: 'Selnica ob Dravi'
    },
    {
      id: 3344920,
      name: 'Občina Hoče-Slivnica',
      asciiName: 'Obcina Hoce-Slivnica'
    },
    {
      id: 3344921,
      name: 'Občina Miklavž na Dravskem Polju',
      asciiName: 'Obcina Miklavz na Dravskem Polju'
    },
    {
      id: 3344922,
      name: 'Hajdina',
      asciiName: 'Hajdina'
    },
    {
      id: 3344923,
      name: 'Občina Žetale',
      asciiName: 'Obcina Zetale'
    },
    {
      id: 3344924,
      name: 'Podlehnik',
      asciiName: 'Podlehnik'
    },
    {
      id: 3344925,
      name: 'Markovci',
      asciiName: 'Markovci'
    },
    {
      id: 3344926,
      name: 'Destrnik',
      asciiName: 'Destrnik'
    },
    {
      id: 3344927,
      name: 'Občina Trnovska vas',
      asciiName: 'Obcina Trnovska vas'
    },
    {
      id: 3344928,
      name: 'Občina Sveti Andraž v Slovenskih Goricah',
      asciiName: 'Obcina Sveti Andraz v Slovenskih Goricah'
    },
    {
      id: 3344929,
      name: 'Cerkvenjak',
      asciiName: 'Cerkvenjak'
    },
    {
      id: 3344930,
      name: 'Benedikt',
      asciiName: 'Benedikt'
    },
    {
      id: 3344931,
      name: 'Sveta Ana',
      asciiName: 'Sveta Ana'
    },
    {
      id: 3344932,
      name: 'Občina Križevci',
      asciiName: 'Obcina Krizevci'
    },
    {
      id: 3344933,
      name: 'Občina Veržej',
      asciiName: 'Obcina Verzej'
    },
    {
      id: 3344934,
      name: 'Velika Polana',
      asciiName: 'Velika Polana'
    },
    {
      id: 3344935,
      name: 'Lendava',
      asciiName: 'Lendava'
    },
    {
      id: 3344936,
      name: 'Dobrovnik',
      asciiName: 'Dobrovnik'
    },
    {
      id: 3344937,
      name: 'Občina Tišina',
      asciiName: 'Obcina Tisina'
    },
    {
      id: 3344938,
      name: 'Cankova',
      asciiName: 'Cankova'
    },
    {
      id: 3344939,
      name: 'Grad',
      asciiName: 'Grad'
    },
    {
      id: 3344940,
      name: 'Hodos',
      asciiName: 'Hodos'
    },
    {
      id: 3344941,
      name: 'Občina Razkrižje',
      asciiName: 'Obcina Razkrizje'
    },
    {
      id: 3344942,
      name: 'Občina Šmartno pri Litiji',
      asciiName: 'Obcina Smartno pri Litiji'
    },
    {
      id: 3344943,
      name: 'Občina Šalovci',
      asciiName: 'Obcina Salovci'
    },
    {
      id: 8133579,
      name: 'Občina Apače',
      asciiName: 'Obcina Apace'
    },
    {
      id: 8133580,
      name: 'Cirkulane',
      asciiName: 'Cirkulane'
    },
    {
      id: 8133581,
      name: 'Kostanjevica na Krki',
      asciiName: 'Kostanjevica na Krki'
    },
    {
      id: 8133582,
      name: 'Log-Dragomer',
      asciiName: 'Log-Dragomer'
    },
    {
      id: 8133583,
      name: 'Makole',
      asciiName: 'Makole'
    },
    {
      id: 8133584,
      name: 'Mokronog-Trebelno',
      asciiName: 'Mokronog-Trebelno'
    },
    {
      id: 8133585,
      name: 'Občina Poljčane',
      asciiName: 'Obcina Poljcane'
    },
    {
      id: 8133586,
      name: 'Občina Rečica ob Savinji',
      asciiName: 'Obcina Recica ob Savinji'
    },
    {
      id: 8133587,
      name: 'Občina Renče-Vogrsko',
      asciiName: 'Obcina Rence-Vogrsko'
    },
    {
      id: 8133588,
      name: 'Občina Središče ob Dravi',
      asciiName: 'Obcina Sredisce ob Dravi'
    },
    {
      id: 8133589,
      name: 'Občina Straža',
      asciiName: 'Obcina Straza'
    },
    {
      id: 8133590,
      name: 'Sveta Trojica v Slovenskih Goricah',
      asciiName: 'Sveta Trojica v Slovenskih Goricah'
    },
    {
      id: 8133591,
      name: 'Občina Sveti Tomaž',
      asciiName: 'Obcina Sveti Tomaz'
    },
    {
      id: 8133592,
      name: 'Občina Šentrupert',
      asciiName: 'Obcina Sentrupert'
    },
    {
      id: 8133593,
      name: 'Občina Šmarješke Toplice',
      asciiName: 'Obcina Smarjeske Toplice'
    },
    {
      id: 8469236,
      name: 'Sveti Jurij v Slovenskih Goricah',
      asciiName: 'Sveti Jurij v Slovenskih Goricah'
    },
    {
      id: 8986279,
      name: 'Gorje',
      asciiName: 'Gorje'
    }
  ],
  SO: [
    {
      id: 50360,
      name: 'Gobolka Woqooyi Galbeed',
      asciiName: 'Gobolka Woqooyi Galbeed'
    },
    {
      id: 51230,
      name: 'Gobolka Togdheer',
      asciiName: 'Gobolka Togdheer'
    },
    {
      id: 51966,
      name: 'Gobolka Shabeellaha Hoose',
      asciiName: 'Gobolka Shabeellaha Hoose'
    },
    {
      id: 51967,
      name: 'Gobolka Shabeellaha Dhexe',
      asciiName: 'Gobolka Shabeellaha Dhexe'
    },
    {
      id: 52187,
      name: 'Gobolka Sanaag',
      asciiName: 'Gobolka Sanaag'
    },
    {
      id: 53477,
      name: 'Gobolka Nugaal',
      asciiName: 'Gobolka Nugaal'
    },
    {
      id: 53707,
      name: 'Gobolka Mudug',
      asciiName: 'Gobolka Mudug'
    },
    {
      id: 56083,
      name: 'Gobolka Jubbada Hoose',
      asciiName: 'Gobolka Jubbada Hoose'
    },
    {
      id: 56084,
      name: 'Gobolka Jubbada Dhexe',
      asciiName: 'Gobolka Jubbada Dhexe'
    },
    {
      id: 57060,
      name: 'Gobolka Hiiraan',
      asciiName: 'Gobolka Hiiraan'
    },
    {
      id: 58802,
      name: 'Gobolka Gedo',
      asciiName: 'Gobolka Gedo'
    },
    {
      id: 59362,
      name: 'Gobolka Galguduud',
      asciiName: 'Gobolka Galguduud'
    },
    {
      id: 64538,
      name: 'Gobolka Bay',
      asciiName: 'Gobolka Bay'
    },
    {
      id: 64661,
      name: 'Gobolka Bari',
      asciiName: 'Gobolka Bari'
    },
    {
      id: 64833,
      name: 'Gobolka Banaadir',
      asciiName: 'Gobolka Banaadir'
    },
    {
      id: 64982,
      name: 'Gobolka Bakool',
      asciiName: 'Gobolka Bakool'
    },
    {
      id: 6268943,
      name: 'Gobolka Awdal',
      asciiName: 'Gobolka Awdal'
    },
    {
      id: 6268947,
      name: 'Gobolka Sool',
      asciiName: 'Gobolka Sool'
    }
  ],
  ZA: [
    {
      id: 967573,
      name: 'Free State',
      asciiName: 'Free State'
    },
    {
      id: 972062,
      name: 'Province of KwaZulu-Natal',
      asciiName: 'Province of KwaZulu-Natal'
    },
    {
      id: 1085593,
      name: 'Eastern Cape',
      asciiName: 'Eastern Cape'
    },
    {
      id: 1085594,
      name: 'Gauteng',
      asciiName: 'Gauteng'
    },
    {
      id: 1085595,
      name: 'Mpumalanga',
      asciiName: 'Mpumalanga'
    },
    {
      id: 1085596,
      name: 'Province of Northern Cape',
      asciiName: 'Province of Northern Cape'
    },
    {
      id: 1085597,
      name: 'Limpopo',
      asciiName: 'Limpopo'
    },
    {
      id: 1085598,
      name: 'Province of North West',
      asciiName: 'Province of North West'
    },
    {
      id: 1085599,
      name: 'Province of the Western Cape',
      asciiName: 'Province of the Western Cape'
    }
  ],
  SS: [
    {
      id: 381229,
      name: 'Upper Nile',
      asciiName: 'Upper Nile'
    },
    {
      id: 408647,
      name: 'Lakes',
      asciiName: 'Lakes'
    },
    {
      id: 408650,
      name: 'Unity',
      asciiName: 'Unity'
    },
    {
      id: 408655,
      name: 'Central Equatoria State',
      asciiName: 'Central Equatoria State'
    },
    {
      id: 408656,
      name: 'Western Equatoria',
      asciiName: 'Western Equatoria'
    },
    {
      id: 408657,
      name: 'Western Bahr el Ghazal State',
      asciiName: 'Western Bahr el Ghazal State'
    },
    {
      id: 408662,
      name: 'Jonglei',
      asciiName: 'Jonglei'
    },
    {
      id: 408665,
      name: 'Northern Bahr el Ghazal',
      asciiName: 'Northern Bahr el Ghazal'
    },
    {
      id: 408668,
      name: 'Eastern Equatoria',
      asciiName: 'Eastern Equatoria'
    },
    {
      id: 408670,
      name: 'Warrap State',
      asciiName: 'Warrap State'
    }
  ],
  SD: [
    {
      id: 378389,
      name: 'Northern',
      asciiName: 'Northern'
    },
    {
      id: 379253,
      name: 'Khartoum',
      asciiName: 'Khartoum'
    },
    {
      id: 408646,
      name: 'Red Sea',
      asciiName: 'Red Sea'
    },
    {
      id: 408648,
      name: 'Al Jazirah State',
      asciiName: 'Al Jazirah State'
    },
    {
      id: 408649,
      name: 'Al Qadarif State',
      asciiName: 'Al Qadarif State'
    },
    {
      id: 408653,
      name: 'White Nile',
      asciiName: 'White Nile'
    },
    {
      id: 408654,
      name: 'Blue Nile',
      asciiName: 'Blue Nile'
    },
    {
      id: 408658,
      name: 'West Darfur',
      asciiName: 'West Darfur'
    },
    {
      id: 408659,
      name: 'West Kordofan State',
      asciiName: 'West Kordofan State'
    },
    {
      id: 408660,
      name: 'South Darfur',
      asciiName: 'South Darfur'
    },
    {
      id: 408661,
      name: 'South Kordofan',
      asciiName: 'South Kordofan'
    },
    {
      id: 408663,
      name: 'Kassala State',
      asciiName: 'Kassala State'
    },
    {
      id: 408664,
      name: 'River Nile',
      asciiName: 'River Nile'
    },
    {
      id: 408666,
      name: 'North Darfur',
      asciiName: 'North Darfur'
    },
    {
      id: 408667,
      name: 'North Kordofan',
      asciiName: 'North Kordofan'
    },
    {
      id: 408669,
      name: 'Sinnar State',
      asciiName: 'Sinnar State'
    },
    {
      id: 8394435,
      name: 'East Darfur',
      asciiName: 'East Darfur'
    },
    {
      id: 8394436,
      name: 'Central Darfur State',
      asciiName: 'Central Darfur State'
    }
  ],
  SR: [
    {
      id: 3382761,
      name: 'Distrikt Wanica',
      asciiName: 'Distrikt Wanica'
    },
    {
      id: 3383062,
      name: 'Distrikt Sipaliwini',
      asciiName: 'Distrikt Sipaliwini'
    },
    {
      id: 3383110,
      name: 'Distrikt Saramacca',
      asciiName: 'Distrikt Saramacca'
    },
    {
      id: 3383329,
      name: 'Distrikt Paramaribo',
      asciiName: 'Distrikt Paramaribo'
    },
    {
      id: 3383337,
      name: 'Distrikt Para',
      asciiName: 'Distrikt Para'
    },
    {
      id: 3383438,
      name: 'Distrikt Nickerie',
      asciiName: 'Distrikt Nickerie'
    },
    {
      id: 3383560,
      name: 'Distrikt Marowijne',
      asciiName: 'Distrikt Marowijne'
    },
    {
      id: 3384397,
      name: 'Distrikt Coronie',
      asciiName: 'Distrikt Coronie'
    },
    {
      id: 3384418,
      name: 'Distrikt Commewijne',
      asciiName: 'Distrikt Commewijne'
    },
    {
      id: 3384481,
      name: 'Distrikt Brokopondo',
      asciiName: 'Distrikt Brokopondo'
    }
  ],
  SZ: [
    {
      id: 934867,
      name: 'Shiselweni District',
      asciiName: 'Shiselweni District'
    },
    {
      id: 934994,
      name: 'Manzini District',
      asciiName: 'Manzini District'
    },
    {
      id: 935042,
      name: 'Lubombo District',
      asciiName: 'Lubombo District'
    },
    {
      id: 935085,
      name: 'Hhohho District',
      asciiName: 'Hhohho District'
    }
  ],
  TZ: [
    {
      id: 148679,
      name: 'Kagera Region',
      asciiName: 'Kagera Region'
    },
    {
      id: 148724,
      name: 'Zanzibar Urban/West Region',
      asciiName: 'Zanzibar Urban/West Region'
    },
    {
      id: 148725,
      name: 'Zanzibar North Region',
      asciiName: 'Zanzibar North Region'
    },
    {
      id: 148728,
      name: 'Zanzibar Central/South Region',
      asciiName: 'Zanzibar Central/South Region'
    },
    {
      id: 149595,
      name: 'Tanga Region',
      asciiName: 'Tanga Region'
    },
    {
      id: 149653,
      name: 'Tabora Region',
      asciiName: 'Tabora Region'
    },
    {
      id: 149876,
      name: 'Singida Region',
      asciiName: 'Singida Region'
    },
    {
      id: 150004,
      name: 'Shinyanga Region',
      asciiName: 'Shinyanga Region'
    },
    {
      id: 150442,
      name: 'Rukwa Region',
      asciiName: 'Rukwa Region'
    },
    {
      id: 150602,
      name: 'Coast Region',
      asciiName: 'Coast Region'
    },
    {
      id: 150732,
      name: 'Pemba South Region',
      asciiName: 'Pemba South Region'
    },
    {
      id: 150733,
      name: 'Pemba North Region',
      asciiName: 'Pemba North Region'
    },
    {
      id: 152219,
      name: 'Mwanza Region',
      asciiName: 'Mwanza Region'
    },
    {
      id: 153214,
      name: 'Morogoro Region',
      asciiName: 'Morogoro Region'
    },
    {
      id: 154375,
      name: 'Mbeya Region',
      asciiName: 'Mbeya Region'
    },
    {
      id: 154775,
      name: 'Mara Region',
      asciiName: 'Mara Region'
    },
    {
      id: 155946,
      name: 'Lindi Region',
      asciiName: 'Lindi Region'
    },
    {
      id: 157449,
      name: 'Kilimanjaro Region',
      asciiName: 'Kilimanjaro Region'
    },
    {
      id: 157732,
      name: 'Kigoma Region',
      asciiName: 'Kigoma Region'
    },
    {
      id: 159067,
      name: 'Iringa Region',
      asciiName: 'Iringa Region'
    },
    {
      id: 160192,
      name: 'Dodoma Region',
      asciiName: 'Dodoma Region'
    },
    {
      id: 160260,
      name: 'Dar es Salaam Region',
      asciiName: 'Dar es Salaam Region'
    },
    {
      id: 161322,
      name: 'Arusha Region',
      asciiName: 'Arusha Region'
    },
    {
      id: 435764,
      name: 'Manyara Region',
      asciiName: 'Manyara Region'
    },
    {
      id: 877416,
      name: 'Ruvuma Region',
      asciiName: 'Ruvuma Region'
    },
    {
      id: 877744,
      name: 'Mtwara Region',
      asciiName: 'Mtwara Region'
    },
    {
      id: 8469238,
      name: 'Simiyu Region',
      asciiName: 'Simiyu Region'
    },
    {
      id: 8469239,
      name: 'Geita Region',
      asciiName: 'Geita Region'
    },
    {
      id: 8469240,
      name: 'Katavi Region',
      asciiName: 'Katavi Region'
    },
    {
      id: 8469241,
      name: 'Njombe Region',
      asciiName: 'Njombe Region'
    }
  ],
  TH: [
    {
      id: 1149965,
      name: 'Changwat Uthai Thani',
      asciiName: 'Changwat Uthai Thani'
    },
    {
      id: 1150006,
      name: 'Changwat Trang',
      asciiName: 'Changwat Trang'
    },
    {
      id: 1150489,
      name: 'Changwat Tak',
      asciiName: 'Changwat Tak'
    },
    {
      id: 1150514,
      name: 'Changwat Surat Thani',
      asciiName: 'Changwat Surat Thani'
    },
    {
      id: 1150532,
      name: 'Changwat Sukhothai',
      asciiName: 'Changwat Sukhothai'
    },
    {
      id: 1150953,
      name: 'Changwat Ratchaburi',
      asciiName: 'Changwat Ratchaburi'
    },
    {
      id: 1150964,
      name: 'Changwat Ranong',
      asciiName: 'Changwat Ranong'
    },
    {
      id: 1151073,
      name: 'Changwat Prachuap Khiri Khan',
      asciiName: 'Changwat Prachuap Khiri Khan'
    },
    {
      id: 1151253,
      name: 'Phuket Province',
      asciiName: 'Phuket Province'
    },
    {
      id: 1151416,
      name: 'Changwat Phetchaburi',
      asciiName: 'Changwat Phetchaburi'
    },
    {
      id: 1151462,
      name: 'Changwat Phangnga',
      asciiName: 'Changwat Phangnga'
    },
    {
      id: 1152221,
      name: 'Changwat Mae Hong Son',
      asciiName: 'Changwat Mae Hong Son'
    },
    {
      id: 1152467,
      name: 'Changwat Lamphun',
      asciiName: 'Changwat Lamphun'
    },
    {
      id: 1152472,
      name: 'Changwat Lampang',
      asciiName: 'Changwat Lampang'
    },
    {
      id: 1152631,
      name: 'Changwat Krabi',
      asciiName: 'Changwat Krabi'
    },
    {
      id: 1153080,
      name: 'Changwat Kanchanaburi',
      asciiName: 'Changwat Kanchanaburi'
    },
    {
      id: 1153089,
      name: 'Changwat Kamphaeng Phet',
      asciiName: 'Changwat Kamphaeng Phet'
    },
    {
      id: 1153555,
      name: 'Changwat Chumphon',
      asciiName: 'Changwat Chumphon'
    },
    {
      id: 1153668,
      name: 'Changwat Chiang Rai',
      asciiName: 'Changwat Chiang Rai'
    },
    {
      id: 1153670,
      name: 'Chiang Mai Province',
      asciiName: 'Chiang Mai Province'
    },
    {
      id: 1604767,
      name: 'Changwat Yasothon',
      asciiName: 'Changwat Yasothon'
    },
    {
      id: 1604869,
      name: 'Changwat Yala',
      asciiName: 'Changwat Yala'
    },
    {
      id: 1605214,
      name: 'Changwat Uttaradit',
      asciiName: 'Changwat Uttaradit'
    },
    {
      id: 1605277,
      name: 'Changwat Trat',
      asciiName: 'Changwat Trat'
    },
    {
      id: 1606029,
      name: 'Changwat Surin',
      asciiName: 'Changwat Surin'
    },
    {
      id: 1606032,
      name: 'Changwat Suphan Buri',
      asciiName: 'Changwat Suphan Buri'
    },
    {
      id: 1606146,
      name: 'Changwat Songkhla',
      asciiName: 'Changwat Songkhla'
    },
    {
      id: 1606238,
      name: 'Changwat Sisaket',
      asciiName: 'Changwat Sisaket'
    },
    {
      id: 1606269,
      name: 'Changwat Sing Buri',
      asciiName: 'Changwat Sing Buri'
    },
    {
      id: 1606375,
      name: 'Changwat Satun',
      asciiName: 'Changwat Satun'
    },
    {
      id: 1606417,
      name: 'Changwat Sara Buri',
      asciiName: 'Changwat Sara Buri'
    },
    {
      id: 1606585,
      name: 'Changwat Samut Songkhram',
      asciiName: 'Changwat Samut Songkhram'
    },
    {
      id: 1606587,
      name: 'Changwat Samut Sakhon',
      asciiName: 'Changwat Samut Sakhon'
    },
    {
      id: 1606589,
      name: 'Changwat Samut Prakan',
      asciiName: 'Changwat Samut Prakan'
    },
    {
      id: 1606789,
      name: 'Changwat Sakon Nakhon',
      asciiName: 'Changwat Sakon Nakhon'
    },
    {
      id: 1607000,
      name: 'Changwat Roi Et',
      asciiName: 'Changwat Roi Et'
    },
    {
      id: 1607016,
      name: 'Changwat Rayong',
      asciiName: 'Changwat Rayong'
    },
    {
      id: 1607530,
      name: 'Changwat Phra Nakhon Si Ayutthaya',
      asciiName: 'Changwat Phra Nakhon Si Ayutthaya'
    },
    {
      id: 1607551,
      name: 'Changwat Phrae',
      asciiName: 'Changwat Phrae'
    },
    {
      id: 1607707,
      name: 'Changwat Phitsanulok',
      asciiName: 'Changwat Phitsanulok'
    },
    {
      id: 1607724,
      name: 'Changwat Phichit',
      asciiName: 'Changwat Phichit'
    },
    {
      id: 1607736,
      name: 'Changwat Phetchabun',
      asciiName: 'Changwat Phetchabun'
    },
    {
      id: 1607758,
      name: 'Changwat Phayao',
      asciiName: 'Changwat Phayao'
    },
    {
      id: 1607778,
      name: 'Changwat Phatthalung',
      asciiName: 'Changwat Phatthalung'
    },
    {
      id: 1607976,
      name: 'Changwat Pattani',
      asciiName: 'Changwat Pattani'
    },
    {
      id: 1607982,
      name: 'Changwat Pathum Thani',
      asciiName: 'Changwat Pathum Thani'
    },
    {
      id: 1608132,
      name: 'Changwat Nonthaburi',
      asciiName: 'Changwat Nonthaburi'
    },
    {
      id: 1608231,
      name: 'Changwat Nong Khai',
      asciiName: 'Changwat Nong Khai'
    },
    {
      id: 1608408,
      name: 'Changwat Narathiwat',
      asciiName: 'Changwat Narathiwat'
    },
    {
      id: 1608451,
      name: 'Changwat Nan',
      asciiName: 'Changwat Nan'
    },
    {
      id: 1608525,
      name: 'Changwat Nakhon Si Thammarat',
      asciiName: 'Changwat Nakhon Si Thammarat'
    },
    {
      id: 1608526,
      name: 'Changwat Nakhon Sawan',
      asciiName: 'Changwat Nakhon Sawan'
    },
    {
      id: 1608528,
      name: 'Changwat Nakhon Ratchasima',
      asciiName: 'Changwat Nakhon Ratchasima'
    },
    {
      id: 1608530,
      name: 'Changwat Nakhon Phanom',
      asciiName: 'Changwat Nakhon Phanom'
    },
    {
      id: 1608533,
      name: 'Changwat Nakhon Pathom',
      asciiName: 'Changwat Nakhon Pathom'
    },
    {
      id: 1608538,
      name: 'Changwat Nakhon Nayok',
      asciiName: 'Changwat Nakhon Nayok'
    },
    {
      id: 1608595,
      name: 'Changwat Mukdahan',
      asciiName: 'Changwat Mukdahan'
    },
    {
      id: 1608899,
      name: 'Changwat Maha Sarakham',
      asciiName: 'Changwat Maha Sarakham'
    },
    {
      id: 1609031,
      name: 'Changwat Lop Buri',
      asciiName: 'Changwat Lop Buri'
    },
    {
      id: 1609070,
      name: 'Changwat Loei',
      asciiName: 'Changwat Loei'
    },
    {
      id: 1609348,
      name: 'Bangkok',
      asciiName: 'Bangkok'
    },
    {
      id: 1609775,
      name: 'Changwat Khon Kaen',
      asciiName: 'Changwat Khon Kaen'
    },
    {
      id: 1610468,
      name: 'Changwat Kalasin',
      asciiName: 'Changwat Kalasin'
    },
    {
      id: 1611108,
      name: 'Changwat Chon Buri',
      asciiName: 'Changwat Chon Buri'
    },
    {
      id: 1611268,
      name: 'Changwat Chanthaburi',
      asciiName: 'Changwat Chanthaburi'
    },
    {
      id: 1611406,
      name: 'Changwat Chaiyaphum',
      asciiName: 'Changwat Chaiyaphum'
    },
    {
      id: 1611415,
      name: 'Changwat Chai Nat',
      asciiName: 'Changwat Chai Nat'
    },
    {
      id: 1611438,
      name: 'Changwat Chachoengsao',
      asciiName: 'Changwat Chachoengsao'
    },
    {
      id: 1611452,
      name: 'Changwat Buriram',
      asciiName: 'Changwat Buriram'
    },
    {
      id: 1621034,
      name: 'Changwat Ang Thong',
      asciiName: 'Changwat Ang Thong'
    },
    {
      id: 1906686,
      name: 'Changwat Udon Thani',
      asciiName: 'Changwat Udon Thani'
    },
    {
      id: 1906687,
      name: 'Changwat Prachin Buri',
      asciiName: 'Changwat Prachin Buri'
    },
    {
      id: 1906688,
      name: 'Changwat Ubon Ratchathani',
      asciiName: 'Changwat Ubon Ratchathani'
    },
    {
      id: 1906689,
      name: 'Changwat Amnat Charoen',
      asciiName: 'Changwat Amnat Charoen'
    },
    {
      id: 1906690,
      name: 'Changwat Nong Bua Lamphu',
      asciiName: 'Changwat Nong Bua Lamphu'
    },
    {
      id: 1906691,
      name: 'Changwat Sa Kaeo',
      asciiName: 'Changwat Sa Kaeo'
    },
    {
      id: 8133594,
      name: 'Changwat Bueng Kan',
      asciiName: 'Changwat Bueng Kan'
    }
  ],
  TG: [
    {
      id: 2364205,
      name: 'Savanes',
      asciiName: 'Savanes'
    },
    {
      id: 2364370,
      name: 'Plateaux',
      asciiName: 'Plateaux'
    },
    {
      id: 2365173,
      name: 'Maritime',
      asciiName: 'Maritime'
    },
    {
      id: 2367237,
      name: 'Centrale',
      asciiName: 'Centrale'
    },
    {
      id: 2597439,
      name: 'Kara',
      asciiName: 'Kara'
    }
  ],
  TN: [
    {
      id: 2464038,
      name: 'Gouvernorat de Zaghouan',
      asciiName: 'Gouvernorat de Zaghouan'
    },
    {
      id: 2464464,
      name: 'Gouvernorat de Tunis',
      asciiName: 'Gouvernorat de Tunis'
    },
    {
      id: 2464645,
      name: 'Gouvernorat de Tozeur',
      asciiName: 'Gouvernorat de Tozeur'
    },
    {
      id: 2464698,
      name: 'Tataouine',
      asciiName: 'Tataouine'
    },
    {
      id: 2464912,
      name: 'Gouvernorat de Sousse',
      asciiName: 'Gouvernorat de Sousse'
    },
    {
      id: 2465027,
      name: 'Gouvernorat de Siliana',
      asciiName: 'Gouvernorat de Siliana'
    },
    {
      id: 2465837,
      name: 'Gouvernorat de Sidi Bouzid',
      asciiName: 'Gouvernorat de Sidi Bouzid'
    },
    {
      id: 2467450,
      name: 'Gouvernorat de Sfax',
      asciiName: 'Gouvernorat de Sfax'
    },
    {
      id: 2468014,
      name: 'Gouvernorat de Kébili',
      asciiName: 'Gouvernorat de Kebili'
    },
    {
      id: 2468351,
      name: 'Gafsa Governorate',
      asciiName: 'Gafsa Governorate'
    },
    {
      id: 2468365,
      name: 'Gouvernorat de Gabès',
      asciiName: 'Gouvernorat de Gabes'
    },
    {
      id: 2468576,
      name: 'Gouvernorat de Nabeul',
      asciiName: 'Gouvernorat de Nabeul'
    },
    {
      id: 2469470,
      name: 'Gouvernorat de Médenine',
      asciiName: 'Gouvernorat de Medenine'
    },
    {
      id: 2470085,
      name: 'Gouvernorat de Jendouba',
      asciiName: 'Gouvernorat de Jendouba'
    },
    {
      id: 2472477,
      name: 'Gouvernorat de Ben Arous',
      asciiName: 'Gouvernorat de Ben Arous'
    },
    {
      id: 2472699,
      name: 'Gouvernorat de Bizerte',
      asciiName: 'Gouvernorat de Bizerte'
    },
    {
      id: 2472770,
      name: 'Gouvernorat de Béja',
      asciiName: 'Gouvernorat de Beja'
    },
    {
      id: 2473245,
      name: 'Gouvernorat de l’Ariana',
      asciiName: 'Gouvernorat de l\'Ariana'
    },
    {
      id: 2473451,
      name: 'Gouvernorat de Kairouan',
      asciiName: 'Gouvernorat de Kairouan'
    },
    {
      id: 2473460,
      name: 'Gouvernorat de Kasserine',
      asciiName: 'Gouvernorat de Kasserine'
    },
    {
      id: 2473495,
      name: 'Gouvernorat de Monastir',
      asciiName: 'Gouvernorat de Monastir'
    },
    {
      id: 2473574,
      name: 'Gouvernorat de Mahdia',
      asciiName: 'Gouvernorat de Mahdia'
    },
    {
      id: 2473637,
      name: 'Gouvernorat de Kef',
      asciiName: 'Gouvernorat de Kef'
    },
    {
      id: 6201192,
      name: 'Manouba',
      asciiName: 'Manouba'
    }
  ],
  UG: [
    {
      id: 234594,
      name: 'Central Region',
      asciiName: 'Central Region'
    },
    {
      id: 8260673,
      name: 'Eastern Region',
      asciiName: 'Eastern Region'
    },
    {
      id: 8260674,
      name: 'Northern Region',
      asciiName: 'Northern Region'
    },
    {
      id: 8260675,
      name: 'Western Region',
      asciiName: 'Western Region'
    }
  ],
  UY: [
    {
      id: 3439780,
      name: 'Departamento de Treinta y Tres',
      asciiName: 'Departamento de Treinta y Tres'
    },
    {
      id: 3440033,
      name: 'Departamento de Tacuarembó',
      asciiName: 'Departamento de Tacuarembo'
    },
    {
      id: 3440054,
      name: 'Departamento de Soriano',
      asciiName: 'Departamento de Soriano'
    },
    {
      id: 3440645,
      name: 'Departamento de San José',
      asciiName: 'Departamento de San Jose'
    },
    {
      id: 3440711,
      name: 'Departamento de Salto',
      asciiName: 'Departamento de Salto'
    },
    {
      id: 3440771,
      name: 'Departamento de Rocha',
      asciiName: 'Departamento de Rocha'
    },
    {
      id: 3440780,
      name: 'Departamento de Rivera',
      asciiName: 'Departamento de Rivera'
    },
    {
      id: 3440789,
      name: 'Departamento de Río Negro',
      asciiName: 'Departamento de Rio Negro'
    },
    {
      id: 3441242,
      name: 'Departamento de Paysandú',
      asciiName: 'Departamento de Paysandu'
    },
    {
      id: 3441572,
      name: 'Departamento de Montevideo',
      asciiName: 'Departamento de Montevideo'
    },
    {
      id: 3441890,
      name: 'Departamento de Maldonado',
      asciiName: 'Departamento de Maldonado'
    },
    {
      id: 3442007,
      name: 'Departamento de Lavalleja',
      asciiName: 'Departamento de Lavalleja'
    },
    {
      id: 3442584,
      name: 'Departamento de Florida',
      asciiName: 'Departamento de Florida'
    },
    {
      id: 3442587,
      name: 'Departamento de Flores',
      asciiName: 'Departamento de Flores'
    },
    {
      id: 3442720,
      name: 'Departamento de Durazno',
      asciiName: 'Departamento de Durazno'
    },
    {
      id: 3443025,
      name: 'Departamento de Colonia',
      asciiName: 'Departamento de Colonia'
    },
    {
      id: 3443173,
      name: 'Departamento de Cerro Largo',
      asciiName: 'Departamento de Cerro Largo'
    },
    {
      id: 3443411,
      name: 'Departamento de Canelones',
      asciiName: 'Departamento de Canelones'
    },
    {
      id: 3443756,
      name: 'Departamento de Artigas',
      asciiName: 'Departamento de Artigas'
    }
  ],
  VE: [
    {
      id: 3625035,
      name: 'Estado Zulia',
      asciiName: 'Estado Zulia'
    },
    {
      id: 3625210,
      name: 'Estado Yaracuy',
      asciiName: 'Estado Yaracuy'
    },
    {
      id: 3625974,
      name: 'Estado Trujillo',
      asciiName: 'Estado Trujillo'
    },
    {
      id: 3626553,
      name: 'Estado Táchira',
      asciiName: 'Estado Tachira'
    },
    {
      id: 3626655,
      name: 'Estado Sucre',
      asciiName: 'Estado Sucre'
    },
    {
      id: 3629941,
      name: 'Estado Portuguesa',
      asciiName: 'Estado Portuguesa'
    },
    {
      id: 3631462,
      name: 'Estado Nueva Esparta',
      asciiName: 'Estado Nueva Esparta'
    },
    {
      id: 3632100,
      name: 'Estado Monagas',
      asciiName: 'Estado Monagas'
    },
    {
      id: 3632191,
      name: 'Miranda',
      asciiName: 'Miranda'
    },
    {
      id: 3632306,
      name: 'Estado Mérida',
      asciiName: 'Estado Merida'
    },
    {
      id: 3636539,
      name: 'Estado Lara',
      asciiName: 'Estado Lara'
    },
    {
      id: 3640017,
      name: 'Estado Guárico',
      asciiName: 'Estado Guarico'
    },
    {
      id: 3640846,
      name: 'Dependencias Federales',
      asciiName: 'Dependencias Federales'
    },
    {
      id: 3640847,
      name: 'Distrito Capital',
      asciiName: 'Distrito Capital'
    },
    {
      id: 3640873,
      name: 'Estado Falcón',
      asciiName: 'Estado Falcon'
    },
    {
      id: 3644541,
      name: 'Delta Amacuro',
      asciiName: 'Delta Amacuro'
    },
    {
      id: 3645386,
      name: 'Estado Cojedes',
      asciiName: 'Estado Cojedes'
    },
    {
      id: 3646751,
      name: 'Estado Carabobo',
      asciiName: 'Estado Carabobo'
    },
    {
      id: 3648106,
      name: 'Estado Bolívar',
      asciiName: 'Estado Bolivar'
    },
    {
      id: 3648544,
      name: 'Estado Barinas',
      asciiName: 'Estado Barinas'
    },
    {
      id: 3649110,
      name: 'Estado Aragua',
      asciiName: 'Estado Aragua'
    },
    {
      id: 3649151,
      name: 'Estado Apure',
      asciiName: 'Estado Apure'
    },
    {
      id: 3649198,
      name: 'Estado Anzoátegui',
      asciiName: 'Estado Anzoategui'
    },
    {
      id: 3649302,
      name: 'Estado Amazonas',
      asciiName: 'Estado Amazonas'
    },
    {
      id: 3830309,
      name: 'Estado Vargas',
      asciiName: 'Estado Vargas'
    }
  ],
  VN: [
    {
      id: 1559969,
      name: 'Tỉnh Nghệ An',
      asciiName: 'Tinh Nghe An'
    },
    {
      id: 1559970,
      name: 'Tỉnh Ninh Bình',
      asciiName: 'Tinh Ninh Binh'
    },
    {
      id: 1559971,
      name: 'Tỉnh Ninh Thuận',
      asciiName: 'Tinh Ninh Thuan'
    },
    {
      id: 1559972,
      name: 'Tỉnh Sóc Trăng',
      asciiName: 'Tinh Soc Trang'
    },
    {
      id: 1559975,
      name: 'Tỉnh Trà Vinh',
      asciiName: 'Tinh Tra Vinh'
    },
    {
      id: 1559976,
      name: 'Tỉnh Tuyên Quang',
      asciiName: 'Tinh Tuyen Quang'
    },
    {
      id: 1559977,
      name: 'Tỉnh Vĩnh Long',
      asciiName: 'Tinh Vinh Long'
    },
    {
      id: 1559978,
      name: 'Tỉnh Yên Bái',
      asciiName: 'Tinh Yen Bai'
    },
    {
      id: 1562412,
      name: 'Tỉnh Lào Cai',
      asciiName: 'Tinh Lao Cai'
    },
    {
      id: 1564676,
      name: 'Tỉnh Tiền Giang',
      asciiName: 'Tinh Tien Giang'
    },
    {
      id: 1565033,
      name: 'Tỉnh Thừa Thiên-Huế',
      asciiName: 'Tinh Thua Thien-Hue'
    },
    {
      id: 1565088,
      name: 'Kon Tum',
      asciiName: 'Kon Tum'
    },
    {
      id: 1566165,
      name: 'Tỉnh Thanh Hóa',
      asciiName: 'Tinh Thanh Hoa'
    },
    {
      id: 1566338,
      name: 'Tỉnh Thái Bình',
      asciiName: 'Tinh Thai Binh'
    },
    {
      id: 1566557,
      name: 'Tỉnh Tây Ninh',
      asciiName: 'Tinh Tay Ninh'
    },
    {
      id: 1567643,
      name: 'Tỉnh Sơn La',
      asciiName: 'Tinh Son La'
    },
    {
      id: 1568733,
      name: 'Tỉnh Quảng Trị',
      asciiName: 'Tinh Quang Tri'
    },
    {
      id: 1568758,
      name: 'Tỉnh Quảng Ninh',
      asciiName: 'Tinh Quang Ninh'
    },
    {
      id: 1568769,
      name: 'Tỉnh Quảng Ngãi',
      asciiName: 'Tinh Quang Ngai'
    },
    {
      id: 1568839,
      name: 'Tỉnh Quảng Bình',
      asciiName: 'Tinh Quang Binh'
    },
    {
      id: 1569805,
      name: 'Tỉnh Phú Yên',
      asciiName: 'Tinh Phu Yen'
    },
    {
      id: 1572594,
      name: 'Tỉnh Hòa Bình',
      asciiName: 'Tinh Hoa Binh'
    },
    {
      id: 1575788,
      name: 'Long An',
      asciiName: 'Long An'
    },
    {
      id: 1576632,
      name: 'Tỉnh Lạng Sơn',
      asciiName: 'Tinh Lang Son'
    },
    {
      id: 1577882,
      name: 'Tỉnh Lâm Đồng',
      asciiName: 'Tinh Lam GJong'
    },
    {
      id: 1577954,
      name: 'Tỉnh Lai Châu',
      asciiName: 'Tinh Lai Chau'
    },
    {
      id: 1579008,
      name: 'Tỉnh Kiến Giang',
      asciiName: 'Tinh Kien Giang'
    },
    {
      id: 1579634,
      name: 'Tỉnh Khánh Hòa',
      asciiName: 'Tinh Khanh Hoa'
    },
    {
      id: 1580578,
      name: 'Ho Chi Minh City',
      asciiName: 'Ho Chi Minh City'
    },
    {
      id: 1580700,
      name: 'Tỉnh Hà Tĩnh',
      asciiName: 'Tinh Ha Tinh'
    },
    {
      id: 1581030,
      name: 'Tỉnh Hà Giang',
      asciiName: 'Tinh Ha Giang'
    },
    {
      id: 1581088,
      name: 'Gia Lai',
      asciiName: 'Gia Lai'
    },
    {
      id: 1581129,
      name: 'Thành Phố Hà Nội',
      asciiName: 'Thanh Pho Ha Noi'
    },
    {
      id: 1581188,
      name: 'Thành Phố Cần Thơ',
      asciiName: 'Thanh Pho Can Tho'
    },
    {
      id: 1581297,
      name: 'Thành Phố Hải Phòng',
      asciiName: 'Thanh Pho Hai Phong'
    },
    {
      id: 1581882,
      name: 'Tỉnh Bình Thuận',
      asciiName: 'Tinh Binh Thuan'
    },
    {
      id: 1582562,
      name: 'Tỉnh Đồng Tháp',
      asciiName: 'Tinh GJong Thap'
    },
    {
      id: 1582720,
      name: 'Tỉnh Đồng Nai',
      asciiName: 'Tinh GJong Nai'
    },
    {
      id: 1584169,
      name: 'Tỉnh Đắk Lắk',
      asciiName: 'Tinh GJak Lak'
    },
    {
      id: 1584534,
      name: 'Tỉnh Bà Rịa-Vũng Tàu',
      asciiName: 'Tinh Ba Ria-Vung Tau'
    },
    {
      id: 1586182,
      name: 'Tỉnh Cao Bằng',
      asciiName: 'Tinh Cao Bang'
    },
    {
      id: 1587871,
      name: 'Tỉnh Bình Định',
      asciiName: 'Tinh Binh GJinh'
    },
    {
      id: 1587974,
      name: 'Tỉnh Bến Tre',
      asciiName: 'Tinh Ben Tre'
    },
    {
      id: 1594446,
      name: 'An Giang',
      asciiName: 'An Giang'
    },
    {
      id: 1904987,
      name: 'Ðắk Nông',
      asciiName: 'Dak Nong'
    },
    {
      id: 1905099,
      name: 'Tỉnh Ðiện Biên',
      asciiName: 'Tinh Dien Bien'
    },
    {
      id: 1905412,
      name: 'Tỉnh Bắc Ninh',
      asciiName: 'Tinh Bac Ninh'
    },
    {
      id: 1905419,
      name: 'Tỉnh Bắc Giang',
      asciiName: 'Tinh Bac Giang'
    },
    {
      id: 1905468,
      name: 'Thành Phố Đà Nẵng',
      asciiName: 'Thanh Pho GJa Nang'
    },
    {
      id: 1905475,
      name: 'Tỉnh Bình Dương',
      asciiName: 'Tinh Binh Duong'
    },
    {
      id: 1905480,
      name: 'Tỉnh Bình Phước',
      asciiName: 'Tinh Binh Phuoc'
    },
    {
      id: 1905497,
      name: 'Tỉnh Thái Nguyên',
      asciiName: 'Tinh Thai Nguyen'
    },
    {
      id: 1905516,
      name: 'Tỉnh Quảng Nam',
      asciiName: 'Tinh Quang Nam'
    },
    {
      id: 1905577,
      name: 'Tỉnh Phú Thọ',
      asciiName: 'Tinh Phu Tho'
    },
    {
      id: 1905626,
      name: 'Tỉnh Nam Định',
      asciiName: 'Tinh Nam GJinh'
    },
    {
      id: 1905637,
      name: 'Tỉnh Hà Nam',
      asciiName: 'Tinh Ha Nam'
    },
    {
      id: 1905669,
      name: 'Tỉnh Bắc Kạn',
      asciiName: 'Tinh Bac Kan'
    },
    {
      id: 1905675,
      name: 'Tỉnh Bạc Liêu',
      asciiName: 'Tinh Bac Lieu'
    },
    {
      id: 1905678,
      name: 'Tỉnh Cà Mau',
      asciiName: 'Tinh Ca Mau'
    },
    {
      id: 1905686,
      name: 'Tỉnh Hải Dương',
      asciiName: 'Tinh Hai Duong'
    },
    {
      id: 1905699,
      name: 'Tỉnh Hưng Yên',
      asciiName: 'Tinh Hung Yen'
    },
    {
      id: 1905856,
      name: 'Tỉnh Vĩnh Phúc',
      asciiName: 'Tinh Vinh Phuc'
    },
    {
      id: 7506719,
      name: 'Hau Giang',
      asciiName: 'Hau Giang'
    }
  ],
  GB: [
    {
      id: 2634895,
      name: 'Wales',
      asciiName: 'Wales'
    },
    {
      id: 2638360,
      name: 'Scotland',
      asciiName: 'Scotland'
    },
    {
      id: 2641364,
      name: 'Northern Ireland',
      asciiName: 'Northern Ireland'
    },
    {
      id: 6269131,
      name: 'England',
      asciiName: 'England'
    }
  ],
  US: [
    {
      id: 4099753,
      name: 'Arkansas',
      asciiName: 'Arkansas'
    },
    {
      id: 4138106,
      name: 'District of Columbia',
      asciiName: 'District of Columbia'
    },
    {
      id: 4142224,
      name: 'Delaware',
      asciiName: 'Delaware'
    },
    {
      id: 4155751,
      name: 'Florida',
      asciiName: 'Florida'
    },
    {
      id: 4197000,
      name: 'Georgia',
      asciiName: 'Georgia'
    },
    {
      id: 4273857,
      name: 'Kansas',
      asciiName: 'Kansas'
    },
    {
      id: 4331987,
      name: 'Louisiana',
      asciiName: 'Louisiana'
    },
    {
      id: 4361885,
      name: 'Maryland',
      asciiName: 'Maryland'
    },
    {
      id: 4398678,
      name: 'Missouri',
      asciiName: 'Missouri'
    },
    {
      id: 4436296,
      name: 'Mississippi',
      asciiName: 'Mississippi'
    },
    {
      id: 4482348,
      name: 'North Carolina',
      asciiName: 'North Carolina'
    },
    {
      id: 4544379,
      name: 'Oklahoma',
      asciiName: 'Oklahoma'
    },
    {
      id: 4597040,
      name: 'South Carolina',
      asciiName: 'South Carolina'
    },
    {
      id: 4662168,
      name: 'Tennessee',
      asciiName: 'Tennessee'
    },
    {
      id: 4736286,
      name: 'Texas',
      asciiName: 'Texas'
    },
    {
      id: 4826850,
      name: 'West Virginia',
      asciiName: 'West Virginia'
    },
    {
      id: 4829764,
      name: 'Alabama',
      asciiName: 'Alabama'
    },
    {
      id: 4831725,
      name: 'Connecticut',
      asciiName: 'Connecticut'
    },
    {
      id: 4862182,
      name: 'Iowa',
      asciiName: 'Iowa'
    },
    {
      id: 4896861,
      name: 'Illinois',
      asciiName: 'Illinois'
    },
    {
      id: 4921868,
      name: 'Indiana',
      asciiName: 'Indiana'
    },
    {
      id: 4971068,
      name: 'Maine',
      asciiName: 'Maine'
    },
    {
      id: 5001836,
      name: 'Michigan',
      asciiName: 'Michigan'
    },
    {
      id: 5037779,
      name: 'Minnesota',
      asciiName: 'Minnesota'
    },
    {
      id: 5073708,
      name: 'Nebraska',
      asciiName: 'Nebraska'
    },
    {
      id: 5090174,
      name: 'New Hampshire',
      asciiName: 'New Hampshire'
    },
    {
      id: 5101760,
      name: 'New Jersey',
      asciiName: 'New Jersey'
    },
    {
      id: 5128638,
      name: 'New York',
      asciiName: 'New York'
    },
    {
      id: 5165418,
      name: 'Ohio',
      asciiName: 'Ohio'
    },
    {
      id: 5224323,
      name: 'Rhode Island',
      asciiName: 'Rhode Island'
    },
    {
      id: 5242283,
      name: 'Vermont',
      asciiName: 'Vermont'
    },
    {
      id: 5279468,
      name: 'Wisconsin',
      asciiName: 'Wisconsin'
    },
    {
      id: 5332921,
      name: 'California',
      asciiName: 'California'
    },
    {
      id: 5417618,
      name: 'Colorado',
      asciiName: 'Colorado'
    },
    {
      id: 5481136,
      name: 'New Mexico',
      asciiName: 'New Mexico'
    },
    {
      id: 5509151,
      name: 'Nevada',
      asciiName: 'Nevada'
    },
    {
      id: 5549030,
      name: 'Utah',
      asciiName: 'Utah'
    },
    {
      id: 5551752,
      name: 'Arizona',
      asciiName: 'Arizona'
    },
    {
      id: 5596512,
      name: 'Idaho',
      asciiName: 'Idaho'
    },
    {
      id: 5667009,
      name: 'Montana',
      asciiName: 'Montana'
    },
    {
      id: 5690763,
      name: 'North Dakota',
      asciiName: 'North Dakota'
    },
    {
      id: 5744337,
      name: 'Oregon',
      asciiName: 'Oregon'
    },
    {
      id: 5769223,
      name: 'South Dakota',
      asciiName: 'South Dakota'
    },
    {
      id: 5815135,
      name: 'Washington',
      asciiName: 'Washington'
    },
    {
      id: 5843591,
      name: 'Wyoming',
      asciiName: 'Wyoming'
    },
    {
      id: 5855797,
      name: 'Hawaii',
      asciiName: 'Hawaii'
    },
    {
      id: 5879092,
      name: 'Alaska',
      asciiName: 'Alaska'
    },
    {
      id: 6254925,
      name: 'Kentucky',
      asciiName: 'Kentucky'
    },
    {
      id: 6254926,
      name: 'Massachusetts',
      asciiName: 'Massachusetts'
    },
    {
      id: 6254927,
      name: 'Pennsylvania',
      asciiName: 'Pennsylvania'
    },
    {
      id: 6254928,
      name: 'Virginia',
      asciiName: 'Virginia'
    }
  ],
  ZM: [
    {
      id: 896140,
      name: 'Western Province',
      asciiName: 'Western Province'
    },
    {
      id: 896972,
      name: 'Southern Province',
      asciiName: 'Southern Province'
    },
    {
      id: 900594,
      name: 'North-Western Province',
      asciiName: 'North-Western Province'
    },
    {
      id: 900601,
      name: 'Northern Province',
      asciiName: 'Northern Province'
    },
    {
      id: 909129,
      name: 'Lusaka Province',
      asciiName: 'Lusaka Province'
    },
    {
      id: 909845,
      name: 'Luapula Province',
      asciiName: 'Luapula Province'
    },
    {
      id: 917388,
      name: 'Eastern Province',
      asciiName: 'Eastern Province'
    },
    {
      id: 917524,
      name: 'Copperbelt Province',
      asciiName: 'Copperbelt Province'
    },
    {
      id: 921064,
      name: 'Central Province',
      asciiName: 'Central Province'
    }
  ],
  ZW: [
    {
      id: 886119,
      name: 'Midlands Province',
      asciiName: 'Midlands Province'
    },
    {
      id: 886747,
      name: 'Matabeleland South Province',
      asciiName: 'Matabeleland South Province'
    },
    {
      id: 886748,
      name: 'Matabeleland North Province',
      asciiName: 'Matabeleland North Province'
    },
    {
      id: 886761,
      name: 'Masvingo Province',
      asciiName: 'Masvingo Province'
    },
    {
      id: 886841,
      name: 'Mashonaland West Province',
      asciiName: 'Mashonaland West Province'
    },
    {
      id: 886842,
      name: 'Mashonaland East Province',
      asciiName: 'Mashonaland East Province'
    },
    {
      id: 886843,
      name: 'Mashonaland Central Province',
      asciiName: 'Mashonaland Central Province'
    },
    {
      id: 887358,
      name: 'Manicaland Province',
      asciiName: 'Manicaland Province'
    },
    {
      id: 1105843,
      name: 'Bulawayo Province',
      asciiName: 'Bulawayo Province'
    },
    {
      id: 1105844,
      name: 'Harare Province',
      asciiName: 'Harare Province'
    }
  ]
};

export default RegionsAJ;
