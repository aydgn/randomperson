import { isim } from "/isim.js";
import { soy } from "./soy.js";
import { meslek } from "./meslek.js"
import { sehir } from "./sehir.js"

const nameOutput = document.querySelector(".nameOutput");
const jobOutput = document.querySelector(".jobOutput");
const birthOutput = document.querySelector(".birthOutput");
const button = document.querySelector("button").addEventListener("click", () => {
    random();
})
window.onload = () => {
    random();
};

const random = () => {
    nameOutput.innerHTML = `${randomName()} ${randomSurname()}`;
    jobOutput.innerHTML = randomJob();
    birthOutput.innerHTML = randomBirth();
}

const randomName = () => {
    const randomNameOutput = isim[Math.floor(Math.random() * isim.length)];
    return randomNameOutput;
}

const randomSurname = () => {
    const randomSurnameOutput = soy[Math.floor(Math.random() * soy.length)];
    return randomSurnameOutput;
}
const randomJob = () => {
    const randomJobOutput = meslek[Math.floor(Math.random() * meslek.length)];
    return randomJobOutput;
}

const randomBirth = () => {
    const randomBirthOutput = sehir[Math.floor(Math.random() * sehir.length)];
    return randomBirthOutput;
}