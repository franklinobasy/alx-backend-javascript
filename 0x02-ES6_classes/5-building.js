class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    this.sqft = sqft;
  }

  /**
   * @param {Number} sqft
   */
  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft nust be a number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}

export default Building;
