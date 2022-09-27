const mongoose = require('mongoose');
const CandidateSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    position: { type: String },
    currentStage: { type: String },
    note: { type: String }
});
const Candidate = mongoose.model('Candidate', CandidateSchema);

module.exports = {
    CandidateSchema,
    Candidate,
}