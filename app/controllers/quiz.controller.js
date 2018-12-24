const Quiz = require('../quizModel/quiz.model')

exports.create = (req, res) => {
    if (!req.body.title) {
        return res.status(400).send({
            message: "Quiz content can not be empty" || "Untitled Quiz"
        });
    }

    const quiz = new Quiz({
        id: req.body._id,
        title: req.body.title,
        type: req.body.type,
        optionsArray: req.body.optionsArray,
        created_at:new Date()
    });

    quiz.save()
        .then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occur while creating quiz"
            })
        })
};

exports.findAll = (req, res) => {
    Quiz.find().sort({created_at:-1})
        .then(quizes => {
            res.send(quizes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "some error occur while retreiving quizes"
            })
        })
};

exports.quizUpdate= (req, res) => {
    var option = req.body.optionsArray
    var title = req.body.title
    var type = req.body.type
    Quiz.findByIdAndUpdate(req.body._id,{
        $set:{
            optionsArray: option,
            type:type,
            title:title
        }
    }).then(quizes => {
        if(!quizes){
            return res.status(404).send({
                message:" Quiz not found with id " + req.body._id
            })
        }
        res.send(quizes);
    }).catch(err => {
      if(err.kind==='ObjectId'){
          return res.status(404).send({
              message:"Quiz not found with id" + req.body._id
          })     
     }

      return res.status(500).send({
            message: err.message || " some error occur while retreiving quizes "
        });
    }) ;      
};

exports.findOne = (req, res) => {
    Quiz.findById(req.params.quizId)
        .then(quiz => {
            if (!quiz) {
                return res.status(404).send({
                    message: "Quiz not found with id" + req.params.quizId
                });
            }
            else {
                res.send(quiz);
            }

        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Quiz not found with Id" + req.params.quizId
                });
            }
            return res.status(500).send({
                message: "Error retrieving quiz with id" + req.params.quizId
            })
        })
};

exports.delete = (req, res) => {
    Quiz.findByIdAndRemove(req.params.quizId)
        .then(quiz => {
            if (!quiz) {
                return res.status(404).send({
                    message: "Quiz not found with Id" + req.params.quizId
                });
            }
            res.send({ message: "Quiz deleted successfully " });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'Not Found') {
                return res.status(404).send({
                    message: "Note not found with id" + req.params.quizId
                });
            }
            return res.status(500).send({
                message: "Could not delete quiz with Id" + req.params.quizId
            })
        })
}




