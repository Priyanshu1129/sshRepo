import common_model from '../models/commonmodel.mjs'

const shop = async(req,res)=>{
        try {
        const section1 = await common_model.findOne({'id':'6326c1acddd526c410582890'});
        const header = section1.divs; 
        const section6 = await common_model.findById('63274daefe85d13b5c18742d');
        const footer = section6.divs;
        res.render('shop',{header,footer});
        } catch (error) {
            console.log(error);
        }
}

export{shop}