import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class OrdinalPipe implements PipeTransform {
    transform(items: any[], value: any, field: any): any[] {
        if (!items || !value) return [];
        return items.filter(item => {
            return !(item.personalDetails[field].toLowerCase().indexOf(value.toLowerCase()));
        });
    }
}