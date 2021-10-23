'use strict';

/* ----- Getters and Setters ----- */

// It's a feature that is founded on OOP language, we can get or set object's properties
const input = document.getElementById('uniqueId');
const sumbitValue = document.getElementById('sumbitValue');

// Example
let teamInfo = {
    name: {
        /* set teamName(val) {
            if (val === '') {
                this._teamName = 'DEFAULT';
                return;
            }

            this._teamName = val;
        }, */
        get teamName() {
            return this._teamName.toUpperCase();
        },
    },
    formattedTeamName() {
        return this.name.teamName.toUpperCase();
    },
};

// Here, we're trying to reassign a new input value but teamInfo.name only has a getter, so it will throw a error
// only 'use strict'
submitValue.addEventListener('click', () => {
    teamInfo.name.teamName = input.value;
    console.log(teamInfo.name.teamName);
});
