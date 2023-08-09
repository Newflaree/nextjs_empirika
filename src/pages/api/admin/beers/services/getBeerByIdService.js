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
const getBeerByIdService = async ( req ) => {
  try {
    return {
      message: 'getBeerByIdService'
    }
  } catch ( error ) {
    consoleErrorsHandler( 'getBeerByIdService', error );
  }
}

export default getBeerByIdService;
