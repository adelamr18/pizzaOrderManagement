process.env.NODE_ENV = "test";
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");

chai.use(chaiHttp);
chai.should();
describe("Orders", () => {
  /*
   * Test the /api/orders  get route
   */
  describe("/api/orders  ", () => {
    it("it should GET all the menu pizzas from the database", done => {
      chai
        .request(server)
        .get("/api/orders")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("message");
          res.body.should.have.property("pizzaOrders");
          done();
        });
    });
  });
});
