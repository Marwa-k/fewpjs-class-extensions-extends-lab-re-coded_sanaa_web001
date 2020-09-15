// Your code here

<<<<<<< HEAD
class Polygon {
  constructor(sides) {
    this.sides = sides;
     this.count = this.sides.length;
  }
  get countSides(){
    return this.sides.length
  }
  get perimeter(){
    let sum = 0
    for (let i = 0; i < this.sides.length; i++) {
      sum += this.sides[i]
    }
    return sum
  }
}

class Triangle extends Polygon
{
   get isValid(){
    if (this.count === 3) {
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      if ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
        { return true } 
        else { return false }
      } 
    else
    {
      return false
    }
  }
  
}


class Square extends Polygon
{
   get isValid(){
    if (this.count === 4) 
    {
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      let side4 = this.sides[3]
      if ((side1 === side2) && (side2 === side3) && (side3 === side4))
        { return true }
        else { return false }
    } 
    else { return false}
  }

  get area(){
    return this.sides[0] * this.sides[0]
  }
  
=======
class Polygon{
    constructor(sidesOfShape){
        this.sidesOfShape = sidesOfShape;
    }

    get getCount(){
        return this.sidesOfShape.length;
    }

    get perimeter(){
        let sum = 0;
        for(const num of this.sidesOfShape){
            sum += num;
        }
        return sum;
    }
>>>>>>> 9af091ad1c37f0c14e29253ced7edd56b7f0ef76
}