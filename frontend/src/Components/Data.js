const porfolio = [
    {
        id: 1,
        placeName: 'San Jose',
        img:require('../img/img-sub/Porfolio/1.png'),
        service: [
            {
                id: 1,
                name: 'ADU',
                firstImg: require('../img/sanjoseproject/ADU/1.jpeg'),
                folderUrl: require.context('../img/sanjoseproject/ADU/' , false, /\.(png|jpg|jpeg)$/)
            },
            {
                id: 2,
                name: 'Duplex',
                firstImg: require('../img/sanjoseproject/duplex/1.jpeg'),
                folderUrl: require.context('../img/sanjoseproject/duplex/' , false, /\.(png|jpg|jpeg)$/)
            },
            {
                id: 3,
                name: 'Gara Convert Project 1',
                firstImg: require('../img/sanjoseproject/Gara_Convert/1.jpeg'),
                folderUrl: require.context('../img/sanjoseproject/Gara_Convert/' , false, /\.(png|jpg|jpeg)$/)
            },
            {
                id: 4,
                name: 'Gara Convert Project 2',
                firstImg: require('../img/sanjoseproject/Gara_Convert1/1.jpeg'),
                folderUrl: require.context('../img/sanjoseproject/Gara_Convert1/' , false, /\.(png|jpg|jpeg)$/)
            },
            {
                id: 5,
                name: 'Studio',
                firstImg: require('../img/sanjoseproject/Studio/1.jpeg'),
                folderUrl: require.context('../img/sanjoseproject/Studio/' , false, /\.(png|jpg|jpeg)$/)
            },
        ]
    },
    {
        id: 2,
        placeName: 'Fremont',
        img:require('../img/img-sub/Porfolio/2.png'),
        service: [
            {
                id: 1,
                name: 'ADU',
                firstImg: require('../img/fremontproject/ADU/1.png'),
                folderUrl: require.context('../img/fremontproject/ADU/' , false, /\.(png|jpg|jpeg|JPG)$/)
            },
        ]
    },
    {
        id: 3,
        placeName: '3D Project',
        img:require('../img/img-sub/Porfolio/3.png'),
        service: [
            {
                id: 1,
                name: 'Atwood',
                firstImg: require('../img/3DProject/ATWOOD/3.png'),
                folderUrl: require.context('../img/3DProject/ATWOOD/' , false, /\.(png|jpg|jpeg|JPG)$/)
            },
            {
                id: 2,
                name: 'Locust',
                firstImg: require('../img/3DProject/LOCUST/Locust - Front_.png'),
                folderUrl: require.context('../img/3DProject/LOCUST/' , false, /\.(png|jpg|jpeg|JPG)$/)
            },
            {
                id: 3,
                name: 'Othello',
                firstImg: require('../img/3DProject/OTHELLO/Othello - Perspective Side.png'),
                folderUrl: require.context('../img/3DProject/OTHELLO/' , false, /\.(png|jpg|jpeg|JPG)$/)
            },
            {
                id: 4,
                name: 'Plumas',
                firstImg: require('../img/3DProject/PLUMAS/Plumas - main house.png'),
                folderUrl: require.context('../img/3DProject/PLUMAS/' , false, /\.(png|jpg|jpeg|JPG)$/)
            },
            {
                id: 5,
                name: 'PROVO',
                firstImg: require('../img/3DProject/PROVO/Provo - Perspective Front.png'),
                folderUrl: require.context('../img/3DProject/PROVO/' , false, /\.(png|jpg|jpeg|JPG)$/)
            },
            {
                id: 6,
                name: 'Syliva',
                firstImg: require('../img/3DProject/SYLIVA/Sylvia - Perspective Front.png'),
                folderUrl: require.context('../img/3DProject/SYLIVA/' , false, /\.(png|jpg|jpeg|JPG)$/)
            },
        ]
    },
    {
        id: 4,
        placeName: 'Sacramento',
        img:require('../img/img-sub/Porfolio/4.png'),
        service: [
            {
                id: 1,
                name: 'New House',
                firstImg: require('../img/Sacramento/2.png'),
                folderUrl: require.context('../img/Sacramento/' , false, /\.(png|jpg|jpeg|JPG)$/)
            },
        ]
    },
    {
        id: 5,
        placeName: 'Union city',
        img:require('../img/img-sub/Porfolio/5.png'),
        service: [
            {
                id: 1,
                name: 'Adu',
                firstImg: require('../img/unioncity/Adu/2.png'),
                folderUrl: require.context('../img/unioncity/Adu/' , false, /\.(png|jpg|jpeg|JPG)$/)
            },
        ]
    },
    {
        id: 6,
        placeName: 'Yerba Buena',
        img:require('../img/img-sub/Porfolio/6.png'),
        service: [
            {
                id: 1,
                name: 'Adu',
                firstImg: require('../img/YerbaCity/1.jpg'),
                folderUrl: require.context('../img/YerbaCity/' , false, /\.(png|jpg|jpeg|JPG)$/)
            },
        ]
    },
    {
        id: 7,
        placeName: 'Gilroy',
        img:require('../img/img-sub/Porfolio/7.png'),
        service: [
            {
                id: 1,
                name: 'Adu',
                firstImg: require('../img/gilroy/1.png'),
                folderUrl: require.context('../img/gilroy/' , false, /\.(png|jpg|jpeg|JPG)$/)
            },
        ]
    },
];

export default porfolio;