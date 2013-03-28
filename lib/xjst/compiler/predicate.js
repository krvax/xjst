// Predicate constructor
function Predicate(compiler, expr, value) {
  this.compiler = compiler;

  this.expr = this.compiler.replaceThis(expr);
  this.value = value;

  this.id = compiler.getId(JSON.stringify(expr), expr);
  this.valueId = compiler.getId(JSON.stringify(value), value);
};
exports.Predicate = Predicate;

Predicate.prototype.getScore = function getScore() {
  return this.compiler.getScore(this.id);
};