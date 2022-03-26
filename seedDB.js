const Product = require('./models/product');



const products = [
    
    {
        name: 'Iphone 11',
        Oprice: 45000,
        Nprice: 41000,
        desc: "The iPhone 11 is a successor to the iPhone XR and the name represents a reset in Apple's naming strategy to emphasise that this is the 'default' iPhone for everyone. Powered by Apple's own A13 Bionic chip, the iPhone 11 trio are the fastest smartphones you can buy today.",
        image: 'https://demo.codezeel.com/prestashop/PRS16/PRS160380/PRS01/img/p/2/6/26-home_default.jpg',
        seller: 'ashish'
    },

    {
        name: 'Boat Rockerz',
        Oprice: 8800,
        Nprice: 6500,
        desc: "Effortless. Simple. Powerful. With boAt Rockerz Wireless series, get high-fidelity audio paired with premium design to experience sound like no other. From deep, rich bass to clean highs, you’ll hear every note with a new sense of clarity. boAt Rockerz come with premium dynamic drivers tweaked as per boAt’s high quality standards.",
        image: 'https://demo.codezeel.com/prestashop/PRS16/PRS160380/PRS01/img/p/4/5/45-home_default.jpg',
        seller: 'ashish'
    },

    {
        name: 'Sony Lens',
        Oprice: 2000,
        Nprice: 18000,
        desc: "Versatile wide-angle zoom is designed for full-frame Sony E-mount mirrorless cameras, however can also be used with APS-C models where it will provide a 25.5-42mm equivalent focal length range.",
        image: 'https://demo.codezeel.com/prestashop/PRS16/PRS160380/PRS01/img/p/5/7/57-home_default.jpg',
        seller: 'ashish'
    },

    {
        name: 'Amazon Echo',
        Oprice: 200,
        Nprice: 999,
        desc: "Amazon Alexa, also known simply as Alexa, is a virtual assistant technology developed by Amazon, first used in the Amazon Echo smart speaker and the Echo Dot, Echo Studio and Amazon Tap speakers developed by Amazon Lab126.",
        image: 'https://demo.codezeel.com/prestashop/PRS16/PRS160380/PRS01/img/p/7/5/75-home_default.jpg',
        seller: 'ashish'
    },

    {
        name: 'Logitech C270 HD Webcam',
        Oprice: 2500,
        Nprice: 1800,
        desc: "Full HD widescreen video calling: Logitech C270 let you make widescreen video calls in HD 720p at 30fps. The lense with 60-degree field of view covers all of the action.",
        image: 'https://demo.codezeel.com/prestashop/PRS16/PRS160380/PRS01/img/p/6/9/69-home_default.jpg',
        seller: 'ashish'
    },

    {
        name: 'Apple Iphone 12 Pro',
        Oprice: 129000,
        Nprice: 107900,
        desc: "6.1-inch (15.5 cm diagonal) Super Retina XDR display,Ceramic Shield, tougher than any smartphone glass,A14 Bionic chip, the fastest chip ever in a smartphone, Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 4x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording.",
        image: 'https://demo.codezeel.com/prestashop/PRS16/PRS160380/PRS01/img/p/9/3/93-home_default.jpg',
        seller: 'ashish'
    },

    {
        name: 'Apple Watch',
        Oprice: 40000,
        Nprice: 35000,
        desc: "The aluminium case is lightweight and made from 100 per cent recycled aerospace-grade alloy.The Sport Band is made from a durable yet surprisingly soft high-performance fluoroelastomer, with an innovative pin-and-tuck closure.",
        image: 'https://demo.codezeel.com/prestashop/PRS16/PRS160380/PRS01/img/p/3/9/39-home_default.jpg',
        seller: 'ashish'
    },

    {
        name: 'Sony WH-1000XM4',
        Oprice: 30000,
        Nprice: 24000,
        desc: "out this item,Digital noise cancelling: Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation,Voice assistant: Alexa, Google Assistant & Siri enabled (In-built) for voice access to music, information and more. Activate with a simple touch, Speak-to-chat.",
        image: 'https://demo.codezeel.com/prestashop/PRS16/PRS160380/PRS01/img/p/8/1/81-home_default.jpg',
        seller: 'ashish'
    },

    {
        name: 'Sony HD Webcam',
        Oprice: 6500,
        Nprice: 5000,
        desc: "Full HD widescreen video calling: Logitech C270 let you make widescreen video calls in HD 720p at 30fps. The lense with 60-degree field of view covers all of the action.",
        image: 'https://demo.codezeel.com/prestashop/PRS16/PRS160380/PRS01/img/p/8/7/87-home_default.jpg',
        seller: 'ashish'
    }

];









const seedDB = async() => {

    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('DB Seeded');
}




module.exports = seedDB;