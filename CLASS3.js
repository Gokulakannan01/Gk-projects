let karthi = {
    name: "karthi",
    deept: "mech",
    college: "Anna University",
    marks:  [100,100,100,100,100],
    totalmarks: function () {
    sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
        sum += this.marks[i];
    }
    console.log(sum);
    },
};
karthi.totalmarks();