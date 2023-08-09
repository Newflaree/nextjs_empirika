// Database
// Models
// Utils
import { consoleErrorsHandler } from '@/utils';


/**
 * Service Desciption
 *
 * @param {Object} req - Express request object containing query parameters
 * @returns {Object} - An object containing the total count of products and an array of products
 */
const deleteBeerByIdService = async ( req ) => {
  try {
    return {
      message: 'deleteBeerByIdService'
    }
  } catch ( error ) {
    consoleErrorsHandler( 'deleteBeerByIdService', error );
  }
}

export default deleteBeerByIdService;
