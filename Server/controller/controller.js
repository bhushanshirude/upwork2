var Model = require("../Model/Model");
var nodemailer = require('nodemailer');
// var fileupload = require("express-fileupload")
var multer = require("multer");
var upload = multer({ dest: 'uploads' });
var config = require("../config/config");

module.exports = {
    getall: function(request, response) {
        Model.find(function(err, data) {
            if (err)
                response.status(500).json({ status: "Error", message: "Error " + err, data: '' })

            else
                response.status(200).json({ status: "Success", message: "Success", data: data })
        })
    },
    getone: function(request, response) {
        Model.findOne({ "_id": request.params.id }, function(err, docs) {
            if (err) {
                response.status(500).json({ status: "Error", message: err, docs: '' });
                return false;
            }
            response.status(200).json({ status: "Success", message: "Success", docs: docs });
        })
    },
    findData: function(request, response) {

        Model.find(request.body, function(err, docs) {
            if (err || !docs) {
                response.status(500).json({ status: "Error", message: err | "User does not exist", docs: '' });
                return false;
            }
            response.status(200).json({ status: "Success", message: "Success", docs: docs });
        })
    },
    findDatas: function(request, response) {

        Model.findOne(request.body, function(err, docs) {
            if (err || !docs) {
                response.status(500).json({ status: "Error", message: err | "User does not exist", docs: '' });
                return false;
            }
            response.status(200).json({ status: "Success", message: "Success", docs: docs });
        })
    },
    create: function(req, response) {

        var newUser = new Model(req.body);

        newUser.save(function(err) {
            if (err) {
                response.status(500).json({ status: "Error", message: err, docs: '' });
                return false;
            }
            var url = config.WEBURL + "home/verify/" + newUser._id;

            var msg = "Hello " + newUser.personalDetails.FirstName + " " + newUser.personalDetails.LastName + ", Here is your verification link.";

            msg += "<a href='" + url + "'>Verify</a > Create Password Thank you.";

            if (sendEmail(newUser.personalDetails.Email, "Verification Email", msg)) {
                response.json({ status: "Email Error", message: "Email could not sent!" });
                return false;
            }
            response.status(200).json({ status: "Success", message: "Success", docs: '' });
        });
    },

    update: function(request, response) {

        Model.findByIdAndUpdate(request.params.id, { $set: request.body },
            function(err, docs) {
                if (err) {
                    response.status(500).json({ status: "Error", message: err, docs: '' });
                    return false;
                }
                response.status(200).json({ status: "Success", message: "Success", docs: docs });
            })
    },

    uploadFile: function(req, res) {
        var filename = req.files;
        let formdata = req.body.frmdata;
        if (!req.files)
            return res.status(400).send('No files were uploaded.');
        let sampleFile = req.files.filename;
        sampleFile.mv("./uploads/profile/" + sampleFile.name, function(err) {
            if (err) {
                return res.status(500).send(err);
            }
            Model.findByIdAndUpdate(req.params.id, { $set: { "personalDetails.profileImage": sampleFile.name } }, { new: true }, function(err, doc) {
                if (err) {
                    return res.status(500).json({ status: "Error", message: err, docs: '' });
                }
                res.status(200).json({ status: "Success", message: "Success", docs: doc });
            })
        });
    },

    forgotPassword: function(request, response) {

        Model.findOne(request.body, function(err, doc) {
            if (err || !doc) {
                response.status(500).json({ status: "Error", message: err | "User does not exist", docs: '' });
                return false;
            }
            // if user found
            var email = doc.personalDetails.Email;
            var url = config.WEBURL + "home/forgot/" + doc._id;
            var msg = "Dear " + doc.personalDetails.FirstName + ", Here is your password recovery link: <br>";
            msg += "<a href='" + url + "'>Recover</a>";
            if (sendEmail(email, "Forgot Password Recovery", msg)) {
                response.status(500).json({ status: "Error", message: "Mail count not be sent! Please try after some time", docs: "" });
                return false;
            }
            response.status(200).json({ status: "Ok", message: "Mail has been sent!", docs: "" });
        })
    },

    send: function(request, response) {
        // console.log("==============Status===============", request.params.id)
        Model.findOne({ _id: request.params.id },
            function(err, doc) {
                if (err || !doc) {
                    response.status(500).json({ status: "Error", message: err | "User does not exist", docs: '' });
                    return false;
                }
                // if user found
                var email = doc.personalDetails.Email;
                var url = config.WEBURL;
                var msg = "Hello " + doc.personalDetails.FirstName + ", you are select in second round you can Accept or Reject Invitation of second Round.<br>";
                msg += "<a href='" + url + "'>Accpet</a> <br>";
                msg += "<a href='" + url + "'>Reject</a> <br>";
                if (sendEmail(email, "status", msg)) {
                    response.status(500).json({ status: "Error", message: "Mail count not be sent! Please try after some time", docs: "" });
                    return false;
                }
                response.status(200).json({ status: "Ok", message: "Mail has been sent!", docs: "" });
            })
    },
}

function sendEmail(to, sub, msg) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'projectfinal81@gmail.com',
            pass: 'project1'
        }
    });
    var mailOptions = {
        from: 'projectfinal81@gmail.com',
        to: to,
        subject: sub,
        html: msg
    };

    transporter.sendMail(mailOptions, function(err) {
        if (err) {
            return false;
        }
        return true;
    });
}