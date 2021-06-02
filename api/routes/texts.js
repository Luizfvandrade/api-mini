module.exports = (app) => {
  const controller = app.controllers.texts;

  app.route("/text/1")
    .get(controller.text_one)

  app.route("/text/2")
    .get(controller.text_two)

  app.route("/text/3")
    .get(controller.text_three)
};
