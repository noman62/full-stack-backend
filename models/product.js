import mongoose from 'mongoose'
const { Schema } = mongoose
const { ObjectId } = Schema

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    category: {
        id: {
          type: Number,
          required: true
        },
        name: {
          type: String,
          required: true
        }
      },
      unitPrice: {
        type: String,
        required:true
      },
      status: {
        type: String,
        required:true
      },
      date: {
        type: String,
        required:true
      }
  },
  { timestamps: true }
)

export default mongoose.model('product', productSchema)
