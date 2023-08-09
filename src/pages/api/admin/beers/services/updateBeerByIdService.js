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
const updateBeerByIdService = async ( req ) => {
  try {
    return {
      message: 'updateBeerByIdService'
    }
  } catch ( error ) {
    consoleErrorsHandler( 'updateBeerByIdService', error );
  }
}

export default updateBeerByIdService;
