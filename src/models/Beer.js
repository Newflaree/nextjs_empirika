import { Schema, model, models } from 'mongoose';


const BeerSchema = new Schema({
  name: {
    type: String,
    required: true
  },

}, {
  timestamps: true
});

const Beer = models.Beer || model( 'Beer', BeerSchema );

export default Beer;
