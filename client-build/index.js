var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getConversion from './get-conversion.js';
console.log('hey');
document.getElementById('form').addEventListener('submit', (ev) => __awaiter(void 0, void 0, void 0, function* () {
    ev.preventDefault();
    const input = document.getElementById('value');
    const responseEl = document.getElementById('response');
    const value = parseInt(input.value);
    const response = yield getConversion(value);
    if (response.status === 'OK') {
        responseEl.innerText = response.payload;
    }
    else {
        responseEl.innerText = `ERROR : ${response.payload}`;
    }
}));
