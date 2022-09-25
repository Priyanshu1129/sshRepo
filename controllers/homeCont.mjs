import common_model from '../models/commonmodel.mjs'
import home_model  from '../models/homemodel.mjs';

const home = async(req,res)=>{
        try {
        const section1 = await common_model.findOne({'id':'6326c1acddd526c410582890'});
        const header = section1.divs; 
        const section2 = await home_model.findById('632728f517cd53d7825f5ec1'); 
        const hero = section2.divs;
        const section3 = await home_model.findById('63273a4f866e0584521be18d');
        const feature = section3.divs;
        const section4 = await home_model.findById('632741351e557a851cd0da97');
        const product = section4.divs;
        const section5 = await home_model.findById('6327473104bcfbd912c6d704');
        const new_product = section5.divs;
        const section6 = await common_model.findById('63274daefe85d13b5c18742d');
        const footer = section6.divs;

        res.render('home',{header,hero,feature,product,new_product,footer});
        } catch (error) {
            console.log(error);
        }
}

const form_submission = (req,res)=>{
    console.log(req.body);
    res.redirect('home');
}
export {home,form_submission};