import mongoose from 'mongoose';
const { Schema } = mongoose;

const jsonSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  body: [String],
});
// module.exports = mongoose.models.JsonBucket;

// module.exports = mongoose.models.JsonBucket || mongoose.model('JsonBucket', jsonSchema);

// export default mongoose.model('JsonBucket', jsonSchema);

let JsonBucket = mongoose.models.JsonBucket || mongoose.model('JsonBucket', jsonSchema);

export default JsonBucket;
