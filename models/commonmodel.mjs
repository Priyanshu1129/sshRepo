import mongoose from 'mongoose';

const schema = {
   divs: {type:Object, Required:true}
}

const common_shema = new mongoose.Schema(schema);


const common_model = mongoose.model('Common_collection',common_shema); 

// docs = home page sections
const header_section ={
   divs:{
         logo_div:{
            url:'/logo.png'
         },
         nav_div:[
               {
                  name:'Home',
                  url:'home'
               },
               {
                  name:'Shop',
                  url:'shop'
               },
               {
                  name:'Blog',
                  url:'blog'
               },
               {
                  name:'About',
                  url:'about'
               },
               {
                  name:'Contact',
                  url:'contact'
               }
            ]           
         }
}
const footer_section = {
   divs:{
       contact_div:{
           address:'452 Rajbada Indore',
           phone:' (+91)0123456789',
           time:'10:00 - 18:00 , Mon - Sat'
       }
   }
}

   
// documents creation and insertion
const create_insert =async(header_section)=>{
   const header = new common_model(header_section);             
   const footer = new common_model(footer_section);

   const result = await common_model.insertMany();         //<-- document insertion
} 

// create_insert(footer_section);


export default common_model;