const { Candidate } = require("./candidate.model");

const CandidateResourceOptions = {
    resource: Candidate,
    options: {
        properties: {
            _id: {
                isVisible: false
            },
            email: { isRequired: true, props: { required: true, type: "email" } },
            name: { isRequired: true, props: { required: true } },
            phoneNumber: { isRequired: true, props: { required: true } },
            position: {
                isRequired: true,
                reference: "Position"
            },
            currentStage: {
                isRequired: true,
                availableValues: [
                    { value: "CHECK_CV", label: "Application" },
                    { value: "CV_REJECTED", label: "CV Rejected" },
                    { value: "INTERVIEW", label: "Interview" },
                    { value: "INTERVIEW_REJECTED", label: "Interview Rejected" },
                    { value: "OFFER", label: "Offer" },
                    { value: "HIRED", label: "Hired" },
                ]
            },
            note: {
                type: 'textarea'
            },
        }
    },
}

module.exports = {
    CandidateResourceOptions
}