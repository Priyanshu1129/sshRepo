import mongoose from 'mongoose'

const schema = {
    divs:{type:Object , Required:true}
}

const home_schema = new mongoose.Schema(schema);

const home_model = mongoose.model('Home_collection', home_schema);


const hero_section = {
    divs:{
        bg_img_div:{
            url:'./hero4.png'
        },
        text_div:{
            first:'Trade in Offer',
            second:'Super value deals',
            third:'On All Offer',
            fourth:'save more with coupons & upto 60% off',
        }
    }
}

const feature_section = {
    divs:{
        feature_div:[
        {
            url:'/features/f1.png',
            heading:'Free Shiping',
            heading_bg:'from-sky-300'
        },
        {
            url:'/features/f2.png',
            heading:'Online Order',
            heading_bg:'from-pink-300'
        },
        {
            url:'/features/f3.png',
            heading:'Save Money',
            heading_bg:'from-green-300'
        },
        {
            url:'/features/f4.png',
            heading:'Promotions',
            heading_bg:'from-blue-500'
        },
        {
            url:'/features/f5.png',
            heading:'Happy Sell',
            heading_bg:'from-purple-400'
        },
        {
            url:'/features/f6.png',
            heading:'24/7 Support',
            heading_bg:'from-orange-300'
        }
    ]
    }
}

const product_section = {
    divs:{
        heading_div:{
            first:'Featured Products',
            second:'Summer Collection Modern Design'
        },
        product_div:[
            {
                url:'/products/f1.jpg',
                about:'Cartoon Astraunout T-Shirts',
                price:'$78'
            },
            {
                url:'/products/f2.jpg',
                about:'Cartoon Astraunout T-Shirts',
                price:'$78'
            },
            {
                url:'/products/f3.jpg',
                about:'Cartoon Astraunout T-Shirts',
                price:'$78'
            },
            {
                url:'/products/f4.jpg',
                about:'Cartoon Astraunout T-Shirts',
                price:'$78'
            },
            {
                url:'/products/f5.jpg',
                about:'Cartoon Astraunout T-Shirts',
                price:'$78'
            },
            {
                url:'/products/f6.jpg',
                about:'Cartoon Astraunout T-Shirts',
                price:'$78'
            },
            {
                url:'/products/f7.jpg',
                about:'Cartoon Astraunout T-Shirts',
                price:'$78'
            },
            {
                url:'/products/f8.jpg',
                about:'Cartoon Astraunout T-Shirts',
                price:'$78'
            },
            {
                url:'/products/f1.jpg',
                about:'Cartoon Astraunout T-Shirts',
                price:'$78'
            },
            {
                url:'/products/f2.jpg',
                about:'Cartoon Astraunout T-Shirts',
                price:'$78'
            }
        ]
    }
}

const new_product_section = {
    divs:{
        heading_div:{
            first:'New Arrivals',
            second:'Summer Collection New Modern Design'
        },
        product_div:[
            {
                url:'/products/n1.jpg',
                about:'Cartoon Astraunout T-Shirts',
                price:'$80'
            },
            {
                url:'/products/f2.jpg',
                about:'Cartoon Astraunout T-Shirts',
                price:'$80'
            },
            {
                url:'/products/n3.jpg',
                about:'Cartoon Astraunout T-Shirts',
                price:'$80'
            },
            {
                url:'/products/n4.jpg',
                about:'Cartoon Astraunout T-Shirts',
                price:'$80'
            },
            {
                url:'/products/n5.jpg',
                about:'Cartoon Astraunout T-Shirts',
                price:'$80'
            },
            {
                url:'/products/n6.jpg',
                about:'Cartoon Astraunout T-Shirts',
                price:'$80'
            },
            {
                url:'/products/n7.jpg',
                about:'Cartoon Astraunout T-Shirts',
                price:'$80'
            },
            {
                url:'/products/n8.jpg',
                about:'Cartoon Astraunout T-Shirts',
                price:'$80'
            },
        ]
    }
}


const create_insert = async(hero_section)=>{
    const hero = new home_model(hero_section);
    const feature = new home_model(feature_section);
    const product = new home_model(product_section);
    const new_product = new home_model(new_product_section);

    const result = await home_model.insertMany();

}
// create_insert();

export default home_model
