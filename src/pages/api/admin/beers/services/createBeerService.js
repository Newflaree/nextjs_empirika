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
const createBeerService = async ( req ) => {
  try {
    return {
      message: 'createBeerService'
    }
  } catch ( error ) {
    consoleErrorsHandler( 'createBeerService', error );
  }
}

export default createBeerService;
