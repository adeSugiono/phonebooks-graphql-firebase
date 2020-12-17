const firebase = require("firebase");

const getPhone = () => {
    const phoneReference = firebase.database().ref("/phonebook/");
    return (new Promise((resolve, reject) => {
        phoneReference.on("value", function (snapshot) {
            const folders = snapshot.val();
            if (folders === null) {
                resolve([]);
            } else {
                const data = Object.keys(folders).map(o => Object.assign({ id: o }, folders[o]));
                resolve(data);
            }
            phoneReference.off("value");
        }, (errorObject) => {
            console.log("The read failed: " + errorObject.code);
            reject("The read failed: " + errorObject.code);
        });
    }));
}

//Create new instance
const createPhone = (user) => {
    const referencePath = `/Users/${user.id}/`;
    const phoneReference = firebase.database().ref(referencePath);
    return (new Promise((resolve, reject) => {
        phoneReference.set({ name: user.name, phone: user.phone }, (error) => {
            if (error) {
                reject("Data could not be deleted." + error);
            } else {
                resolve(user);
            }
        });
    }));
}

//Update existing instance
const updatePhone = (user) => {
    var referencePath = `/phonebook/${user.id}/`;
    var phoneReference = firebase.database().ref(referencePath);
    return (new Promise((resolve, reject) => {
        phoneReference.update({ name: user.name, phone: user.phone }, (error) => {
            if (error) {
                reject("Data could not be deleted." + error);
            } else {
                resolve(user);
            }
        });
    }));
}

//Delete an instance
const deletePhone = (user) => {
    var referencePath = `/phonebook/${user.id}/`;
    var phoneReference = firebase.database().ref(referencePath);
    return (new Promise((resolve, reject) => {
        phoneReference.remove((error) => {
            if (error) {
                reject("Data could not be deleted." + error);
            } else {
                resolve(user);
            }
        })
    }));
}

module.exports = { getPhone, createPhone, updatePhone, deletePhone }