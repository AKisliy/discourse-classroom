export default function () {
  this.route("classroom", function () {
    this.route("classroom-topics", function () {
      this.route("new");
    });
  });
}
