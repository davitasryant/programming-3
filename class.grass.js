class Grass extends LivingCreature{
   
    mul() {
        let found = this.search(0);
        var foundRand = random(found);

        this.multiplay++;
        if (this.multiplay >= 2 && foundRand) {
            let x = foundRand[0];
            let y = foundRand[1];
            matrix[y][x] = 1
            let gr1 = new Grass(x, y);
            grassArr.push(gr1);
            this.multiplay = 0
        }
    }
}