import {consoleErrorsHandler, consoleSuccessHandler} from '@/utils';
import mongoose from 'mongoose';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongoConnection = {
    isConnected: 0
}

export const connect = async() => {
  try {
    if ( mongoConnection.isConnected ) {
      consoleSuccessHandler( 'databaseConnectConfig', 'Now we are connected' );
      return;
    }

    if ( mongoose.connections.length > 0 ) {
      mongoConnection.isConnected = mongoose.connections[0].readyState;

      if ( mongoConnection.isConnected === 1 ) {
        consoleSuccessHandler( 'databaseConnectConfig', 'Using previous connction' );
        return;
      }

      await mongoose.disconnect();
    }

    await mongoose.connect( process.env.MONGO_CNN_LOCAL || '');
    mongoConnection.isConnected = 1;

    consoleSuccessHandler( 'databaseConnectConfig', `Database ${ 'ONLINE'.green }` );

  } catch ( error ) {
    await mongoose.disconnect();
    consoleErrorsHandler( 'databaseConnectConfig', error );
  }
}

export const disconnect = async() => {
  try {
    if ( process.env.NODE_ENV === 'development' ) return;

    if ( mongoConnection.isConnected === 0 ) return;

    await mongoose.disconnect();
    mongoConnection.isConnected = 0;

    consoleSuccessHandler( 'databaseDisconnectConfig', 'Disconnected from MongoDB' );

  } catch ( error ) {
    await mongoose.disconnect();
    consoleErrorsHandler( 'databaseDisconnectConfig', error );
  }
}
