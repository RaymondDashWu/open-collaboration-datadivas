const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date },
  category: { type: String, required: true },
  title: { type: String, required: true },
  url: { type: String, required: false },
  summary: { type: String, required: false },
  projectImg: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: false },
});

ProjectSchema.pre('save', function (next) {
  // SET createdAt AND updatedAt
  const now = new Date();
  this.updatedAt = now;

  if (!this.createdAt) {
    this.createdAt = now;
  }

  next();
});

module.exports = mongoose.model('Project', ProjectSchema);
