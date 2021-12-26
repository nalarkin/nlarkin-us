/**
 * Selects random permutations of the provided articles.
 * Used to provide more visually appealing variety for the limited number
 * of articles I have.
 * */
export class VarietyService<T> {
  private _choices: T[][];

  private _remainingChoices: T[][];

  constructor(
    items: T[],
    randomized = true,
    k: number = Math.min(items.length, 4)
  ) {
    if (items.length === 0) {
      throw new Error('Items provided must have at least 1 item.');
    }
    this._choices = this.permuteK(items, k);
    if (randomized) {
      this._choices = this.shuffleArray(this._choices);
    }
    this._remainingChoices = [...this._choices];
  }

  // get all permutations of the provided array that contain K elements
  private permuteK(nums: T[], k: number): T[][] {
    const result = [];
    if (nums.length === 0 || k <= 0) return [];
    if (nums.length === 1) return [nums];
    if (k === 1) return nums.map((val) => [val]);
    for (let i = 0; i < nums.length; i++) {
      const currentNum = nums[i];
      const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
      const remainingNumsPermuted = this.permuteK(remainingNums, k - 1);
      for (let j = 0; j < remainingNumsPermuted.length; j++) {
        result.push([currentNum].concat(remainingNumsPermuted[j]));
      }
    }
    return result;
  }

  // get a single permutation
  // CAUSES SIDE EFFECTS, removes 1 element from the remaining choices
  public getPermutation() {
    const choice = this._remainingChoices.pop();
    if (choice === undefined) throw new Error('Invalid items were provided');
    if (this._remainingChoices.length === 0) {
      this._remainingChoices = [...this._choices];
    }
    return choice;
  }

  get choices() {
    return this._choices;
  }

  private shuffleArray(arr: T[][]) {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}
