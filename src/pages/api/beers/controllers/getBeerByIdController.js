// Services
import { getBeerByIdService } from '../services';
// Utils
import { consoleErrorsHandler } from '@/utils';


/**
 * Handler description
 *
 * PATH: /api/...
 * AUTH-REQUIRED: false
 * ADMIN-REQUIRED: false
 *
 * @param { Object } req - The HTTP request object.
 * @param { Object } res - The HTTP response object.
 * @returns { void }
 */
const getBeerByIdController = async ( req, res ) => {
  try {
    const {  message } = await getBeerByIdService( req );

    res.status( 200 ).json({
      ok: true,
      message
    });
  
  } catch ( error ) {
    consoleErrorsHandler( 'getBeerByIdController', error );

    res.status( 500 ).json({
      ok: false,
      message: 'Something went wrong. Talking the Admin'
    });
  }
}

export default getBeerByIdController;
