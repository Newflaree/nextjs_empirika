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
const getBeersService = async ( req ) => {
  try {
    return {
      message: 'getBeersService'
    }
  } catch ( error ) {
    consoleErrorsHandler( 'getBeersService', error );
  }
}

export default getBeersService;
