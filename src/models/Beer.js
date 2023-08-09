import { Schema, model, models } from 'mongoose';


const BeerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  images: [{
    type: String
  }],
  inStock: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  tags: [{
    type: String
  }],
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: {
      values: [ 'bottles', 'barrel' ],
      message: '{VALEU} no es una categoría válida'
    }
  },
  variety: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Beer = models.Beer || model( 'Beer', BeerSchema );

export default Beer;
