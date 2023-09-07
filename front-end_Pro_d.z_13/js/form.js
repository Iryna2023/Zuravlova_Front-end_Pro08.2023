let ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this;//додати рядок
    },

    down: function() {
        this.step--;
        return this;//додати рядок
    },

    showStep: function() { // показывает текущую ступеньку
        alert(this.step);
        return this;//додати рядок
    }
};

ladder.up().up().down().showStep(); // 1