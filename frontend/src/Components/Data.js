const porfolio = [
    {
        id: 1,
        placeName: 'San Jose',
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
];

export default porfolio;