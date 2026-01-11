const homeRoute = (req, res) => {
  res.send("Koji Hirata");
};

const mariRoute = (req, res) => {
  res.send("Mari Hirata");
};

module.exports = {
    homeRoute,
    mariRoute,
}