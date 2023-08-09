// Database
// Models

import {consoleErrorsHandler} from "@/utils";


/**
 * Service Desciption
 *
 * @param {Object} req - Express request object containing query parameters
 * @returns {Object} - An object containing the total count of products and an array of products
 */
const getBeerByIdCService = async ( req ) => {
  const { id } = req.query;

  try {
    return {
      id,
      message: 'getBeerByIdCService'
    }
  } catch ( error ) {
    consoleErrorsHandler( 'getBeerByIdCService', error );
  }
}

export default getBeerByIdCService;
