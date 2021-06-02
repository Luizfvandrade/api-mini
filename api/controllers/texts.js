module.exports = (app) => {
  const controller = {};

  controller.text_one = async (req, res) => {
    try {
      res.status(200).send('Isso ');
    } catch (error) {
      console.log(error.message)
    }
  }

  controller.text_two = async (req, res) => {
    try {
      res.status(200).send('é um ');
    } catch (error) {
      console.log(error.message)
    }
  }

  controller.text_three = async (req, res) => {
    try {
      res.status(200).send('teste');
    } catch (error) {
      console.log(error.message)
    }
  }

  return controller;
};
