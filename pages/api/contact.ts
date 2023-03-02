export default function handler(req, res) {
    if (req.method === 'POST') {
        // save to db
        console.log(req.body)
        res.json({message:'ok'})
    }    
}