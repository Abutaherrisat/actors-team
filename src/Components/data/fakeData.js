const actors = [
    {
        name : 'Amitabh Bachchan ',
        religion: 'hindhu',
        age:78,
        country:'india',
        salary:1000000,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56b7W1gRgQ6fsoP-kobo0Dfc6M5-8DrqSL7cOKI9B&usqp=CAE&s',
        faceBook :'https://www.facebook.com/amitabhbachchan',
        twitter : 'https://twitter.com/SrBachchan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
    },
    {
        name : 'Shah Rukh Khan ',
        religion: 'Muslim',
        age:55,
        country:'india',
        salary:500000,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQusaGWdvAfW0PC-BNwGMR29BhLfMFnTLVq_g&usqp=CAU',
        faceBook :'https://www.facebook.com/IamSRK',
        twitter :'https://twitter.com/iamsrk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
    },
    {
        name : 'Salman Khan ',
        religion: 'Muslim',
        age:55,
        country:'india',
        salary:550000,
       img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9M1QK0yMpGEHppSEhX0BoYnM080_vXEOANg&usqp=CAU',
        faceBook :'https://www.facebook.com/BeingSalmanKhan',
        twitter:'https://twitter.com/BeingSalmanKhan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
    },
    {
        name : 'Amir Khan ',
        religion: 'Muslim',
        age:56,
        country:'india',
        salary:10000,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkLgHIEpHtMfYu7SorwUVlk-g0RmSXre1bBw&usqp=CAU',
        faceBook :'https://www.facebook.com/profile.php?id=100063930361375',
        twitter :'https://twitter.com/AKofficialTeam?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
    },
    {
        name : 'Prabhas',
        religion: 'hindhu',
        age:41,
        country:'india',
        salary:1500000,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzx5H1WfKMGB77rVTqbd0chL_a2rbX6W-NEg&usqp=CAU',
        faceBook :'https://www.facebook.com/ActorPrabhas',
        twitter : 'https://twitter.com/PrabhasRaju?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
    },
    {
        name : 'vijay',
        religion: 'hindhu',
        age:50,
        country:'india',
        salary:200000,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBfeBY4veklbqpecyfAa9A-uWAFyRq53EtA&usqp=CAU',
        faceBook :'https://www.facebook.com/VijaySethupathi.Official',
        twitter : 'https://twitter.com/actorvijay?lang=en'
    },
    {
        name : 'Anil Khapoor',
        religion: 'hindhu',
        age:78,
        country:'india',
        salary:1200000,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS77EoHznpiWymQDqcB8yG88YH7yHGUD2XaUA&usqp=CAU',
        faceBook :'https://www.facebook.com/anilskapoor',
        twitter : 'https://twitter.com/AnilKapoor?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
    },
    {
        name : 'Mahesh Babu ',
        religion: 'hindhu',
        age:46,
        country:'india',
        salary:3000000,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVtL9CQl94GFZ8kk-sO8EWgiG6sD6-epgfqA&usqp=CAU',
        faceBook :'https://www.facebook.com/urstrulyMahesh',
        twitter : 'https://twitter.com/urstrulyMahesh?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
    },
    {
        name : 'Allu Arjun',
        religion: 'hindhu',
        age:46,
        country:'india',
        salary:1000000,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxrReBw20AKHk7jhoErpuTbNdvb1pUCOjh-A&usqp=CAU',
        faceBook :'https://www.facebook.com/AlluArjun',
        twitter : 'https://twitter.com/alluarjun?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
    },
    {
        name : 'Varun Dawan',
        religion: 'hindhu',
        age:34,
        country:'india',
        salary:100000,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAgD8Qa17wb4wHLRvLqjmBVrJoh1SNUIEp_A&usqp=CAU',
        faceBook :'https://www.facebook.com/VarunDhawan.co',
        twitter : 'https://twitter.com/Varun_dvn?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
    },
    {
        name : 'Govindho',
        religion: 'hindhu',
        age:57,
        country:'india',
        salary:300000,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlqSd96bAszp36hox-2iZOKL0KvlRnXbQIQ&usqp=CAU',
        faceBook :'https://www.facebook.com/HeroNumber1.Govinda',
        twitter : 'https://twitter.com/govindaahuja21'
    },
    {
        name : 'Tiger Shroff ',
        religion: 'hindhu',
        age:34,
        country:'india',
        salary:200000,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rmt9oS-Iwoxj0YCrFK9qyC5dIlAOjyGkHA&usqp=CAU',
        faceBook :'https://www.facebook.com/TigerShroff',
        twitter: 'https://twitter.com/iTIGERSHROFF?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
    },
]

export default actors;