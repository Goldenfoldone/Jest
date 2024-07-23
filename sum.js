function drinkFlavor(flavor) {
    if (flavor == 'octopus') {
      throw new Error('yuck, octopus flavor');
    }
  }

module.exports = drinkFlavor;