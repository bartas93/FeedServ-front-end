import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'phone'
})

export class PhonePipe implements PipeTransform {
    transform(tel, args) {
        var value = tel.toString().trim();

        var country, number;

        switch (value.length) {
            case 9:
                number = value;
                break;
            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                number = value.slice(3);
                break;

            default:
                return tel;
        }
        number = number.slice(0, 3) + ' ' + number.slice(3, 6) + " " + number.slice(6);

        return country ? country + " " + number : number;
    }
}