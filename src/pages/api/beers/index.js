// Controllers
import { getBeersController } from './controllers';


export default function handler( req, res ) {
  switch ( req.method ) {
    case 'GET':
      return getBeersController( req, res );
  
    default:
      return res.status( 400 ).json({
        ok: false,
        message: 'Endpoint not implemented'
      });
  }
}
