// Controllers
import {
  deleteBeerByIdController,
  getBeerByIdController,
  updateBeerByIdController
} from './controllers';


export default function handler( req, res ) {
  switch ( req.method ) {
    case 'GET':
      return getBeerByIdController( req, res );
  
    case 'PUT':
      return updateBeerByIdController( req, res );
  
    case 'DELETE':
      return deleteBeerByIdController( req, res );
  
    default:
      return res.status( 400 ).json({
        ok: false,
        message: 'Endpoint not implemented'
      });
  }
}
